import $ from 'jquery';

export default function productOptionGraphql(context) {
    const selectorAttrName = "attr-cards-ids";
    const { graphql_token, currency_selector } = context;
    const active_currency_id = currency_selector.active_currency_id;
    const active_currency_code = currency_selector.active_currency_code;
    
    // Stock threshold settings
    const LOW_STOCK_THRESHOLD = 10;

    const setProductOptionPlp = () => {
        const productIds = [];
        const cardSelector = $("body [" + selectorAttrName + "]");
        if (cardSelector.length > 0) {
            cardSelector.each(function() {
                const attr_card_id = $(this).attr(selectorAttrName);
                productIds.push(attr_card_id);
            });
        }
        if (productIds.length > 0) {
            getOptionsWithGraphql(productIds);
        }
    };

    const getOptionsWithGraphql = (productIds) => {
        if (graphql_token && graphql_token !== "undefined") {
            fetch("/graphql?setCurrencyId=" + active_currency_id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + graphql_token
                },
                body: JSON.stringify({
                    query: `query ExtendedProductsById {
                        site {
                            products(entityIds: [${productIds}], first: 50) {
                                edges {
                                    node {
                                        entityId
                                        name
                                        path
                                        sku
                                        inventory {
                                            isInStock
                                            aggregated {
                                                availableToSell
                                                warningLevel
                                            }
                                        }
                                        productOptions(first: 50) {
                                            edges {
                                                node {
                                                    entityId
                                                    displayName
                                                    isRequired
                                                    isVariantOption
                                                    ... on MultipleChoiceOption {
                                                        displayStyle
                                                        values(first: 50) {
                                                            edges {
                                                                node {
                                                                    entityId
                                                                    label
                                                                    isDefault
                                                                    ... on SwatchOptionValue {
                                                                        hexColors
                                                                        imageUrl(width: 200)
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }`
                }),
            })
            .then(res => res.json())
            .then((res) => {
                if (res.data) {
                    const productsGq = res.data.site.products.edges;
                    productsGq.length > 0 && productsGq.map((list) => {
                        const obj = list.node;
                        const entityId = obj.entityId;
                        const path = obj.path;
                        const productOptions = obj.productOptions.edges;
                        
                        // TEMPORARILY show product-level SKU (will be updated with variant SKU)
                        $(`[${selectorAttrName}="${entityId}"] .card-sku`).html(`SKU: ${obj.sku}`);
                        
                        // Check if product has variant options
                        const hasVariantOptions = productOptions.length > 0 && 
                            productOptions.some(po => po.node.isVariantOption);
                        
                        // If product has no variant options, show product-level stock
                        if (!hasVariantOptions) {
                            updateStockDisplay(entityId, obj.inventory);
                        } else {
                            // For products with variants, we'll get default variant stock and SKU
                            getDefaultVariantStockAndSKU(entityId, productOptions, obj.inventory, obj.sku);
                        }
                        
                        // Check if product has any variant options for UI
                        let hasSwatchOptions = false;
                        let hasSizeOptions = false;
                        
                        // Handle product options UI
                        productOptions.length > 0 && productOptions.map((poList) => {
                            const po_obj = poList.node;
                            const po_entityId = po_obj.entityId;
                            const po_displayStyle = po_obj.displayStyle;
                            
                            if (po_displayStyle === "Swatch") {
                                const po_values = po_obj.values.edges;
                                if (po_values.length > 0) {
                                    hasSwatchOptions = true;
                                    let optionHtml = `<div class="custom-swatch-form-field">`;
                                    let otherOptCount = 0;
                                    po_values.map((po_list, opi) => {
                                        const vl_obj = po_list.node;
                                        const vl_entityId = vl_obj.entityId;
                                        const vl_label = vl_obj.label;
                                        const vl_hexColors = vl_obj.hexColors;
                                        const imageUrl = vl_obj.imageUrl;
                                        const isDefaultChecked = vl_obj.isDefault;
                                        
                                        if (opi < 5) {
                                            if (vl_hexColors?.length > 0) {
                                                optionHtml += `<div class="option-swatch color-${vl_hexColors.length} ${isDefaultChecked ? 'active' : ''}">`;
                                                vl_hexColors.map((hex) => {
                                                    optionHtml += `<label class="label-swatch" data-pid="${entityId}" name="${po_entityId}" value="${vl_entityId}" style="background-color: ${hex}" title="${vl_label}">${vl_label}</label>`;
                                                });
                                                optionHtml += `</div>`;
                                            } else {
                                                optionHtml += `<div class="option-swatch color-pattern ${isDefaultChecked ? 'active' : ''}">`;
                                                optionHtml += `<label class="label-swatch" data-pid="${entityId}" name="${po_entityId}" value="${vl_entityId}" title="${vl_label}" style="background-image: url('${imageUrl}');background-size: cover;background-repeat: no-repeat;">${vl_label}</label>`;
                                                optionHtml += `</div>`;
                                            }
                                        } else {
                                            otherOptCount++;
                                        }
                                    });
                                    optionHtml += `<input style="display: none;" type="text" value="" id="opt_obj_${entityId}" /> </div>`;
                                    let otherOptHtml = "";
                                    if (otherOptCount > 0) {
                                        otherOptHtml = `<a href="${path}" class="showmore">+${otherOptCount}</a>`;
                                    }
                                    $('[' + selectorAttrName + '="' + entityId + '"] .card-product-swatch').html(optionHtml);
                                    $('[' + selectorAttrName + '="' + entityId + '"] .card-product-swatch .custom-swatch-form-field').append(otherOptHtml);
                                }
                            } else if (po_displayStyle === "RectangleBoxes") {
                                const sizeOptions = po_obj.values.edges;
                                if (sizeOptions.length > 0) {
                                    hasSizeOptions = true;
                                    let sizeHtml = `<div class="custom-size-options">`;
                                    sizeOptions.map((sizeOption) => {
                                        const size = sizeOption.node;
                                        sizeHtml += `<button class="size-option ${size.isDefault ? 'active' : ''}" data-pid="${entityId}" name="${po_entityId}" value="${size.entityId}"> ${size.label} </button>`;
                                    });
                                    sizeHtml += `</div>`;
                                    $('[' + selectorAttrName + '="' + entityId + '"] .card-product-size').html(sizeHtml);
                                }
                            }
                        });
                        
                        // Hide containers if no options available
                        if (!hasSwatchOptions) {
                            $('[' + selectorAttrName + '="' + entityId + '"] .card-product-swatch').hide();
                        }
                        if (!hasSizeOptions) {
                            $('[' + selectorAttrName + '="' + entityId + '"] .card-product-size').hide();
                        }
                    });
                }
            });
        }
    };

    // Function to get default variant stock and SKU for products with variants
    const getDefaultVariantStockAndSKU = (productId, productOptions, productInventory, productSKU) => {
        // Find default option values
        const defaultOptions = [];
        
        productOptions.forEach(po => {
            const option = po.node;
            if (option.values && option.values.edges) {
                const defaultValue = option.values.edges.find(val => val.node.isDefault);
                if (defaultValue) {
                    defaultOptions.push({
                        optionEntityId: parseInt(option.entityId),
                        valueEntityId: parseInt(defaultValue.node.entityId)
                    });
                }
            }
        });
        
        if (defaultOptions.length > 0) {
            // Get stock and SKU for default variant
            const optionValueIdsString = defaultOptions.map(opt => 
                `{optionEntityId: ${opt.optionEntityId}, valueEntityId: ${opt.valueEntityId}}`
            ).join(',');
            
            fetch("/graphql?setCurrencyId=" + active_currency_id, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + graphql_token
                },
                body: JSON.stringify({
                    query: `query DefaultVariantStockSKU {
                        site {
                            productWithSelectedOptions: product(
                                entityId: ${productId}
                                optionValueIds: [${optionValueIdsString}]
                            ) {
                                sku
                                inventory {
                                    isInStock
                                    aggregated {
                                        availableToSell
                                        warningLevel
                                    }
                                }
                            }
                        }
                    }`
                }),
            })
            .then(res => res.json())
            .then((res) => {
                if (res.data && res.data.site.productWithSelectedOptions) {
                    const variantData = res.data.site.productWithSelectedOptions;
                    const variantInventory = variantData.inventory;
                    const variantSKU = variantData.sku;
                    
                    // Update SKU with variant SKU
                    updateSKUDisplay(productId, variantSKU);
                    // Update stock display
                    updateStockDisplay(productId, variantInventory);
                } else {
                    // Fallback to product inventory and SKU if variant data not available
                    updateSKUDisplay(productId, productSKU);
                    updateStockDisplay(productId, productInventory);
                }
            })
            .catch(() => {
                // Fallback to product inventory and SKU on error
                updateSKUDisplay(productId, productSKU);
                updateStockDisplay(productId, productInventory);
            });
        } else {
            // If no default options found, show product inventory and SKU
            updateSKUDisplay(productId, productSKU);
            updateStockDisplay(productId, productInventory);
        }
    };

    // Function to update SKU display
    const updateSKUDisplay = (productId, sku) => {
        const skuContainer = $(`[${selectorAttrName}="${productId}"] .card-sku`);
        if (sku && sku.trim() !== '') {
            skuContainer.html(`SKU: ${sku}`);
        } else {
            skuContainer.html(`SKU: --`);
        }
    };

    // Function to update stock display with new requirements
    const updateStockDisplay = (productId, inventory) => {
        const stockContainer = $(`[${selectorAttrName}="${productId}"] .stock-count`);
        let stockHtml = '';
        
        if (inventory && inventory.isInStock !== null) {
            if (inventory.isInStock) {
                const availableToSell = inventory.aggregated?.availableToSell;
                if (availableToSell !== null && availableToSell !== undefined) {
                    if (availableToSell <= LOW_STOCK_THRESHOLD && availableToSell > 0) {
                        // Low stock (10 ya usse kam)
                        stockHtml = `<span class="stock-hurry">Hurry! Only ${availableToSell} left</span>`;
                    } else if (availableToSell > LOW_STOCK_THRESHOLD) {
                        // Good stock (10 se zyada)
                        stockHtml = `<span class="stock-in">In Stock: ${availableToSell}</span>`;
                    } else if (availableToSell === 0) {
                        // Out of stock
                        stockHtml = `<span class="stock-out">Out of Stock</span>`;
                    } else {
                        // For any other case
                        stockHtml = `<span class="stock-in">In Stock</span>`;
                    }
                } else {
                    // Available to sell data not available but in stock
                    stockHtml = `<span class="stock-in">In Stock</span>`;
                }
            } else {
                // Not in stock
                stockHtml = `<span class="stock-out">Out of Stock</span>`;
            }
        } else {
            // Inventory data not available - show nothing initially
            // We'll update this when variant is selected
            stockHtml = '';
        }
        
        stockContainer.html(stockHtml);
    };

    const option_image_update_onclick = () => {
        const getSelectedOptions = (productId) => {
            const selectedOptions = [];
            const selectedColor = $(`[${selectorAttrName}="${productId}"] .card-product-swatch .option-swatch.active label`);
            if (selectedColor.length) {
                selectedOptions.push({
                    optionEntityId: parseInt(selectedColor.attr('name')),
                    valueEntityId: parseInt(selectedColor.attr('value'))
                });
            }
            const selectedSize = $(`[${selectorAttrName}="${productId}"] .card-product-size .size-option.active`);
            if (selectedSize.length) {
                selectedOptions.push({
                    optionEntityId: parseInt(selectedSize.attr('name')),
                    valueEntityId: parseInt(selectedSize.attr('value'))
                });
            }
            return selectedOptions;
        };

        $("body").on('click', '.card-product-swatch .option-swatch label, .card-product-size .size-option', function() {
            if ($(this).hasClass('label-swatch')) {
                $(this).closest('.custom-swatch-form-field').find('.option-swatch').removeClass('active');
                $(this).parent('.option-swatch').addClass('active');
            } else {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
            }
            
            const productId = $(this).attr('data-pid');
            const selectedOptions = getSelectedOptions(productId);
            
            if (selectedOptions.length > 0) {
                const optionValueIdsString = selectedOptions.map(opt => 
                    `{optionEntityId: ${opt.optionEntityId}, valueEntityId: ${opt.valueEntityId}}`
                ).join(',');
                
                fetch("/graphql?setCurrencyId=" + active_currency_id, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + graphql_token
                    },
                    body: JSON.stringify({
                        query: `query ProductsWithOptionSelections {
                            site {
                                currency(currencyCode: ${active_currency_code}) {
                                    display {
                                        symbol
                                    }
                                }
                                productWithSelectedOptions: product(
                                    entityId: ${productId}
                                    optionValueIds: [${optionValueIdsString}]
                                ) {
                                    ...ProductFields
                                }
                            }
                        }
                        fragment ProductFields on Product {
                            name
                            sku
                            inventory {
                                isInStock
                                aggregated {
                                    availableToSell
                                    warningLevel
                                }
                            }
                            prices {
                                basePrice {
                                    currencyCode
                                    value
                                }
                                salePrice {
                                    currencyCode
                                    value
                                }
                            }
                            defaultImage {
                                urlOriginal
                            }
                        }`
                    }),
                })
                .then(res => res.json())
                .then((res) => {
                    const objs = res.data.site;
                    if (objs) {
                        const symbol = objs.currency.display.symbol;
                        const selectedOptions = objs.productWithSelectedOptions;
                        
                        // Update SKU display with variant SKU
                        const variantSku = selectedOptions?.sku;
                        updateSKUDisplay(productId, variantSku);
                        
                        // Update stock display
                        if (selectedOptions.inventory) {
                            updateStockDisplay(productId, selectedOptions.inventory);
                        }
                        
                        // Update price
                        const basePrice = selectedOptions.prices.basePrice.value;
                        const salePrice = selectedOptions.prices.salePrice?.value;
                        let priceHtml = "";
                        if (salePrice && salePrice !== basePrice) {
                            priceHtml += `<div class="price-section d-inline-block price-section--withTax"><span class="price price--withTax">${symbol}${salePrice.toFixed(2)}</span></div>`;
                            priceHtml += `<div class="price-section d-inline-block price-section--withTax rrp-price--withTax"><span class="price price--rrp">${symbol}${basePrice.toFixed(2)}</span></div>`;
                        } else {
                            priceHtml += `<div class="price-section d-inline-block price-section--withTax"><span class="price price--withTax">${symbol}${basePrice.toFixed(2)}</span></div>`;
                        }
                        
                        // Update image and price
                        $('[' + selectorAttrName + '="' + productId + '"] .card-img-container .card-image')
                            .attr('src', selectedOptions.defaultImage.urlOriginal)
                            .attr('srcset', selectedOptions.defaultImage.urlOriginal);
                        $('[' + selectorAttrName + '="' + productId + '"] .card-text[data-test-info-type="price"]').html(priceHtml);
                        
                        if(basePrice != salePrice) {
                            $(this).closest("article").find(".wb-sale-text")
                                .html(Math.ceil(((basePrice-salePrice)*100)/basePrice));
                        }
                    }
                });
            }
        });
    };

    setProductOptionPlp();
    option_image_update_onclick();
}

$(document).ready(function() {
    $(".productCarousel-slide, .productGrid").on("click", ".option-swatch", function() {
        var slide = $(this).closest(".productCarousel-slide, .product");
        slide.find(".option-swatch").removeClass("active");
        $(this).addClass("active");
    });
});

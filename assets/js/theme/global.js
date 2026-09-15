import 'focus-within-polyfill';

import './global/jquery-migrate';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import carousel from './common/carousel';
import svgInjector from './global/svg-injector';
import productOptionGraphql from './set-product-option-with-graphql';
import customJS from './custom';

export default class Global extends PageManager {
    onReady() {
        const { show_card_swatch, cartId, secureBaseUrl, show_quick_add_to_cart } = this.context;
        cartPreview(secureBaseUrl, cartId);
        quickSearch();
        currencySelector(cartId);
        foundation($(document));
        quickView(this.context);
        carousel(this.context);
        menu();
        mobileMenuToggle();
        svgInjector();
        if(show_card_swatch){
            productOptionGraphql(this.context);
        }
        customJS(this.context);

        if(show_quick_add_to_cart) {
            $('#addToCartButton').on('click', async function (e) {
                e.preventDefault();
                const btnElement = $(this);

                btnElement.prop('disabled', true);

                const sku = $('#quickAddForm #sku').val();
                const quantity = parseInt($('#quickAddForm #quantity').val());

                if (!sku || !quantity || quantity < 1) {
                    btnElement.prop('disabled', false);
                    $('#responseMessage').html('Please provide both SKU and a valid quantity.').fadeIn().delay(3000).fadeOut();
                    return;
                }

                const response = await fetch("/cart.php?action=add&sku=" + sku + "&qty=" + quantity);
                
                if (response?.ok) {
                    const responseUrl = response?.url;

                    if (responseUrl?.includes("suggest")) {
                        btnElement.prop('disabled', false);
                        $('#responseMessage').html('Product added to cart successfully.').fadeIn().delay(3000).fadeOut();

                        var cartCountElement = $('body').find('.countPill.cart-quantity');
                        var currentCartCount = parseInt(cartCountElement.text()) || 0;
                        if (currentCartCount === 0) {
                            currentCartCount += quantity;
                            cartCountElement.addClass('countPill--positive').text(currentCartCount);
                        } else {
                            currentCartCount += quantity;
                            cartCountElement.text(currentCartCount);
                        }
                    } else {
                        btnElement.prop('disabled', false);
                        $('#responseMessage').html('Unfortunately this product is not available for purchase.').fadeIn().delay(3000).fadeOut();
                    }
                } else {
                    btnElement.prop('disabled', false);
                    $('#responseMessage').html('Unfortunately this product is not available for purchase.').fadeIn().delay(3000).fadeOut();
                }
            });
        }
    }
}

window.sharedData = {};

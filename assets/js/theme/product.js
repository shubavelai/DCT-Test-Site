/*
 Import all product specific js
 */
import PageManager from './page-manager';
import Review from './product/reviews';
import collapsibleFactory from './common/collapsible';
import ProductDetails from './common/product-details';
import videoGallery from './product/video-gallery';
import { classifyForm } from './common/utils/form-utils';
import modalFactory from './global/modal';

export default class Product extends PageManager {
    constructor(context) {
        super(context);
        this.url = window.location.href;
        this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
        this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
        this.reviewModal = modalFactory('#modal-review-form')[0];
    }

    onReady() {
        // Listen for foundation modal close events to sanitize URL after review.
        $(document).on('close.fndtn.reveal', () => {
            if (this.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
                window.history.replaceState(null, document.title, window.location.pathname);
            }
        });

        let validator;

        // Init collapsible
        collapsibleFactory();

        this.productDetails = new ProductDetails($('.productView'), this.context, window.BCData.product_attributes);
        this.productDetails.setProductVariant();

        videoGallery();

        this.bulkPricingHandler();

        const $reviewForm = classifyForm('.writeReview-form');

        if ($reviewForm.length === 0) return;

        const review = new Review({ $reviewForm });

        $('body').on('click', '[data-reveal-id="modal-review-form"]', () => {
            validator = review.registerValidation(this.context);
            this.ariaDescribeReviewInputs($reviewForm);
        });

        $reviewForm.on('submit', () => {
            if (validator) {
                validator.performCheck();
                return validator.areAll('valid');
            }

            return false;
        });

        this.productReviewHandler();

        const showColorSyncSwatchSelector = this.context.show_color_sync_swatch_selector;
        const productTemplateName = this.context.template_name;
        if (showColorSyncSwatchSelector && productTemplateName === "product-swatch-group-slider") {
            this.swatchGroupSlider();
        }
    }

    ariaDescribeReviewInputs($form) {
        $form.find('[data-input]').each((_, input) => {
            const $input = $(input);
            const msgSpanId = `${$input.attr('name')}-msg`;

            $input.siblings('span').attr('id', msgSpanId);
            $input.attr('aria-describedby', msgSpanId);
        });
    }

    productReviewHandler() {
        if (this.url.indexOf('#write_review') !== -1) {
            this.$reviewLink.trigger('click');
        }
    }

    bulkPricingHandler() {
        if (this.url.indexOf('#bulk_pricing') !== -1) {
            this.$bulkPricingLink.trigger('click');
        }
    }

    swatchGroupSlider() {
        let $navSlider, $forSlider;

        function initializeSlickSliders() {
            $navSlider = $('.productView-nav').slick({
                arrows: true,
                dots: false,
                infinite: false,
                mobileFirst: true,
                fade: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: '.productView-for',
                responsive: [
                    {
                        breakpoint: 1399,
                        settings: {
                            dots: false,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            dots: false,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

            $forSlider = $('.productView-for').slick({
                arrows: true,
                dots: false,
                infinite: false,
                mobileFirst: true,
                focusOnSelect: true,
                slidesToShow: 5,
                slidesToScroll: 1,
                asNavFor: '.productView-nav',
                responsive: [
                    {
                        breakpoint: 1399,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 766,
                        settings: {
                            slidesToShow: 5,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 549,
                        settings: {
                            slidesToShow: 4,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 319,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

            $('.productView-nav .slick-slide, .productView-for .slick-slide').each(function () {
                $(this).attr('data-slick-filter', $(this).find('img').attr('alt').toLowerCase());
            });

            // Add CSS to disable dragging
            $('<style>').prop('type', 'text/css').html(`
                .slick-list.draggable.no-drag {
                    cursor: default !important;
                }
                .slick-list.draggable.no-drag .slick-track {
                    transform: none !important;
                }
            `).appendTo('head');

            updateSliderBehavior();
        }

        function updateSliderBehavior() {
            const visibleSlides = $forSlider.find('.slick-slide:not(.slick-cloned):visible').length;
            const shouldEnableSync = visibleSlides > 5;

            $navSlider.slick('slickSetOption', 'asNavFor', shouldEnableSync ? '.productView-for' : null, true);
            $forSlider.slick('slickSetOption', 'asNavFor', shouldEnableSync ? '.productView-nav' : null, true);

            if (shouldEnableSync) {
                $navSlider.off('afterChange');
                $forSlider.off('click', '.slick-slide');
                $forSlider.slick('slickSetOption', 'swipe', true, true);
                $forSlider.find('.slick-list').removeClass('no-drag');
            } else {
                $navSlider.on('afterChange', function (event, slick, currentSlide) {
                    $forSlider.slick('slickGoTo', currentSlide, true);
                });

                $forSlider.on('click', '.slick-slide', function (event) {
                    event.preventDefault();
                    var index = $(this).data('slick-index');
                    $navSlider.slick('slickGoTo', index, true);
                });

                $forSlider.slick('slickSetOption', 'swipe', false, true);
                $forSlider.find('.slick-list').addClass('no-drag');
                $forSlider.find('.slick-track').css('transform', 'none');

                $forSlider.on('touchstart touchmove touchend', function (e) {
                    e.stopPropagation();
                });
            }
        }

        $(document).on('click', '.form-option-swatch', function () {
            var selectedColor = $(this).data('product-option-value').toLowerCase();
            filterSlidesByColor(selectedColor);
        });

        $(document).on('click', '.form-option-swatch', function () {
            var selectedColor = $(this).data('product-option-value').toLowerCase();
            filterSlidesByColor(selectedColor);

            var slideCount = $forSlider.slick('getOption', 'slidesToShow');
            var thumbnailCount = $('.productView-thumbnail').length;
            if(thumbnailCount <= slideCount){
                $('.productView-thumbnails').addClass('productSliderArrow');
            }else {
                $('.productView-thumbnails').removeClass('productSliderArrow');
            }
        });

        function filterSlidesByColor(selectedColor) {
            $navSlider.slick('slickUnfilter');
            $forSlider.slick('slickUnfilter');

            if (selectedColor !== 'all') {
                $navSlider.slick('slickFilter', function () {
                    return $(this).attr('data-slick-filter').includes(selectedColor);
                });
                $forSlider.slick('slickFilter', function () {
                    return $(this).attr('data-slick-filter').includes(selectedColor);
                });
            }

            $navSlider.slick('slickGoTo', 0);
            $forSlider.slick('slickGoTo', 0);

            setTimeout(function () {
                if ($navSlider.find('.slick-slide:not(.slick-cloned):visible').length === 0) {
                    console.log('No slides found, showing all');
                    $navSlider.slick('slickUnfilter');
                    $forSlider.slick('slickUnfilter');

                    var slideCount = $forSlider.slick('getOption', 'slidesToShow');
                    var thumbnailCount = $('.productView-thumbnail').length;
                    if(thumbnailCount <= slideCount){
                        $('.productView-thumbnails').addClass('productSliderArrow');
                    }else {
                        $('.productView-thumbnails').removeClass('productSliderArrow');
                    }
                }

                var $firstNavSlide = $navSlider.find('.slick-slide[data-slick-index="0"]:not(.slick-cloned)');
                var $firstForSlide = $forSlider.find('.slick-slide[data-slick-index="0"]:not(.slick-cloned)');

                if ($firstNavSlide.length > 0) {
                    var navIndex = $firstNavSlide.data('slick-index');
                    $navSlider.slick('slickGoTo', navIndex);
                }

                if ($firstForSlide.length > 0) {
                    var forIndex = $firstForSlide.data('slick-index');
                    $forSlider.slick('slickGoTo', forIndex);
                }

                updateSliderBehavior();
            }, 100);
        }

        initializeSlickSliders();
    }
}

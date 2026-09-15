"use strict";
(self["webpackChunkIconic"] = self["webpackChunkIconic"] || []).push([["assets_js_theme_product_js"],{

/***/ "./assets/js/theme/product.js"
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/*
 Import all product specific js
 */
;






var Product = /*#__PURE__*/function (_PageManager) {
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    _this.reviewModal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal-review-form')[0];
    return _this;
  }
  _inheritsLoose(Product, _PageManager);
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator;

    // Init collapsible
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    (0,_product_video_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();
    this.bulkPricingHandler();
    var $reviewForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)('.writeReview-form');
    if ($reviewForm.length === 0) return;
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_1__["default"]({
      $reviewForm: $reviewForm
    });
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
      _this2.ariaDescribeReviewInputs($reviewForm);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }
      return false;
    });
    this.productReviewHandler();
    var showColorSyncSwatchSelector = this.context.show_color_sync_swatch_selector;
    var productTemplateName = this.context.template_name;
    if (showColorSyncSwatchSelector && productTemplateName === "product-swatch-group-slider") {
      this.swatchGroupSlider();
    }
  };
  _proto.ariaDescribeReviewInputs = function ariaDescribeReviewInputs($form) {
    $form.find('[data-input]').each(function (_, input) {
      var $input = $(input);
      var msgSpanId = $input.attr('name') + "-msg";
      $input.siblings('span').attr('id', msgSpanId);
      $input.attr('aria-describedby', msgSpanId);
    });
  };
  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };
  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };
  _proto.swatchGroupSlider = function swatchGroupSlider() {
    var $navSlider, $forSlider;
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
        responsive: [{
          breakpoint: 1399,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 768,
          settings: {
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
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
        responsive: [{
          breakpoint: 1399,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 766,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 549,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        }, {
          breakpoint: 319,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }]
      });
      $('.productView-nav .slick-slide, .productView-for .slick-slide').each(function () {
        $(this).attr('data-slick-filter', $(this).find('img').attr('alt').toLowerCase());
      });

      // Add CSS to disable dragging
      $('<style>').prop('type', 'text/css').html("\n                .slick-list.draggable.no-drag {\n                    cursor: default !important;\n                }\n                .slick-list.draggable.no-drag .slick-track {\n                    transform: none !important;\n                }\n            ").appendTo('head');
      updateSliderBehavior();
    }
    function updateSliderBehavior() {
      var visibleSlides = $forSlider.find('.slick-slide:not(.slick-cloned):visible').length;
      var shouldEnableSync = visibleSlides > 5;
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
      if (thumbnailCount <= slideCount) {
        $('.productView-thumbnails').addClass('productSliderArrow');
      } else {
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
          if (thumbnailCount <= slideCount) {
            $('.productView-thumbnails').addClass('productSliderArrow');
          } else {
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
  };
  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ },

/***/ "./assets/js/theme/product/video-gallery.js"
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoGallery: () => (/* binding */ VideoGallery),
/* harmony export */   "default": () => (/* binding */ videoGallery)
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }
  var _proto = VideoGallery.prototype;
  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };
  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };
  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };
  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;
    if (isInitialized) {
      return;
    }
    $el.data(pluginKey, new VideoGallery($el));
  });
}

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wcm9kdWN0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsQ0FBeUM7QUFDRjtBQUNlO0FBQ0E7QUFDSDtBQUNNO0FBQ2Y7QUFBQSxJQUVyQk8sT0FBTywwQkFBQUMsWUFBQTtFQUN4QixTQUFBRCxRQUFZRSxPQUFPLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQ2pCQSxLQUFBLEdBQUFGLFlBQUEsQ0FBQUcsSUFBQSxPQUFNRixPQUFPLENBQUM7SUFDZEMsS0FBQSxDQUFLRSxHQUFHLEdBQUdDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJO0lBQy9CTCxLQUFBLENBQUtNLFdBQVcsR0FBR0MsQ0FBQyxDQUFDLHNDQUFzQyxDQUFDO0lBQzVEUCxLQUFBLENBQUtRLGdCQUFnQixHQUFHRCxDQUFDLENBQUMsdUNBQXVDLENBQUM7SUFDbEVQLEtBQUEsQ0FBS1MsV0FBVyxHQUFHYix5REFBWSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQUMsT0FBQUksS0FBQTtFQUM3RDtFQUFDVSxjQUFBLENBQUFiLE9BQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFhLE1BQUEsR0FBQWQsT0FBQSxDQUFBZSxTQUFBO0VBQUFELE1BQUEsQ0FFREUsT0FBTyxHQUFQLFNBQUFBLE9BQU9BLENBQUEsRUFBRztJQUFBLElBQUFDLE1BQUE7SUFDTjtJQUNBUCxDQUFDLENBQUNRLFFBQVEsQ0FBQyxDQUFDQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsWUFBTTtNQUN2QyxJQUFJRixNQUFJLENBQUNaLEdBQUcsQ0FBQ2UsT0FBTyxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLE9BQU9kLE1BQU0sQ0FBQ2UsT0FBTyxDQUFDQyxZQUFZLEtBQUssVUFBVSxFQUFFO1FBQy9GaEIsTUFBTSxDQUFDZSxPQUFPLENBQUNDLFlBQVksQ0FBQyxJQUFJ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SUFDckMsSUFBSSxDQUFDMkIsWUFBWSxDQUFDTSxjQUFjLENBQUMzQixRQUFRLENBQUMsV0FBVyxDQUFDO0VBQzFELENBQUM7RUFBQXRFLE1BQUEsQ0FFRDRGLFVBQVUsR0FBVixTQUFBQSxVQUFVQSxDQUFBLEVBQUc7SUFDVCxJQUFJLENBQUNGLE9BQU8sQ0FBQ3JGLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDd0YsY0FBYyxDQUFDTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7RUFDNUQsQ0FBQztFQUFBLE9BQUFiLFlBQUE7QUFBQTtBQUdVLFNBQVN4RyxZQUFZQSxDQUFBLEVBQUc7RUFDbkMsSUFBTXNILFNBQVMsR0FBRyxlQUFlO0VBQ2pDLElBQU1DLGFBQWEsR0FBRzFHLENBQUMsWUFBVXlHLFNBQVMsTUFBRyxDQUFDO0VBRTlDQyxhQUFhLENBQUN0RSxJQUFJLENBQUMsVUFBQ29DLEtBQUssRUFBRW1DLE9BQU8sRUFBSztJQUNuQyxJQUFNQyxHQUFHLEdBQUc1RyxDQUFDLENBQUMyRyxPQUFPLENBQUM7SUFDdEIsSUFBTUUsYUFBYSxHQUFHRCxHQUFHLENBQUNuQyxJQUFJLENBQUNnQyxTQUFTLENBQUMsWUFBWWQsWUFBWTtJQUVqRSxJQUFJa0IsYUFBYSxFQUFFO01BQ2Y7SUFDSjtJQUVBRCxHQUFHLENBQUNuQyxJQUFJLENBQUNnQyxTQUFTLEVBQUUsSUFBSWQsWUFBWSxDQUFDaUIsR0FBRyxDQUFDLENBQUM7RUFDOUMsQ0FBQyxDQUFDO0FBQ04sQyIsInNvdXJjZXMiOlsid2VicGFjazovL0ljb25pYy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0LmpzIiwid2VicGFjazovL0ljb25pYy8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3ZpZGVvLWdhbGxlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiBJbXBvcnQgYWxsIHByb2R1Y3Qgc3BlY2lmaWMganNcbiAqL1xuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi9wcm9kdWN0L3Jldmlld3MnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcbmltcG9ydCB2aWRlb0dhbGxlcnkgZnJvbSAnLi9wcm9kdWN0L3ZpZGVvLWdhbGxlcnknO1xuaW1wb3J0IHsgY2xhc3NpZnlGb3JtIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgbW9kYWxGYWN0b3J5IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB0aGlzLiRyZXZpZXdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nKTtcbiAgICAgICAgdGhpcy4kYnVsa1ByaWNpbmdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtYnVsay1wcmljaW5nXCJdJyk7XG4gICAgICAgIHRoaXMucmV2aWV3TW9kYWwgPSBtb2RhbEZhY3RvcnkoJyNtb2RhbC1yZXZpZXctZm9ybScpWzBdO1xuICAgIH1cblxuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIC8vIExpc3RlbiBmb3IgZm91bmRhdGlvbiBtb2RhbCBjbG9zZSBldmVudHMgdG8gc2FuaXRpemUgVVJMIGFmdGVyIHJldmlldy5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ2Nsb3NlLmZuZHRuLnJldmVhbCcsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLnVybC5pbmRleE9mKCcjd3JpdGVfcmV2aWV3JykgIT09IC0xICYmIHR5cGVvZiB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgZG9jdW1lbnQudGl0bGUsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGxldCB2YWxpZGF0b3I7XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZVxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzID0gbmV3IFByb2R1Y3REZXRhaWxzKCQoJy5wcm9kdWN0VmlldycpLCB0aGlzLmNvbnRleHQsIHdpbmRvdy5CQ0RhdGEucHJvZHVjdF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuXG4gICAgICAgIHZpZGVvR2FsbGVyeSgpO1xuXG4gICAgICAgIHRoaXMuYnVsa1ByaWNpbmdIYW5kbGVyKCk7XG5cbiAgICAgICAgY29uc3QgJHJldmlld0Zvcm0gPSBjbGFzc2lmeUZvcm0oJy53cml0ZVJldmlldy1mb3JtJyk7XG5cbiAgICAgICAgaWYgKCRyZXZpZXdGb3JtLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHJldmlldyA9IG5ldyBSZXZpZXcoeyAkcmV2aWV3Rm9ybSB9KTtcblxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJywgKCkgPT4ge1xuICAgICAgICAgICAgdmFsaWRhdG9yID0gcmV2aWV3LnJlZ2lzdGVyVmFsaWRhdGlvbih0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgdGhpcy5hcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMoJHJldmlld0Zvcm0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkcmV2aWV3Rm9ybS5vbignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb2R1Y3RSZXZpZXdIYW5kbGVyKCk7XG5cbiAgICAgICAgY29uc3Qgc2hvd0NvbG9yU3luY1N3YXRjaFNlbGVjdG9yID0gdGhpcy5jb250ZXh0LnNob3dfY29sb3Jfc3luY19zd2F0Y2hfc2VsZWN0b3I7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RUZW1wbGF0ZU5hbWUgPSB0aGlzLmNvbnRleHQudGVtcGxhdGVfbmFtZTtcbiAgICAgICAgaWYgKHNob3dDb2xvclN5bmNTd2F0Y2hTZWxlY3RvciAmJiBwcm9kdWN0VGVtcGxhdGVOYW1lID09PSBcInByb2R1Y3Qtc3dhdGNoLWdyb3VwLXNsaWRlclwiKSB7XG4gICAgICAgICAgICB0aGlzLnN3YXRjaEdyb3VwU2xpZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMoJGZvcm0pIHtcbiAgICAgICAgJGZvcm0uZmluZCgnW2RhdGEtaW5wdXRdJykuZWFjaCgoXywgaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgbXNnU3BhbklkID0gYCR7JGlucHV0LmF0dHIoJ25hbWUnKX0tbXNnYDtcblxuICAgICAgICAgICAgJGlucHV0LnNpYmxpbmdzKCdzcGFuJykuYXR0cignaWQnLCBtc2dTcGFuSWQpO1xuICAgICAgICAgICAgJGlucHV0LmF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknLCBtc2dTcGFuSWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm9kdWN0UmV2aWV3SGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJHJldmlld0xpbmsudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1bGtQcmljaW5nSGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyNidWxrX3ByaWNpbmcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJGJ1bGtQcmljaW5nTGluay50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3dhdGNoR3JvdXBTbGlkZXIoKSB7XG4gICAgICAgIGxldCAkbmF2U2xpZGVyLCAkZm9yU2xpZGVyO1xuXG4gICAgICAgIGZ1bmN0aW9uIGluaXRpYWxpemVTbGlja1NsaWRlcnMoKSB7XG4gICAgICAgICAgICAkbmF2U2xpZGVyID0gJCgnLnByb2R1Y3RWaWV3LW5hdicpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnByb2R1Y3RWaWV3LWZvcicsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMzk5LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkZm9yU2xpZGVyID0gJCgnLnByb2R1Y3RWaWV3LWZvcicpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICAgICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1LFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGFzTmF2Rm9yOiAnLnByb2R1Y3RWaWV3LW5hdicsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMzk5LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY2LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTQ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMzE5LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcucHJvZHVjdFZpZXctbmF2IC5zbGljay1zbGlkZSwgLnByb2R1Y3RWaWV3LWZvciAuc2xpY2stc2xpZGUnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ2RhdGEtc2xpY2stZmlsdGVyJywgJCh0aGlzKS5maW5kKCdpbWcnKS5hdHRyKCdhbHQnKS50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBBZGQgQ1NTIHRvIGRpc2FibGUgZHJhZ2dpbmdcbiAgICAgICAgICAgICQoJzxzdHlsZT4nKS5wcm9wKCd0eXBlJywgJ3RleHQvY3NzJykuaHRtbChgXG4gICAgICAgICAgICAgICAgLnNsaWNrLWxpc3QuZHJhZ2dhYmxlLm5vLWRyYWcge1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnNsaWNrLWxpc3QuZHJhZ2dhYmxlLm5vLWRyYWcgLnNsaWNrLXRyYWNrIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYCkuYXBwZW5kVG8oJ2hlYWQnKTtcblxuICAgICAgICAgICAgdXBkYXRlU2xpZGVyQmVoYXZpb3IoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVNsaWRlckJlaGF2aW9yKCkge1xuICAgICAgICAgICAgY29uc3QgdmlzaWJsZVNsaWRlcyA9ICRmb3JTbGlkZXIuZmluZCgnLnNsaWNrLXNsaWRlOm5vdCguc2xpY2stY2xvbmVkKTp2aXNpYmxlJykubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkRW5hYmxlU3luYyA9IHZpc2libGVTbGlkZXMgPiA1O1xuXG4gICAgICAgICAgICAkbmF2U2xpZGVyLnNsaWNrKCdzbGlja1NldE9wdGlvbicsICdhc05hdkZvcicsIHNob3VsZEVuYWJsZVN5bmMgPyAnLnByb2R1Y3RWaWV3LWZvcicgOiBudWxsLCB0cnVlKTtcbiAgICAgICAgICAgICRmb3JTbGlkZXIuc2xpY2soJ3NsaWNrU2V0T3B0aW9uJywgJ2FzTmF2Rm9yJywgc2hvdWxkRW5hYmxlU3luYyA/ICcucHJvZHVjdFZpZXctbmF2JyA6IG51bGwsIHRydWUpO1xuXG4gICAgICAgICAgICBpZiAoc2hvdWxkRW5hYmxlU3luYykge1xuICAgICAgICAgICAgICAgICRuYXZTbGlkZXIub2ZmKCdhZnRlckNoYW5nZScpO1xuICAgICAgICAgICAgICAgICRmb3JTbGlkZXIub2ZmKCdjbGljaycsICcuc2xpY2stc2xpZGUnKTtcbiAgICAgICAgICAgICAgICAkZm9yU2xpZGVyLnNsaWNrKCdzbGlja1NldE9wdGlvbicsICdzd2lwZScsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgICRmb3JTbGlkZXIuZmluZCgnLnNsaWNrLWxpc3QnKS5yZW1vdmVDbGFzcygnbm8tZHJhZycpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkbmF2U2xpZGVyLm9uKCdhZnRlckNoYW5nZScsIGZ1bmN0aW9uIChldmVudCwgc2xpY2ssIGN1cnJlbnRTbGlkZSkge1xuICAgICAgICAgICAgICAgICAgICAkZm9yU2xpZGVyLnNsaWNrKCdzbGlja0dvVG8nLCBjdXJyZW50U2xpZGUsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJGZvclNsaWRlci5vbignY2xpY2snLCAnLnNsaWNrLXNsaWRlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9ICQodGhpcykuZGF0YSgnc2xpY2staW5kZXgnKTtcbiAgICAgICAgICAgICAgICAgICAgJG5hdlNsaWRlci5zbGljaygnc2xpY2tHb1RvJywgaW5kZXgsIHRydWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJGZvclNsaWRlci5zbGljaygnc2xpY2tTZXRPcHRpb24nLCAnc3dpcGUnLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgJGZvclNsaWRlci5maW5kKCcuc2xpY2stbGlzdCcpLmFkZENsYXNzKCduby1kcmFnJyk7XG4gICAgICAgICAgICAgICAgJGZvclNsaWRlci5maW5kKCcuc2xpY2stdHJhY2snKS5jc3MoJ3RyYW5zZm9ybScsICdub25lJyk7XG5cbiAgICAgICAgICAgICAgICAkZm9yU2xpZGVyLm9uKCd0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmZvcm0tb3B0aW9uLXN3YXRjaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZENvbG9yID0gJCh0aGlzKS5kYXRhKCdwcm9kdWN0LW9wdGlvbi12YWx1ZScpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBmaWx0ZXJTbGlkZXNCeUNvbG9yKHNlbGVjdGVkQ29sb3IpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLmZvcm0tb3B0aW9uLXN3YXRjaCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZENvbG9yID0gJCh0aGlzKS5kYXRhKCdwcm9kdWN0LW9wdGlvbi12YWx1ZScpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBmaWx0ZXJTbGlkZXNCeUNvbG9yKHNlbGVjdGVkQ29sb3IpO1xuXG4gICAgICAgICAgICB2YXIgc2xpZGVDb3VudCA9ICRmb3JTbGlkZXIuc2xpY2soJ2dldE9wdGlvbicsICdzbGlkZXNUb1Nob3cnKTtcbiAgICAgICAgICAgIHZhciB0aHVtYm5haWxDb3VudCA9ICQoJy5wcm9kdWN0Vmlldy10aHVtYm5haWwnKS5sZW5ndGg7XG4gICAgICAgICAgICBpZih0aHVtYm5haWxDb3VudCA8PSBzbGlkZUNvdW50KXtcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdFZpZXctdGh1bWJuYWlscycpLmFkZENsYXNzKCdwcm9kdWN0U2xpZGVyQXJyb3cnKTtcbiAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdFZpZXctdGh1bWJuYWlscycpLnJlbW92ZUNsYXNzKCdwcm9kdWN0U2xpZGVyQXJyb3cnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gZmlsdGVyU2xpZGVzQnlDb2xvcihzZWxlY3RlZENvbG9yKSB7XG4gICAgICAgICAgICAkbmF2U2xpZGVyLnNsaWNrKCdzbGlja1VuZmlsdGVyJyk7XG4gICAgICAgICAgICAkZm9yU2xpZGVyLnNsaWNrKCdzbGlja1VuZmlsdGVyJyk7XG5cbiAgICAgICAgICAgIGlmIChzZWxlY3RlZENvbG9yICE9PSAnYWxsJykge1xuICAgICAgICAgICAgICAgICRuYXZTbGlkZXIuc2xpY2soJ3NsaWNrRmlsdGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5hdHRyKCdkYXRhLXNsaWNrLWZpbHRlcicpLmluY2x1ZGVzKHNlbGVjdGVkQ29sb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICRmb3JTbGlkZXIuc2xpY2soJ3NsaWNrRmlsdGVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJCh0aGlzKS5hdHRyKCdkYXRhLXNsaWNrLWZpbHRlcicpLmluY2x1ZGVzKHNlbGVjdGVkQ29sb3IpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkbmF2U2xpZGVyLnNsaWNrKCdzbGlja0dvVG8nLCAwKTtcbiAgICAgICAgICAgICRmb3JTbGlkZXIuc2xpY2soJ3NsaWNrR29UbycsIDApO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoJG5hdlNsaWRlci5maW5kKCcuc2xpY2stc2xpZGU6bm90KC5zbGljay1jbG9uZWQpOnZpc2libGUnKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ05vIHNsaWRlcyBmb3VuZCwgc2hvd2luZyBhbGwnKTtcbiAgICAgICAgICAgICAgICAgICAgJG5hdlNsaWRlci5zbGljaygnc2xpY2tVbmZpbHRlcicpO1xuICAgICAgICAgICAgICAgICAgICAkZm9yU2xpZGVyLnNsaWNrKCdzbGlja1VuZmlsdGVyJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHNsaWRlQ291bnQgPSAkZm9yU2xpZGVyLnNsaWNrKCdnZXRPcHRpb24nLCAnc2xpZGVzVG9TaG93Jyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0aHVtYm5haWxDb3VudCA9ICQoJy5wcm9kdWN0Vmlldy10aHVtYm5haWwnKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGlmKHRodW1ibmFpbENvdW50IDw9IHNsaWRlQ291bnQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnByb2R1Y3RWaWV3LXRodW1ibmFpbHMnKS5hZGRDbGFzcygncHJvZHVjdFNsaWRlckFycm93Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy10aHVtYm5haWxzJykucmVtb3ZlQ2xhc3MoJ3Byb2R1Y3RTbGlkZXJBcnJvdycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyICRmaXJzdE5hdlNsaWRlID0gJG5hdlNsaWRlci5maW5kKCcuc2xpY2stc2xpZGVbZGF0YS1zbGljay1pbmRleD1cIjBcIl06bm90KC5zbGljay1jbG9uZWQpJyk7XG4gICAgICAgICAgICAgICAgdmFyICRmaXJzdEZvclNsaWRlID0gJGZvclNsaWRlci5maW5kKCcuc2xpY2stc2xpZGVbZGF0YS1zbGljay1pbmRleD1cIjBcIl06bm90KC5zbGljay1jbG9uZWQpJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJGZpcnN0TmF2U2xpZGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmF2SW5kZXggPSAkZmlyc3ROYXZTbGlkZS5kYXRhKCdzbGljay1pbmRleCcpO1xuICAgICAgICAgICAgICAgICAgICAkbmF2U2xpZGVyLnNsaWNrKCdzbGlja0dvVG8nLCBuYXZJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCRmaXJzdEZvclNsaWRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvckluZGV4ID0gJGZpcnN0Rm9yU2xpZGUuZGF0YSgnc2xpY2staW5kZXgnKTtcbiAgICAgICAgICAgICAgICAgICAgJGZvclNsaWRlci5zbGljaygnc2xpY2tHb1RvJywgZm9ySW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHVwZGF0ZVNsaWRlckJlaGF2aW9yKCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5pdGlhbGl6ZVNsaWNrU2xpZGVycygpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBjbGFzcyBWaWRlb0dhbGxlcnkge1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJHBsYXllciA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLXBsYXllcl0nKTtcbiAgICAgICAgdGhpcy4kdmlkZW9zID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8taXRlbV0nKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7fTtcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgc2VsZWN0TmV3VmlkZW8oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHtcbiAgICAgICAgICAgIGlkOiAkdGFyZ2V0LmRhdGEoJ3ZpZGVvSWQnKSxcbiAgICAgICAgICAgICRzZWxlY3RlZFRodW1iOiAkdGFyZ2V0LFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2V0TWFpblZpZGVvKCk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlVGh1bWIoKTtcbiAgICB9XG5cbiAgICBzZXRNYWluVmlkZW8oKSB7XG4gICAgICAgIHRoaXMuJHBsYXllci5hdHRyKCdzcmMnLCBgLy93d3cueW91dHViZS5jb20vZW1iZWQvJHt0aGlzLmN1cnJlbnRWaWRlby5pZH1gKTtcbiAgICB9XG5cbiAgICBzZXRBY3RpdmVUaHVtYigpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8uJHNlbGVjdGVkVGh1bWIuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgIH1cblxuICAgIGJpbmRFdmVudHMoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5vbignY2xpY2snLCB0aGlzLnNlbGVjdE5ld1ZpZGVvLmJpbmQodGhpcykpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdmlkZW9HYWxsZXJ5KCkge1xuICAgIGNvbnN0IHBsdWdpbktleSA9ICd2aWRlby1nYWxsZXJ5JztcbiAgICBjb25zdCAkdmlkZW9HYWxsZXJ5ID0gJChgW2RhdGEtJHtwbHVnaW5LZXl9XWApO1xuXG4gICAgJHZpZGVvR2FsbGVyeS5lYWNoKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCAkZWwgPSAkKGVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpc0luaXRpYWxpemVkID0gJGVsLmRhdGEocGx1Z2luS2V5KSBpbnN0YW5jZW9mIFZpZGVvR2FsbGVyeTtcblxuICAgICAgICBpZiAoaXNJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgJGVsLmRhdGEocGx1Z2luS2V5LCBuZXcgVmlkZW9HYWxsZXJ5KCRlbCkpO1xuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwiUmV2aWV3IiwiY29sbGFwc2libGVGYWN0b3J5IiwiUHJvZHVjdERldGFpbHMiLCJ2aWRlb0dhbGxlcnkiLCJjbGFzc2lmeUZvcm0iLCJtb2RhbEZhY3RvcnkiLCJQcm9kdWN0IiwiX1BhZ2VNYW5hZ2VyIiwiY29udGV4dCIsIl90aGlzIiwiY2FsbCIsInVybCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIiRyZXZpZXdMaW5rIiwiJCIsIiRidWxrUHJpY2luZ0xpbmsiLCJyZXZpZXdNb2RhbCIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsIl90aGlzMiIsImRvY3VtZW50Iiwib24iLCJpbmRleE9mIiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsInRpdGxlIiwicGF0aG5hbWUiLCJ2YWxpZGF0b3IiLCJwcm9kdWN0RGV0YWlscyIsIkJDRGF0YSIsInByb2R1Y3RfYXR0cmlidXRlcyIsInNldFByb2R1Y3RWYXJpYW50IiwiYnVsa1ByaWNpbmdIYW5kbGVyIiwiJHJldmlld0Zvcm0iLCJsZW5ndGgiLCJyZXZpZXciLCJyZWdpc3RlclZhbGlkYXRpb24iLCJhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJwcm9kdWN0UmV2aWV3SGFuZGxlciIsInNob3dDb2xvclN5bmNTd2F0Y2hTZWxlY3RvciIsInNob3dfY29sb3Jfc3luY19zd2F0Y2hfc2VsZWN0b3IiLCJwcm9kdWN0VGVtcGxhdGVOYW1lIiwidGVtcGxhdGVfbmFtZSIsInN3YXRjaEdyb3VwU2xpZGVyIiwiJGZvcm0iLCJmaW5kIiwiZWFjaCIsIl8iLCJpbnB1dCIsIiRpbnB1dCIsIm1zZ1NwYW5JZCIsImF0dHIiLCJzaWJsaW5ncyIsInRyaWdnZXIiLCIkbmF2U2xpZGVyIiwiJGZvclNsaWRlciIsImluaXRpYWxpemVTbGlja1NsaWRlcnMiLCJzbGljayIsImFycm93cyIsImRvdHMiLCJpbmZpbml0ZSIsIm1vYmlsZUZpcnN0IiwiZmFkZSIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwiYXNOYXZGb3IiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiZm9jdXNPblNlbGVjdCIsInRvTG93ZXJDYXNlIiwicHJvcCIsImh0bWwiLCJhcHBlbmRUbyIsInVwZGF0ZVNsaWRlckJlaGF2aW9yIiwidmlzaWJsZVNsaWRlcyIsInNob3VsZEVuYWJsZVN5bmMiLCJvZmYiLCJyZW1vdmVDbGFzcyIsImV2ZW50IiwiY3VycmVudFNsaWRlIiwicHJldmVudERlZmF1bHQiLCJpbmRleCIsImRhdGEiLCJhZGRDbGFzcyIsImNzcyIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJzZWxlY3RlZENvbG9yIiwiZmlsdGVyU2xpZGVzQnlDb2xvciIsInNsaWRlQ291bnQiLCJ0aHVtYm5haWxDb3VudCIsImluY2x1ZGVzIiwic2V0VGltZW91dCIsImNvbnNvbGUiLCJsb2ciLCIkZmlyc3ROYXZTbGlkZSIsIiRmaXJzdEZvclNsaWRlIiwibmF2SW5kZXgiLCJmb3JJbmRleCIsImRlZmF1bHQiLCJWaWRlb0dhbGxlcnkiLCIkZWxlbWVudCIsIiRwbGF5ZXIiLCIkdmlkZW9zIiwiY3VycmVudFZpZGVvIiwiYmluZEV2ZW50cyIsInNlbGVjdE5ld1ZpZGVvIiwiJHRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJpZCIsIiRzZWxlY3RlZFRodW1iIiwic2V0TWFpblZpZGVvIiwic2V0QWN0aXZlVGh1bWIiLCJiaW5kIiwicGx1Z2luS2V5IiwiJHZpZGVvR2FsbGVyeSIsImVsZW1lbnQiLCIkZWwiLCJpc0luaXRpYWxpemVkIl0sInNvdXJjZVJvb3QiOiIifQ==
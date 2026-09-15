(self["webpackChunkIconic"] = self["webpackChunkIconic"] || []).push([["assets_js_theme_catalog_js-assets_js_theme_common_faceted-search_js-assets_js_theme_global_co-3f5afe"],{

/***/ "./assets/js/theme/catalog.js"
/*!************************************!*\
  !*** ./assets/js/theme/catalog.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CatalogPage)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
;


var CatalogPage = /*#__PURE__*/function (_PageManager) {
  function CatalogPage(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    window.addEventListener('beforeunload', function () {
      if (document.activeElement.id === 'sort') {
        window.localStorage.setItem('sortByStatus', 'selected');
      }
    });
    return _this;
  }
  _inheritsLoose(CatalogPage, _PageManager);
  var _proto = CatalogPage.prototype;
  _proto.arrangeFocusOnSortBy = function arrangeFocusOnSortBy() {
    var $sortBySelector = $('[data-sort-by="product"] #sort');
    if (window.localStorage.getItem('sortByStatus')) {
      $sortBySelector.trigger('focus');
      window.localStorage.removeItem('sortByStatus');
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_2__.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;
    event.preventDefault();
    window.location = url__WEBPACK_IMPORTED_MODULE_2__.format({
      pathname: url.pathname,
      search: _common_utils_url_utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildQueryString(url.query)
    });
  };
  return CatalogPage;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ },

/***/ "./assets/js/theme/common/faceted-search.js"
/*!**************************************************!*\
  !*** ./assets/js/theme/common/faceted-search.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/union */ "./node_modules/lodash/union.js");
/* harmony import */ var lodash_union__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_union__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/without */ "./node_modules/lodash/without.js");
/* harmony import */ var lodash_without__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_without__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/url-utils */ "./assets/js/theme/common/utils/url-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _collapsible__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");










var defaultOptions = {
  accordionToggleSelector: '#facetedSearch .accordion-navigation, #facetedSearch .facetedSearch-toggle',
  blockerSelector: '#facetedSearch .blocker',
  clearFacetSelector: '#facetedSearch .facetedSearch-clearLink',
  componentSelector: '#facetedSearch-navList',
  facetNavListSelector: '#facetedSearch .navList',
  priceRangeErrorSelector: '#facet-range-form .form-inlineMessage',
  priceRangeFieldsetSelector: '#facet-range-form .form-fieldset',
  priceRangeFormSelector: '#facet-range-form',
  priceRangeMaxPriceSelector: $('#facetedSearch').length ? '#facet-range-form [name=max_price]' : '#facet-range-form [name=price_max]',
  priceRangeMinPriceSelector: $('#facetedSearch').length ? '#facet-range-form [name=min_price]' : '#facet-range-form [name=price_min]',
  showMoreToggleSelector: '#facetedSearch .accordion-content .toggleLink',
  facetedSearchFilterItems: '#facetedSearch-filterItems .form-input',
  modal: (0,_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal')[0],
  modalOpen: false
};

/**
 * Faceted search view component
 */
var FacetedSearch = /*#__PURE__*/function () {
  /**
   * @param {object} requestOptions - Object with options for the ajax requests
   * @param {function} callback - Function to execute after fetching templates
   * @param {object} options - Configurable options
   * @example
   *
   * let requestOptions = {
   *      templates: {
   *          productListing: 'category/product-listing',
   *          sidebar: 'category/sidebar'
   *     }
   * };
   *
   * let templatesDidLoad = function(content) {
   *     $productListingContainer.html(content.productListing);
   *     $facetedSearchContainer.html(content.sidebar);
   * };
   *
   * let facetedSearch = new FacetedSearch(requestOptions, templatesDidLoad);
   */
  function FacetedSearch(requestOptions, callback, options) {
    var _this = this;
    // Private properties
    this.requestOptions = requestOptions;
    this.callback = callback;
    this.options = lodash_extend__WEBPACK_IMPORTED_MODULE_2___default()({}, defaultOptions, options);
    this.collapsedFacets = [];
    this.collapsedFacetItems = [];

    // Init collapsibles
    (0,_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Show limited items by default
    $(this.options.facetNavListSelector).each(function (index, navList) {
      _this.collapseFacetItems($(navList));
    });

    // Mark initially collapsed accordions
    $(this.options.accordionToggleSelector).each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      if (collapsible.isCollapsed) {
        _this.collapsedFacets.push(collapsible.targetId);
      }
    });

    // Collapse all facets if initially hidden
    // NOTE: Need to execute after Collapsible gets bootstrapped
    setTimeout(function () {
      if ($(_this.options.componentSelector).is(':hidden')) {
        _this.collapseAllFacets();
      }
    });

    // Observe user events
    this.onStateChange = this.onStateChange.bind(this);
    this.onToggleClick = this.onToggleClick.bind(this);
    this.onAccordionToggle = this.onAccordionToggle.bind(this);
    this.onClearFacet = this.onClearFacet.bind(this);
    this.onFacetClick = this.onFacetClick.bind(this);
    this.onRangeSubmit = this.onRangeSubmit.bind(this);
    this.onSortBySubmit = this.onSortBySubmit.bind(this);
    this.filterFacetItems = this.filterFacetItems.bind(this);
    this.bindEvents();
  }

  // Public methods
  var _proto = FacetedSearch.prototype;
  _proto.refreshView = function refreshView(content) {
    if (content) {
      this.callback(content);
    }

    // Init collapsibles
    ;(0,_collapsible__WEBPACK_IMPORTED_MODULE_7__["default"])();

    // Init price validator
    this.initPriceValidator();

    // Restore view state
    this.restoreCollapsedFacets();
    this.restoreCollapsedFacetItems();

    // Bind events
    this.bindEvents();
  };
  _proto.updateView = function updateView() {
    var _this2 = this;
    $(this.options.blockerSelector).show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.api.getPage(_utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getUrl(), this.requestOptions, function (err, content) {
      $(_this2.options.blockerSelector).hide();
      if (err) {
        throw new Error(err);
      }

      // Refresh view with new content
      _this2.refreshView(content);

      // Refresh range view when shop-by-price enabled
      var urlParams = new URLSearchParams(window.location.search);
      if (urlParams.has('search_query')) {
        $('.reset-filters').show();
      }
      $('input[name="price_min"]').attr('value', urlParams.get('price_min'));
      $('input[name="price_max"]').attr('value', urlParams.get('price_max'));
    });
  };
  _proto.expandFacetItems = function expandFacetItems($navList) {
    var id = $navList.attr('id');

    // Remove
    this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, id);
  };
  _proto.collapseFacetItems = function collapseFacetItems($navList) {
    var id = $navList.attr('id');
    var hasMoreResults = $navList.data('hasMoreResults');
    if (hasMoreResults) {
      this.collapsedFacetItems = lodash_union__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacetItems, [id]);
    } else {
      this.collapsedFacetItems = lodash_without__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacetItems, id);
    }
  };
  _proto.toggleFacetItems = function toggleFacetItems($navList) {
    var id = $navList.attr('id');

    // Toggle depending on `collapsed` flag
    if (this.collapsedFacetItems.includes(id)) {
      this.getMoreFacetResults($navList);
      return true;
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.getMoreFacetResults = function getMoreFacetResults($navList) {
    var _this3 = this;
    var facet = $navList.data('facet');
    var facetUrl = _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].getUrl();
    if (this.requestOptions.showMore) {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.api.getPage(facetUrl, {
        template: this.requestOptions.showMore,
        params: {
          list_all: facet
        }
      }, function (err, response) {
        if (err) {
          throw new Error(err);
        }
        _this3.options.modal.open();
        _this3.options.modalOpen = true;
        _this3.options.modal.updateContent(response);
      });
    }
    this.collapseFacetItems($navList);
    return false;
  };
  _proto.filterFacetItems = function filterFacetItems(event) {
    var $items = $('.navList-item');
    var query = $(event.currentTarget).val().toLowerCase();
    $items.each(function (index, element) {
      var text = $(element).text().toLowerCase();
      if (text.indexOf(query) !== -1) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
  };
  _proto.expandFacet = function expandFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.open();
  };
  _proto.collapseFacet = function collapseFacet($accordionToggle) {
    var collapsible = $accordionToggle.data('collapsibleInstance');
    collapsible.close();
  };
  _proto.collapseAllFacets = function collapseAllFacets() {
    var _this4 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this4.collapseFacet($accordionToggle);
    });
  };
  _proto.expandAllFacets = function expandAllFacets() {
    var _this5 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      _this5.expandFacet($accordionToggle);
    });
  }

  // Private methods
;
  _proto.initPriceValidator = function initPriceValidator() {
    if ($(this.options.priceRangeFormSelector).length === 0) {
      return;
    }
    var validator = (0,_nod__WEBPACK_IMPORTED_MODULE_9__["default"])();
    var selectors = {
      errorSelector: this.options.priceRangeErrorSelector,
      fieldsetSelector: this.options.priceRangeFieldsetSelector,
      formSelector: this.options.priceRangeFormSelector,
      maxPriceSelector: this.options.priceRangeMaxPriceSelector,
      minPriceSelector: this.options.priceRangeMinPriceSelector
    };
    _utils_form_utils__WEBPACK_IMPORTED_MODULE_8__.Validators.setMinMaxPriceValidation(validator, selectors, this.options.validationErrorMessages);
    this.priceRangeValidator = validator;
  };
  _proto.restoreCollapsedFacetItems = function restoreCollapsedFacetItems() {
    var _this6 = this;
    var $navLists = $(this.options.facetNavListSelector);

    // Restore collapsed state for each facet
    $navLists.each(function (index, navList) {
      var $navList = $(navList);
      var id = $navList.attr('id');
      var shouldCollapse = _this6.collapsedFacetItems.includes(id);
      if (shouldCollapse) {
        _this6.collapseFacetItems($navList);
      } else {
        _this6.expandFacetItems($navList);
      }
    });
  };
  _proto.restoreCollapsedFacets = function restoreCollapsedFacets() {
    var _this7 = this;
    var $accordionToggles = $(this.options.accordionToggleSelector);
    $accordionToggles.each(function (index, accordionToggle) {
      var $accordionToggle = $(accordionToggle);
      var collapsible = $accordionToggle.data('collapsibleInstance');
      var id = collapsible.targetId;
      var shouldCollapse = _this7.collapsedFacets.includes(id);
      if (shouldCollapse) {
        _this7.collapseFacet($accordionToggle);
      } else {
        _this7.expandFacet($accordionToggle);
      }
    });
  };
  _proto.bindEvents = function bindEvents() {
    // Clean-up
    this.unbindEvents();

    // DOM events
    $(window).on('statechange', this.onStateChange);
    $(window).on('popstate', this.onPopState);
    $(document).on('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).on('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).on('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).on('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.on('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.on('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.on('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.unbindEvents = function unbindEvents() {
    // DOM events
    $(window).off('statechange', this.onStateChange);
    $(window).off('popstate', this.onPopState);
    $(document).off('click', this.options.showMoreToggleSelector, this.onToggleClick);
    $(document).off('toggle.collapsible', this.options.accordionToggleSelector, this.onAccordionToggle);
    $(document).off('keyup', this.options.facetedSearchFilterItems, this.filterFacetItems);
    $(this.options.clearFacetSelector).off('click', this.onClearFacet);

    // Hooks
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.off('facetedSearch-facet-clicked', this.onFacetClick);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.off('facetedSearch-range-submitted', this.onRangeSubmit);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_3__.hooks.off('sortBy-submitted', this.onSortBySubmit);
  };
  _proto.onClearFacet = function onClearFacet(event) {
    var $link = $(event.currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    event.stopPropagation();

    // Update URL
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
  };
  _proto.onToggleClick = function onToggleClick(event) {
    var $toggle = $(event.currentTarget);
    var $navList = $($toggle.attr('href'));

    // Prevent default
    event.preventDefault();

    // Toggle visible items
    this.toggleFacetItems($navList);
  };
  _proto.onFacetClick = function onFacetClick(event, currentTarget) {
    var $link = $(currentTarget);
    var url = $link.attr('href');
    event.preventDefault();
    $link.toggleClass('is-selected');

    // Update URL
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url);
    if (this.options.modalOpen) {
      this.options.modal.close();
    }
  };
  _proto.onSortBySubmit = function onSortBySubmit(event, currentTarget) {
    var url = url__WEBPACK_IMPORTED_MODULE_4__.parse(window.location.href, true);
    var queryParams = $(currentTarget).serialize().split('=');
    url.query[queryParams[0]] = queryParams[1];
    delete url.query.page;

    // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead
    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    event.preventDefault();
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_4__.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].buildQueryString(urlQueryParams)
    }));
  };
  _proto.onRangeSubmit = function onRangeSubmit(event, currentTarget) {
    event.preventDefault();
    if (!this.priceRangeValidator.areAll(_nod__WEBPACK_IMPORTED_MODULE_9__["default"].constants.VALID)) {
      return;
    }
    var url = url__WEBPACK_IMPORTED_MODULE_4__.parse(window.location.href, true);
    var queryParams = decodeURI($(currentTarget).serialize()).split('&');
    queryParams = _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].parseQueryParams(queryParams);
    for (var key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        url.query[key] = queryParams[key];
      }
    }

    // Url object `query` is not a traditional JavaScript Object on all systems, clone it instead
    var urlQueryParams = {};
    Object.assign(urlQueryParams, url.query);
    _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].goToUrl(url__WEBPACK_IMPORTED_MODULE_4__.format({
      pathname: url.pathname,
      search: _utils_url_utils__WEBPACK_IMPORTED_MODULE_5__["default"].buildQueryString(urlQueryParams)
    }));
  };
  _proto.onStateChange = function onStateChange() {
    this.updateView();
  };
  _proto.onAccordionToggle = function onAccordionToggle(event) {
    var $accordionToggle = $(event.currentTarget);
    var collapsible = $accordionToggle.data('collapsibleInstance');
    var id = collapsible.targetId;
    if (collapsible.isCollapsed) {
      this.collapsedFacets = lodash_union__WEBPACK_IMPORTED_MODULE_0___default()(this.collapsedFacets, [id]);
    } else {
      this.collapsedFacets = lodash_without__WEBPACK_IMPORTED_MODULE_1___default()(this.collapsedFacets, id);
    }
  };
  _proto.onPopState = function onPopState() {
    if (document.location.hash !== '') return;
    $(window).trigger('statechange');
  };
  return FacetedSearch;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FacetedSearch);

/***/ },

/***/ "./assets/js/theme/common/utils/url-utils.js"
/*!***************************************************!*\
  !*** ./assets/js/theme/common/utils/url-utils.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var urlUtils = {
  getUrl: function getUrl() {
    return "" + window.location.pathname + window.location.search;
  },
  goToUrl: function goToUrl(url) {
    window.history.pushState({}, document.title, url);
    $(window).trigger('statechange');
  },
  replaceParams: function replaceParams(url, params) {
    var parsed = url__WEBPACK_IMPORTED_MODULE_0__.parse(url, true);
    var param;

    // Let the formatter use the query object to build the new url
    parsed.search = null;
    for (param in params) {
      if (params.hasOwnProperty(param)) {
        parsed.query[param] = params[param];
      }
    }
    return url__WEBPACK_IMPORTED_MODULE_0__.format(parsed);
  },
  buildQueryString: function buildQueryString(queryData) {
    var out = '';
    var key;
    for (key in queryData) {
      if (queryData.hasOwnProperty(key)) {
        if (Array.isArray(queryData[key])) {
          var ndx = void 0;
          for (ndx in queryData[key]) {
            if (queryData[key].hasOwnProperty(ndx)) {
              out += "&" + key + "=" + queryData[key][ndx];
            }
          }
        } else {
          out += "&" + key + "=" + queryData[key];
        }
      }
    }
    return out.substring(1);
  },
  parseQueryParams: function parseQueryParams(queryData) {
    var params = {};
    for (var i = 0; i < queryData.length; i++) {
      var temp = queryData[i].split('=');
      if (temp[0] in params) {
        if (Array.isArray(params[temp[0]])) {
          params[temp[0]].push(temp[1]);
        } else {
          params[temp[0]] = [params[temp[0]], temp[1]];
        }
      } else {
        params[temp[0]] = temp[1];
      }
    }
    return params;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (urlUtils);

/***/ },

/***/ "./assets/js/theme/global/compare-products.js"
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
__webpack_require__.dn(__WEBPACK_DEFAULT_EXPORT__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function decrementCounter(counter, item) {
  var index = counter.indexOf(item);
  if (index > -1) {
    counter.splice(index, 1);
  }
}
function incrementCounter(counter, item) {
  counter.push(item);
}
function updateCounterNav(counter, $link, urls) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }
    $link.attr('href', urls.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(_ref) {
  var noCompareMessage = _ref.noCompareMessage,
    urls = _ref.urls;
  var compareCounter = [];
  var $compareLink = $('a[data-compare-nav]');
  $('body').on('compareReset', function () {
    var $checked = $('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? $checked.map(function (index, element) {
      return element.value;
    }).get() : [];
    updateCounterNav(compareCounter, $compareLink, urls);
  });
  $('body').triggerHandler('compareReset');
  $('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = $('a[data-compare-nav]');
    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }
    updateCounterNav(compareCounter, $clickedCompareLink, urls);
  });
  $('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = $('body').find('input[name="products\[\]"]:checked');
    if ($clickedCheckedInput.length <= 1) {
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.showAlertModal)(noCompareMessage);
      return false;
    }
  });
}

/***/ },

/***/ "?4f7e"
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
() {

/* (ignored) */

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXRhbG9nX2pzLWFzc2V0c19qc190aGVtZV9jb21tb25fZmFjZXRlZC1zZWFyY2hfanMtYXNzZXRzX2pzX3RoZW1lX2dsb2JhbF9jby0zZjVhZmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLENBQXlDO0FBQ087QUFDMUI7QUFBQSxJQUVERyxXQUFXLDBCQUFBQyxZQUFBO0VBQzVCLFNBQUFELFlBQVlFLE9BQU8sRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFDakJBLEtBQUEsR0FBQUYsWUFBQSxDQUFBRyxJQUFBLE9BQU1GLE9BQU8sQ0FBQztJQUVkRyxNQUFNLENBQUNDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxZQUFNO01BQzFDLElBQUlDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDQyxFQUFFLEtBQUssTUFBTSxFQUFFO1FBQ3RDSixNQUFNLENBQUNLLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUM7TUFDM0Q7SUFDSixDQUFDLENBQUM7SUFBQyxPQUFBUixLQUFBO0VBQ1A7RUFBQ1MsY0FBQSxDQUFBWixXQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBWSxNQUFBLEdBQUFiLFdBQUEsQ0FBQWMsU0FBQTtFQUFBRCxNQUFBLENBRURFLG9CQUFvQixHQUFwQixTQUFBQSxvQkFBb0JBLENBQUEsRUFBRztJQUNuQixJQUFNQyxlQUFlLEdBQUdDLENBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQztJQUUzRCxJQUFJWixNQUFNLENBQUNLLFlBQVksQ0FBQ1EsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUFFO01BQzdDRixlQUFlLENBQUNHLE9BQU8sQ0FBQyxPQUFPLENBQUM7TUFDaENkLE1BQU0sQ0FBQ0ssWUFBWSxDQUFDVSxVQUFVLENBQUMsY0FBYyxDQUFDO0lBQ2xEO0VBQ0osQ0FBQztFQUFBUCxNQUFBLENBRURRLGNBQWMsR0FBZCxTQUFBQSxjQUFjQSxDQUFDQyxLQUFL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TTBELG9CQUFvQixHQUFHcE0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDc0wsSUFBSSxDQUFDLG9DQUFvQyxDQUFDO0lBRWpGLElBQUljLG9CQUFvQixDQUFDOUosTUFBTSxJQUFJLENBQUMsRUFBRTtNQUNsQ3FJLHNEQUFjLENBQUNlLGdCQUFnQixDQUFDO01BQ2hDLE9BQU8sS0FBSztJQUNoQjtFQUNKLENBQUMsQ0FBQztBQUNOLEM7Ozs7Ozs7Ozs7QUM3REEsZSIsInNvdXJjZXMiOlsid2VicGFjazovL0ljb25pYy8uL2Fzc2V0cy9qcy90aGVtZS9jYXRhbG9nLmpzIiwid2VicGFjazovL0ljb25pYy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vZmFjZXRlZC1zZWFyY2guanMiLCJ3ZWJwYWNrOi8vSWNvbmljLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy91cmwtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vSWNvbmljLy4vYXNzZXRzL2pzL3RoZW1lL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzLmpzIiwid2VicGFjazovL0ljb25pYy9pZ25vcmVkfEM6XFxVc2Vyc1xcREVMTFxcT25lRHJpdmVcXERlc2t0b3BcXEthdml0aGFcXERDVC1UZXN0U2l0ZS1TdGVuY2lsLVRoZW1lXFxJY29uaWMtMS4wLjJcXG5vZGVfbW9kdWxlc1xcb2JqZWN0LWluc3BlY3R8Li91dGlsLmluc3BlY3QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL2NvbW1vbi91dGlscy91cmwtdXRpbHMnO1xuaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXRhbG9nUGFnZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5pZCA9PT0gJ3NvcnQnKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzb3J0QnlTdGF0dXMnLCAnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXJyYW5nZUZvY3VzT25Tb3J0QnkoKSB7XG4gICAgICAgIGNvbnN0ICRzb3J0QnlTZWxlY3RvciA9ICQoJ1tkYXRhLXNvcnQtYnk9XCJwcm9kdWN0XCJdICNzb3J0Jyk7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc29ydEJ5U3RhdHVzJykpIHtcbiAgICAgICAgICAgICRzb3J0QnlTZWxlY3Rvci50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzb3J0QnlTdGF0dXMnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uU29ydEJ5U3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHVybCA9IFVybC5wYXJzZSh3aW5kb3cubG9jYXRpb24uaHJlZiwgdHJ1ZSk7XG4gICAgICAgIGNvbnN0IHF1ZXJ5UGFyYW1zID0gJChjdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKS5zcGxpdCgnPScpO1xuXG4gICAgICAgIHVybC5xdWVyeVtxdWVyeVBhcmFtc1swXV0gPSBxdWVyeVBhcmFtc1sxXTtcbiAgICAgICAgZGVsZXRlIHVybC5xdWVyeS5wYWdlO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9IFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsLnF1ZXJ5KSB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBob29rcywgYXBpIH0gZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBVcmwgZnJvbSAndXJsJztcbmltcG9ydCB1cmxVdGlscyBmcm9tICcuL3V0aWxzL3VybC11dGlscyc7XG5pbXBvcnQgbW9kYWxGYWN0b3J5IGZyb20gJy4uL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgY29sbGFwc2libGVGYWN0b3J5IGZyb20gJy4vY29sbGFwc2libGUnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJy4vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgbm9kIGZyb20gJy4vbm9kJztcblxuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBhY2NvcmRpb25Ub2dnbGVTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoIC5hY2NvcmRpb24tbmF2aWdhdGlvbiwgI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtdG9nZ2xlJyxcbiAgICBibG9ja2VyU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYmxvY2tlcicsXG4gICAgY2xlYXJGYWNldFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLmZhY2V0ZWRTZWFyY2gtY2xlYXJMaW5rJyxcbiAgICBjb21wb25lbnRTZWxlY3RvcjogJyNmYWNldGVkU2VhcmNoLW5hdkxpc3QnLFxuICAgIGZhY2V0TmF2TGlzdFNlbGVjdG9yOiAnI2ZhY2V0ZWRTZWFyY2ggLm5hdkxpc3QnLFxuICAgIHByaWNlUmFuZ2VFcnJvclNlbGVjdG9yOiAnI2ZhY2V0LXJhbmdlLWZvcm0gLmZvcm0taW5saW5lTWVzc2FnZScsXG4gICAgcHJpY2VSYW5nZUZpZWxkc2V0U2VsZWN0b3I6ICcjZmFjZXQtcmFuZ2UtZm9ybSAuZm9ybS1maWVsZHNldCcsXG4gICAgcHJpY2VSYW5nZUZvcm1TZWxlY3RvcjogJyNmYWNldC1yYW5nZS1mb3JtJyxcbiAgICBwcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcjogJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPyAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9bWF4X3ByaWNlXScgOiAnI2ZhY2V0LXJhbmdlLWZvcm0gW25hbWU9cHJpY2VfbWF4XScsXG4gICAgcHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3I6ICQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID8gJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPW1pbl9wcmljZV0nIDogJyNmYWNldC1yYW5nZS1mb3JtIFtuYW1lPXByaWNlX21pbl0nLFxuICAgIHNob3dNb3JlVG9nZ2xlU2VsZWN0b3I6ICcjZmFjZXRlZFNlYXJjaCAuYWNjb3JkaW9uLWNvbnRlbnQgLnRvZ2dsZUxpbmsnLFxuICAgIGZhY2V0ZWRTZWFyY2hGaWx0ZXJJdGVtczogJyNmYWNldGVkU2VhcmNoLWZpbHRlckl0ZW1zIC5mb3JtLWlucHV0JyxcbiAgICBtb2RhbDogbW9kYWxGYWN0b3J5KCcjbW9kYWwnKVswXSxcbiAgICBtb2RhbE9wZW46IGZhbHNlLFxufTtcblxuLyoqXG4gKiBGYWNldGVkIHNlYXJjaCB2aWV3IGNvbXBvbmVudFxuICovXG5jbGFzcyBGYWNldGVkU2VhcmNoIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVxdWVzdE9wdGlvbnMgLSBPYmplY3Qgd2l0aCBvcHRpb25zIGZvciB0aGUgYWpheCByZXF1ZXN0c1xuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIC0gRnVuY3Rpb24gdG8gZXhlY3V0ZSBhZnRlciBmZXRjaGluZyB0ZW1wbGF0ZXNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyAtIENvbmZpZ3VyYWJsZSBvcHRpb25zXG4gICAgICogQGV4YW1wbGVcbiAgICAgKlxuICAgICAqIGxldCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgKiAgICAgIHRlbXBsYXRlczoge1xuICAgICAqICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgKiAgICAgICAgICBzaWRlYmFyOiAnY2F0ZWdvcnkvc2lkZWJhcidcbiAgICAgKiAgICAgfVxuICAgICAqIH07XG4gICAgICpcbiAgICAgKiBsZXQgdGVtcGxhdGVzRGlkTG9hZCA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgICAgKiAgICAgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyLmh0bWwoY29udGVudC5wcm9kdWN0TGlzdGluZyk7XG4gICAgICogICAgICRmYWNldGVkU2VhcmNoQ29udGFpbmVyLmh0bWwoY29udGVudC5zaWRlYmFyKTtcbiAgICAgKiB9O1xuICAgICAqXG4gICAgICogbGV0IGZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgdGVtcGxhdGVzRGlkTG9hZCk7XG4gICAgICovXG4gICAgY29uc3RydWN0b3IocmVxdWVzdE9wdGlvbnMsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgICAgIC8vIFByaXZhdGUgcHJvcGVydGllc1xuICAgICAgICB0aGlzLnJlcXVlc3RPcHRpb25zID0gcmVxdWVzdE9wdGlvbnM7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5vcHRpb25zID0gXy5leHRlbmQoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gW107XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZXNcbiAgICAgICAgY29sbGFwc2libGVGYWN0b3J5KCk7XG5cbiAgICAgICAgLy8gSW5pdCBwcmljZSB2YWxpZGF0b3JcbiAgICAgICAgdGhpcy5pbml0UHJpY2VWYWxpZGF0b3IoKTtcblxuICAgICAgICAvLyBTaG93IGxpbWl0ZWQgaXRlbXMgYnkgZGVmYXVsdFxuICAgICAgICAkKHRoaXMub3B0aW9ucy5mYWNldE5hdkxpc3RTZWxlY3RvcikuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VGYWNldEl0ZW1zKCQobmF2TGlzdCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBNYXJrIGluaXRpYWxseSBjb2xsYXBzZWQgYWNjb3JkaW9uc1xuICAgICAgICAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvcikuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbGxhcHNpYmxlID0gJGFjY29yZGlvblRvZ2dsZS5kYXRhKCdjb2xsYXBzaWJsZUluc3RhbmNlJyk7XG5cbiAgICAgICAgICAgIGlmIChjb2xsYXBzaWJsZS5pc0NvbGxhcHNlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzLnB1c2goY29sbGFwc2libGUudGFyZ2V0SWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBDb2xsYXBzZSBhbGwgZmFjZXRzIGlmIGluaXRpYWxseSBoaWRkZW5cbiAgICAgICAgLy8gTk9URTogTmVlZCB0byBleGVjdXRlIGFmdGVyIENvbGxhcHNpYmxlIGdldHMgYm9vdHN0cmFwcGVkXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKCQodGhpcy5vcHRpb25zLmNvbXBvbmVudFNlbGVjdG9yKS5pcygnOmhpZGRlbicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbEZhY2V0cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBPYnNlcnZlIHVzZXIgZXZlbnRzXG4gICAgICAgIHRoaXMub25TdGF0ZUNoYW5nZSA9IHRoaXMub25TdGF0ZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uVG9nZ2xlQ2xpY2sgPSB0aGlzLm9uVG9nZ2xlQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSA9IHRoaXMub25BY2NvcmRpb25Ub2dnbGUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbkNsZWFyRmFjZXQgPSB0aGlzLm9uQ2xlYXJGYWNldC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRmFjZXRDbGljayA9IHRoaXMub25GYWNldENsaWNrLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMub25SYW5nZVN1Ym1pdCA9IHRoaXMub25SYW5nZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZpbHRlckZhY2V0SXRlbXMgPSB0aGlzLmZpbHRlckZhY2V0SXRlbXMuYmluZCh0aGlzKTtcblxuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgIHJlZnJlc2hWaWV3KGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soY29udGVudCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlc1xuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICAvLyBJbml0IHByaWNlIHZhbGlkYXRvclxuICAgICAgICB0aGlzLmluaXRQcmljZVZhbGlkYXRvcigpO1xuXG4gICAgICAgIC8vIFJlc3RvcmUgdmlldyBzdGF0ZVxuICAgICAgICB0aGlzLnJlc3RvcmVDb2xsYXBzZWRGYWNldHMoKTtcbiAgICAgICAgdGhpcy5yZXN0b3JlQ29sbGFwc2VkRmFjZXRJdGVtcygpO1xuXG4gICAgICAgIC8vIEJpbmQgZXZlbnRzXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHVwZGF0ZVZpZXcoKSB7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmJsb2NrZXJTZWxlY3Rvcikuc2hvdygpO1xuXG4gICAgICAgIGFwaS5nZXRQYWdlKHVybFV0aWxzLmdldFVybCgpLCB0aGlzLnJlcXVlc3RPcHRpb25zLCAoZXJyLCBjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAkKHRoaXMub3B0aW9ucy5ibG9ja2VyU2VsZWN0b3IpLmhpZGUoKTtcblxuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBSZWZyZXNoIHZpZXcgd2l0aCBuZXcgY29udGVudFxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoVmlldyhjb250ZW50KTtcblxuICAgICAgICAgICAgLy8gUmVmcmVzaCByYW5nZSB2aWV3IHdoZW4gc2hvcC1ieS1wcmljZSBlbmFibGVkXG4gICAgICAgICAgICBjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xuXG4gICAgICAgICAgICBpZiAodXJsUGFyYW1zLmhhcygnc2VhcmNoX3F1ZXJ5JykpIHtcbiAgICAgICAgICAgICAgICAkKCcucmVzZXQtZmlsdGVycycpLnNob3coKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cInByaWNlX21pblwiXScpLmF0dHIoJ3ZhbHVlJywgdXJsUGFyYW1zLmdldCgncHJpY2VfbWluJykpO1xuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cInByaWNlX21heFwiXScpLmF0dHIoJ3ZhbHVlJywgdXJsUGFyYW1zLmdldCgncHJpY2VfbWF4JykpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBleHBhbmRGYWNldEl0ZW1zKCRuYXZMaXN0KSB7XG4gICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcblxuICAgICAgICAvLyBSZW1vdmVcbiAgICAgICAgdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zID0gXy53aXRob3V0KHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcywgaWQpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCkge1xuICAgICAgICBjb25zdCBpZCA9ICRuYXZMaXN0LmF0dHIoJ2lkJyk7XG4gICAgICAgIGNvbnN0IGhhc01vcmVSZXN1bHRzID0gJG5hdkxpc3QuZGF0YSgnaGFzTW9yZVJlc3VsdHMnKTtcblxuICAgICAgICBpZiAoaGFzTW9yZVJlc3VsdHMpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8udW5pb24odGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLCBbaWRdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRJdGVtcyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0SXRlbXMsIGlkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUZhY2V0SXRlbXMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgaWQgPSAkbmF2TGlzdC5hdHRyKCdpZCcpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBkZXBlbmRpbmcgb24gYGNvbGxhcHNlZGAgZmxhZ1xuICAgICAgICBpZiAodGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLmluY2x1ZGVzKGlkKSkge1xuICAgICAgICAgICAgdGhpcy5nZXRNb3JlRmFjZXRSZXN1bHRzKCRuYXZMaXN0KTtcblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGdldE1vcmVGYWNldFJlc3VsdHMoJG5hdkxpc3QpIHtcbiAgICAgICAgY29uc3QgZmFjZXQgPSAkbmF2TGlzdC5kYXRhKCdmYWNldCcpO1xuICAgICAgICBjb25zdCBmYWNldFVybCA9IHVybFV0aWxzLmdldFVybCgpO1xuXG4gICAgICAgIGlmICh0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlKSB7XG4gICAgICAgICAgICBhcGkuZ2V0UGFnZShmYWNldFVybCwge1xuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB0aGlzLnJlcXVlc3RPcHRpb25zLnNob3dNb3JlLFxuICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBsaXN0X2FsbDogZmFjZXQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMubW9kYWwub3BlbigpO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbE9wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBmaWx0ZXJGYWNldEl0ZW1zKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICRpdGVtcyA9ICQoJy5uYXZMaXN0LWl0ZW0nKTtcbiAgICAgICAgY29uc3QgcXVlcnkgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnZhbCgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgJGl0ZW1zLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gJChlbGVtZW50KS50ZXh0KCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIGlmICh0ZXh0LmluZGV4T2YocXVlcnkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICQoZWxlbWVudCkuc2hvdygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXhwYW5kRmFjZXQoJGFjY29yZGlvblRvZ2dsZSkge1xuICAgICAgICBjb25zdCBjb2xsYXBzaWJsZSA9ICRhY2NvcmRpb25Ub2dnbGUuZGF0YSgnY29sbGFwc2libGVJbnN0YW5jZScpO1xuXG4gICAgICAgIGNvbGxhcHNpYmxlLm9wZW4oKTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpIHtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcblxuICAgICAgICBjb2xsYXBzaWJsZS5jbG9zZSgpO1xuICAgIH1cblxuICAgIGNvbGxhcHNlQWxsRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlRmFjZXQoJGFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV4cGFuZEFsbEZhY2V0cygpIHtcbiAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZXMgPSAkKHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3Rvcik7XG5cbiAgICAgICAgJGFjY29yZGlvblRvZ2dsZXMuZWFjaCgoaW5kZXgsIGFjY29yZGlvblRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJGFjY29yZGlvblRvZ2dsZSA9ICQoYWNjb3JkaW9uVG9nZ2xlKTtcblxuICAgICAgICAgICAgdGhpcy5leHBhbmRGYWNldCgkYWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUHJpdmF0ZSBtZXRob2RzXG4gICAgaW5pdFByaWNlVmFsaWRhdG9yKCkge1xuICAgICAgICBpZiAoJCh0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcikubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBub2QoKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0b3JzID0ge1xuICAgICAgICAgICAgZXJyb3JTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VFcnJvclNlbGVjdG9yLFxuICAgICAgICAgICAgZmllbGRzZXRTZWxlY3RvcjogdGhpcy5vcHRpb25zLnByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yOiB0aGlzLm9wdGlvbnMucHJpY2VSYW5nZUZvcm1TZWxlY3RvcixcbiAgICAgICAgICAgIG1heFByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3I6IHRoaXMub3B0aW9ucy5wcmljZVJhbmdlTWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgfTtcblxuICAgICAgICBWYWxpZGF0b3JzLnNldE1pbk1heFByaWNlVmFsaWRhdGlvbih2YWxpZGF0b3IsIHNlbGVjdG9ycywgdGhpcy5vcHRpb25zLnZhbGlkYXRpb25FcnJvck1lc3NhZ2VzKTtcblxuICAgICAgICB0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IgPSB2YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgcmVzdG9yZUNvbGxhcHNlZEZhY2V0SXRlbXMoKSB7XG4gICAgICAgIGNvbnN0ICRuYXZMaXN0cyA9ICQodGhpcy5vcHRpb25zLmZhY2V0TmF2TGlzdFNlbGVjdG9yKTtcblxuICAgICAgICAvLyBSZXN0b3JlIGNvbGxhcHNlZCBzdGF0ZSBmb3IgZWFjaCBmYWNldFxuICAgICAgICAkbmF2TGlzdHMuZWFjaCgoaW5kZXgsIG5hdkxpc3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRuYXZMaXN0ID0gJChuYXZMaXN0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJG5hdkxpc3QuYXR0cignaWQnKTtcbiAgICAgICAgICAgIGNvbnN0IHNob3VsZENvbGxhcHNlID0gdGhpcy5jb2xsYXBzZWRGYWNldEl0ZW1zLmluY2x1ZGVzKGlkKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0SXRlbXMoJG5hdkxpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXN0b3JlQ29sbGFwc2VkRmFjZXRzKCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlcyA9ICQodGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yKTtcblxuICAgICAgICAkYWNjb3JkaW9uVG9nZ2xlcy5lYWNoKChpbmRleCwgYWNjb3JkaW9uVG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gY29sbGFwc2libGUudGFyZ2V0SWQ7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRDb2xsYXBzZSA9IHRoaXMuY29sbGFwc2VkRmFjZXRzLmluY2x1ZGVzKGlkKTtcblxuICAgICAgICAgICAgaWYgKHNob3VsZENvbGxhcHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEZhY2V0KCRhY2NvcmRpb25Ub2dnbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICAvLyBDbGVhbi11cFxuICAgICAgICB0aGlzLnVuYmluZEV2ZW50cygpO1xuXG4gICAgICAgIC8vIERPTSBldmVudHNcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzdGF0ZWNoYW5nZScsIHRoaXMub25TdGF0ZUNoYW5nZSk7XG4gICAgICAgICQod2luZG93KS5vbigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCB0aGlzLm9wdGlvbnMuc2hvd01vcmVUb2dnbGVTZWxlY3RvciwgdGhpcy5vblRvZ2dsZUNsaWNrKTtcbiAgICAgICAgJChkb2N1bWVudCkub24oJ3RvZ2dsZS5jb2xsYXBzaWJsZScsIHRoaXMub3B0aW9ucy5hY2NvcmRpb25Ub2dnbGVTZWxlY3RvciwgdGhpcy5vbkFjY29yZGlvblRvZ2dsZSk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9uKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub24oJ2NsaWNrJywgdGhpcy5vbkNsZWFyRmFjZXQpO1xuXG4gICAgICAgIC8vIEhvb2tzXG4gICAgICAgIGhvb2tzLm9uKCdmYWNldGVkU2VhcmNoLWZhY2V0LWNsaWNrZWQnLCB0aGlzLm9uRmFjZXRDbGljayk7XG4gICAgICAgIGhvb2tzLm9uKCdmYWNldGVkU2VhcmNoLXJhbmdlLXN1Ym1pdHRlZCcsIHRoaXMub25SYW5nZVN1Ym1pdCk7XG4gICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICAvLyBET00gZXZlbnRzXG4gICAgICAgICQod2luZG93KS5vZmYoJ3N0YXRlY2hhbmdlJywgdGhpcy5vblN0YXRlQ2hhbmdlKTtcbiAgICAgICAgJCh3aW5kb3cpLm9mZigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAkKGRvY3VtZW50KS5vZmYoJ2NsaWNrJywgdGhpcy5vcHRpb25zLnNob3dNb3JlVG9nZ2xlU2VsZWN0b3IsIHRoaXMub25Ub2dnbGVDbGljayk7XG4gICAgICAgICQoZG9jdW1lbnQpLm9mZigndG9nZ2xlLmNvbGxhcHNpYmxlJywgdGhpcy5vcHRpb25zLmFjY29yZGlvblRvZ2dsZVNlbGVjdG9yLCB0aGlzLm9uQWNjb3JkaW9uVG9nZ2xlKTtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCdrZXl1cCcsIHRoaXMub3B0aW9ucy5mYWNldGVkU2VhcmNoRmlsdGVySXRlbXMsIHRoaXMuZmlsdGVyRmFjZXRJdGVtcyk7XG4gICAgICAgICQodGhpcy5vcHRpb25zLmNsZWFyRmFjZXRTZWxlY3Rvcikub2ZmKCdjbGljaycsIHRoaXMub25DbGVhckZhY2V0KTtcblxuICAgICAgICAvLyBIb29rc1xuICAgICAgICBob29rcy5vZmYoJ2ZhY2V0ZWRTZWFyY2gtZmFjZXQtY2xpY2tlZCcsIHRoaXMub25GYWNldENsaWNrKTtcbiAgICAgICAgaG9va3Mub2ZmKCdmYWNldGVkU2VhcmNoLXJhbmdlLXN1Ym1pdHRlZCcsIHRoaXMub25SYW5nZVN1Ym1pdCk7XG4gICAgICAgIGhvb2tzLm9mZignc29ydEJ5LXN1Ym1pdHRlZCcsIHRoaXMub25Tb3J0QnlTdWJtaXQpO1xuICAgIH1cblxuICAgIG9uQ2xlYXJGYWNldChldmVudCkge1xuICAgICAgICBjb25zdCAkbGluayA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGNvbnN0IHVybCA9ICRsaW5rLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICAvLyBVcGRhdGUgVVJMXG4gICAgICAgIHVybFV0aWxzLmdvVG9VcmwodXJsKTtcbiAgICB9XG5cbiAgICBvblRvZ2dsZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0ICR0b2dnbGUgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBjb25zdCAkbmF2TGlzdCA9ICQoJHRvZ2dsZS5hdHRyKCdocmVmJykpO1xuXG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSB2aXNpYmxlIGl0ZW1zXG4gICAgICAgIHRoaXMudG9nZ2xlRmFjZXRJdGVtcygkbmF2TGlzdCk7XG4gICAgfVxuXG4gICAgb25GYWNldENsaWNrKGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0ICRsaW5rID0gJChjdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgdXJsID0gJGxpbmsuYXR0cignaHJlZicpO1xuXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgJGxpbmsudG9nZ2xlQ2xhc3MoJ2lzLXNlbGVjdGVkJyk7XG5cbiAgICAgICAgLy8gVXBkYXRlIFVSTFxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKHVybCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb2RhbE9wZW4pIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5tb2RhbC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Tb3J0QnlTdWJtaXQoZXZlbnQsIGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgY29uc3QgdXJsID0gVXJsLnBhcnNlKHdpbmRvdy5sb2NhdGlvbi5ocmVmLCB0cnVlKTtcbiAgICAgICAgY29uc3QgcXVlcnlQYXJhbXMgPSAkKGN1cnJlbnRUYXJnZXQpLnNlcmlhbGl6ZSgpLnNwbGl0KCc9Jyk7XG5cbiAgICAgICAgdXJsLnF1ZXJ5W3F1ZXJ5UGFyYW1zWzBdXSA9IHF1ZXJ5UGFyYW1zWzFdO1xuICAgICAgICBkZWxldGUgdXJsLnF1ZXJ5LnBhZ2U7XG5cbiAgICAgICAgLy8gVXJsIG9iamVjdCBgcXVlcnlgIGlzIG5vdCBhIHRyYWRpdGlvbmFsIEphdmFTY3JpcHQgT2JqZWN0IG9uIGFsbCBzeXN0ZW1zLCBjbG9uZSBpdCBpbnN0ZWFkXG4gICAgICAgIGNvbnN0IHVybFF1ZXJ5UGFyYW1zID0ge307XG4gICAgICAgIE9iamVjdC5hc3NpZ24odXJsUXVlcnlQYXJhbXMsIHVybC5xdWVyeSk7XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsUXVlcnlQYXJhbXMpIH0pKTtcbiAgICB9XG5cbiAgICBvblJhbmdlU3VibWl0KGV2ZW50LCBjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnByaWNlUmFuZ2VWYWxpZGF0b3IuYXJlQWxsKG5vZC5jb25zdGFudHMuVkFMSUQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cmwgPSBVcmwucGFyc2Uod2luZG93LmxvY2F0aW9uLmhyZWYsIHRydWUpO1xuICAgICAgICBsZXQgcXVlcnlQYXJhbXMgPSBkZWNvZGVVUkkoJChjdXJyZW50VGFyZ2V0KS5zZXJpYWxpemUoKSkuc3BsaXQoJyYnKTtcbiAgICAgICAgcXVlcnlQYXJhbXMgPSB1cmxVdGlscy5wYXJzZVF1ZXJ5UGFyYW1zKHF1ZXJ5UGFyYW1zKTtcblxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBxdWVyeVBhcmFtcykge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5UGFyYW1zLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB1cmwucXVlcnlba2V5XSA9IHF1ZXJ5UGFyYW1zW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcmwgb2JqZWN0IGBxdWVyeWAgaXMgbm90IGEgdHJhZGl0aW9uYWwgSmF2YVNjcmlwdCBPYmplY3Qgb24gYWxsIHN5c3RlbXMsIGNsb25lIGl0IGluc3RlYWRcbiAgICAgICAgY29uc3QgdXJsUXVlcnlQYXJhbXMgPSB7fTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih1cmxRdWVyeVBhcmFtcywgdXJsLnF1ZXJ5KTtcblxuICAgICAgICB1cmxVdGlscy5nb1RvVXJsKFVybC5mb3JtYXQoeyBwYXRobmFtZTogdXJsLnBhdGhuYW1lLCBzZWFyY2g6IHVybFV0aWxzLmJ1aWxkUXVlcnlTdHJpbmcodXJsUXVlcnlQYXJhbXMpIH0pKTtcbiAgICB9XG5cbiAgICBvblN0YXRlQ2hhbmdlKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVZpZXcoKTtcbiAgICB9XG5cbiAgICBvbkFjY29yZGlvblRvZ2dsZShldmVudCkge1xuICAgICAgICBjb25zdCAkYWNjb3JkaW9uVG9nZ2xlID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSAkYWNjb3JkaW9uVG9nZ2xlLmRhdGEoJ2NvbGxhcHNpYmxlSW5zdGFuY2UnKTtcbiAgICAgICAgY29uc3QgaWQgPSBjb2xsYXBzaWJsZS50YXJnZXRJZDtcblxuICAgICAgICBpZiAoY29sbGFwc2libGUuaXNDb2xsYXBzZWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkRmFjZXRzID0gXy51bmlvbih0aGlzLmNvbGxhcHNlZEZhY2V0cywgW2lkXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZEZhY2V0cyA9IF8ud2l0aG91dCh0aGlzLmNvbGxhcHNlZEZhY2V0cywgaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Qb3BTdGF0ZSgpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmxvY2F0aW9uLmhhc2ggIT09ICcnKSByZXR1cm47XG5cbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGYWNldGVkU2VhcmNoO1xuIiwiaW1wb3J0IFVybCBmcm9tICd1cmwnO1xuXG5jb25zdCB1cmxVdGlscyA9IHtcbiAgICBnZXRVcmw6ICgpID0+IGAke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX0ke3dpbmRvdy5sb2NhdGlvbi5zZWFyY2h9YCxcblxuICAgIGdvVG9Vcmw6ICh1cmwpID0+IHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgdXJsKTtcbiAgICAgICAgJCh3aW5kb3cpLnRyaWdnZXIoJ3N0YXRlY2hhbmdlJyk7XG4gICAgfSxcblxuICAgIHJlcGxhY2VQYXJhbXM6ICh1cmwsIHBhcmFtcykgPT4ge1xuICAgICAgICBjb25zdCBwYXJzZWQgPSBVcmwucGFyc2UodXJsLCB0cnVlKTtcbiAgICAgICAgbGV0IHBhcmFtO1xuXG4gICAgICAgIC8vIExldCB0aGUgZm9ybWF0dGVyIHVzZSB0aGUgcXVlcnkgb2JqZWN0IHRvIGJ1aWxkIHRoZSBuZXcgdXJsXG4gICAgICAgIHBhcnNlZC5zZWFyY2ggPSBudWxsO1xuXG4gICAgICAgIGZvciAocGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICBpZiAocGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtKSkge1xuICAgICAgICAgICAgICAgIHBhcnNlZC5xdWVyeVtwYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFVybC5mb3JtYXQocGFyc2VkKTtcbiAgICB9LFxuXG4gICAgYnVpbGRRdWVyeVN0cmluZzogKHF1ZXJ5RGF0YSkgPT4ge1xuICAgICAgICBsZXQgb3V0ID0gJyc7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGZvciAoa2V5IGluIHF1ZXJ5RGF0YSkge1xuICAgICAgICAgICAgaWYgKHF1ZXJ5RGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlEYXRhW2tleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZHg7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yIChuZHggaW4gcXVlcnlEYXRhW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdWVyeURhdGFba2V5XS5oYXNPd25Qcm9wZXJ0eShuZHgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV1bbmR4XX1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb3V0ICs9IGAmJHtrZXl9PSR7cXVlcnlEYXRhW2tleV19YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb3V0LnN1YnN0cmluZygxKTtcbiAgICB9LFxuXG4gICAgcGFyc2VRdWVyeVBhcmFtczogKHF1ZXJ5RGF0YSkgPT4ge1xuICAgICAgICBjb25zdCBwYXJhbXMgPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJ5RGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgdGVtcCA9IHF1ZXJ5RGF0YVtpXS5zcGxpdCgnPScpO1xuXG4gICAgICAgICAgICBpZiAodGVtcFswXSBpbiBwYXJhbXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJhbXNbdGVtcFswXV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXS5wdXNoKHRlbXBbMV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtc1t0ZW1wWzBdXSA9IFtwYXJhbXNbdGVtcFswXV0sIHRlbXBbMV1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW3RlbXBbMF1dID0gdGVtcFsxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHVybFV0aWxzO1xuIiwiaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL21vZGFsJztcblxuZnVuY3Rpb24gZGVjcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY29uc3QgaW5kZXggPSBjb3VudGVyLmluZGV4T2YoaXRlbSk7XG5cbiAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICBjb3VudGVyLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbmNyZW1lbnRDb3VudGVyKGNvdW50ZXIsIGl0ZW0pIHtcbiAgICBjb3VudGVyLnB1c2goaXRlbSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNvdW50ZXJOYXYoY291bnRlciwgJGxpbmssIHVybHMpIHtcbiAgICBpZiAoY291bnRlci5sZW5ndGggIT09IDApIHtcbiAgICAgICAgaWYgKCEkbGluay5pcygndmlzaWJsZScpKSB7XG4gICAgICAgICAgICAkbGluay5hZGRDbGFzcygnc2hvdycpO1xuICAgICAgICB9XG4gICAgICAgICRsaW5rLmF0dHIoJ2hyZWYnLCBgJHt1cmxzLmNvbXBhcmV9LyR7Y291bnRlci5qb2luKCcvJyl9YCk7XG4gICAgICAgICRsaW5rLmZpbmQoJ3NwYW4uY291bnRQaWxsJykuaHRtbChjb3VudGVyLmxlbmd0aCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgJGxpbmsucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh7IG5vQ29tcGFyZU1lc3NhZ2UsIHVybHMgfSkge1xuICAgIGxldCBjb21wYXJlQ291bnRlciA9IFtdO1xuXG4gICAgY29uc3QgJGNvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgJCgnYm9keScpLm9uKCdjb21wYXJlUmVzZXQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0ICRjaGVja2VkID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgY29tcGFyZUNvdW50ZXIgPSAkY2hlY2tlZC5sZW5ndGggPyAkY2hlY2tlZC5tYXAoKGluZGV4LCBlbGVtZW50KSA9PiBlbGVtZW50LnZhbHVlKS5nZXQoKSA6IFtdO1xuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY29tcGFyZUxpbmssIHVybHMpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1pZF0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCAkY2xpY2tlZENvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGluY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVjcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY2xpY2tlZENvbXBhcmVMaW5rLCB1cmxzKTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnYVtkYXRhLWNvbXBhcmUtbmF2XScsICgpID0+IHtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDaGVja2VkSW5wdXQgPSAkKCdib2R5JykuZmluZCgnaW5wdXRbbmFtZT1cInByb2R1Y3RzXFxbXFxdXCJdOmNoZWNrZWQnKTtcblxuICAgICAgICBpZiAoJGNsaWNrZWRDaGVja2VkSW5wdXQubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKG5vQ29tcGFyZU1lc3NhZ2UpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiUGFnZU1hbmFnZXIiLCJ1cmxVdGlscyIsIlVybCIsIkNhdGFsb2dQYWdlIiwiX1BhZ2VNYW5hZ2VyIiwiY29udGV4dCIsIl90aGlzIiwiY2FsbCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkb2N1bWVudCIsImFjdGl2ZUVsZW1lbnQiLCJpZCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsImFycmFuZ2VGb2N1c09uU29ydEJ5IiwiJHNvcnRCeVNlbGVjdG9yIiwiJCIsImdldEl0ZW0iLCJ0cmlnZ2VyIiwicmVtb3ZlSXRlbSIsIm9uU29ydEJ5U3VibWl0IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwidXJsIiwicGFyc2UiLCJsb2NhdGlvbiIsImhyZWYiLCJxdWVyeVBhcmFtcyIsInNlcmlhbGl6ZSIsInNwbGl0IiwicXVlcnkiLCJwYWdlIiwicHJldmVudERlZmF1bHQiLCJmb3JtYXQiLCJwYXRobmFtZSIsInNlYXJjaCIsImJ1aWxkUXVlcnlTdHJpbmciLCJkZWZhdWx0IiwiaG9va3MiLCJhcGkiLCJtb2RhbEZhY3RvcnkiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJWYWxpZGF0b3JzIiwibm9kIiwiZGVmYXVsdE9wdGlvbnMiLCJhY2NvcmRpb25Ub2dnbGVTZWxlY3RvciIsImJsb2NrZXJTZWxlY3RvciIsImNsZWFyRmFjZXRTZWxlY3RvciIsImNvbXBvbmVudFNlbGVjdG9yIiwiZmFjZXROYXZMaXN0U2VsZWN0b3IiLCJwcmljZVJhbmdlRXJyb3JTZWxlY3RvciIsInByaWNlUmFuZ2VGaWVsZHNldFNlbGVjdG9yIiwicHJpY2VSYW5nZUZvcm1TZWxlY3RvciIsInByaWNlUmFuZ2VNYXhQcmljZVNlbGVjdG9yIiwibGVuZ3RoIiwicHJpY2VSYW5nZU1pblByaWNlU2VsZWN0b3IiLCJzaG93TW9yZVRvZ2dsZVNlbGVjdG9yIiwiZmFjZXRlZFNlYXJjaEZpbHRlckl0ZW1zIiwibW9kYWwiLCJtb2RhbE9wZW4iLCJGYWNldGVkU2VhcmNoIiwicmVxdWVzdE9wdGlvbnMiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJfZXh0ZW5kIiwiY29sbGFwc2VkRmFjZXRzIiwiY29sbGFwc2VkRmFjZXRJdGVtcyIsImluaXRQcmljZVZhbGlkYXRvciIsImVhY2giLCJpbmRleCIsIm5hdkxpc3QiLCJjb2xsYXBzZUZhY2V0SXRlbXMiLCJhY2NvcmRpb25Ub2dnbGUiLCIkYWNjb3JkaW9uVG9nZ2xlIiwiY29sbGFwc2libGUiLCJkYXRhIiwiaXNDb2xsYXBzZWQiLCJwdXNoIiwidGFyZ2V0SWQiLCJzZXRUaW1lb3V0IiwiaXMiLCJjb2xsYXBzZUFsbEZhY2V0cyIsIm9uU3RhdGVDaGFuZ2UiLCJiaW5kIiwib25Ub2dnbGVDbGljayIsIm9uQWNjb3JkaW9uVG9nZ2xlIiwib25DbGVhckZhY2V0Iiwib25GYWNldENsaWNrIiwib25SYW5nZVN1Ym1pdCIsImZpbHRlckZhY2V0SXRlbXMiLCJiaW5kRXZlbnRzIiwicmVmcmVzaFZpZXciLCJjb250ZW50IiwicmVzdG9yZUNvbGxhcHNlZEZhY2V0cyIsInJlc3RvcmVDb2xsYXBzZWRGYWNldEl0ZW1zIiwidXBkYXRlVmlldyIsIl90aGlzMiIsInNob3ciLCJnZXRQYWdlIiwiZ2V0VXJsIiwiZXJyIiwiaGlkZSIsIkVycm9yIiwidXJsUGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwiaGFzIiwiYXR0ciIsImdldCIsImV4cGFuZEZhY2V0SXRlbXMiLCIkbmF2TGlzdCIsIl93aXRob3V0IiwiaGFzTW9yZVJlc3VsdHMiLCJfdW5pb24iLCJ0b2dnbGVGYWNldEl0ZW1zIiwiaW5jbHVkZXMiLCJnZXRNb3JlRmFjZXRSZXN1bHRzIiwiX3RoaXMzIiwiZmFjZXQiLCJmYWNldFVybCIsInNob3dNb3JlIiwidGVtcGxhdGUiLCJwYXJhbXMiLCJsaXN0X2FsbCIsInJlc3BvbnNlIiwib3BlbiIsInVwZGF0ZUNvbnRlbnQiLCIkaXRlbXMiLCJ2YWwiLCJ0b0xvd2VyQ2FzZSIsImVsZW1lbnQiLCJ0ZXh0IiwiaW5kZXhPZiIsImV4cGFuZEZhY2V0IiwiY29sbGFwc2VGYWNldCIsImNsb3NlIiwiX3RoaXM0IiwiJGFjY29yZGlvblRvZ2dsZXMiLCJleHBhbmRBbGxGYWNldHMiLCJfdGhpczUiLCJ2YWxpZGF0b3IiLCJzZWxlY3RvcnMiLCJlcnJvclNlbGVjdG9yIiwiZmllbGRzZXRTZWxlY3RvciIsImZvcm1TZWxlY3RvciIsIm1heFByaWNlU2VsZWN0b3IiLCJtaW5QcmljZVNlbGVjdG9yIiwic2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uIiwidmFsaWRhdGlvbkVycm9yTWVzc2FnZXMiLCJwcmljZVJhbmdlVmFsaWRhdG9yIiwiX3RoaXM2IiwiJG5hdkxpc3RzIiwic2hvdWxkQ29sbGFwc2UiLCJfdGhpczciLCJ1bmJpbmRFdmVudHMiLCJvbiIsIm9uUG9wU3RhdGUiLCJvZmYiLCIkbGluayIsInN0b3BQcm9wYWdhdGlvbiIsImdvVG9VcmwiLCIkdG9nZ2xlIiwidG9nZ2xlQ2xhc3MiLCJ1cmxRdWVyeVBhcmFtcyIsIk9iamVjdCIsImFzc2lnbiIsImFyZUFsbCIsImNvbnN0YW50cyIsIlZBTElEIiwiZGVjb2RlVVJJIiwicGFyc2VRdWVyeVBhcmFtcyIsImtleSIsImhhc093blByb3BlcnR5IiwiaGFzaCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJ0aXRsZSIsInJlcGxhY2VQYXJhbXMiLCJwYXJzZWQiLCJwYXJhbSIsInF1ZXJ5RGF0YSIsIm91dCIsIkFycmF5IiwiaXNBcnJheSIsIm5keCIsInN1YnN0cmluZyIsImkiLCJ0ZW1wIiwic2hvd0FsZXJ0TW9kYWwiLCJkZWNyZW1lbnRDb3VudGVyIiwiY291bnRlciIsIml0ZW0iLCJzcGxpY2UiLCJpbmNyZW1lbnRDb3VudGVyIiwidXBkYXRlQ291bnRlck5hdiIsInVybHMiLCJhZGRDbGFzcyIsImNvbXBhcmUiLCJqb2luIiwiZmluZCIsImh0bWwiLCJyZW1vdmVDbGFzcyIsIl9yZWYiLCJub0NvbXBhcmVNZXNzYWdlIiwiY29tcGFyZUNvdW50ZXIiLCIkY29tcGFyZUxpbmsiLCIkY2hlY2tlZCIsIm1hcCIsInZhbHVlIiwidHJpZ2dlckhhbmRsZXIiLCJwcm9kdWN0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkY2xpY2tlZENoZWNrZWRJbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=
"use strict";
(self["webpackChunkIconic"] = self["webpackChunkIconic"] || []).push([["assets_js_theme_compare_js"],{

/***/ "./assets/js/theme/compare.js"
/*!************************************!*\
  !*** ./assets/js/theme/compare.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Compare)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
;


var Compare = /*#__PURE__*/function (_PageManager) {
  function Compare() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Compare, _PageManager);
  var _proto = Compare.prototype;
  _proto.onReady = function onReady() {
    var _this = this;
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context);
    var message = this.context.compareRemoveMessage;
    $('body').on('click', '[data-comparison-remove]', function (event) {
      if (_this.context.comparisons.length <= 2) {
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_1__.showAlertModal)(message);
        event.preventDefault();
      }
    });
  };
  return Compare;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ },

/***/ "./assets/js/theme/global/compare-products.js"
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ }

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jb21wYXJlX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxDQUF5QztBQUNPO0FBQ1E7QUFBQSxJQUVuQ0csT0FBTywwQkFBQUMsWUFBQTtFQUFBLFNBQUFELFFBQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFDLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUFDLGNBQUEsQ0FBQUosT0FBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQUksTUFBQSxHQUFBTCxPQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUN4QkUsT0FBTyxHQUFQLFNBQUFBLE9BQU9BLENBQUEsRUFBRztJQUFBLElBQUFDLEtBQUE7SUFDTlQsb0VBQWUsQ0FBQyxJQUFJLENBQUNVLE9BQU8sQ0FBQztJQUU3QixJQUFNQyxPQUFPLEdBQUcsSUFBSSxDQUFDRCxPQUFPLENBQUNFLG9CQUFvQjtJQUVqREMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDQyxFQUFFLENBQUMsT0FBTyxFQUFFLDBCQUEwQixFQUFFLFVBQUFDLEtBQUssRUFBSTtNQUN2RCxJQUFJTixLQUFJLENBQUNDLE9BQU8sQ0FBQ00sV0FBVyxDQUFDQyxNQUFNLElBQUksQ0FBQyxFQUFFO1FBQ3RDbEIsNkRBQWMsQ0FBQ1ksT0FBTyxDQUFDO1FBQ3ZCSSxLQUFLLENBQUNHLGNBQWMsQ0FBQyxDQUFDO01BQzFCO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBLE9BQUFqQixPQUFBO0FBQUEsRUFaZ0NILHFEQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKUDtBQUV6QyxTQUFTc0IsZ0JBQWdCQSxDQUFDQyxPQUFPLEVBQUVDLElBQUksRUFBRTtFQUNyQyxJQUFNQyxLQUFLLEdBQUdGLE9BQU8sQ0FBQ0csT0FBTyxDQUFDRixJQUFJLENBQUM7RUFFbkMsSUFBSUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO0lBQ1pGLE9BQU8sQ0FBQ0ksTUFBTSxDQUFD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QjtFQUNKLENBQUMsQ0FBQztBQUNOLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9JY29uaWMvLi9hc3NldHMvanMvdGhlbWUvY29tcGFyZS5qcyIsIndlYnBhY2s6Ly9JY29uaWMvLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcGFyZSBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblJlYWR5KCkge1xuICAgICAgICBjb21wYXJlUHJvZHVjdHModGhpcy5jb250ZXh0KTtcblxuICAgICAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5jb250ZXh0LmNvbXBhcmVSZW1vdmVNZXNzYWdlO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyaXNvbi1yZW1vdmVdJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29udGV4dC5jb21wYXJpc29ucy5sZW5ndGggPD0gMikge1xuICAgICAgICAgICAgICAgIHNob3dBbGVydE1vZGFsKG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5cbmZ1bmN0aW9uIGRlY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvbnN0IGluZGV4ID0gY291bnRlci5pbmRleE9mKGl0ZW0pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY291bnRlci5wdXNoKGl0ZW0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb3VudGVyTmF2KGNvdW50ZXIsICRsaW5rLCB1cmxzKSB7XG4gICAgaWYgKGNvdW50ZXIubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmICghJGxpbmsuaXMoJ3Zpc2libGUnKSkge1xuICAgICAgICAgICAgJGxpbmsuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgICAkbGluay5hdHRyKCdocmVmJywgYCR7dXJscy5jb21wYXJlfS8ke2NvdW50ZXIuam9pbignLycpfWApO1xuICAgICAgICAkbGluay5maW5kKCdzcGFuLmNvdW50UGlsbCcpLmh0bWwoY291bnRlci5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsaW5rLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoeyBub0NvbXBhcmVNZXNzYWdlLCB1cmxzIH0pIHtcbiAgICBsZXQgY29tcGFyZUNvdW50ZXIgPSBbXTtcblxuICAgIGNvbnN0ICRjb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgICQoJ2JvZHknKS5vbignY29tcGFyZVJlc2V0JywgKCkgPT4ge1xuICAgICAgICBjb25zdCAkY2hlY2tlZCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGNvbXBhcmVDb3VudGVyID0gJGNoZWNrZWQubGVuZ3RoID8gJGNoZWNrZWQubWFwKChpbmRleCwgZWxlbWVudCkgPT4gZWxlbWVudC52YWx1ZSkuZ2V0KCkgOiBbXTtcbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNvbXBhcmVMaW5rLCB1cmxzKTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS50cmlnZ2VySGFuZGxlcignY29tcGFyZVJlc2V0Jyk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmUtaWRdJywgZXZlbnQgPT4ge1xuICAgICAgICBjb25zdCBwcm9kdWN0ID0gZXZlbnQuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICAgICAgY29uc3QgJGNsaWNrZWRDb21wYXJlTGluayA9ICQoJ2FbZGF0YS1jb21wYXJlLW5hdl0nKTtcblxuICAgICAgICBpZiAoZXZlbnQuY3VycmVudFRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICBpbmNyZW1lbnRDb3VudGVyKGNvbXBhcmVDb3VudGVyLCBwcm9kdWN0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlQ291bnRlck5hdihjb21wYXJlQ291bnRlciwgJGNsaWNrZWRDb21wYXJlTGluaywgdXJscyk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ2FbZGF0YS1jb21wYXJlLW5hdl0nLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0ICRjbGlja2VkQ2hlY2tlZElucHV0ID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgaWYgKCRjbGlja2VkQ2hlY2tlZElucHV0Lmxlbmd0aCA8PSAxKSB7XG4gICAgICAgICAgICBzaG93QWxlcnRNb2RhbChub0NvbXBhcmVNZXNzYWdlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwic2hvd0FsZXJ0TW9kYWwiLCJjb21wYXJlUHJvZHVjdHMiLCJDb21wYXJlIiwiX1BhZ2VNYW5hZ2VyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJfdGhpcyIsImNvbnRleHQiLCJtZXNzYWdlIiwiY29tcGFyZVJlbW92ZU1lc3NhZ2UiLCIkIiwib24iLCJldmVudCIsImNvbXBhcmlzb25zIiwibGVuZ3RoIiwicHJldmVudERlZmF1bHQiLCJkZWZhdWx0IiwiZGVjcmVtZW50Q291bnRlciIsImNvdW50ZXIiLCJpdGVtIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiaW5jcmVtZW50Q291bnRlciIsInB1c2giLCJ1cGRhdGVDb3VudGVyTmF2IiwiJGxpbmsiLCJ1cmxzIiwiaXMiLCJhZGRDbGFzcyIsImF0dHIiLCJjb21wYXJlIiwiam9pbiIsImZpbmQiLCJodG1sIiwicmVtb3ZlQ2xhc3MiLCJfcmVmIiwibm9Db21wYXJlTWVzc2FnZSIsImNvbXBhcmVDb3VudGVyIiwiJGNvbXBhcmVMaW5rIiwiJGNoZWNrZWQiLCJtYXAiLCJlbGVtZW50IiwidmFsdWUiLCJnZXQiLCJ0cmlnZ2VySGFuZGxlciIsInByb2R1Y3QiLCJjdXJyZW50VGFyZ2V0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkY2xpY2tlZENoZWNrZWRJbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=
webpackJsonp([2],{

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(177);


/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thresholdColors", function() { return thresholdColors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findThresholdColor", function() { return findThresholdColor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_slider_assets_index_less__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rc_slider_assets_index_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rc_slider_assets_index_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_slider__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rc_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rc_slider__);
/* eslint react/no-multi-comp: 0, no-console: 0 */






var RangeWithTooltip = Object(__WEBPACK_IMPORTED_MODULE_3_rc_slider__["createSliderWithTooltip"])(__WEBPACK_IMPORTED_MODULE_3_rc_slider__["Range"]);
var style = { width: 400, margin: 50 };

var thresholdColors = [{ backgroundColor: '#E89EA6' }, { backgroundColor: '#E8C3C3' }, { backgroundColor: '#C3E8E6' }, { backgroundColor: '#A3D8D9' }, { backgroundColor: '#88CBD1' }];

var findThresholdColor = function findThresholdColor(range, value) {
  if (value <= 0) return thresholdColors[0].backgroundColor;
  if (value >= 100) return thresholdColors[thresholdColors.length - 1].backgroundColor;

  var len = range.length;

  for (var i = 0; i < len; i++) {
    if (value < range[i]) {
      return thresholdColors[i - 1].backgroundColor;
    }
  }
};

__WEBPACK_IMPORTED_MODULE_2_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
  'div',
  null,
  __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    { style: style },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(RangeWithTooltip, {
      defaultValue: [0, 25, 50, 75, 90, 100],
      pushable: 6,
      trackStyle: thresholdColors,
      marks: { 0: '0%', 100: '100%' },
      tipFormatter: function tipFormatter(value) {
        return value + '%';
      },
      onAfterChange: function onAfterChange() {
        console.log('on after change');
      }
    })
  )
), document.getElementById('__react-content'));

/***/ })

},[176]);
//# sourceMappingURL=thresholds.js.map
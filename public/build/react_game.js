(self["webpackChunk"] = self["webpackChunk"] || []).push([["react_game"],{

/***/ "./assets/components/MorpGame.jsx":
/*!****************************************!*\
  !*** ./assets/components/MorpGame.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MorpGame)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.fill.js */ "./node_modules/core-js/modules/es.array.fill.js");
/* harmony import */ var core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_fill_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _MorpSquare__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./MorpSquare */ "./assets/components/MorpSquare.jsx");

















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function MorpGame(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(Array(9).fill(null)),
    _useState2 = _slicedToArray(_useState, 2),
    squares = _useState2[0],
    setSquare = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_17__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    xIsNext = _useState4[0],
    setXIsNext = _useState4[1];
  var stop = false;
  var calculateWinner = function calculateWinner(squares) {
    var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    for (var i = 0; i < lines.length; i++) {
      var _lines$i = _slicedToArray(lines[i], 3),
        a = _lines$i[0],
        b = _lines$i[1],
        c = _lines$i[2];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };
  var renderSquare = function renderSquare(i) {
    console.log('render square ' + i);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement(_MorpSquare__WEBPACK_IMPORTED_MODULE_18__["default"], {
      value: squares[i],
      onClick: function onClick() {
        return handleClick(i);
      }
    });
  };
  var handleClick = function handleClick(i) {
    if (!stop) {
      var newSquares = squares.slice();
      console.log('handle click ' + i);
      newSquares[i] = xIsNext ? 'X' : 'O';
      console.log(squares, newSquares);
      setSquare(newSquares);
      setXIsNext(!xIsNext);
    }
  };
  console.log('morpgame render');
  var winner = calculateWinner(squares);
  var status;
  if (winner) {
    status = winner + ' a gagné';
    stop = true;
  } else {
    status = 'Prochain joueur : ' + (xIsNext ? 'X' : 'O');
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "status"
  }, status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "status"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "board-row"
  }, renderSquare(0), renderSquare(1), renderSquare(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "board-row"
  }, renderSquare(3), renderSquare(4), renderSquare(5)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_17___default().createElement("div", {
    className: "board-row"
  }, renderSquare(6), renderSquare(7), renderSquare(8)));
}

/***/ }),

/***/ "./assets/components/MorpSquare.jsx":
/*!******************************************!*\
  !*** ./assets/components/MorpSquare.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Square)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function Square(props) {
  console.log('render square ' + props.value);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("button", {
    className: "square",
    onClick: props.onClick
  }, props.value);
}

/***/ }),

/***/ "./assets/react_game.js":
/*!******************************!*\
  !*** ./assets/react_game.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/js/bootstrap.bundle */ "./node_modules/bootstrap/dist/js/bootstrap.bundle.js");
/* harmony import */ var bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_js_bootstrap_bundle__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_react_game_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/react_game.scss */ "./assets/styles/react_game.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _components_MorpGame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/MorpGame */ "./assets/components/MorpGame.jsx");





console.log('run react_game.js');
var root = react_dom_client__WEBPACK_IMPORTED_MODULE_3__.createRoot(document.getElementById("react-game"));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_components_MorpGame__WEBPACK_IMPORTED_MODULE_4__["default"], null));

/***/ }),

/***/ "./node_modules/core-js/internals/array-fill.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/array-fill.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.fill` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.fill
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = lengthOfArrayLike(O);
  var argumentsLength = arguments.length;
  var index = toAbsoluteIndex(argumentsLength > 1 ? arguments[1] : undefined, length);
  var end = argumentsLength > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.fill.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.fill.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fill = __webpack_require__(/*! ../internals/array-fill */ "./node_modules/core-js/internals/array-fill.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// `Array.prototype.fill` method
// https://tc39.es/ecma262/#sec-array.prototype.fill
$({ target: 'Array', proto: true }, {
  fill: fill
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('fill');


/***/ }),

/***/ "./assets/styles/react_game.scss":
/*!***************************************!*\
  !*** ./assets/styles/react_game.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_modules_es_error_cause_js-node_modules_core-js_modules_es_error_-351de0","vendors-node_modules_bootstrap_dist_js_bootstrap_bundle_js-node_modules_bootstrap-icons_font_-f88cca","vendors-node_modules_core-js_modules_es_array_from_js-node_modules_core-js_modules_es_array_i-2fab5f"], () => (__webpack_exec__("./assets/react_game.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7QUFFaEMsSUFBTVMsSUFBSSxHQUFHRCx3REFBbUIsQ0FBQ0csUUFBUSxDQUFDQyxjQUFjLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdkVILElBQUksQ0FBQ0ksTUFBTSxlQUFDLDJEQUFDLDREQUFRLE9BQUcsQ0FBQzs7Ozs7Ozs7Ozs7QUNYWjtBQUNiLGVBQWUsbUJBQU8sQ0FBQyw2RUFBd0I7QUFDL0Msc0JBQXNCLG1CQUFPLENBQUMsNkZBQWdDO0FBQzlELHdCQUF3QixtQkFBTyxDQUFDLG1HQUFtQzs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2hCQSxRQUFRLG1CQUFPLENBQUMsdUVBQXFCO0FBQ3JDLFdBQVcsbUJBQU8sQ0FBQywrRUFBeUI7QUFDNUMsdUJBQXVCLG1CQUFPLENBQUMsK0ZBQWlDOztBQUVoRTtBQUNBO0FBQ0EsSUFBSSw4QkFBOEI7QUFDbEM7QUFDQSxDQUFDOztBQUVEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNYQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL01vcnBHYW1lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9Nb3JwU3F1YXJlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3RfZ2FtZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9yZWFjdF9nYW1lLnNjc3M/ZTliMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3F1YXJlIGZyb20gJy4vTW9ycFNxdWFyZSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9ycEdhbWUocHJvcHMpIHtcclxuICAgIGNvbnN0IFtzcXVhcmVzLCBzZXRTcXVhcmVdID0gdXNlU3RhdGUoQXJyYXkoOSkuZmlsbChudWxsKSk7XHJcbiAgICBjb25zdCBbeElzTmV4dCwgc2V0WElzTmV4dF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGxldCBzdG9wPWZhbHNlO1xyXG5cclxuICAgIGNvbnN0ICBjYWxjdWxhdGVXaW5uZXIgPSAoc3F1YXJlcyk9PiB7XHJcbiAgICAgICAgY29uc3QgbGluZXMgPSBbXHJcbiAgICAgICAgICAgIFswLCAxLCAyXSxcclxuICAgICAgICAgICAgWzMsIDQsIDVdLFxyXG4gICAgICAgICAgICBbNiwgNywgOF0sXHJcbiAgICAgICAgICAgIFswLCAzLCA2XSxcclxuICAgICAgICAgICAgWzEsIDQsIDddLFxyXG4gICAgICAgICAgICBbMiwgNSwgOF0sXHJcbiAgICAgICAgICAgIFswLCA0LCA4XSxcclxuICAgICAgICAgICAgWzIsIDQsIDZdLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBbYSwgYiwgY10gPSBsaW5lc1tpXTtcclxuICAgICAgICAgICAgaWYgKHNxdWFyZXNbYV0gJiYgc3F1YXJlc1thXSA9PT0gc3F1YXJlc1tiXSAmJiBzcXVhcmVzW2FdID09PSBzcXVhcmVzW2NdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3F1YXJlc1thXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW5kZXJTcXVhcmUgPSAoaSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZW5kZXIgc3F1YXJlICcgKyBpKTtcclxuICAgICAgICByZXR1cm4gPFNxdWFyZSB2YWx1ZT17c3F1YXJlc1tpXX0gb25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2soaSl9Lz47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoaSkgPT4ge1xyXG4gICAgICAgIGlmICggIXN0b3ApIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3U3F1YXJlcyA9IHNxdWFyZXMuc2xpY2UoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2hhbmRsZSBjbGljayAnICsgaSk7XHJcbiAgICAgICAgICAgIG5ld1NxdWFyZXNbaV0gPSB4SXNOZXh0ID8gJ1gnIDogJ08nO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzcXVhcmVzLCBuZXdTcXVhcmVzKTtcclxuICAgICAgICAgICAgc2V0U3F1YXJlKG5ld1NxdWFyZXMpO1xyXG4gICAgICAgICAgICBzZXRYSXNOZXh0KCF4SXNOZXh0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygnbW9ycGdhbWUgcmVuZGVyJyk7XHJcbiAgICBjb25zdCB3aW5uZXIgPSBjYWxjdWxhdGVXaW5uZXIoc3F1YXJlcyk7XHJcbiAgICBsZXQgc3RhdHVzO1xyXG4gICAgaWYgKHdpbm5lcikge1xyXG4gICAgICAgIHN0YXR1cyA9IHdpbm5lciArICcgYSBnYWduw6knO1xyXG4gICAgICAgIHN0b3A9dHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc3RhdHVzID0gJ1Byb2NoYWluIGpvdWV1ciA6ICcgKyAoeElzTmV4dCA/ICdYJyA6ICdPJyk7XHJcbiAgICB9ICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0dXNcIj57c3RhdHVzfTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0YXR1c1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAge3JlbmRlclNxdWFyZSgwKX17cmVuZGVyU3F1YXJlKDEpfXtyZW5kZXJTcXVhcmUoMil9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAge3JlbmRlclNxdWFyZSgzKX17cmVuZGVyU3F1YXJlKDQpfXtyZW5kZXJTcXVhcmUoNSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvYXJkLXJvd1wiPlxyXG4gICAgICAgICAgICAgICAge3JlbmRlclNxdWFyZSg2KX17cmVuZGVyU3F1YXJlKDcpfXtyZW5kZXJTcXVhcmUoOCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcXVhcmUocHJvcHMpIHtcclxuICAgIGNvbnNvbGUubG9nKCdyZW5kZXIgc3F1YXJlICcrIHByb3BzLnZhbHVlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzcXVhcmVcIiBvbkNsaWNrPXtwcm9wcy5vbkNsaWNrfSA+XHJcbiAgICAgICAgICAgIHtwcm9wcy52YWx1ZX1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG4iLCJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2pzL2Jvb3RzdHJhcC5idW5kbGUnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL3JlYWN0X2dhbWUuc2Nzcyc7XHJcblxyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnO1xyXG5pbXBvcnQgTW9ycEdhbWUgZnJvbSAnLi9jb21wb25lbnRzL01vcnBHYW1lJztcclxuXHJcbmNvbnNvbGUubG9nKCdydW4gcmVhY3RfZ2FtZS5qcycpO1xyXG5cclxuY29uc3Qgcm9vdCA9IFJlYWN0RE9NLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWFjdC1nYW1lXCIpKTtcclxucm9vdC5yZW5kZXIoPE1vcnBHYW1lIC8+KTtcclxuXHJcbiIsIid1c2Ugc3RyaWN0JztcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tYWJzb2x1dGUtaW5kZXgnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbGxgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZmlsbFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBmaWxsKHZhbHVlIC8qICwgc3RhcnQgPSAwLCBlbmQgPSBAbGVuZ3RoICovKSB7XG4gIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gIHZhciBsZW5ndGggPSBsZW5ndGhPZkFycmF5TGlrZShPKTtcbiAgdmFyIGFyZ3VtZW50c0xlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChhcmd1bWVudHNMZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCBsZW5ndGgpO1xuICB2YXIgZW5kID0gYXJndW1lbnRzTGVuZ3RoID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZDtcbiAgdmFyIGVuZFBvcyA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogdG9BYnNvbHV0ZUluZGV4KGVuZCwgbGVuZ3RoKTtcbiAgd2hpbGUgKGVuZFBvcyA+IGluZGV4KSBPW2luZGV4KytdID0gdmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZpbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZmlsbCcpO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYWRkLXRvLXVuc2NvcGFibGVzJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmlsbGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWxsXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSB9LCB7XG4gIGZpbGw6IGZpbGxcbn0pO1xuXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS1AQHVuc2NvcGFibGVzXG5hZGRUb1Vuc2NvcGFibGVzKCdmaWxsJyk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlNxdWFyZSIsIk1vcnBHYW1lIiwicHJvcHMiLCJBcnJheSIsImZpbGwiLCJzcXVhcmVzIiwic2V0U3F1YXJlIiwieElzTmV4dCIsInNldFhJc05leHQiLCJzdG9wIiwiY2FsY3VsYXRlV2lubmVyIiwibGluZXMiLCJpIiwibGVuZ3RoIiwiYSIsImIiLCJjIiwicmVuZGVyU3F1YXJlIiwiY29uc29sZSIsImxvZyIsImhhbmRsZUNsaWNrIiwibmV3U3F1YXJlcyIsInNsaWNlIiwid2lubmVyIiwic3RhdHVzIiwidmFsdWUiLCJvbkNsaWNrIiwiUmVhY3RET00iLCJyb290IiwiY3JlYXRlUm9vdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiXSwic291cmNlUm9vdCI6IiJ9
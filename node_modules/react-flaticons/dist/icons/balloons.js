function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
var _excluded = ["color", "size"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';
var Balloons = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var _ref2, _ref3;
  var color = _ref.color,
    size = _ref.size,
    rest = _objectWithoutProperties(_ref, _excluded);
  var iconContext = useContext(IconContext);
  var mergedProps = _objectSpread({
    color: (_ref2 = color !== null && color !== void 0 ? color : iconContext.color) !== null && _ref2 !== void 0 ? _ref2 : 'currentColor',
    size: (_ref3 = size !== null && size !== void 0 ? size : iconContext.size) !== null && _ref3 !== void 0 ? _ref3 : '20px'
  }, rest);
  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: mergedProps.size,
    height: mergedProps.size,
    viewBox: "0 0 24 24",
    fill: mergedProps.color
  }, mergedProps), /*#__PURE__*/React.createElement("path", {
    d: "M18.848 11.53A7.674 7.674 0 0 0 19.977 8a1 1 0 0 0-2 0 5.712 5.712 0 0 1-.825 2.47 1 1 0 0 0 1.7 1.06ZM8.977 7a1 1 0 0 0-1 1 5.712 5.712 0 0 1-.825 2.47 1 1 0 0 0 1.7 1.06A7.674 7.674 0 0 0 9.977 8a1 1 0 0 0-1-1Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19.5 18.589c-.682-.362-1.386-.737-1.484-1.162-.046-.193-.025-.628.515-1.473C21.7 15.5 24 11.025 24 7a5.8 5.8 0 0 0-6-6 5.862 5.862 0 0 0-4.955 2.487A6.994 6.994 0 0 0 0 7c0 3.971 2.257 8.485 5.39 9.685A2.822 2.822 0 0 0 5 17.87c0 1.571 1.489 2.267 2.576 2.776.6.28 1.424.665 1.424.963a2.291 2.291 0 0 1-.428.851 1 1 0 0 0 1.684 1.08A3.745 3.745 0 0 0 11 21.609c0-1.571-1.489-2.267-2.576-2.775-.6-.281-1.424-.666-1.433-.865a5.379 5.379 0 0 1 .568-1.016c2.352-.306 4.331-2.5 5.452-5.2a7.37 7.37 0 0 0 3.413 3.892 3.381 3.381 0 0 0-.356 2.238c.306 1.31 1.519 1.955 2.494 2.474.616.328 1.313.7 1.419 1.068a1.627 1.627 0 0 1-.315 1.078 1 1 0 1 0 1.732 1 3.329 3.329 0 0 0 .506-2.627 4.166 4.166 0 0 0-2.404-2.287ZM7 15c-2.646 0-5-4.474-5-8a5 5 0 0 1 10 0c0 3.526-2.354 8-5 8Zm7-8a3.792 3.792 0 0 1 4-4 3.792 3.792 0 0 1 4 4c0 3.4-2.056 7-4 7s-4-3.6-4-7Z"
  }));
});
Balloons.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Balloons.displayName = 'Balloons';
export default Balloons;
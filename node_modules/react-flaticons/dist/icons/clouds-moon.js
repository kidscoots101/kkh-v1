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
var CloudsMoon = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M2.777 15.513a1.284 1.284 0 0 0-.728 1.543 1 1 0 0 1-1.934.509 3.284 3.284 0 0 1 1.874-3.89 5.316 5.316 0 0 1 .039-2.442 5.534 5.534 0 0 1 7.606-3.768 1 1 0 0 1-.8 1.832 3.63 3.63 0 0 0-1.972-.258 3.581 3.581 0 0 0-2.916 4.27 1.963 1.963 0 0 1-1.169 2.204Zm21.185-4.357a1.963 1.963 0 0 0-1.55-1.256 5.944 5.944 0 0 1-4.369-2.75 5.869 5.869 0 0 1-.351-4.614A1.945 1.945 0 0 0 17.231.6 1.971 1.971 0 0 0 15.3.069a8.787 8.787 0 0 0-3.011 1.54 8.027 8.027 0 0 0-2.31 2.981 1 1 0 0 0 1.824.82 6.006 6.006 0 0 1 1.731-2.234 8.662 8.662 0 0 1 2.25-1.237 7.864 7.864 0 0 0 .516 6.194 7.7 7.7 0 0 0 5.8 3.68 7.433 7.433 0 0 1-1.78 1.4 1 1 0 0 0 .983 1.742 9.3 9.3 0 0 0 2.307-1.832 1.963 1.963 0 0 0 .352-1.967Zm-4.087 9.253a4.616 4.616 0 0 1-3.453 3.445 5.011 5.011 0 0 1-.992.123c-1.279.024-7.735.038-9.236 0a3.476 3.476 0 0 1-.784-.115 3.285 3.285 0 0 1-.421-6.187 5.316 5.316 0 0 1 .039-2.442 5.548 5.548 0 0 1 10.525-.793c.078.188.406.262.736.323.108.02.2.039.268.056a4.672 4.672 0 0 1 3.318 5.59Zm-3.834-3.657a2.948 2.948 0 0 1-2.335-1.544 3.6 3.6 0 0 0-3.846-2.169 3.581 3.581 0 0 0-2.917 4.27 1.963 1.963 0 0 1-1.166 2.2 1.284 1.284 0 0 0-.728 1.543 1.26 1.26 0 0 0 .871.873 1.566 1.566 0 0 0 .334.049c1.222.033 7.594.029 9.139 0a2.947 2.947 0 0 0 .586-.074 2.636 2.636 0 0 0 1.947-1.941 2.679 2.679 0 0 0-1.885-3.207Z"
  }));
});
CloudsMoon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CloudsMoon.displayName = 'CloudsMoon';
export default CloudsMoon;
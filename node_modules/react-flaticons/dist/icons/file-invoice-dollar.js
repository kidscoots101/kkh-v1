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
var FileInvoiceDollar = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M16 23a1 1 0 0 1-1 1H6c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h4.515c1.869 0 3.627.728 4.95 2.05l3.484 3.486c.271.271.523.568.748.883a1 1 0 0 1-1.627 1.162 4.978 4.978 0 0 0-.534-.63l-3.485-3.486A5.011 5.011 0 0 0 13 2.66V7c0 .551.448 1 1 1h3a1 1 0 1 1 0 2h-3c-1.654 0-3-1.346-3-3V2.023A5.198 5.198 0 0 0 10.515 2H6C4.346 2 3 3.346 3 5v14c0 1.654 1.346 3 3 3h9a1 1 0 0 1 1 1Zm5.685-6.733-3.041-.507A.768.768 0 0 1 18 15c0-.551.448-1 1-1h2.268c.356 0 .688.192.867.5a1 1 0 1 0 1.73-1.001 3.009 3.009 0 0 0-2.598-1.5h-.268v-1a1 1 0 1 0-2 0v1c-1.654 0-3 1.346-3 3 0 1.36.974 2.51 2.315 2.733l3.041.507a.768.768 0 0 1 .644.76c0 .551-.448 1-1 1h-2.268c-.356 0-.688-.192-.867-.5a.998.998 0 0 0-1.366-.365.998.998 0 0 0-.364 1.366 3.008 3.008 0 0 0 2.598 1.499H19v1a1 1 0 1 0 2 0v-1c1.654 0 3-1.346 3-3 0-1.36-.974-2.51-2.315-2.733ZM7.5 15H13a1 1 0 1 0 0-2H7.5A2.503 2.503 0 0 0 5 15.5v2C5 18.878 6.122 20 7.5 20H13a1 1 0 1 0 0-2H7.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5ZM6 11h2a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2Zm0-4h2a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2Z"
  }));
});
FileInvoiceDollar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
FileInvoiceDollar.displayName = 'FileInvoiceDollar';
export default FileInvoiceDollar;
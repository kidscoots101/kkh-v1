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
var BadgeDollar = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M24 12c0-1.626-.714-3.16-1.925-4.124a5.49 5.49 0 0 0-1.59-4.362c-1.15-1.149-2.734-1.731-4.277-1.555C15.16.714 13.626 0 12 0S8.84.714 7.876 1.925a5.482 5.482 0 0 0-4.362 1.59c-1.15 1.15-1.729 2.74-1.555 4.277A5.49 5.49 0 0 0 0 12c0 1.626.714 3.16 1.925 4.124a5.488 5.488 0 0 0 1.59 4.362c1.15 1.151 2.744 1.732 4.277 1.555C8.84 23.286 10.374 24 12 24s3.16-.714 4.124-1.925a5.492 5.492 0 0 0 4.361-1.59c1.149-1.15 1.729-2.74 1.555-4.277A5.487 5.487 0 0 0 24 12Zm-3.247 2.678a1.878 1.878 0 0 0-.67 1.617 3.498 3.498 0 0 1-3.788 3.788 1.882 1.882 0 0 0-1.616.67c-.668.793-1.644 1.248-2.679 1.248s-2.011-.455-2.679-1.248a1.876 1.876 0 0 0-1.616-.669 3.5 3.5 0 0 1-3.787-3.788 1.88 1.88 0 0 0-.67-1.617 3.497 3.497 0 0 1 0-5.357c.479-.404.723-.993.669-1.617a3.497 3.497 0 0 1 3.788-3.787 1.897 1.897 0 0 0 1.617-.67 3.497 3.497 0 0 1 5.357 0 1.87 1.87 0 0 0 1.617.669 3.499 3.499 0 0 1 3.787 3.788c-.054.624.19 1.213.67 1.617a3.496 3.496 0 0 1 0 5.356ZM16 14c0 1.654-1.346 3-3 3v1a1 1 0 0 1-2 0v-1h-.268a3.01 3.01 0 0 1-2.598-1.499A1 1 0 0 1 9.865 14.5c.178.308.511.5.867.5H13c.552 0 1-.449 1-1a.768.768 0 0 0-.644-.76l-3.042-.507A2.762 2.762 0 0 1 7.999 10c0-1.654 1.346-3 3-3V6a1 1 0 0 1 2 0v1h.268c1.067 0 2.063.575 2.598 1.5a1 1 0 1 1-1.73 1.001 1.004 1.004 0 0 0-.867-.5H11c-.551 0-1 .449-1 1 0 .378.271.698.644.76l3.041.507A2.761 2.761 0 0 1 16 14.001Z"
  }));
});
BadgeDollar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
BadgeDollar.displayName = 'BadgeDollar';
export default BadgeDollar;
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
var MoneyBillWaveAlt = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M16.998 21c-1.634 0-3.098-.399-4.513-.785-1.347-.368-2.619-.715-3.985-.715-1.571 0-2.563.101-3.42.349a3.932 3.932 0 0 1-3.481-.644A3.979 3.979 0 0 1 0 16V8.452a5.04 5.04 0 0 1 3.233-4.681C4.574 3.259 5.841 3 7.001 3c1.634 0 3.098.399 4.513.785 1.349.368 2.621.715 3.987.715 1.57 0 2.561-.101 3.418-.349a3.933 3.933 0 0 1 3.481.644A3.977 3.977 0 0 1 24 8v7.548c0 2.063-1.3 3.944-3.234 4.681-1.341.512-2.608.771-3.768.771ZM8.5 17.5c1.634 0 3.098.399 4.513.785 1.347.368 2.619.715 3.985.715.914 0 1.942-.215 3.056-.64A2.99 2.99 0 0 0 22 15.548V8c0-.637-.293-1.223-.803-1.606a1.95 1.95 0 0 0-1.725-.321c-1.051.303-2.202.427-3.973.427-1.634 0-3.098-.399-4.513-.785C9.637 5.347 8.365 5 6.999 5c-.914 0-1.942.215-3.056.64a2.99 2.99 0 0 0-1.946 2.812V16c0 .637.293 1.223.803 1.606.5.376 1.128.495 1.725.321 1.051-.303 2.202-.427 3.975-.427ZM14 15V9a1 1 0 0 0-1.707-.707l-2 2a.999.999 0 1 0 1.414 1.414l.293-.293V15a1 1 0 1 0 2 0ZM5 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm13 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm13 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
  }));
});
MoneyBillWaveAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MoneyBillWaveAlt.displayName = 'MoneyBillWaveAlt';
export default MoneyBillWaveAlt;
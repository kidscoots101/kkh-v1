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
var MoneyCheckEdit = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M24 7v1a1 1 0 1 1-2 0V7c0-1.654-1.346-3-3-3H5C3.346 4 2 5.346 2 7v10c0 1.654 1.346 3 3 3h3a1 1 0 1 1 0 2H5c-2.757 0-5-2.243-5-5V7c0-2.757 2.243-5 5-5h14c2.757 0 5 2.243 5 5Zm-9 2h4a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2Zm8.121 2.879c.566.566.879 1.32.879 2.121s-.313 1.555-.879 2.122l-6.707 6.707a3.975 3.975 0 0 1-2.828 1.172H12a1 1 0 0 1-1-1v-1.586c0-1.068.416-2.073 1.172-2.828l6.707-6.707a3.002 3.002 0 0 1 4.242 0ZM22 14a1 1 0 0 0-1.707-.707L13.586 20A2.017 2.017 0 0 0 13 21.414V22h.586c.534 0 1.036-.208 1.414-.586l6.707-6.707A.993.993 0 0 0 22 14ZM9 15H6.732c-.356 0-.688-.192-.867-.5a.996.996 0 0 0-1.366-.365.998.998 0 0 0-.364 1.366A3.008 3.008 0 0 0 6.733 17h.268a1 1 0 1 0 2 0c1.654 0 3-1.346 3-3 0-1.36-.974-2.51-2.315-2.733l-3.041-.507a.768.768 0 0 1-.644-.76c0-.551.448-1 1-1h2.268c.356 0 .688.192.867.5a.998.998 0 1 0 1.73-1.001 3.009 3.009 0 0 0-2.598-1.5H9a1 1 0 1 0-2 0c-1.654 0-3 1.346-3 3 0 1.36.974 2.51 2.315 2.733l3.041.507a.768.768 0 0 1 .644.76c0 .551-.448 1-1 1Zm5-3a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z"
  }));
});
MoneyCheckEdit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MoneyCheckEdit.displayName = 'MoneyCheckEdit';
export default MoneyCheckEdit;
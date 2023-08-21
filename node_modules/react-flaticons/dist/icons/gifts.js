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
var Gifts = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M21.672 14.366c.149-.291.251-.608.298-.942a2.985 2.985 0 0 0-.57-2.226 3.006 3.006 0 0 0-4.2-.599c-.507.38-.898.848-1.2 1.336a4.838 4.838 0 0 0-1.2-1.336 2.985 2.985 0 0 0-2.224-.57 2.982 2.982 0 0 0-1.977 1.17 2.981 2.981 0 0 0-.569 2.225c.048.333.149.65.298.942A4.005 4.005 0 0 0 8 18v2c0 .728.196 1.411.537 2H5c-1.654 0-3-1.346-3-3V9c0-1.654 1.346-3 3-3h6a3 3 0 0 1 2.906 2.249 1.001 1.001 0 0 0 1.937-.498A4.997 4.997 0 0 0 11.001 4h-.586l1.293-1.293a.999.999 0 1 0-1.414-1.414L9.001 2.586V1a1 1 0 1 0-2 0v1.586L5.708 1.293a.999.999 0 1 0-1.414 1.414L5.587 4h-.586A5.006 5.006 0 0 0 0 9v10c0 2.757 2.243 5 5 5h15c2.206 0 4-1.794 4-4v-2a4.007 4.007 0 0 0-2.328-3.634ZM18.4 12.2a.996.996 0 0 1 1.4.2.992.992 0 0 1 .19.742.994.994 0 0 1-.391.659 1.945 1.945 0 0 1-.336.199h-2.026c.198-.61.549-1.34 1.163-1.8Zm-6.2.2a.998.998 0 0 1 1.401-.201c.614.46.965 1.19 1.163 1.8h-2.025a1.86 1.86 0 0 1-.339-.201.994.994 0 0 1-.39-.657.99.99 0 0 1 .189-.741ZM10 20v-2c0-1.103.897-2 2-2h3v6h-3c-1.103 0-2-.897-2-2Zm12 0c0 1.103-.897 2-2 2h-3l-.003-6H20c1.103 0 2 .897 2 2v2Z"
  }));
});
Gifts.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Gifts.displayName = 'Gifts';
export default Gifts;
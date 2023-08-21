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
var ThunderstormMoon = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M15 24a1 1 0 0 1-.849-1.527L15.684 20h-2.069a1.614 1.614 0 0 1-1.546-2.082 1.014 1.014 0 0 1 .106-.235l1.973-3.207a1 1 0 1 1 1.7 1.048L14.328 18H16.4a1.6 1.6 0 0 1 1.336 2.489l-1.886 3.038A1 1 0 0 1 15 24Zm5-1a1 1 0 0 1-.222-1.975 3.089 3.089 0 0 0 .007-5.921 2.646 2.646 0 0 1-2.085-1.633 4 4 0 0 0-7.609 2.351 2.018 2.018 0 0 1-1.179 2.306 1.5 1.5 0 0 0 .168 2.816 1.656 1.656 0 0 0 .378.056H11a1 1 0 0 1 0 2H9.429a3.812 3.812 0 0 1-.86-.121 3.5 3.5 0 0 1-.45-6.589 6.345 6.345 0 0 1 .056-2.731 6 6 0 0 1 11.368-.859c.136.326.286.359.587.427l.176.042a5.088 5.088 0 0 1-.083 9.8A1.019 1.019 0 0 1 20 23ZM4.5 17a1 1 0 0 1-.576-.184A9.3 9.3 0 0 1 .051 8.272 9.351 9.351 0 0 1 7.778.117a10 10 0 0 1 3.875.158 2.124 2.124 0 0 1 .943 3.6 8.029 8.029 0 0 0-2.539 4.283 1 1 0 0 1-1.977-.311 9.8 9.8 0 0 1 3.147-5.436.094.094 0 0 0 .025-.1.119.119 0 0 0-.087-.092 8.051 8.051 0 0 0-3.072-.123 7.32 7.32 0 0 0-6.052 6.382 7.2 7.2 0 0 0 3.031 6.706A1 1 0 0 1 4.494 17ZM15 6a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm4-3a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm2 6a1 1 0 0 0 2 0 1 1 0 0 0-2 0Z"
  }));
});
ThunderstormMoon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ThunderstormMoon.displayName = 'ThunderstormMoon';
export default ThunderstormMoon;
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
var Strawberry = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M23 8c-1.855 0-3.5-.013-4.791-.795l3.5-3.5a1 1 0 1 0-1.414-1.414L16.806 5.78C16.079 4.544 16 2.974 16 1a1 1 0 0 0-1-1c-1.672.08-.843 2.919-.822 4.122C7.343.205 2.908 7.4.838 13.455c-2.96 8.773 2.132 12.344 9.707 9.706 6.044-2.065 13.238-6.493 9.344-13.319C21.011 9.827 23.9 10.691 24 9a1 1 0 0 0-1-1Zm-5.541 8.985c-2.5 2.658-11.506 6.937-14.508 4.064C-.221 17.764 5.414 4.764 10.38 5c1.7 0 3.566 1.012 5.589 3.035 3.465 3.465 3.966 6.474 1.49 8.95Zm-3.842-6.6a1.308 1.308 0 0 1 0 1.85 5.4 5.4 0 0 1-1.967.752.526.526 0 0 1-.635-.635 5.4 5.4 0 0 1 .752-1.967 1.308 1.308 0 0 1 1.85-.002Zm3 3a1.308 1.308 0 0 1 0 1.85 5.4 5.4 0 0 1-1.967.752.526.526 0 0 1-.635-.635 5.4 5.4 0 0 1 .752-1.967 1.308 1.308 0 0 1 1.85-.002Zm-8-1a1.308 1.308 0 0 1 0 1.85 5.4 5.4 0 0 1-1.967.752.526.526 0 0 1-.635-.635 5.4 5.4 0 0 1 .752-1.967 1.308 1.308 0 0 1 1.85-.002Zm-2 5a1.308 1.308 0 0 1 0 1.85 5.4 5.4 0 0 1-1.967.752.526.526 0 0 1-.635-.635 5.4 5.4 0 0 1 .752-1.967 1.308 1.308 0 0 1 1.85-.002Zm5-2a1.308 1.308 0 0 1 0 1.85 5.4 5.4 0 0 1-1.967.752.526.526 0 0 1-.635-.635 5.4 5.4 0 0 1 .752-1.967 1.308 1.308 0 0 1 1.85-.002ZM8.015 9.35a5.4 5.4 0 0 1 .752-1.967 1.308 1.308 0 0 1 1.85 1.85 5.4 5.4 0 0 1-1.967.752.526.526 0 0 1-.635-.635Z"
  }));
});
Strawberry.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Strawberry.displayName = 'Strawberry';
export default Strawberry;
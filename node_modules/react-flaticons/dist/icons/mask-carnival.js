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
var MaskCarnival = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M22.514 10.972a3.825 3.825 0 0 0-3.028-.944 35.867 35.867 0 0 0-6.447 1.39C13.359 8.913 15.75 8 18 8a3 3 0 0 0 0-6 6.973 6.973 0 0 0-5 2.111V1a1 1 0 0 0-2 0v3.11A6.977 6.977 0 0 0 6 2a3 3 0 0 0 0 6c2.25 0 4.641.913 4.961 3.418a35.887 35.887 0 0 0-6.447-1.39 3.831 3.831 0 0 0-3.028.944 4.528 4.528 0 0 0-1.469 3.4C.017 23.062 4.852 24 6.931 24a5.38 5.38 0 0 0 3.09-1.185A3.667 3.667 0 0 1 12 21.967a3.667 3.667 0 0 1 1.979.848A5.383 5.383 0 0 0 17.069 24c2.079 0 6.914-.938 6.914-9.625a4.532 4.532 0 0 0-1.469-3.403ZM18 4a1 1 0 0 1 0 2 7.9 7.9 0 0 0-4.732 1.386A5.006 5.006 0 0 1 18 4ZM6 6a1 1 0 0 1 0-2 5.009 5.009 0 0 1 4.733 3.386A7.9 7.9 0 0 0 6 6Zm11.069 16a3.667 3.667 0 0 1-1.979-.848A5.387 5.387 0 0 0 12 19.967a5.387 5.387 0 0 0-3.09 1.185A3.667 3.667 0 0 1 6.931 22c-3.169 0-4.914-2.708-4.914-7.625a2.565 2.565 0 0 1 .8-1.907 1.8 1.8 0 0 1 1.462-.453 32.493 32.493 0 0 1 7.352 1.75 1 1 0 0 0 .744 0 32.308 32.308 0 0 1 7.352-1.75 1.807 1.807 0 0 1 1.462.453 2.561 2.561 0 0 1 .8 1.907C21.983 19.292 20.238 22 17.069 22Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M17.83 15.023C15.309 15.6 12 16.648 12 16.648c2.009.213 4.056 2.051 5.114 2.345 1.109.308 1.527-.844 1.867-2.725a1.02 1.02 0 0 0-1.151-1.245ZM5.019 16.268c.34 1.881.758 3.033 1.867 2.725 1.058-.294 3.1-2.132 5.114-2.345 0 0-3.309-1.052-5.83-1.625a1.02 1.02 0 0 0-1.151 1.245Z"
  }));
});
MaskCarnival.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MaskCarnival.displayName = 'MaskCarnival';
export default MaskCarnival;
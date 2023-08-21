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
var FilePsd = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M319.083 220.907c.024 7.347 5.986 13.291 13.333 13.291 0 0 22.869 0 31.701-.256 32.683-.555 56.149-28.971 56.149-67.541 0-40.533-23.04-67.797-57.301-67.797h-30.784c-7.371.024-13.333 6.005-13.333 13.376l.235 108.927zm43.968-95.638c22.592 0 30.635 21.333 30.635 41.131s-9.259 40.533-29.973 40.875c-4.267 0-11.477.149-18.005.192l-.107-82.197 17.45-.001zM258.603 154.773c-5.824-1.984-11.861-3.072-17.813-4.629a26.75 26.75 0 0 1-12.672-6.4 12.567 12.567 0 0 1-3.243-13.184 12.8 12.8 0 0 1 10.475-6.997 31.724 31.724 0 0 1 12.949 1.899 161.651 161.651 0 0 1 17.493 6.592c6.272 2.752 13.675 4.395 18.731-1.579a12.971 12.971 0 0 0 .683-15.723 23.084 23.084 0 0 0-8.683-7.573 67.82 67.82 0 0 0-51.755-7.061 38.722 38.722 0 0 0-21.888 17.621 36.678 36.678 0 0 0-4.416 12.907 34.581 34.581 0 0 0 4.992 23.467 41.196 41.196 0 0 0 20.501 15.68c8.725 3.584 17.451 7.061 26.304 10.304a28.084 28.084 0 0 1 10.283 5.888 12.074 12.074 0 0 1 3.179 12.352 15.423 15.423 0 0 1-9.749 8.704 32.69 32.69 0 0 1-20.779.747 56.928 56.928 0 0 1-18.091-10.667c-.555-.448-2.368-1.813-2.709-2.133a12.8 12.8 0 0 0-16.213 1.088c-5.455 4.947-5.867 13.379-.921 18.834l.003.004a66.837 66.837 0 0 0 49.067 21.013c22.001.967 41.551-13.924 46.464-35.392a37.696 37.696 0 0 0-12.8-34.645 56.814 56.814 0 0 0-19.392-11.117zM87.915 110.272v112.256c0 7.364 5.97 13.333 13.333 13.333s13.333-5.97 13.333-13.333v-35.477h17.92c24.86 0 45.013-20.153 45.013-45.013s-20.153-45.013-45.013-45.013l-.128-.085H101.12c-.905.016-5.677.191-9.45 4.105-3.609 3.744-3.748 8.262-3.755 9.227zm44.458 50.027h-17.749l-.128-36.693h17.877c10.133-.005 18.351 8.205 18.356 18.338.005 10.133-8.205 18.351-18.338 18.356l-.018-.001z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M405.333 0H106.667C47.786.071.071 47.786 0 106.667v298.667C.071 464.214 47.786 511.93 106.667 512h241.984a105.982 105.982 0 0 0 75.435-31.232l56.661-56.704A105.982 105.982 0 0 0 512 348.651V106.667C511.93 47.786 464.214.071 405.333 0zM42.667 405.333V106.667c0-35.346 28.654-64 64-64h298.667c35.346 0 64 28.654 64 64V320H384c-35.346 0-64 28.654-64 64v85.333H106.667c-35.347 0-64-28.653-64-64zm351.253 45.27a63.467 63.467 0 0 1-31.253 17.067V384c0-11.782 9.551-21.333 21.333-21.333h83.733a64.338 64.338 0 0 1-17.067 31.232l-56.746 56.704z"
  }));
});
FilePsd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
FilePsd.displayName = 'FilePsd';
export default FilePsd;
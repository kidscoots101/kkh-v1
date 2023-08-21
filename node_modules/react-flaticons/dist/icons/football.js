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
var Football = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M256.07-.047C114.467-.047-.326 114.746-.326 256.349S114.467 512.744 256.07 512.744s256.395-114.792 256.395-256.395S397.673-.047 256.07-.047zm158.906 188.591 16.555-53.525a212.063 212.063 0 0 1 37.227 109.461l-45.696-32.192a21.333 21.333 0 0 1-8.086-23.744zM311.467 50.197h-.171l-42.667 31.061a21.333 21.333 0 0 1-25.088 0l-42.667-31.061a206.8 206.8 0 0 1 110.593 0zM80.469 135.04l16.555 53.504a21.334 21.334 0 0 1-8.085 23.744L43.243 244.48a211.996 211.996 0 0 1 37.226-109.44zm5.014 248.619 58.603.192a21.334 21.334 0 0 1 20.267 14.805l18.432 57.451a214.022 214.022 0 0 1-97.302-72.448zm243.754 72.448 18.411-57.451a21.332 21.332 0 0 1 20.245-14.805l58.624-.192a213.845 213.845 0 0 1-97.28 72.448zm122.368-115.2-83.84.277c-27.759.036-52.312 18.009-60.736 44.459l-26.347 82.133a196.326 196.326 0 0 1-49.365 0l-26.347-82.155c-8.434-26.449-32.996-44.413-60.757-44.437l-83.819-.256a211.521 211.521 0 0 1-14.059-46.421l67.179-47.339c22.708-15.938 32.521-44.72 24.277-71.211l-24.213-78.336a213.186 213.186 0 0 1 40.192-28.779l64.597 46.933c22.422 16.358 52.842 16.358 75.264 0l64.597-46.933a213.817 213.817 0 0 1 40.192 28.779l-24.213 78.336c-8.243 26.49 1.569 55.272 24.277 71.211l67.179 47.339a211.112 211.112 0 0 1-14.058 46.4z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m328.235 196.779-40.896-29.696c-18.669-13.632-44.009-13.632-62.677 0l-40.896 29.696c-18.777 13.567-26.612 37.728-19.371 59.733l15.616 48.064c7.137 21.957 27.621 36.805 50.709 36.757h50.56c23.111.002 43.594-14.882 50.731-36.864l15.595-48.064c7.196-21.973-.635-46.078-19.371-59.626zm-21.206 46.442-15.595 48.064a10.666 10.666 0 0 1-10.155 7.381h-50.56a10.666 10.666 0 0 1-10.133-7.381L204.971 243.2a10.666 10.666 0 0 1 3.883-11.947l40.875-29.653a10.668 10.668 0 0 1 12.544 0l40.896 29.696a10.667 10.667 0 0 1 3.86 11.925z"
  }));
});
Football.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Football.displayName = 'Football';
export default Football;
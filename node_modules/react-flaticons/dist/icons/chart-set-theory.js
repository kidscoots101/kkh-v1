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
var ChartSetTheory = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M424.802 182.898v-1.54c0-93.189-75.545-168.734-168.734-168.734S87.334 88.169 87.334 181.358v1.54C5.755 227.943-23.862 330.592 21.183 412.171s147.694 111.196 229.273 66.152a169.027 169.027 0 0 0 5.613-3.241c79.789 48.144 183.5 22.491 231.644-57.298 48.144-79.789 22.491-183.5-57.298-231.644a168.31 168.31 0 0 0-5.613-3.242zM256.068 423.344a126.418 126.418 0 0 1-41.171-78.229 169.286 169.286 0 0 0 82.258 0 126.422 126.422 0 0 1-41.087 78.124v.105zm0-115.435a126.243 126.243 0 0 1-39.21-6.222 126.74 126.74 0 0 1 39.21-66.924 126.74 126.74 0 0 1 39.21 66.924 126.243 126.243 0 0 1-39.21 6.222zm-77.491-26.576a126.742 126.742 0 0 1-46.085-72.555 126.55 126.55 0 0 1 86.75 3.058 168.907 168.907 0 0 0-40.665 69.497zm114.317-69.603a126.55 126.55 0 0 1 86.75-3.058 126.746 126.746 0 0 1-46.085 72.661 168.908 168.908 0 0 0-40.665-69.603zM256.068 54.808c63.672.082 117.4 47.391 125.538 110.542a168.737 168.737 0 0 0-125.538 17.569A168.732 168.732 0 0 0 130.53 165.35c8.138-63.15 61.866-110.46 125.538-110.542zM45.151 329a126.425 126.425 0 0 1 49.059-99.975 169.474 169.474 0 0 0 77.491 98.435V329a168.187 168.187 0 0 0 47.541 117.27c-64.773 26.256-138.566-4.968-164.822-69.74A126.55 126.55 0 0 1 45.151 329zm295.284 126.551a125.97 125.97 0 0 1-47.541-9.28 168.187 168.187 0 0 0 47.541-117.27v-1.54a169.475 169.475 0 0 0 77.512-98.435c55.215 42.851 65.237 122.349 22.386 177.564a126.555 126.555 0 0 1-99.898 48.961z"
  }));
});
ChartSetTheory.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChartSetTheory.displayName = 'ChartSetTheory';
export default ChartSetTheory;
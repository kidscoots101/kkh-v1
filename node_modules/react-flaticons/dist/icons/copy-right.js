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
var CopyRight = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M231 .6c-44.7 5.4-82.5 19-116.7 42C97.9 53.6 88.8 61.1 75 75c-13.9 13.8-21.4 22.9-32.4 39.3-20.4 30.2-34 65.1-40.3 103.2-2.6 15.8-2.6 61.2 0 77 6.3 38.1 19.9 73 40.3 103.2 11 16.4 18.5 25.5 32.4 39.3 13.8 13.9 22.9 21.4 39.3 32.4 30.2 20.4 65.1 34 103.2 40.3 8.8 1.4 16.6 1.8 38.5 1.8s29.7-.4 38.5-1.8c38.1-6.3 73-19.9 103.2-40.3 16.4-11 25.5-18.5 39.3-32.4 13.9-13.8 21.4-22.9 32.4-39.3 20.4-30.2 34-65.1 40.3-103.2 2.6-15.8 2.6-61.2 0-77-6.3-38.1-19.9-73-40.3-103.2-11-16.4-18.5-25.5-32.4-39.3-13.8-13.9-22.9-21.4-39.3-32.4-29.5-19.9-63.1-33.2-100.2-39.8-8.5-1.5-16.9-2-37-2.3-14.3-.1-27.6-.1-29.5.1zM281 50c86.7 10.7 158.6 76 177.4 161 3.6 16.4 4.6 26.2 4.6 45s-1 28.6-4.6 45c-17.2 77.9-79.5 140.2-157.4 157.4-16.4 3.6-26.2 4.6-45 4.6s-28.6-1-45-4.6C133.1 441.2 70.8 378.9 53.6 301 50 284.6 49 274.8 49 256s1-28.6 4.6-45C70.8 133.1 133 70.9 211 53.6c6.4-1.4 14.7-3 18.5-3.5 10-1.2 41.5-1.3 51.5-.1z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M232 113.5c-30.7 5.2-56 18.3-78.1 40.4C125.7 182.2 112 215.5 112 256c0 40.5 13.7 73.8 41.9 102.1 28.1 28 61.6 41.8 101.6 41.9 23.6 0 44-4.8 63.6-14.9 12.9-6.6 27.1-16.1 26.5-17.7-.4-1-23.5-32.4-28.2-38.2-.1-.2-3 1.5-6.4 3.8-8.4 5.7-19.7 11.2-30 14.6-8 2.7-9.4 2.8-26 2.8-16.1 0-18.2-.3-26.3-2.7-31.8-9.8-54.6-32.5-64.4-64.4-2.5-8.2-2.7-10-2.7-27.3s.2-19.1 2.7-27.3c9.8-31.9 32.9-55 64.4-64.3 10.7-3.2 31.4-4.3 43.3-2.5 16.7 2.6 32.9 10.4 44.6 21.3l6.5 6.2 18-18 18-17.9-5.8-5.3c-19.5-17.7-48.1-30.8-77-35.1-9.5-1.4-34.8-1.2-44.3.4z"
  }));
});
CopyRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CopyRight.displayName = 'CopyRight';
export default CopyRight;
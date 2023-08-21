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
var Pie = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M24 14c0-3.624-5.353-8-12-8S0 10.376 0 14a2.946 2.946 0 0 0 2.142 2.887l.532 2.989A5 5 0 0 0 7.6 24h8.8a4.992 4.992 0 0 0 4.922-4.125l.532-2.988A2.946 2.946 0 0 0 24 14Zm-7.6 8H7.6a3.213 3.213 0 0 1-3.1-3.3A4.015 4.015 0 0 0 9 17.648a4.038 4.038 0 0 0 6 0 4.015 4.015 0 0 0 4.5 1.052 3.211 3.211 0 0 1-3.1 3.3Zm4.6-7a1.57 1.57 0 0 0-.406.09 1.232 1.232 0 0 0-.75.688 2.015 2.015 0 0 1-3.687 0 1.259 1.259 0 0 0-2.313 0 2 2 0 0 1-3.687 0 1.259 1.259 0 0 0-2.313 0 2.015 2.015 0 0 1-3.687 0 1.236 1.236 0 0 0-.751-.691A6.309 6.309 0 0 0 3 15a.915.915 0 0 1-1-1c0-2.369 4.479-6 10-6s10 3.631 10 5.988A.918.918 0 0 1 21 15ZM11 3V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm4 0V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0ZM7 3V1a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm3.985 7.65a5.4 5.4 0 0 1-.752 1.967 1.308 1.308 0 0 1-1.85-1.85 5.4 5.4 0 0 1 1.967-.752.526.526 0 0 1 .635.635Zm4.632.117a1.308 1.308 0 0 1-1.85 1.85 5.4 5.4 0 0 1-.752-1.967.526.526 0 0 1 .635-.635 5.4 5.4 0 0 1 1.967.752Z"
  }));
});
Pie.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Pie.displayName = 'Pie';
export default Pie;
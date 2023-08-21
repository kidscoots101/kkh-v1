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
var RocketLunch = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M1.879 17.878a11.259 11.259 0 0 0-1.835 4 1.739 1.739 0 0 0 2.083 2.082 11.263 11.263 0 0 0 3.994-1.834 3 3 0 0 0-4.242-4.248Zm2.828 2.829a10.07 10.07 0 0 1-2.6 1.184 10.1 10.1 0 0 1 1.184-2.6 1 1 0 0 1 1.414 1.414ZM18 8.5a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 5 0ZM20.972 0A15.487 15.487 0 0 0 8.634 6.006a11.065 11.065 0 0 0-4.569 1.163 8.1 8.1 0 0 0-3.822 3.666 2.955 2.955 0 0 0 .25 2.8A3.009 3.009 0 0 0 3.014 15H5.5A3.517 3.517 0 0 1 9 18.5v2.486a3.009 3.009 0 0 0 1.363 2.521 2.955 2.955 0 0 0 2.8.25 8.1 8.1 0 0 0 3.666-3.822 11.065 11.065 0 0 0 1.163-4.569A15.507 15.507 0 0 0 24 3a3.009 3.009 0 0 0-3.028-3ZM4.346 13H3.014a1 1 0 0 1-.85-.461.95.95 0 0 1-.085-.91 6.176 6.176 0 0 1 2.883-2.672 8.993 8.993 0 0 1 1.993-.72A34.361 34.361 0 0 0 4.346 13Zm10.7 6.038a6.18 6.18 0 0 1-2.671 2.883.951.951 0 0 1-.911-.085 1 1 0 0 1-.461-.85v-1.332a34.361 34.361 0 0 0 4.763-2.609 8.993 8.993 0 0 1-.723 1.993Zm.135-4.02a29.92 29.92 0 0 1-4.271 2.471 5.5 5.5 0 0 0-4.4-4.4 29.92 29.92 0 0 1 2.472-4.267C12.35 4.124 15.84 2.147 21 2a1 1 0 0 1 1 .972c-.147 5.188-2.124 8.678-6.822 12.046Z"
  }));
});
RocketLunch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
RocketLunch.displayName = 'RocketLunch';
export default RocketLunch;
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
var BowlingPins = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M9 8a11.618 11.618 0 0 1 .554-2.175A7.168 7.168 0 0 0 10 4a4 4 0 0 0-8 0 7.168 7.168 0 0 0 .446 1.825A11.618 11.618 0 0 1 3 8a8.433 8.433 0 0 1-1.264 3.536A11.789 11.789 0 0 0 0 17a11.08 11.08 0 0 0 .986 4.7A4 4 0 0 0 4.61 24h2.78a4 4 0 0 0 3.624-2.3A11.08 11.08 0 0 0 12 17a11.789 11.789 0 0 0-1.736-5.464A8.433 8.433 0 0 1 9 8ZM6 2a2 2 0 0 1 2 1.973 12 12 0 0 1-.355 1.253A10.708 10.708 0 0 0 7 8H5a10.708 10.708 0 0 0-.646-2.774C4.211 4.772 4.016 4.15 4 4a2 2 0 0 1 2-2Zm3.2 18.856A2 2 0 0 1 7.39 22H4.61a2 2 0 0 1-1.81-1.143A9.092 9.092 0 0 1 2 17a10.092 10.092 0 0 1 1.512-4.542A18.366 18.366 0 0 0 4.637 10h2.726a18.366 18.366 0 0 0 1.125 2.458A10.092 10.092 0 0 1 10 17a9.084 9.084 0 0 1-.8 3.856Zm13.064-9.32A8.433 8.433 0 0 1 21 8a11.618 11.618 0 0 1 .554-2.175A7.168 7.168 0 0 0 22 4a4 4 0 0 0-8 0 7.168 7.168 0 0 0 .446 1.825A11.618 11.618 0 0 1 15 8a8.433 8.433 0 0 1-1.264 3.536A11.789 11.789 0 0 0 12 17a11.08 11.08 0 0 0 .986 4.7A4 4 0 0 0 16.61 24h2.78a4 4 0 0 0 3.624-2.3A11.08 11.08 0 0 0 24 17a11.789 11.789 0 0 0-1.736-5.464ZM18 2a2 2 0 0 1 2 1.973 12 12 0 0 1-.355 1.253A10.708 10.708 0 0 0 19 8h-2a10.708 10.708 0 0 0-.646-2.774C16.211 4.772 16.016 4.15 16 4a2 2 0 0 1 2-2Zm3.2 18.856A2 2 0 0 1 19.39 22h-2.78a2 2 0 0 1-1.81-1.143A9.092 9.092 0 0 1 14 17a10.092 10.092 0 0 1 1.512-4.542A18.366 18.366 0 0 0 16.637 10h2.726a18.366 18.366 0 0 0 1.125 2.458A10.092 10.092 0 0 1 22 17a9.084 9.084 0 0 1-.8 3.856Z"
  }));
});
BowlingPins.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
BowlingPins.displayName = 'BowlingPins';
export default BowlingPins;
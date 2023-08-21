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
var BoxTissue = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M19.45 8.02c.249-2.698.55-6.029.55-6.393 0-.883-.643-1.591-1.463-1.611-.684-.02-1.36.408-2.146 1.336-.342.403-.679.646-.881.647-.253-.003-.829-.519-1.124-.783-.575-.517-1.373-1.227-2.387-1.217-1.037-.018-1.811.7-2.387 1.217-.295.265-.871.78-1.103.783-.224-.002-.561-.244-.901-.646C6.838.442 6.129.017 5.463.017 4.643.038 4 .746 4 1.628c0 .364.301 3.697.55 6.393A5.006 5.006 0 0 0 0 13v6c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5v-6a5.008 5.008 0 0 0-4.55-4.98ZM6.083 2.647C6.838 3.536 7.647 3.991 8.511 4c1.007-.011 1.786-.71 2.355-1.221.313-.281.893-.779 1.145-.779s.81.498 1.123.779c.569.511 1.349 1.21 2.377 1.221.842-.009 1.651-.464 2.407-1.354l.007-.009c-.156 1.86-.52 5.799-.77 8.445a.992.992 0 0 1-.995.917h-1.074l.243-2.917a.998.998 0 0 0-.913-1.079.984.984 0 0 0-1.079.913l-.257 3.083h-2.161l-.424-5.083c-.045-.551-.517-.974-1.079-.913a.998.998 0 0 0-.913 1.079l.41 4.917H7.839a.997.997 0 0 1-.997-.928c-.248-2.64-.611-6.578-.768-8.435l.008.01ZM19 22H5c-1.654 0-3-1.346-3-3h20c0 1.654-1.346 3-3 3Zm3-5H2v-4a3.004 3.004 0 0 1 2.735-2.988l.116 1.237A3.017 3.017 0 0 0 7.84 14h8.32c1.548 0 2.861-1.209 2.987-2.74l.117-1.247a3.003 3.003 0 0 1 2.735 2.988v4Z"
  }));
});
BoxTissue.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
BoxTissue.displayName = 'BoxTissue';
export default BoxTissue;
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
var FlowerBouquet = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M24 11.1a3.044 3.044 0 0 0-2.664-3.055c.3-.545.736-1.813.654-5a2.094 2.094 0 0 0-.849-1.645 2 2 0 0 0-1.733-.322A12.054 12.054 0 0 0 15.3 3.139a21.337 21.337 0 0 0-1.624-2.33 2.206 2.206 0 0 0-3.351 0 21.342 21.342 0 0 0-1.618 2.325 12.239 12.239 0 0 0-4.121-2.06 1.981 1.981 0 0 0-1.727.326 2.091 2.091 0 0 0-.849 1.642c-.082 3.188.357 4.455.652 5A3.045 3.045 0 0 0 0 11.1c0 4.29 6.387 7.185 9.478 8.335a6.443 6.443 0 0 0-1.192 1.433 2.027 2.027 0 0 0-.012 2.06A2.128 2.128 0 0 0 10.118 24h3.764a2.128 2.128 0 0 0 1.844-1.076 2.027 2.027 0 0 0-.011-2.059 5.722 5.722 0 0 0-.648-.865H16a2 2 0 0 1 2 2 1 1 0 0 0 2 0 3.992 3.992 0 0 0-2.683-3.759C20.415 16.74 24 14.31 24 11.1Zm-7.628-6.216A8.753 8.753 0 0 1 19.943 3s.046.019.048.093c.063 2.434-.214 3.72-.47 4.083a1.893 1.893 0 0 1-1.28.806 1.79 1.79 0 0 1-1.385-.388 1.9 1.9 0 0 1-.484-2.71Zm-4.48-2.832a.138.138 0 0 1 .217 0 14.5 14.5 0 0 1 1.928 2.977.858.858 0 0 0 .069.1 3.757 3.757 0 0 0-.039 1.493 2.24 2.24 0 0 1-4.078.123 1.071 1.071 0 0 0-.071-.092A3.748 3.748 0 0 0 9.9 5.162a.188.188 0 0 0 .014-.024 13.779 13.779 0 0 1 1.978-3.086Zm-7.883 1.04A.123.123 0 0 1 4.047 3a8.849 8.849 0 0 1 3.6 1.882A1.929 1.929 0 0 1 7.122 7.6a1.77 1.77 0 0 1-1.372.387 1.871 1.871 0 0 1-1.272-.805c-.256-.368-.532-1.655-.469-4.09ZM13.882 22h-3.764c-.062 0-.1-.046-.112-.116a5.836 5.836 0 0 1 1.963-1.843 5.647 5.647 0 0 1 2.019 1.894.124.124 0 0 1-.106.065Zm.794-4.791a8.491 8.491 0 0 0 1.311-3.046 1 1 0 1 0-1.974-.326 9.2 9.2 0 0 1-2 3.637 10.373 10.373 0 0 1-2.036-3.693 1 1 0 1 0-1.952.438 9.881 9.881 0 0 0 1.359 3.014C6.3 15.965 2 13.64 2 11.1A1.067 1.067 0 0 1 3.082 10h17.836A1.067 1.067 0 0 1 22 11.1c0 2.523-4.245 4.835-7.324 6.109Z"
  }));
});
FlowerBouquet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
FlowerBouquet.displayName = 'FlowerBouquet';
export default FlowerBouquet;
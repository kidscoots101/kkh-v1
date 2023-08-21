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
var Coins = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M16.5 0C12.294 0 9 1.977 9 4.5v2.587A12.816 12.816 0 0 0 7.5 7C3.294 7 0 8.977 0 11.5v8C0 22.023 3.294 24 7.5 24c3.407 0 6.216-1.297 7.16-3.131.598.087 1.214.131 1.84.131 4.206 0 7.5-1.977 7.5-4.5v-12C24 1.977 20.706 0 16.5 0ZM22 12.5c0 1.18-2.352 2.5-5.5 2.5-.512 0-1.014-.035-1.5-.103v-1.984c.49.057.992.087 1.5.087 2.194 0 4.14-.538 5.5-1.411v.911ZM2 14.589C3.36 15.462 5.306 16 7.5 16s4.14-.538 5.5-1.411v.911c0 1.18-2.352 2.5-5.5 2.5S2 16.68 2 15.5v-.911ZM22 8.5c0 1.18-2.352 2.5-5.5 2.5-.535 0-1.06-.038-1.566-.112-.193-.887-.8-1.684-1.706-2.323.984.28 2.092.435 3.272.435 2.194 0 4.14-.538 5.5-1.411V8.5ZM16.5 2C19.648 2 22 3.32 22 4.5S19.648 7 16.5 7 11 5.68 11 4.5 13.352 2 16.5 2Zm-9 7c3.148 0 5.5 1.32 5.5 2.5S10.648 14 7.5 14 2 12.68 2 11.5 4.352 9 7.5 9Zm0 13C4.352 22 2 20.68 2 19.5v-.911C3.36 19.462 5.306 20 7.5 20s4.14-.538 5.5-1.411v.911c0 1.18-2.352 2.5-5.5 2.5Zm9-3c-.512 0-1.014-.035-1.5-.103v-1.984c.49.057.992.087 1.5.087 2.194 0 4.14-.538 5.5-1.411v.911c0 1.18-2.352 2.5-5.5 2.5Z"
  }));
});
Coins.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Coins.displayName = 'Coins';
export default Coins;
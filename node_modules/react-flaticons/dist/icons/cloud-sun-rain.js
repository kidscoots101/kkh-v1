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
var CloudSunRain = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M18.986 24a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1Zm-4 0a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1Zm-4 0a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1ZM8 22.487a.992.992 0 0 1-.6-.2 3.45 3.45 0 0 1-1.281-1.882 3.5 3.5 0 0 1 2-4.142 6.349 6.349 0 0 1 .056-2.732 6 6 0 0 1 11.368-.854c.136.324.286.358.587.426l.178.043a5.012 5.012 0 0 1 3.557 6 4.9 4.9 0 0 1-1.117 2.154 1 1 0 0 1-1.5-1.328 2.9 2.9 0 0 0 .664-1.272 3.021 3.021 0 0 0-2.132-3.621 2.647 2.647 0 0 1-2.08-1.633 4 4 0 0 0-7.613 2.354 2.016 2.016 0 0 1-1.179 2.3 1.494 1.494 0 0 0-.852 1.8 1.46 1.46 0 0 0 .541.787 1 1 0 0 1-.6 1.8ZM2.073 14a1 1 0 0 1-.5-1.866l2.248-1.3A5.477 5.477 0 0 1 3.6 10H1a1 1 0 0 1 0-2h2.589a5.831 5.831 0 0 1 .205-.81L1.552 5.915a1 1 0 0 1 .988-1.738l2.239 1.272a5.525 5.525 0 0 1 .643-.649L4.134 2.572a1 1 0 0 1 1.732-1l1.29 2.235c.148-.052.3-.1.451-.135.131-.032.262-.06.393-.083V1a1 1 0 0 1 2 0v2.6a5.516 5.516 0 0 1 .8.212l1.282-2.255a1 1 0 0 1 1.738.988l-1.28 2.253a5.582 5.582 0 0 1 .615.606l2.273-1.267a1 1 0 0 1 .994 1.736L14.167 7.16a2.017 2.017 0 0 1-2.521-.451 3.5 3.5 0 0 0-3.557-1.1A3.434 3.434 0 0 0 5.611 8.1a3.512 3.512 0 0 0 1.056 3.514A1 1 0 0 1 5.333 13.1a5.5 5.5 0 0 1-.517-.53l-2.244 1.3a.992.992 0 0 1-.499.13Z"
  }));
});
CloudSunRain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CloudSunRain.displayName = 'CloudSunRain';
export default CloudSunRain;
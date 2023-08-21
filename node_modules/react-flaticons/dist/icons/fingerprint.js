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
var Fingerprint = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M5.972 22.285a1 1 0 0 1-.515-1.857C9 18.3 9 13.73 9 11a3 3 0 0 1 6 0 1 1 0 0 1-2 0 1 1 0 0 0-2 0c0 2.947 0 8.434-4.514 11.143a1 1 0 0 1-.514.142Zm4.963 1.421c2.282-2.3 3.615-5.534 3.961-9.621A1 1 0 0 0 13.985 13a.983.983 0 0 0-1.081.911c-.311 3.657-1.419 6.4-3.388 8.381a1 1 0 0 0 1.419 1.41Zm5.2-.186a17.793 17.793 0 0 0 1.508-3.181 1 1 0 0 0-1.881-.678 15.854 15.854 0 0 1-1.338 2.821 1 1 0 0 0 1.711 1.038Zm2.365-6.329A31.459 31.459 0 0 0 19 11 7 7 0 0 0 6.787 6.333a1 1 0 1 0 1.489 1.334A5 5 0 0 1 17 11a29.686 29.686 0 0 1-.462 5.809 1 1 0 0 0 .79 1.172.979.979 0 0 0 .193.019 1 1 0 0 0 .979-.809ZM7 11a5 5 0 0 1 .069-.833A1 1 0 1 0 5.1 9.833 6.971 6.971 0 0 0 5 11c0 4.645-1.346 7-4 7a1 1 0 0 0 0 2c3.869 0 6-3.2 6-9Zm13.7 12.414A29.76 29.76 0 0 0 23 11a10.865 10.865 0 0 0-1.1-4.794 1 1 0 1 0-1.8.875A8.9 8.9 0 0 1 21 11a27.91 27.91 0 0 1-2.119 11.586 1 1 0 0 0 .5 1.324.984.984 0 0 0 .413.09 1 1 0 0 0 .906-.586ZM3 14v-3a9.01 9.01 0 0 1 9-9 8.911 8.911 0 0 1 5.4 1.8 1 1 0 0 0 1.2-1.6A10.9 10.9 0 0 0 12 0 11.013 11.013 0 0 0 1 11v3a1 1 0 0 0 2 0Z"
  }));
});
Fingerprint.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Fingerprint.displayName = 'Fingerprint';
export default Fingerprint;
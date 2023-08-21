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
var TruckPlow = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M505.365 436.248a140.026 140.026 0 0 1-41.282-99.672v-76.7a140.026 140.026 0 0 1 41.282-99.672c8.235-8.237 8.235-21.59 0-29.828-42.189-34.152-89.716 97.394-83.472 129.5v17.255h-44.868a84.677 84.677 0 0 0-43.075-53.918l-.232-.338L241.26 90.253a105.474 105.474 0 0 0-86.509-45.164h-7.088c-34.951 0-63.284 28.333-63.284 63.284v105.473C37.778 213.847 0 251.625 0 298.226v42.189a42.19 42.19 0 0 0 21.095 36.515v16.222c0 40.776 33.055 73.831 73.831 73.831s73.831-33.055 73.831-73.831v-10.547h42.189v10.547c0 40.776 33.055 73.831 73.831 73.831s73.831-33.055 73.831-73.831V376.93a42.188 42.188 0 0 0 21.095-36.515V319.32h42.189v17.255a181.942 181.942 0 0 0 53.644 129.5l1.308 1.329c20.189 19.239 48.055-12.128 28.521-31.156zM126.568 108.374c0-11.65 9.444-21.095 21.095-21.095h7.088a63.282 63.282 0 0 1 51.977 27.086l69.275 99.482H126.568V108.374zM42.189 298.226c0-23.301 18.889-42.189 42.189-42.189h210.947c23.301 0 42.189 18.889 42.189 42.189v42.189H42.189v-42.189zm84.379 94.926c0 17.475-14.167 31.642-31.642 31.642s-31.642-14.167-31.642-31.642v-10.547h63.284v10.547zm158.21 31.642c-17.475 0-31.642-14.167-31.642-31.642v-10.547h63.284v10.547c0 17.475-14.167 31.642-31.642 31.642z"
  }));
});
TruckPlow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
TruckPlow.displayName = 'TruckPlow';
export default TruckPlow;
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
var EclipseAlt = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M23 11h-3.062a7.956 7.956 0 0 0-.575-2.129l2.655-1.546A1 1 0 0 0 21.012 5.6l-2.658 1.545a8.1 8.1 0 0 0-1.507-1.5l1.541-2.648a1 1 0 0 0-1.729-1.006L15.12 4.633A7.971 7.971 0 0 0 13 4.062V1a1 1 0 0 0-2 0v3.062a7.965 7.965 0 0 0-2.108.566L7.355 1.986a1 1 0 1 0-1.728 1.006l1.536 2.641a8.046 8.046 0 0 0-1.512 1.506L3 5.6a1 1 0 0 0-1 1.725l2.64 1.54A7.955 7.955 0 0 0 4.062 11H1a1 1 0 0 0 0 2h3.062a7.957 7.957 0 0 0 .576 2.129L2 16.662a1 1 0 0 0 1.01 1.729l2.637-1.535a8.083 8.083 0 0 0 1.5 1.5L5.6 21a1 1 0 0 0 1.73 1.007l1.538-2.646a7.943 7.943 0 0 0 2.132.577V23a1 1 0 0 0 2 0v-3.062a7.934 7.934 0 0 0 2.143-.582l1.543 2.651A1 1 0 0 0 18.414 21l-1.546-2.657a8.076 8.076 0 0 0 1.49-1.494l2.647 1.541a1 1 0 0 0 1.006-1.729l-2.646-1.54A7.941 7.941 0 0 0 19.938 13H23a1 1 0 0 0 0-2Zm-11 7c-7.644-.094-8.208-11.68 0-12 7.929.252 7.928 11.749 0 12Zm1.455-2.229C7.889 17.5 5.64 9.3 11.361 8.051a4.393 4.393 0 0 1 1.683.068.544.544 0 0 1 .243.918 3.7 3.7 0 0 0 .319 5.793.545.545 0 0 1-.151.941Z"
  }));
});
EclipseAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
EclipseAlt.displayName = 'EclipseAlt';
export default EclipseAlt;
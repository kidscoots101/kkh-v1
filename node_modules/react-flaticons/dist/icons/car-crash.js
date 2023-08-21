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
var CarCrash = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M24.013 15.331 23.49 11.1a4.471 4.471 0 0 0-2.834-4.081L16.7 5.378a4.933 4.933 0 0 0-5.073.875L7.952 8.979a9.066 9.066 0 0 0-2.295 3.283s-.428.77-.445.811a3.441 3.441 0 0 0 .087 2.58 3.251 3.251 0 0 0 .726 1.06l-.033.082a2.5 2.5 0 0 0 4.6 1.964l4.8 1.925a2.5 2.5 0 0 0 4.686 1.738l.014-.035A3.007 3.007 0 0 0 23 20.5l.412-1.04a9.04 9.04 0 0 0 .601-4.129ZM12.89 7.8a2.977 2.977 0 0 1 3.066-.568l3.955 1.64a2.541 2.541 0 0 1 1.589 2.417c0 .012.419 3.388.419 3.388L10.028 9.924ZM8.131 18.183h-.01l.02.008Zm9.429 3.781h-.009l.017.006Zm3.582-2.2a1 1 0 0 1-1.288.564L7.635 15.419a1.009 1.009 0 0 1-.5-.561 1.484 1.484 0 0 1-.081-1s.421-.757.437-.8a7.236 7.236 0 0 1 .916-1.635l1.62.648-.325.8a1 1 0 0 0 1.854.752l.328-.81 6.648 2.657-.33.813a1 1 0 1 0 1.854.752l.333-.822 1.622.648a6.987 6.987 0 0 1-.455 1.851ZM4 11a1 1 0 0 1-1 1H1a1 1 0 0 1-.768-1.64l1.591-1.909a.7.7 0 0 0 0-.9L.232 5.64A1 1 0 0 1 1 4h2.3a.705.705 0 0 0 .7-.7V1A1 1 0 0 1 5.64.232l1.909 1.591a.7.7 0 0 0 .9 0L10.36.232A1 1 0 0 1 12 1v2a1 1 0 0 1-1.992.128l-.277.231a2.7 2.7 0 0 1-3.462 0L6 3.135V3.3A2.707 2.707 0 0 1 3.3 6h-.165l.224.269a2.7 2.7 0 0 1 0 3.462l-.231.277A1 1 0 0 1 4 11Z"
  }));
});
CarCrash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CarCrash.displayName = 'CarCrash';
export default CarCrash;
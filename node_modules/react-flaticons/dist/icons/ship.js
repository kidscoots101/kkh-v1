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
var Ship = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M23 20a1 1 0 0 0-1 1c0 .344-.682 1-1.75 1a2.023 2.023 0 0 1-1.593-.689 1.932 1.932 0 0 1 .128-.184 12.152 12.152 0 0 0 3.156-6.183A3 3 0 0 0 20 11.584V9a4 4 0 0 0-4-4V4a4 4 0 0 0-8 0v1a4 4 0 0 0-4 4v2.571a3 3 0 0 0-1.972 3.373 12.188 12.188 0 0 0 3.187 6.183 1.973 1.973 0 0 1 .133.189A2.005 2.005 0 0 1 3.75 22C2.661 22 2 21.306 2 21a1 1 0 0 0-2 0c0 1.626 1.718 3 3.75 3a4.212 4.212 0 0 0 2.763-1 4.295 4.295 0 0 0 5.487.016A4.317 4.317 0 0 0 17.5 23a4.208 4.208 0 0 0 2.746 1C22.282 24 24 22.626 24 21a1 1 0 0 0-1-1ZM10 4a2 2 0 0 1 4 0v1h-4ZM8 7h8a2 2 0 0 1 2 2v1.92l-5.052-1.658a3.026 3.026 0 0 0-1.891 0L6 10.913V9a2 2 0 0 1 2-2Zm1.25 15a1.938 1.938 0 0 1-1.711-.849 5.113 5.113 0 0 0-.848-1.372A10.253 10.253 0 0 1 4 14.607a1.018 1.018 0 0 1 .662-1.153L11 11.383V21c0 .344-.682 1-1.75 1Zm5.5 0c-1.089 0-1.75-.694-1.75-1v-9.616l6.305 2.069a1.021 1.021 0 0 1 .666 1.155 10.2 10.2 0 0 1-2.662 5.171 4.991 4.991 0 0 0-.848 1.378A1.929 1.929 0 0 1 14.75 22Z"
  }));
});
Ship.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Ship.displayName = 'Ship';
export default Ship;
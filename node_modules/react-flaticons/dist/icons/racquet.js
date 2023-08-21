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
var Racquet = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M21.923 2.067C18.758-1.1 13.077-.569 9.258 3.248A10.6 10.6 0 0 0 6.02 10.9a13.291 13.291 0 0 0 .157 1.433c.149 1.571.129 3.938-.884 4.951l-5 5A1 1 0 1 0 1.707 23.7l5-5c1.025-1.023 3.433-1.033 5-.879a13.448 13.448 0 0 0 1.62.163 10.667 10.667 0 0 0 7.412-3.249c3.821-3.82 4.35-9.501 1.184-12.668Zm-.517 8.154-1.482-1.482L21.967 6.7a7.444 7.444 0 0 1-.561 3.521Zm-.1-5.689L18.51 7.325 16.584 5.4l2.753-2.753a4.838 4.838 0 0 1 1.172.835 4.831 4.831 0 0 1 .791 1.05ZM13.037 15.98l-.3-.051 2.241-2.241 1.568 1.568a7.685 7.685 0 0 1-3.509.724ZM8.01 10.951a7.7 7.7 0 0 1 .724-3.5l1.487 1.486-2.182 2.18-.029-.166Zm2.532 4.342a4.718 4.718 0 0 1-1.9-1.952l2.992-2.993 1.926 1.926Zm2.507-6.359 2.121-2.121 1.93 1.926-2.125 2.121Zm4.079-6.907L15.17 3.985l-1.4-1.4a7.7 7.7 0 0 1 2.891-.6c.162.003.312.031.467.042Zm-5.179 1.565L13.756 5.4l-2.121 2.12-1.842-1.841a9.381 9.381 0 0 1 2.156-2.087Zm-3.9 12.346c0-.014.005-.029.008-.043l.017.019.018.017Zm10.26-1.74-1.923-1.924 2.121-2.121 1.893 1.891a9.879 9.879 0 0 1-1.073 1.275 10.035 10.035 0 0 1-1.015.881Z"
  }));
});
Racquet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Racquet.displayName = 'Racquet';
export default Racquet;
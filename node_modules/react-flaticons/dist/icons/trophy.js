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
var Trophy = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M15.091 16C21.661 15.964 24 12.484 24 9.5a3.5 3.5 0 0 0-2.764-3.419c.136-.387.254-.742.333-1.011a3.887 3.887 0 0 0-.626-3.458A3.979 3.979 0 0 0 17.729 0H6.271a3.979 3.979 0 0 0-3.214 1.612 3.887 3.887 0 0 0-.626 3.458c.079.269.2.624.333 1.011A3.5 3.5 0 0 0 0 9.5c0 2.984 2.339 6.464 8.909 6.5a5.06 5.06 0 0 1 .091.921V20a1.883 1.883 0 0 1-2 2H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2h-.992A1.885 1.885 0 0 1 15 20v-3.08a5.058 5.058 0 0 1 .091-.92ZM20.5 8A1.5 1.5 0 0 1 22 9.5c0 2.034-1.609 4.2-6.036 4.47a4.847 4.847 0 0 1 .762-.821 15.132 15.132 0 0 0 3.727-5.159c.016.001.03.01.047.01ZM2 9.5A1.5 1.5 0 0 1 3.5 8c.017 0 .031-.009.047-.01a15.132 15.132 0 0 0 3.727 5.159 4.847 4.847 0 0 1 .762.821C3.609 13.7 2 11.534 2 9.5ZM10.513 22A4.08 4.08 0 0 0 11 20v-3.079a6.93 6.93 0 0 0-2.431-5.295A15.338 15.338 0 0 1 4.349 4.5a1.9 1.9 0 0 1 .31-1.694A1.994 1.994 0 0 1 6.271 2h11.458a1.994 1.994 0 0 1 1.612.81 1.9 1.9 0 0 1 .31 1.694 15.338 15.338 0 0 1-4.22 7.122A6.928 6.928 0 0 0 13 16.92V20a4.08 4.08 0 0 0 .487 2Z"
  }));
});
Trophy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Trophy.displayName = 'Trophy';
export default Trophy;
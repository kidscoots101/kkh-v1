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
var Guitar = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
  }, mergedProps), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "14",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5.707 16.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 1 0 1.414-1.414Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23.482.518a1.767 1.767 0 0 0-2.5 0l-.214.214a6.035 6.035 0 0 0-1.534 2.62l-2.975 2.975a5.894 5.894 0 0 0-7.7.232 4.933 4.933 0 0 0-.445.508 2.283 2.283 0 0 1-1.554.959 7.055 7.055 0 0 0-4.5 2.038c-2.956 2.957-2.7 8.025.575 11.3A8.8 8.8 0 0 0 8.814 24a7.164 7.164 0 0 0 5.122-2.059 7.055 7.055 0 0 0 2.038-4.5 2.283 2.283 0 0 1 .959-1.554 4.933 4.933 0 0 0 .508-.445 5.9 5.9 0 0 0 .232-7.7l2.975-2.975a6.035 6.035 0 0 0 2.62-1.534l.214-.214a1.767 1.767 0 0 0 0-2.501Zm-7.455 13.509a2.888 2.888 0 0 1-.3.265 4.192 4.192 0 0 0-1.745 2.99 5.072 5.072 0 0 1-1.458 3.239c-2.175 2.175-5.975 1.92-8.468-.574s-2.756-6.292-.577-8.468a5.072 5.072 0 0 1 3.239-1.458 4.192 4.192 0 0 0 2.99-1.745 2.888 2.888 0 0 1 .265-.3A3.41 3.41 0 0 1 12.419 7a4.435 4.435 0 0 1 2.415.752l-1.541 1.541a1 1 0 1 0 1.414 1.414l1.538-1.538a3.858 3.858 0 0 1-.218 4.858Z"
  }));
});
Guitar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Guitar.displayName = 'Guitar';
export default Guitar;
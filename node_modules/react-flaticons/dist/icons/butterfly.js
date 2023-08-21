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
var Butterfly = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M21.5 12.932A8.184 8.184 0 0 0 24 7.284c0-5.654-2.767-6.264-3.956-6.264-2.968 0-5.884 2.9-8.041 5.521C9.862 3.942 6.937 1.02 3.961 1.02-.188.76-1.706 9.091 2.506 12.933c.176.174.359.337.544.49a6.554 6.554 0 0 0-1.72 6.687 4.02 4.02 0 0 0 2.3 2.574 3.914 3.914 0 0 0 3.355-.131A16.382 16.382 0 0 0 11 19.621V22a1 1 0 0 0 2 0v-2.379a16.351 16.351 0 0 0 4.018 2.931 3.911 3.911 0 0 0 3.355.132 4.021 4.021 0 0 0 2.3-2.573A6.567 6.567 0 0 0 21 13.384c.171-.142.338-.292.5-.452ZM11 15.636c0 1.478-2.08 3.642-4.947 5.146a1.891 1.891 0 0 1-1.647.06 2.027 2.027 0 0 1-1.158-1.3 4.6 4.6 0 0 1 1.566-5.038A6.25 6.25 0 0 0 7.206 15 9.811 9.811 0 0 0 11 14.293Zm0-3.651A6.3 6.3 0 0 1 7.18 13a4.559 4.559 0 0 1-3.27-1.49 6.234 6.234 0 0 1-1.9-4.225c0-2.71.713-4.264 1.955-4.264C5.746 3.02 8.106 4.858 11 8.491ZM13 8.5c2.88-3.63 5.252-5.48 7.044-5.48C21.287 3.02 22 4.574 22 7.284a6.236 6.236 0 0 1-1.9 4.225A4.691 4.691 0 0 1 16.87 13 6.435 6.435 0 0 1 13 11.98Zm7.752 11.048a2.025 2.025 0 0 1-1.158 1.3 1.892 1.892 0 0 1-1.647-.061C15.08 19.278 13 17.114 13 15.636v-1.345a9.812 9.812 0 0 0 3.8.709 6.094 6.094 0 0 0 2.424-.51 4.535 4.535 0 0 1 1.528 5.054ZM10 2a2 2 0 0 1 4 0 2 2 0 0 1-4 0Z"
  }));
});
Butterfly.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Butterfly.displayName = 'Butterfly';
export default Butterfly;
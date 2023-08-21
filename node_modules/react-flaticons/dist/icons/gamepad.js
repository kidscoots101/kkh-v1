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
var Gamepad = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M473.759 107.286c-19.12-31.867-53.112-53.112-91.353-53.112H127.469c-38.241 0-72.232 21.245-91.353 53.112C12.747 149.776 0 196.515 0 245.378c0 116.846 46.739 212.448 106.224 212.448 31.867 0 57.361-29.743 76.481-91.353 2.124-8.498 10.622-14.871 21.245-14.871h104.1c8.498 0 16.996 6.373 21.245 14.871 19.12 61.61 44.614 91.353 76.481 91.353 59.485 0 106.224-95.602 106.224-212.448-2.124-48.863-14.871-95.602-38.241-138.092zm-70.108 308.05c-6.373 0-21.245-16.996-36.116-61.61-8.498-27.618-33.992-44.614-61.61-44.614H203.95c-27.618 0-53.112 19.12-61.61 44.614-14.871 44.614-29.743 61.61-36.116 61.61-21.245 0-63.734-65.859-63.734-169.958 0-40.365 10.622-80.73 29.743-116.846 12.747-19.12 33.992-31.867 55.237-31.867h254.938c21.245 0 42.49 12.747 55.237 31.867 19.12 36.116 29.743 76.481 29.743 116.846-.002 104.099-42.492 169.958-63.737 169.958z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M192 192h-21.333v-21.333c0-12.8-8.533-21.333-21.333-21.333-12.8 0-21.333 8.533-21.333 21.333V192h-21.333c-12.8 0-21.333 8.533-21.333 21.333 0 12.8 8.533 21.333 21.333 21.333H128V256c0 12.8 8.533 21.333 21.333 21.333 12.8 0 21.333-8.533 21.333-21.333v-21.333H192c12.8 0 21.333-8.533 21.333-21.333C213.333 200.533 204.8 192 192 192z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "394.667",
    cy: "181.333",
    r: "32"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "330.667",
    cy: "245.333",
    r: "32"
  }));
});
Gamepad.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Gamepad.displayName = 'Gamepad';
export default Gamepad;
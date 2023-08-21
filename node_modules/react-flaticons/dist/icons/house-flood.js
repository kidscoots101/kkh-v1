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
var HouseFlood = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M6.928 20.627ZM6.929 20.631ZM6.928 20.626ZM5.07 20.633c0-.013-.006.013 0 0Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22.332 21.49a2.2 2.2 0 0 1-3.387-.817 1.006 1.006 0 0 0-1.89 0 2.278 2.278 0 0 1-4.11 0 1.006 1.006 0 0 0-1.89 0 2.274 2.274 0 0 1-4.126-.041 1.012 1.012 0 0 0-1.859 0 2.207 2.207 0 0 1-3.4.856 1 1 0 1 0-1.338 1.49A4.186 4.186 0 0 0 6 22.775a4.336 4.336 0 0 0 6 0 4.336 4.336 0 0 0 6 0 4.185 4.185 0 0 0 5.668.2 1 1 0 0 0-1.336-1.485ZM2 17v-5.831a1 1 0 0 1 .293-.707l7.585-7.583a3.008 3.008 0 0 1 4.244 0l7.585 7.586a1.009 1.009 0 0 1 .293.7V17a1 1 0 0 0 1 1 1 1 0 0 0 1-1v-5.831a2.978 2.978 0 0 0-.879-2.121l-7.585-7.586a5.008 5.008 0 0 0-7.072 0L.879 9.048A2.978 2.978 0 0 0 0 11.169V17a1 1 0 0 0 1 1 1 1 0 0 0 1-1Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 13.031a5 5 0 0 0-4.821 3.681A1.01 1.01 0 0 0 8.14 18a1.034 1.034 0 0 0 .977-.79 3 3 0 0 1 5.766 0 1.034 1.034 0 0 0 .977.79 1.01 1.01 0 0 0 .961-1.288A5 5 0 0 0 12 13.031Z"
  }));
});
HouseFlood.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
HouseFlood.displayName = 'HouseFlood';
export default HouseFlood;
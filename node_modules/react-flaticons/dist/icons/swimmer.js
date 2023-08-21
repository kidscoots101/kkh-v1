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
var Swimmer = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M2 2a1 1 0 0 1 1-1h4.916a5 5 0 0 1 4.1 2.136l5.114 7.317a1 1 0 1 1-1.641 1.147l-3.473-4.97-8.423 6.177a1 1 0 0 1-1.184-1.614l8.461-6.2-.495-.707A3 3 0 0 0 7.916 3H3a1 1 0 0 1-1-1Zm20.333 18.49A1.991 1.991 0 0 1 21 21a2.248 2.248 0 0 1-2.057-1.333 1 1 0 0 0-1.885 0 2.254 2.254 0 0 1-4.115 0 1 1 0 0 0-1.885 0 2.254 2.254 0 0 1-4.115 0 1 1 0 0 0-1.885 0A2.25 2.25 0 0 1 3 21a2 2 0 0 1-1.333-.511 1 1 0 0 0-1.335 1.489A4 4 0 0 0 3 23a4.379 4.379 0 0 0 3-1.225 4.286 4.286 0 0 0 6 0 4.286 4.286 0 0 0 6 0A4.375 4.375 0 0 0 21 23a3.981 3.981 0 0 0 2.668-1.023 1 1 0 1 0-1.336-1.487ZM3 18a4.379 4.379 0 0 0 3-1.225 4.286 4.286 0 0 0 6 0 4.286 4.286 0 0 0 6 0A4.375 4.375 0 0 0 21 18a3.981 3.981 0 0 0 2.668-1.023 1 1 0 1 0-1.336-1.487A1.991 1.991 0 0 1 21 16a2.248 2.248 0 0 1-2.057-1.333 1 1 0 0 0-1.885 0 2.254 2.254 0 0 1-4.115 0 1 1 0 0 0-1.885 0 2.254 2.254 0 0 1-4.115 0 1 1 0 0 0-1.885 0A2.25 2.25 0 0 1 3 16a2 2 0 0 1-1.333-.511 1 1 0 0 0-1.335 1.489A4 4 0 0 0 3 18ZM18.5 8A2.5 2.5 0 1 0 16 5.5 2.5 2.5 0 0 0 18.5 8Z"
  }));
});
Swimmer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Swimmer.displayName = 'Swimmer';
export default Swimmer;
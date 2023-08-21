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
var Sunrise = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M0 12a1 1 0 0 1 1-1h4.079a6.819 6.819 0 0 1 .434-1.6L1.982 7.349a1 1 0 1 1 1-1.731l3.535 2.048a7.083 7.083 0 0 1 1.151-1.145l-2.05-3.537a1 1 0 0 1 1.731-1L9.4 5.513A6.9 6.9 0 0 1 11 5.08V1a1 1 0 0 1 2 0v4.08a6.9 6.9 0 0 1 1.6.433l2.047-3.532a1 1 0 0 1 1.731 1l-2.05 3.536a7.164 7.164 0 0 1 1.152 1.144l3.531-2.047a1 1 0 0 1 1 1.731L18.49 9.394a6.947 6.947 0 0 1 .441 1.614L23 11a1 1 0 0 1 0 2h-4.078a2 2 0 0 1-1.972-1.711 5.009 5.009 0 0 0-9.9 0A2 2 0 0 1 5.079 13H1a1 1 0 0 1-1-1Zm23.744 4.565a1 1 0 0 0-1.412-.076 2.214 2.214 0 0 1-3.4-.817.978.978 0 0 0-.6-.614 1 1 0 0 0-1.275.609 2.287 2.287 0 0 1-4.129.005.982.982 0 0 0-.6-.615 1 1 0 0 0-1.276.61 2.287 2.287 0 0 1-4.128.005.982.982 0 0 0-.6-.615 1 1 0 0 0-1.276.61 2.2 2.2 0 0 1-3.389.822 1 1 0 0 0-1.327 1.489A4.174 4.174 0 0 0 6 17.765a4.313 4.313 0 0 0 6 0 4.312 4.312 0 0 0 6 0 4.174 4.174 0 0 0 5.668.214 1 1 0 0 0 .076-1.414Zm0 5a1 1 0 0 0-1.412-.076 2.214 2.214 0 0 1-3.4-.817.978.978 0 0 0-.6-.614 1 1 0 0 0-1.275.609 2.287 2.287 0 0 1-4.129 0 .982.982 0 0 0-.6-.615 1 1 0 0 0-1.276.61 2.287 2.287 0 0 1-4.128 0 .982.982 0 0 0-.6-.615 1 1 0 0 0-1.276.61 2.2 2.2 0 0 1-3.389.822 1 1 0 0 0-1.327 1.499A4.174 4.174 0 0 0 6 22.765a4.313 4.313 0 0 0 6 0 4.312 4.312 0 0 0 6 0 4.174 4.174 0 0 0 5.668.214 1 1 0 0 0 .076-1.414Z"
  }));
});
Sunrise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Sunrise.displayName = 'Sunrise';
export default Sunrise;
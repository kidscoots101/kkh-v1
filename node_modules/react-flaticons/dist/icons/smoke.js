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
var Smoke = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M16 24a5.017 5.017 0 0 1-2.336-.578 6.271 6.271 0 0 1-5.536-.152.586.586 0 0 0-.571.027 5.028 5.028 0 0 1-7.423-5.468 4.947 4.947 0 0 1 3.677-3.69 5.07 5.07 0 0 1 2.375 0 .276.276 0 0 0 .282-.074 6.034 6.034 0 0 1 8.8-.288c.065.067.217.22.734.22a4.984 4.984 0 0 1 3.9 1.874.4.4 0 0 0 .193.149 3.62 3.62 0 0 1 1.437.128 3.445 3.445 0 0 1 2.349 2.435 3.5 3.5 0 0 1-4.343 4.279c-.275-.077-.331-.03-.356-.01A4.929 4.929 0 0 1 16 24Zm-2.386-2.591a2.1 2.1 0 0 1 .988.246 3.045 3.045 0 0 0 3.291-.328 2.274 2.274 0 0 1 2.193-.386 1.5 1.5 0 0 0 1.86-1.856 1.457 1.457 0 0 0-.979-1.015 1.647 1.647 0 0 0-.643-.059 2.231 2.231 0 0 1-1.982-.885c-1.041-1.6-3.364-.661-4.5-1.939a4.023 4.023 0 0 0-5.865.194 2.272 2.272 0 0 1-2.265.705 3.139 3.139 0 0 0-1.449 0 3 3 0 0 0-1.613 4.781 3.069 3.069 0 0 0 3.882.712 2.582 2.582 0 0 1 2.554-.064 4.055 4.055 0 0 0 3.639.094 2.061 2.061 0 0 1 .889-.2ZM22.875 15a1.033 1.033 0 0 1-.251-.031 1 1 0 0 1-.718-1.219 3.073 3.073 0 0 0 .039-1.338 3.021 3.021 0 0 0-1.919-2.224 2.885 2.885 0 0 0-1.808-.077 2.041 2.041 0 0 1-2.153-.657 3.99 3.99 0 0 0-6.522.567 2.034 2.034 0 0 1-2.176 1.016 1.843 1.843 0 0 0-.887.037 2.066 2.066 0 0 0-1.368 1.267 1 1 0 0 1-1.881-.682 4.05 4.05 0 0 1 2.707-2.511 3.864 3.864 0 0 1 1.828-.07 6.012 6.012 0 0 1 9.842-.895 5.007 5.007 0 0 1 6.234 6.067 1 1 0 0 1-.967.75ZM1.337 10a1 1 0 0 1-.9-.57 4.491 4.491 0 0 1 2.629-6.189 4.346 4.346 0 0 1 2.474-.113c-.01 0 .026-.03.052-.083a5.51 5.51 0 0 1 9.35-.767 4.572 4.572 0 0 1 5.131 1.5c.187.239.294.251.4.264.031 0 .132.019.163.025a3.007 3.007 0 0 1 1.974 1.45 1 1 0 0 1-1.738.99 1 1 0 0 0-.657-.485A2.431 2.431 0 0 1 18.5 5.011a2.543 2.543 0 0 0-2.884-.848 1.92 1.92 0 0 1-2.263-.672 3.5 3.5 0 0 0-5.969.447 2.056 2.056 0 0 1-2.326 1.131 2.35 2.35 0 0 0-1.351.067A2.489 2.489 0 0 0 2.24 8.57a1 1 0 0 1-.9 1.43Z"
  }));
});
Smoke.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Smoke.displayName = 'Smoke';
export default Smoke;
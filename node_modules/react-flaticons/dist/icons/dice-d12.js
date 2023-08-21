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
var DiceD12 = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "m23.287 7.535-1.915-3.192a5.026 5.026 0 0 0-1.715-1.715L16.465.713A5 5 0 0 0 13.892 0h-3.784a5 5 0 0 0-2.573.713L4.343 2.628a5.026 5.026 0 0 0-1.715 1.715L.713 7.535A5 5 0 0 0 0 10.108v3.784a5 5 0 0 0 .713 2.573l1.915 3.192a5.026 5.026 0 0 0 1.715 1.715l3.192 1.915a5 5 0 0 0 2.573.713h3.784a5 5 0 0 0 2.573-.713l3.192-1.915a5.026 5.026 0 0 0 1.715-1.715l1.915-3.192A5 5 0 0 0 24 13.892v-3.784a5 5 0 0 0-.713-2.573Zm-1.715 1.029a3.2 3.2 0 0 1 .186.364l-4.02 4.823L13 11.382v-4.6l6.511-1.629c.052.071.1.145.146.22ZM8.564 2.428A3 3 0 0 1 10.108 2h3.784a3 3 0 0 1 1.544.428l1.98 1.188L12 4.97 6.584 3.616ZM4.343 5.372a2.89 2.89 0 0 1 .146-.22L11 6.78v4.6l-4.738 2.371-4.02-4.823a3.2 3.2 0 0 1 .186-.364Zm0 13.256-1.915-3.192A3 3 0 0 1 2 13.892v-2.129l3.123 3.748 1.934 5.157-1.685-1.011a3.016 3.016 0 0 1-1.029-1.029Zm5.339 3.341-2.429-6.477L12 13.118l4.748 2.374-2.43 6.477c-.141.02-4.495.02-4.636 0Zm11.89-6.533-1.915 3.192a3.016 3.016 0 0 1-1.029 1.029l-1.685 1.011 1.934-5.157L22 11.763v2.129a3 3 0 0 1-.428 1.544Z"
  }));
});
DiceD12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
DiceD12.displayName = 'DiceD12';
export default DiceD12;
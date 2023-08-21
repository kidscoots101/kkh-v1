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
var CloudSun = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M13.892 24c-1.96 0-3.837-.008-4.491-.026a3.749 3.749 0 0 1-.834-.121 3.5 3.5 0 0 1-.449-6.588 6.366 6.366 0 0 1 .057-2.732 6 6 0 0 1 11.368-.855c.136.326.286.36.587.427l.176.042a5.014 5.014 0 0 1 3.559 6 4.951 4.951 0 0 1-3.7 3.7 5.283 5.283 0 0 1-1.064.131c-.872.012-3.088.022-5.209.022Zm.09-12.023a4.045 4.045 0 0 0-.589.043 3.994 3.994 0 0 0-3.306 4.78 2.017 2.017 0 0 1-1.18 2.3 1.494 1.494 0 0 0-.851 1.8 1.473 1.473 0 0 0 1.02 1.019 1.673 1.673 0 0 0 .382.057c1.342.036 7.945.03 9.6 0a3.234 3.234 0 0 0 .657-.081 2.977 2.977 0 0 0 2.2-2.193 3.023 3.023 0 0 0-2.132-3.622l-.092-.021a2.582 2.582 0 0 1-2-1.611 4.013 4.013 0 0 0-3.709-2.471ZM2.28 16.894a1 1 0 0 1-.512-1.86l2.709-1.612a.5.5 0 0 0 .3-.54 6.425 6.425 0 0 1-.2-.882H1a1 1 0 0 1 0-2h3.575a6.206 6.206 0 0 1 .387-1.4L1.884 6.8a1 1 0 1 1 1.01-1.725l3.1 1.814a6.718 6.718 0 0 1 .951-.934L5.11 2.854a1 1 0 0 1 1.721-1.02l1.843 3.109A6.5 6.5 0 0 1 10 4.58V1a1 1 0 0 1 2 0v3.577a6.137 6.137 0 0 1 1.384.386l1.823-3.115a1 1 0 0 1 1.727 1.011l-1.843 3.146c.427.274.717 1 1.27.717L19 4.972a1 1 0 1 1 1.1 1.668l-2.684 1.78a2.511 2.511 0 0 1-3.147-.442A4.7 4.7 0 0 0 10.986 6.5 4.692 4.692 0 0 0 6.5 11.023a4.115 4.115 0 0 0 .191 1.277 2.462 2.462 0 0 1-1.231 2.863l-2.669 1.59a1 1 0 0 1-.511.141Z"
  }));
});
CloudSun.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CloudSun.displayName = 'CloudSun';
export default CloudSun;
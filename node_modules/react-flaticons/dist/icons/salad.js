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
var Salad = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M23.194 11.6a3.942 3.942 0 0 0-2.143-1.447 21.606 21.606 0 0 0 .922-3.731 3.008 3.008 0 0 0-3.4-3.392c-.126.017-.5.072-1.011.171A4.979 4.979 0 0 0 18 .968a1 1 0 1 0-2 .064 3.021 3.021 0 0 1-.289 1.4 3.894 3.894 0 0 0-.611-1.08A4.006 4.006 0 0 0 11.5.034 3.8 3.8 0 0 0 9.5.8 3.939 3.939 0 0 0 7.233.01a3.949 3.949 0 0 0-2.885.877A4.028 4.028 0 0 0 3 3.782a4.1 4.1 0 0 0 .73 2.466 4.951 4.951 0 0 0-1.7 4.288A3.967 3.967 0 0 0 .164 15.15a14.749 14.749 0 0 0 3.707 6.316A8.922 8.922 0 0 0 10.139 24h3.722a8.918 8.918 0 0 0 6.267-2.534 14.741 14.741 0 0 0 3.708-6.316 4 4 0 0 0-.642-3.55Zm-4.343-6.59a1.013 1.013 0 0 1 1.139 1.142A20.024 20.024 0 0 1 18.975 10h-2.561l1.293-1.293a1 1 0 0 0-1.414-1.414L13.586 10h-1.549a3.428 3.428 0 0 1 .976-2.9c.427-.431 2.064-1.6 5.838-2.09ZM5 3.849a2.026 2.026 0 0 1 .665-1.457A2.035 2.035 0 0 1 7.1 2.006a1.748 1.748 0 0 1 1.328.531 1.438 1.438 0 0 0 1.072.479 1.44 1.44 0 0 0 1.068-.482 1.64 1.64 0 0 1 1.156-.513 2.031 2.031 0 0 1 1.828.6A2.118 2.118 0 0 1 14 3.985v.207a6.446 6.446 0 0 0-3.228 2.563 4.916 4.916 0 0 0-5.284-1.5A2.064 2.064 0 0 1 5 3.849ZM4 10a3 3 0 0 1 6 0H4Zm17.916 4.589a12.919 12.919 0 0 1-3.2 5.46A6.9 6.9 0 0 1 13.861 22h-3.722a6.909 6.909 0 0 1-4.857-1.951 12.917 12.917 0 0 1-3.2-5.46 2.019 2.019 0 0 1 .324-1.789A1.978 1.978 0 0 1 4 12h16a1.978 1.978 0 0 1 1.6.8 2.019 2.019 0 0 1 .316 1.789Z"
  }));
});
Salad.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Salad.displayName = 'Salad';
export default Salad;
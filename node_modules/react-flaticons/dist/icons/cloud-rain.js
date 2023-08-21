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
var CloudRain = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M16 24a2.978 2.978 0 0 1-2.121-.879c-1.942-1.813-.137-4.486 1-5.639a1.557 1.557 0 0 1 2.208-.041C17.561 17.953 19 19.613 19 21a3.015 3.015 0 0 1-3 3Zm0-4.759c-.73 1.054-1.39 1.669-.706 2.466A1.01 1.01 0 0 0 17 21a4.473 4.473 0 0 0-1-1.759ZM8 24a2.98 2.98 0 0 1-2.122-.879c-1.941-1.812-.136-4.486 1-5.639a1.573 1.573 0 0 1 2.208-.04c1.171 1.169 2.987 3.847 1.037 5.679A2.983 2.983 0 0 1 8 24Zm0-4.759A4.6 4.6 0 0 0 7 21a1.01 1.01 0 0 0 1.707.707c.693-.792.001-1.461-.707-2.466Zm-5 0a.99.99 0 0 1-.555-.169A5.535 5.535 0 0 1 1.8 10.43a1 1 0 0 0 .345-.9 8.147 8.147 0 0 1-.033-2.889A7.946 7.946 0 0 1 8.5.137a8.056 8.056 0 0 1 8.734 4.44 1.04 1.04 0 0 0 .743.569c5.824 1.035 8.091 8.769 3.718 12.766a1 1 0 1 1-1.384-1.444 5.538 5.538 0 0 0-2.725-9.362 3.011 3.011 0 0 1-2.158-1.672A6 6 0 0 0 4.086 6.967a6.142 6.142 0 0 0 .024 2.181 3.005 3.005 0 0 1-.964 2.762 3.523 3.523 0 0 0 .41 5.5A1 1 0 0 1 3 19.242ZM12 17a2.978 2.978 0 0 1-2.121-.879c-1.942-1.812-.137-4.486 1-5.639a1.573 1.573 0 0 1 2.209-.04C13.561 10.953 15 12.613 15 14a3.014 3.014 0 0 1-3 3Zm0-4.759c-.732 1.054-1.39 1.669-.708 2.466A1.01 1.01 0 0 0 13 14a4.487 4.487 0 0 0-1-1.759Z"
  }));
});
CloudRain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CloudRain.displayName = 'CloudRain';
export default CloudRain;
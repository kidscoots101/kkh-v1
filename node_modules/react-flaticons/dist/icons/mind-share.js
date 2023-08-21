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
var MindShare = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M23.27 16.245c.469.469.714 1.143.73 1.755-.015.612-.257 1.282-.723 1.747l-2.578 2.522a.997.997 0 0 1-1.414-.016 1 1 0 0 1 .016-1.414l1.881-1.84h-2.181c-1.654 0-3 1.346-3 3v1a1 1 0 1 1-2 0v-1c0-2.757 2.243-5 5-5h2.181l-1.881-1.84a1 1 0 0 1 1.398-1.43l2.57 2.515ZM15 2c-1.103 0-2 .897-2 2v14.5c0 3.032-2.468 5.5-5.5 5.5a5.464 5.464 0 0 1-5.233-3.835A4.978 4.978 0 0 1 0 16c0-.886.235-1.737.686-2.5A4.89 4.89 0 0 1 0 11c0-1.568.752-3.04 2-3.979V7a4.007 4.007 0 0 1 3.102-3.898A4.008 4.008 0 0 1 9 0c1.194 0 2.267.526 3 1.357A3.989 3.989 0 0 1 15 0a4.007 4.007 0 0 1 3.898 3.102A4.008 4.008 0 0 1 22 7v.021A4.99 4.99 0 0 1 24 11c0 .425-.056.848-.165 1.257a1 1 0 1 1-1.932-.515c.064-.242.097-.492.097-.743 0-1.07-.591-2.067-1.543-2.603a.999.999 0 0 1-.494-1.045c.02-.115.037-.231.037-.352 0-1.103-.897-2-2-2a1 1 0 0 1-1-1c0-1.103-.897-2-2-2Zm-4 2c0-1.103-.897-2-2-2s-2 .897-2 2a1 1 0 0 1-1 1c-1.103 0-2 .897-2 2 0 .121.018.237.037.352a.999.999 0 0 1-.494 1.045A3 3 0 0 0 2 11c0 .675.234 1.322.679 1.872a1 1 0 0 1 0 1.257A2.955 2.955 0 0 0 2 16c0 1.096.611 2.104 1.597 2.631.254.137.437.376.502.657A3.478 3.478 0 0 0 7.5 22c1.93 0 3.5-1.57 3.5-3.5V4Z"
  }));
});
MindShare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
MindShare.displayName = 'MindShare';
export default MindShare;
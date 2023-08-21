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
var BrainCircuit = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M24 11c0-1.568-.752-3.04-2-3.979V7a4.007 4.007 0 0 0-3.102-3.898A4.008 4.008 0 0 0 15 0a3.992 3.992 0 0 0-3 1.357A3.989 3.989 0 0 0 9 0a4.007 4.007 0 0 0-3.898 3.102A4.008 4.008 0 0 0 2 7v.021A4.99 4.99 0 0 0 0 11c0 .886.235 1.737.686 2.5A4.89 4.89 0 0 0 0 16c0 1.686.858 3.244 2.267 4.166A5.466 5.466 0 0 0 7.5 24a5.495 5.495 0 0 0 4.5-2.342A5.498 5.498 0 0 0 16.5 24a5.465 5.465 0 0 0 5.233-3.834A4.981 4.981 0 0 0 24 16a4.88 4.88 0 0 0-.686-2.5A4.89 4.89 0 0 0 24 11ZM7.5 22a3.477 3.477 0 0 1-3.401-2.712 1 1 0 0 0-.502-.656A2.992 2.992 0 0 1 2 16.001c0-.675.234-1.322.679-1.872a1 1 0 0 0 0-1.257A2.955 2.955 0 0 1 2 11c0-1.07.591-2.067 1.543-2.603a.999.999 0 0 0 .494-1.045A2.039 2.039 0 0 1 4 7c0-1.103.897-2 2-2a1 1 0 0 0 1-1c0-1.103.897-2 2-2s2 .897 2 2v4H8.732A1.999 1.999 0 0 0 5 9a2 2 0 0 0 3.732 1H11v5H8.732A1.999 1.999 0 0 0 5 16a2 2 0 0 0 3.732 1H11v1.5c0 1.93-1.57 3.5-3.5 3.5Zm13.821-7.872c.444.549.679 1.196.679 1.872a2.988 2.988 0 0 1-1.597 2.631 1 1 0 0 0-.502.656 3.478 3.478 0 0 1-3.401 2.712c-1.93 0-3.5-1.57-3.5-3.5v-4.5h2c1.654 0 3-1.346 3-3v-.268a1.999 1.999 0 0 0-1-3.732 2 2 0 0 0-1 3.732v.268c0 .551-.448 1-1 1h-2V4c0-1.103.897-2 2-2s2 .897 2 2a1 1 0 0 0 1 1c1.103 0 2 .897 2 2 0 .121-.018.237-.037.352a.999.999 0 0 0 .494 1.045A3 3 0 0 1 22 11c0 .675-.234 1.322-.679 1.872a1 1 0 0 0 0 1.257Z"
  }));
});
BrainCircuit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
BrainCircuit.displayName = 'BrainCircuit';
export default BrainCircuit;
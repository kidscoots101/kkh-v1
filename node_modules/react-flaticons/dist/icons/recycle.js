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
var Recycle = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "m10.357 2.921-1.416 2.3a1 1 0 0 1-1.7-1.048l1.416-2.3a3.948 3.948 0 0 1 6.692 0l4.2 6.834.441-2.365a1 1 0 0 1 1.967.366l-.5 2.67a3 3 0 0 1-2.942 2.451c-.195 0-3.217-.576-3.217-.576a1 1 0 0 1 .386-1.962l2.133.421-4.174-6.791a1.934 1.934 0 0 0-3.286 0ZM23.409 14.98l-.968-1.572a1 1 0 1 0-1.7 1.048l.968 1.572a1.934 1.934 0 0 1 .041 1.98 1.91 1.91 0 0 1-1.688.992h-7.386l1.271-1.269a1 1 0 0 0-1.412-1.416L10.843 18A2.86 2.86 0 0 0 10 19.98s0 .01 0 .014v.02a2.884 2.884 0 0 0 .855 2.071l1.682 1.652a1 1 0 1 0 1.4-1.427L12.609 21h7.453a3.948 3.948 0 0 0 3.347-6.02ZM6.78 7.213a2.984 2.984 0 0 0-2.263-.46l-2.629.518a1 1 0 1 0 .386 1.962l2.108-.415L.591 14.98A3.948 3.948 0 0 0 3.937 21H7.08a1 1 0 0 0 0-2H3.937a1.91 1.91 0 0 1-1.684-.992 1.934 1.934 0 0 1 .041-1.98L6.132 9.79l.446 2.394a1 1 0 0 0 1.967-.368l-.5-2.67A2.985 2.985 0 0 0 6.78 7.213Z"
  }));
});
Recycle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Recycle.displayName = 'Recycle';
export default Recycle;
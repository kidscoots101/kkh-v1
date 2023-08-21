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
var FlagUsa = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M22.827 1.62a2.956 2.956 0 0 0-2.575-.521c-.356.095-.736.23-1.131.374-.715.259-1.454.526-2.121.526-1.36 0-3.071-.489-4.725-.962C10.488.527 8.64-.001 7-.001 4.945 0 2.937.813 1.614 1.496A2.98 2.98 0 0 0-.002 4.158V23a1 1 0 1 0 2 0v-7.437C2.89 15.053 4.979 14 7 14c1.36 0 3.071.489 4.725.962C13.512 15.472 15.36 16 17 16c1.803 0 3.712-.437 5.108-1.167 1.203-.63 1.892-1.644 1.892-2.78V4.004c0-.941-.428-1.811-1.173-2.384ZM11 6.756l.726.206C13.513 7.473 15.36 8 17 8c1.894 0 3.755-.633 5-1.174v1.79c-.918.465-2.988 1.385-5 1.385-1.36 0-3.071-.489-4.725-.962-.423-.121-.849-.242-1.275-.358V6.756ZM17 4c1.018 0 1.966-.343 2.802-.646.336-.122.659-.24.962-.32a.969.969 0 0 1 .843.172c.25.191.393.483.393.799v.611c-.918.465-2.988 1.385-5 1.385-1.36 0-3.07-.488-4.725-.961A84.833 84.833 0 0 0 11 4.682V2.757l.725.206c1.787.51 3.635 1.038 5.275 1.038ZM2.531 3.273C3.453 2.797 5.26 2 7 2c.609 0 1.287.098 2 .249v5.96A11.037 11.037 0 0 0 7 8c-1.893 0-3.75.699-5.002 1.303V4.158a.99.99 0 0 1 .533-.885Zm18.649 9.789C20.058 13.65 18.495 14 17 14c-1.36 0-3.071-.489-4.725-.962C10.488 12.528 8.64 12 7 12c-1.893 0-3.75.699-5.002 1.304v-1.74C2.89 11.054 4.979 10 7 10c1.36 0 3.071.489 4.725.962C13.512 11.472 15.36 12 17 12c1.894 0 3.755-.633 5-1.174v1.227c0 .479-.446.812-.82 1.009Z"
  }));
});
FlagUsa.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
FlagUsa.displayName = 'FlagUsa';
export default FlagUsa;
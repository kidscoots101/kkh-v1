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
var PiggyBank = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M18 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 5a1 1 0 0 0 1-1c0-1.103.897-2 2-2s2 .897 2 2a1 1 0 1 0 2 0c0-2.206-1.794-4-4-4S6 1.794 6 4a1 1 0 0 0 1 1Zm17 8v2c0 1.106-.748 1.779-1.568 1.954A8.021 8.021 0 0 1 19 20.908V21c0 1.654-1.346 3-3 3a3.006 3.006 0 0 1-2.829-2h-2.343a3.006 3.006 0 0 1-2.829 2c-1.654 0-3-1.346-3-3v-.079a7.967 7.967 0 0 1-3.983-7.451c.063-.978.31-1.907.705-2.756A3.004 3.004 0 0 1-.002 8c0-1.654 1.346-3 3-3a1 1 0 1 1 0 2 1 1 0 0 0-.177 1.984A8.38 8.38 0 0 1 9.264 6h5.363c.733-1.478 2.102-2.512 3.927-2.946a1.97 1.97 0 0 1 1.681.374 2 2 0 0 1 .764 1.576v3.715a8.055 8.055 0 0 1 1.432 2.327c.821.175 1.568.848 1.568 1.954Zm-2 0h-.294a1 1 0 0 1-.958-.715 6.038 6.038 0 0 0-1.463-2.477A.999.999 0 0 1 19 9.11V5.004c-.975.232-2.265.83-2.764 2.335-.141.423-.553.714-.99.684-.068-.003-5.98-.022-5.98-.022-3.303 0-6.05 2.459-6.253 5.599a5.98 5.98 0 0 0 3.417 5.815 1 1 0 0 1 .57.903v.683c0 .552.449 1 1 1s1-.448 1-1 .448-1 1-1h4c.552 0 1 .447 1 1a1 1 0 0 0 2 0v-.694a1 1 0 0 1 .569-.902 6.01 6.01 0 0 0 3.179-3.688 1 1 0 0 1 .958-.715H22v-2Z"
  }));
});
PiggyBank.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
PiggyBank.displayName = 'PiggyBank';
export default PiggyBank;
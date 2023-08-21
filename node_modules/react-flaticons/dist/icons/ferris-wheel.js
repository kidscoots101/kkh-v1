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
var FerrisWheel = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M24 11a3 3 0 0 0-2.841-2.984 9.918 9.918 0 0 0-5.175-5.175A3 3 0 0 0 13 0h-2a3 3 0 0 0-2.984 2.841 9.921 9.921 0 0 0-5.175 5.175 2.985 2.985 0 0 0-.659 5.856 9.964 9.964 0 0 0 5.332 7.069l-.48 1.8a1 1 0 0 0 .708 1.224A1.011 1.011 0 0 0 8 24a1 1 0 0 0 .966-.742l.434-1.606a9.928 9.928 0 0 0 5.211 0l.428 1.606a1 1 0 0 0 1.932-.516l-.48-1.8a9.974 9.974 0 0 0 5.333-7.07A2.994 2.994 0 0 0 24 11ZM11 2h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Zm-8 8h2a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm9 10a8.021 8.021 0 0 1-2.09-.28l1.7-6.364a.407.407 0 0 1 .787 0l1.7 6.364A8.034 8.034 0 0 1 12 20Zm3.955-1.049-1.63-6.11A2.38 2.38 0 0 0 12 11.054a2.38 2.38 0 0 0-2.326 1.787l-1.629 6.11A7.962 7.962 0 0 1 4.26 14H5a3 3 0 0 0 .081-5.992 8.1 8.1 0 0 1 3.507-3.241A2.989 2.989 0 0 0 11 6h2a2.988 2.988 0 0 0 2.412-1.233 8.094 8.094 0 0 1 3.506 3.241A3 3 0 0 0 19 14h.74a7.968 7.968 0 0 1-3.785 4.951ZM21 12h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"
  }));
});
FerrisWheel.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
FerrisWheel.displayName = 'FerrisWheel';
export default FerrisWheel;
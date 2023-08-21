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
var PencilRuler = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M24 18.586a3.973 3.973 0 0 1-1.172 2.828l-1.414 1.414c-.755.756-1.76 1.172-2.828 1.172s-2.073-.416-2.829-1.172l-2.69-2.69a.999.999 0 1 1 1.414-1.414l2.69 2.69c.756.756 2.073.756 2.829 0L21.414 20c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.931-1.932-1.415 1.414a.999.999 0 1 1-1.414-1.414l2.122-2.121a.999.999 0 0 1 1.414 0l2.638 2.639A3.97 3.97 0 0 1 24 18.586ZM3.862 10.933a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-2.69-2.69C2.208 6.451 2 5.949 2 5.415s.208-1.036.586-1.414L4 2.587c.756-.756 2.073-.756 2.829 0l1.932 1.932-1.415 1.414A.999.999 0 1 0 8.76 7.347l2.122-2.121a.997.997 0 0 0 0-1.414L8.243 1.173C6.732-.34 4.097-.34 2.586 1.172L1.172 2.586C.416 3.342 0 4.346 0 5.414s.416 2.073 1.172 2.828l2.69 2.69Zm19.063-4.664L6.95 22.242A5.954 5.954 0 0 1 2.708 24H1a1 1 0 0 1-1-1v-1.708c0-1.603.624-3.109 1.757-4.242L17.731 1.075a3.676 3.676 0 0 1 5.193 0 3.677 3.677 0 0 1 0 5.193Zm-5.2 2.371L15.36 6.275 3.171 18.464A3.976 3.976 0 0 0 2 21.292V22h.708a3.97 3.97 0 0 0 2.828-1.172l12.19-12.189Zm3.785-6.15a1.675 1.675 0 0 0-2.365 0l-2.371 2.371 2.365 2.365 2.371-2.371a1.676 1.676 0 0 0 0-2.365Z"
  }));
});
PencilRuler.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
PencilRuler.displayName = 'PencilRuler';
export default PencilRuler;
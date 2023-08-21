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
var LinkSlashAlt = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M11.953 17.993a6.232 6.232 0 0 1-4.121-1.823 6.478 6.478 0 0 1-.641-.748 1 1 0 0 1 1.617-1.178 4.234 4.234 0 0 0 3.239 1.751 1 1 0 0 1-.046 1.999h-.048ZM1.831 13.331A6.206 6.206 0 0 0 0 17.75c0 1.669.65 3.239 1.831 4.419C3.011 23.35 4.58 24 6.25 24s3.239-.65 4.419-1.831l1.058-1.058a.999.999 0 1 0-1.414-1.414l-1.058 1.058C8.452 21.558 7.385 22 6.25 22s-2.202-.442-3.005-1.245S2 18.885 2 17.75s.442-2.203 1.245-3.005l3.037-3.038a.999.999 0 1 0-1.414-1.414l-3.037 3.038ZM.293 1.707l22 22a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-6.581-6.581 5.043-5.043A6.206 6.206 0 0 0 24 6.25c0-1.669-.65-3.239-1.831-4.419C20.989.65 19.42 0 17.75 0s-3.239.65-4.419 1.831l-1.058 1.058a.999.999 0 1 0 1.414 1.414l1.058-1.058C15.548 2.442 16.615 2 17.75 2s2.202.442 3.005 1.245S22 5.115 22 6.25s-.442 2.203-1.245 3.005l-5.043 5.043L9.86 8.446a4.222 4.222 0 0 1 4.894.798c.162.162.308.333.437.511a1 1 0 0 0 1.398.219 1 1 0 0 0 .22-1.397 6.288 6.288 0 0 0-.641-.748c-2.095-2.095-5.297-2.408-7.76-.835L1.707.293A.999.999 0 1 0 .293 1.707Z"
  }));
});
LinkSlashAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
LinkSlashAlt.displayName = 'LinkSlashAlt';
export default LinkSlashAlt;
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
var CloudsSun = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M2.778 15.513a1.284 1.284 0 0 0-.729 1.543 1 1 0 0 1-.712 1.222 1.022 1.022 0 0 1-.256.033 1 1 0 0 1-.966-.745 3.285 3.285 0 0 1 1.874-3.891 5.312 5.312 0 0 1 .039-2.441 5.534 5.534 0 0 1 7.606-3.769 1 1 0 0 1-.8 1.832A3.6 3.6 0 0 0 6.86 9.04a3.58 3.58 0 0 0-2.917 4.269 1.964 1.964 0 0 1-1.165 2.204Zm17.1 4.9a4.618 4.618 0 0 1-3.453 3.445 4.948 4.948 0 0 1-.992.123c-1.381.027-7.8.036-9.236 0a3.458 3.458 0 0 1-.781-.113 3.285 3.285 0 0 1-.424-6.188 5.312 5.312 0 0 1 .039-2.441 5.548 5.548 0 0 1 10.524-.794c.078.187.407.263.737.323.108.02.2.038.268.056a4.671 4.671 0 0 1 3.315 5.585Zm-3.834-3.657a2.95 2.95 0 0 1-2.336-1.543A3.593 3.593 0 0 0 9.86 13.04a3.58 3.58 0 0 0-2.917 4.269 1.964 1.964 0 0 1-1.165 2.2 1.284 1.284 0 0 0-.729 1.543 1.259 1.259 0 0 0 .872.873 1.5 1.5 0 0 0 .328.048c1.213.033 7.671.028 9.144 0a2.889 2.889 0 0 0 .584-.073 2.637 2.637 0 0 0 1.949-1.943 2.679 2.679 0 0 0-1.885-3.205ZM23 9h-2.581a3.955 3.955 0 0 0-.048-.31 6.1 6.1 0 0 0-.324-1.09l2.225-1.313a1 1 0 1 0-1.017-1.722l-2.24 1.323a6.679 6.679 0 0 0-.943-.914l1.3-2.262a1 1 0 1 0-1.732-1l-1.3 2.258A6.737 6.737 0 0 0 15 3.6V1a1 1 0 0 0-2 0v2.564l-.048.007a5.263 5.263 0 0 0-1.257.338l-1.415-2.2A1 1 0 0 0 8.6 2.786l1.527 2.378a1.749 1.749 0 0 0 2.21.648 3.161 3.161 0 0 1 .905-.261 4.594 4.594 0 0 1 5.169 3.526 6.247 6.247 0 0 1-.293 2.681 1.894 1.894 0 0 0 .836 2.249l2.358 1.361a1 1 0 0 0 1-1.733l-2.274-1.312a8.686 8.686 0 0 0 .31-1.323H23a1 1 0 0 0 0-2Z"
  }));
});
CloudsSun.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
CloudsSun.displayName = 'CloudsSun';
export default CloudsSun;
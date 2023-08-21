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
var TireFlat = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M21.566 19.229c6-7.7.2-19.354-9.566-19.229C2.286-.176-3.583 11.59 2.441 19.235A2.51 2.51 0 0 0 3.5 24h17a2.513 2.513 0 0 0 1.066-4.771ZM20.5 22h-17a.5.5 0 1 1 .053-1 1.452 1.452 0 0 0 1.416-1c.162-.638-.224-1.1-.672-1.633C-1.1 12.017 3.669 1.9 12 2c8.357-.094 13.121 10.045 7.662 16.411-.409.487-.795.947-.631 1.583A1.474 1.474 0 0 0 20.5 21a.5.5 0 0 1 0 1ZM12 4a8.009 8.009 0 0 0-8 8c.376 10.588 15.626 10.585 16 0a8.009 8.009 0 0 0-8-8Zm-.834 9.086a4.192 4.192 0 0 0-.144-.813 4.246 4.246 0 0 0-.3-.764A3.594 3.594 0 0 0 12 10.653a3.614 3.614 0 0 0 .581.49 3.555 3.555 0 0 0 .7.366 4.192 4.192 0 0 0-.442 1.577 4.11 4.11 0 0 0-1.673 0Zm5.954-4.212-1.426.571-.5.2A1.6 1.6 0 0 1 13 8.163V6.084a6.016 6.016 0 0 1 4.12 2.79ZM11 6.084v2.079a1.6 1.6 0 0 1-2.19 1.483l-1.93-.772A6.016 6.016 0 0 1 11 6.084ZM6 12a6.031 6.031 0 0 1 .135-1.269l1.7.681a2.128 2.128 0 0 1 .917 3.249l-1.1 1.469A5.978 5.978 0 0 1 6 12Zm3.251 5.332L10.4 15.8a2.059 2.059 0 0 1 3.2 0l1.148 1.532a6.043 6.043 0 0 1-5.497 0Zm7.1-1.2-1.1-1.464a2.129 2.129 0 0 1 .914-3.255l1.7-.681a6.028 6.028 0 0 1-1.517 5.399Z"
  }));
});
TireFlat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
TireFlat.displayName = 'TireFlat';
export default TireFlat;
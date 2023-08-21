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
var Wheat = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M21.832 7.793c1.293-1.293 1.878-3.666 2.142-5.427A2.068 2.068 0 0 0 21.632.024c-1.984.331-4.7.912-5.865 2.712-2.167-3.775-4.828-.624-5.591 2.416-2.314-.645-3.331 2.018-4 4C3.718 8.322 2.094 12.29 2 14.5a7.625 7.625 0 0 0 1.649 4.437L.291 22.293a1 1 0 0 0 1.414 1.414l3.356-3.356A7.628 7.628 0 0 0 9.5 22c2.168-.079 6.251-1.764 5.371-4.181 1.925-.654 4.709-1.738 4-4 3.049-.794 6.211-3.416 2.388-5.589a3.067 3.067 0 0 0 .573-.437Zm-4.214-4.214A7.872 7.872 0 0 1 22 2.07c-.646 3.757-1.289 5.265-4.971 4.9-.094-1.259.022-2.823.589-3.391ZM13.492 3c1.129 1.215 2.137 3.849.955 5.144l-1.524 1.519A7.868 7.868 0 0 0 12 7.127 6.055 6.055 0 0 1 13.492 3Zm-4 4c1.128 1.215 2.136 3.848.954 5.144l-1.523 1.519A7.876 7.876 0 0 0 8 11.127 6.05 6.05 0 0 1 9.492 7Zm-4 4c1.127 1.214 2.136 3.848.955 5.143L5.08 17.505A4.947 4.947 0 0 1 5.491 11ZM9.5 20a5.482 5.482 0 0 1-3.005-1.081l1.365-1.365c1.3-1.184 3.929-.168 5.146.938A6.181 6.181 0 0 1 9.5 20Zm4-4c-.134 0-.553-.011-.631 0a7.866 7.866 0 0 0-2.532-.922l1.524-1.523c1.294-1.184 3.928-.167 5.145.938A6.181 6.181 0 0 1 13.5 16Zm4-4c-.134 0-.553-.01-.63 0a7.873 7.873 0 0 0-2.533-.923l1.524-1.523c1.294-1.183 3.928-.167 5.145.938A6.181 6.181 0 0 1 17.5 12Z"
  }));
});
Wheat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Wheat.displayName = 'Wheat';
export default Wheat;
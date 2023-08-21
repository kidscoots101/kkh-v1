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
var RulerTriangle = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M22.824 17.179 6.821 1.177C5.656.012 3.986-.322 2.467.311A3.93 3.93 0 0 0 0 4.002v14.991A5.013 5.013 0 0 0 5.007 24h14.991c1.646 0 3.061-.945 3.691-2.467s.298-3.189-.866-4.354Zm-.981 3.59A1.941 1.941 0 0 1 19.999 22H5.007A3.01 3.01 0 0 1 2 18.993V4.002c0-.835.46-1.524 1.232-1.844a1.945 1.945 0 0 1 2.175.433l1.611 1.611L5.11 6.11a.999.999 0 1 0 1.414 1.414l1.908-1.908 1.466 1.466L7.99 8.99a.999.999 0 1 0 1.414 1.414l1.908-1.908 1.415 1.414-1.908 1.908a.999.999 0 1 0 1.414 1.414l1.908-1.908 1.414 1.414-1.908 1.908a.999.999 0 1 0 1.414 1.414l1.908-1.908 1.414 1.414-1.908 1.908a.999.999 0 1 0 1.414 1.414l1.908-1.908 1.611 1.611c.59.591.752 1.404.433 2.176Zm-11.135-4.476A1 1 0 0 1 10.001 18h-3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1.707-.707l3 3Z"
  }));
});
RulerTriangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
RulerTriangle.displayName = 'RulerTriangle';
export default RulerTriangle;
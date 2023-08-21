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
var TreeChristmas = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "m20.44 16.855-1.481-2.221a2.214 2.214 0 0 0 .619-3.072l-2.091-3.135a2.234 2.234 0 0 0 .456-.58 2.21 2.21 0 0 0-.084-2.256 1.23 1.23 0 0 0-.081-.109L13.678.7a2.38 2.38 0 0 0-3.4.051L6.206 5.478a.912.912 0 0 0-.081.107 2.212 2.212 0 0 0 .38 2.853l-2.083 3.124a2.214 2.214 0 0 0 .619 3.072L3.56 16.855A3.309 3.309 0 0 0 6.312 22H11v1a1 1 0 0 0 2 0v-1h4.687a3.309 3.309 0 0 0 2.753-5.145Zm-1.6 2.454a1.292 1.292 0 0 1-1.153.691H6.312a1.309 1.309 0 0 1-1.088-2.035l2.276-3.41A1 1 0 0 0 6.666 13h-.405a.2.2 0 0 1-.186-.111.2.2 0 0 1 .011-.217l2.745-4.117a1 1 0 0 0 .04-1.027A1.017 1.017 0 0 0 7.979 7a.2.2 0 0 1-.186-.11.2.2 0 0 1-.011-.178l3.962-4.6a.327.327 0 0 1 .464-.052L16.2 6.713a.2.2 0 0 1-.011.178A.2.2 0 0 1 16 7a1 1 0 0 0-.832 1.555l2.745 4.117a.2.2 0 0 1 .011.217.2.2 0 0 1-.186.111h-.405a1 1 0 0 0-.832 1.555l2.274 3.41a1.289 1.289 0 0 1 .066 1.344Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "17",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "14",
    cy: "17",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "13",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "13",
    cy: "10",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "7",
    r: "1"
  }));
});
TreeChristmas.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
TreeChristmas.displayName = 'TreeChristmas';
export default TreeChristmas;
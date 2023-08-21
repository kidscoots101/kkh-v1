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
var ExpandArrows = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M22.978 9.022a1 1 0 0 0 1-1V3.978a4 4 0 0 0-4-4h-4a1 1 0 0 0 0 2h4a1.965 1.965 0 0 1 .545.085L12 10.586 3.478 2.064A1.981 1.981 0 0 1 3.955 2H8a1 1 0 0 0 0-2H3.955a4 4 0 0 0-4 4v4a1 1 0 0 0 2 0V4a1.978 1.978 0 0 1 .085-.546L10.586 12l-8.551 8.551a1.962 1.962 0 0 1-.08-.529v-4.044a1 1 0 0 0-2 0v4.044a4 4 0 0 0 4 4h4a1 1 0 0 0 0-2h-4a1.97 1.97 0 0 1-.494-.069L12 13.414l8.506 8.506a1.96 1.96 0 0 1-.528.08h-4.045a1 1 0 0 0 0 2h4.045a4 4 0 0 0 4-4v-4a1 1 0 0 0-2 0v4a1.964 1.964 0 0 1-.07.494L13.414 12l8.5-8.5a1.982 1.982 0 0 1 .064.478v4.044a1 1 0 0 0 1 1Z",
    style: "fill:#000"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M23 9a1 1 0 0 0 1-1V3a3 3 0 0 0-3-3h-5a1 1 0 0 0 0 2h4.586L12 10.586 3.414 2H8a1 1 0 0 0 0-2H3a3 3 0 0 0-3 3v5a1 1 0 0 0 2 0V3.414L10.586 12 2 20.586V16a1 1 0 0 0-2 0v5a3 3 0 0 0 3 3h5a1 1 0 0 0 0-2H3.414L12 13.414 20.586 22H16a1 1 0 0 0 0 2h5a3 3 0 0 0 3-3v-5a1 1 0 0 0-2 0v4.586L13.414 12 22 3.414V8a1 1 0 0 0 1 1Z"
  }));
});
ExpandArrows.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ExpandArrows.displayName = 'ExpandArrows';
export default ExpandArrows;
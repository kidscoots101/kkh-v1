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
var Volcano = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M20.876 24H3.124a3.121 3.121 0 0 1-2.4-5.118l8.146-8.571A1 1 0 0 1 9.6 10h4.8a1 1 0 0 1 .725.311l8.1 8.522A3.119 3.119 0 0 1 20.876 24ZM6.224 16l-4 4.211a1.132 1.132 0 0 0 .9 1.789h17.752a1.125 1.125 0 0 0 .86-1.837L17.777 16H16a1 1 0 0 0-1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 0-2 0v1a1 1 0 0 1-2 0v-1a1 1 0 0 0-1-1ZM12 14a2.987 2.987 0 0 1 2 .766A2.987 2.987 0 0 1 15.878 14l-1.9-2h-3.952l-1.9 2a2.99 2.99 0 0 1 1.874.766A2.987 2.987 0 0 1 12 14Zm7-5a2.971 2.971 0 0 1-1.38-.342A3.987 3.987 0 0 1 16 9h-2a1 1 0 0 1 0-2h2a1.993 1.993 0 0 0 1.116-.34 1 1 0 0 1 1.225.082A.991.991 0 1 0 19 5a1.107 1.107 0 0 1-1.122-.653 1.99 1.99 0 0 0-2.857-1.077 1 1 0 0 1-1.336-.335 2 2 0 0 0-3.37 0 1 1 0 0 1-1.336.335 1.989 1.989 0 0 0-2.857 1.077 1.015 1.015 0 0 1-1.034.667L4.977 5a.991.991 0 1 0 .683 1.741 1 1 0 0 1 1.224-.081A1.993 1.993 0 0 0 8 7h2a1 1 0 0 1 0 2H8a3.987 3.987 0 0 1-1.62-.342C2.165 10.568.029 4 4.527 3.037a3.99 3.99 0 0 1 4.642-1.856 4.01 4.01 0 0 1 5.662 0 3.99 3.99 0 0 1 4.642 1.856A3 3 0 0 1 19 9Z"
  }));
});
Volcano.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Volcano.displayName = 'Volcano';
export default Volcano;
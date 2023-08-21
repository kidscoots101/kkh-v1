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
var HeadSideThinking = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M19.8 4.419A10.9 10.9 0 0 0 9.453.106 11 11 0 0 0 2.26 17.674 3.886 3.886 0 0 1 3 20.029V21a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3h.494a5.014 5.014 0 0 0 4.957-4.345L21.67 15H22a1.959 1.959 0 0 0 2-2c0-1.42-2.932-7.015-4.2-8.581ZM20.793 13a1 1 0 0 0-.991.869l-.334 2.525A3.008 3.008 0 0 1 16.494 19H15a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-.971a5.9 5.9 0 0 0-1.151-3.571 9 9 0 0 1 5.876-14.37A9.265 9.265 0 0 1 11.005 2a8.941 8.941 0 0 1 7.218 3.648A31.212 31.212 0 0 1 22 13ZM16.2 8.011a1 1 0 0 0-1.366-.369l-.982.564A3.994 3.994 0 0 0 12 7.142V6a1 1 0 0 0-2 0v1.142a3.994 3.994 0 0 0-1.855 1.064l-.982-.564a1 1 0 1 0-1 1.734l.993.571A3.938 3.938 0 0 0 7 11a3.938 3.938 0 0 0 .159 1.053l-.993.571a1 1 0 0 0 1 1.734l.982-.564A3.994 3.994 0 0 0 10 14.858V16a1 1 0 0 0 2 0v-1.142a3.994 3.994 0 0 0 1.855-1.064l.982.564a1 1 0 1 0 1-1.734l-.993-.571A3.938 3.938 0 0 0 15 11a3.938 3.938 0 0 0-.159-1.053l.993-.571a1 1 0 0 0 .366-1.365ZM11 13a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z"
  }));
});
HeadSideThinking.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
HeadSideThinking.displayName = 'HeadSideThinking';
export default HeadSideThinking;
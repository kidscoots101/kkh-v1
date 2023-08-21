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
var Gears = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "m22.73 19.05-.98-.55c.15-.48.26-.98.26-1.5s-.1-1.03-.26-1.5l.98-.55c.48-.27.65-.88.39-1.36-.27-.48-.88-.66-1.36-.39l-.98.55a5.037 5.037 0 0 0-2.77-1.65V11c0-.55-.45-1-1-1s-1 .45-1 1v1.1c-1.1.22-2.06.83-2.77 1.65l-.98-.55a.994.994 0 0 0-1.36.39c-.27.48-.1 1.09.39 1.36l.98.55c-.15.48-.26.98-.26 1.5s.1 1.03.26 1.5l-.98.55c-.48.27-.65.88-.39 1.36.18.33.52.51.87.51.17 0 .33-.04.49-.13l.98-.55c.71.82 1.67 1.42 2.77 1.65v1.1c0 .55.45 1 1 1s1-.45 1-1v-1.1c1.1-.22 2.06-.83 2.77-1.65l.98.55c.15.09.32.13.49.13.35 0 .69-.18.87-.51.27-.48.1-1.09-.39-1.36ZM17 20c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3Zm-6.23-9.75.98.55c.15.09.32.13.49.13.35 0 .69-.18.87-.51.27-.48.1-1.09-.39-1.36l-.98-.55c.15-.48.26-.98.26-1.5s-.1-1.03-.26-1.5l.98-.55c.48-.27.65-.88.39-1.36-.27-.48-.88-.66-1.36-.39l-.98.55A5.037 5.037 0 0 0 8 2.11V1c0-.55-.45-1-1-1S6 .45 6 1v1.1c-1.1.22-2.06.83-2.77 1.65l-.98-.55a.994.994 0 0 0-1.36.39c-.27.48-.1 1.09.39 1.36l.98.55C2.11 5.98 2 6.48 2 7s.1 1.03.26 1.5l-.98.55c-.48.27-.65.88-.39 1.36.18.33.52.51.87.51.17 0 .33-.04.49-.13l.98-.55c.71.82 1.67 1.42 2.77 1.65v1.1c0 .55.45 1 1 1s1-.45 1-1v-1.1c1.1-.22 2.06-.83 2.77-1.65ZM7 10c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3Z"
  }));
});
Gears.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Gears.displayName = 'Gears';
export default Gears;
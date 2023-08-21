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
var ChildHead = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M24 11.5a3.5 3.5 0 0 0-2.149-3.226 10 10 0 0 0-19.7 0 3.5 3.5 0 0 0 1.119 6.718 10.607 10.607 0 0 0 2.071 2.955 8.908 8.908 0 0 0-2.272 4.928 1 1 0 0 0 .868 1.117 1.093 1.093 0 0 0 .124.008 1 1 0 0 0 .991-.875 6.924 6.924 0 0 1 1.815-3.872A8.948 8.948 0 0 0 12 21a8.94 8.94 0 0 0 5.119-1.74 6.922 6.922 0 0 1 1.808 3.862 1 1 0 0 0 .991.876 1.063 1.063 0 0 0 .125-.008 1 1 0 0 0 .868-1.116 8.9 8.9 0 0 0-2.261-4.918 10.622 10.622 0 0 0 2.082-2.966A3.5 3.5 0 0 0 24 11.5Zm-3.752 1.473a.993.993 0 0 0-1.117.651C18.215 16.222 15.13 19 12 19s-6.215-2.78-7.131-5.378a.994.994 0 0 0-1.117-.651A1.606 1.606 0 0 1 3.5 13a1.5 1.5 0 0 1-.27-2.972 1 1 0 0 0 .816-.878A7.961 7.961 0 0 1 8.13 3a4.075 4.075 0 0 0-.022 1.942 4 4 0 0 0 7.688.318.977.977 0 0 0-.945-1.26H14.7a.867.867 0 0 0-.806.631A2 2 0 1 1 12 2a7.978 7.978 0 0 1 7.954 7.15 1 1 0 0 0 .816.878A1.5 1.5 0 0 1 20.5 13a1.606 1.606 0 0 1-.252-.027Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "11.5",
    r: "1.5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "14.5",
    cy: "11.5",
    r: "1.5"
  }));
});
ChildHead.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
ChildHead.displayName = 'ChildHead';
export default ChildHead;
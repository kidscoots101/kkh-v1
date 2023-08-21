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
var Popcorn = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M11 6a1 1 0 0 1-1 1 1 1 0 0 0-1 1 1 1 0 0 1-2 0 3 3 0 0 1 3-3 1 1 0 0 1 1 1Zm3 1a1 1 0 0 0 0 2 1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-3-3Zm7.923 6.486-1.3 6.5A5.013 5.013 0 0 1 15.721 24H8.279a5.013 5.013 0 0 1-4.9-4.019l-1.3-6.5a4.007 4.007 0 0 1-.05-6.953A4.007 4.007 0 0 1 5.311 3.06a3.456 3.456 0 0 1 3.7-2.016A3.517 3.517 0 0 1 14.66 2a3.479 3.479 0 0 1 2.392 1.115 4.011 4.011 0 0 1 4.921 3.414 4.007 4.007 0 0 1-.05 6.957ZM8.484 22 8 16.062A2.019 2.019 0 0 0 6 14H4.22l1.117 5.588A3.029 3.029 0 0 0 8.484 22Zm4.972 0L14 15.978A2 2 0 0 0 10 16l.487 6Zm6.324-8H18a2 2 0 0 0-2 2l-.537 6a3.038 3.038 0 0 0 3.2-2.412ZM22 10a2 2 0 0 0-1.335-1.874A1 1 0 0 1 20 7.184a2.012 2.012 0 0 0-2.872-1.972 1 1 0 0 1-1.318-.42A1.5 1.5 0 0 0 14.5 4a1.13 1.13 0 0 1-1.529-.762 1.5 1.5 0 0 0-2.739-.526C9.788 3.43 9.122 3.1 8.5 3a1.5 1.5 0 0 0-1.47 1.2 1 1 0 0 1-1.072.8A2 2 0 0 0 4 7a1.047 1.047 0 0 1-.665 1.126A2 2 0 0 0 4 12h2a3.975 3.975 0 0 1 3 1.382 3.994 3.994 0 0 1 5.994-.007A4.008 4.008 0 0 1 18 12h2a2 2 0 0 0 2-2Z"
  }));
});
Popcorn.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Popcorn.displayName = 'Popcorn';
export default Popcorn;
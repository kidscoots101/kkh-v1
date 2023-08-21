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
var Lettuce = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M23.566 9.8a4 4 0 0 0-4.973-5.526 4.669 4.669 0 0 0-2.4-1.2.652.652 0 0 1-.421-.409 4 4 0 0 0-7.542 0 .668.668 0 0 1-.4.4 4.715 4.715 0 0 0-2.421 1.2A4 4 0 0 0 .434 9.8 1.53 1.53 0 0 1 .4 11.062a4.972 4.972 0 0 0 1.315 5.682A3.213 3.213 0 0 1 2 17a5.019 5.019 0 0 0 7.11 4.524c3.376 3.326 2.412 3.311 5.78 0A5.013 5.013 0 0 0 22 17c.019-.029.295-.252.295-.252a4.974 4.974 0 0 0 1.305-5.686 1.53 1.53 0 0 1-.034-1.262ZM7 20a3 3 0 0 1-3-3 2.17 2.17 0 0 0-.975-1.764A2.931 2.931 0 0 1 2 13c.15-1.407 1.03-2.8.213-4.114a2 2 0 0 1 2.043-2.86 4.428 4.428 0 0 0 .757 4.3 1.276 1.276 0 0 1 .219 1.186A5.032 5.032 0 0 0 7 17a4.966 4.966 0 0 0 .9 2.848A3.012 3.012 0 0 1 7 20Zm8-3a3 3 0 0 1-2 2.816V9a1 1 0 0 0-2 0v10.816A3 3 0 0 1 9 17a2.408 2.408 0 0 0-.975-1.764 2.938 2.938 0 0 1-.888-3.113 3.249 3.249 0 0 0-.578-3.064 2.459 2.459 0 0 1-.531-1.942A2.546 2.546 0 0 1 8.174 5.04a2.644 2.644 0 0 0 1.939-1.7 2 2 0 0 1 3.774 0 2.646 2.646 0 0 0 1.942 1.706 2.544 2.544 0 0 1 2.143 2.076 2.459 2.459 0 0 1-.531 1.942C16.393 10.193 16.773 11.646 17 13a2.937 2.937 0 0 1-1.03 2.241A2.4 2.4 0 0 0 15 17Zm5.909-1.71A2.1 2.1 0 0 0 20 17a3 3 0 0 1-3.892 2.851 4.834 4.834 0 0 0 .883-2.79 5.188 5.188 0 0 0 1.777-5.547 1.276 1.276 0 0 1 .219-1.186 4.429 4.429 0 0 0 .757-4.3 2 2 0 0 1 2.042 2.861C20.97 10.2 21.85 11.592 22 13a2.972 2.972 0 0 1-1.091 2.29Z"
  }));
});
Lettuce.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Lettuce.displayName = 'Lettuce';
export default Lettuce;
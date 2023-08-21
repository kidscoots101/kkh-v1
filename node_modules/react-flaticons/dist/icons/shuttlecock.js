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
var Shuttlecock = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M23.2 10.073a3.252 3.252 0 0 0-1.354-.81 3.265 3.265 0 0 0-.791-3.334 3.166 3.166 0 0 0-2.105-.878 3.135 3.135 0 0 0-.93-2.117 3.261 3.261 0 0 0-3.285-.741 3.213 3.213 0 0 0-.824-1.406A2.742 2.742 0 0 0 11.875 0 2.772 2.772 0 0 0 9.89.961a34.174 34.174 0 0 0-6.815 13.6L1.333 16.3A4.5 4.5 0 0 0 7.7 22.667l1.742-1.742a34.174 34.174 0 0 0 13.6-6.815 2.757 2.757 0 0 0 .158-4.037ZM19.692 7.4a1.186 1.186 0 0 1-.019 1.656c-.222.221-.956.872-1.046.962l-.007.007c-1.853 1.609-4.553 3.59-5.738 4.446l-.969-.969 6.1-6.1a1.213 1.213 0 0 1 1.679-.002Zm-5.665-2.121c.027-.029.845-.877.9-.932a1.212 1.212 0 0 1 1.676 0 1.138 1.138 0 0 1 0 1.634L16.584 6 10.5 12.086l-.988-.986c.867-1.2 2.894-3.967 4.515-5.821Zm-2.619-3.016a.756.756 0 0 1 1.105-.045 1.272 1.272 0 0 1 .093 1.649c-.023.027-3.583 4.5-4.527 5.8l-.846-.846a29.568 29.568 0 0 1 4.175-6.558Zm-5.125 18.99a2.561 2.561 0 0 1-3.536 0 2.5 2.5 0 0 1 0-3.536l1.278-1.278 3.536 3.536ZM9.312 18.9 5.1 14.688a31.129 31.129 0 0 1 1.273-3.9l6.836 6.836A31.129 31.129 0 0 1 9.312 18.9ZM22 12.043a.754.754 0 0 1-.263.549 29.562 29.562 0 0 1-6.555 4.175l-.865-.865c1.371-.994 4.046-2.975 5.867-4.59a1.294 1.294 0 0 1 1.609.185.73.73 0 0 1 .207.546Z"
  }));
});
Shuttlecock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Shuttlecock.displayName = 'Shuttlecock';
export default Shuttlecock;
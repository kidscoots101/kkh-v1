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
var TemperatureFrigid = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M362.834 511.486c-128.99 2.483-198.057-162.07-106.095-252.272V108.327c4.477-140.236 207.755-140.045 212.189 0v150.888c91.984 90.222 22.853 254.754-106.094 252.271zm0-466.816c-35.157 0-63.657 28.5-63.657 63.657v159.927a21.218 21.218 0 0 1-7.045 15.787c-43.688 39.047-47.449 106.117-8.402 149.805s106.117 47.449 149.805 8.402 47.449-106.117 8.402-149.805a106.234 106.234 0 0 0-8.402-8.402 21.218 21.218 0 0 1-7.045-15.787V108.327c0-35.157-28.5-63.657-63.656-63.657zm0 381.94c-35.236-.443-63.441-29.366-62.998-64.602.332-26.451 16.952-49.953 41.779-59.083V171.983c0-11.719 9.5-21.219 21.219-21.219 11.719 0 21.219 9.5 21.219 21.219v130.942c33.074 12.162 50.026 48.832 37.864 81.906-9.13 24.828-32.633 41.447-59.083 41.779zm0-84.875c-11.719 0-21.219 9.5-21.219 21.219s9.5 21.219 21.219 21.219c11.719 0 21.219-9.5 21.219-21.219s-9.5-21.219-21.219-21.219zm-228.592-18.27c-11.788-.169-21.207-9.863-21.037-21.651a21.345 21.345 0 0 1 6.036-14.57l22.407-22.428a43.173 43.173 0 0 1 8.997-6.896v-23.044a74.076 74.076 0 0 1-39.085-18.333l-20.35 11.819a41.73 41.73 0 0 1-1.4 11.225l-8.127 30.661c-3 11.332-14.619 18.087-25.951 15.087s-18.087-14.619-15.087-25.951l8.148-30.661-30.874-8.488c-11.382-2.79-18.346-14.279-15.556-25.661s14.279-18.346 25.661-15.556c.254.062.507.129.759.201l30.619 8.127a42.586 42.586 0 0 1 10.44 4.244l19.564-11.352a75.03 75.03 0 0 1 .212-38.64l-19.734-11.416a42.453 42.453 0 0 1-10.44 4.244l-30.683 8.106c-11.138 3.645-23.121-2.43-26.766-13.567-3.645-11.138 2.43-23.121 13.567-26.766a21.12 21.12 0 0 1 2.335-.619l30.661-8.106-7.915-31.022c-3-11.332 3.754-22.951 15.087-25.951s22.951 3.754 25.951 15.087l8.127 30.661a41.9 41.9 0 0 1 1.422 11.225l20.964 12.18a74.136 74.136 0 0 1 38.449-17.781l-.233-21.537a42.37 42.37 0 0 1-9.06-6.939l-22.407-22.428c-8.141-8.429-7.908-21.862.521-30.004 8.223-7.942 21.259-7.942 29.482 0l22.428 22.428 22.832-22.428c8.141-8.429 21.574-8.662 30.004-.521 8.429 8.141 8.662 21.574.521 30.004-.171.177-.344.35-.521.521l-22.428 22.428a41.74 41.74 0 0 1-8.933 6.854l.233 42.077c0 11.719-9.5 21.219-21.219 21.219h-10.609c-17.578 0-31.828 14.25-31.828 31.828s14.25 31.828 31.828 31.828h10.609c11.719 0 21.219 9.5 21.219 21.219v59.095c0 11.719-9.5 21.219-21.219 21.219l-22.619 22.513a21.22 21.22 0 0 1-15.002 6.216z"
  }));
});
TemperatureFrigid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
TemperatureFrigid.displayName = 'TemperatureFrigid';
export default TemperatureFrigid;
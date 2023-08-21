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
var Rocket = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M18 7a1 1 0 1 1-1-1 1 1 0 0 1 1 1Zm-4 2a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-3 3a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm12.866-9.042-.075.211C22.289 7.337 20.848 11.3 18 14.82V15a11.02 11.02 0 0 1-3.6 8.135 3.264 3.264 0 0 1-2.2.865A3.21 3.21 0 0 1 9 20.794v-1.151a4.951 4.951 0 0 1-1.961-1.191L7 18.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L5.586 17l-.039-.038A4.98 4.98 0 0 1 4.353 15h-.99A3.366 3.366 0 0 1 0 11.638 3.4 3.4 0 0 1 .938 9.3 10.922 10.922 0 0 1 9 6h.18C12.7 3.153 16.66 1.712 20.826.211l.216-.077a2.2 2.2 0 0 1 2.824 2.824ZM3.363 13H4.1a5 5 0 0 1 .891-2.45A25.362 25.362 0 0 1 6.8 8.244a8.507 8.507 0 0 0-4.4 2.426 1.407 1.407 0 0 0-.4.968A1.364 1.364 0 0 0 3.363 13ZM15.7 17.252a25.552 25.552 0 0 1-2.252 1.759 4.983 4.983 0 0 1-2.448.876v.907A1.208 1.208 0 0 0 12.207 22a1.271 1.271 0 0 0 .852-.345 9 9 0 0 0 2.641-4.403Zm6.237-15.189a.191.191 0 0 0-.217-.048l-.215.078c-4.844 1.745-9.027 3.253-12.629 6.854A20.867 20.867 0 0 0 6.628 11.7a3 3 0 0 0 .333 3.851l1.492 1.49a3 3 0 0 0 3.849.334 20.817 20.817 0 0 0 2.751-2.248c3.6-3.6 5.11-7.787 6.856-12.633l.076-.211a.192.192 0 0 0-.048-.22Z"
  }));
});
Rocket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Rocket.displayName = 'Rocket';
export default Rocket;
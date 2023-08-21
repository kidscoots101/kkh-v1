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
var Flame = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M354.773 61.867c-16.789-14.229-34.389-29.184-52.309-45.483A62.975 62.975 0 0 0 251.733.555a60.692 60.692 0 0 0-43.349 27.733 434.61 434.61 0 0 0-53.163 137.579 130.674 130.674 0 0 1-10.155-17.387c-10.104-21.288-35.552-30.355-56.84-20.251a42.661 42.661 0 0 0-13.56 10.16A193.408 193.408 0 0 0 19.498 275.37c-1.017 107.532 71.314 201.943 175.403 228.95a248.569 248.569 0 0 0 59.221 7.509c.64 0 7.445-.064 10.197-.256 127.36-4.125 228.426-108.648 228.267-236.075-.085-96.639-63.914-150.826-137.813-213.631zM253.589 469.013c-15.877-1.208-31.567-7.639-43.413-17.195-18.55-13.126-30.825-32.374-33.749-54.549-3.627-34.603 17.707-79.851 61.291-130.965a23.916 23.916 0 0 1 18.283-8.363 23.233 23.233 0 0 1 17.984 8.32c39.936 47.403 61.867 91.136 61.867 123.157-.123 42.07-33.006 75.35-74.88 79.403-1.839.178-4.972.448-7.383.192zm121.366-40.576c-1.259.981-2.645 1.771-3.925 2.709a121.74 121.74 0 0 0 7.488-41.771c0-53.909-39.147-111.68-71.957-150.656a66.132 66.132 0 0 0-50.475-23.467H256a66.497 66.497 0 0 0-50.688 23.317c-52.16 61.099-76.117 115.989-71.211 163.157a110.364 110.364 0 0 0 8.299 31.787 194.008 194.008 0 0 1-80.171-158.144 150.657 150.657 0 0 1 44.437-108.373 174.238 174.238 0 0 0 17.643 29.035 39.402 39.402 0 0 0 40.661 14.933 40.534 40.534 0 0 0 30.955-31.445A397.96 397.96 0 0 1 244.33 51.05a17.96 17.96 0 0 1 12.992-8.192 20.333 20.333 0 0 1 16.427 5.141c18.304 16.64 36.267 32 53.333 46.443 71.211 60.48 122.688 104.171 122.688 181.056a192.704 192.704 0 0 1-74.752 152.981l-.063-.042z"
  }));
});
Flame.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Flame.displayName = 'Flame';
export default Flame;
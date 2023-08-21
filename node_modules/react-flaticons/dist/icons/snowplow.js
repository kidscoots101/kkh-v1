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
var Snowplow = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M504.653 457.833a143.931 143.931 0 0 1-42.246-102.568V171.988c0-11.608-9.41-21.018-21.018-21.018s-21.018 9.41-21.018 21.018v84.072h-63.264v-.21c-.098-29.174-20.197-54.472-48.594-61.163l-49.75-111.291C232.007 13.932 110.144-3.155 105.1 87.748v42.204c-46.432 0-84.072 37.64-84.072 84.072v.105l.126 104.796c-34.561 47.089-24.406 113.28 22.683 147.841a105.756 105.756 0 0 0 61.263 20.492h168.144c58.395-.711 105.158-48.626 104.446-107.021a105.745 105.745 0 0 0-20.374-61.123v-21.018h63.054v57.169a185.651 185.651 0 0 0 54.647 132.203c7.55 8.817 20.819 9.843 29.635 2.293 8.817-7.55 9.844-20.819 2.293-29.635a21.027 21.027 0 0 0-2.292-2.293zM168.154 66.688a57.274 57.274 0 0 1 52.23 33.839l41.342 92.479H168.28c-11.608 0-21.018-9.41-21.018-21.018l-.126-84.282c0-11.608 9.41-21.018 21.018-21.018zM75.422 184.389a41.746 41.746 0 0 1 29.677-12.401v.105c.058 34.783 28.271 62.949 63.054 62.949h125.898c11.551 0 20.937 9.32 21.018 20.871v29.909a104.583 104.583 0 0 0-41.826-8.744H105.1a104.59 104.59 0 0 0-41.868 8.701l-.168-71.756a41.678 41.678 0 0 1 12.359-29.699l-.001.065zm197.822 260.834H105.1c-34.824 0-63.054-28.23-63.054-63.054s28.23-63.054 63.054-63.054h168.144c34.824 0 63.054 28.23 63.054 63.054s-28.23 63.054-63.054 63.054zm-147.126-63.054c0 11.608-9.41 21.018-21.018 21.018s-21.018-9.41-21.018-21.018 9.41-21.018 21.018-21.018 21.018 9.41 21.018 21.018zm168.144 0c0 11.608-9.41 21.018-21.018 21.018s-21.018-9.41-21.018-21.018 9.41-21.018 21.018-21.018c11.608-.001 21.018 9.41 21.018 21.018zm-84.072 0c0 11.608-9.41 21.018-21.018 21.018s-21.018-9.41-21.018-21.018 9.41-21.018 21.018-21.018 21.018 9.41 21.018 21.018z"
  }));
});
Snowplow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Snowplow.displayName = 'Snowplow';
export default Snowplow;
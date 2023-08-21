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
var Bahai = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M23.968 10.229a2.06 2.06 0 0 0-1.288-1.572l-2.561-1.004.412-2.72a2.064 2.064 0 0 0-.719-1.903 2.074 2.074 0 0 0-1.999-.377l-2.606.878-1.433-2.349c-.744-1.312-2.804-1.312-3.548 0L8.793 3.53l-2.606-.877a2.066 2.066 0 0 0-1.999.376 2.061 2.061 0 0 0-.719 1.903l.412 2.72-2.56 1.003a2.064 2.064 0 0 0-1.289 1.573 2.066 2.066 0 0 0 .672 1.921l2.062 1.819-1.316 2.414c-.35.641-.34 1.401.025 2.033a2.063 2.063 0 0 0 1.749 1.039l2.75.067.543 2.694c.144.716.64 1.292 1.325 1.542a2.063 2.063 0 0 0 2.009-.328L12 21.713l2.149 1.717a2.061 2.061 0 0 0 2.008.327 2.062 2.062 0 0 0 1.325-1.541l.543-2.695 2.75-.067a2.066 2.066 0 0 0 1.749-1.039 2.061 2.061 0 0 0 .025-2.033l-1.316-2.414 2.063-1.819a2.067 2.067 0 0 0 .671-1.921Zm-4.656 2.768a1 1 0 0 0-.217 1.229l1.698 3.115-.066.115-3.547.087a1.002 1.002 0 0 0-.956.802l-.702 3.478-.125.047-2.773-2.214a1.001 1.001 0 0 0-1.248 0L8.603 21.87l-.125-.047-.702-3.478a1.002 1.002 0 0 0-.956-.802l-3.547-.087-.066-.115 1.698-3.115a.999.999 0 0 0-.217-1.229L2.026 10.65l.023-.132 3.304-1.295a.998.998 0 0 0 .624-1.08l-.531-3.509.103-.085 3.363 1.132c.442.146.929-.028 1.172-.428l1.849-3.029h.134l1.849 3.029c.244.399.731.574 1.172.428l3.363-1.132.103.085-.531 3.509c-.07.462.189.91.624 1.08l3.304 1.295.023.132-2.662 2.347Z"
  }));
});
Bahai.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Bahai.displayName = 'Bahai';
export default Bahai;
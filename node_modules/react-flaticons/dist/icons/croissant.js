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
var Croissant = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M22.375 3.785a13.448 13.448 0 0 0-4.847-1.639A4.013 4.013 0 0 0 16.473.862a3.966 3.966 0 0 0-3.391-.753A17.955 17.955 0 0 0 9.463 1.45a4.666 4.666 0 0 0-5.063.691c-.367.315-.736.644-1.1.983-.382.359-.771.767-1.159 1.21a4.655 4.655 0 0 0-1.03 4.12 4.753 4.753 0 0 0 .341.984A18.173 18.173 0 0 0 .1 13.082a3.958 3.958 0 0 0 .753 3.391 4 4 0 0 0 1.3 1.062 13.45 13.45 0 0 0 1.638 4.84 3.168 3.168 0 0 0 3.431 1.557 3.259 3.259 0 0 0 2.61-2.876A16.488 16.488 0 0 1 10.84 17.3s.545-.336.794-.539a3.717 3.717 0 0 0 1.216-1.941 3.141 3.141 0 0 0 1.228-.755 3.176 3.176 0 0 0 .744-1.211 3.715 3.715 0 0 0 1.934-1.215c.2-.249.54-.795.54-.795a15.346 15.346 0 0 1 3.76-1.013 3.259 3.259 0 0 0 2.876-2.61 3.161 3.161 0 0 0-1.557-3.436ZM7.839 20.833a1.274 1.274 0 0 1-1.027 1.14 1.169 1.169 0 0 1-1.291-.59A11.5 11.5 0 0 1 4.244 18h3.9c.109 0 .215-.022.323-.028-.286.883-.628 2.857-.628 2.861Zm2.53-5.626A3.525 3.525 0 0 1 8.146 16H4a2 2 0 0 1-1.579-.767 1.973 1.973 0 0 1-.377-1.689 14.866 14.866 0 0 1 .8-2.359 4.652 4.652 0 0 0 1.006.6l6.677 2.924c.062.029.128.04.191.064a1.567 1.567 0 0 1-.349.434Zm2.285-2.552a1.151 1.151 0 0 1-1.308.234L4.653 9.958a2.75 2.75 0 0 1-1.585-1.941 2.675 2.675 0 0 1 .586-2.368c.346-.394.688-.754 1.023-1.069s.682-.625 1.027-.92a2.685 2.685 0 0 1 4.226.957l2.964 6.69a1.222 1.222 0 0 1-.24 1.348ZM16 8.146a3.524 3.524 0 0 1-.792 2.223 1.585 1.585 0 0 1-.411.339c-.026-.07-.045-.142-.075-.211l-2.963-6.689a4.811 4.811 0 0 0-.562-.957 14.914 14.914 0 0 1 2.347-.8 1.971 1.971 0 0 1 1.689.377A2 2 0 0 1 16 4.011Zm5.973-1.334a1.274 1.274 0 0 1-1.14 1.027s-1.978.342-2.861.63c.007-.108.028-.214.028-.323v-3.9a11.5 11.5 0 0 1 3.383 1.277 1.172 1.172 0 0 1 .59 1.289Z"
  }));
});
Croissant.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Croissant.displayName = 'Croissant';
export default Croissant;
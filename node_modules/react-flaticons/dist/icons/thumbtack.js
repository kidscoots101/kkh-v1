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
var Thumbtack = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
    d: "M1 24a1 1 0 0 0 .707-.293l6.619-6.619 1.248 1.292a5.169 5.169 0 0 0 3.605 1.614 3.991 3.991 0 0 0 1.339-.227 3.63 3.63 0 0 0 2.435-3.122 8.486 8.486 0 0 0-.222-3.027l-.214-1.042a1 1 0 0 1 .264-.943l1.587-1.588a.34.34 0 0 1 .236-.1.17.17 0 0 1 .167.065 3.077 3.077 0 0 0 3.971.432 3 3 0 0 0 .379-4.565L18.2.954a3.085 3.085 0 0 0-3.938-.4 3 3 0 0 0-.38 4.565l.076.076a.308.308 0 0 1 0 .434l-1.6 1.6a1 1 0 0 1-.954.261l-.817-.209a8.632 8.632 0 0 0-3.082-.233A3.863 3.863 0 0 0 4.25 9.634a4 4 0 0 0 .928 4.2l1.758 1.82-6.643 6.639A1 1 0 0 0 1 24Zm5.135-13.7a1.856 1.856 0 0 1 1.578-1.264A6.7 6.7 0 0 1 8.406 9a6.622 6.622 0 0 1 1.681.217l.823.21a3.01 3.01 0 0 0 2.862-.785l1.6-1.6a2.31 2.31 0 0 0 0-3.262l-.076-.076a1 1 0 0 1 .134-1.528 1.084 1.084 0 0 1 1.356.19L21.71 7.29a1 1 0 0 1-.134 1.528 1.085 1.085 0 0 1-1.368-.2 2.212 2.212 0 0 0-1.584-.672 2.4 2.4 0 0 0-1.667.684l-1.586 1.587a3 3 0 0 0-.8 2.8l.219 1.058a6.646 6.646 0 0 1 .181 2.366 1.655 1.655 0 0 1-1.115 1.444 2.8 2.8 0 0 1-2.85-.9l-4.4-4.55a2.027 2.027 0 0 1-.471-2.135Z"
  }));
});
Thumbtack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Thumbtack.displayName = 'Thumbtack';
export default Thumbtack;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _leaflet = require('leaflet');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bounds = require('./propTypes/bounds');

var _bounds2 = _interopRequireDefault(_bounds);

var _children = require('./propTypes/children');

var _children2 = _interopRequireDefault(_children);

var _MapLayer2 = require('./MapLayer');

var _MapLayer3 = _interopRequireDefault(_MapLayer2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageOverlay = function (_MapLayer) {
  (0, _inherits3.default)(ImageOverlay, _MapLayer);

  function ImageOverlay() {
    (0, _classCallCheck3.default)(this, ImageOverlay);
    return (0, _possibleConstructorReturn3.default)(this, (ImageOverlay.__proto__ || (0, _getPrototypeOf2.default)(ImageOverlay)).apply(this, arguments));
  }

  (0, _createClass3.default)(ImageOverlay, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popupContainer: this.leafletElement
      };
    }
  }, {
    key: 'createLeafletElement',
    value: function createLeafletElement(props) {
      var bounds = props.bounds,
          url = props.url,
          options = (0, _objectWithoutProperties3.default)(props, ['bounds', 'url']);

      return (0, _leaflet.imageOverlay)(url, bounds, this.getOptions(options));
    }
  }, {
    key: 'updateLeafletElement',
    value: function updateLeafletElement(fromProps, toProps) {
      if (toProps.url !== fromProps.url) {
        this.leafletElement.setUrl(toProps.url);
      }
      if (toProps.bounds !== fromProps.bounds) {
        this.leafletElement.setBounds((0, _leaflet.latLngBounds)(toProps.bounds));
      }
      if (toProps.opacity !== fromProps.opacity) {
        this.leafletElement.setOpacity(toProps.opacity);
      }
      if (toProps.zIndex !== fromProps.zIndex) {
        this.leafletElement.setZIndex(toProps.zIndex);
      }
    }
  }]);
  return ImageOverlay;
}(_MapLayer3.default);

ImageOverlay.propTypes = {
  attribution: _propTypes2.default.string,
  bounds: _bounds2.default.isRequired,
  children: _children2.default,
  opacity: _propTypes2.default.number,
  url: _propTypes2.default.string.isRequired,
  zIndex: _propTypes2.default.number
};
ImageOverlay.childContextTypes = {
  popupContainer: _propTypes2.default.object
};
exports.default = ImageOverlay;
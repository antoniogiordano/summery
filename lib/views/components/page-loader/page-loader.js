'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageLoader = _react2.default.createClass({
  displayName: 'PageLoader',

  propTypes: {
    css: _react2.default.PropTypes.object,
    visible: _react2.default.PropTypes.bool
  },
  getDefaultProps: function getDefaultProps() {
    return {
      css: require('./page-loader.scss'),
      visible: true
    };
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      null,
      this.props.visible ? _react2.default.createElement(
        'div',
        { className: this.props.css.root },
        _react2.default.createElement('img', { alt: '', src: '/img/loader.gif' })
      ) : null
    );
  }
}); /**
     * Created by AntonioGiordano on 13/09/16.
     */

module.exports = PageLoader;
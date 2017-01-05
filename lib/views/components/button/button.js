'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = _react2.default.createClass({
  displayName: 'Button',

  propTypes: {
    cssRootClass: _react2.default.PropTypes.string,
    onClick: _react2.default.PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return {
      cssRootClass: null,
      onClick: null,
      style: {}
    };
  },
  render: function render() {
    var css = require('./button.scss');
    return _react2.default.createElement(
      'button',
      { onClick: this.props.onClick, className: css.buttonRoot + ' ' + this.props.cssRootClass, style: this.props.style },
      this.props.children
    );
  }
}); /**
     * Created by AntonioGiordano on 17/06/16.
     */

module.exports = Button;
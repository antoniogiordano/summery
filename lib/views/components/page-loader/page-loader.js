'use strict';

/**
 * Created by AntonioGiordano on 13/09/16.
 */

var React = require('react');

/*
  @TODO: Fading sul visible = false
 */
var PageLoader = React.createClass({
  displayName: 'PageLoader',

  propTypes: {
    css: React.PropTypes.object,
    visible: React.PropTypes.bool
  },
  getDefaultProps: function getDefaultProps() {
    return {
      css: require('./page-loader.scss'),
      visible: true
    };
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      this.props.visible ? React.createElement(
        'div',
        { className: this.props.css.root },
        React.createElement('img', { alt: '', src: '/img/loader.gif' })
      ) : null
    );
  }
});

module.exports = PageLoader;
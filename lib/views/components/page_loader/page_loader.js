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
      css: require('./page_loader.scss'),
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
        React.createElement(
          'svg',
          { version: '1.1', id: 'Livello_1', xmlns: 'http://www.w3.org/2000/svg', x: '0px', y: '0px', viewBox: '0 0 85 85' },
          React.createElement(
            'g',
            { id: 'Grafica' },
            React.createElement('path', { className: this.props.css.layer + ' ' + this.props.css.secondRing, fill: '#379ACE', d: 'M41.9,24.1h-3.5c-1.9,0.2-3.6-1.3-3.7-3.2c0-0.2,0-0.4,0-0.6v-2.8c-0.2-1.9,1.3-3.6,3.2-3.7c0.2,0,0.4,0,0.6,0 H42c1.9-0.2,3.6,1.3,3.7,3.2c0,0.2,0,0.4,0,0.6v2.8c0.2,1.9-1.3,3.6-3.2,3.7C42.2,24.2,42.1,24.2,41.9,24.1z M38.4,16.8 c-0.7,0-0.8,0.1-0.8,0.8v2.8c0,0.7,0.1,0.8,0.8,0.8h3.5c0.7,0,0.8-0.1,0.8-0.8v-2.8c0-0.7-0.1-0.8-0.8-0.8H38.4z' }),
            React.createElement('path', { className: this.props.css.layer + ' ' + this.props.css.firstRing, fill: '#FFFFFF', d: 'M46.6,71.2h-3.5c-1.9,0.2-3.6-1.3-3.7-3.2c0-0.2,0-0.4,0-0.6v-2.8c-0.2-1.9,1.3-3.6,3.2-3.7c0.2,0,0.4,0,0.6,0 h3.5c1.9-0.2,3.6,1.3,3.7,3.2c0,0.2,0,0.4,0,0.6v2.8c0.2,1.9-1.3,3.6-3.2,3.7C47,71.2,46.8,71.2,46.6,71.2z' }),
            React.createElement('path', { className: this.props.css.layer + ' ' + this.props.css.firstRing, fill: '#FFFFFF', d: 'M34.3,47.8c-0.2,5.9,4.4,10.8,10.3,10.9c5.9,0.2,10.8-4.4,10.9-10.3c0-0.2,0-0.4,0-0.7V35L34.3,47.3V47.8z' }),
            React.createElement('path', { className: this.props.css.layer + ' ' + this.props.css.secondRing, fill: '#379ACE', d: 'M32.5,48.3V37.2c0-4.2,3.4-7.7,7.6-7.7s7.7,3.4,7.7,7.6l0,0v2.3l3-1.7v-0.6c0.2-5.9-4.4-10.8-10.3-10.9 s-10.8,4.4-10.9,10.3c0,0.2,0,0.4,0,0.7V50L32.5,48.3z' }),
            React.createElement('rect', { x: '17.8', y: '42.1', transform: 'matrix(0.867 -0.4983 0.4983 0.867 -15.6136 26.9329)', fill: '#379ACE', width: '49.7', height: '1.2' })
          )
        )
      ) : null
    );
  }
});

module.exports = PageLoader;
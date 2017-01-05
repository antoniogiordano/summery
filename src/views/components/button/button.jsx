/**
 * Created by AntonioGiordano on 17/06/16.
 */

import React from 'react'

const Button = React.createClass({
  propTypes: {
    cssRootClass: React.PropTypes.string,
    onClick: React.PropTypes.func
  },
  getDefaultProps () {
    return {
      cssRootClass: null,
      onClick: null,
      style: {}
    }
  },
  render () {
    var css = require('./button.scss')
    return (
      <button onClick={this.props.onClick} className={css.buttonRoot + ' ' + this.props.cssRootClass} style={this.props.style}>
        {
          this.props.children
        }
      </button>
    )
  }
})

module.exports = Button

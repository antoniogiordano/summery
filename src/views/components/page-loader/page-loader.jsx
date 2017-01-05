/**
 * Created by AntonioGiordano on 13/09/16.
 */

import React from 'react'

const PageLoader = React.createClass({
  propTypes: {
    css: React.PropTypes.object,
    visible: React.PropTypes.bool
  },
  getDefaultProps () {
    return {
      css: require('./page-loader.scss'),
      visible: true
    }
  },
  render () {
    return (
      <div>
        {
          this.props.visible
            ? <div className={this.props.css.root}>
              <img alt='' src='/img/loader.gif' />
            </div>
            : null
        }
      </div>
    )
  }
})

module.exports = PageLoader

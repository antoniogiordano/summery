/**
 * Created by AntonioGiordano on 19/07/16.
 */

import React from 'react'
import swal from 'sweetalert'
import InputText from '../../components/form-components/input-text/input-text.js'
import PageLoader from '../../components/page-loader/page-loader.js'
import Button from '../../components/button/button.js'
import {isLogged} from '../../ajax-requests.js'
import {FORM_INPUT_STATES} from '../../../shared/misc.js'

const menu = [
  {
    title: 'Summaries',
    onClick: () => {

    }
  }
]

const Dashboard = React.createClass({
  propTypes: {
    css: React.PropTypes.object
  },
  getDefaultProps () {
    return {
      css: require('./dashboard.scss')
    }
  },
  getInitialState () {
    return {
      isPageLoading: true
    }
  },
  componentDidMount () {
    this.setState({
      isPageLoading: false
    })
  },
  render () {
    var css = this.props.css
    return (
      <div className={css.root}>
        <PageLoader visible={this.state.isPageLoading} />
        <div className={css.page}>
          <div className={css.headerContainer}></div>
          <div className={css.pageBody}>
            <div className={css.sideMenu}>
              <ul>
                {
                  menu.map((item, index) => {
                    return (
                      <li key={index} onClick={item.onClick.bind(this)}>
                        {
                          item.title
                        }
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className={css.content}></div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Dashboard

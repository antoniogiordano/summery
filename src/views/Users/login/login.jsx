/**
 * Created by AntonioGiordano on 19/07/16.
 */

import React from 'react'
import swal from 'sweetalert'
import Joi from 'joi'
import InputText from '../../components/form-components/input-text/input-text.js'
import PageLoader from '../../components/page-loader/page-loader.js'
import Button from '../../components/button/button.js'
import {isLogged, login} from '../../ajax-requests.js'
import {FORM_INPUT_STATES} from '../../../shared/misc.js'
import {loginValidation} from '../../../app/User/shared.js'

const Login = React.createClass({
  propTypes: {
    css: React.PropTypes.object,
    lang: React.PropTypes.string
  },
  getDefaultProps () {
    return {
      css: require('./login.scss'),
      lang: 'en_US'
    }
  },
  getInitialState () {
    return {
      isPageLoading: true,
      validations: {
        username: {
          status: FORM_INPUT_STATES.neutral,
          msgError: null
        },
        password: {
          status: FORM_INPUT_STATES.neutral,
          msgError: null
        }
      },
      user: {
        username: '',
        password: ''
      }
    }
  },
  componentDidMount () {
    isLogged((err, response) => {
      if (err) {
        swal(err.message)
        this.setState({
          isPageLoading: false
        })
      } else {
        if (response.result === 0) {
          this.setState({
            isPageLoading: false
          })
        } else {
          window.location.href = '/'
        }
      }
    })
  },
  onInputChange (fieldId, value) {
    var user = this.state.user
    user[fieldId] = value
    Joi.validate(user, loginValidation, {abortEarly: false}, (err, data) => {
      var validations = this.state.validations
      for (var v in validations) {
        validations[v].status = FORM_INPUT_STATES.success
        validations[v].msgError = null
      }
      if (err) {
        err.details.map((item) => {
          if (user[item.path].toString().length === 0) {
            validations[item.path] = {
              status: FORM_INPUT_STATES.neutral,
              msgError: null
            }
          } else {
            validations[item.path] = {
              status: FORM_INPUT_STATES.error,
              msgError: item.message
            }
          }
        })
      }
      this.setState({
        validations: validations
      })
    })
  },
  onSubmitForm () {
    login(this.state.user, (err, data) => {
      if (err) {
        return swal({
          type: 'error',
          title: 'Error',
          text: err.message
        })
      }

      if (data.result === 1) window.location.href = '/dashboard'
    })
  },
  render () {
    var css = this.props.css
    return (
      <div className={this.props.css.root}>
        <PageLoader visible={this.state.isPageLoading} />
        <div className={this.props.css.pageContent}>
          <div className={this.props.css.formContainer}>
            <div className={this.props.css.inputCont}>
              <InputText
                summary='Username *'
                label='Username *'
                fieldId='username'
                defaultValue={this.state.user.username}
                msgError={this.state.validations.username.msgError}
                status={this.state.validations.username.status}
                onChange={this.onInputChange}
                css={css}
                cssRootClass={css.inputTextRoot}
              />
            </div>
            <div className={this.props.css.inputCont}>
              <InputText
                summary='Password *'
                label='Password *'
                fieldId='password'
                inputType='password'
                defaultValue={this.state.user.password}
                msgError={this.state.validations.password.msgError}
                status={this.state.validations.password.status}
                onChange={this.onInputChange}
                css={css}
                cssRootClass={css.inputTextRoot}
              />
            </div>
            <div className={this.props.css.buttonContainer}>
              <Button cssRootClass={css.signupButtonRoot} onClick={this.onSubmitForm}>Sign in</Button>
            </div>
            <div className={this.props.css.buttonContainer}>
              <Button cssRootClass={css.signupButtonRoot} onClick={() => {window.location.href = '/signup'}}>Sign up</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Login

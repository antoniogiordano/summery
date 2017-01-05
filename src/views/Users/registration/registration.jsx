/**
 * Created by AntonioGiordano on 19/07/16.
 */

import React from 'react'
import swal from 'sweetalert'
import Joi from 'joi'
import InputText from '../../components/form-components/input-text/input-text.js'
import PageLoader from '../../components/page-loader/page-loader.js'
import Button from '../../components/button/button.js'
import {isLogged, registration} from '../../ajax-requests.js'
import {FORM_INPUT_STATES} from '../../../shared/misc.js'
import {registrationValidation} from '../../../app/User/shared.js'

const Registration = React.createClass({
  propTypes: {
    css: React.PropTypes.object,
    lang: React.PropTypes.string
  },
  getDefaultProps () {
    return {
      css: require('./registration.scss'),
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
        email: {
          status: FORM_INPUT_STATES.neutral,
          msgError: null
        },
        password: {
          status: FORM_INPUT_STATES.neutral,
          msgError: null
        },
        confirmPassword: {
          status: FORM_INPUT_STATES.neutral,
          msgError: null
        }
      },
      newUser: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
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
    var newUser = this.state.newUser
    newUser[fieldId] = value
    Joi.validate(newUser, registrationValidation, {abortEarly: false}, (err, data) => {
      var validations = this.state.validations
      for (var v in validations) {
        validations[v].status = FORM_INPUT_STATES.success
        validations[v].msgError = null
      }
      if (err) {
        err.details.map((item) => {
          if (newUser[item.path].toString().length === 0) {
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
    registration(this.state.newUser, (err, data) => {
      if (err) {
        return swal({
          type: 'error',
          title: 'Error',
          text: err.message
        })
      }

      if (data.result === 1) window.location.href = '/login'
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
                defaultValue={this.state.newUser.username}
                msgError={this.state.validations.username.msgError}
                status={this.state.validations.username.status}
                onChange={this.onInputChange}
                css={css}
                cssRootClass={css.inputTextRoot}
              />
            </div>
            <div className={this.props.css.inputCont}>
              <InputText
                summary='Email *'
                label='Email *'
                fieldId='email'
                defaultValue={this.state.newUser.email}
                msgError={this.state.validations.email.msgError}
                status={this.state.validations.email.status}
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
                defaultValue={this.state.newUser.password}
                msgError={this.state.validations.password.msgError}
                status={this.state.validations.password.status}
                onChange={this.onInputChange}
                css={css}
                cssRootClass={css.inputTextRoot}
              />
            </div>
            <div className={this.props.css.inputCont}>
              <InputText
                summary='Confirm Password *'
                label='Confirm Password *'
                fieldId='confirmPassword'
                inputType='password'
                defaultValue={this.state.newUser.confirmPassword}
                msgError={this.state.validations.confirmPassword.msgError}
                status={this.state.validations.confirmPassword.status}
                onChange={this.onInputChange}
                css={css}
                cssRootClass={css.inputTextRoot}
              />
            </div>
            <div className={this.props.css.buttonContainer}>
              <Button cssRootClass={css.signupButtonRoot} onClick={this.onSubmitForm}>Sign up</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Registration

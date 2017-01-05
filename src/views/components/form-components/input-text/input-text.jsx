/**
 * Created by AntonioGiordano on 05/10/16.
 */

import React from 'react'
import {FORM_INPUT_STATES} from '../../../../shared/misc.js'
import css from './input-text.scss'

const InputText = React.createClass({
  propTypes: {
    fieldId: React.PropTypes.string.isRequired,
    inputType: React.PropTypes.string,
    inputName: React.PropTypes.string,
    label: React.PropTypes.string,
    summary: React.PropTypes.string,
    onChange: React.PropTypes.func,
    msgError: React.PropTypes.string,
    status: React.PropTypes.string,
    defaultValue: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    css: React.PropTypes.object,
    cssRootClass: React.PropTypes.string
  },
  getDefaultProps () {
    return {
      inputType: 'text',
      inputName: null,
      label: null,
      summary: null,
      onChange: () => {},
      msgError: null,
      status: null,
      defaultValue: '',
      placeholder: '',
      css: null,
      cssRootClass: null
    }
  },
  getInitialState () {
    return {
      value: this.props.defaultValue
    }
  },
  componentWillReceiveProps (nextProps) {
    if (nextProps.defaultValue !== null) {
      this.setState({
        value: nextProps.defaultValue
      })
    }
  },
  onInputChange (e) {
    this.setState({
      value: e.target.value
    })
    this.props.onChange(this.props.fieldId, e.target.value)
  },
  getOutputClass () {
    switch (this.props.status) {
      case FORM_INPUT_STATES.success:
        return 'success'
      case FORM_INPUT_STATES.neutral:
        return 'neutral'
      case FORM_INPUT_STATES.error:
        return 'error'
      default:
        return ''
    }
  },
  getCss (className) {
    if (this.props.css && this.props.css[className]) return css[className] + ' ' + this.props.css[className]
    return css[className]
  },
  render () {
    return (
      <div className={css.inputTextRoot + ' ' + this.props.cssRootClass}>
        {
          (this.props.summary !== null)
            ? <summary title={this.props.summary}>{this.props.label}</summary>
            : null
        }
        <div className={this.getCss('inputContainer')}>
          {
            this.props.inputName !== null ?
              <input
                onChange={this.onInputChange}
                type={this.props.inputType}
                name={this.props.inputName}
                value={this.state.value}
                placeholder={this.props.placeholder}
                className={this.getCss(this.getOutputClass())}
              />
              : <input onChange={this.onInputChange}
                type={this.props.inputType}
                value={this.state.value}
                placeholder={this.props.placeholder}
                className={this.getCss(this.getOutputClass())}
                />
          }
          <output className={this.getCss(this.getOutputClass())}>
            {
              (this.props.status === FORM_INPUT_STATES.success)
                ? <i className='material-icons'>done</i>
                : null
            }
            {
              (this.props.status === FORM_INPUT_STATES.neutral)
                ? <i className='material-icons'>warning</i>
                : null
            }
            {
              (this.props.status === FORM_INPUT_STATES.error)
                ? <i className='material-icons'>clear</i>
                : null
            }
          </output>
        </div>
        <dialog>
          <span>{this.props.msgError}</span>
        </dialog>
      </div>
    )
  }
})

module.exports = InputText

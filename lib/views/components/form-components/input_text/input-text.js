'use strict';

var _misc = require('../../../../shared/misc.js');

/**
 * Created by AntonioGiordano on 05/10/16.
 */

var React = require('react');


var InputText = React.createClass({
  displayName: 'InputText',

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
    css: React.PropTypes.object
  },
  getDefaultProps: function getDefaultProps() {
    return {
      inputType: 'text',
      inputName: null,
      label: null,
      summary: null,
      onChange: function onChange() {},
      msgError: null,
      status: null,
      defaultValue: '',
      placeholder: '',
      css: require('./input-text.scss')
    };
  },
  getInitialState: function getInitialState() {
    return {
      value: this.props.defaultValue
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.defaultValue !== null) {
      this.setState({
        value: nextProps.defaultValue
      });
    }
  },
  onInputChange: function onInputChange(e) {
    this.setState({
      value: e.target.value
    });
    this.props.onChange(this.props.fieldId, e.target.value);
  },
  getOutputClass: function getOutputClass(css) {
    switch (this.props.status) {
      case _misc.FORM_INPUT_STATES.success:
        return css.success;
      case _misc.FORM_INPUT_STATES.neutral:
        return css.neutral;
      case _misc.FORM_INPUT_STATES.error:
        return css.error;
      default:
        return '';
    }
  },
  render: function render() {
    var css = this.props.css;
    return React.createElement(
      'div',
      { className: css.inputTextRoot },
      this.props.summary !== null ? React.createElement(
        'summary',
        { title: this.props.summary },
        this.props.label
      ) : null,
      React.createElement(
        'div',
        { className: css.inputContainer },
        this.props.inputName !== null ? React.createElement('input', {
          onChange: this.onInputChange,
          type: this.props.inputType,
          name: this.props.inputName,
          value: this.state.value,
          placeholder: this.props.placeholder,
          className: this.getOutputClass(css)
        }) : React.createElement('input', { onChange: this.onInputChange,
          type: this.props.inputType,
          value: this.state.value,
          placeholder: this.props.placeholder,
          className: this.getOutputClass(css)
        }),
        React.createElement(
          'output',
          { className: this.getOutputClass(css) },
          this.props.status === _misc.FORM_INPUT_STATES.success ? React.createElement(
            'i',
            { className: 'material-icons' },
            'done'
          ) : null,
          this.props.status === _misc.FORM_INPUT_STATES.neutral ? React.createElement(
            'i',
            { className: 'material-icons' },
            'warning'
          ) : null,
          this.props.status === _misc.FORM_INPUT_STATES.error ? React.createElement(
            'i',
            { className: 'material-icons' },
            'clear'
          ) : null
        )
      ),
      React.createElement(
        'dialog',
        null,
        React.createElement(
          'span',
          null,
          this.props.msgError
        )
      )
    );
  }
});

module.exports = InputText;
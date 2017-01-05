'use strict';

var _misc = require('../../../../shared/misc.js');

/**
 * Created by AntonioGiordano on 05/10/16.
 */

var React = require('react');
var DateTime = require('react-datetime');


var DateTimeInput = React.createClass({
  displayName: 'DateTimeInput',

  propTypes: {
    fieldId: React.PropTypes.string.isRequired,
    inputName: React.PropTypes.string,
    label: React.PropTypes.string,
    summary: React.PropTypes.string,
    onChange: React.PropTypes.func,
    msgError: React.PropTypes.string,
    status: React.PropTypes.string,
    defaultValue: React.PropTypes.object,
    css: React.PropTypes.object
  },
  getDefaultProps: function getDefaultProps() {
    return {
      inputName: null,
      label: null,
      summary: null,
      onChange: function onChange() {},
      msgError: null,
      status: _misc.FORM_INPUT_STATES.neutral,
      defaultValue: '',
      css: require('./datetime.scss')
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
  __getOutputClass: function __getOutputClass(css) {
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
  __onDateTimeChanged: function __onDateTimeChanged(value) {
    this.setState({
      value: value
    });
    this.props.onChange(this.props.fieldId, value);
  },
  render: function render() {
    var css = this.props.css;
    return React.createElement(
      'div',
      { className: css.root },
      this.props.label !== null ? React.createElement(
        'label',
        null,
        this.props.label
      ) : null,
      this.props.summary !== null ? React.createElement(
        'summary',
        { title: this.props.summary },
        this.props.summary
      ) : null,
      React.createElement(
        'div',
        { className: css.inputContainer },
        React.createElement(DateTime, { onChange: this.__onDateTimeChanged, defaultValue: this.state.value }),
        React.createElement(
          'output',
          { className: this.__getOutputClass(css) },
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
      this.props.status === _misc.FORM_INPUT_STATES.error && this.props.msgError !== null ? React.createElement(
        'dialog',
        { className: 'open-dialog error' },
        this.props.msgError
      ) : null
    );
  }
});

module.exports = DateTimeInput;
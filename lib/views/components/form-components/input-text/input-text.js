'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _misc = require('../../../../shared/misc.js');

var _inputText = require('./input-text.scss');

var _inputText2 = _interopRequireDefault(_inputText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputText = _react2.default.createClass({
  displayName: 'InputText',

  propTypes: {
    fieldId: _react2.default.PropTypes.string.isRequired,
    inputType: _react2.default.PropTypes.string,
    inputName: _react2.default.PropTypes.string,
    label: _react2.default.PropTypes.string,
    summary: _react2.default.PropTypes.string,
    onChange: _react2.default.PropTypes.func,
    msgError: _react2.default.PropTypes.string,
    status: _react2.default.PropTypes.string,
    defaultValue: _react2.default.PropTypes.string,
    placeholder: _react2.default.PropTypes.string,
    css: _react2.default.PropTypes.object,
    cssRootClass: _react2.default.PropTypes.string
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
      css: null,
      cssRootClass: null
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
  getOutputClass: function getOutputClass() {
    switch (this.props.status) {
      case _misc.FORM_INPUT_STATES.success:
        return 'success';
      case _misc.FORM_INPUT_STATES.neutral:
        return 'neutral';
      case _misc.FORM_INPUT_STATES.error:
        return 'error';
      default:
        return '';
    }
  },
  getCss: function getCss(className) {
    if (this.props.css && this.props.css[className]) return _inputText2.default[className] + ' ' + this.props.css[className];
    return _inputText2.default[className];
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: _inputText2.default.inputTextRoot + ' ' + this.props.cssRootClass },
      this.props.summary !== null ? _react2.default.createElement(
        'summary',
        { title: this.props.summary },
        this.props.label
      ) : null,
      _react2.default.createElement(
        'div',
        { className: this.getCss('inputContainer') },
        this.props.inputName !== null ? _react2.default.createElement('input', {
          onChange: this.onInputChange,
          type: this.props.inputType,
          name: this.props.inputName,
          value: this.state.value,
          placeholder: this.props.placeholder,
          className: this.getCss(this.getOutputClass())
        }) : _react2.default.createElement('input', { onChange: this.onInputChange,
          type: this.props.inputType,
          value: this.state.value,
          placeholder: this.props.placeholder,
          className: this.getCss(this.getOutputClass())
        }),
        _react2.default.createElement(
          'output',
          { className: this.getCss(this.getOutputClass()) },
          this.props.status === _misc.FORM_INPUT_STATES.success ? _react2.default.createElement(
            'i',
            { className: 'material-icons' },
            'done'
          ) : null,
          this.props.status === _misc.FORM_INPUT_STATES.neutral ? _react2.default.createElement(
            'i',
            { className: 'material-icons' },
            'warning'
          ) : null,
          this.props.status === _misc.FORM_INPUT_STATES.error ? _react2.default.createElement(
            'i',
            { className: 'material-icons' },
            'clear'
          ) : null
        )
      ),
      _react2.default.createElement(
        'dialog',
        null,
        _react2.default.createElement(
          'span',
          null,
          this.props.msgError
        )
      )
    );
  }
}); /**
     * Created by AntonioGiordano on 05/10/16.
     */

module.exports = InputText;
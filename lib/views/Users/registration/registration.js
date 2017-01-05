'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sweetalert = require('sweetalert');

var _sweetalert2 = _interopRequireDefault(_sweetalert);

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _inputText = require('../../components/form-components/input-text/input-text.js');

var _inputText2 = _interopRequireDefault(_inputText);

var _pageLoader = require('../../components/page-loader/page-loader.js');

var _pageLoader2 = _interopRequireDefault(_pageLoader);

var _button = require('../../components/button/button.js');

var _button2 = _interopRequireDefault(_button);

var _ajaxRequests = require('../../ajax-requests.js');

var _misc = require('../../../shared/misc.js');

var _shared = require('../../../app/User/shared.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Registration = _react2.default.createClass({
  displayName: 'Registration',

  propTypes: {
    css: _react2.default.PropTypes.object,
    lang: _react2.default.PropTypes.string
  },
  getDefaultProps: function getDefaultProps() {
    return {
      css: require('./registration.scss'),
      lang: 'en_US'
    };
  },
  getInitialState: function getInitialState() {
    return {
      isPageLoading: true,
      validations: {
        username: {
          status: _misc.FORM_INPUT_STATES.neutral,
          msgError: null
        },
        email: {
          status: _misc.FORM_INPUT_STATES.neutral,
          msgError: null
        },
        password: {
          status: _misc.FORM_INPUT_STATES.neutral,
          msgError: null
        },
        confirmPassword: {
          status: _misc.FORM_INPUT_STATES.neutral,
          msgError: null
        }
      },
      newUser: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    (0, _ajaxRequests.isLogged)(function (err, response) {
      if (err) {
        alert(err.message);
        _this.setState({
          isPageLoading: false
        });
      } else {
        if (response.result === 0) {
          _this.setState({
            isPageLoading: false
          });
        } else {
          location.href = '/';
        }
      }
    });
  },
  onInputChange: function onInputChange(fieldId, value) {
    var _this2 = this;

    var newUser = this.state.newUser;
    newUser[fieldId] = value;
    _joi2.default.validate(newUser, _shared.registrationValidation, { abortEarly: false }, function (err, data) {
      var validations = _this2.state.validations;
      for (var v in validations) {
        validations[v].status = _misc.FORM_INPUT_STATES.success;
        validations[v].msgError = null;
      }
      if (err) {
        err.details.map(function (item) {
          if (newUser[item.path].toString().length === 0) {
            validations[item.path] = {
              status: _misc.FORM_INPUT_STATES.neutral,
              msgError: null
            };
          } else {
            validations[item.path] = {
              status: _misc.FORM_INPUT_STATES.error,
              msgError: item.message
            };
          }
        });
      }
      _this2.setState({
        validations: validations
      });
    });
  },
  onSubmitForm: function onSubmitForm() {
    (0, _ajaxRequests.registration)(this.state.newUser, function (err, data) {
      if (err) {
        return (0, _sweetalert2.default)({
          type: 'error',
          title: 'Error',
          text: err.message
        });
      }

      if (data.result === 1) return location.href = '/login';
    });
  },
  render: function render() {
    var css = this.props.css;
    return _react2.default.createElement(
      'div',
      { className: this.props.css.root },
      _react2.default.createElement(_pageLoader2.default, { visible: this.state.isPageLoading }),
      _react2.default.createElement(
        'div',
        { className: this.props.css.pageContent },
        _react2.default.createElement(
          'div',
          { className: this.props.css.formContainer },
          _react2.default.createElement(
            'div',
            { className: this.props.css.inputCont },
            _react2.default.createElement(_inputText2.default, {
              summary: 'Username *',
              label: 'Username *',
              fieldId: 'username',
              defaultValue: this.state.newUser.username,
              msgError: this.state.validations.username.msgError,
              status: this.state.validations.username.status,
              onChange: this.onInputChange,
              css: css,
              cssRootClass: css.inputTextRoot
            })
          ),
          _react2.default.createElement(
            'div',
            { className: this.props.css.inputCont },
            _react2.default.createElement(_inputText2.default, {
              summary: 'Email *',
              label: 'Email *',
              fieldId: 'email',
              defaultValue: this.state.newUser.email,
              msgError: this.state.validations.email.msgError,
              status: this.state.validations.email.status,
              onChange: this.onInputChange,
              css: css,
              cssRootClass: css.inputTextRoot
            })
          ),
          _react2.default.createElement(
            'div',
            { className: this.props.css.inputCont },
            _react2.default.createElement(_inputText2.default, {
              summary: 'Password *',
              label: 'Password *',
              fieldId: 'password',
              inputType: 'password',
              defaultValue: this.state.newUser.password,
              msgError: this.state.validations.password.msgError,
              status: this.state.validations.password.status,
              onChange: this.onInputChange,
              css: css,
              cssRootClass: css.inputTextRoot
            })
          ),
          _react2.default.createElement(
            'div',
            { className: this.props.css.inputCont },
            _react2.default.createElement(_inputText2.default, {
              summary: 'Confirm Password *',
              label: 'Confirm Password *',
              fieldId: 'confirmPassword',
              inputType: 'password',
              defaultValue: this.state.newUser.confirmPassword,
              msgError: this.state.validations.confirmPassword.msgError,
              status: this.state.validations.confirmPassword.status,
              onChange: this.onInputChange,
              css: css,
              cssRootClass: css.inputTextRoot
            })
          ),
          _react2.default.createElement(
            'div',
            { className: this.props.css.buttonContainer },
            _react2.default.createElement(
              _button2.default,
              { cssRootClass: css.signupButtonRoot, onClick: this.onSubmitForm },
              'Sign up'
            )
          )
        )
      )
    );
  }
}); /**
     * Created by AntonioGiordano on 19/07/16.
     */

module.exports = Registration;
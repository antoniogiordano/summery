webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _registration = __webpack_require__(178);

	var _registration2 = _interopRequireDefault(_registration);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_reactDom2.default.render(_react2.default.createElement(_registration2.default, null), document.getElementById('main-content-wrapper')); /**
	                                                                                                                                          * Created by AntonioGiordano on 23/06/16.
	                                                                                                                                          */

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _sweetalert = __webpack_require__(179);

	var _sweetalert2 = _interopRequireDefault(_sweetalert);

	var _joi = __webpack_require__(188);

	var _joi2 = _interopRequireDefault(_joi);

	var _inputText = __webpack_require__(193);

	var _inputText2 = _interopRequireDefault(_inputText);

	var _pageLoader = __webpack_require__(196);

	var _pageLoader2 = _interopRequireDefault(_pageLoader);

	var _button = __webpack_require__(198);

	var _button2 = _interopRequireDefault(_button);

	var _ajaxRequests = __webpack_require__(200);

	var _misc = __webpack_require__(194);

	var _shared = __webpack_require__(226);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Registration = _react2.default.createClass({
	  displayName: 'Registration',

	  propTypes: {
	    css: _react2.default.PropTypes.object,
	    lang: _react2.default.PropTypes.string
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      css: __webpack_require__(227),
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

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	// SweetAlert
	// 2014-2015 (c) - Tristan Edwards
	// github.com/t4t5/sweetalert

	/*
	 * jQuery-like functions for manipulating the DOM
	 */

	var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation = __webpack_require__(180);

	/*
	 * Handy utilities
	 */

	var _extend$hexToRgb$isIE8$logStr$colorLuminance = __webpack_require__(181);

	/*
	 *  Handle sweetAlert's DOM elements
	 */

	var _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition = __webpack_require__(182);

	// Handle button events and keyboard events

	var _handleButton$handleConfirm$handleCancel = __webpack_require__(185);

	var _handleKeyDown = __webpack_require__(186);

	var _handleKeyDown2 = _interopRequireWildcard(_handleKeyDown);

	// Default values

	var _defaultParams = __webpack_require__(183);

	var _defaultParams2 = _interopRequireWildcard(_defaultParams);

	var _setParameters = __webpack_require__(187);

	var _setParameters2 = _interopRequireWildcard(_setParameters);

	/*
	 * Remember state in cases where opening and handling a modal will fiddle with it.
	 * (We also use window.previousActiveElement as a global variable)
	 */
	var previousWindowKeyDown;
	var lastFocusedButton;

	/*
	 * Global sweetAlert function
	 * (this is what the user calls)
	 */
	var sweetAlert, swal;

	exports['default'] = sweetAlert = swal = function () {
	  var customizations = arguments[0];

	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(document.body, 'stop-scrolling');
	  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.resetInput();

	  /*
	   * Use argument if defined or default value from params object otherwise.
	   * Supports the case where a default value is boolean true and should be
	   * overridden by a corresponding explicit argument which is boolean false.
	   */
	  function argumentOrDefault(key) {
	    var args = customizations;
	    return args[key] === undefined ? _defaultParams2['default'][key] : args[key];
	  }

	  if (customizations === undefined) {
	    _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert expects at least 1 attribute!');
	    return false;
	  }

	  var params = _extend$hexToRgb$isIE8$logStr$colorLuminance.extend({}, _defaultParams2['default']);

	  switch (typeof customizations) {

	    // Ex: swal("Hello", "Just testing", "info");
	    case 'string':
	      params.title = customizations;
	      params.text = arguments[1] || '';
	      params.type = arguments[2] || '';
	      break;

	    // Ex: swal({ title:"Hello", text: "Just testing", type: "info" });
	    case 'object':
	      if (customizations.title === undefined) {
	        _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Missing "title" argument!');
	        return false;
	      }

	      params.title = customizations.title;

	      for (var customName in _defaultParams2['default']) {
	        params[customName] = argumentOrDefault(customName);
	      }

	      // Show "Confirm" instead of "OK" if cancel button is visible
	      params.confirmButtonText = params.showCancelButton ? 'Confirm' : _defaultParams2['default'].confirmButtonText;
	      params.confirmButtonText = argumentOrDefault('confirmButtonText');

	      // Callback function when clicking on "OK"/"Cancel"
	      params.doneFunction = arguments[1] || null;

	      break;

	    default:
	      _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof customizations);
	      return false;

	  }

	  _setParameters2['default'](params);
	  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.fixVerticalPosition();
	  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.openModal(arguments[1]);

	  // Modal interactions
	  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

	  /*
	   * Make sure all modal buttons respond to all events
	   */
	  var $buttons = modal.querySelectorAll('button');
	  var buttonEvents = ['onclick', 'onmouseover', 'onmouseout', 'onmousedown', 'onmouseup', 'onfocus'];
	  var onButtonEvent = function onButtonEvent(e) {
	    return _handleButton$handleConfirm$handleCancel.handleButton(e, params, modal);
	  };

	  for (var btnIndex = 0; btnIndex < $buttons.length; btnIndex++) {
	    for (var evtIndex = 0; evtIndex < buttonEvents.length; evtIndex++) {
	      var btnEvt = buttonEvents[evtIndex];
	      $buttons[btnIndex][btnEvt] = onButtonEvent;
	    }
	  }

	  // Clicking outside the modal dismisses it (if allowed by user)
	  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay().onclick = onButtonEvent;

	  previousWindowKeyDown = window.onkeydown;

	  var onKeyEvent = function onKeyEvent(e) {
	    return _handleKeyDown2['default'](e, params, modal);
	  };
	  window.onkeydown = onKeyEvent;

	  window.onfocus = function () {
	    // When the user has focused away and focused back from the whole window.
	    setTimeout(function () {
	      // Put in a timeout to jump out of the event sequence.
	      // Calling focus() in the event sequence confuses things.
	      if (lastFocusedButton !== undefined) {
	        lastFocusedButton.focus();
	        lastFocusedButton = undefined;
	      }
	    }, 0);
	  };

	  // Show alert with enabled buttons always
	  swal.enableButtons();
	};

	/*
	 * Set default params for each popup
	 * @param {Object} userParams
	 */
	sweetAlert.setDefaults = swal.setDefaults = function (userParams) {
	  if (!userParams) {
	    throw new Error('userParams is required');
	  }
	  if (typeof userParams !== 'object') {
	    throw new Error('userParams has to be a object');
	  }

	  _extend$hexToRgb$isIE8$logStr$colorLuminance.extend(_defaultParams2['default'], userParams);
	};

	/*
	 * Animation when closing modal
	 */
	sweetAlert.close = swal.close = function () {
	  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(_sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay(), 5);
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(modal, 5);
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'showSweetAlert');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(modal, 'hideSweetAlert');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'visible');

	  /*
	   * Reset icon animations
	   */
	  var $successIcon = modal.querySelector('.sa-icon.sa-success');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon, 'animate');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-tip'), 'animateSuccessTip');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-long'), 'animateSuccessLong');

	  var $errorIcon = modal.querySelector('.sa-icon.sa-error');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'animateErrorIcon');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon.querySelector('.sa-x-mark'), 'animateXMark');

	  var $warningIcon = modal.querySelector('.sa-icon.sa-warning');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon, 'pulseWarning');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-body'), 'pulseWarningIns');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-dot'), 'pulseWarningIns');

	  // Reset custom class (delay so that UI changes aren't visible)
	  setTimeout(function () {
	    var customClass = modal.getAttribute('data-custom-class');
	    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, customClass);
	  }, 300);

	  // Make page scrollable again
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(document.body, 'stop-scrolling');

	  // Reset the page to its previous state
	  window.onkeydown = previousWindowKeyDown;
	  if (window.previousActiveElement) {
	    window.previousActiveElement.focus();
	  }
	  lastFocusedButton = undefined;
	  clearTimeout(modal.timeout);

	  return true;
	};

	/*
	 * Validation of the input field is done by user
	 * If something is wrong => call showInputError with errorMessage
	 */
	sweetAlert.showInputError = swal.showInputError = function (errorMessage) {
	  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

	  var $errorIcon = modal.querySelector('.sa-input-error');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorIcon, 'show');

	  var $errorContainer = modal.querySelector('.sa-error-container');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorContainer, 'show');

	  $errorContainer.querySelector('p').innerHTML = errorMessage;

	  setTimeout(function () {
	    sweetAlert.enableButtons();
	  }, 1);

	  modal.querySelector('input').focus();
	};

	/*
	 * Reset input error DOM elements
	 */
	sweetAlert.resetInputError = swal.resetInputError = function (event) {
	  // If press enter => ignore
	  if (event && event.keyCode === 13) {
	    return false;
	  }

	  var $modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

	  var $errorIcon = $modal.querySelector('.sa-input-error');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'show');

	  var $errorContainer = $modal.querySelector('.sa-error-container');
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorContainer, 'show');
	};

	/*
	 * Disable confirm and cancel buttons
	 */
	sweetAlert.disableButtons = swal.disableButtons = function (event) {
	  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
	  var $confirmButton = modal.querySelector('button.confirm');
	  var $cancelButton = modal.querySelector('button.cancel');
	  $confirmButton.disabled = true;
	  $cancelButton.disabled = true;
	};

	/*
	 * Enable confirm and cancel buttons
	 */
	sweetAlert.enableButtons = swal.enableButtons = function (event) {
	  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
	  var $confirmButton = modal.querySelector('button.confirm');
	  var $cancelButton = modal.querySelector('button.cancel');
	  $confirmButton.disabled = false;
	  $cancelButton.disabled = false;
	};

	if (typeof window !== 'undefined') {
	  // The 'handle-click' module requires
	  // that 'sweetAlert' was set as global.
	  window.sweetAlert = window.swal = sweetAlert;
	} else {
	  _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert is a frontend module!');
	}
	module.exports = exports['default'];

/***/ },
/* 180 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var hasClass = function hasClass(elem, className) {
	  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
	};

	var addClass = function addClass(elem, className) {
	  if (!hasClass(elem, className)) {
	    elem.className += ' ' + className;
	  }
	};

	var removeClass = function removeClass(elem, className) {
	  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
	  if (hasClass(elem, className)) {
	    while (newClass.indexOf(' ' + className + ' ') >= 0) {
	      newClass = newClass.replace(' ' + className + ' ', ' ');
	    }
	    elem.className = newClass.replace(/^\s+|\s+$/g, '');
	  }
	};

	var escapeHtml = function escapeHtml(str) {
	  var div = document.createElement('div');
	  div.appendChild(document.createTextNode(str));
	  return div.innerHTML;
	};

	var _show = function _show(elem) {
	  elem.style.opacity = '';
	  elem.style.display = 'block';
	};

	var show = function show(elems) {
	  if (elems && !elems.length) {
	    return _show(elems);
	  }
	  for (var i = 0; i < elems.length; ++i) {
	    _show(elems[i]);
	  }
	};

	var _hide = function _hide(elem) {
	  elem.style.opacity = '';
	  elem.style.display = 'none';
	};

	var hide = function hide(elems) {
	  if (elems && !elems.length) {
	    return _hide(elems);
	  }
	  for (var i = 0; i < elems.length; ++i) {
	    _hide(elems[i]);
	  }
	};

	var isDescendant = function isDescendant(parent, child) {
	  var node = child.parentNode;
	  while (node !== null) {
	    if (node === parent) {
	      return true;
	    }
	    node = node.parentNode;
	  }
	  return false;
	};

	var getTopMargin = function getTopMargin(elem) {
	  elem.style.left = '-9999px';
	  elem.style.display = 'block';

	  var height = elem.clientHeight,
	      padding;
	  if (typeof getComputedStyle !== 'undefined') {
	    // IE 8
	    padding = parseInt(getComputedStyle(elem).getPropertyValue('padding-top'), 10);
	  } else {
	    padding = parseInt(elem.currentStyle.padding);
	  }

	  elem.style.left = '';
	  elem.style.display = 'none';
	  return '-' + parseInt((height + padding) / 2) + 'px';
	};

	var fadeIn = function fadeIn(elem, interval) {
	  if (+elem.style.opacity < 1) {
	    interval = interval || 16;
	    elem.style.opacity = 0;
	    elem.style.display = 'block';
	    var last = +new Date();
	    var tick = (function (_tick) {
	      function tick() {
	        return _tick.apply(this, arguments);
	      }

	      tick.toString = function () {
	        return _tick.toString();
	      };

	      return tick;
	    })(function () {
	      elem.style.opacity = +elem.style.opacity + (new Date() - last) / 100;
	      last = +new Date();

	      if (+elem.style.opacity < 1) {
	        setTimeout(tick, interval);
	      }
	    });
	    tick();
	  }
	  elem.style.display = 'block'; //fallback IE8
	};

	var fadeOut = function fadeOut(elem, interval) {
	  interval = interval || 16;
	  elem.style.opacity = 1;
	  var last = +new Date();
	  var tick = (function (_tick2) {
	    function tick() {
	      return _tick2.apply(this, arguments);
	    }

	    tick.toString = function () {
	      return _tick2.toString();
	    };

	    return tick;
	  })(function () {
	    elem.style.opacity = +elem.style.opacity - (new Date() - last) / 100;
	    last = +new Date();

	    if (+elem.style.opacity > 0) {
	      setTimeout(tick, interval);
	    } else {
	      elem.style.display = 'none';
	    }
	  });
	  tick();
	};

	var fireClick = function fireClick(node) {
	  // Taken from http://www.nonobtrusive.com/2011/11/29/programatically-fire-crossbrowser-click-event-with-javascript/
	  // Then fixed for today's Chrome browser.
	  if (typeof MouseEvent === 'function') {
	    // Up-to-date approach
	    var mevt = new MouseEvent('click', {
	      view: window,
	      bubbles: false,
	      cancelable: true
	    });
	    node.dispatchEvent(mevt);
	  } else if (document.createEvent) {
	    // Fallback
	    var evt = document.createEvent('MouseEvents');
	    evt.initEvent('click', false, false);
	    node.dispatchEvent(evt);
	  } else if (document.createEventObject) {
	    node.fireEvent('onclick');
	  } else if (typeof node.onclick === 'function') {
	    node.onclick();
	  }
	};

	var stopEventPropagation = function stopEventPropagation(e) {
	  // In particular, make sure the space bar doesn't scroll the main window.
	  if (typeof e.stopPropagation === 'function') {
	    e.stopPropagation();
	    e.preventDefault();
	  } else if (window.event && window.event.hasOwnProperty('cancelBubble')) {
	    window.event.cancelBubble = true;
	  }
	};

	exports.hasClass = hasClass;
	exports.addClass = addClass;
	exports.removeClass = removeClass;
	exports.escapeHtml = escapeHtml;
	exports._show = _show;
	exports.show = show;
	exports._hide = _hide;
	exports.hide = hide;
	exports.isDescendant = isDescendant;
	exports.getTopMargin = getTopMargin;
	exports.fadeIn = fadeIn;
	exports.fadeOut = fadeOut;
	exports.fireClick = fireClick;
	exports.stopEventPropagation = stopEventPropagation;

/***/ },
/* 181 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	/*
	 * Allow user to pass their own params
	 */
	var extend = function extend(a, b) {
	  for (var key in b) {
	    if (b.hasOwnProperty(key)) {
	      a[key] = b[key];
	    }
	  }
	  return a;
	};

	/*
	 * Convert HEX codes to RGB values (#000000 -> rgb(0,0,0))
	 */
	var hexToRgb = function hexToRgb(hex) {
	  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	  return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : null;
	};

	/*
	 * Check if the user is using Internet Explorer 8 (for fallbacks)
	 */
	var isIE8 = function isIE8() {
	  return window.attachEvent && !window.addEventListener;
	};

	/*
	 * IE compatible logging for developers
	 */
	var logStr = function logStr(string) {
	  if (window.console) {
	    // IE...
	    window.console.log('SweetAlert: ' + string);
	  }
	};

	/*
	 * Set hover, active and focus-states for buttons 
	 * (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
	 */
	var colorLuminance = function colorLuminance(hex, lum) {
	  // Validate hex string
	  hex = String(hex).replace(/[^0-9a-f]/gi, '');
	  if (hex.length < 6) {
	    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	  }
	  lum = lum || 0;

	  // Convert to decimal and change luminosity
	  var rgb = '#';
	  var c;
	  var i;

	  for (i = 0; i < 3; i++) {
	    c = parseInt(hex.substr(i * 2, 2), 16);
	    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
	    rgb += ('00' + c).substr(c.length);
	  }

	  return rgb;
	};

	exports.extend = extend;
	exports.hexToRgb = hexToRgb;
	exports.isIE8 = isIE8;
	exports.logStr = logStr;
	exports.colorLuminance = colorLuminance;

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _hexToRgb = __webpack_require__(181);

	var _removeClass$getTopMargin$fadeIn$show$addClass = __webpack_require__(180);

	var _defaultParams = __webpack_require__(183);

	var _defaultParams2 = _interopRequireWildcard(_defaultParams);

	/*
	 * Add modal + overlay to DOM
	 */

	var _injectedHTML = __webpack_require__(184);

	var _injectedHTML2 = _interopRequireWildcard(_injectedHTML);

	var modalClass = '.sweet-alert';
	var overlayClass = '.sweet-overlay';

	var sweetAlertInitialize = function sweetAlertInitialize() {
	  var sweetWrap = document.createElement('div');
	  sweetWrap.innerHTML = _injectedHTML2['default'];

	  // Append elements to body
	  while (sweetWrap.firstChild) {
	    document.body.appendChild(sweetWrap.firstChild);
	  }
	};

	/*
	 * Get DOM element of modal
	 */
	var getModal = (function (_getModal) {
	  function getModal() {
	    return _getModal.apply(this, arguments);
	  }

	  getModal.toString = function () {
	    return _getModal.toString();
	  };

	  return getModal;
	})(function () {
	  var $modal = document.querySelector(modalClass);

	  if (!$modal) {
	    sweetAlertInitialize();
	    $modal = getModal();
	  }

	  return $modal;
	});

	/*
	 * Get DOM element of input (in modal)
	 */
	var getInput = function getInput() {
	  var $modal = getModal();
	  if ($modal) {
	    return $modal.querySelector('input');
	  }
	};

	/*
	 * Get DOM element of overlay
	 */
	var getOverlay = function getOverlay() {
	  return document.querySelector(overlayClass);
	};

	/*
	 * Add box-shadow style to button (depending on its chosen bg-color)
	 */
	var setFocusStyle = function setFocusStyle($button, bgColor) {
	  var rgbColor = _hexToRgb.hexToRgb(bgColor);
	  $button.style.boxShadow = '0 0 2px rgba(' + rgbColor + ', 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)';
	};

	/*
	 * Animation when opening modal
	 */
	var openModal = function openModal(callback) {
	  var $modal = getModal();
	  _removeClass$getTopMargin$fadeIn$show$addClass.fadeIn(getOverlay(), 10);
	  _removeClass$getTopMargin$fadeIn$show$addClass.show($modal);
	  _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'showSweetAlert');
	  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'hideSweetAlert');

	  window.previousActiveElement = document.activeElement;
	  var $okButton = $modal.querySelector('button.confirm');
	  $okButton.focus();

	  setTimeout(function () {
	    _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'visible');
	  }, 500);

	  var timer = $modal.getAttribute('data-timer');

	  if (timer !== 'null' && timer !== '') {
	    var timerCallback = callback;
	    $modal.timeout = setTimeout(function () {
	      var doneFunctionExists = (timerCallback || null) && $modal.getAttribute('data-has-done-function') === 'true';
	      if (doneFunctionExists) {
	        timerCallback(null);
	      } else {
	        sweetAlert.close();
	      }
	    }, timer);
	  }
	};

	/*
	 * Reset the styling of the input
	 * (for example if errors have been shown)
	 */
	var resetInput = function resetInput() {
	  var $modal = getModal();
	  var $input = getInput();

	  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'show-input');
	  $input.value = _defaultParams2['default'].inputValue;
	  $input.setAttribute('type', _defaultParams2['default'].inputType);
	  $input.setAttribute('placeholder', _defaultParams2['default'].inputPlaceholder);

	  resetInputError();
	};

	var resetInputError = function resetInputError(event) {
	  // If press enter => ignore
	  if (event && event.keyCode === 13) {
	    return false;
	  }

	  var $modal = getModal();

	  var $errorIcon = $modal.querySelector('.sa-input-error');
	  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorIcon, 'show');

	  var $errorContainer = $modal.querySelector('.sa-error-container');
	  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorContainer, 'show');
	};

	/*
	 * Set "margin-top"-property on modal based on its computed height
	 */
	var fixVerticalPosition = function fixVerticalPosition() {
	  var $modal = getModal();
	  $modal.style.marginTop = _removeClass$getTopMargin$fadeIn$show$addClass.getTopMargin(getModal());
	};

	exports.sweetAlertInitialize = sweetAlertInitialize;
	exports.getModal = getModal;
	exports.getOverlay = getOverlay;
	exports.getInput = getInput;
	exports.setFocusStyle = setFocusStyle;
	exports.openModal = openModal;
	exports.resetInput = resetInput;
	exports.resetInputError = resetInputError;
	exports.fixVerticalPosition = fixVerticalPosition;

/***/ },
/* 183 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var defaultParams = {
	  title: '',
	  text: '',
	  type: null,
	  allowOutsideClick: false,
	  showConfirmButton: true,
	  showCancelButton: false,
	  closeOnConfirm: true,
	  closeOnCancel: true,
	  confirmButtonText: 'OK',
	  confirmButtonColor: '#8CD4F5',
	  cancelButtonText: 'Cancel',
	  imageUrl: null,
	  imageSize: null,
	  timer: null,
	  customClass: '',
	  html: false,
	  animation: true,
	  allowEscapeKey: true,
	  inputType: 'text',
	  inputPlaceholder: '',
	  inputValue: '',
	  showLoaderOnConfirm: false
	};

	exports['default'] = defaultParams;
	module.exports = exports['default'];

/***/ },
/* 184 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var injectedHTML =

	// Dark overlay
	"<div class=\"sweet-overlay\" tabIndex=\"-1\"></div>" +

	// Modal
	"<div class=\"sweet-alert\">" +

	// Error icon
	"<div class=\"sa-icon sa-error\">\n      <span class=\"sa-x-mark\">\n        <span class=\"sa-line sa-left\"></span>\n        <span class=\"sa-line sa-right\"></span>\n      </span>\n    </div>" +

	// Warning icon
	"<div class=\"sa-icon sa-warning\">\n      <span class=\"sa-body\"></span>\n      <span class=\"sa-dot\"></span>\n    </div>" +

	// Info icon
	"<div class=\"sa-icon sa-info\"></div>" +

	// Success icon
	"<div class=\"sa-icon sa-success\">\n      <span class=\"sa-line sa-tip\"></span>\n      <span class=\"sa-line sa-long\"></span>\n\n      <div class=\"sa-placeholder\"></div>\n      <div class=\"sa-fix\"></div>\n    </div>" + "<div class=\"sa-icon sa-custom\"></div>" +

	// Title, text and input
	"<h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type=\"text\" tabIndex=\"3\" />\n      <div class=\"sa-input-error\"></div>\n    </fieldset>" +

	// Input errors
	"<div class=\"sa-error-container\">\n      <div class=\"icon\">!</div>\n      <p>Not valid!</p>\n    </div>" +

	// Cancel and confirm buttons
	"<div class=\"sa-button-container\">\n      <button class=\"cancel\" tabIndex=\"2\">Cancel</button>\n      <div class=\"sa-confirm-button-container\">\n        <button class=\"confirm\" tabIndex=\"1\">OK</button>" +

	// Loading animation
	"<div class=\"la-ball-fall\">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div>" +

	// End of modal
	"</div>";

	exports["default"] = injectedHTML;
	module.exports = exports["default"];

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _colorLuminance = __webpack_require__(181);

	var _getModal = __webpack_require__(182);

	var _hasClass$isDescendant = __webpack_require__(180);

	/*
	 * User clicked on "Confirm"/"OK" or "Cancel"
	 */
	var handleButton = function handleButton(event, params, modal) {
	  var e = event || window.event;
	  var target = e.target || e.srcElement;

	  var targetedConfirm = target.className.indexOf('confirm') !== -1;
	  var targetedOverlay = target.className.indexOf('sweet-overlay') !== -1;
	  var modalIsVisible = _hasClass$isDescendant.hasClass(modal, 'visible');
	  var doneFunctionExists = params.doneFunction && modal.getAttribute('data-has-done-function') === 'true';

	  // Since the user can change the background-color of the confirm button programmatically,
	  // we must calculate what the color should be on hover/active
	  var normalColor, hoverColor, activeColor;
	  if (targetedConfirm && params.confirmButtonColor) {
	    normalColor = params.confirmButtonColor;
	    hoverColor = _colorLuminance.colorLuminance(normalColor, -0.04);
	    activeColor = _colorLuminance.colorLuminance(normalColor, -0.14);
	  }

	  function shouldSetConfirmButtonColor(color) {
	    if (targetedConfirm && params.confirmButtonColor) {
	      target.style.backgroundColor = color;
	    }
	  }

	  switch (e.type) {
	    case 'mouseover':
	      shouldSetConfirmButtonColor(hoverColor);
	      break;

	    case 'mouseout':
	      shouldSetConfirmButtonColor(normalColor);
	      break;

	    case 'mousedown':
	      shouldSetConfirmButtonColor(activeColor);
	      break;

	    case 'mouseup':
	      shouldSetConfirmButtonColor(hoverColor);
	      break;

	    case 'focus':
	      var $confirmButton = modal.querySelector('button.confirm');
	      var $cancelButton = modal.querySelector('button.cancel');

	      if (targetedConfirm) {
	        $cancelButton.style.boxShadow = 'none';
	      } else {
	        $confirmButton.style.boxShadow = 'none';
	      }
	      break;

	    case 'click':
	      var clickedOnModal = modal === target;
	      var clickedOnModalChild = _hasClass$isDescendant.isDescendant(modal, target);

	      // Ignore click outside if allowOutsideClick is false
	      if (!clickedOnModal && !clickedOnModalChild && modalIsVisible && !params.allowOutsideClick) {
	        break;
	      }

	      if (targetedConfirm && doneFunctionExists && modalIsVisible) {
	        handleConfirm(modal, params);
	      } else if (doneFunctionExists && modalIsVisible || targetedOverlay) {
	        handleCancel(modal, params);
	      } else if (_hasClass$isDescendant.isDescendant(modal, target) && target.tagName === 'BUTTON') {
	        sweetAlert.close();
	      }
	      break;
	  }
	};

	/*
	 *  User clicked on "Confirm"/"OK"
	 */
	var handleConfirm = function handleConfirm(modal, params) {
	  var callbackValue = true;

	  if (_hasClass$isDescendant.hasClass(modal, 'show-input')) {
	    callbackValue = modal.querySelector('input').value;

	    if (!callbackValue) {
	      callbackValue = '';
	    }
	  }

	  params.doneFunction(callbackValue);

	  if (params.closeOnConfirm) {
	    sweetAlert.close();
	  }
	  // Disable cancel and confirm button if the parameter is true
	  if (params.showLoaderOnConfirm) {
	    sweetAlert.disableButtons();
	  }
	};

	/*
	 *  User clicked on "Cancel"
	 */
	var handleCancel = function handleCancel(modal, params) {
	  // Check if callback function expects a parameter (to track cancel actions)
	  var functionAsStr = String(params.doneFunction).replace(/\s/g, '');
	  var functionHandlesCancel = functionAsStr.substring(0, 9) === 'function(' && functionAsStr.substring(9, 10) !== ')';

	  if (functionHandlesCancel) {
	    params.doneFunction(false);
	  }

	  if (params.closeOnCancel) {
	    sweetAlert.close();
	  }
	};

	exports['default'] = {
	  handleButton: handleButton,
	  handleConfirm: handleConfirm,
	  handleCancel: handleCancel
	};
	module.exports = exports['default'];

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _stopEventPropagation$fireClick = __webpack_require__(180);

	var _setFocusStyle = __webpack_require__(182);

	var handleKeyDown = function handleKeyDown(event, params, modal) {
	  var e = event || window.event;
	  var keyCode = e.keyCode || e.which;

	  var $okButton = modal.querySelector('button.confirm');
	  var $cancelButton = modal.querySelector('button.cancel');
	  var $modalButtons = modal.querySelectorAll('button[tabindex]');

	  if ([9, 13, 32, 27].indexOf(keyCode) === -1) {
	    // Don't do work on keys we don't care about.
	    return;
	  }

	  var $targetElement = e.target || e.srcElement;

	  var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
	  for (var i = 0; i < $modalButtons.length; i++) {
	    if ($targetElement === $modalButtons[i]) {
	      btnIndex = i;
	      break;
	    }
	  }

	  if (keyCode === 9) {
	    // TAB
	    if (btnIndex === -1) {
	      // No button focused. Jump to the confirm button.
	      $targetElement = $okButton;
	    } else {
	      // Cycle to the next button
	      if (btnIndex === $modalButtons.length - 1) {
	        $targetElement = $modalButtons[0];
	      } else {
	        $targetElement = $modalButtons[btnIndex + 1];
	      }
	    }

	    _stopEventPropagation$fireClick.stopEventPropagation(e);
	    $targetElement.focus();

	    if (params.confirmButtonColor) {
	      _setFocusStyle.setFocusStyle($targetElement, params.confirmButtonColor);
	    }
	  } else {
	    if (keyCode === 13) {
	      if ($targetElement.tagName === 'INPUT') {
	        $targetElement = $okButton;
	        $okButton.focus();
	      }

	      if (btnIndex === -1) {
	        // ENTER/SPACE clicked outside of a button.
	        $targetElement = $okButton;
	      } else {
	        // Do nothing - let the browser handle it.
	        $targetElement = undefined;
	      }
	    } else if (keyCode === 27 && params.allowEscapeKey === true) {
	      $targetElement = $cancelButton;
	      _stopEventPropagation$fireClick.fireClick($targetElement, e);
	    } else {
	      // Fallback - let the browser handle it.
	      $targetElement = undefined;
	    }
	  }
	};

	exports['default'] = handleKeyDown;
	module.exports = exports['default'];

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _isIE8 = __webpack_require__(181);

	var _getModal$getInput$setFocusStyle = __webpack_require__(182);

	var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide = __webpack_require__(180);

	var alertTypes = ['error', 'warning', 'info', 'success', 'input', 'prompt'];

	/*
	 * Set type, text and actions on modal
	 */
	var setParameters = function setParameters(params) {
	  var modal = _getModal$getInput$setFocusStyle.getModal();

	  var $title = modal.querySelector('h2');
	  var $text = modal.querySelector('p');
	  var $cancelBtn = modal.querySelector('button.cancel');
	  var $confirmBtn = modal.querySelector('button.confirm');

	  /*
	   * Title
	   */
	  $title.innerHTML = params.html ? params.title : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.title).split('\n').join('<br>');

	  /*
	   * Text
	   */
	  $text.innerHTML = params.html ? params.text : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.text || '').split('\n').join('<br>');
	  if (params.text) _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($text);

	  /*
	   * Custom class
	   */
	  if (params.customClass) {
	    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, params.customClass);
	    modal.setAttribute('data-custom-class', params.customClass);
	  } else {
	    // Find previously set classes and remove them
	    var customClass = modal.getAttribute('data-custom-class');
	    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.removeClass(modal, customClass);
	    modal.setAttribute('data-custom-class', '');
	  }

	  /*
	   * Icon
	   */
	  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide(modal.querySelectorAll('.sa-icon'));

	  if (params.type && !_isIE8.isIE8()) {
	    var _ret = (function () {

	      var validType = false;

	      for (var i = 0; i < alertTypes.length; i++) {
	        if (params.type === alertTypes[i]) {
	          validType = true;
	          break;
	        }
	      }

	      if (!validType) {
	        logStr('Unknown alert type: ' + params.type);
	        return {
	          v: false
	        };
	      }

	      var typesWithIcons = ['success', 'error', 'warning', 'info'];
	      var $icon = undefined;

	      if (typesWithIcons.indexOf(params.type) !== -1) {
	        $icon = modal.querySelector('.sa-icon.' + 'sa-' + params.type);
	        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($icon);
	      }

	      var $input = _getModal$getInput$setFocusStyle.getInput();

	      // Animate icon
	      switch (params.type) {

	        case 'success':
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animate');
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-tip'), 'animateSuccessTip');
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-long'), 'animateSuccessLong');
	          break;

	        case 'error':
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animateErrorIcon');
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-x-mark'), 'animateXMark');
	          break;

	        case 'warning':
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'pulseWarning');
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-body'), 'pulseWarningIns');
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-dot'), 'pulseWarningIns');
	          break;

	        case 'input':
	        case 'prompt':
	          $input.setAttribute('type', params.inputType);
	          $input.value = params.inputValue;
	          $input.setAttribute('placeholder', params.inputPlaceholder);
	          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, 'show-input');
	          setTimeout(function () {
	            $input.focus();
	            $input.addEventListener('keyup', swal.resetInputError);
	          }, 400);
	          break;
	      }
	    })();

	    if (typeof _ret === 'object') {
	      return _ret.v;
	    }
	  }

	  /*
	   * Custom image
	   */
	  if (params.imageUrl) {
	    var $customIcon = modal.querySelector('.sa-icon.sa-custom');

	    $customIcon.style.backgroundImage = 'url(' + params.imageUrl + ')';
	    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($customIcon);

	    var _imgWidth = 80;
	    var _imgHeight = 80;

	    if (params.imageSize) {
	      var dimensions = params.imageSize.toString().split('x');
	      var imgWidth = dimensions[0];
	      var imgHeight = dimensions[1];

	      if (!imgWidth || !imgHeight) {
	        logStr('Parameter imageSize expects value with format WIDTHxHEIGHT, got ' + params.imageSize);
	      } else {
	        _imgWidth = imgWidth;
	        _imgHeight = imgHeight;
	      }
	    }

	    $customIcon.setAttribute('style', $customIcon.getAttribute('style') + 'width:' + _imgWidth + 'px; height:' + _imgHeight + 'px');
	  }

	  /*
	   * Show cancel button?
	   */
	  modal.setAttribute('data-has-cancel-button', params.showCancelButton);
	  if (params.showCancelButton) {
	    $cancelBtn.style.display = 'inline-block';
	  } else {
	    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($cancelBtn);
	  }

	  /*
	   * Show confirm button?
	   */
	  modal.setAttribute('data-has-confirm-button', params.showConfirmButton);
	  if (params.showConfirmButton) {
	    $confirmBtn.style.display = 'inline-block';
	  } else {
	    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($confirmBtn);
	  }

	  /*
	   * Custom text on cancel/confirm buttons
	   */
	  if (params.cancelButtonText) {
	    $cancelBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.cancelButtonText);
	  }
	  if (params.confirmButtonText) {
	    $confirmBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.confirmButtonText);
	  }

	  /*
	   * Custom color on confirm button
	   */
	  if (params.confirmButtonColor) {
	    // Set confirm button to selected background color
	    $confirmBtn.style.backgroundColor = params.confirmButtonColor;

	    // Set the confirm button color to the loading ring
	    $confirmBtn.style.borderLeftColor = params.confirmLoadingButtonColor;
	    $confirmBtn.style.borderRightColor = params.confirmLoadingButtonColor;

	    // Set box-shadow to default focused button
	    _getModal$getInput$setFocusStyle.setFocusStyle($confirmBtn, params.confirmButtonColor);
	  }

	  /*
	   * Allow outside click
	   */
	  modal.setAttribute('data-allow-outside-click', params.allowOutsideClick);

	  /*
	   * Callback function
	   */
	  var hasDoneFunction = params.doneFunction ? true : false;
	  modal.setAttribute('data-has-done-function', hasDoneFunction);

	  /*
	   * Animation
	   */
	  if (!params.animation) {
	    modal.setAttribute('data-animation', 'none');
	  } else if (typeof params.animation === 'string') {
	    modal.setAttribute('data-animation', params.animation); // Custom animation
	  } else {
	    modal.setAttribute('data-animation', 'pop');
	  }

	  /*
	   * Timer
	   */
	  modal.setAttribute('data-timer', params.timer);
	};

	exports['default'] = setParameters;
	module.exports = exports['default'];

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Buffer) {(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define("Joi", [], factory);
		else if(typeof exports === 'object')
			exports["Joi"] = factory();
		else
			root["Joi"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};

	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {

	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;

	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};

	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;

	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}


	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;

	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;

	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";

	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		var Joi = __webpack_require__(1);

		module.exports = Joi;

	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

		function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

		var Hoek = __webpack_require__(2);
		var Any = __webpack_require__(14);
		var Cast = __webpack_require__(19);
		var Errors = __webpack_require__(16);
		var Lazy = __webpack_require__(32);
		var Ref = __webpack_require__(15);

		// Declare internals

		var internals = {
		    alternatives: __webpack_require__(28),
		    array: __webpack_require__(33),
		    boolean: __webpack_require__(27),
		    binary: __webpack_require__(34),
		    date: __webpack_require__(20),
		    number: __webpack_require__(26),
		    object: __webpack_require__(29),
		    string: __webpack_require__(21)
		};

		internals.root = function () {

		    var any = new Any();

		    var root = any.clone();
		    root.any = function () {

		        Hoek.assert(arguments.length === 0, 'Joi.any() does not allow arguments.');

		        return any;
		    };

		    root.alternatives = root.alt = function () {

		        return arguments.length ? internals.alternatives.try.apply(internals.alternatives, arguments) : internals.alternatives;
		    };

		    root.array = function () {

		        Hoek.assert(arguments.length === 0, 'Joi.array() does not allow arguments.');

		        return internals.array;
		    };

		    root.boolean = root.bool = function () {

		        Hoek.assert(arguments.length === 0, 'Joi.boolean() does not allow arguments.');

		        return internals.boolean;
		    };

		    root.binary = function () {

		        Hoek.assert(arguments.length === 0, 'Joi.binary() does not allow arguments.');

		        return internals.binary;
		    };

		    root.date = function () {

		        Hoek.assert(arguments.length === 0, 'Joi.date() does not allow arguments.');

		        return internals.date;
		    };

		    root.func = function () {

		        Hoek.assert(arguments.length === 0, 'Joi.func() does not allow arguments.');

		        return internals.object._func();
		    };

		    root.number = function () {

		        Hoek.assert(arguments.length === 0, 'Joi.number() does not allow arguments.');

		        return internals.number;
		    };

		    root.object = function () {

		        return arguments.length ? internals.object.keys.apply(internals.object, arguments) : internals.object;
		    };

		    root.string = function () {

		        Hoek.assert(arguments.length === 0, 'Joi.string() does not allow arguments.');

		        return internals.string;
		    };

		    root.ref = function () {

		        return Ref.create.apply(null, arguments);
		    };

		    root.isRef = function (ref) {

		        return Ref.isRef(ref);
		    };

		    root.validate = function (value /*, [schema], [options], callback */) {

		        var last = arguments[arguments.length - 1];
		        var callback = typeof last === 'function' ? last : null;

		        var count = arguments.length - (callback ? 1 : 0);
		        if (count === 1) {
		            return any.validate(value, callback);
		        }

		        var options = count === 3 ? arguments[2] : {};
		        var schema = root.compile(arguments[1]);

		        return schema._validateWithOptions(value, options, callback);
		    };

		    root.describe = function () {

		        var schema = arguments.length ? root.compile(arguments[0]) : any;
		        return schema.describe();
		    };

		    root.compile = function (schema) {

		        try {
		            return Cast.schema(schema);
		        } catch (err) {
		            if (err.hasOwnProperty('path')) {
		                err.message = err.message + '(' + err.path + ')';
		            }
		            throw err;
		        }
		    };

		    root.assert = function (value, schema, message) {

		        root.attempt(value, schema, message);
		    };

		    root.attempt = function (value, schema, message) {

		        var result = root.validate(value, schema);
		        var error = result.error;
		        if (error) {
		            if (!message) {
		                error.message = error.annotate();
		                throw error;
		            }

		            if (!(message instanceof Error)) {
		                error.message = message + ' ' + error.annotate();
		                throw error;
		            }

		            throw message;
		        }

		        return result.value;
		    };

		    root.reach = function (schema, path) {

		        Hoek.assert(schema && schema instanceof Any, 'you must provide a joi schema');
		        Hoek.assert(typeof path === 'string', 'path must be a string');

		        if (path === '') {
		            return schema;
		        }

		        var parts = path.split('.');
		        var children = schema._inner.children;
		        if (!children) {
		            return;
		        }

		        var key = parts[0];
		        for (var i = 0; i < children.length; ++i) {
		            var child = children[i];
		            if (child.key === key) {
		                return this.reach(child.schema, path.substr(key.length + 1));
		            }
		        }
		    };

		    root.lazy = function (fn) {

		        return Lazy.set(fn);
		    };

		    root.extend = function () {
		        var _this = this;

		        var extensions = Hoek.flatten(Array.prototype.slice.call(arguments));
		        Hoek.assert(extensions.length > 0, 'You need to provide at least one extension');

		        this.assert(extensions, root.extensionsSchema);

		        var joi = Object.create(this);

		        var _loop = function _loop(i) {
		            var extension = extensions[i];
		            var base = (extension.base || _this.any()).clone(); // Cloning because we're going to override language afterwards
		            var ctor = base.constructor;
		            var type = function (_ctor) {
		                _inherits(type, _ctor);

		                // eslint-disable-line no-loop-func

		                function type() {
		                    _classCallCheck(this, type);

		                    var _this2 = _possibleConstructorReturn(this, _ctor.call(this));

		                    if (extension.base) {
		                        _extends(_this2, base);
		                    }

		                    _this2._type = extension.name;

		                    if (extension.language) {
		                        _this2._settings = _this2._settings || { language: {} };
		                        _this2._settings.language = Hoek.applyToDefaults(_this2._settings.language, _defineProperty({}, extension.name, extension.language));
		                    }
		                    return _this2;
		                }

		                return type;
		            }(ctor);

		            if (extension.coerce) {
		                type.prototype._coerce = function (value, state, options) {

		                    if (ctor.prototype._coerce) {
		                        var baseRet = ctor.prototype._coerce.call(this, value, state, options);

		                        if (baseRet.errors) {
		                            return baseRet;
		                        }

		                        value = baseRet.value;
		                    }

		                    var ret = extension.coerce.call(this, value, state, options);
		                    if (ret instanceof Errors.Err) {
		                        return { value: value, errors: ret };
		                    }

		                    return { value: ret };
		                };
		            }
		            if (extension.pre) {
		                type.prototype._base = function (value, state, options) {

		                    if (ctor.prototype._base) {
		                        var baseRet = ctor.prototype._base.call(this, value, state, options);

		                        if (baseRet.errors) {
		                            return baseRet;
		                        }

		                        value = baseRet.value;
		                    }

		                    var ret = extension.pre.call(this, value, state, options);
		                    if (ret instanceof Errors.Err) {
		                        return { value: value, errors: ret };
		                    }

		                    return { value: ret };
		                };
		            }

		            if (extension.rules) {
		                var _loop2 = function _loop2(j) {
		                    var rule = extension.rules[j];
		                    var ruleArgs = rule.params ? rule.params instanceof Any ? rule.params._inner.children.map(function (k) {
		                        return k.key;
		                    }) : Object.keys(rule.params) : [];
		                    var validateArgs = rule.params ? Cast.schema(rule.params) : null;

		                    type.prototype[rule.name] = function () {
		                        // eslint-disable-line no-loop-func

		                        if (arguments.length > ruleArgs.length) {
		                            throw new Error('Unexpected number of arguments');
		                        }

		                        var args = Array.prototype.slice.call(arguments);
		                        var hasRef = false;
		                        var arg = {};

		                        for (var k = 0; k < ruleArgs.length; ++k) {
		                            arg[ruleArgs[k]] = args[k];
		                            if (!hasRef && Ref.isRef(args[k])) {
		                                hasRef = true;
		                            }
		                        }

		                        if (validateArgs) {
		                            joi.assert(arg, validateArgs);
		                        }

		                        var schema = void 0;
		                        if (rule.validate) {
		                            var validate = function validate(value, state, options) {

		                                return rule.validate.call(this, arg, value, state, options);
		                            };

		                            schema = this._test(rule.name, arg, validate, {
		                                description: rule.description,
		                                hasRef: hasRef
		                            });
		                        } else {
		                            schema = this.clone();
		                        }

		                        if (rule.setup) {
		                            rule.setup.call(schema, arg);
		                        }

		                        return schema;
		                    };
		                };

		                for (var j = 0; j < extension.rules.length; ++j) {
		                    _loop2(j);
		                }
		            }

		            if (extension.describe) {
		                type.prototype.describe = function () {

		                    var description = ctor.prototype.describe.call(this);
		                    return extension.describe.call(this, description);
		                };
		            }

		            var instance = new type();
		            joi[extension.name] = function () {

		                return instance;
		            };
		        };

		        for (var i = 0; i < extensions.length; ++i) {
		            _loop(i);
		        }

		        return joi;
		    };

		    root.extensionsSchema = internals.array.items(internals.object.keys({
		        base: internals.object.type(Any, 'Joi object'),
		        name: internals.string.required(),
		        coerce: internals.object._func().arity(3),
		        pre: internals.object._func().arity(3),
		        language: internals.object,
		        describe: internals.object._func().arity(1),
		        rules: internals.array.items(internals.object.keys({
		            name: internals.string.required(),
		            setup: internals.object._func().arity(1),
		            validate: internals.object._func().arity(4),
		            params: [internals.object.pattern(/.*/, internals.object.type(Any, 'Joi object')), internals.object.type(internals.object.constructor, 'Joi object')],
		            description: [internals.string, internals.object._func().arity(1)]
		        }).or('setup', 'validate'))
		    })).strict();

		    root.version = __webpack_require__(35).version;

		    return root;
		};

		module.exports = internals.root();

	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(Buffer, process) {'use strict';

		// Load modules

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		var Crypto = __webpack_require__(8);
		var Path = __webpack_require__(9);
		var Util = __webpack_require__(10);
		var Escape = __webpack_require__(13);

		// Declare internals

		var internals = {};

		// Clone object or array

		exports.clone = function (obj, seen) {

		    if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) {

		        return obj;
		    }

		    seen = seen || new Map();

		    var lookup = seen.get(obj);
		    if (lookup) {
		        return lookup;
		    }

		    var newObj = void 0;
		    var cloneDeep = false;

		    if (!Array.isArray(obj)) {
		        if (Buffer.isBuffer(obj)) {
		            newObj = new Buffer(obj);
		        } else if (obj instanceof Date) {
		            newObj = new Date(obj.getTime());
		        } else if (obj instanceof RegExp) {
		            newObj = new RegExp(obj);
		        } else {
		            var proto = Object.getPrototypeOf(obj);
		            if (proto && proto.isImmutable) {

		                newObj = obj;
		            } else {
		                newObj = Object.create(proto);
		                cloneDeep = true;
		            }
		        }
		    } else {
		        newObj = [];
		        cloneDeep = true;
		    }

		    seen.set(obj, newObj);

		    if (cloneDeep) {
		        var keys = Object.getOwnPropertyNames(obj);
		        for (var i = 0; i < keys.length; ++i) {
		            var key = keys[i];
		            var descriptor = Object.getOwnPropertyDescriptor(obj, key);
		            if (descriptor && (descriptor.get || descriptor.set)) {

		                Object.defineProperty(newObj, key, descriptor);
		            } else {
		                newObj[key] = exports.clone(obj[key], seen);
		            }
		        }
		    }

		    return newObj;
		};

		// Merge all the properties of source into target, source wins in conflict, and by default null and undefined from source are applied

		/*eslint-disable */
		exports.merge = function (target, source, isNullOverride /* = true */, isMergeArrays /* = true */) {
		    /*eslint-enable */

		    exports.assert(target && (typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object', 'Invalid target value: must be an object');
		    exports.assert(source === null || source === undefined || (typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object', 'Invalid source value: must be null, undefined, or an object');

		    if (!source) {
		        return target;
		    }

		    if (Array.isArray(source)) {
		        exports.assert(Array.isArray(target), 'Cannot merge array onto an object');
		        if (isMergeArrays === false) {
		            // isMergeArrays defaults to true
		            target.length = 0; // Must not change target assignment
		        }

		        for (var i = 0; i < source.length; ++i) {
		            target.push(exports.clone(source[i]));
		        }

		        return target;
		    }

		    var keys = Object.keys(source);
		    for (var _i = 0; _i < keys.length; ++_i) {
		        var key = keys[_i];
		        var value = source[key];
		        if (value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {

		            if (!target[key] || _typeof(target[key]) !== 'object' || Array.isArray(target[key]) !== Array.isArray(value) || value instanceof Date || Buffer.isBuffer(value) || value instanceof RegExp) {

		                target[key] = exports.clone(value);
		            } else {
		                exports.merge(target[key], value, isNullOverride, isMergeArrays);
		            }
		        } else {
		            if (value !== null && value !== undefined) {
		                // Explicit to preserve empty strings

		                target[key] = value;
		            } else if (isNullOverride !== false) {
		                // Defaults to true
		                target[key] = value;
		            }
		        }
		    }

		    return target;
		};

		// Apply options to a copy of the defaults

		exports.applyToDefaults = function (defaults, options, isNullOverride) {

		    exports.assert(defaults && (typeof defaults === 'undefined' ? 'undefined' : _typeof(defaults)) === 'object', 'Invalid defaults value: must be an object');
		    exports.assert(!options || options === true || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object', 'Invalid options value: must be true, falsy or an object');

		    if (!options) {
		        // If no options, return null
		        return null;
		    }

		    var copy = exports.clone(defaults);

		    if (options === true) {
		        // If options is set to true, use defaults
		        return copy;
		    }

		    return exports.merge(copy, options, isNullOverride === true, false);
		};

		// Clone an object except for the listed keys which are shallow copied

		exports.cloneWithShallow = function (source, keys) {

		    if (!source || (typeof source === 'undefined' ? 'undefined' : _typeof(source)) !== 'object') {

		        return source;
		    }

		    var storage = internals.store(source, keys); // Move shallow copy items to storage
		    var copy = exports.clone(source); // Deep copy the rest
		    internals.restore(copy, source, storage); // Shallow copy the stored items and restore
		    return copy;
		};

		internals.store = function (source, keys) {

		    var storage = {};
		    for (var i = 0; i < keys.length; ++i) {
		        var key = keys[i];
		        var value = exports.reach(source, key);
		        if (value !== undefined) {
		            storage[key] = value;
		            internals.reachSet(source, key, undefined);
		        }
		    }

		    return storage;
		};

		internals.restore = function (copy, source, storage) {

		    var keys = Object.keys(storage);
		    for (var i = 0; i < keys.length; ++i) {
		        var key = keys[i];
		        internals.reachSet(copy, key, storage[key]);
		        internals.reachSet(source, key, storage[key]);
		    }
		};

		internals.reachSet = function (obj, key, value) {

		    var path = key.split('.');
		    var ref = obj;
		    for (var i = 0; i < path.length; ++i) {
		        var segment = path[i];
		        if (i + 1 === path.length) {
		            ref[segment] = value;
		        }

		        ref = ref[segment];
		    }
		};

		// Apply options to defaults except for the listed keys which are shallow copied from option without merging

		exports.applyToDefaultsWithShallow = function (defaults, options, keys) {

		    exports.assert(defaults && (typeof defaults === 'undefined' ? 'undefined' : _typeof(defaults)) === 'object', 'Invalid defaults value: must be an object');
		    exports.assert(!options || options === true || (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object', 'Invalid options value: must be true, falsy or an object');
		    exports.assert(keys && Array.isArray(keys), 'Invalid keys');

		    if (!options) {
		        // If no options, return null
		        return null;
		    }

		    var copy = exports.cloneWithShallow(defaults, keys);

		    if (options === true) {
		        // If options is set to true, use defaults
		        return copy;
		    }

		    var storage = internals.store(options, keys); // Move shallow copy items to storage
		    exports.merge(copy, options, false, false); // Deep copy the rest
		    internals.restore(copy, options, storage); // Shallow copy the stored items and restore
		    return copy;
		};

		// Deep object or array comparison

		exports.deepEqual = function (obj, ref, options, seen) {

		    options = options || { prototype: true };

		    var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);

		    if (type !== (typeof ref === 'undefined' ? 'undefined' : _typeof(ref))) {
		        return false;
		    }

		    if (type !== 'object' || obj === null || ref === null) {

		        if (obj === ref) {
		            // Copied from Deep-eql, copyright(c) 2013 Jake Luer, jake@alogicalparadox.com, MIT Licensed, https://github.com/chaijs/deep-eql
		            return obj !== 0 || 1 / obj === 1 / ref; // -0 / +0
		        }

		        return obj !== obj && ref !== ref; // NaN
		    }

		    seen = seen || [];
		    if (seen.indexOf(obj) !== -1) {
		        return true; // If previous comparison failed, it would have stopped execution
		    }

		    seen.push(obj);

		    if (Array.isArray(obj)) {
		        if (!Array.isArray(ref)) {
		            return false;
		        }

		        if (!options.part && obj.length !== ref.length) {
		            return false;
		        }

		        for (var i = 0; i < obj.length; ++i) {
		            if (options.part) {
		                var found = false;
		                for (var j = 0; j < ref.length; ++j) {
		                    if (exports.deepEqual(obj[i], ref[j], options)) {
		                        found = true;
		                        break;
		                    }
		                }

		                return found;
		            }

		            if (!exports.deepEqual(obj[i], ref[i], options)) {
		                return false;
		            }
		        }

		        return true;
		    }

		    if (Buffer.isBuffer(obj)) {
		        if (!Buffer.isBuffer(ref)) {
		            return false;
		        }

		        if (obj.length !== ref.length) {
		            return false;
		        }

		        for (var _i2 = 0; _i2 < obj.length; ++_i2) {
		            if (obj[_i2] !== ref[_i2]) {
		                return false;
		            }
		        }

		        return true;
		    }

		    if (obj instanceof Date) {
		        return ref instanceof Date && obj.getTime() === ref.getTime();
		    }

		    if (obj instanceof RegExp) {
		        return ref instanceof RegExp && obj.toString() === ref.toString();
		    }

		    if (options.prototype) {
		        if (Object.getPrototypeOf(obj) !== Object.getPrototypeOf(ref)) {
		            return false;
		        }
		    }

		    var keys = Object.getOwnPropertyNames(obj);

		    if (!options.part && keys.length !== Object.getOwnPropertyNames(ref).length) {
		        return false;
		    }

		    for (var _i3 = 0; _i3 < keys.length; ++_i3) {
		        var key = keys[_i3];
		        var descriptor = Object.getOwnPropertyDescriptor(obj, key);
		        if (descriptor.get) {
		            if (!exports.deepEqual(descriptor, Object.getOwnPropertyDescriptor(ref, key), options, seen)) {
		                return false;
		            }
		        } else if (!exports.deepEqual(obj[key], ref[key], options, seen)) {
		            return false;
		        }
		    }

		    return true;
		};

		// Remove duplicate items from array

		exports.unique = function (array, key) {

		    var result = void 0;
		    if (key) {
		        (function () {
		            result = [];
		            var index = new Set();
		            array.forEach(function (item) {

		                var identifier = item[key];
		                if (!index.has(identifier)) {
		                    index.add(identifier);
		                    result.push(item);
		                }
		            });
		        })();
		    } else {
		        result = Array.from(new Set(array));
		    }

		    return result;
		};

		// Convert array into object

		exports.mapToObject = function (array, key) {

		    if (!array) {
		        return null;
		    }

		    var obj = {};
		    for (var i = 0; i < array.length; ++i) {
		        if (key) {
		            if (array[i][key]) {
		                obj[array[i][key]] = true;
		            }
		        } else {
		            obj[array[i]] = true;
		        }
		    }

		    return obj;
		};

		// Find the common unique items in two arrays

		exports.intersect = function (array1, array2, justFirst) {

		    if (!array1 || !array2) {
		        return [];
		    }

		    var common = [];
		    var hash = Array.isArray(array1) ? exports.mapToObject(array1) : array1;
		    var found = {};
		    for (var i = 0; i < array2.length; ++i) {
		        if (hash[array2[i]] && !found[array2[i]]) {
		            if (justFirst) {
		                return array2[i];
		            }

		            common.push(array2[i]);
		            found[array2[i]] = true;
		        }
		    }

		    return justFirst ? null : common;
		};

		// Test if the reference contains the values

		exports.contain = function (ref, values, options) {

		    /*
		        string -> string(s)
		        array -> item(s)
		        object -> key(s)
		        object -> object (key:value)
		    */

		    var valuePairs = null;
		    if ((typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) === 'object' && (typeof values === 'undefined' ? 'undefined' : _typeof(values)) === 'object' && !Array.isArray(ref) && !Array.isArray(values)) {

		        valuePairs = values;
		        values = Object.keys(values);
		    } else {
		        values = [].concat(values);
		    }

		    options = options || {}; // deep, once, only, part

		    exports.assert(arguments.length >= 2, 'Insufficient arguments');
		    exports.assert(typeof ref === 'string' || (typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) === 'object', 'Reference must be string or an object');
		    exports.assert(values.length, 'Values array cannot be empty');

		    var compare = void 0;
		    var compareFlags = void 0;
		    if (options.deep) {
		        compare = exports.deepEqual;

		        var hasOnly = options.hasOwnProperty('only');
		        var hasPart = options.hasOwnProperty('part');

		        compareFlags = {
		            prototype: hasOnly ? options.only : hasPart ? !options.part : false,
		            part: hasOnly ? !options.only : hasPart ? options.part : true
		        };
		    } else {
		        compare = function compare(a, b) {
		            return a === b;
		        };
		    }

		    var misses = false;
		    var matches = new Array(values.length);
		    for (var i = 0; i < matches.length; ++i) {
		        matches[i] = 0;
		    }

		    if (typeof ref === 'string') {
		        var pattern = '(';
		        for (var _i4 = 0; _i4 < values.length; ++_i4) {
		            var value = values[_i4];
		            exports.assert(typeof value === 'string', 'Cannot compare string reference to non-string value');
		            pattern += (_i4 ? '|' : '') + exports.escapeRegex(value);
		        }

		        var regex = new RegExp(pattern + ')', 'g');
		        var leftovers = ref.replace(regex, function ($0, $1) {

		            var index = values.indexOf($1);
		            ++matches[index];
		            return ''; // Remove from string
		        });

		        misses = !!leftovers;
		    } else if (Array.isArray(ref)) {
		        for (var _i5 = 0; _i5 < ref.length; ++_i5) {
		            var matched = false;
		            for (var j = 0; j < values.length && matched === false; ++j) {
		                matched = compare(values[j], ref[_i5], compareFlags) && j;
		            }

		            if (matched !== false) {
		                ++matches[matched];
		            } else {
		                misses = true;
		            }
		        }
		    } else {
		        var keys = Object.getOwnPropertyNames(ref);
		        for (var _i6 = 0; _i6 < keys.length; ++_i6) {
		            var key = keys[_i6];
		            var pos = values.indexOf(key);
		            if (pos !== -1) {
		                if (valuePairs && !compare(valuePairs[key], ref[key], compareFlags)) {

		                    return false;
		                }

		                ++matches[pos];
		            } else {
		                misses = true;
		            }
		        }
		    }

		    var result = false;
		    for (var _i7 = 0; _i7 < matches.length; ++_i7) {
		        result = result || !!matches[_i7];
		        if (options.once && matches[_i7] > 1 || !options.part && !matches[_i7]) {

		            return false;
		        }
		    }

		    if (options.only && misses) {

		        return false;
		    }

		    return result;
		};

		// Flatten array

		exports.flatten = function (array, target) {

		    var result = target || [];

		    for (var i = 0; i < array.length; ++i) {
		        if (Array.isArray(array[i])) {
		            exports.flatten(array[i], result);
		        } else {
		            result.push(array[i]);
		        }
		    }

		    return result;
		};

		// Convert an object key chain string ('a.b.c') to reference (object[a][b][c])

		exports.reach = function (obj, chain, options) {

		    if (chain === false || chain === null || typeof chain === 'undefined') {

		        return obj;
		    }

		    options = options || {};
		    if (typeof options === 'string') {
		        options = { separator: options };
		    }

		    var path = chain.split(options.separator || '.');
		    var ref = obj;
		    for (var i = 0; i < path.length; ++i) {
		        var key = path[i];
		        if (key[0] === '-' && Array.isArray(ref)) {
		            key = key.slice(1, key.length);
		            key = ref.length - key;
		        }

		        if (!ref || !(((typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) === 'object' || typeof ref === 'function') && key in ref) || (typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) !== 'object' && options.functions === false) {
		            // Only object and function can have properties

		            exports.assert(!options.strict || i + 1 === path.length, 'Missing segment', key, 'in reach path ', chain);
		            exports.assert((typeof ref === 'undefined' ? 'undefined' : _typeof(ref)) === 'object' || options.functions === true || typeof ref !== 'function', 'Invalid segment', key, 'in reach path ', chain);
		            ref = options.default;
		            break;
		        }

		        ref = ref[key];
		    }

		    return ref;
		};

		exports.reachTemplate = function (obj, template, options) {

		    return template.replace(/{([^}]+)}/g, function ($0, chain) {

		        var value = exports.reach(obj, chain, options);
		        return value === undefined || value === null ? '' : value;
		    });
		};

		exports.formatStack = function (stack) {

		    var trace = [];
		    for (var i = 0; i < stack.length; ++i) {
		        var item = stack[i];
		        trace.push([item.getFileName(), item.getLineNumber(), item.getColumnNumber(), item.getFunctionName(), item.isConstructor()]);
		    }

		    return trace;
		};

		exports.formatTrace = function (trace) {

		    var display = [];

		    for (var i = 0; i < trace.length; ++i) {
		        var row = trace[i];
		        display.push((row[4] ? 'new ' : '') + row[3] + ' (' + row[0] + ':' + row[1] + ':' + row[2] + ')');
		    }

		    return display;
		};

		exports.callStack = function (slice) {

		    // http://code.google.com/p/v8/wiki/JavaScriptStackTraceApi

		    var v8 = Error.prepareStackTrace;
		    Error.prepareStackTrace = function (_, stack) {

		        return stack;
		    };

		    var capture = {};
		    Error.captureStackTrace(capture, this); // arguments.callee is not supported in strict mode so we use this and slice the trace of this off the result
		    var stack = capture.stack;

		    Error.prepareStackTrace = v8;

		    var trace = exports.formatStack(stack);

		    return trace.slice(1 + slice);
		};

		exports.displayStack = function (slice) {

		    var trace = exports.callStack(slice === undefined ? 1 : slice + 1);

		    return exports.formatTrace(trace);
		};

		exports.abortThrow = false;

		exports.abort = function (message, hideStack) {

		    if (process.env.NODE_ENV === 'test' || exports.abortThrow === true) {
		        throw new Error(message || 'Unknown error');
		    }

		    var stack = '';
		    if (!hideStack) {
		        stack = exports.displayStack(1).join('\n\t');
		    }
		    console.log('ABORT: ' + message + '\n\t' + stack);
		    process.exit(1);
		};

		exports.assert = function (condition /*, msg1, msg2, msg3 */) {

		    if (condition) {
		        return;
		    }

		    if (arguments.length === 2 && arguments[1] instanceof Error) {
		        throw arguments[1];
		    }

		    var msgs = [];
		    for (var i = 1; i < arguments.length; ++i) {
		        if (arguments[i] !== '') {
		            msgs.push(arguments[i]); // Avoids Array.slice arguments leak, allowing for V8 optimizations
		        }
		    }

		    msgs = msgs.map(function (msg) {

		        return typeof msg === 'string' ? msg : msg instanceof Error ? msg.message : exports.stringify(msg);
		    });

		    throw new Error(msgs.join(' ') || 'Unknown error');
		};

		exports.Timer = function () {

		    this.ts = 0;
		    this.reset();
		};

		exports.Timer.prototype.reset = function () {

		    this.ts = Date.now();
		};

		exports.Timer.prototype.elapsed = function () {

		    return Date.now() - this.ts;
		};

		exports.Bench = function () {

		    this.ts = 0;
		    this.reset();
		};

		exports.Bench.prototype.reset = function () {

		    this.ts = exports.Bench.now();
		};

		exports.Bench.prototype.elapsed = function () {

		    return exports.Bench.now() - this.ts;
		};

		exports.Bench.now = function () {

		    var ts = process.hrtime();
		    return ts[0] * 1e3 + ts[1] / 1e6;
		};

		// Escape string for Regex construction

		exports.escapeRegex = function (string) {

		    // Escape ^$.*+-?=!:|\/()[]{},
		    return string.replace(/[\^\$\.\*\+\-\?\=\!\:\|\\\/\(\)\[\]\{\}\,]/g, '\\$&');
		};

		// Base64url (RFC 4648) encode

		exports.base64urlEncode = function (value, encoding) {

		    exports.assert(typeof value === 'string' || Buffer.isBuffer(value), 'value must be string or buffer');
		    var buf = Buffer.isBuffer(value) ? value : new Buffer(value, encoding || 'binary');
		    return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '');
		};

		// Base64url (RFC 4648) decode

		exports.base64urlDecode = function (value, encoding) {

		    if (typeof value !== 'string') {

		        return new Error('Value not a string');
		    }

		    if (!/^[\w\-]*$/.test(value)) {

		        return new Error('Invalid character');
		    }

		    var buf = new Buffer(value, 'base64');
		    return encoding === 'buffer' ? buf : buf.toString(encoding || 'binary');
		};

		// Escape attribute value for use in HTTP header

		exports.escapeHeaderAttribute = function (attribute) {

		    // Allowed value characters: !#$%&'()*+,-./:;<=>?@[]^_`{|}~ and space, a-z, A-Z, 0-9, \, "

		    exports.assert(/^[ \w\!#\$%&'\(\)\*\+,\-\.\/\:;<\=>\?@\[\]\^`\{\|\}~\"\\]*$/.test(attribute), 'Bad attribute value (' + attribute + ')');

		    return attribute.replace(/\\/g, '\\\\').replace(/\"/g, '\\"'); // Escape quotes and slash
		};

		exports.escapeHtml = function (string) {

		    return Escape.escapeHtml(string);
		};

		exports.escapeJavaScript = function (string) {

		    return Escape.escapeJavaScript(string);
		};

		exports.nextTick = function (callback) {

		    return function () {

		        var args = arguments;
		        process.nextTick(function () {

		            callback.apply(null, args);
		        });
		    };
		};

		exports.once = function (method) {

		    if (method._hoekOnce) {
		        return method;
		    }

		    var once = false;
		    var wrapped = function wrapped() {

		        if (!once) {
		            once = true;
		            method.apply(null, arguments);
		        }
		    };

		    wrapped._hoekOnce = true;

		    return wrapped;
		};

		exports.isInteger = function (value) {

		    return typeof value === 'number' && parseFloat(value) === parseInt(value, 10) && !isNaN(value);
		};

		exports.ignore = function () {};

		exports.inherits = Util.inherits;

		exports.format = Util.format;

		exports.transform = function (source, transform, options) {

		    exports.assert(source === null || source === undefined || (typeof source === 'undefined' ? 'undefined' : _typeof(source)) === 'object' || Array.isArray(source), 'Invalid source object: must be null, undefined, an object, or an array');
		    var separator = (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' && options !== null ? options.separator || '.' : '.';

		    if (Array.isArray(source)) {
		        var results = [];
		        for (var i = 0; i < source.length; ++i) {
		            results.push(exports.transform(source[i], transform, options));
		        }
		        return results;
		    }

		    var result = {};
		    var keys = Object.keys(transform);

		    for (var _i8 = 0; _i8 < keys.length; ++_i8) {
		        var key = keys[_i8];
		        var path = key.split(separator);
		        var sourcePath = transform[key];

		        exports.assert(typeof sourcePath === 'string', 'All mappings must be "." delineated strings');

		        var segment = void 0;
		        var res = result;

		        while (path.length > 1) {
		            segment = path.shift();
		            if (!res[segment]) {
		                res[segment] = {};
		            }
		            res = res[segment];
		        }
		        segment = path.shift();
		        res[segment] = exports.reach(source, sourcePath, options);
		    }

		    return result;
		};

		exports.uniqueFilename = function (path, extension) {

		    if (extension) {
		        extension = extension[0] !== '.' ? '.' + extension : extension;
		    } else {
		        extension = '';
		    }

		    path = Path.resolve(path);
		    var name = [Date.now(), process.pid, Crypto.randomBytes(8).toString('hex')].join('-') + extension;
		    return Path.join(path, name);
		};

		exports.stringify = function () {

		    try {
		        return JSON.stringify.apply(null, arguments);
		    } catch (err) {
		        return '[Cannot display object: ' + err.message + ']';
		    }
		};

		exports.shallow = function (source) {

		    var target = {};
		    var keys = Object.keys(source);
		    for (var i = 0; i < keys.length; ++i) {
		        var key = keys[i];
		        target[key] = source[key];
		    }

		    return target;
		};
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer, __webpack_require__(7)))

	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global) {/*!
		 * The buffer module from node.js, for the browser.
		 *
		 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
		 * @license  MIT
		 */
		/* eslint-disable no-proto */

		'use strict'

		var base64 = __webpack_require__(4)
		var ieee754 = __webpack_require__(5)
		var isArray = __webpack_require__(6)

		exports.Buffer = Buffer
		exports.SlowBuffer = SlowBuffer
		exports.INSPECT_MAX_BYTES = 50

		/**
		 * If `Buffer.TYPED_ARRAY_SUPPORT`:
		 *   === true    Use Uint8Array implementation (fastest)
		 *   === false   Use Object implementation (most compatible, even IE6)
		 *
		 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
		 * Opera 11.6+, iOS 4.2+.
		 *
		 * Due to various browser bugs, sometimes the Object implementation will be used even
		 * when the browser supports typed arrays.
		 *
		 * Note:
		 *
		 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
		 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
		 *
		 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
		 *
		 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
		 *     incorrect length in some situations.

		 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
		 * get the Object implementation, which is slower but behaves correctly.
		 */
		Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
		  ? global.TYPED_ARRAY_SUPPORT
		  : typedArraySupport()

		/*
		 * Export kMaxLength after typed array support is determined.
		 */
		exports.kMaxLength = kMaxLength()

		function typedArraySupport () {
		  try {
		    var arr = new Uint8Array(1)
		    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
		    return arr.foo() === 42 && // typed array instances can be augmented
		        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
		        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
		  } catch (e) {
		    return false
		  }
		}

		function kMaxLength () {
		  return Buffer.TYPED_ARRAY_SUPPORT
		    ? 0x7fffffff
		    : 0x3fffffff
		}

		function createBuffer (that, length) {
		  if (kMaxLength() < length) {
		    throw new RangeError('Invalid typed array length')
		  }
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    // Return an augmented `Uint8Array` instance, for best performance
		    that = new Uint8Array(length)
		    that.__proto__ = Buffer.prototype
		  } else {
		    // Fallback: Return an object instance of the Buffer class
		    if (that === null) {
		      that = new Buffer(length)
		    }
		    that.length = length
		  }

		  return that
		}

		/**
		 * The Buffer constructor returns instances of `Uint8Array` that have their
		 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
		 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
		 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
		 * returns a single octet.
		 *
		 * The `Uint8Array` prototype remains unmodified.
		 */

		function Buffer (arg, encodingOrOffset, length) {
		  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
		    return new Buffer(arg, encodingOrOffset, length)
		  }

		  // Common case.
		  if (typeof arg === 'number') {
		    if (typeof encodingOrOffset === 'string') {
		      throw new Error(
		        'If encoding is specified then the first argument must be a string'
		      )
		    }
		    return allocUnsafe(this, arg)
		  }
		  return from(this, arg, encodingOrOffset, length)
		}

		Buffer.poolSize = 8192 // not used by this implementation

		// TODO: Legacy, not needed anymore. Remove in next major version.
		Buffer._augment = function (arr) {
		  arr.__proto__ = Buffer.prototype
		  return arr
		}

		function from (that, value, encodingOrOffset, length) {
		  if (typeof value === 'number') {
		    throw new TypeError('"value" argument must not be a number')
		  }

		  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
		    return fromArrayBuffer(that, value, encodingOrOffset, length)
		  }

		  if (typeof value === 'string') {
		    return fromString(that, value, encodingOrOffset)
		  }

		  return fromObject(that, value)
		}

		/**
		 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
		 * if value is a number.
		 * Buffer.from(str[, encoding])
		 * Buffer.from(array)
		 * Buffer.from(buffer)
		 * Buffer.from(arrayBuffer[, byteOffset[, length]])
		 **/
		Buffer.from = function (value, encodingOrOffset, length) {
		  return from(null, value, encodingOrOffset, length)
		}

		if (Buffer.TYPED_ARRAY_SUPPORT) {
		  Buffer.prototype.__proto__ = Uint8Array.prototype
		  Buffer.__proto__ = Uint8Array
		  if (typeof Symbol !== 'undefined' && Symbol.species &&
		      Buffer[Symbol.species] === Buffer) {
		    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
		    Object.defineProperty(Buffer, Symbol.species, {
		      value: null,
		      configurable: true
		    })
		  }
		}

		function assertSize (size) {
		  if (typeof size !== 'number') {
		    throw new TypeError('"size" argument must be a number')
		  } else if (size < 0) {
		    throw new RangeError('"size" argument must not be negative')
		  }
		}

		function alloc (that, size, fill, encoding) {
		  assertSize(size)
		  if (size <= 0) {
		    return createBuffer(that, size)
		  }
		  if (fill !== undefined) {
		    // Only pay attention to encoding if it's a string. This
		    // prevents accidentally sending in a number that would
		    // be interpretted as a start offset.
		    return typeof encoding === 'string'
		      ? createBuffer(that, size).fill(fill, encoding)
		      : createBuffer(that, size).fill(fill)
		  }
		  return createBuffer(that, size)
		}

		/**
		 * Creates a new filled Buffer instance.
		 * alloc(size[, fill[, encoding]])
		 **/
		Buffer.alloc = function (size, fill, encoding) {
		  return alloc(null, size, fill, encoding)
		}

		function allocUnsafe (that, size) {
		  assertSize(size)
		  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
		  if (!Buffer.TYPED_ARRAY_SUPPORT) {
		    for (var i = 0; i < size; ++i) {
		      that[i] = 0
		    }
		  }
		  return that
		}

		/**
		 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
		 * */
		Buffer.allocUnsafe = function (size) {
		  return allocUnsafe(null, size)
		}
		/**
		 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
		 */
		Buffer.allocUnsafeSlow = function (size) {
		  return allocUnsafe(null, size)
		}

		function fromString (that, string, encoding) {
		  if (typeof encoding !== 'string' || encoding === '') {
		    encoding = 'utf8'
		  }

		  if (!Buffer.isEncoding(encoding)) {
		    throw new TypeError('"encoding" must be a valid string encoding')
		  }

		  var length = byteLength(string, encoding) | 0
		  that = createBuffer(that, length)

		  var actual = that.write(string, encoding)

		  if (actual !== length) {
		    // Writing a hex string, for example, that contains invalid characters will
		    // cause everything after the first invalid character to be ignored. (e.g.
		    // 'abxxcd' will be treated as 'ab')
		    that = that.slice(0, actual)
		  }

		  return that
		}

		function fromArrayLike (that, array) {
		  var length = array.length < 0 ? 0 : checked(array.length) | 0
		  that = createBuffer(that, length)
		  for (var i = 0; i < length; i += 1) {
		    that[i] = array[i] & 255
		  }
		  return that
		}

		function fromArrayBuffer (that, array, byteOffset, length) {
		  array.byteLength // this throws if `array` is not a valid ArrayBuffer

		  if (byteOffset < 0 || array.byteLength < byteOffset) {
		    throw new RangeError('\'offset\' is out of bounds')
		  }

		  if (array.byteLength < byteOffset + (length || 0)) {
		    throw new RangeError('\'length\' is out of bounds')
		  }

		  if (byteOffset === undefined && length === undefined) {
		    array = new Uint8Array(array)
		  } else if (length === undefined) {
		    array = new Uint8Array(array, byteOffset)
		  } else {
		    array = new Uint8Array(array, byteOffset, length)
		  }

		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    // Return an augmented `Uint8Array` instance, for best performance
		    that = array
		    that.__proto__ = Buffer.prototype
		  } else {
		    // Fallback: Return an object instance of the Buffer class
		    that = fromArrayLike(that, array)
		  }
		  return that
		}

		function fromObject (that, obj) {
		  if (Buffer.isBuffer(obj)) {
		    var len = checked(obj.length) | 0
		    that = createBuffer(that, len)

		    if (that.length === 0) {
		      return that
		    }

		    obj.copy(that, 0, 0, len)
		    return that
		  }

		  if (obj) {
		    if ((typeof ArrayBuffer !== 'undefined' &&
		        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
		      if (typeof obj.length !== 'number' || isnan(obj.length)) {
		        return createBuffer(that, 0)
		      }
		      return fromArrayLike(that, obj)
		    }

		    if (obj.type === 'Buffer' && isArray(obj.data)) {
		      return fromArrayLike(that, obj.data)
		    }
		  }

		  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
		}

		function checked (length) {
		  // Note: cannot use `length < kMaxLength()` here because that fails when
		  // length is NaN (which is otherwise coerced to zero.)
		  if (length >= kMaxLength()) {
		    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
		                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
		  }
		  return length | 0
		}

		function SlowBuffer (length) {
		  if (+length != length) { // eslint-disable-line eqeqeq
		    length = 0
		  }
		  return Buffer.alloc(+length)
		}

		Buffer.isBuffer = function isBuffer (b) {
		  return !!(b != null && b._isBuffer)
		}

		Buffer.compare = function compare (a, b) {
		  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
		    throw new TypeError('Arguments must be Buffers')
		  }

		  if (a === b) return 0

		  var x = a.length
		  var y = b.length

		  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
		    if (a[i] !== b[i]) {
		      x = a[i]
		      y = b[i]
		      break
		    }
		  }

		  if (x < y) return -1
		  if (y < x) return 1
		  return 0
		}

		Buffer.isEncoding = function isEncoding (encoding) {
		  switch (String(encoding).toLowerCase()) {
		    case 'hex':
		    case 'utf8':
		    case 'utf-8':
		    case 'ascii':
		    case 'latin1':
		    case 'binary':
		    case 'base64':
		    case 'ucs2':
		    case 'ucs-2':
		    case 'utf16le':
		    case 'utf-16le':
		      return true
		    default:
		      return false
		  }
		}

		Buffer.concat = function concat (list, length) {
		  if (!isArray(list)) {
		    throw new TypeError('"list" argument must be an Array of Buffers')
		  }

		  if (list.length === 0) {
		    return Buffer.alloc(0)
		  }

		  var i
		  if (length === undefined) {
		    length = 0
		    for (i = 0; i < list.length; ++i) {
		      length += list[i].length
		    }
		  }

		  var buffer = Buffer.allocUnsafe(length)
		  var pos = 0
		  for (i = 0; i < list.length; ++i) {
		    var buf = list[i]
		    if (!Buffer.isBuffer(buf)) {
		      throw new TypeError('"list" argument must be an Array of Buffers')
		    }
		    buf.copy(buffer, pos)
		    pos += buf.length
		  }
		  return buffer
		}

		function byteLength (string, encoding) {
		  if (Buffer.isBuffer(string)) {
		    return string.length
		  }
		  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
		      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
		    return string.byteLength
		  }
		  if (typeof string !== 'string') {
		    string = '' + string
		  }

		  var len = string.length
		  if (len === 0) return 0

		  // Use a for loop to avoid recursion
		  var loweredCase = false
		  for (;;) {
		    switch (encoding) {
		      case 'ascii':
		      case 'latin1':
		      case 'binary':
		        return len
		      case 'utf8':
		      case 'utf-8':
		      case undefined:
		        return utf8ToBytes(string).length
		      case 'ucs2':
		      case 'ucs-2':
		      case 'utf16le':
		      case 'utf-16le':
		        return len * 2
		      case 'hex':
		        return len >>> 1
		      case 'base64':
		        return base64ToBytes(string).length
		      default:
		        if (loweredCase) return utf8ToBytes(string).length // assume utf8
		        encoding = ('' + encoding).toLowerCase()
		        loweredCase = true
		    }
		  }
		}
		Buffer.byteLength = byteLength

		function slowToString (encoding, start, end) {
		  var loweredCase = false

		  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
		  // property of a typed array.

		  // This behaves neither like String nor Uint8Array in that we set start/end
		  // to their upper/lower bounds if the value passed is out of range.
		  // undefined is handled specially as per ECMA-262 6th Edition,
		  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
		  if (start === undefined || start < 0) {
		    start = 0
		  }
		  // Return early if start > this.length. Done here to prevent potential uint32
		  // coercion fail below.
		  if (start > this.length) {
		    return ''
		  }

		  if (end === undefined || end > this.length) {
		    end = this.length
		  }

		  if (end <= 0) {
		    return ''
		  }

		  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
		  end >>>= 0
		  start >>>= 0

		  if (end <= start) {
		    return ''
		  }

		  if (!encoding) encoding = 'utf8'

		  while (true) {
		    switch (encoding) {
		      case 'hex':
		        return hexSlice(this, start, end)

		      case 'utf8':
		      case 'utf-8':
		        return utf8Slice(this, start, end)

		      case 'ascii':
		        return asciiSlice(this, start, end)

		      case 'latin1':
		      case 'binary':
		        return latin1Slice(this, start, end)

		      case 'base64':
		        return base64Slice(this, start, end)

		      case 'ucs2':
		      case 'ucs-2':
		      case 'utf16le':
		      case 'utf-16le':
		        return utf16leSlice(this, start, end)

		      default:
		        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
		        encoding = (encoding + '').toLowerCase()
		        loweredCase = true
		    }
		  }
		}

		// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
		// Buffer instances.
		Buffer.prototype._isBuffer = true

		function swap (b, n, m) {
		  var i = b[n]
		  b[n] = b[m]
		  b[m] = i
		}

		Buffer.prototype.swap16 = function swap16 () {
		  var len = this.length
		  if (len % 2 !== 0) {
		    throw new RangeError('Buffer size must be a multiple of 16-bits')
		  }
		  for (var i = 0; i < len; i += 2) {
		    swap(this, i, i + 1)
		  }
		  return this
		}

		Buffer.prototype.swap32 = function swap32 () {
		  var len = this.length
		  if (len % 4 !== 0) {
		    throw new RangeError('Buffer size must be a multiple of 32-bits')
		  }
		  for (var i = 0; i < len; i += 4) {
		    swap(this, i, i + 3)
		    swap(this, i + 1, i + 2)
		  }
		  return this
		}

		Buffer.prototype.swap64 = function swap64 () {
		  var len = this.length
		  if (len % 8 !== 0) {
		    throw new RangeError('Buffer size must be a multiple of 64-bits')
		  }
		  for (var i = 0; i < len; i += 8) {
		    swap(this, i, i + 7)
		    swap(this, i + 1, i + 6)
		    swap(this, i + 2, i + 5)
		    swap(this, i + 3, i + 4)
		  }
		  return this
		}

		Buffer.prototype.toString = function toString () {
		  var length = this.length | 0
		  if (length === 0) return ''
		  if (arguments.length === 0) return utf8Slice(this, 0, length)
		  return slowToString.apply(this, arguments)
		}

		Buffer.prototype.equals = function equals (b) {
		  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
		  if (this === b) return true
		  return Buffer.compare(this, b) === 0
		}

		Buffer.prototype.inspect = function inspect () {
		  var str = ''
		  var max = exports.INSPECT_MAX_BYTES
		  if (this.length > 0) {
		    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
		    if (this.length > max) str += ' ... '
		  }
		  return '<Buffer ' + str + '>'
		}

		Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
		  if (!Buffer.isBuffer(target)) {
		    throw new TypeError('Argument must be a Buffer')
		  }

		  if (start === undefined) {
		    start = 0
		  }
		  if (end === undefined) {
		    end = target ? target.length : 0
		  }
		  if (thisStart === undefined) {
		    thisStart = 0
		  }
		  if (thisEnd === undefined) {
		    thisEnd = this.length
		  }

		  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
		    throw new RangeError('out of range index')
		  }

		  if (thisStart >= thisEnd && start >= end) {
		    return 0
		  }
		  if (thisStart >= thisEnd) {
		    return -1
		  }
		  if (start >= end) {
		    return 1
		  }

		  start >>>= 0
		  end >>>= 0
		  thisStart >>>= 0
		  thisEnd >>>= 0

		  if (this === target) return 0

		  var x = thisEnd - thisStart
		  var y = end - start
		  var len = Math.min(x, y)

		  var thisCopy = this.slice(thisStart, thisEnd)
		  var targetCopy = target.slice(start, end)

		  for (var i = 0; i < len; ++i) {
		    if (thisCopy[i] !== targetCopy[i]) {
		      x = thisCopy[i]
		      y = targetCopy[i]
		      break
		    }
		  }

		  if (x < y) return -1
		  if (y < x) return 1
		  return 0
		}

		// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
		// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
		//
		// Arguments:
		// - buffer - a Buffer to search
		// - val - a string, Buffer, or number
		// - byteOffset - an index into `buffer`; will be clamped to an int32
		// - encoding - an optional encoding, relevant is val is a string
		// - dir - true for indexOf, false for lastIndexOf
		function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
		  // Empty buffer means no match
		  if (buffer.length === 0) return -1

		  // Normalize byteOffset
		  if (typeof byteOffset === 'string') {
		    encoding = byteOffset
		    byteOffset = 0
		  } else if (byteOffset > 0x7fffffff) {
		    byteOffset = 0x7fffffff
		  } else if (byteOffset < -0x80000000) {
		    byteOffset = -0x80000000
		  }
		  byteOffset = +byteOffset  // Coerce to Number.
		  if (isNaN(byteOffset)) {
		    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
		    byteOffset = dir ? 0 : (buffer.length - 1)
		  }

		  // Normalize byteOffset: negative offsets start from the end of the buffer
		  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
		  if (byteOffset >= buffer.length) {
		    if (dir) return -1
		    else byteOffset = buffer.length - 1
		  } else if (byteOffset < 0) {
		    if (dir) byteOffset = 0
		    else return -1
		  }

		  // Normalize val
		  if (typeof val === 'string') {
		    val = Buffer.from(val, encoding)
		  }

		  // Finally, search either indexOf (if dir is true) or lastIndexOf
		  if (Buffer.isBuffer(val)) {
		    // Special case: looking for empty string/buffer always fails
		    if (val.length === 0) {
		      return -1
		    }
		    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
		  } else if (typeof val === 'number') {
		    val = val & 0xFF // Search for a byte value [0-255]
		    if (Buffer.TYPED_ARRAY_SUPPORT &&
		        typeof Uint8Array.prototype.indexOf === 'function') {
		      if (dir) {
		        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
		      } else {
		        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
		      }
		    }
		    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
		  }

		  throw new TypeError('val must be string, number or Buffer')
		}

		function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
		  var indexSize = 1
		  var arrLength = arr.length
		  var valLength = val.length

		  if (encoding !== undefined) {
		    encoding = String(encoding).toLowerCase()
		    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
		        encoding === 'utf16le' || encoding === 'utf-16le') {
		      if (arr.length < 2 || val.length < 2) {
		        return -1
		      }
		      indexSize = 2
		      arrLength /= 2
		      valLength /= 2
		      byteOffset /= 2
		    }
		  }

		  function read (buf, i) {
		    if (indexSize === 1) {
		      return buf[i]
		    } else {
		      return buf.readUInt16BE(i * indexSize)
		    }
		  }

		  var i
		  if (dir) {
		    var foundIndex = -1
		    for (i = byteOffset; i < arrLength; i++) {
		      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
		        if (foundIndex === -1) foundIndex = i
		        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
		      } else {
		        if (foundIndex !== -1) i -= i - foundIndex
		        foundIndex = -1
		      }
		    }
		  } else {
		    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
		    for (i = byteOffset; i >= 0; i--) {
		      var found = true
		      for (var j = 0; j < valLength; j++) {
		        if (read(arr, i + j) !== read(val, j)) {
		          found = false
		          break
		        }
		      }
		      if (found) return i
		    }
		  }

		  return -1
		}

		Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
		  return this.indexOf(val, byteOffset, encoding) !== -1
		}

		Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
		  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
		}

		Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
		  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
		}

		function hexWrite (buf, string, offset, length) {
		  offset = Number(offset) || 0
		  var remaining = buf.length - offset
		  if (!length) {
		    length = remaining
		  } else {
		    length = Number(length)
		    if (length > remaining) {
		      length = remaining
		    }
		  }

		  // must be an even number of digits
		  var strLen = string.length
		  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

		  if (length > strLen / 2) {
		    length = strLen / 2
		  }
		  for (var i = 0; i < length; ++i) {
		    var parsed = parseInt(string.substr(i * 2, 2), 16)
		    if (isNaN(parsed)) return i
		    buf[offset + i] = parsed
		  }
		  return i
		}

		function utf8Write (buf, string, offset, length) {
		  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
		}

		function asciiWrite (buf, string, offset, length) {
		  return blitBuffer(asciiToBytes(string), buf, offset, length)
		}

		function latin1Write (buf, string, offset, length) {
		  return asciiWrite(buf, string, offset, length)
		}

		function base64Write (buf, string, offset, length) {
		  return blitBuffer(base64ToBytes(string), buf, offset, length)
		}

		function ucs2Write (buf, string, offset, length) {
		  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
		}

		Buffer.prototype.write = function write (string, offset, length, encoding) {
		  // Buffer#write(string)
		  if (offset === undefined) {
		    encoding = 'utf8'
		    length = this.length
		    offset = 0
		  // Buffer#write(string, encoding)
		  } else if (length === undefined && typeof offset === 'string') {
		    encoding = offset
		    length = this.length
		    offset = 0
		  // Buffer#write(string, offset[, length][, encoding])
		  } else if (isFinite(offset)) {
		    offset = offset | 0
		    if (isFinite(length)) {
		      length = length | 0
		      if (encoding === undefined) encoding = 'utf8'
		    } else {
		      encoding = length
		      length = undefined
		    }
		  // legacy write(string, encoding, offset, length) - remove in v0.13
		  } else {
		    throw new Error(
		      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
		    )
		  }

		  var remaining = this.length - offset
		  if (length === undefined || length > remaining) length = remaining

		  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
		    throw new RangeError('Attempt to write outside buffer bounds')
		  }

		  if (!encoding) encoding = 'utf8'

		  var loweredCase = false
		  for (;;) {
		    switch (encoding) {
		      case 'hex':
		        return hexWrite(this, string, offset, length)

		      case 'utf8':
		      case 'utf-8':
		        return utf8Write(this, string, offset, length)

		      case 'ascii':
		        return asciiWrite(this, string, offset, length)

		      case 'latin1':
		      case 'binary':
		        return latin1Write(this, string, offset, length)

		      case 'base64':
		        // Warning: maxLength not taken into account in base64Write
		        return base64Write(this, string, offset, length)

		      case 'ucs2':
		      case 'ucs-2':
		      case 'utf16le':
		      case 'utf-16le':
		        return ucs2Write(this, string, offset, length)

		      default:
		        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
		        encoding = ('' + encoding).toLowerCase()
		        loweredCase = true
		    }
		  }
		}

		Buffer.prototype.toJSON = function toJSON () {
		  return {
		    type: 'Buffer',
		    data: Array.prototype.slice.call(this._arr || this, 0)
		  }
		}

		function base64Slice (buf, start, end) {
		  if (start === 0 && end === buf.length) {
		    return base64.fromByteArray(buf)
		  } else {
		    return base64.fromByteArray(buf.slice(start, end))
		  }
		}

		function utf8Slice (buf, start, end) {
		  end = Math.min(buf.length, end)
		  var res = []

		  var i = start
		  while (i < end) {
		    var firstByte = buf[i]
		    var codePoint = null
		    var bytesPerSequence = (firstByte > 0xEF) ? 4
		      : (firstByte > 0xDF) ? 3
		      : (firstByte > 0xBF) ? 2
		      : 1

		    if (i + bytesPerSequence <= end) {
		      var secondByte, thirdByte, fourthByte, tempCodePoint

		      switch (bytesPerSequence) {
		        case 1:
		          if (firstByte < 0x80) {
		            codePoint = firstByte
		          }
		          break
		        case 2:
		          secondByte = buf[i + 1]
		          if ((secondByte & 0xC0) === 0x80) {
		            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
		            if (tempCodePoint > 0x7F) {
		              codePoint = tempCodePoint
		            }
		          }
		          break
		        case 3:
		          secondByte = buf[i + 1]
		          thirdByte = buf[i + 2]
		          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
		            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
		            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
		              codePoint = tempCodePoint
		            }
		          }
		          break
		        case 4:
		          secondByte = buf[i + 1]
		          thirdByte = buf[i + 2]
		          fourthByte = buf[i + 3]
		          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
		            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
		            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
		              codePoint = tempCodePoint
		            }
		          }
		      }
		    }

		    if (codePoint === null) {
		      // we did not generate a valid codePoint so insert a
		      // replacement char (U+FFFD) and advance only 1 byte
		      codePoint = 0xFFFD
		      bytesPerSequence = 1
		    } else if (codePoint > 0xFFFF) {
		      // encode to utf16 (surrogate pair dance)
		      codePoint -= 0x10000
		      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
		      codePoint = 0xDC00 | codePoint & 0x3FF
		    }

		    res.push(codePoint)
		    i += bytesPerSequence
		  }

		  return decodeCodePointsArray(res)
		}

		// Based on http://stackoverflow.com/a/22747272/680742, the browser with
		// the lowest limit is Chrome, with 0x10000 args.
		// We go 1 magnitude less, for safety
		var MAX_ARGUMENTS_LENGTH = 0x1000

		function decodeCodePointsArray (codePoints) {
		  var len = codePoints.length
		  if (len <= MAX_ARGUMENTS_LENGTH) {
		    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
		  }

		  // Decode in chunks to avoid "call stack size exceeded".
		  var res = ''
		  var i = 0
		  while (i < len) {
		    res += String.fromCharCode.apply(
		      String,
		      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
		    )
		  }
		  return res
		}

		function asciiSlice (buf, start, end) {
		  var ret = ''
		  end = Math.min(buf.length, end)

		  for (var i = start; i < end; ++i) {
		    ret += String.fromCharCode(buf[i] & 0x7F)
		  }
		  return ret
		}

		function latin1Slice (buf, start, end) {
		  var ret = ''
		  end = Math.min(buf.length, end)

		  for (var i = start; i < end; ++i) {
		    ret += String.fromCharCode(buf[i])
		  }
		  return ret
		}

		function hexSlice (buf, start, end) {
		  var len = buf.length

		  if (!start || start < 0) start = 0
		  if (!end || end < 0 || end > len) end = len

		  var out = ''
		  for (var i = start; i < end; ++i) {
		    out += toHex(buf[i])
		  }
		  return out
		}

		function utf16leSlice (buf, start, end) {
		  var bytes = buf.slice(start, end)
		  var res = ''
		  for (var i = 0; i < bytes.length; i += 2) {
		    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
		  }
		  return res
		}

		Buffer.prototype.slice = function slice (start, end) {
		  var len = this.length
		  start = ~~start
		  end = end === undefined ? len : ~~end

		  if (start < 0) {
		    start += len
		    if (start < 0) start = 0
		  } else if (start > len) {
		    start = len
		  }

		  if (end < 0) {
		    end += len
		    if (end < 0) end = 0
		  } else if (end > len) {
		    end = len
		  }

		  if (end < start) end = start

		  var newBuf
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    newBuf = this.subarray(start, end)
		    newBuf.__proto__ = Buffer.prototype
		  } else {
		    var sliceLen = end - start
		    newBuf = new Buffer(sliceLen, undefined)
		    for (var i = 0; i < sliceLen; ++i) {
		      newBuf[i] = this[i + start]
		    }
		  }

		  return newBuf
		}

		/*
		 * Need to make sure that buffer isn't trying to write out of bounds.
		 */
		function checkOffset (offset, ext, length) {
		  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
		  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
		}

		Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
		  offset = offset | 0
		  byteLength = byteLength | 0
		  if (!noAssert) checkOffset(offset, byteLength, this.length)

		  var val = this[offset]
		  var mul = 1
		  var i = 0
		  while (++i < byteLength && (mul *= 0x100)) {
		    val += this[offset + i] * mul
		  }

		  return val
		}

		Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
		  offset = offset | 0
		  byteLength = byteLength | 0
		  if (!noAssert) {
		    checkOffset(offset, byteLength, this.length)
		  }

		  var val = this[offset + --byteLength]
		  var mul = 1
		  while (byteLength > 0 && (mul *= 0x100)) {
		    val += this[offset + --byteLength] * mul
		  }

		  return val
		}

		Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 1, this.length)
		  return this[offset]
		}

		Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 2, this.length)
		  return this[offset] | (this[offset + 1] << 8)
		}

		Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 2, this.length)
		  return (this[offset] << 8) | this[offset + 1]
		}

		Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 4, this.length)

		  return ((this[offset]) |
		      (this[offset + 1] << 8) |
		      (this[offset + 2] << 16)) +
		      (this[offset + 3] * 0x1000000)
		}

		Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 4, this.length)

		  return (this[offset] * 0x1000000) +
		    ((this[offset + 1] << 16) |
		    (this[offset + 2] << 8) |
		    this[offset + 3])
		}

		Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
		  offset = offset | 0
		  byteLength = byteLength | 0
		  if (!noAssert) checkOffset(offset, byteLength, this.length)

		  var val = this[offset]
		  var mul = 1
		  var i = 0
		  while (++i < byteLength && (mul *= 0x100)) {
		    val += this[offset + i] * mul
		  }
		  mul *= 0x80

		  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

		  return val
		}

		Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
		  offset = offset | 0
		  byteLength = byteLength | 0
		  if (!noAssert) checkOffset(offset, byteLength, this.length)

		  var i = byteLength
		  var mul = 1
		  var val = this[offset + --i]
		  while (i > 0 && (mul *= 0x100)) {
		    val += this[offset + --i] * mul
		  }
		  mul *= 0x80

		  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

		  return val
		}

		Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 1, this.length)
		  if (!(this[offset] & 0x80)) return (this[offset])
		  return ((0xff - this[offset] + 1) * -1)
		}

		Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 2, this.length)
		  var val = this[offset] | (this[offset + 1] << 8)
		  return (val & 0x8000) ? val | 0xFFFF0000 : val
		}

		Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 2, this.length)
		  var val = this[offset + 1] | (this[offset] << 8)
		  return (val & 0x8000) ? val | 0xFFFF0000 : val
		}

		Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 4, this.length)

		  return (this[offset]) |
		    (this[offset + 1] << 8) |
		    (this[offset + 2] << 16) |
		    (this[offset + 3] << 24)
		}

		Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 4, this.length)

		  return (this[offset] << 24) |
		    (this[offset + 1] << 16) |
		    (this[offset + 2] << 8) |
		    (this[offset + 3])
		}

		Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 4, this.length)
		  return ieee754.read(this, offset, true, 23, 4)
		}

		Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 4, this.length)
		  return ieee754.read(this, offset, false, 23, 4)
		}

		Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 8, this.length)
		  return ieee754.read(this, offset, true, 52, 8)
		}

		Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
		  if (!noAssert) checkOffset(offset, 8, this.length)
		  return ieee754.read(this, offset, false, 52, 8)
		}

		function checkInt (buf, value, offset, ext, max, min) {
		  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
		  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
		  if (offset + ext > buf.length) throw new RangeError('Index out of range')
		}

		Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
		  value = +value
		  offset = offset | 0
		  byteLength = byteLength | 0
		  if (!noAssert) {
		    var maxBytes = Math.pow(2, 8 * byteLength) - 1
		    checkInt(this, value, offset, byteLength, maxBytes, 0)
		  }

		  var mul = 1
		  var i = 0
		  this[offset] = value & 0xFF
		  while (++i < byteLength && (mul *= 0x100)) {
		    this[offset + i] = (value / mul) & 0xFF
		  }

		  return offset + byteLength
		}

		Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
		  value = +value
		  offset = offset | 0
		  byteLength = byteLength | 0
		  if (!noAssert) {
		    var maxBytes = Math.pow(2, 8 * byteLength) - 1
		    checkInt(this, value, offset, byteLength, maxBytes, 0)
		  }

		  var i = byteLength - 1
		  var mul = 1
		  this[offset + i] = value & 0xFF
		  while (--i >= 0 && (mul *= 0x100)) {
		    this[offset + i] = (value / mul) & 0xFF
		  }

		  return offset + byteLength
		}

		Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
		  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
		  this[offset] = (value & 0xff)
		  return offset + 1
		}

		function objectWriteUInt16 (buf, value, offset, littleEndian) {
		  if (value < 0) value = 0xffff + value + 1
		  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
		    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
		      (littleEndian ? i : 1 - i) * 8
		  }
		}

		Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset] = (value & 0xff)
		    this[offset + 1] = (value >>> 8)
		  } else {
		    objectWriteUInt16(this, value, offset, true)
		  }
		  return offset + 2
		}

		Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset] = (value >>> 8)
		    this[offset + 1] = (value & 0xff)
		  } else {
		    objectWriteUInt16(this, value, offset, false)
		  }
		  return offset + 2
		}

		function objectWriteUInt32 (buf, value, offset, littleEndian) {
		  if (value < 0) value = 0xffffffff + value + 1
		  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
		    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
		  }
		}

		Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset + 3] = (value >>> 24)
		    this[offset + 2] = (value >>> 16)
		    this[offset + 1] = (value >>> 8)
		    this[offset] = (value & 0xff)
		  } else {
		    objectWriteUInt32(this, value, offset, true)
		  }
		  return offset + 4
		}

		Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset] = (value >>> 24)
		    this[offset + 1] = (value >>> 16)
		    this[offset + 2] = (value >>> 8)
		    this[offset + 3] = (value & 0xff)
		  } else {
		    objectWriteUInt32(this, value, offset, false)
		  }
		  return offset + 4
		}

		Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) {
		    var limit = Math.pow(2, 8 * byteLength - 1)

		    checkInt(this, value, offset, byteLength, limit - 1, -limit)
		  }

		  var i = 0
		  var mul = 1
		  var sub = 0
		  this[offset] = value & 0xFF
		  while (++i < byteLength && (mul *= 0x100)) {
		    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
		      sub = 1
		    }
		    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
		  }

		  return offset + byteLength
		}

		Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) {
		    var limit = Math.pow(2, 8 * byteLength - 1)

		    checkInt(this, value, offset, byteLength, limit - 1, -limit)
		  }

		  var i = byteLength - 1
		  var mul = 1
		  var sub = 0
		  this[offset + i] = value & 0xFF
		  while (--i >= 0 && (mul *= 0x100)) {
		    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
		      sub = 1
		    }
		    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
		  }

		  return offset + byteLength
		}

		Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
		  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
		  if (value < 0) value = 0xff + value + 1
		  this[offset] = (value & 0xff)
		  return offset + 1
		}

		Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset] = (value & 0xff)
		    this[offset + 1] = (value >>> 8)
		  } else {
		    objectWriteUInt16(this, value, offset, true)
		  }
		  return offset + 2
		}

		Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset] = (value >>> 8)
		    this[offset + 1] = (value & 0xff)
		  } else {
		    objectWriteUInt16(this, value, offset, false)
		  }
		  return offset + 2
		}

		Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset] = (value & 0xff)
		    this[offset + 1] = (value >>> 8)
		    this[offset + 2] = (value >>> 16)
		    this[offset + 3] = (value >>> 24)
		  } else {
		    objectWriteUInt32(this, value, offset, true)
		  }
		  return offset + 4
		}

		Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
		  value = +value
		  offset = offset | 0
		  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
		  if (value < 0) value = 0xffffffff + value + 1
		  if (Buffer.TYPED_ARRAY_SUPPORT) {
		    this[offset] = (value >>> 24)
		    this[offset + 1] = (value >>> 16)
		    this[offset + 2] = (value >>> 8)
		    this[offset + 3] = (value & 0xff)
		  } else {
		    objectWriteUInt32(this, value, offset, false)
		  }
		  return offset + 4
		}

		function checkIEEE754 (buf, value, offset, ext, max, min) {
		  if (offset + ext > buf.length) throw new RangeError('Index out of range')
		  if (offset < 0) throw new RangeError('Index out of range')
		}

		function writeFloat (buf, value, offset, littleEndian, noAssert) {
		  if (!noAssert) {
		    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
		  }
		  ieee754.write(buf, value, offset, littleEndian, 23, 4)
		  return offset + 4
		}

		Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
		  return writeFloat(this, value, offset, true, noAssert)
		}

		Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
		  return writeFloat(this, value, offset, false, noAssert)
		}

		function writeDouble (buf, value, offset, littleEndian, noAssert) {
		  if (!noAssert) {
		    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
		  }
		  ieee754.write(buf, value, offset, littleEndian, 52, 8)
		  return offset + 8
		}

		Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
		  return writeDouble(this, value, offset, true, noAssert)
		}

		Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
		  return writeDouble(this, value, offset, false, noAssert)
		}

		// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
		Buffer.prototype.copy = function copy (target, targetStart, start, end) {
		  if (!start) start = 0
		  if (!end && end !== 0) end = this.length
		  if (targetStart >= target.length) targetStart = target.length
		  if (!targetStart) targetStart = 0
		  if (end > 0 && end < start) end = start

		  // Copy 0 bytes; we're done
		  if (end === start) return 0
		  if (target.length === 0 || this.length === 0) return 0

		  // Fatal error conditions
		  if (targetStart < 0) {
		    throw new RangeError('targetStart out of bounds')
		  }
		  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
		  if (end < 0) throw new RangeError('sourceEnd out of bounds')

		  // Are we oob?
		  if (end > this.length) end = this.length
		  if (target.length - targetStart < end - start) {
		    end = target.length - targetStart + start
		  }

		  var len = end - start
		  var i

		  if (this === target && start < targetStart && targetStart < end) {
		    // descending copy from end
		    for (i = len - 1; i >= 0; --i) {
		      target[i + targetStart] = this[i + start]
		    }
		  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
		    // ascending copy from start
		    for (i = 0; i < len; ++i) {
		      target[i + targetStart] = this[i + start]
		    }
		  } else {
		    Uint8Array.prototype.set.call(
		      target,
		      this.subarray(start, start + len),
		      targetStart
		    )
		  }

		  return len
		}

		// Usage:
		//    buffer.fill(number[, offset[, end]])
		//    buffer.fill(buffer[, offset[, end]])
		//    buffer.fill(string[, offset[, end]][, encoding])
		Buffer.prototype.fill = function fill (val, start, end, encoding) {
		  // Handle string cases:
		  if (typeof val === 'string') {
		    if (typeof start === 'string') {
		      encoding = start
		      start = 0
		      end = this.length
		    } else if (typeof end === 'string') {
		      encoding = end
		      end = this.length
		    }
		    if (val.length === 1) {
		      var code = val.charCodeAt(0)
		      if (code < 256) {
		        val = code
		      }
		    }
		    if (encoding !== undefined && typeof encoding !== 'string') {
		      throw new TypeError('encoding must be a string')
		    }
		    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
		      throw new TypeError('Unknown encoding: ' + encoding)
		    }
		  } else if (typeof val === 'number') {
		    val = val & 255
		  }

		  // Invalid ranges are not set to a default, so can range check early.
		  if (start < 0 || this.length < start || this.length < end) {
		    throw new RangeError('Out of range index')
		  }

		  if (end <= start) {
		    return this
		  }

		  start = start >>> 0
		  end = end === undefined ? this.length : end >>> 0

		  if (!val) val = 0

		  var i
		  if (typeof val === 'number') {
		    for (i = start; i < end; ++i) {
		      this[i] = val
		    }
		  } else {
		    var bytes = Buffer.isBuffer(val)
		      ? val
		      : utf8ToBytes(new Buffer(val, encoding).toString())
		    var len = bytes.length
		    for (i = 0; i < end - start; ++i) {
		      this[i + start] = bytes[i % len]
		    }
		  }

		  return this
		}

		// HELPER FUNCTIONS
		// ================

		var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

		function base64clean (str) {
		  // Node strips out invalid characters like \n and \t from the string, base64-js does not
		  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
		  // Node converts strings with length < 2 to ''
		  if (str.length < 2) return ''
		  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
		  while (str.length % 4 !== 0) {
		    str = str + '='
		  }
		  return str
		}

		function stringtrim (str) {
		  if (str.trim) return str.trim()
		  return str.replace(/^\s+|\s+$/g, '')
		}

		function toHex (n) {
		  if (n < 16) return '0' + n.toString(16)
		  return n.toString(16)
		}

		function utf8ToBytes (string, units) {
		  units = units || Infinity
		  var codePoint
		  var length = string.length
		  var leadSurrogate = null
		  var bytes = []

		  for (var i = 0; i < length; ++i) {
		    codePoint = string.charCodeAt(i)

		    // is surrogate component
		    if (codePoint > 0xD7FF && codePoint < 0xE000) {
		      // last char was a lead
		      if (!leadSurrogate) {
		        // no lead yet
		        if (codePoint > 0xDBFF) {
		          // unexpected trail
		          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
		          continue
		        } else if (i + 1 === length) {
		          // unpaired lead
		          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
		          continue
		        }

		        // valid lead
		        leadSurrogate = codePoint

		        continue
		      }

		      // 2 leads in a row
		      if (codePoint < 0xDC00) {
		        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
		        leadSurrogate = codePoint
		        continue
		      }

		      // valid surrogate pair
		      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
		    } else if (leadSurrogate) {
		      // valid bmp char, but last char was a lead
		      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
		    }

		    leadSurrogate = null

		    // encode utf8
		    if (codePoint < 0x80) {
		      if ((units -= 1) < 0) break
		      bytes.push(codePoint)
		    } else if (codePoint < 0x800) {
		      if ((units -= 2) < 0) break
		      bytes.push(
		        codePoint >> 0x6 | 0xC0,
		        codePoint & 0x3F | 0x80
		      )
		    } else if (codePoint < 0x10000) {
		      if ((units -= 3) < 0) break
		      bytes.push(
		        codePoint >> 0xC | 0xE0,
		        codePoint >> 0x6 & 0x3F | 0x80,
		        codePoint & 0x3F | 0x80
		      )
		    } else if (codePoint < 0x110000) {
		      if ((units -= 4) < 0) break
		      bytes.push(
		        codePoint >> 0x12 | 0xF0,
		        codePoint >> 0xC & 0x3F | 0x80,
		        codePoint >> 0x6 & 0x3F | 0x80,
		        codePoint & 0x3F | 0x80
		      )
		    } else {
		      throw new Error('Invalid code point')
		    }
		  }

		  return bytes
		}

		function asciiToBytes (str) {
		  var byteArray = []
		  for (var i = 0; i < str.length; ++i) {
		    // Node's code seems to be doing this and not & 0x7F..
		    byteArray.push(str.charCodeAt(i) & 0xFF)
		  }
		  return byteArray
		}

		function utf16leToBytes (str, units) {
		  var c, hi, lo
		  var byteArray = []
		  for (var i = 0; i < str.length; ++i) {
		    if ((units -= 2) < 0) break

		    c = str.charCodeAt(i)
		    hi = c >> 8
		    lo = c % 256
		    byteArray.push(lo)
		    byteArray.push(hi)
		  }

		  return byteArray
		}

		function base64ToBytes (str) {
		  return base64.toByteArray(base64clean(str))
		}

		function blitBuffer (src, dst, offset, length) {
		  for (var i = 0; i < length; ++i) {
		    if ((i + offset >= dst.length) || (i >= src.length)) break
		    dst[i + offset] = src[i]
		  }
		  return i
		}

		function isnan (val) {
		  return val !== val // eslint-disable-line no-self-compare
		}

		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

	/***/ },
	/* 4 */
	/***/ function(module, exports) {

		'use strict'

		exports.byteLength = byteLength
		exports.toByteArray = toByteArray
		exports.fromByteArray = fromByteArray

		var lookup = []
		var revLookup = []
		var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

		var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
		for (var i = 0, len = code.length; i < len; ++i) {
		  lookup[i] = code[i]
		  revLookup[code.charCodeAt(i)] = i
		}

		revLookup['-'.charCodeAt(0)] = 62
		revLookup['_'.charCodeAt(0)] = 63

		function placeHoldersCount (b64) {
		  var len = b64.length
		  if (len % 4 > 0) {
		    throw new Error('Invalid string. Length must be a multiple of 4')
		  }

		  // the number of equal signs (place holders)
		  // if there are two placeholders, than the two characters before it
		  // represent one byte
		  // if there is only one, then the three characters before it represent 2 bytes
		  // this is just a cheap hack to not do indexOf twice
		  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
		}

		function byteLength (b64) {
		  // base64 is 4/3 + up to two characters of the original data
		  return b64.length * 3 / 4 - placeHoldersCount(b64)
		}

		function toByteArray (b64) {
		  var i, j, l, tmp, placeHolders, arr
		  var len = b64.length
		  placeHolders = placeHoldersCount(b64)

		  arr = new Arr(len * 3 / 4 - placeHolders)

		  // if there are placeholders, only get up to the last complete 4 chars
		  l = placeHolders > 0 ? len - 4 : len

		  var L = 0

		  for (i = 0, j = 0; i < l; i += 4, j += 3) {
		    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
		    arr[L++] = (tmp >> 16) & 0xFF
		    arr[L++] = (tmp >> 8) & 0xFF
		    arr[L++] = tmp & 0xFF
		  }

		  if (placeHolders === 2) {
		    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
		    arr[L++] = tmp & 0xFF
		  } else if (placeHolders === 1) {
		    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
		    arr[L++] = (tmp >> 8) & 0xFF
		    arr[L++] = tmp & 0xFF
		  }

		  return arr
		}

		function tripletToBase64 (num) {
		  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
		}

		function encodeChunk (uint8, start, end) {
		  var tmp
		  var output = []
		  for (var i = start; i < end; i += 3) {
		    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
		    output.push(tripletToBase64(tmp))
		  }
		  return output.join('')
		}

		function fromByteArray (uint8) {
		  var tmp
		  var len = uint8.length
		  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
		  var output = ''
		  var parts = []
		  var maxChunkLength = 16383 // must be multiple of 3

		  // go through the array every three bytes, we'll deal with trailing stuff later
		  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
		    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
		  }

		  // pad the end with zeros, but make sure to not forget the extra bytes
		  if (extraBytes === 1) {
		    tmp = uint8[len - 1]
		    output += lookup[tmp >> 2]
		    output += lookup[(tmp << 4) & 0x3F]
		    output += '=='
		  } else if (extraBytes === 2) {
		    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
		    output += lookup[tmp >> 10]
		    output += lookup[(tmp >> 4) & 0x3F]
		    output += lookup[(tmp << 2) & 0x3F]
		    output += '='
		  }

		  parts.push(output)

		  return parts.join('')
		}


	/***/ },
	/* 5 */
	/***/ function(module, exports) {

		exports.read = function (buffer, offset, isLE, mLen, nBytes) {
		  var e, m
		  var eLen = nBytes * 8 - mLen - 1
		  var eMax = (1 << eLen) - 1
		  var eBias = eMax >> 1
		  var nBits = -7
		  var i = isLE ? (nBytes - 1) : 0
		  var d = isLE ? -1 : 1
		  var s = buffer[offset + i]

		  i += d

		  e = s & ((1 << (-nBits)) - 1)
		  s >>= (-nBits)
		  nBits += eLen
		  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

		  m = e & ((1 << (-nBits)) - 1)
		  e >>= (-nBits)
		  nBits += mLen
		  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

		  if (e === 0) {
		    e = 1 - eBias
		  } else if (e === eMax) {
		    return m ? NaN : ((s ? -1 : 1) * Infinity)
		  } else {
		    m = m + Math.pow(2, mLen)
		    e = e - eBias
		  }
		  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
		}

		exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
		  var e, m, c
		  var eLen = nBytes * 8 - mLen - 1
		  var eMax = (1 << eLen) - 1
		  var eBias = eMax >> 1
		  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
		  var i = isLE ? 0 : (nBytes - 1)
		  var d = isLE ? 1 : -1
		  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

		  value = Math.abs(value)

		  if (isNaN(value) || value === Infinity) {
		    m = isNaN(value) ? 1 : 0
		    e = eMax
		  } else {
		    e = Math.floor(Math.log(value) / Math.LN2)
		    if (value * (c = Math.pow(2, -e)) < 1) {
		      e--
		      c *= 2
		    }
		    if (e + eBias >= 1) {
		      value += rt / c
		    } else {
		      value += rt * Math.pow(2, 1 - eBias)
		    }
		    if (value * c >= 2) {
		      e++
		      c /= 2
		    }

		    if (e + eBias >= eMax) {
		      m = 0
		      e = eMax
		    } else if (e + eBias >= 1) {
		      m = (value * c - 1) * Math.pow(2, mLen)
		      e = e + eBias
		    } else {
		      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
		      e = 0
		    }
		  }

		  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

		  e = (e << mLen) | m
		  eLen += mLen
		  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

		  buffer[offset + i - d] |= s * 128
		}


	/***/ },
	/* 6 */
	/***/ function(module, exports) {

		var toString = {}.toString;

		module.exports = Array.isArray || function (arr) {
		  return toString.call(arr) == '[object Array]';
		};


	/***/ },
	/* 7 */
	/***/ function(module, exports) {

		// shim for using process in browser
		var process = module.exports = {};

		// cached from whatever global is present so that test runners that stub it
		// don't break things.  But we need to wrap it in a try catch in case it is
		// wrapped in strict mode code which doesn't define any globals.  It's inside a
		// function because try/catches deoptimize in certain engines.

		var cachedSetTimeout;
		var cachedClearTimeout;

		function defaultSetTimout() {
		    throw new Error('setTimeout has not been defined');
		}
		function defaultClearTimeout () {
		    throw new Error('clearTimeout has not been defined');
		}
		(function () {
		    try {
		        if (typeof setTimeout === 'function') {
		            cachedSetTimeout = setTimeout;
		        } else {
		            cachedSetTimeout = defaultSetTimout;
		        }
		    } catch (e) {
		        cachedSetTimeout = defaultSetTimout;
		    }
		    try {
		        if (typeof clearTimeout === 'function') {
		            cachedClearTimeout = clearTimeout;
		        } else {
		            cachedClearTimeout = defaultClearTimeout;
		        }
		    } catch (e) {
		        cachedClearTimeout = defaultClearTimeout;
		    }
		} ())
		function runTimeout(fun) {
		    if (cachedSetTimeout === setTimeout) {
		        //normal enviroments in sane situations
		        return setTimeout(fun, 0);
		    }
		    // if setTimeout wasn't available but was latter defined
		    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
		        cachedSetTimeout = setTimeout;
		        return setTimeout(fun, 0);
		    }
		    try {
		        // when when somebody has screwed with setTimeout but no I.E. maddness
		        return cachedSetTimeout(fun, 0);
		    } catch(e){
		        try {
		            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
		            return cachedSetTimeout.call(null, fun, 0);
		        } catch(e){
		            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
		            return cachedSetTimeout.call(this, fun, 0);
		        }
		    }


		}
		function runClearTimeout(marker) {
		    if (cachedClearTimeout === clearTimeout) {
		        //normal enviroments in sane situations
		        return clearTimeout(marker);
		    }
		    // if clearTimeout wasn't available but was latter defined
		    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
		        cachedClearTimeout = clearTimeout;
		        return clearTimeout(marker);
		    }
		    try {
		        // when when somebody has screwed with setTimeout but no I.E. maddness
		        return cachedClearTimeout(marker);
		    } catch (e){
		        try {
		            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
		            return cachedClearTimeout.call(null, marker);
		        } catch (e){
		            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
		            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
		            return cachedClearTimeout.call(this, marker);
		        }
		    }



		}
		var queue = [];
		var draining = false;
		var currentQueue;
		var queueIndex = -1;

		function cleanUpNextTick() {
		    if (!draining || !currentQueue) {
		        return;
		    }
		    draining = false;
		    if (currentQueue.length) {
		        queue = currentQueue.concat(queue);
		    } else {
		        queueIndex = -1;
		    }
		    if (queue.length) {
		        drainQueue();
		    }
		}

		function drainQueue() {
		    if (draining) {
		        return;
		    }
		    var timeout = runTimeout(cleanUpNextTick);
		    draining = true;

		    var len = queue.length;
		    while(len) {
		        currentQueue = queue;
		        queue = [];
		        while (++queueIndex < len) {
		            if (currentQueue) {
		                currentQueue[queueIndex].run();
		            }
		        }
		        queueIndex = -1;
		        len = queue.length;
		    }
		    currentQueue = null;
		    draining = false;
		    runClearTimeout(timeout);
		}

		process.nextTick = function (fun) {
		    var args = new Array(arguments.length - 1);
		    if (arguments.length > 1) {
		        for (var i = 1; i < arguments.length; i++) {
		            args[i - 1] = arguments[i];
		        }
		    }
		    queue.push(new Item(fun, args));
		    if (queue.length === 1 && !draining) {
		        runTimeout(drainQueue);
		    }
		};

		// v8 likes predictible objects
		function Item(fun, array) {
		    this.fun = fun;
		    this.array = array;
		}
		Item.prototype.run = function () {
		    this.fun.apply(null, this.array);
		};
		process.title = 'browser';
		process.browser = true;
		process.env = {};
		process.argv = [];
		process.version = ''; // empty string to avoid regexp issues
		process.versions = {};

		function noop() {}

		process.on = noop;
		process.addListener = noop;
		process.once = noop;
		process.off = noop;
		process.removeListener = noop;
		process.removeAllListeners = noop;
		process.emit = noop;

		process.binding = function (name) {
		    throw new Error('process.binding is not supported');
		};

		process.cwd = function () { return '/' };
		process.chdir = function (dir) {
		    throw new Error('process.chdir is not supported');
		};
		process.umask = function() { return 0; };


	/***/ },
	/* 8 */
	/***/ function(module, exports) {

		

	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.

		// resolves . and .. elements in a path array with directory names there
		// must be no slashes, empty elements, or device names (c:\) in the array
		// (so also no leading and trailing slashes - it does not distinguish
		// relative and absolute paths)
		function normalizeArray(parts, allowAboveRoot) {
		  // if the path tries to go above the root, `up` ends up > 0
		  var up = 0;
		  for (var i = parts.length - 1; i >= 0; i--) {
		    var last = parts[i];
		    if (last === '.') {
		      parts.splice(i, 1);
		    } else if (last === '..') {
		      parts.splice(i, 1);
		      up++;
		    } else if (up) {
		      parts.splice(i, 1);
		      up--;
		    }
		  }

		  // if the path is allowed to go above the root, restore leading ..s
		  if (allowAboveRoot) {
		    for (; up--; up) {
		      parts.unshift('..');
		    }
		  }

		  return parts;
		}

		// Split a filename into [root, dir, basename, ext], unix version
		// 'root' is just a slash, or nothing.
		var splitPathRe =
		    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
		var splitPath = function(filename) {
		  return splitPathRe.exec(filename).slice(1);
		};

		// path.resolve([from ...], to)
		// posix version
		exports.resolve = function() {
		  var resolvedPath = '',
		      resolvedAbsolute = false;

		  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
		    var path = (i >= 0) ? arguments[i] : process.cwd();

		    // Skip empty and invalid entries
		    if (typeof path !== 'string') {
		      throw new TypeError('Arguments to path.resolve must be strings');
		    } else if (!path) {
		      continue;
		    }

		    resolvedPath = path + '/' + resolvedPath;
		    resolvedAbsolute = path.charAt(0) === '/';
		  }

		  // At this point the path should be resolved to a full absolute path, but
		  // handle relative paths to be safe (might happen when process.cwd() fails)

		  // Normalize the path
		  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
		    return !!p;
		  }), !resolvedAbsolute).join('/');

		  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
		};

		// path.normalize(path)
		// posix version
		exports.normalize = function(path) {
		  var isAbsolute = exports.isAbsolute(path),
		      trailingSlash = substr(path, -1) === '/';

		  // Normalize the path
		  path = normalizeArray(filter(path.split('/'), function(p) {
		    return !!p;
		  }), !isAbsolute).join('/');

		  if (!path && !isAbsolute) {
		    path = '.';
		  }
		  if (path && trailingSlash) {
		    path += '/';
		  }

		  return (isAbsolute ? '/' : '') + path;
		};

		// posix version
		exports.isAbsolute = function(path) {
		  return path.charAt(0) === '/';
		};

		// posix version
		exports.join = function() {
		  var paths = Array.prototype.slice.call(arguments, 0);
		  return exports.normalize(filter(paths, function(p, index) {
		    if (typeof p !== 'string') {
		      throw new TypeError('Arguments to path.join must be strings');
		    }
		    return p;
		  }).join('/'));
		};


		// path.relative(from, to)
		// posix version
		exports.relative = function(from, to) {
		  from = exports.resolve(from).substr(1);
		  to = exports.resolve(to).substr(1);

		  function trim(arr) {
		    var start = 0;
		    for (; start < arr.length; start++) {
		      if (arr[start] !== '') break;
		    }

		    var end = arr.length - 1;
		    for (; end >= 0; end--) {
		      if (arr[end] !== '') break;
		    }

		    if (start > end) return [];
		    return arr.slice(start, end - start + 1);
		  }

		  var fromParts = trim(from.split('/'));
		  var toParts = trim(to.split('/'));

		  var length = Math.min(fromParts.length, toParts.length);
		  var samePartsLength = length;
		  for (var i = 0; i < length; i++) {
		    if (fromParts[i] !== toParts[i]) {
		      samePartsLength = i;
		      break;
		    }
		  }

		  var outputParts = [];
		  for (var i = samePartsLength; i < fromParts.length; i++) {
		    outputParts.push('..');
		  }

		  outputParts = outputParts.concat(toParts.slice(samePartsLength));

		  return outputParts.join('/');
		};

		exports.sep = '/';
		exports.delimiter = ':';

		exports.dirname = function(path) {
		  var result = splitPath(path),
		      root = result[0],
		      dir = result[1];

		  if (!root && !dir) {
		    // No dirname whatsoever
		    return '.';
		  }

		  if (dir) {
		    // It has a dirname, strip trailing slash
		    dir = dir.substr(0, dir.length - 1);
		  }

		  return root + dir;
		};


		exports.basename = function(path, ext) {
		  var f = splitPath(path)[2];
		  // TODO: make this comparison case-insensitive on windows?
		  if (ext && f.substr(-1 * ext.length) === ext) {
		    f = f.substr(0, f.length - ext.length);
		  }
		  return f;
		};


		exports.extname = function(path) {
		  return splitPath(path)[3];
		};

		function filter (xs, f) {
		    if (xs.filter) return xs.filter(f);
		    var res = [];
		    for (var i = 0; i < xs.length; i++) {
		        if (f(xs[i], i, xs)) res.push(xs[i]);
		    }
		    return res;
		}

		// String.prototype.substr - negative index don't work in IE8
		var substr = 'ab'.substr(-1) === 'b'
		    ? function (str, start, len) { return str.substr(start, len) }
		    : function (str, start, len) {
		        if (start < 0) start = str.length + start;
		        return str.substr(start, len);
		    }
		;

		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(global, process) {// Copyright Joyent, Inc. and other Node contributors.
		//
		// Permission is hereby granted, free of charge, to any person obtaining a
		// copy of this software and associated documentation files (the
		// "Software"), to deal in the Software without restriction, including
		// without limitation the rights to use, copy, modify, merge, publish,
		// distribute, sublicense, and/or sell copies of the Software, and to permit
		// persons to whom the Software is furnished to do so, subject to the
		// following conditions:
		//
		// The above copyright notice and this permission notice shall be included
		// in all copies or substantial portions of the Software.
		//
		// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
		// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
		// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
		// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
		// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
		// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
		// USE OR OTHER DEALINGS IN THE SOFTWARE.

		var formatRegExp = /%[sdj%]/g;
		exports.format = function(f) {
		  if (!isString(f)) {
		    var objects = [];
		    for (var i = 0; i < arguments.length; i++) {
		      objects.push(inspect(arguments[i]));
		    }
		    return objects.join(' ');
		  }

		  var i = 1;
		  var args = arguments;
		  var len = args.length;
		  var str = String(f).replace(formatRegExp, function(x) {
		    if (x === '%%') return '%';
		    if (i >= len) return x;
		    switch (x) {
		      case '%s': return String(args[i++]);
		      case '%d': return Number(args[i++]);
		      case '%j':
		        try {
		          return JSON.stringify(args[i++]);
		        } catch (_) {
		          return '[Circular]';
		        }
		      default:
		        return x;
		    }
		  });
		  for (var x = args[i]; i < len; x = args[++i]) {
		    if (isNull(x) || !isObject(x)) {
		      str += ' ' + x;
		    } else {
		      str += ' ' + inspect(x);
		    }
		  }
		  return str;
		};


		// Mark that a method should not be used.
		// Returns a modified function which warns once by default.
		// If --no-deprecation is set, then it is a no-op.
		exports.deprecate = function(fn, msg) {
		  // Allow for deprecating things in the process of starting up.
		  if (isUndefined(global.process)) {
		    return function() {
		      return exports.deprecate(fn, msg).apply(this, arguments);
		    };
		  }

		  if (process.noDeprecation === true) {
		    return fn;
		  }

		  var warned = false;
		  function deprecated() {
		    if (!warned) {
		      if (process.throwDeprecation) {
		        throw new Error(msg);
		      } else if (process.traceDeprecation) {
		        console.trace(msg);
		      } else {
		        console.error(msg);
		      }
		      warned = true;
		    }
		    return fn.apply(this, arguments);
		  }

		  return deprecated;
		};


		var debugs = {};
		var debugEnviron;
		exports.debuglog = function(set) {
		  if (isUndefined(debugEnviron))
		    debugEnviron = process.env.NODE_DEBUG || '';
		  set = set.toUpperCase();
		  if (!debugs[set]) {
		    if (new RegExp('\\b' + set + '\\b', 'i').test(debugEnviron)) {
		      var pid = process.pid;
		      debugs[set] = function() {
		        var msg = exports.format.apply(exports, arguments);
		        console.error('%s %d: %s', set, pid, msg);
		      };
		    } else {
		      debugs[set] = function() {};
		    }
		  }
		  return debugs[set];
		};


		/**
		 * Echos the value of a value. Trys to print the value out
		 * in the best way possible given the different types.
		 *
		 * @param {Object} obj The object to print out.
		 * @param {Object} opts Optional options object that alters the output.
		 */
		/* legacy: obj, showHidden, depth, colors*/
		function inspect(obj, opts) {
		  // default options
		  var ctx = {
		    seen: [],
		    stylize: stylizeNoColor
		  };
		  // legacy...
		  if (arguments.length >= 3) ctx.depth = arguments[2];
		  if (arguments.length >= 4) ctx.colors = arguments[3];
		  if (isBoolean(opts)) {
		    // legacy...
		    ctx.showHidden = opts;
		  } else if (opts) {
		    // got an "options" object
		    exports._extend(ctx, opts);
		  }
		  // set default options
		  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
		  if (isUndefined(ctx.depth)) ctx.depth = 2;
		  if (isUndefined(ctx.colors)) ctx.colors = false;
		  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
		  if (ctx.colors) ctx.stylize = stylizeWithColor;
		  return formatValue(ctx, obj, ctx.depth);
		}
		exports.inspect = inspect;


		// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
		inspect.colors = {
		  'bold' : [1, 22],
		  'italic' : [3, 23],
		  'underline' : [4, 24],
		  'inverse' : [7, 27],
		  'white' : [37, 39],
		  'grey' : [90, 39],
		  'black' : [30, 39],
		  'blue' : [34, 39],
		  'cyan' : [36, 39],
		  'green' : [32, 39],
		  'magenta' : [35, 39],
		  'red' : [31, 39],
		  'yellow' : [33, 39]
		};

		// Don't use 'blue' not visible on cmd.exe
		inspect.styles = {
		  'special': 'cyan',
		  'number': 'yellow',
		  'boolean': 'yellow',
		  'undefined': 'grey',
		  'null': 'bold',
		  'string': 'green',
		  'date': 'magenta',
		  // "name": intentionally not styling
		  'regexp': 'red'
		};


		function stylizeWithColor(str, styleType) {
		  var style = inspect.styles[styleType];

		  if (style) {
		    return '\u001b[' + inspect.colors[style][0] + 'm' + str +
		           '\u001b[' + inspect.colors[style][1] + 'm';
		  } else {
		    return str;
		  }
		}


		function stylizeNoColor(str, styleType) {
		  return str;
		}


		function arrayToHash(array) {
		  var hash = {};

		  array.forEach(function(val, idx) {
		    hash[val] = true;
		  });

		  return hash;
		}


		function formatValue(ctx, value, recurseTimes) {
		  // Provide a hook for user-specified inspect functions.
		  // Check that value is an object with an inspect function on it
		  if (ctx.customInspect &&
		      value &&
		      isFunction(value.inspect) &&
		      // Filter out the util module, it's inspect function is special
		      value.inspect !== exports.inspect &&
		      // Also filter out any prototype objects using the circular check.
		      !(value.constructor && value.constructor.prototype === value)) {
		    var ret = value.inspect(recurseTimes, ctx);
		    if (!isString(ret)) {
		      ret = formatValue(ctx, ret, recurseTimes);
		    }
		    return ret;
		  }

		  // Primitive types cannot have properties
		  var primitive = formatPrimitive(ctx, value);
		  if (primitive) {
		    return primitive;
		  }

		  // Look up the keys of the object.
		  var keys = Object.keys(value);
		  var visibleKeys = arrayToHash(keys);

		  if (ctx.showHidden) {
		    keys = Object.getOwnPropertyNames(value);
		  }

		  // IE doesn't make error fields non-enumerable
		  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
		  if (isError(value)
		      && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
		    return formatError(value);
		  }

		  // Some type of object without properties can be shortcutted.
		  if (keys.length === 0) {
		    if (isFunction(value)) {
		      var name = value.name ? ': ' + value.name : '';
		      return ctx.stylize('[Function' + name + ']', 'special');
		    }
		    if (isRegExp(value)) {
		      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
		    }
		    if (isDate(value)) {
		      return ctx.stylize(Date.prototype.toString.call(value), 'date');
		    }
		    if (isError(value)) {
		      return formatError(value);
		    }
		  }

		  var base = '', array = false, braces = ['{', '}'];

		  // Make Array say that they are Array
		  if (isArray(value)) {
		    array = true;
		    braces = ['[', ']'];
		  }

		  // Make functions say that they are functions
		  if (isFunction(value)) {
		    var n = value.name ? ': ' + value.name : '';
		    base = ' [Function' + n + ']';
		  }

		  // Make RegExps say that they are RegExps
		  if (isRegExp(value)) {
		    base = ' ' + RegExp.prototype.toString.call(value);
		  }

		  // Make dates with properties first say the date
		  if (isDate(value)) {
		    base = ' ' + Date.prototype.toUTCString.call(value);
		  }

		  // Make error with message first say the error
		  if (isError(value)) {
		    base = ' ' + formatError(value);
		  }

		  if (keys.length === 0 && (!array || value.length == 0)) {
		    return braces[0] + base + braces[1];
		  }

		  if (recurseTimes < 0) {
		    if (isRegExp(value)) {
		      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
		    } else {
		      return ctx.stylize('[Object]', 'special');
		    }
		  }

		  ctx.seen.push(value);

		  var output;
		  if (array) {
		    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
		  } else {
		    output = keys.map(function(key) {
		      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
		    });
		  }

		  ctx.seen.pop();

		  return reduceToSingleString(output, base, braces);
		}


		function formatPrimitive(ctx, value) {
		  if (isUndefined(value))
		    return ctx.stylize('undefined', 'undefined');
		  if (isString(value)) {
		    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '')
		                                             .replace(/'/g, "\\'")
		                                             .replace(/\\"/g, '"') + '\'';
		    return ctx.stylize(simple, 'string');
		  }
		  if (isNumber(value))
		    return ctx.stylize('' + value, 'number');
		  if (isBoolean(value))
		    return ctx.stylize('' + value, 'boolean');
		  // For some reason typeof null is "object", so special case here.
		  if (isNull(value))
		    return ctx.stylize('null', 'null');
		}


		function formatError(value) {
		  return '[' + Error.prototype.toString.call(value) + ']';
		}


		function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
		  var output = [];
		  for (var i = 0, l = value.length; i < l; ++i) {
		    if (hasOwnProperty(value, String(i))) {
		      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
		          String(i), true));
		    } else {
		      output.push('');
		    }
		  }
		  keys.forEach(function(key) {
		    if (!key.match(/^\d+$/)) {
		      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys,
		          key, true));
		    }
		  });
		  return output;
		}


		function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
		  var name, str, desc;
		  desc = Object.getOwnPropertyDescriptor(value, key) || { value: value[key] };
		  if (desc.get) {
		    if (desc.set) {
		      str = ctx.stylize('[Getter/Setter]', 'special');
		    } else {
		      str = ctx.stylize('[Getter]', 'special');
		    }
		  } else {
		    if (desc.set) {
		      str = ctx.stylize('[Setter]', 'special');
		    }
		  }
		  if (!hasOwnProperty(visibleKeys, key)) {
		    name = '[' + key + ']';
		  }
		  if (!str) {
		    if (ctx.seen.indexOf(desc.value) < 0) {
		      if (isNull(recurseTimes)) {
		        str = formatValue(ctx, desc.value, null);
		      } else {
		        str = formatValue(ctx, desc.value, recurseTimes - 1);
		      }
		      if (str.indexOf('\n') > -1) {
		        if (array) {
		          str = str.split('\n').map(function(line) {
		            return '  ' + line;
		          }).join('\n').substr(2);
		        } else {
		          str = '\n' + str.split('\n').map(function(line) {
		            return '   ' + line;
		          }).join('\n');
		        }
		      }
		    } else {
		      str = ctx.stylize('[Circular]', 'special');
		    }
		  }
		  if (isUndefined(name)) {
		    if (array && key.match(/^\d+$/)) {
		      return str;
		    }
		    name = JSON.stringify('' + key);
		    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
		      name = name.substr(1, name.length - 2);
		      name = ctx.stylize(name, 'name');
		    } else {
		      name = name.replace(/'/g, "\\'")
		                 .replace(/\\"/g, '"')
		                 .replace(/(^"|"$)/g, "'");
		      name = ctx.stylize(name, 'string');
		    }
		  }

		  return name + ': ' + str;
		}


		function reduceToSingleString(output, base, braces) {
		  var numLinesEst = 0;
		  var length = output.reduce(function(prev, cur) {
		    numLinesEst++;
		    if (cur.indexOf('\n') >= 0) numLinesEst++;
		    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
		  }, 0);

		  if (length > 60) {
		    return braces[0] +
		           (base === '' ? '' : base + '\n ') +
		           ' ' +
		           output.join(',\n  ') +
		           ' ' +
		           braces[1];
		  }

		  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
		}


		// NOTE: These type checking functions intentionally don't use `instanceof`
		// because it is fragile and can be easily faked with `Object.create()`.
		function isArray(ar) {
		  return Array.isArray(ar);
		}
		exports.isArray = isArray;

		function isBoolean(arg) {
		  return typeof arg === 'boolean';
		}
		exports.isBoolean = isBoolean;

		function isNull(arg) {
		  return arg === null;
		}
		exports.isNull = isNull;

		function isNullOrUndefined(arg) {
		  return arg == null;
		}
		exports.isNullOrUndefined = isNullOrUndefined;

		function isNumber(arg) {
		  return typeof arg === 'number';
		}
		exports.isNumber = isNumber;

		function isString(arg) {
		  return typeof arg === 'string';
		}
		exports.isString = isString;

		function isSymbol(arg) {
		  return typeof arg === 'symbol';
		}
		exports.isSymbol = isSymbol;

		function isUndefined(arg) {
		  return arg === void 0;
		}
		exports.isUndefined = isUndefined;

		function isRegExp(re) {
		  return isObject(re) && objectToString(re) === '[object RegExp]';
		}
		exports.isRegExp = isRegExp;

		function isObject(arg) {
		  return typeof arg === 'object' && arg !== null;
		}
		exports.isObject = isObject;

		function isDate(d) {
		  return isObject(d) && objectToString(d) === '[object Date]';
		}
		exports.isDate = isDate;

		function isError(e) {
		  return isObject(e) &&
		      (objectToString(e) === '[object Error]' || e instanceof Error);
		}
		exports.isError = isError;

		function isFunction(arg) {
		  return typeof arg === 'function';
		}
		exports.isFunction = isFunction;

		function isPrimitive(arg) {
		  return arg === null ||
		         typeof arg === 'boolean' ||
		         typeof arg === 'number' ||
		         typeof arg === 'string' ||
		         typeof arg === 'symbol' ||  // ES6 symbol
		         typeof arg === 'undefined';
		}
		exports.isPrimitive = isPrimitive;

		exports.isBuffer = __webpack_require__(11);

		function objectToString(o) {
		  return Object.prototype.toString.call(o);
		}


		function pad(n) {
		  return n < 10 ? '0' + n.toString(10) : n.toString(10);
		}


		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
		              'Oct', 'Nov', 'Dec'];

		// 26 Feb 16:19:34
		function timestamp() {
		  var d = new Date();
		  var time = [pad(d.getHours()),
		              pad(d.getMinutes()),
		              pad(d.getSeconds())].join(':');
		  return [d.getDate(), months[d.getMonth()], time].join(' ');
		}


		// log is just a thin wrapper to console.log that prepends a timestamp
		exports.log = function() {
		  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
		};


		/**
		 * Inherit the prototype methods from one constructor into another.
		 *
		 * The Function.prototype.inherits from lang.js rewritten as a standalone
		 * function (not on Function.prototype). NOTE: If this file is to be loaded
		 * during bootstrapping this function needs to be rewritten using some native
		 * functions as prototype setup using normal JavaScript does not work as
		 * expected during bootstrapping (see mirror.js in r114903).
		 *
		 * @param {function} ctor Constructor function which needs to inherit the
		 *     prototype.
		 * @param {function} superCtor Constructor function to inherit prototype from.
		 */
		exports.inherits = __webpack_require__(12);

		exports._extend = function(origin, add) {
		  // Don't do anything if add isn't an object
		  if (!add || !isObject(add)) return origin;

		  var keys = Object.keys(add);
		  var i = keys.length;
		  while (i--) {
		    origin[keys[i]] = add[keys[i]];
		  }
		  return origin;
		};

		function hasOwnProperty(obj, prop) {
		  return Object.prototype.hasOwnProperty.call(obj, prop);
		}

		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(7)))

	/***/ },
	/* 11 */
	/***/ function(module, exports) {

		module.exports = function isBuffer(arg) {
		  return arg && typeof arg === 'object'
		    && typeof arg.copy === 'function'
		    && typeof arg.fill === 'function'
		    && typeof arg.readUInt8 === 'function';
		}

	/***/ },
	/* 12 */
	/***/ function(module, exports) {

		if (typeof Object.create === 'function') {
		  // implementation from standard node.js 'util' module
		  module.exports = function inherits(ctor, superCtor) {
		    ctor.super_ = superCtor
		    ctor.prototype = Object.create(superCtor.prototype, {
		      constructor: {
		        value: ctor,
		        enumerable: false,
		        writable: true,
		        configurable: true
		      }
		    });
		  };
		} else {
		  // old school shim for old browsers
		  module.exports = function inherits(ctor, superCtor) {
		    ctor.super_ = superCtor
		    var TempCtor = function () {}
		    TempCtor.prototype = superCtor.prototype
		    ctor.prototype = new TempCtor()
		    ctor.prototype.constructor = ctor
		  }
		}


	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

		// Declare internals

		var internals = {};

		exports.escapeJavaScript = function (input) {

		    if (!input) {
		        return '';
		    }

		    var escaped = '';

		    for (var i = 0; i < input.length; ++i) {

		        var charCode = input.charCodeAt(i);

		        if (internals.isSafe(charCode)) {
		            escaped += input[i];
		        } else {
		            escaped += internals.escapeJavaScriptChar(charCode);
		        }
		    }

		    return escaped;
		};

		exports.escapeHtml = function (input) {

		    if (!input) {
		        return '';
		    }

		    var escaped = '';

		    for (var i = 0; i < input.length; ++i) {

		        var charCode = input.charCodeAt(i);

		        if (internals.isSafe(charCode)) {
		            escaped += input[i];
		        } else {
		            escaped += internals.escapeHtmlChar(charCode);
		        }
		    }

		    return escaped;
		};

		internals.escapeJavaScriptChar = function (charCode) {

		    if (charCode >= 256) {
		        return '\\u' + internals.padLeft('' + charCode, 4);
		    }

		    var hexValue = new Buffer(String.fromCharCode(charCode), 'ascii').toString('hex');
		    return '\\x' + internals.padLeft(hexValue, 2);
		};

		internals.escapeHtmlChar = function (charCode) {

		    var namedEscape = internals.namedHtml[charCode];
		    if (typeof namedEscape !== 'undefined') {
		        return namedEscape;
		    }

		    if (charCode >= 256) {
		        return '&#' + charCode + ';';
		    }

		    var hexValue = new Buffer(String.fromCharCode(charCode), 'ascii').toString('hex');
		    return '&#x' + internals.padLeft(hexValue, 2) + ';';
		};

		internals.padLeft = function (str, len) {

		    while (str.length < len) {
		        str = '0' + str;
		    }

		    return str;
		};

		internals.isSafe = function (charCode) {

		    return typeof internals.safeCharCodes[charCode] !== 'undefined';
		};

		internals.namedHtml = {
		    '38': '&amp;',
		    '60': '&lt;',
		    '62': '&gt;',
		    '34': '&quot;',
		    '160': '&nbsp;',
		    '162': '&cent;',
		    '163': '&pound;',
		    '164': '&curren;',
		    '169': '&copy;',
		    '174': '&reg;'
		};

		internals.safeCharCodes = function () {

		    var safe = {};

		    for (var i = 32; i < 123; ++i) {

		        if (i >= 97 || // a-z
		        i >= 65 && i <= 90 || // A-Z
		        i >= 48 && i <= 57 || // 0-9
		        i === 32 || // space
		        i === 46 || // .
		        i === 44 || // ,
		        i === 45 || // -
		        i === 58 || // :
		        i === 95) {
		            // _

		            safe[i] = null;
		        }
		    }

		    return safe;
		}();
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer))

	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var Hoek = __webpack_require__(2);
		var Ref = __webpack_require__(15);
		var Errors = __webpack_require__(16);
		var Alternatives = null; // Delay-loaded to prevent circular dependencies
		var Cast = null;

		// Declare internals

		var internals = {
		    Set: __webpack_require__(18)
		};

		internals.defaults = {
		    abortEarly: true,
		    convert: true,
		    allowUnknown: false,
		    skipFunctions: false,
		    stripUnknown: false,
		    language: {},
		    presence: 'optional',
		    strip: false,
		    noDefaults: false

		    // context: null
		};

		module.exports = internals.Any = function () {
		    function _class() {
		        _classCallCheck(this, _class);

		        Cast = Cast || __webpack_require__(19);

		        this.isJoi = true;
		        this._type = 'any';
		        this._settings = null;
		        this._valids = new internals.Set();
		        this._invalids = new internals.Set();
		        this._tests = [];
		        this._refs = [];
		        this._flags = {
		            /*
		             presence: 'optional',                   // optional, required, forbidden, ignore
		             allowOnly: false,
		             allowUnknown: undefined,
		             default: undefined,
		             forbidden: false,
		             encoding: undefined,
		             insensitive: false,
		             trim: false,
		             case: undefined,                        // upper, lower
		             empty: undefined,
		             func: false,
		             raw: false
		             */
		        };

		        this._description = null;
		        this._unit = null;
		        this._notes = [];
		        this._tags = [];
		        this._examples = [];
		        this._meta = [];

		        this._inner = {}; // Hash of arrays of immutable objects
		    }

		    _class.prototype.createError = function createError(type, context, state, options) {

		        return Errors.create(type, context, state, options, this._flags);
		    };

		    _class.prototype.checkOptions = function checkOptions(options) {

		        var Schemas = __webpack_require__(31);
		        var result = Schemas.options.validate(options);
		        if (result.error) {
		            throw new Error(result.error.details[0].message);
		        }
		    };

		    _class.prototype.clone = function clone() {

		        var obj = Object.create(Object.getPrototypeOf(this));

		        obj.isJoi = true;
		        obj._type = this._type;
		        obj._settings = internals.concatSettings(this._settings);
		        obj._valids = Hoek.clone(this._valids);
		        obj._invalids = Hoek.clone(this._invalids);
		        obj._tests = this._tests.slice();
		        obj._refs = this._refs.slice();
		        obj._flags = Hoek.clone(this._flags);

		        obj._description = this._description;
		        obj._unit = this._unit;
		        obj._notes = this._notes.slice();
		        obj._tags = this._tags.slice();
		        obj._examples = this._examples.slice();
		        obj._meta = this._meta.slice();

		        obj._inner = {};
		        var inners = Object.keys(this._inner);
		        for (var i = 0; i < inners.length; ++i) {
		            var key = inners[i];
		            obj._inner[key] = this._inner[key] ? this._inner[key].slice() : null;
		        }

		        return obj;
		    };

		    _class.prototype.concat = function concat(schema) {

		        Hoek.assert(schema instanceof internals.Any, 'Invalid schema object');
		        Hoek.assert(this._type === 'any' || schema._type === 'any' || schema._type === this._type, 'Cannot merge type', this._type, 'with another type:', schema._type);

		        var obj = this.clone();

		        if (this._type === 'any' && schema._type !== 'any') {

		            // Reset values as if we were "this"
		            var tmpObj = schema.clone();
		            var keysToRestore = ['_settings', '_valids', '_invalids', '_tests', '_refs', '_flags', '_description', '_unit', '_notes', '_tags', '_examples', '_meta', '_inner'];

		            for (var i = 0; i < keysToRestore.length; ++i) {
		                tmpObj[keysToRestore[i]] = obj[keysToRestore[i]];
		            }

		            obj = tmpObj;
		        }

		        obj._settings = obj._settings ? internals.concatSettings(obj._settings, schema._settings) : schema._settings;
		        obj._valids.merge(schema._valids, schema._invalids);
		        obj._invalids.merge(schema._invalids, schema._valids);
		        obj._tests = obj._tests.concat(schema._tests);
		        obj._refs = obj._refs.concat(schema._refs);
		        Hoek.merge(obj._flags, schema._flags);

		        obj._description = schema._description || obj._description;
		        obj._unit = schema._unit || obj._unit;
		        obj._notes = obj._notes.concat(schema._notes);
		        obj._tags = obj._tags.concat(schema._tags);
		        obj._examples = obj._examples.concat(schema._examples);
		        obj._meta = obj._meta.concat(schema._meta);

		        var inners = Object.keys(schema._inner);
		        var isObject = obj._type === 'object';
		        for (var _i = 0; _i < inners.length; ++_i) {
		            var key = inners[_i];
		            var source = schema._inner[key];
		            if (source) {
		                var target = obj._inner[key];
		                if (target) {
		                    if (isObject && key === 'children') {
		                        var keys = {};

		                        for (var j = 0; j < target.length; ++j) {
		                            keys[target[j].key] = j;
		                        }

		                        for (var _j = 0; _j < source.length; ++_j) {
		                            var sourceKey = source[_j].key;
		                            if (keys[sourceKey] >= 0) {
		                                target[keys[sourceKey]] = {
		                                    key: sourceKey,
		                                    schema: target[keys[sourceKey]].schema.concat(source[_j].schema)
		                                };
		                            } else {
		                                target.push(source[_j]);
		                            }
		                        }
		                    } else {
		                        obj._inner[key] = obj._inner[key].concat(source);
		                    }
		                } else {
		                    obj._inner[key] = source.slice();
		                }
		            }
		        }

		        return obj;
		    };

		    _class.prototype._test = function _test(name, arg, func, options) {

		        var obj = this.clone();
		        obj._tests.push({ func: func, name: name, arg: arg, options: options });
		        return obj;
		    };

		    _class.prototype.options = function options(_options) {

		        Hoek.assert(!_options.context, 'Cannot override context');
		        this.checkOptions(_options);

		        var obj = this.clone();
		        obj._settings = internals.concatSettings(obj._settings, _options);
		        return obj;
		    };

		    _class.prototype.strict = function strict(isStrict) {

		        var obj = this.clone();
		        obj._settings = obj._settings || {};
		        obj._settings.convert = isStrict === undefined ? false : !isStrict;
		        return obj;
		    };

		    _class.prototype.raw = function raw(isRaw) {

		        var obj = this.clone();
		        obj._flags.raw = isRaw === undefined ? true : isRaw;
		        return obj;
		    };

		    _class.prototype.error = function error(err) {

		        Hoek.assert(err && err instanceof Error, 'Must provide a valid Error object');

		        var obj = this.clone();
		        obj._flags.error = err;
		        return obj;
		    };

		    _class.prototype.allow = function allow() {

		        var obj = this.clone();
		        var values = Hoek.flatten(Array.prototype.slice.call(arguments));
		        for (var i = 0; i < values.length; ++i) {
		            var value = values[i];

		            Hoek.assert(value !== undefined, 'Cannot call allow/valid/invalid with undefined');
		            obj._invalids.remove(value);
		            obj._valids.add(value, obj._refs);
		        }
		        return obj;
		    };

		    _class.prototype.valid = function valid() {

		        var obj = this.allow.apply(this, arguments);
		        obj._flags.allowOnly = true;
		        return obj;
		    };

		    _class.prototype.invalid = function invalid(value) {

		        var obj = this.clone();
		        var values = Hoek.flatten(Array.prototype.slice.call(arguments));
		        for (var i = 0; i < values.length; ++i) {
		            value = values[i];

		            Hoek.assert(value !== undefined, 'Cannot call allow/valid/invalid with undefined');
		            obj._valids.remove(value);
		            obj._invalids.add(value, this._refs);
		        }

		        return obj;
		    };

		    _class.prototype.required = function required() {

		        var obj = this.clone();
		        obj._flags.presence = 'required';
		        return obj;
		    };

		    _class.prototype.optional = function optional() {

		        var obj = this.clone();
		        obj._flags.presence = 'optional';
		        return obj;
		    };

		    _class.prototype.forbidden = function forbidden() {

		        var obj = this.clone();
		        obj._flags.presence = 'forbidden';
		        return obj;
		    };

		    _class.prototype.strip = function strip() {

		        var obj = this.clone();
		        obj._flags.strip = true;
		        return obj;
		    };

		    _class.prototype.applyFunctionToChildren = function applyFunctionToChildren(children, fn, args, root) {

		        children = [].concat(children);

		        if (children.length !== 1 || children[0] !== '') {
		            root = root ? root + '.' : '';

		            var extraChildren = (children[0] === '' ? children.slice(1) : children).map(function (child) {

		                return root + child;
		            });

		            throw new Error('unknown key(s) ' + extraChildren.join(', '));
		        }

		        return this[fn].apply(this, args);
		    };

		    _class.prototype.default = function _default(value, description) {

		        if (typeof value === 'function' && !Ref.isRef(value)) {

		            if (!value.description && description) {

		                value.description = description;
		            }

		            if (!this._flags.func) {
		                Hoek.assert(typeof value.description === 'string' && value.description.length > 0, 'description must be provided when default value is a function');
		            }
		        }

		        var obj = this.clone();
		        obj._flags.default = value;
		        Ref.push(obj._refs, value);
		        return obj;
		    };

		    _class.prototype.empty = function empty(schema) {

		        var obj = this.clone();
		        obj._flags.empty = schema === undefined ? undefined : Cast.schema(schema);
		        return obj;
		    };

		    _class.prototype.when = function when(ref, options) {

		        Hoek.assert(options && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object', 'Invalid options');
		        Hoek.assert(options.then !== undefined || options.otherwise !== undefined, 'options must have at least one of "then" or "otherwise"');

		        var then = options.hasOwnProperty('then') ? this.concat(Cast.schema(options.then)) : undefined;
		        var otherwise = options.hasOwnProperty('otherwise') ? this.concat(Cast.schema(options.otherwise)) : undefined;

		        Alternatives = Alternatives || __webpack_require__(28);
		        var obj = Alternatives.when(ref, { is: options.is, then: then, otherwise: otherwise });
		        obj._flags.presence = 'ignore';
		        obj._settings = internals.concatSettings(obj._settings, { baseType: this });

		        return obj;
		    };

		    _class.prototype.description = function description(desc) {

		        Hoek.assert(desc && typeof desc === 'string', 'Description must be a non-empty string');

		        var obj = this.clone();
		        obj._description = desc;
		        return obj;
		    };

		    _class.prototype.notes = function notes(_notes) {

		        Hoek.assert(_notes && (typeof _notes === 'string' || Array.isArray(_notes)), 'Notes must be a non-empty string or array');

		        var obj = this.clone();
		        obj._notes = obj._notes.concat(_notes);
		        return obj;
		    };

		    _class.prototype.tags = function tags(_tags) {

		        Hoek.assert(_tags && (typeof _tags === 'string' || Array.isArray(_tags)), 'Tags must be a non-empty string or array');

		        var obj = this.clone();
		        obj._tags = obj._tags.concat(_tags);
		        return obj;
		    };

		    _class.prototype.meta = function meta(_meta) {

		        Hoek.assert(_meta !== undefined, 'Meta cannot be undefined');

		        var obj = this.clone();
		        obj._meta = obj._meta.concat(_meta);
		        return obj;
		    };

		    _class.prototype.example = function example(value) {

		        Hoek.assert(arguments.length, 'Missing example');
		        var result = this._validate(value, null, internals.defaults);
		        Hoek.assert(!result.errors, 'Bad example:', result.errors && Errors.process(result.errors, value));

		        var obj = this.clone();
		        obj._examples.push(value);
		        return obj;
		    };

		    _class.prototype.unit = function unit(name) {

		        Hoek.assert(name && typeof name === 'string', 'Unit name must be a non-empty string');

		        var obj = this.clone();
		        obj._unit = name;
		        return obj;
		    };

		    _class.prototype._prepareEmptyValue = function _prepareEmptyValue(value) {

		        if (typeof value === 'string' && this._flags.trim) {
		            return value.trim();
		        }

		        return value;
		    };

		    _class.prototype._validate = function _validate(value, state, options, reference) {
		        var _this = this;

		        var originalValue = value;

		        // Setup state and settings

		        state = state || { key: '', path: '', parent: null, reference: reference };

		        if (this._settings) {
		            options = internals.concatSettings(options, this._settings);
		        }

		        var errors = [];
		        var finish = function finish() {

		            var finalValue = void 0;

		            if (!_this._flags.strip) {
		                if (value !== undefined) {
		                    finalValue = _this._flags.raw ? originalValue : value;
		                } else if (options.noDefaults) {
		                    finalValue = originalValue;
		                } else if (Ref.isRef(_this._flags.default)) {
		                    finalValue = _this._flags.default(state.parent, options);
		                } else if (typeof _this._flags.default === 'function' && !(_this._flags.func && !_this._flags.default.description)) {

		                    var args = void 0;

		                    if (state.parent !== null && _this._flags.default.length > 0) {

		                        args = [Hoek.clone(state.parent), options];
		                    }

		                    var defaultValue = internals._try(_this._flags.default, args);
		                    finalValue = defaultValue.value;
		                    if (defaultValue.error) {
		                        errors.push(_this.createError('any.default', defaultValue.error, state, options));
		                    }
		                } else {
		                    finalValue = Hoek.clone(_this._flags.default);
		                }
		            }

		            return {
		                value: finalValue,
		                errors: errors.length ? errors : null
		            };
		        };

		        if (this._coerce) {
		            var coerced = this._coerce.call(this, value, state, options);
		            if (coerced.errors) {
		                value = coerced.value;
		                errors = errors.concat(coerced.errors);
		                return finish(); // Coerced error always aborts early
		            }

		            value = coerced.value;
		        }

		        if (this._flags.empty && !this._flags.empty._validate(this._prepareEmptyValue(value), null, internals.defaults).errors) {
		            value = undefined;
		        }

		        // Check presence requirements

		        var presence = this._flags.presence || options.presence;
		        if (presence === 'optional') {
		            if (value === undefined) {
		                var isDeepDefault = this._flags.hasOwnProperty('default') && this._flags.default === undefined;
		                if (isDeepDefault && this._type === 'object') {
		                    value = {};
		                } else {
		                    return finish();
		                }
		            }
		        } else if (presence === 'required' && value === undefined) {

		            errors.push(this.createError('any.required', null, state, options));
		            return finish();
		        } else if (presence === 'forbidden') {
		            if (value === undefined) {
		                return finish();
		            }

		            errors.push(this.createError('any.unknown', null, state, options));
		            return finish();
		        }

		        // Check allowed and denied values using the original value

		        if (this._valids.has(value, state, options, this._flags.insensitive)) {
		            return finish();
		        }

		        if (this._invalids.has(value, state, options, this._flags.insensitive)) {
		            errors.push(this.createError(value === '' ? 'any.empty' : 'any.invalid', null, state, options));
		            if (options.abortEarly || value === undefined) {
		                // No reason to keep validating missing value

		                return finish();
		            }
		        }

		        // Convert value and validate type

		        if (this._base) {
		            var base = this._base.call(this, value, state, options);
		            if (base.errors) {
		                value = base.value;
		                errors = errors.concat(base.errors);
		                return finish(); // Base error always aborts early
		            }

		            if (base.value !== value) {
		                value = base.value;

		                // Check allowed and denied values using the converted value

		                if (this._valids.has(value, state, options, this._flags.insensitive)) {
		                    return finish();
		                }

		                if (this._invalids.has(value, state, options, this._flags.insensitive)) {
		                    errors.push(this.createError(value === '' ? 'any.empty' : 'any.invalid', null, state, options));
		                    if (options.abortEarly) {
		                        return finish();
		                    }
		                }
		            }
		        }

		        // Required values did not match

		        if (this._flags.allowOnly) {
		            errors.push(this.createError('any.allowOnly', { valids: this._valids.values({ stripUndefined: true }) }, state, options));
		            if (options.abortEarly) {
		                return finish();
		            }
		        }

		        // Helper.validate tests

		        for (var i = 0; i < this._tests.length; ++i) {
		            var test = this._tests[i];
		            var ret = test.func.call(this, value, state, options);
		            if (ret instanceof Errors.Err) {
		                errors.push(ret);
		                if (options.abortEarly) {
		                    return finish();
		                }
		            } else {
		                value = ret;
		            }
		        }

		        return finish();
		    };

		    _class.prototype._validateWithOptions = function _validateWithOptions(value, options, callback) {

		        if (options) {
		            this.checkOptions(options);
		        }

		        var settings = internals.concatSettings(internals.defaults, options);
		        var result = this._validate(value, null, settings);
		        var errors = Errors.process(result.errors, value);

		        if (callback) {
		            return callback(errors, result.value);
		        }

		        return { error: errors, value: result.value };
		    };

		    _class.prototype.validate = function validate(value, options, callback) {

		        if (typeof options === 'function') {
		            return this._validateWithOptions(value, null, options);
		        }

		        return this._validateWithOptions(value, options, callback);
		    };

		    _class.prototype.describe = function describe() {
		        var _this2 = this;

		        var description = {
		            type: this._type
		        };

		        var flags = Object.keys(this._flags);
		        if (flags.length) {
		            if (['empty', 'default', 'lazy', 'label'].some(function (flag) {
		                return _this2._flags.hasOwnProperty(flag);
		            })) {
		                description.flags = {};
		                for (var i = 0; i < flags.length; ++i) {
		                    var flag = flags[i];
		                    if (flag === 'empty') {
		                        description.flags[flag] = this._flags[flag].describe();
		                    } else if (flag === 'default') {
		                        if (Ref.isRef(this._flags[flag])) {
		                            description.flags[flag] = this._flags[flag].toString();
		                        } else if (typeof this._flags[flag] === 'function') {
		                            description.flags[flag] = this._flags[flag].description;
		                        } else {
		                            description.flags[flag] = this._flags[flag];
		                        }
		                    } else if (flag === 'lazy' || flag === 'label') {
		                        // We don't want it in the description
		                    } else {
		                        description.flags[flag] = this._flags[flag];
		                    }
		                }
		            } else {
		                description.flags = this._flags;
		            }
		        }

		        if (this._description) {
		            description.description = this._description;
		        }

		        if (this._notes.length) {
		            description.notes = this._notes;
		        }

		        if (this._tags.length) {
		            description.tags = this._tags;
		        }

		        if (this._meta.length) {
		            description.meta = this._meta;
		        }

		        if (this._examples.length) {
		            description.examples = this._examples;
		        }

		        if (this._unit) {
		            description.unit = this._unit;
		        }

		        var valids = this._valids.values();
		        if (valids.length) {
		            description.valids = valids.map(function (v) {

		                return Ref.isRef(v) ? v.toString() : v;
		            });
		        }

		        var invalids = this._invalids.values();
		        if (invalids.length) {
		            description.invalids = invalids.map(function (v) {

		                return Ref.isRef(v) ? v.toString() : v;
		            });
		        }

		        description.rules = [];

		        for (var _i2 = 0; _i2 < this._tests.length; ++_i2) {
		            var validator = this._tests[_i2];
		            var item = { name: validator.name };

		            if (validator.arg !== void 0) {
		                item.arg = Ref.isRef(validator.arg) ? validator.arg.toString() : validator.arg;
		            }

		            var options = validator.options;
		            if (options) {
		                if (options.hasRef) {
		                    item.arg = {};
		                    var keys = Object.keys(validator.arg);
		                    for (var j = 0; j < keys.length; ++j) {
		                        var key = keys[j];
		                        var value = validator.arg[key];
		                        item.arg[key] = Ref.isRef(value) ? value.toString() : value;
		                    }
		                }

		                if (typeof options.description === 'string') {
		                    item.description = options.description;
		                } else if (typeof options.description === 'function') {
		                    item.description = options.description(item.arg);
		                }
		            }

		            description.rules.push(item);
		        }

		        if (!description.rules.length) {
		            delete description.rules;
		        }

		        var label = this._getLabel();
		        if (label) {
		            description.label = label;
		        }

		        return description;
		    };

		    _class.prototype.label = function label(name) {

		        Hoek.assert(name && typeof name === 'string', 'Label name must be a non-empty string');

		        var obj = this.clone();
		        obj._flags.label = name;
		        return obj;
		    };

		    _class.prototype._getLabel = function _getLabel(def) {

		        return this._flags.label || def;
		    };

		    return _class;
		}();

		internals.Any.prototype.isImmutable = true; // Prevents Hoek from deep cloning schema objects

		// Aliases

		internals.Any.prototype.only = internals.Any.prototype.equal = internals.Any.prototype.valid;
		internals.Any.prototype.disallow = internals.Any.prototype.not = internals.Any.prototype.invalid;
		internals.Any.prototype.exist = internals.Any.prototype.required;

		internals._try = function (fn, args) {

		    var err = void 0;
		    var result = void 0;

		    try {
		        result = fn.apply(null, args);
		    } catch (e) {
		        err = e;
		    }

		    return {
		        value: result,
		        error: err
		    };
		};

		internals.concatSettings = function (target, source) {

		    // Used to avoid cloning context

		    if (!target && !source) {

		        return null;
		    }

		    var obj = {};

		    if (target) {
		        _extends(obj, target);
		    }

		    if (source) {
		        var sKeys = Object.keys(source);
		        for (var i = 0; i < sKeys.length; ++i) {
		            var key = sKeys[i];
		            if (key !== 'language' || !obj.hasOwnProperty(key)) {

		                obj[key] = source[key];
		            } else {
		                obj[key] = Hoek.applyToDefaults(obj[key], source[key]);
		            }
		        }
		    }

		    return obj;
		};

	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		var Hoek = __webpack_require__(2);

		// Declare internals

		var internals = {};

		exports.create = function (key, options) {

		    Hoek.assert(typeof key === 'string', 'Invalid reference key:', key);

		    var settings = Hoek.clone(options); // options can be reused and modified

		    var ref = function ref(value, validationOptions) {

		        return Hoek.reach(ref.isContext ? validationOptions.context : value, ref.key, settings);
		    };

		    ref.isContext = key[0] === (settings && settings.contextPrefix || '$');
		    ref.key = ref.isContext ? key.slice(1) : key;
		    ref.path = ref.key.split(settings && settings.separator || '.');
		    ref.depth = ref.path.length;
		    ref.root = ref.path[0];
		    ref.isJoi = true;

		    ref.toString = function () {

		        return (ref.isContext ? 'context:' : 'ref:') + ref.key;
		    };

		    return ref;
		};

		exports.isRef = function (ref) {

		    return typeof ref === 'function' && ref.isJoi;
		};

		exports.push = function (array, ref) {

		    if (exports.isRef(ref) && !ref.isContext) {

		        array.push(ref.root);
		    }
		};

	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var Hoek = __webpack_require__(2);
		var Language = __webpack_require__(17);

		// Declare internals

		var internals = {};

		internals.stringify = function (value, wrapArrays) {

		    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

		    if (value === null) {
		        return 'null';
		    }

		    if (type === 'string') {
		        return value;
		    }

		    if (value instanceof exports.Err || type === 'function') {
		        return value.toString();
		    }

		    if (type === 'object') {
		        if (Array.isArray(value)) {
		            var partial = '';

		            for (var i = 0; i < value.length; ++i) {
		                partial = partial + (partial.length ? ', ' : '') + internals.stringify(value[i], wrapArrays);
		            }

		            return wrapArrays ? '[' + partial + ']' : partial;
		        }

		        return value.toString();
		    }

		    return JSON.stringify(value);
		};

		exports.Err = function () {
		    function _class(type, context, state, options, flags) {
		        _classCallCheck(this, _class);

		        this.isJoi = true;
		        this.type = type;
		        this.context = context || {};
		        this.context.key = state.key;
		        this.path = state.path;
		        this.options = options;
		        this.flags = flags;
		    }

		    _class.prototype.toString = function toString() {
		        var _this = this;

		        var localized = this.options.language;

		        if (this.flags.label) {
		            this.context.key = this.flags.label;
		        } else if (this.context.key === '' || this.context.key === null) {
		            this.context.key = localized.root || Language.errors.root;
		        }

		        var format = Hoek.reach(localized, this.type) || Hoek.reach(Language.errors, this.type);
		        var hasKey = /\{\{\!?key\}\}/.test(format);
		        var skipKey = format.length > 2 && format[0] === '!' && format[1] === '!';

		        if (skipKey) {
		            format = format.slice(2);
		        }

		        if (!hasKey && !skipKey) {
		            format = (Hoek.reach(localized, 'key') || Hoek.reach(Language.errors, 'key')) + format;
		        }

		        var wrapArrays = Hoek.reach(localized, 'messages.wrapArrays');
		        if (typeof wrapArrays !== 'boolean') {
		            wrapArrays = Language.errors.messages.wrapArrays;
		        }

		        return format.replace(/\{\{(\!?)([^}]+)\}\}/g, function ($0, isSecure, name) {

		            var value = Hoek.reach(_this.context, name);
		            var normalized = internals.stringify(value, wrapArrays);
		            return isSecure ? Hoek.escapeHtml(normalized) : normalized;
		        });
		    };

		    return _class;
		}();

		exports.create = function (type, context, state, options, flags) {

		    return new exports.Err(type, context, state, options, flags);
		};

		exports.process = function (errors, object) {

		    if (!errors || !errors.length) {
		        return null;
		    }

		    // Construct error

		    var message = '';
		    var details = [];

		    var processErrors = function processErrors(localErrors, parent) {

		        for (var i = 0; i < localErrors.length; ++i) {
		            var item = localErrors[i];

		            if (item.flags.error) {
		                return item.flags.error;
		            }

		            var itemMessage = void 0;
		            if (parent === undefined) {
		                itemMessage = item.toString();
		                message = message + (message ? '. ' : '') + itemMessage;
		            }

		            // Do not push intermediate errors, we're only interested in leafs

		            if (item.context.reason && item.context.reason.length) {
		                var _override = processErrors(item.context.reason, item.path);
		                if (_override) {
		                    return _override;
		                }
		            } else {
		                details.push({
		                    message: itemMessage || item.toString(),
		                    path: internals.getPath(item),
		                    type: item.type,
		                    context: item.context
		                });
		            }
		        }
		    };

		    var override = processErrors(errors);
		    if (override) {
		        return override;
		    }

		    var error = new Error(message);
		    error.isJoi = true;
		    error.name = 'ValidationError';
		    error.details = details;
		    error._object = object;
		    error.annotate = internals.annotate;
		    return error;
		};

		internals.getPath = function (item) {

		    return item.path || item.context.key;
		};

		// Inspired by json-stringify-safe
		internals.safeStringify = function (obj, spaces) {

		    return JSON.stringify(obj, internals.serializer(), spaces);
		};

		internals.serializer = function () {

		    var keys = [];
		    var stack = [];

		    var cycleReplacer = function cycleReplacer(key, value) {

		        if (stack[0] === value) {
		            return '[Circular ~]';
		        }

		        return '[Circular ~.' + keys.slice(0, stack.indexOf(value)).join('.') + ']';
		    };

		    return function (key, value) {

		        if (stack.length > 0) {
		            var thisPos = stack.indexOf(this);
		            if (~thisPos) {
		                stack.length = thisPos + 1;
		                keys.length = thisPos + 1;
		                keys[thisPos] = key;
		            } else {
		                stack.push(this);
		                keys.push(key);
		            }

		            if (~stack.indexOf(value)) {
		                value = cycleReplacer.call(this, key, value);
		            }
		        } else {
		            stack.push(value);
		        }

		        if (Array.isArray(value) && value.placeholders) {
		            var placeholders = value.placeholders;
		            var arrWithPlaceholders = [];
		            for (var i = 0; i < value.length; ++i) {
		                if (placeholders[i]) {
		                    arrWithPlaceholders.push(placeholders[i]);
		                }
		                arrWithPlaceholders.push(value[i]);
		            }

		            value = arrWithPlaceholders;
		        }

		        if (value === Infinity || value === -Infinity || Number.isNaN(value) || typeof value === 'function' || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'symbol') {
		            return '[' + value.toString() + ']';
		        }

		        return value;
		    };
		};

		internals.annotate = function (stripColorCodes) {

		    var redFgEscape = stripColorCodes ? '' : '\x1B[31m';
		    var redBgEscape = stripColorCodes ? '' : '\x1B[41m';
		    var endColor = stripColorCodes ? '' : '\x1B[0m';

		    if (_typeof(this._object) !== 'object') {
		        return this.details[0].message;
		    }

		    var obj = Hoek.clone(this._object || {});

		    var lookup = {};
		    for (var i = this.details.length - 1; i >= 0; --i) {
		        // Reverse order to process deepest child first
		        var pos = i + 1;
		        var error = this.details[i];
		        var path = error.path.split('.');
		        var ref = obj;
		        for (var j = 0; j < path.length && ref; ++j) {
		            var seg = path[j];
		            if (j + 1 < path.length) {
		                ref = ref[seg];
		            } else {
		                var value = ref[seg];
		                if (Array.isArray(ref)) {
		                    var arrayLabel = '_$idx$_' + pos + '_$end$_';
		                    if (!ref.placeholders) {
		                        ref.placeholders = {};
		                    }

		                    if (ref.placeholders[seg]) {
		                        ref.placeholders[seg] = ref.placeholders[seg].replace('_$end$_', ', ' + pos + '_$end$_');
		                    } else {
		                        ref.placeholders[seg] = arrayLabel;
		                    }
		                } else {
		                    if (value !== undefined) {
		                        delete ref[seg];
		                        var objectLabel = seg + '_$key$_' + pos + '_$end$_';
		                        ref[objectLabel] = value;
		                        lookup[error.path] = objectLabel;
		                    } else if (lookup[error.path]) {
		                        var replacement = lookup[error.path];
		                        var appended = replacement.replace('_$end$_', ', ' + pos + '_$end$_');
		                        ref[appended] = ref[replacement];
		                        lookup[error.path] = appended;
		                        delete ref[replacement];
		                    } else {
		                        ref['_$miss$_' + seg + '|' + pos + '_$end$_'] = '__missing__';
		                    }
		                }
		            }
		        }
		    }

		    var replacers = {
		        key: /_\$key\$_([, \d]+)_\$end\$_\"/g,
		        missing: /\"_\$miss\$_([^\|]+)\|(\d+)_\$end\$_\"\: \"__missing__\"/g,
		        arrayIndex: /\s*\"_\$idx\$_([, \d]+)_\$end\$_\",?\n(.*)/g,
		        specials: /"\[(NaN|Symbol.*|-?Infinity|function.*|\(.*)\]"/g
		    };

		    var message = internals.safeStringify(obj, 2).replace(replacers.key, function ($0, $1) {
		        return '" ' + redFgEscape + '[' + $1 + ']' + endColor;
		    }).replace(replacers.missing, function ($0, $1, $2) {
		        return redBgEscape + '"' + $1 + '"' + endColor + redFgEscape + ' [' + $2 + ']: -- missing --' + endColor;
		    }).replace(replacers.arrayIndex, function ($0, $1, $2) {
		        return '\n' + $2 + ' ' + redFgEscape + '[' + $1 + ']' + endColor;
		    }).replace(replacers.specials, function ($0, $1) {
		        return $1;
		    });

		    message = message + '\n' + redFgEscape;

		    for (var _i = 0; _i < this.details.length; ++_i) {
		        var _pos = _i + 1;
		        message = message + '\n[' + _pos + '] ' + this.details[_i].message;
		    }

		    message = message + endColor;

		    return message;
		};

	/***/ },
	/* 17 */
	/***/ function(module, exports) {

		'use strict';

		// Load modules


		// Declare internals

		var internals = {};

		exports.errors = {
		    root: 'value',
		    key: '"{{!key}}" ',
		    messages: {
		        wrapArrays: true
		    },
		    any: {
		        unknown: 'is not allowed',
		        invalid: 'contains an invalid value',
		        empty: 'is not allowed to be empty',
		        required: 'is required',
		        allowOnly: 'must be one of {{valids}}',
		        default: 'threw an error when running default method'
		    },
		    alternatives: {
		        base: 'not matching any of the allowed alternatives'
		    },
		    array: {
		        base: 'must be an array',
		        includes: 'at position {{pos}} does not match any of the allowed types',
		        includesSingle: 'single value of "{{!key}}" does not match any of the allowed types',
		        includesOne: 'at position {{pos}} fails because {{reason}}',
		        includesOneSingle: 'single value of "{{!key}}" fails because {{reason}}',
		        includesRequiredUnknowns: 'does not contain {{unknownMisses}} required value(s)',
		        includesRequiredKnowns: 'does not contain {{knownMisses}}',
		        includesRequiredBoth: 'does not contain {{knownMisses}} and {{unknownMisses}} other required value(s)',
		        excludes: 'at position {{pos}} contains an excluded value',
		        excludesSingle: 'single value of "{{!key}}" contains an excluded value',
		        min: 'must contain at least {{limit}} items',
		        max: 'must contain less than or equal to {{limit}} items',
		        length: 'must contain {{limit}} items',
		        ordered: 'at position {{pos}} fails because {{reason}}',
		        orderedLength: 'at position {{pos}} fails because array must contain at most {{limit}} items',
		        sparse: 'must not be a sparse array',
		        unique: 'position {{pos}} contains a duplicate value'
		    },
		    boolean: {
		        base: 'must be a boolean'
		    },
		    binary: {
		        base: 'must be a buffer or a string',
		        min: 'must be at least {{limit}} bytes',
		        max: 'must be less than or equal to {{limit}} bytes',
		        length: 'must be {{limit}} bytes'
		    },
		    date: {
		        base: 'must be a number of milliseconds or valid date string',
		        format: 'must be a string with one of the following formats {{format}}',
		        strict: 'must be a valid date',
		        min: 'must be larger than or equal to "{{limit}}"',
		        max: 'must be less than or equal to "{{limit}}"',
		        isoDate: 'must be a valid ISO 8601 date',
		        timestamp: {
		            javascript: 'must be a valid timestamp or number of milliseconds',
		            unix: 'must be a valid timestamp or number of seconds'
		        },
		        ref: 'references "{{ref}}" which is not a date'
		    },
		    function: {
		        base: 'must be a Function',
		        arity: 'must have an arity of {{n}}',
		        minArity: 'must have an arity greater or equal to {{n}}',
		        maxArity: 'must have an arity lesser or equal to {{n}}',
		        ref: 'must be a Joi reference'
		    },
		    lazy: {
		        base: '!!schema error: lazy schema must be set',
		        schema: '!!schema error: lazy schema function must return a schema'
		    },
		    object: {
		        base: 'must be an object',
		        child: '!!child "{{!child}}" fails because {{reason}}',
		        min: 'must have at least {{limit}} children',
		        max: 'must have less than or equal to {{limit}} children',
		        length: 'must have {{limit}} children',
		        allowUnknown: '!!"{{!child}}" is not allowed',
		        with: 'missing required peer "{{peer}}"',
		        without: 'conflict with forbidden peer "{{peer}}"',
		        missing: 'must contain at least one of {{peers}}',
		        xor: 'contains a conflict between exclusive peers {{peers}}',
		        or: 'must contain at least one of {{peers}}',
		        and: 'contains {{present}} without its required peers {{missing}}',
		        nand: '!!"{{main}}" must not exist simultaneously with {{peers}}',
		        assert: '!!"{{ref}}" validation failed because "{{ref}}" failed to {{message}}',
		        rename: {
		            multiple: 'cannot rename child "{{from}}" because multiple renames are disabled and another key was already renamed to "{{to}}"',
		            override: 'cannot rename child "{{from}}" because override is disabled and target "{{to}}" exists'
		        },
		        type: 'must be an instance of "{{type}}"',
		        schema: 'must be a Joi instance'
		    },
		    number: {
		        base: 'must be a number',
		        min: 'must be larger than or equal to {{limit}}',
		        max: 'must be less than or equal to {{limit}}',
		        less: 'must be less than {{limit}}',
		        greater: 'must be greater than {{limit}}',
		        float: 'must be a float or double',
		        integer: 'must be an integer',
		        negative: 'must be a negative number',
		        positive: 'must be a positive number',
		        precision: 'must have no more than {{limit}} decimal places',
		        ref: 'references "{{ref}}" which is not a number',
		        multiple: 'must be a multiple of {{multiple}}'
		    },
		    string: {
		        base: 'must be a string',
		        min: 'length must be at least {{limit}} characters long',
		        max: 'length must be less than or equal to {{limit}} characters long',
		        length: 'length must be {{limit}} characters long',
		        alphanum: 'must only contain alpha-numeric characters',
		        token: 'must only contain alpha-numeric and underscore characters',
		        regex: {
		            base: 'with value "{{!value}}" fails to match the required pattern: {{pattern}}',
		            name: 'with value "{{!value}}" fails to match the {{name}} pattern',
		            invert: {
		                base: 'with value "{{!value}}" matches the inverted pattern: {{pattern}}',
		                name: 'with value "{{!value}}" matches the inverted {{name}} pattern'
		            }
		        },
		        email: 'must be a valid email',
		        uri: 'must be a valid uri',
		        uriRelativeOnly: 'must be a valid relative uri',
		        uriCustomScheme: 'must be a valid uri with a scheme matching the {{scheme}} pattern',
		        isoDate: 'must be a valid ISO 8601 date',
		        guid: 'must be a valid GUID',
		        hex: 'must only contain hexadecimal characters',
		        base64: 'must be a valid base64 string',
		        hostname: 'must be a valid hostname',
		        lowercase: 'must only contain lowercase characters',
		        uppercase: 'must only contain uppercase characters',
		        trim: 'must not have leading or trailing whitespace',
		        creditCard: 'must be a credit card',
		        ref: 'references "{{ref}}" which is not a number',
		        ip: 'must be a valid ip address with a {{cidr}} CIDR',
		        ipVersion: 'must be a valid ip address of one of the following versions {{version}} with a {{cidr}} CIDR'
		    }
		};

	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		var Ref = __webpack_require__(15);

		module.exports = function () {
		    function Set() {
		        _classCallCheck(this, Set);

		        this._set = [];
		    }

		    Set.prototype.add = function add(value, refs) {

		        if (!Ref.isRef(value) && this.has(value, null, null, false)) {

		            return;
		        }

		        if (refs !== undefined) {
		            // If it's a merge, we don't have any refs
		            Ref.push(refs, value);
		        }

		        this._set.push(value);
		        return this;
		    };

		    Set.prototype.merge = function merge(add, remove) {

		        for (var i = 0; i < add._set.length; ++i) {
		            this.add(add._set[i]);
		        }

		        for (var _i = 0; _i < remove._set.length; ++_i) {
		            this.remove(remove._set[_i]);
		        }

		        return this;
		    };

		    Set.prototype.remove = function remove(value) {

		        this._set = this._set.filter(function (item) {
		            return value !== item;
		        });
		        return this;
		    };

		    Set.prototype.has = function has(value, state, options, insensitive) {

		        for (var i = 0; i < this._set.length; ++i) {
		            var items = this._set[i];

		            if (state && Ref.isRef(items)) {
		                // Only resolve references if there is a state, otherwise it's a merge
		                items = items(state.reference || state.parent, options);
		            }

		            if (!Array.isArray(items)) {
		                items = [items];
		            }

		            for (var j = 0; j < items.length; ++j) {
		                var item = items[j];
		                if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== (typeof item === 'undefined' ? 'undefined' : _typeof(item))) {
		                    continue;
		                }

		                if (value === item || value instanceof Date && item instanceof Date && value.getTime() === item.getTime() || insensitive && typeof value === 'string' && value.toLowerCase() === item.toLowerCase() || Buffer.isBuffer(value) && Buffer.isBuffer(item) && value.length === item.length && value.toString('binary') === item.toString('binary')) {

		                    return true;
		                }
		            }
		        }

		        return false;
		    };

		    Set.prototype.values = function values(options) {

		        if (options && options.stripUndefined) {
		            var values = [];

		            for (var i = 0; i < this._set.length; ++i) {
		                var item = this._set[i];
		                if (item !== undefined) {
		                    values.push(item);
		                }
		            }

		            return values;
		        }

		        return this._set.slice();
		    };

		    Set.prototype.slice = function slice() {

		        var newSet = new Set();
		        newSet._set = this._set.slice();

		        return newSet;
		    };

		    Set.prototype.concat = function concat(source) {

		        var newSet = new Set();
		        newSet._set = this._set.concat(source._set);

		        return newSet;
		    };

		    return Set;
		}();
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer))

	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		var Hoek = __webpack_require__(2);
		var Ref = __webpack_require__(15);

		// Type modules are delay-loaded to prevent circular dependencies


		// Declare internals

		var internals = {
		    any: null,
		    date: __webpack_require__(20),
		    string: __webpack_require__(21),
		    number: __webpack_require__(26),
		    boolean: __webpack_require__(27),
		    alt: null,
		    object: null
		};

		exports.schema = function (config) {

		    internals.any = internals.any || new (__webpack_require__(14))();
		    internals.alt = internals.alt || __webpack_require__(28);
		    internals.object = internals.object || __webpack_require__(29);

		    if (config !== undefined && config !== null && (typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {

		        if (config.isJoi) {
		            return config;
		        }

		        if (Array.isArray(config)) {
		            return internals.alt.try(config);
		        }

		        if (config instanceof RegExp) {
		            return internals.string.regex(config);
		        }

		        if (config instanceof Date) {
		            return internals.date.valid(config);
		        }

		        return internals.object.keys(config);
		    }

		    if (typeof config === 'string') {
		        return internals.string.valid(config);
		    }

		    if (typeof config === 'number') {
		        return internals.number.valid(config);
		    }

		    if (typeof config === 'boolean') {
		        return internals.boolean.valid(config);
		    }

		    if (Ref.isRef(config)) {
		        return internals.any.valid(config);
		    }

		    Hoek.assert(config === null, 'Invalid schema content:', config);

		    return internals.any.valid(null);
		};

		exports.ref = function (id) {

		    return Ref.isRef(id) ? id : Ref.create(id);
		};

	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

		var Any = __webpack_require__(14);
		var Ref = __webpack_require__(15);
		var Hoek = __webpack_require__(2);

		// Declare internals

		var internals = {};

		internals.isoDate = /^(?:\d{4}(?!\d{2}\b))(?:(-?)(?:(?:0[1-9]|1[0-2])(?:\1(?:[12]\d|0[1-9]|3[01]))?|W(?:[0-4]\d|5[0-2])(?:-?[1-7])?|(?:00[1-9]|0[1-9]\d|[12]\d{2}|3(?:[0-5]\d|6[1-6])))(?![T]$|[T][\d]+Z$)(?:[T\s](?:(?:(?:[01]\d|2[0-3])(?:(:?)[0-5]\d)?|24\:?00)(?:[.,]\d+(?!:))?)(?:\2[0-5]\d(?:[.,]\d+)?)?(?:[Z]|(?:[+-])(?:[01]\d|2[0-3])(?::?[0-5]\d)?)?)?)?$/;
		internals.invalidDate = new Date('');
		internals.isIsoDate = function () {

		    var isoString = internals.isoDate.toString();

		    return function (date) {

		        return date && date.toString() === isoString;
		    };
		}();

		internals.Date = function (_Any) {
		    _inherits(_class, _Any);

		    function _class() {
		        _classCallCheck(this, _class);

		        var _this = _possibleConstructorReturn(this, _Any.call(this));

		        _this._type = 'date';
		        return _this;
		    }

		    _class.prototype._base = function _base(value, state, options) {

		        var result = {
		            value: options.convert && internals.Date.toDate(value, this._flags.format, this._flags.timestamp, this._flags.multiplier) || value
		        };

		        if (result.value instanceof Date && !isNaN(result.value.getTime())) {
		            result.errors = null;
		        } else if (!options.convert) {
		            result.errors = this.createError('date.strict', null, state, options);
		        } else {
		            var type = void 0;
		            if (internals.isIsoDate(this._flags.format)) {
		                type = 'isoDate';
		            } else if (this._flags.timestamp) {
		                type = 'timestamp.' + this._flags.timestamp;
		            } else {
		                type = 'base';
		            }

		            result.errors = this.createError('date.' + type, null, state, options);
		        }

		        return result;
		    };

		    _class.toDate = function toDate(value, format, timestamp, multiplier) {

		        if (value instanceof Date) {
		            return value;
		        }

		        if (typeof value === 'string' || typeof value === 'number' && !isNaN(value) && isFinite(value)) {

		            if (typeof value === 'string' && /^[+-]?\d+(\.\d+)?$/.test(value)) {

		                value = parseFloat(value);
		            }

		            var date = void 0;
		            if (format && internals.isIsoDate(format)) {
		                date = format.test(value) ? new Date(value) : internals.invalidDate;
		            } else if (timestamp && multiplier) {
		                date = new Date(value * multiplier);
		            } else {
		                date = new Date(value);
		            }

		            if (!isNaN(date.getTime())) {
		                return date;
		            }
		        }

		        return null;
		    };

		    _class.prototype.iso = function iso() {

		        var obj = this.clone();
		        obj._flags.format = internals.isoDate;
		        return obj;
		    };

		    _class.prototype.timestamp = function timestamp(type) {

		        type = type || 'javascript';

		        var allowed = ['javascript', 'unix'];
		        Hoek.assert(allowed.indexOf(type) !== -1, '"type" must be one of "' + allowed.join('", "') + '"');

		        var obj = this.clone();
		        obj._flags.timestamp = type;
		        obj._flags.multiplier = type === 'unix' ? 1000 : 1;
		        return obj;
		    };

		    _class.prototype._isIsoDate = function _isIsoDate(value) {

		        return internals.isoDate.test(value);
		    };

		    return _class;
		}(Any);

		internals.compare = function (type, compare) {

		    return function (date) {

		        var isNow = date === 'now';
		        var isRef = Ref.isRef(date);

		        if (!isNow && !isRef) {
		            date = internals.Date.toDate(date);
		        }

		        Hoek.assert(date, 'Invalid date format');

		        return this._test(type, date, function (value, state, options) {

		            var compareTo = void 0;
		            if (isNow) {
		                compareTo = Date.now();
		            } else if (isRef) {
		                compareTo = internals.Date.toDate(date(state.reference || state.parent, options));

		                if (!compareTo) {
		                    return this.createError('date.ref', { ref: date.key }, state, options);
		                }

		                compareTo = compareTo.getTime();
		            } else {
		                compareTo = date.getTime();
		            }

		            if (compare(value.getTime(), compareTo)) {
		                return value;
		            }

		            return this.createError('date.' + type, { limit: new Date(compareTo) }, state, options);
		        });
		    };
		};
		internals.Date.prototype.min = internals.compare('min', function (value, date) {
		    return value >= date;
		});
		internals.Date.prototype.max = internals.compare('max', function (value, date) {
		    return value <= date;
		});

		module.exports = new internals.Date();

	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

		// Load modules

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

		var Net = __webpack_require__(8);
		var Hoek = __webpack_require__(2);
		var Isemail = __webpack_require__(22);
		var Any = __webpack_require__(14);
		var Ref = __webpack_require__(15);
		var JoiDate = __webpack_require__(20);
		var Uri = __webpack_require__(23);
		var Ip = __webpack_require__(25);

		// Declare internals

		var internals = {
		    uriRegex: Uri.createUriRegex(),
		    ipRegex: Ip.createIpRegex(['ipv4', 'ipv6', 'ipvfuture'], 'optional')
		};

		internals.String = function (_Any) {
		    _inherits(_class, _Any);

		    function _class() {
		        _classCallCheck(this, _class);

		        var _this = _possibleConstructorReturn(this, _Any.call(this));

		        _this._type = 'string';
		        _this._invalids.add('');
		        return _this;
		    }

		    _class.prototype._base = function _base(value, state, options) {

		        if (typeof value === 'string' && options.convert) {

		            if (this._flags.case) {
		                value = this._flags.case === 'upper' ? value.toLocaleUpperCase() : value.toLocaleLowerCase();
		            }

		            if (this._flags.trim) {
		                value = value.trim();
		            }

		            if (this._inner.replacements) {

		                for (var i = 0; i < this._inner.replacements.length; ++i) {
		                    var replacement = this._inner.replacements[i];
		                    value = value.replace(replacement.pattern, replacement.replacement);
		                }
		            }

		            if (this._flags.truncate) {
		                for (var _i = 0; _i < this._tests.length; ++_i) {
		                    var test = this._tests[_i];
		                    if (test.name === 'max') {
		                        value = value.slice(0, test.arg);
		                        break;
		                    }
		                }
		            }
		        }

		        return {
		            value: value,
		            errors: typeof value === 'string' ? null : this.createError('string.base', { value: value }, state, options)
		        };
		    };

		    _class.prototype.insensitive = function insensitive() {

		        var obj = this.clone();
		        obj._flags.insensitive = true;
		        return obj;
		    };

		    _class.prototype.creditCard = function creditCard() {

		        return this._test('creditCard', undefined, function (value, state, options) {

		            var i = value.length;
		            var sum = 0;
		            var mul = 1;

		            while (i--) {
		                var char = value.charAt(i) * mul;
		                sum = sum + (char - (char > 9) * 9);
		                mul = mul ^ 3;
		            }

		            var check = sum % 10 === 0 && sum > 0;
		            return check ? value : this.createError('string.creditCard', { value: value }, state, options);
		        });
		    };

		    _class.prototype.regex = function regex(pattern, patternOptions) {

		        Hoek.assert(pattern instanceof RegExp, 'pattern must be a RegExp');

		        var patternObject = {
		            pattern: new RegExp(pattern.source, pattern.ignoreCase ? 'i' : undefined) // Future version should break this and forbid unsupported regex flags
		        };

		        if (typeof patternOptions === 'string') {
		            patternObject.name = patternOptions;
		        } else if ((typeof patternOptions === 'undefined' ? 'undefined' : _typeof(patternOptions)) === 'object') {
		            patternObject.invert = !!patternOptions.invert;

		            if (patternOptions.name) {
		                patternObject.name = patternOptions.name;
		            }
		        }

		        var errorCode = ['string.regex', patternObject.invert ? '.invert' : '', patternObject.name ? '.name' : '.base'].join('');

		        return this._test('regex', patternObject, function (value, state, options) {

		            var patternMatch = patternObject.pattern.test(value);

		            if (patternMatch ^ patternObject.invert) {
		                return value;
		            }

		            return this.createError(errorCode, { name: patternObject.name, pattern: patternObject.pattern, value: value }, state, options);
		        });
		    };

		    _class.prototype.alphanum = function alphanum() {

		        return this._test('alphanum', undefined, function (value, state, options) {

		            if (/^[a-zA-Z0-9]+$/.test(value)) {
		                return value;
		            }

		            return this.createError('string.alphanum', { value: value }, state, options);
		        });
		    };

		    _class.prototype.token = function token() {

		        return this._test('token', undefined, function (value, state, options) {

		            if (/^\w+$/.test(value)) {
		                return value;
		            }

		            return this.createError('string.token', { value: value }, state, options);
		        });
		    };

		    _class.prototype.email = function email(isEmailOptions) {

		        if (isEmailOptions) {
		            Hoek.assert((typeof isEmailOptions === 'undefined' ? 'undefined' : _typeof(isEmailOptions)) === 'object', 'email options must be an object');
		            Hoek.assert(typeof isEmailOptions.checkDNS === 'undefined', 'checkDNS option is not supported');
		            Hoek.assert(typeof isEmailOptions.tldWhitelist === 'undefined' || _typeof(isEmailOptions.tldWhitelist) === 'object', 'tldWhitelist must be an array or object');
		            Hoek.assert(typeof isEmailOptions.minDomainAtoms === 'undefined' || Hoek.isInteger(isEmailOptions.minDomainAtoms) && isEmailOptions.minDomainAtoms > 0, 'minDomainAtoms must be a positive integer');
		            Hoek.assert(typeof isEmailOptions.errorLevel === 'undefined' || typeof isEmailOptions.errorLevel === 'boolean' || Hoek.isInteger(isEmailOptions.errorLevel) && isEmailOptions.errorLevel >= 0, 'errorLevel must be a non-negative integer or boolean');
		        }

		        return this._test('email', isEmailOptions, function (value, state, options) {

		            try {
		                var result = Isemail.validate(value, isEmailOptions);
		                if (result === true || result === 0) {
		                    return value;
		                }
		            } catch (e) {}

		            return this.createError('string.email', { value: value }, state, options);
		        });
		    };

		    _class.prototype.ip = function ip(ipOptions) {

		        var regex = internals.ipRegex;
		        ipOptions = ipOptions || {};
		        Hoek.assert((typeof ipOptions === 'undefined' ? 'undefined' : _typeof(ipOptions)) === 'object', 'options must be an object');

		        if (ipOptions.cidr) {
		            Hoek.assert(typeof ipOptions.cidr === 'string', 'cidr must be a string');
		            ipOptions.cidr = ipOptions.cidr.toLowerCase();

		            Hoek.assert(ipOptions.cidr in Ip.cidrs, 'cidr must be one of ' + Object.keys(Ip.cidrs).join(', '));

		            // If we only received a `cidr` setting, create a regex for it. But we don't need to create one if `cidr` is "optional" since that is the default
		            if (!ipOptions.version && ipOptions.cidr !== 'optional') {
		                regex = Ip.createIpRegex(['ipv4', 'ipv6', 'ipvfuture'], ipOptions.cidr);
		            }
		        } else {

		            // Set our default cidr strategy
		            ipOptions.cidr = 'optional';
		        }

		        var versions = void 0;
		        if (ipOptions.version) {
		            if (!Array.isArray(ipOptions.version)) {
		                ipOptions.version = [ipOptions.version];
		            }

		            Hoek.assert(ipOptions.version.length >= 1, 'version must have at least 1 version specified');

		            versions = [];
		            for (var i = 0; i < ipOptions.version.length; ++i) {
		                var version = ipOptions.version[i];
		                Hoek.assert(typeof version === 'string', 'version at position ' + i + ' must be a string');
		                version = version.toLowerCase();
		                Hoek.assert(Ip.versions[version], 'version at position ' + i + ' must be one of ' + Object.keys(Ip.versions).join(', '));
		                versions.push(version);
		            }

		            // Make sure we have a set of versions
		            versions = Hoek.unique(versions);

		            regex = Ip.createIpRegex(versions, ipOptions.cidr);
		        }

		        return this._test('ip', ipOptions, function (value, state, options) {

		            if (regex.test(value)) {
		                return value;
		            }

		            if (versions) {
		                return this.createError('string.ipVersion', { value: value, cidr: ipOptions.cidr, version: versions }, state, options);
		            }

		            return this.createError('string.ip', { value: value, cidr: ipOptions.cidr }, state, options);
		        });
		    };

		    _class.prototype.uri = function uri(uriOptions) {

		        var customScheme = '';
		        var allowRelative = false;
		        var relativeOnly = false;
		        var regex = internals.uriRegex;

		        if (uriOptions) {
		            Hoek.assert((typeof uriOptions === 'undefined' ? 'undefined' : _typeof(uriOptions)) === 'object', 'options must be an object');

		            if (uriOptions.scheme) {
		                Hoek.assert(uriOptions.scheme instanceof RegExp || typeof uriOptions.scheme === 'string' || Array.isArray(uriOptions.scheme), 'scheme must be a RegExp, String, or Array');

		                if (!Array.isArray(uriOptions.scheme)) {
		                    uriOptions.scheme = [uriOptions.scheme];
		                }

		                Hoek.assert(uriOptions.scheme.length >= 1, 'scheme must have at least 1 scheme specified');

		                // Flatten the array into a string to be used to match the schemes.
		                for (var i = 0; i < uriOptions.scheme.length; ++i) {
		                    var scheme = uriOptions.scheme[i];
		                    Hoek.assert(scheme instanceof RegExp || typeof scheme === 'string', 'scheme at position ' + i + ' must be a RegExp or String');

		                    // Add OR separators if a value already exists
		                    customScheme = customScheme + (customScheme ? '|' : '');

		                    // If someone wants to match HTTP or HTTPS for example then we need to support both RegExp and String so we don't escape their pattern unknowingly.
		                    if (scheme instanceof RegExp) {
		                        customScheme = customScheme + scheme.source;
		                    } else {
		                        Hoek.assert(/[a-zA-Z][a-zA-Z0-9+-\.]*/.test(scheme), 'scheme at position ' + i + ' must be a valid scheme');
		                        customScheme = customScheme + Hoek.escapeRegex(scheme);
		                    }
		                }
		            }

		            if (uriOptions.allowRelative) {
		                allowRelative = true;
		            }

		            if (uriOptions.relativeOnly) {
		                relativeOnly = true;
		            }
		        }

		        if (customScheme || allowRelative || relativeOnly) {
		            regex = Uri.createUriRegex(customScheme, allowRelative, relativeOnly);
		        }

		        return this._test('uri', uriOptions, function (value, state, options) {

		            if (regex.test(value)) {
		                return value;
		            }

		            if (relativeOnly) {
		                return this.createError('string.uriRelativeOnly', { value: value }, state, options);
		            }

		            if (customScheme) {
		                return this.createError('string.uriCustomScheme', { scheme: customScheme, value: value }, state, options);
		            }

		            return this.createError('string.uri', { value: value }, state, options);
		        });
		    };

		    _class.prototype.isoDate = function isoDate() {

		        return this._test('isoDate', undefined, function (value, state, options) {

		            if (JoiDate._isIsoDate(value)) {
		                return value;
		            }

		            return this.createError('string.isoDate', { value: value }, state, options);
		        });
		    };

		    _class.prototype.guid = function guid(guidOptions) {

		        var brackets = {
		            '{': '}', '[': ']', '(': ')', '': ''
		        };

		        var uuids = {
		            'uuidv1': '1',
		            'uuidv2': '2',
		            'uuidv3': '3',
		            'uuidv4': '4',
		            'uuidv5': '5'
		        };

		        var versions = [];

		        if (guidOptions && guidOptions.version) {
		            if (!Array.isArray(guidOptions.version)) {
		                guidOptions.version = [guidOptions.version];
		            }

		            Hoek.assert(guidOptions.version.length >= 1, 'version must have at least 1 valid version specified');

		            for (var i = 0; i < guidOptions.version.length; ++i) {
		                var version = guidOptions.version[i];
		                Hoek.assert(typeof version === 'string', 'version at position ' + i + ' must be a string');
		                version = version.toLowerCase();
		                Hoek.assert(uuids[version], 'version at position ' + i + ' must be one of ' + Object.keys(uuids).join(', '));
		                Hoek.assert(versions.indexOf(version) === -1, 'version at position ' + i + ' must not be a duplicate.');
		                versions.push(version);
		            }
		        }

		        var regex = /^([\[{\(]?)([0-9A-F]{8})([:-]?)([0-9A-F]{4})([:-]?)([0-9A-F]{4})([:-]?)([0-9A-F]{4})([:-]?)([0-9A-F]{12})([\]}\)]?)$/i;

		        return this._test('guid', guidOptions, function (value, state, options) {

		            var results = regex.exec(value);

		            if (!results) {
		                return this.createError('string.guid', { value: value }, state, options);
		            }

		            // Matching braces
		            if (brackets[results[1]] !== results[11]) {
		                return this.createError('string.guid', { value: value }, state, options);
		            }

		            // Matching separators
		            if (results[3] !== results[5] || results[3] !== results[7] || results[3] !== results[9]) {
		                return this.createError('string.guid', { value: value }, state, options);
		            }

		            // Specific UUID versions
		            if (versions.length) {
		                var validVersions = versions.some(function (uuidVersion) {

		                    return results[6][0] === uuids[uuidVersion];
		                });

		                // Valid version and 89AB check
		                if (!(validVersions && /[89AB]/i.test(results[8][0]))) {
		                    return this.createError('string.guid', { value: value }, state, options);
		                }
		            }

		            return value;
		        });
		    };

		    _class.prototype.hex = function hex() {

		        var regex = /^[a-f0-9]+$/i;

		        return this._test('hex', regex, function (value, state, options) {

		            if (regex.test(value)) {
		                return value;
		            }

		            return this.createError('string.hex', { value: value }, state, options);
		        });
		    };

		    _class.prototype.base64 = function base64() {

		        var regex = /^(?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?$/;

		        return this._test('base64', regex, function (value, state, options) {

		            if (regex.test(value)) {
		                return value;
		            }

		            return this.createError('string.base64', { value: value }, state, options);
		        });
		    };

		    _class.prototype.hostname = function hostname() {

		        var regex = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/;

		        return this._test('hostname', undefined, function (value, state, options) {

		            if (value.length <= 255 && regex.test(value) || Net.isIPv6(value)) {

		                return value;
		            }

		            return this.createError('string.hostname', { value: value }, state, options);
		        });
		    };

		    _class.prototype.lowercase = function lowercase() {

		        var obj = this._test('lowercase', undefined, function (value, state, options) {

		            if (options.convert || value === value.toLocaleLowerCase()) {

		                return value;
		            }

		            return this.createError('string.lowercase', { value: value }, state, options);
		        });

		        obj._flags.case = 'lower';
		        return obj;
		    };

		    _class.prototype.uppercase = function uppercase() {

		        var obj = this._test('uppercase', undefined, function (value, state, options) {

		            if (options.convert || value === value.toLocaleUpperCase()) {

		                return value;
		            }

		            return this.createError('string.uppercase', { value: value }, state, options);
		        });

		        obj._flags.case = 'upper';
		        return obj;
		    };

		    _class.prototype.trim = function trim() {

		        var obj = this._test('trim', undefined, function (value, state, options) {

		            if (options.convert || value === value.trim()) {

		                return value;
		            }

		            return this.createError('string.trim', { value: value }, state, options);
		        });

		        obj._flags.trim = true;
		        return obj;
		    };

		    _class.prototype.replace = function replace(pattern, replacement) {

		        if (typeof pattern === 'string') {
		            pattern = new RegExp(Hoek.escapeRegex(pattern), 'g');
		        }

		        Hoek.assert(pattern instanceof RegExp, 'pattern must be a RegExp');
		        Hoek.assert(typeof replacement === 'string', 'replacement must be a String');

		        // This can not be considere a test like trim, we can't "reject"
		        // anything from this rule, so just clone the current object
		        var obj = this.clone();

		        if (!obj._inner.replacements) {
		            obj._inner.replacements = [];
		        }

		        obj._inner.replacements.push({
		            pattern: pattern,
		            replacement: replacement
		        });

		        return obj;
		    };

		    _class.prototype.truncate = function truncate(enabled) {

		        var obj = this.clone();
		        obj._flags.truncate = enabled === undefined ? true : !!enabled;
		        return obj;
		    };

		    return _class;
		}(Any);

		internals.compare = function (type, compare) {

		    return function (limit, encoding) {

		        var isRef = Ref.isRef(limit);

		        Hoek.assert(Hoek.isInteger(limit) && limit >= 0 || isRef, 'limit must be a positive integer or reference');
		        Hoek.assert(!encoding || Buffer.isEncoding(encoding), 'Invalid encoding:', encoding);

		        return this._test(type, limit, function (value, state, options) {

		            var compareTo = void 0;
		            if (isRef) {
		                compareTo = limit(state.reference || state.parent, options);

		                if (!Hoek.isInteger(compareTo)) {
		                    return this.createError('string.ref', { ref: limit.key }, state, options);
		                }
		            } else {
		                compareTo = limit;
		            }

		            if (compare(value, compareTo, encoding)) {
		                return value;
		            }

		            return this.createError('string.' + type, { limit: compareTo, value: value, encoding: encoding }, state, options);
		        });
		    };
		};

		internals.String.prototype.min = internals.compare('min', function (value, limit, encoding) {

		    var length = encoding ? Buffer.byteLength(value, encoding) : value.length;
		    return length >= limit;
		});

		internals.String.prototype.max = internals.compare('max', function (value, limit, encoding) {

		    var length = encoding ? Buffer.byteLength(value, encoding) : value.length;
		    return length <= limit;
		});

		internals.String.prototype.length = internals.compare('length', function (value, limit, encoding) {

		    var length = encoding ? Buffer.byteLength(value, encoding) : value.length;
		    return length === limit;
		});

		// Aliases

		internals.String.prototype.uuid = internals.String.prototype.guid;

		module.exports = new internals.String();
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer))

	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(process) {'use strict';

		// Load modules

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		var Dns = __webpack_require__(8);

		// Declare internals

		var internals = {
		    hasOwn: Object.prototype.hasOwnProperty,
		    indexOf: Array.prototype.indexOf,
		    defaultThreshold: 16,
		    maxIPv6Groups: 8,

		    categories: {
		        valid: 1,
		        dnsWarn: 7,
		        rfc5321: 15,
		        cfws: 31,
		        deprecated: 63,
		        rfc5322: 127,
		        error: 255
		    },

		    diagnoses: {

		        // Address is valid

		        valid: 0,

		        // Address is valid, but the DNS check failed

		        dnsWarnNoMXRecord: 5,
		        dnsWarnNoRecord: 6,

		        // Address is valid for SMTP but has unusual elements

		        rfc5321TLD: 9,
		        rfc5321TLDNumeric: 10,
		        rfc5321QuotedString: 11,
		        rfc5321AddressLiteral: 12,

		        // Address is valid for message, but must be modified for envelope

		        cfwsComment: 17,
		        cfwsFWS: 18,

		        // Address contains deprecated elements, but may still be valid in some contexts

		        deprecatedLocalPart: 33,
		        deprecatedFWS: 34,
		        deprecatedQTEXT: 35,
		        deprecatedQP: 36,
		        deprecatedComment: 37,
		        deprecatedCTEXT: 38,
		        deprecatedIPv6: 39,
		        deprecatedCFWSNearAt: 49,

		        // Address is only valid according to broad definition in RFC 5322, but is otherwise invalid

		        rfc5322Domain: 65,
		        rfc5322TooLong: 66,
		        rfc5322LocalTooLong: 67,
		        rfc5322DomainTooLong: 68,
		        rfc5322LabelTooLong: 69,
		        rfc5322DomainLiteral: 70,
		        rfc5322DomainLiteralOBSDText: 71,
		        rfc5322IPv6GroupCount: 72,
		        rfc5322IPv62x2xColon: 73,
		        rfc5322IPv6BadCharacter: 74,
		        rfc5322IPv6MaxGroups: 75,
		        rfc5322IPv6ColonStart: 76,
		        rfc5322IPv6ColonEnd: 77,

		        // Address is invalid for any purpose

		        errExpectingDTEXT: 129,
		        errNoLocalPart: 130,
		        errNoDomain: 131,
		        errConsecutiveDots: 132,
		        errATEXTAfterCFWS: 133,
		        errATEXTAfterQS: 134,
		        errATEXTAfterDomainLiteral: 135,
		        errExpectingQPair: 136,
		        errExpectingATEXT: 137,
		        errExpectingQTEXT: 138,
		        errExpectingCTEXT: 139,
		        errBackslashEnd: 140,
		        errDotStart: 141,
		        errDotEnd: 142,
		        errDomainHyphenStart: 143,
		        errDomainHyphenEnd: 144,
		        errUnclosedQuotedString: 145,
		        errUnclosedComment: 146,
		        errUnclosedDomainLiteral: 147,
		        errFWSCRLFx2: 148,
		        errFWSCRLFEnd: 149,
		        errCRNoLF: 150,
		        errUnknownTLD: 160,
		        errDomainTooShort: 161
		    },

		    components: {
		        localpart: 0,
		        domain: 1,
		        literal: 2,
		        contextComment: 3,
		        contextFWS: 4,
		        contextQuotedString: 5,
		        contextQuotedPair: 6
		    }
		};

		// $lab:coverage:off$
		internals.defer = typeof process !== 'undefined' && process && typeof process.nextTick === 'function' ? process.nextTick.bind(process) : function (callback) {

		    return setTimeout(callback, 0);
		};
		// $lab:coverage:on$


		internals.specials = function () {

		    var specials = '()<>[]:;@\\,."'; // US-ASCII visible characters not valid for atext (http://tools.ietf.org/html/rfc5322#section-3.2.3)
		    var lookup = new Array(0x100);
		    for (var i = 0xff; i >= 0; --i) {
		        lookup[i] = false;
		    }

		    for (var _i = 0; _i < specials.length; ++_i) {
		        lookup[specials.charCodeAt(_i)] = true;
		    }

		    return function (code) {

		        return lookup[code];
		    };
		}();

		internals.regex = {
		    ipV4: /\b(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
		    ipV6: /^[a-fA-F\d]{0,4}$/
		};

		internals.checkIpV6 = function (items) {

		    return items.every(function (value) {
		        return internals.regex.ipV6.test(value);
		    });
		};

		internals.validDomain = function (tldAtom, options) {

		    if (options.tldBlacklist) {
		        if (Array.isArray(options.tldBlacklist)) {
		            return internals.indexOf.call(options.tldBlacklist, tldAtom) === -1;
		        }

		        return !internals.hasOwn.call(options.tldBlacklist, tldAtom);
		    }

		    if (Array.isArray(options.tldWhitelist)) {
		        return internals.indexOf.call(options.tldWhitelist, tldAtom) !== -1;
		    }

		    return internals.hasOwn.call(options.tldWhitelist, tldAtom);
		};

		/**
		 * Check that an email address conforms to RFCs 5321, 5322 and others
		 *
		 * We distinguish clearly between a Mailbox as defined by RFC 5321 and an
		 * addr-spec as defined by RFC 5322. Depending on the context, either can be
		 * regarded as a valid email address. The RFC 5321 Mailbox specification is
		 * more restrictive (comments, white space and obsolete forms are not allowed).
		 *
		 * @param {string} email The email address to check. See README for specifics.
		 * @param {Object} options The (optional) options:
		 *   {boolean} checkDNS If true then will check DNS for MX records. If
		 *     true this call to isEmail _will_ be asynchronous.
		 *   {*} errorLevel Determines the boundary between valid and invalid
		 *     addresses.
		 *   {*} tldBlacklist The set of domains to consider invalid.
		 *   {*} tldWhitelist The set of domains to consider valid.
		 *   {*} minDomainAtoms The minimum number of domain atoms which must be present
		 *     for the address to be valid.
		 * @param {function(number|boolean)} callback The (optional) callback handler.
		 * @return {*}
		 */

		exports.validate = internals.validate = function (email, options, callback) {

		    options = options || {};

		    if (typeof options === 'function') {
		        callback = options;
		        options = {};
		    }

		    if (typeof callback !== 'function') {
		        if (options.checkDNS) {
		            throw new TypeError('expected callback function for checkDNS option');
		        }

		        callback = null;
		    }

		    var diagnose = void 0;
		    var threshold = void 0;

		    if (typeof options.errorLevel === 'number') {
		        diagnose = true;
		        threshold = options.errorLevel;
		    } else {
		        diagnose = !!options.errorLevel;
		        threshold = internals.diagnoses.valid;
		    }

		    if (options.tldWhitelist) {
		        if (typeof options.tldWhitelist === 'string') {
		            options.tldWhitelist = [options.tldWhitelist];
		        } else if (_typeof(options.tldWhitelist) !== 'object') {
		            throw new TypeError('expected array or object tldWhitelist');
		        }
		    }

		    if (options.tldBlacklist) {
		        if (typeof options.tldBlacklist === 'string') {
		            options.tldBlacklist = [options.tldBlacklist];
		        } else if (_typeof(options.tldBlacklist) !== 'object') {
		            throw new TypeError('expected array or object tldBlacklist');
		        }
		    }

		    if (options.minDomainAtoms && (options.minDomainAtoms !== (+options.minDomainAtoms | 0) || options.minDomainAtoms < 0)) {
		        throw new TypeError('expected positive integer minDomainAtoms');
		    }

		    var maxResult = internals.diagnoses.valid;
		    var updateResult = function updateResult(value) {

		        if (value > maxResult) {
		            maxResult = value;
		        }
		    };

		    var context = {
		        now: internals.components.localpart,
		        prev: internals.components.localpart,
		        stack: [internals.components.localpart]
		    };

		    var prevToken = '';

		    var parseData = {
		        local: '',
		        domain: ''
		    };
		    var atomData = {
		        locals: [''],
		        domains: ['']
		    };

		    var elementCount = 0;
		    var elementLength = 0;
		    var crlfCount = 0;
		    var charCode = void 0;

		    var hyphenFlag = false;
		    var assertEnd = false;

		    var emailLength = email.length;

		    var token = void 0; // Token is used outside the loop, must declare similarly
		    for (var i = 0; i < emailLength; ++i) {
		        token = email[i];

		        switch (context.now) {
		            // Local-part
		            case internals.components.localpart:
		                // http://tools.ietf.org/html/rfc5322#section-3.4.1
		                //   local-part      =   dot-atom / quoted-string / obs-local-part
		                //
		                //   dot-atom        =   [CFWS] dot-atom-text [CFWS]
		                //
		                //   dot-atom-text   =   1*atext *("." 1*atext)
		                //
		                //   quoted-string   =   [CFWS]
		                //                       DQUOTE *([FWS] qcontent) [FWS] DQUOTE
		                //                       [CFWS]
		                //
		                //   obs-local-part  =   word *("." word)
		                //
		                //   word            =   atom / quoted-string
		                //
		                //   atom            =   [CFWS] 1*atext [CFWS]
		                switch (token) {
		                    // Comment
		                    case '(':
		                        if (elementLength === 0) {
		                            // Comments are OK at the beginning of an element
		                            updateResult(elementCount === 0 ? internals.diagnoses.cfwsComment : internals.diagnoses.deprecatedComment);
		                        } else {
		                            updateResult(internals.diagnoses.cfwsComment);
		                            // Cannot start a comment in an element, should be end
		                            assertEnd = true;
		                        }

		                        context.stack.push(context.now);
		                        context.now = internals.components.contextComment;
		                        break;

		                    // Next dot-atom element
		                    case '.':
		                        if (elementLength === 0) {
		                            // Another dot, already?
		                            updateResult(elementCount === 0 ? internals.diagnoses.errDotStart : internals.diagnoses.errConsecutiveDots);
		                        } else {
		                            // The entire local-part can be a quoted string for RFC 5321; if one atom is quoted it's an RFC 5322 obsolete form
		                            if (assertEnd) {
		                                updateResult(internals.diagnoses.deprecatedLocalPart);
		                            }

		                            // CFWS & quoted strings are OK again now we're at the beginning of an element (although they are obsolete forms)
		                            assertEnd = false;
		                            elementLength = 0;
		                            ++elementCount;
		                            parseData.local += token;
		                            atomData.locals[elementCount] = '';
		                        }

		                        break;

		                    // Quoted string
		                    case '"':
		                        if (elementLength === 0) {
		                            // The entire local-part can be a quoted string for RFC 5321; if one atom is quoted it's an RFC 5322 obsolete form
		                            updateResult(elementCount === 0 ? internals.diagnoses.rfc5321QuotedString : internals.diagnoses.deprecatedLocalPart);

		                            parseData.local += token;
		                            atomData.locals[elementCount] += token;
		                            ++elementLength;

		                            // Quoted string must be the entire element
		                            assertEnd = true;
		                            context.stack.push(context.now);
		                            context.now = internals.components.contextQuotedString;
		                        } else {
		                            updateResult(internals.diagnoses.errExpectingATEXT);
		                        }

		                        break;

		                    // Folding white space
		                    case '\r':
		                        if (emailLength === ++i || email[i] !== '\n') {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errCRNoLF);
		                            break;
		                        }

		                    // Fallthrough

		                    case ' ':
		                    case '\t':
		                        if (elementLength === 0) {
		                            updateResult(elementCount === 0 ? internals.diagnoses.cfwsFWS : internals.diagnoses.deprecatedFWS);
		                        } else {
		                            // We can't start FWS in the middle of an element, better be end
		                            assertEnd = true;
		                        }

		                        context.stack.push(context.now);
		                        context.now = internals.components.contextFWS;
		                        prevToken = token;
		                        break;

		                    case '@':
		                        // At this point we should have a valid local-part
		                        // $lab:coverage:off$
		                        if (context.stack.length !== 1) {
		                            throw new Error('unexpected item on context stack');
		                        }
		                        // $lab:coverage:on$

		                        if (parseData.local.length === 0) {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errNoLocalPart);
		                        } else if (elementLength === 0) {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errDotEnd);
		                        }
		                        // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.1 the maximum total length of a user name or other local-part is 64
		                        //    octets
		                        else if (parseData.local.length > 64) {
		                                updateResult(internals.diagnoses.rfc5322LocalTooLong);
		                            }
		                            // http://tools.ietf.org/html/rfc5322#section-3.4.1 comments and folding white space SHOULD NOT be used around "@" in the
		                            //    addr-spec
		                            //
		                            // http://tools.ietf.org/html/rfc2119
		                            // 4. SHOULD NOT this phrase, or the phrase "NOT RECOMMENDED" mean that there may exist valid reasons in particular
		                            //    circumstances when the particular behavior is acceptable or even useful, but the full implications should be understood
		                            //    and the case carefully weighed before implementing any behavior described with this label.
		                            else if (context.prev === internals.components.contextComment || context.prev === internals.components.contextFWS) {
		                                    updateResult(internals.diagnoses.deprecatedCFWSNearAt);
		                                }

		                        // Clear everything down for the domain parsing
		                        context.now = internals.components.domain;
		                        context.stack[0] = internals.components.domain;
		                        elementCount = 0;
		                        elementLength = 0;
		                        assertEnd = false; // CFWS can only appear at the end of the element
		                        break;

		                    // ATEXT
		                    default:
		                        // http://tools.ietf.org/html/rfc5322#section-3.2.3
		                        //    atext = ALPHA / DIGIT / ; Printable US-ASCII
		                        //            "!" / "#" /     ;  characters not including
		                        //            "$" / "%" /     ;  specials.  Used for atoms.
		                        //            "&" / "'" /
		                        //            "*" / "+" /
		                        //            "-" / "/" /
		                        //            "=" / "?" /
		                        //            "^" / "_" /
		                        //            "`" / "{" /
		                        //            "|" / "}" /
		                        //            "~"
		                        if (assertEnd) {
		                            // We have encountered atext where it is no longer valid
		                            switch (context.prev) {
		                                case internals.components.contextComment:
		                                case internals.components.contextFWS:
		                                    updateResult(internals.diagnoses.errATEXTAfterCFWS);
		                                    break;

		                                case internals.components.contextQuotedString:
		                                    updateResult(internals.diagnoses.errATEXTAfterQS);
		                                    break;

		                                // $lab:coverage:off$
		                                default:
		                                    throw new Error('more atext found where none is allowed, but unrecognized prev context: ' + context.prev);
		                                // $lab:coverage:on$
		                            }
		                        } else {
		                            context.prev = context.now;
		                            charCode = token.charCodeAt(0);

		                            // Especially if charCode == 10
		                            if (charCode < 33 || charCode > 126 || internals.specials(charCode)) {

		                                // Fatal error
		                                updateResult(internals.diagnoses.errExpectingATEXT);
		                            }

		                            parseData.local += token;
		                            atomData.locals[elementCount] += token;
		                            ++elementLength;
		                        }
		                }

		                break;

		            case internals.components.domain:
		                // http://tools.ietf.org/html/rfc5322#section-3.4.1
		                //   domain          =   dot-atom / domain-literal / obs-domain
		                //
		                //   dot-atom        =   [CFWS] dot-atom-text [CFWS]
		                //
		                //   dot-atom-text   =   1*atext *("." 1*atext)
		                //
		                //   domain-literal  =   [CFWS] "[" *([FWS] dtext) [FWS] "]" [CFWS]
		                //
		                //   dtext           =   %d33-90 /          ; Printable US-ASCII
		                //                       %d94-126 /         ;  characters not including
		                //                       obs-dtext          ;  "[", "]", or "\"
		                //
		                //   obs-domain      =   atom *("." atom)
		                //
		                //   atom            =   [CFWS] 1*atext [CFWS]

		                // http://tools.ietf.org/html/rfc5321#section-4.1.2
		                //   Mailbox        = Local-part "@" ( Domain / address-literal )
		                //
		                //   Domain         = sub-domain *("." sub-domain)
		                //
		                //   address-literal  = "[" ( IPv4-address-literal /
		                //                    IPv6-address-literal /
		                //                    General-address-literal ) "]"
		                //                    ; See Section 4.1.3

		                // http://tools.ietf.org/html/rfc5322#section-3.4.1
		                //      Note: A liberal syntax for the domain portion of addr-spec is
		                //      given here.  However, the domain portion contains addressing
		                //      information specified by and used in other protocols (e.g.,
		                //      [RFC1034], [RFC1035], [RFC1123], [RFC5321]).  It is therefore
		                //      incumbent upon implementations to conform to the syntax of
		                //      addresses for the context in which they are used.
		                //
		                // is_email() author's note: it's not clear how to interpret this in
		                // he context of a general email address validator. The conclusion I
		                // have reached is this: "addressing information" must comply with
		                // RFC 5321 (and in turn RFC 1035), anything that is "semantically
		                // invisible" must comply only with RFC 5322.
		                switch (token) {
		                    // Comment
		                    case '(':
		                        if (elementLength === 0) {
		                            // Comments at the start of the domain are deprecated in the text, comments at the start of a subdomain are obs-domain
		                            // http://tools.ietf.org/html/rfc5322#section-3.4.1
		                            updateResult(elementCount === 0 ? internals.diagnoses.deprecatedCFWSNearAt : internals.diagnoses.deprecatedComment);
		                        } else {
		                            // We can't start a comment mid-element, better be at the end
		                            assertEnd = true;
		                            updateResult(internals.diagnoses.cfwsComment);
		                        }

		                        context.stack.push(context.now);
		                        context.now = internals.components.contextComment;
		                        break;

		                    // Next dot-atom element
		                    case '.':
		                        if (elementLength === 0) {
		                            // Another dot, already? Fatal error.
		                            updateResult(elementCount === 0 ? internals.diagnoses.errDotStart : internals.diagnoses.errConsecutiveDots);
		                        } else if (hyphenFlag) {
		                            // Previous subdomain ended in a hyphen. Fatal error.
		                            updateResult(internals.diagnoses.errDomainHyphenEnd);
		                        } else if (elementLength > 63) {
		                            // Nowhere in RFC 5321 does it say explicitly that the domain part of a Mailbox must be a valid domain according to the
		                            // DNS standards set out in RFC 1035, but this *is* implied in several places. For instance, wherever the idea of host
		                            // routing is discussed the RFC says that the domain must be looked up in the DNS. This would be nonsense unless the
		                            // domain was designed to be a valid DNS domain. Hence we must conclude that the RFC 1035 restriction on label length
		                            // also applies to RFC 5321 domains.
		                            //
		                            // http://tools.ietf.org/html/rfc1035#section-2.3.4
		                            // labels          63 octets or less

		                            updateResult(internals.diagnoses.rfc5322LabelTooLong);
		                        }

		                        // CFWS is OK again now we're at the beginning of an element (although
		                        // it may be obsolete CFWS)
		                        assertEnd = false;
		                        elementLength = 0;
		                        ++elementCount;
		                        atomData.domains[elementCount] = '';
		                        parseData.domain += token;

		                        break;

		                    // Domain literal
		                    case '[':
		                        if (parseData.domain.length === 0) {
		                            // Domain literal must be the only component
		                            assertEnd = true;
		                            ++elementLength;
		                            context.stack.push(context.now);
		                            context.now = internals.components.literal;
		                            parseData.domain += token;
		                            atomData.domains[elementCount] += token;
		                            parseData.literal = '';
		                        } else {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errExpectingATEXT);
		                        }

		                        break;

		                    // Folding white space
		                    case '\r':
		                        if (emailLength === ++i || email[i] !== '\n') {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errCRNoLF);
		                            break;
		                        }

		                    // Fallthrough

		                    case ' ':
		                    case '\t':
		                        if (elementLength === 0) {
		                            updateResult(elementCount === 0 ? internals.diagnoses.deprecatedCFWSNearAt : internals.diagnoses.deprecatedFWS);
		                        } else {
		                            // We can't start FWS in the middle of an element, so this better be the end
		                            updateResult(internals.diagnoses.cfwsFWS);
		                            assertEnd = true;
		                        }

		                        context.stack.push(context.now);
		                        context.now = internals.components.contextFWS;
		                        prevToken = token;
		                        break;

		                    // This must be ATEXT
		                    default:
		                        // RFC 5322 allows any atext...
		                        // http://tools.ietf.org/html/rfc5322#section-3.2.3
		                        //    atext = ALPHA / DIGIT / ; Printable US-ASCII
		                        //            "!" / "#" /     ;  characters not including
		                        //            "$" / "%" /     ;  specials.  Used for atoms.
		                        //            "&" / "'" /
		                        //            "*" / "+" /
		                        //            "-" / "/" /
		                        //            "=" / "?" /
		                        //            "^" / "_" /
		                        //            "`" / "{" /
		                        //            "|" / "}" /
		                        //            "~"

		                        // But RFC 5321 only allows letter-digit-hyphen to comply with DNS rules
		                        //   (RFCs 1034 & 1123)
		                        // http://tools.ietf.org/html/rfc5321#section-4.1.2
		                        //   sub-domain     = Let-dig [Ldh-str]
		                        //
		                        //   Let-dig        = ALPHA / DIGIT
		                        //
		                        //   Ldh-str        = *( ALPHA / DIGIT / "-" ) Let-dig
		                        //
		                        if (assertEnd) {
		                            // We have encountered ATEXT where it is no longer valid
		                            switch (context.prev) {
		                                case internals.components.contextComment:
		                                case internals.components.contextFWS:
		                                    updateResult(internals.diagnoses.errATEXTAfterCFWS);
		                                    break;

		                                case internals.components.literal:
		                                    updateResult(internals.diagnoses.errATEXTAfterDomainLiteral);
		                                    break;

		                                // $lab:coverage:off$
		                                default:
		                                    throw new Error('more atext found where none is allowed, but unrecognized prev context: ' + context.prev);
		                                // $lab:coverage:on$
		                            }
		                        }

		                        charCode = token.charCodeAt(0);
		                        // Assume this token isn't a hyphen unless we discover it is
		                        hyphenFlag = false;

		                        if (charCode < 33 || charCode > 126 || internals.specials(charCode)) {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errExpectingATEXT);
		                        } else if (token === '-') {
		                            if (elementLength === 0) {
		                                // Hyphens cannot be at the beginning of a subdomain, fatal error
		                                updateResult(internals.diagnoses.errDomainHyphenStart);
		                            }

		                            hyphenFlag = true;
		                        }
		                        // Check if it's a neither a number nor a latin letter
		                        else if (charCode < 48 || charCode > 122 || charCode > 57 && charCode < 65 || charCode > 90 && charCode < 97) {
		                                // This is not an RFC 5321 subdomain, but still OK by RFC 5322
		                                updateResult(internals.diagnoses.rfc5322Domain);
		                            }

		                        parseData.domain += token;
		                        atomData.domains[elementCount] += token;
		                        ++elementLength;
		                }

		                break;

		            // Domain literal
		            case internals.components.literal:
		                // http://tools.ietf.org/html/rfc5322#section-3.4.1
		                //   domain-literal  =   [CFWS] "[" *([FWS] dtext) [FWS] "]" [CFWS]
		                //
		                //   dtext           =   %d33-90 /          ; Printable US-ASCII
		                //                       %d94-126 /         ;  characters not including
		                //                       obs-dtext          ;  "[", "]", or "\"
		                //
		                //   obs-dtext       =   obs-NO-WS-CTL / quoted-pair
		                switch (token) {
		                    // End of domain literal
		                    case ']':
		                        if (maxResult < internals.categories.deprecated) {
		                            // Could be a valid RFC 5321 address literal, so let's check

		                            // http://tools.ietf.org/html/rfc5321#section-4.1.2
		                            //   address-literal  = "[" ( IPv4-address-literal /
		                            //                    IPv6-address-literal /
		                            //                    General-address-literal ) "]"
		                            //                    ; See Section 4.1.3
		                            //
		                            // http://tools.ietf.org/html/rfc5321#section-4.1.3
		                            //   IPv4-address-literal  = Snum 3("."  Snum)
		                            //
		                            //   IPv6-address-literal  = "IPv6:" IPv6-addr
		                            //
		                            //   General-address-literal  = Standardized-tag ":" 1*dcontent
		                            //
		                            //   Standardized-tag  = Ldh-str
		                            //                     ; Standardized-tag MUST be specified in a
		                            //                     ; Standards-Track RFC and registered with IANA
		                            //
		                            //   dcontent      = %d33-90 / ; Printable US-ASCII
		                            //                 %d94-126 ; excl. "[", "\", "]"
		                            //
		                            //   Snum          = 1*3DIGIT
		                            //                 ; representing a decimal integer
		                            //                 ; value in the range 0 through 255
		                            //
		                            //   IPv6-addr     = IPv6-full / IPv6-comp / IPv6v4-full / IPv6v4-comp
		                            //
		                            //   IPv6-hex      = 1*4HEXDIG
		                            //
		                            //   IPv6-full     = IPv6-hex 7(":" IPv6-hex)
		                            //
		                            //   IPv6-comp     = [IPv6-hex *5(":" IPv6-hex)] "::"
		                            //                 [IPv6-hex *5(":" IPv6-hex)]
		                            //                 ; The "::" represents at least 2 16-bit groups of
		                            //                 ; zeros.  No more than 6 groups in addition to the
		                            //                 ; "::" may be present.
		                            //
		                            //   IPv6v4-full   = IPv6-hex 5(":" IPv6-hex) ":" IPv4-address-literal
		                            //
		                            //   IPv6v4-comp   = [IPv6-hex *3(":" IPv6-hex)] "::"
		                            //                 [IPv6-hex *3(":" IPv6-hex) ":"]
		                            //                 IPv4-address-literal
		                            //                 ; The "::" represents at least 2 16-bit groups of
		                            //                 ; zeros.  No more than 4 groups in addition to the
		                            //                 ; "::" and IPv4-address-literal may be present.

		                            var index = -1;
		                            var addressLiteral = parseData.literal;
		                            var matchesIP = internals.regex.ipV4.exec(addressLiteral);

		                            // Maybe extract IPv4 part from the end of the address-literal
		                            if (matchesIP) {
		                                index = matchesIP.index;
		                                if (index !== 0) {
		                                    // Convert IPv4 part to IPv6 format for futher testing
		                                    addressLiteral = addressLiteral.slice(0, index) + '0:0';
		                                }
		                            }

		                            if (index === 0) {
		                                // Nothing there except a valid IPv4 address, so...
		                                updateResult(internals.diagnoses.rfc5321AddressLiteral);
		                            } else if (addressLiteral.slice(0, 5).toLowerCase() !== 'ipv6:') {
		                                updateResult(internals.diagnoses.rfc5322DomainLiteral);
		                            } else {
		                                var match = addressLiteral.slice(5);
		                                var maxGroups = internals.maxIPv6Groups;
		                                var groups = match.split(':');
		                                index = match.indexOf('::');

		                                if (!~index) {
		                                    // Need exactly the right number of groups
		                                    if (groups.length !== maxGroups) {
		                                        updateResult(internals.diagnoses.rfc5322IPv6GroupCount);
		                                    }
		                                } else if (index !== match.lastIndexOf('::')) {
		                                    updateResult(internals.diagnoses.rfc5322IPv62x2xColon);
		                                } else {
		                                    if (index === 0 || index === match.length - 2) {
		                                        // RFC 4291 allows :: at the start or end of an address with 7 other groups in addition
		                                        ++maxGroups;
		                                    }

		                                    if (groups.length > maxGroups) {
		                                        updateResult(internals.diagnoses.rfc5322IPv6MaxGroups);
		                                    } else if (groups.length === maxGroups) {
		                                        // Eliding a single "::"
		                                        updateResult(internals.diagnoses.deprecatedIPv6);
		                                    }
		                                }

		                                // IPv6 testing strategy
		                                if (match[0] === ':' && match[1] !== ':') {
		                                    updateResult(internals.diagnoses.rfc5322IPv6ColonStart);
		                                } else if (match[match.length - 1] === ':' && match[match.length - 2] !== ':') {
		                                    updateResult(internals.diagnoses.rfc5322IPv6ColonEnd);
		                                } else if (internals.checkIpV6(groups)) {
		                                    updateResult(internals.diagnoses.rfc5321AddressLiteral);
		                                } else {
		                                    updateResult(internals.diagnoses.rfc5322IPv6BadCharacter);
		                                }
		                            }
		                        } else {
		                            updateResult(internals.diagnoses.rfc5322DomainLiteral);
		                        }

		                        parseData.domain += token;
		                        atomData.domains[elementCount] += token;
		                        ++elementLength;
		                        context.prev = context.now;
		                        context.now = context.stack.pop();
		                        break;

		                    case '\\':
		                        updateResult(internals.diagnoses.rfc5322DomainLiteralOBSDText);
		                        context.stack.push(context.now);
		                        context.now = internals.components.contextQuotedPair;
		                        break;

		                    // Folding white space
		                    case '\r':
		                        if (emailLength === ++i || email[i] !== '\n') {
		                            updateResult(internals.diagnoses.errCRNoLF);
		                            break;
		                        }

		                    // Fallthrough

		                    case ' ':
		                    case '\t':
		                        updateResult(internals.diagnoses.cfwsFWS);

		                        context.stack.push(context.now);
		                        context.now = internals.components.contextFWS;
		                        prevToken = token;
		                        break;

		                    // DTEXT
		                    default:
		                        // http://tools.ietf.org/html/rfc5322#section-3.4.1
		                        //   dtext         =   %d33-90 /  ; Printable US-ASCII
		                        //                     %d94-126 / ;  characters not including
		                        //                     obs-dtext  ;  "[", "]", or "\"
		                        //
		                        //   obs-dtext     =   obs-NO-WS-CTL / quoted-pair
		                        //
		                        //   obs-NO-WS-CTL =   %d1-8 /    ; US-ASCII control
		                        //                     %d11 /     ;  characters that do not
		                        //                     %d12 /     ;  include the carriage
		                        //                     %d14-31 /  ;  return, line feed, and
		                        //                     %d127      ;  white space characters
		                        charCode = token.charCodeAt(0);

		                        // '\r', '\n', ' ', and '\t' have already been parsed above
		                        if (charCode > 127 || charCode === 0 || token === '[') {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errExpectingDTEXT);
		                            break;
		                        } else if (charCode < 33 || charCode === 127) {
		                            updateResult(internals.diagnoses.rfc5322DomainLiteralOBSDText);
		                        }

		                        parseData.literal += token;
		                        parseData.domain += token;
		                        atomData.domains[elementCount] += token;
		                        ++elementLength;
		                }

		                break;

		            // Quoted string
		            case internals.components.contextQuotedString:
		                // http://tools.ietf.org/html/rfc5322#section-3.2.4
		                //   quoted-string = [CFWS]
		                //                   DQUOTE *([FWS] qcontent) [FWS] DQUOTE
		                //                   [CFWS]
		                //
		                //   qcontent      = qtext / quoted-pair
		                switch (token) {
		                    // Quoted pair
		                    case '\\':
		                        context.stack.push(context.now);
		                        context.now = internals.components.contextQuotedPair;
		                        break;

		                    // Folding white space. Spaces are allowed as regular characters inside a quoted string - it's only FWS if we include '\t' or '\r\n'
		                    case '\r':
		                        if (emailLength === ++i || email[i] !== '\n') {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errCRNoLF);
		                            break;
		                        }

		                    // Fallthrough

		                    case '\t':
		                        // http://tools.ietf.org/html/rfc5322#section-3.2.2
		                        //   Runs of FWS, comment, or CFWS that occur between lexical tokens in
		                        //   a structured header field are semantically interpreted as a single
		                        //   space character.

		                        // http://tools.ietf.org/html/rfc5322#section-3.2.4
		                        //   the CRLF in any FWS/CFWS that appears within the quoted-string [is]
		                        //   semantically "invisible" and therefore not part of the
		                        //   quoted-string

		                        parseData.local += ' ';
		                        atomData.locals[elementCount] += ' ';
		                        ++elementLength;

		                        updateResult(internals.diagnoses.cfwsFWS);
		                        context.stack.push(context.now);
		                        context.now = internals.components.contextFWS;
		                        prevToken = token;
		                        break;

		                    // End of quoted string
		                    case '"':
		                        parseData.local += token;
		                        atomData.locals[elementCount] += token;
		                        ++elementLength;
		                        context.prev = context.now;
		                        context.now = context.stack.pop();
		                        break;

		                    // QTEXT
		                    default:
		                        // http://tools.ietf.org/html/rfc5322#section-3.2.4
		                        //   qtext          =   %d33 /             ; Printable US-ASCII
		                        //                      %d35-91 /          ;  characters not including
		                        //                      %d93-126 /         ;  "\" or the quote character
		                        //                      obs-qtext
		                        //
		                        //   obs-qtext      =   obs-NO-WS-CTL
		                        //
		                        //   obs-NO-WS-CTL  =   %d1-8 /            ; US-ASCII control
		                        //                      %d11 /             ;  characters that do not
		                        //                      %d12 /             ;  include the carriage
		                        //                      %d14-31 /          ;  return, line feed, and
		                        //                      %d127              ;  white space characters
		                        charCode = token.charCodeAt(0);

		                        if (charCode > 127 || charCode === 0 || charCode === 10) {
		                            updateResult(internals.diagnoses.errExpectingQTEXT);
		                        } else if (charCode < 32 || charCode === 127) {
		                            updateResult(internals.diagnoses.deprecatedQTEXT);
		                        }

		                        parseData.local += token;
		                        atomData.locals[elementCount] += token;
		                        ++elementLength;
		                }

		                // http://tools.ietf.org/html/rfc5322#section-3.4.1
		                //   If the string can be represented as a dot-atom (that is, it contains
		                //   no characters other than atext characters or "." surrounded by atext
		                //   characters), then the dot-atom form SHOULD be used and the quoted-
		                //   string form SHOULD NOT be used.

		                break;
		            // Quoted pair
		            case internals.components.contextQuotedPair:
		                // http://tools.ietf.org/html/rfc5322#section-3.2.1
		                //   quoted-pair     =   ("\" (VCHAR / WSP)) / obs-qp
		                //
		                //   VCHAR           =  %d33-126   ; visible (printing) characters
		                //   WSP             =  SP / HTAB  ; white space
		                //
		                //   obs-qp          =   "\" (%d0 / obs-NO-WS-CTL / LF / CR)
		                //
		                //   obs-NO-WS-CTL   =   %d1-8 /   ; US-ASCII control
		                //                       %d11 /    ;  characters that do not
		                //                       %d12 /    ;  include the carriage
		                //                       %d14-31 / ;  return, line feed, and
		                //                       %d127     ;  white space characters
		                //
		                // i.e. obs-qp       =  "\" (%d0-8, %d10-31 / %d127)
		                charCode = token.charCodeAt(0);

		                if (charCode > 127) {
		                    // Fatal error
		                    updateResult(internals.diagnoses.errExpectingQPair);
		                } else if (charCode < 31 && charCode !== 9 || charCode === 127) {
		                    // ' ' and '\t' are allowed
		                    updateResult(internals.diagnoses.deprecatedQP);
		                }

		                // At this point we know where this qpair occurred so we could check to see if the character actually needed to be quoted at all.
		                // http://tools.ietf.org/html/rfc5321#section-4.1.2
		                //   the sending system SHOULD transmit the form that uses the minimum quoting possible.

		                context.prev = context.now;
		                // End of qpair
		                context.now = context.stack.pop();
		                token = '\\' + token;

		                switch (context.now) {
		                    case internals.components.contextComment:
		                        break;

		                    case internals.components.contextQuotedString:
		                        parseData.local += token;
		                        atomData.locals[elementCount] += token;

		                        // The maximum sizes specified by RFC 5321 are octet counts, so we must include the backslash
		                        elementLength += 2;
		                        break;

		                    case internals.components.literal:
		                        parseData.domain += token;
		                        atomData.domains[elementCount] += token;

		                        // The maximum sizes specified by RFC 5321 are octet counts, so we must include the backslash
		                        elementLength += 2;
		                        break;

		                    // $lab:coverage:off$
		                    default:
		                        throw new Error('quoted pair logic invoked in an invalid context: ' + context.now);
		                    // $lab:coverage:on$
		                }
		                break;

		            // Comment
		            case internals.components.contextComment:
		                // http://tools.ietf.org/html/rfc5322#section-3.2.2
		                //   comment  = "(" *([FWS] ccontent) [FWS] ")"
		                //
		                //   ccontent = ctext / quoted-pair / comment
		                switch (token) {
		                    // Nested comment
		                    case '(':
		                        // Nested comments are ok
		                        context.stack.push(context.now);
		                        context.now = internals.components.contextComment;
		                        break;

		                    // End of comment
		                    case ')':
		                        context.prev = context.now;
		                        context.now = context.stack.pop();
		                        break;

		                    // Quoted pair
		                    case '\\':
		                        context.stack.push(context.now);
		                        context.now = internals.components.contextQuotedPair;
		                        break;

		                    // Folding white space
		                    case '\r':
		                        if (emailLength === ++i || email[i] !== '\n') {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errCRNoLF);
		                            break;
		                        }

		                    // Fallthrough

		                    case ' ':
		                    case '\t':
		                        updateResult(internals.diagnoses.cfwsFWS);

		                        context.stack.push(context.now);
		                        context.now = internals.components.contextFWS;
		                        prevToken = token;
		                        break;

		                    // CTEXT
		                    default:
		                        // http://tools.ietf.org/html/rfc5322#section-3.2.3
		                        //   ctext         = %d33-39 /  ; Printable US-ASCII
		                        //                   %d42-91 /  ;  characters not including
		                        //                   %d93-126 / ;  "(", ")", or "\"
		                        //                   obs-ctext
		                        //
		                        //   obs-ctext     = obs-NO-WS-CTL
		                        //
		                        //   obs-NO-WS-CTL = %d1-8 /    ; US-ASCII control
		                        //                   %d11 /     ;  characters that do not
		                        //                   %d12 /     ;  include the carriage
		                        //                   %d14-31 /  ;  return, line feed, and
		                        //                   %d127      ;  white space characters
		                        charCode = token.charCodeAt(0);

		                        if (charCode > 127 || charCode === 0 || charCode === 10) {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errExpectingCTEXT);
		                            break;
		                        } else if (charCode < 32 || charCode === 127) {
		                            updateResult(internals.diagnoses.deprecatedCTEXT);
		                        }
		                }

		                break;

		            // Folding white space
		            case internals.components.contextFWS:
		                // http://tools.ietf.org/html/rfc5322#section-3.2.2
		                //   FWS     =   ([*WSP CRLF] 1*WSP) /  obs-FWS
		                //                                   ; Folding white space

		                // But note the erratum:
		                // http://www.rfc-editor.org/errata_search.php?rfc=5322&eid=1908:
		                //   In the obsolete syntax, any amount of folding white space MAY be
		                //   inserted where the obs-FWS rule is allowed.  This creates the
		                //   possibility of having two consecutive "folds" in a line, and
		                //   therefore the possibility that a line which makes up a folded header
		                //   field could be composed entirely of white space.
		                //
		                //   obs-FWS =   1*([CRLF] WSP)

		                if (prevToken === '\r') {
		                    if (token === '\r') {
		                        // Fatal error
		                        updateResult(internals.diagnoses.errFWSCRLFx2);
		                        break;
		                    }

		                    if (++crlfCount > 1) {
		                        // Multiple folds => obsolete FWS
		                        updateResult(internals.diagnoses.deprecatedFWS);
		                    } else {
		                        crlfCount = 1;
		                    }
		                }

		                switch (token) {
		                    case '\r':
		                        if (emailLength === ++i || email[i] !== '\n') {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errCRNoLF);
		                        }

		                        break;

		                    case ' ':
		                    case '\t':
		                        break;

		                    default:
		                        if (prevToken === '\r') {
		                            // Fatal error
		                            updateResult(internals.diagnoses.errFWSCRLFEnd);
		                        }

		                        crlfCount = 0;

		                        // End of FWS
		                        context.prev = context.now;
		                        context.now = context.stack.pop();

		                        // Look at this token again in the parent context
		                        --i;
		                }

		                prevToken = token;
		                break;

		            // Unexpected context
		            // $lab:coverage:off$
		            default:
		                throw new Error('unknown context: ' + context.now);
		            // $lab:coverage:on$
		        } // Primary state machine

		        if (maxResult > internals.categories.rfc5322) {
		            // Fatal error, no point continuing
		            break;
		        }
		    } // Token loop

		    // Check for errors
		    if (maxResult < internals.categories.rfc5322) {
		        // Fatal errors
		        if (context.now === internals.components.contextQuotedString) {
		            updateResult(internals.diagnoses.errUnclosedQuotedString);
		        } else if (context.now === internals.components.contextQuotedPair) {
		            updateResult(internals.diagnoses.errBackslashEnd);
		        } else if (context.now === internals.components.contextComment) {
		            updateResult(internals.diagnoses.errUnclosedComment);
		        } else if (context.now === internals.components.literal) {
		            updateResult(internals.diagnoses.errUnclosedDomainLiteral);
		        } else if (token === '\r') {
		            updateResult(internals.diagnoses.errFWSCRLFEnd);
		        } else if (parseData.domain.length === 0) {
		            updateResult(internals.diagnoses.errNoDomain);
		        } else if (elementLength === 0) {
		            updateResult(internals.diagnoses.errDotEnd);
		        } else if (hyphenFlag) {
		            updateResult(internals.diagnoses.errDomainHyphenEnd);
		        }

		        // Other errors
		        else if (parseData.domain.length > 255) {
		                // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.2
		                //   The maximum total length of a domain name or number is 255 octets.
		                updateResult(internals.diagnoses.rfc5322DomainTooLong);
		            } else if (parseData.local.length + parseData.domain.length + /* '@' */1 > 254) {
		                // http://tools.ietf.org/html/rfc5321#section-4.1.2
		                //   Forward-path   = Path
		                //
		                //   Path           = "<" [ A-d-l ":" ] Mailbox ">"
		                //
		                // http://tools.ietf.org/html/rfc5321#section-4.5.3.1.3
		                //   The maximum total length of a reverse-path or forward-path is 256 octets (including the punctuation and element separators).
		                //
		                // Thus, even without (obsolete) routing information, the Mailbox can only be 254 characters long. This is confirmed by this verified
		                // erratum to RFC 3696:
		                //
		                // http://www.rfc-editor.org/errata_search.php?rfc=3696&eid=1690
		                //   However, there is a restriction in RFC 2821 on the length of an address in MAIL and RCPT commands of 254 characters.  Since
		                //   addresses that do not fit in those fields are not normally useful, the upper limit on address lengths should normally be considered
		                //   to be 254.
		                updateResult(internals.diagnoses.rfc5322TooLong);
		            } else if (elementLength > 63) {
		                // http://tools.ietf.org/html/rfc1035#section-2.3.4
		                // labels   63 octets or less
		                updateResult(internals.diagnoses.rfc5322LabelTooLong);
		            } else if (options.minDomainAtoms && atomData.domains.length < options.minDomainAtoms) {
		                updateResult(internals.diagnoses.errDomainTooShort);
		            } else if (options.tldWhitelist || options.tldBlacklist) {
		                var tldAtom = atomData.domains[elementCount];

		                if (!internals.validDomain(tldAtom, options)) {
		                    updateResult(internals.diagnoses.errUnknownTLD);
		                }
		            }
		    } // Check for errors

		    var dnsPositive = false;
		    var finishImmediately = false;

		    var finish = function finish() {

		        if (!dnsPositive && maxResult < internals.categories.dnsWarn) {
		            // Per RFC 5321, domain atoms are limited to letter-digit-hyphen, so we only need to check code <= 57 to check for a digit
		            var code = atomData.domains[elementCount].charCodeAt(0);
		            if (code <= 57) {
		                updateResult(internals.diagnoses.rfc5321TLDNumeric);
		            } else if (elementCount === 0) {
		                updateResult(internals.diagnoses.rfc5321TLD);
		            }
		        }

		        if (maxResult < threshold) {
		            maxResult = internals.diagnoses.valid;
		        }

		        var finishResult = diagnose ? maxResult : maxResult < internals.defaultThreshold;

		        if (callback) {
		            if (finishImmediately) {
		                callback(finishResult);
		            } else {
		                internals.defer(callback.bind(null, finishResult));
		            }
		        }

		        return finishResult;
		    }; // Finish

		    if (options.checkDNS && maxResult < internals.categories.dnsWarn) {
		        (function () {
		            // http://tools.ietf.org/html/rfc5321#section-2.3.5
		            //   Names that can be resolved to MX RRs or address (i.e., A or AAAA) RRs (as discussed in Section 5) are permitted, as are CNAME RRs whose
		            //   targets can be resolved, in turn, to MX or address RRs.
		            //
		            // http://tools.ietf.org/html/rfc5321#section-5.1
		            //   The lookup first attempts to locate an MX record associated with the name.  If a CNAME record is found, the resulting name is processed
		            //   as if it were the initial name. ... If an empty list of MXs is returned, the address is treated as if it was associated with an implicit
		            //   MX RR, with a preference of 0, pointing to that host.
		            //
		            // isEmail() author's note: We will regard the existence of a CNAME to be sufficient evidence of the domain's existence. For performance
		            // reasons we will not repeat the DNS lookup for the CNAME's target, but we will raise a warning because we didn't immediately find an MX
		            // record.
		            if (elementCount === 0) {
		                // Checking TLD DNS only works if you explicitly check from the root
		                parseData.domain += '.';
		            }

		            var dnsDomain = parseData.domain;
		            Dns.resolveMx(dnsDomain, function (err, mxRecords) {

		                // If we have a fatal error, then we must assume that there are no records
		                if (err && err.code !== Dns.NODATA) {
		                    updateResult(internals.diagnoses.dnsWarnNoRecord);
		                    return finish();
		                }

		                if (mxRecords && mxRecords.length) {
		                    dnsPositive = true;
		                    return finish();
		                }

		                var count = 3;
		                var done = false;
		                updateResult(internals.diagnoses.dnsWarnNoMXRecord);

		                var handleRecords = function handleRecords(ignoreError, records) {

		                    if (done) {
		                        return;
		                    }

		                    --count;

		                    if (records && records.length) {
		                        done = true;
		                        return finish();
		                    }

		                    if (count === 0) {
		                        // No usable records for the domain can be found
		                        updateResult(internals.diagnoses.dnsWarnNoRecord);
		                        done = true;
		                        finish();
		                    }
		                };

		                Dns.resolveCname(dnsDomain, handleRecords);
		                Dns.resolve4(dnsDomain, handleRecords);
		                Dns.resolve6(dnsDomain, handleRecords);
		            });

		            finishImmediately = true;
		        })();
		    } else {
		        var result = finish();
		        finishImmediately = true;
		        return result;
		    } // CheckDNS
		};

		exports.diagnoses = internals.validate.diagnoses = function () {

		    var diag = {};
		    var keys = Object.keys(internals.diagnoses);
		    for (var i = 0; i < keys.length; ++i) {
		        var key = keys[i];
		        diag[key] = internals.diagnoses[key];
		    }

		    return diag;
		}();
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))

	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load Modules

		var RFC3986 = __webpack_require__(24);

		// Declare internals

		var internals = {
		    Uri: {
		        createUriRegex: function createUriRegex(optionalScheme, allowRelative, relativeOnly) {

		            var scheme = RFC3986.scheme;
		            var prefix = void 0;

		            if (relativeOnly) {
		                prefix = '(?:' + RFC3986.relativeRef + ')';
		            } else {
		                // If we were passed a scheme, use it instead of the generic one
		                if (optionalScheme) {

		                    // Have to put this in a non-capturing group to handle the OR statements
		                    scheme = '(?:' + optionalScheme + ')';
		                }

		                var withScheme = '(?:' + scheme + ':' + RFC3986.hierPart + ')';

		                prefix = allowRelative ? '(?:' + withScheme + '|' + RFC3986.relativeRef + ')' : withScheme;
		            }

		            /**
		             * URI = scheme ":" hier-part [ "?" query ] [ "#" fragment ]
		             *
		             * OR
		             *
		             * relative-ref = relative-part [ "?" query ] [ "#" fragment ]
		             */
		            return new RegExp('^' + prefix + '(?:\\?' + RFC3986.query + ')?' + '(?:#' + RFC3986.fragment + ')?$');
		        }
		    }
		};

		module.exports = internals.Uri;

	/***/ },
	/* 24 */
	/***/ function(module, exports) {

		'use strict';

		// Load modules


		// Delcare internals

		var internals = {
		  rfc3986: {}
		};

		internals.generate = function () {

		  /**
		   * elements separated by forward slash ("/") are alternatives.
		   */
		  var or = '|';

		  /**
		   * DIGIT = %x30-39 ; 0-9
		   */
		  var digit = '0-9';
		  var digitOnly = '[' + digit + ']';

		  /**
		   * ALPHA = %x41-5A / %x61-7A   ; A-Z / a-z
		   */
		  var alpha = 'a-zA-Z';
		  var alphaOnly = '[' + alpha + ']';

		  /**
		   * cidr       = DIGIT                ; 0-9
		   *            / %x31-32 DIGIT         ; 10-29
		   *            / "3" %x30-32           ; 30-32
		   */
		  internals.rfc3986.cidr = digitOnly + or + '[1-2]' + digitOnly + or + '3' + '[0-2]';

		  /**
		   * HEXDIG = DIGIT / "A" / "B" / "C" / "D" / "E" / "F"
		   */
		  var hexDigit = digit + 'A-Fa-f';
		  var hexDigitOnly = '[' + hexDigit + ']';

		  /**
		   * unreserved = ALPHA / DIGIT / "-" / "." / "_" / "~"
		   */
		  var unreserved = alpha + digit + '-\\._~';

		  /**
		   * sub-delims = "!" / "$" / "&" / "'" / "(" / ")" / "*" / "+" / "," / ";" / "="
		   */
		  var subDelims = '!\\$&\'\\(\\)\\*\\+,;=';

		  /**
		   * pct-encoded = "%" HEXDIG HEXDIG
		   */
		  var pctEncoded = '%' + hexDigit;

		  /**
		   * pchar = unreserved / pct-encoded / sub-delims / ":" / "@"
		   */
		  var pchar = unreserved + pctEncoded + subDelims + ':@';
		  var pcharOnly = '[' + pchar + ']';

		  /**
		   * Rule to support zero-padded addresses.
		   */
		  var zeroPad = '0?';

		  /**
		   * dec-octet   = DIGIT                 ; 0-9
		   *            / %x31-39 DIGIT         ; 10-99
		   *            / "1" 2DIGIT            ; 100-199
		   *            / "2" %x30-34 DIGIT     ; 200-249
		   *            / "25" %x30-35          ; 250-255
		   */
		  var decOctect = '(?:' + zeroPad + zeroPad + digitOnly + or + zeroPad + '[1-9]' + digitOnly + or + '1' + digitOnly + digitOnly + or + '2' + '[0-4]' + digitOnly + or + '25' + '[0-5])';

		  /**
		   * IPv4address = dec-octet "." dec-octet "." dec-octet "." dec-octet
		   */
		  internals.rfc3986.IPv4address = '(?:' + decOctect + '\\.){3}' + decOctect;

		  /**
		   * h16 = 1*4HEXDIG ; 16 bits of address represented in hexadecimal
		   * ls32 = ( h16 ":" h16 ) / IPv4address ; least-significant 32 bits of address
		   * IPv6address =                            6( h16 ":" ) ls32
		   *             /                       "::" 5( h16 ":" ) ls32
		   *             / [               h16 ] "::" 4( h16 ":" ) ls32
		   *             / [ *1( h16 ":" ) h16 ] "::" 3( h16 ":" ) ls32
		   *             / [ *2( h16 ":" ) h16 ] "::" 2( h16 ":" ) ls32
		   *             / [ *3( h16 ":" ) h16 ] "::"    h16 ":"   ls32
		   *             / [ *4( h16 ":" ) h16 ] "::"              ls32
		   *             / [ *5( h16 ":" ) h16 ] "::"              h16
		   *             / [ *6( h16 ":" ) h16 ] "::"
		   */
		  var h16 = hexDigitOnly + '{1,4}';
		  var ls32 = '(?:' + h16 + ':' + h16 + '|' + internals.rfc3986.IPv4address + ')';
		  var IPv6SixHex = '(?:' + h16 + ':){6}' + ls32;
		  var IPv6FiveHex = '::(?:' + h16 + ':){5}' + ls32;
		  var IPv6FourHex = '(?:' + h16 + ')?::(?:' + h16 + ':){4}' + ls32;
		  var IPv6ThreeHex = '(?:(?:' + h16 + ':){0,1}' + h16 + ')?::(?:' + h16 + ':){3}' + ls32;
		  var IPv6TwoHex = '(?:(?:' + h16 + ':){0,2}' + h16 + ')?::(?:' + h16 + ':){2}' + ls32;
		  var IPv6OneHex = '(?:(?:' + h16 + ':){0,3}' + h16 + ')?::' + h16 + ':' + ls32;
		  var IPv6NoneHex = '(?:(?:' + h16 + ':){0,4}' + h16 + ')?::' + ls32;
		  var IPv6NoneHex2 = '(?:(?:' + h16 + ':){0,5}' + h16 + ')?::' + h16;
		  var IPv6NoneHex3 = '(?:(?:' + h16 + ':){0,6}' + h16 + ')?::';
		  internals.rfc3986.IPv6address = '(?:' + IPv6SixHex + or + IPv6FiveHex + or + IPv6FourHex + or + IPv6ThreeHex + or + IPv6TwoHex + or + IPv6OneHex + or + IPv6NoneHex + or + IPv6NoneHex2 + or + IPv6NoneHex3 + ')';

		  /**
		   * IPvFuture = "v" 1*HEXDIG "." 1*( unreserved / sub-delims / ":" )
		   */
		  internals.rfc3986.IPvFuture = 'v' + hexDigitOnly + '+\\.[' + unreserved + subDelims + ':]+';

		  /**
		   * scheme = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
		   */
		  internals.rfc3986.scheme = alphaOnly + '[' + alpha + digit + '+-\\.]*';

		  /**
		   * userinfo = *( unreserved / pct-encoded / sub-delims / ":" )
		   */
		  var userinfo = '[' + unreserved + pctEncoded + subDelims + ':]*';

		  /**
		   * IP-literal = "[" ( IPv6address / IPvFuture  ) "]"
		   */
		  var IPLiteral = '\\[(?:' + internals.rfc3986.IPv6address + or + internals.rfc3986.IPvFuture + ')\\]';

		  /**
		   * reg-name = *( unreserved / pct-encoded / sub-delims )
		   */
		  var regName = '[' + unreserved + pctEncoded + subDelims + ']{0,255}';

		  /**
		   * host = IP-literal / IPv4address / reg-name
		   */
		  var host = '(?:' + IPLiteral + or + internals.rfc3986.IPv4address + or + regName + ')';

		  /**
		   * port = *DIGIT
		   */
		  var port = digitOnly + '*';

		  /**
		   * authority   = [ userinfo "@" ] host [ ":" port ]
		   */
		  var authority = '(?:' + userinfo + '@)?' + host + '(?::' + port + ')?';

		  /**
		   * segment       = *pchar
		   * segment-nz    = 1*pchar
		   * path          = path-abempty    ; begins with "/" or is empty
		   *               / path-absolute   ; begins with "/" but not "//"
		   *               / path-noscheme   ; begins with a non-colon segment
		   *               / path-rootless   ; begins with a segment
		   *               / path-empty      ; zero characters
		   * path-abempty  = *( "/" segment )
		   * path-absolute = "/" [ segment-nz *( "/" segment ) ]
		   * path-rootless = segment-nz *( "/" segment )
		   */
		  var segment = pcharOnly + '*';
		  var segmentNz = pcharOnly + '+';
		  var segmentNzNc = '[' + unreserved + pctEncoded + subDelims + '@' + ']+';
		  var pathEmpty = '';
		  var pathAbEmpty = '(?:\\/' + segment + ')*';
		  var pathAbsolute = '\\/(?:' + segmentNz + pathAbEmpty + ')?';
		  var pathRootless = segmentNz + pathAbEmpty;
		  var pathNoScheme = segmentNzNc + pathAbEmpty;

		  /**
		   * hier-part = "//" authority path
		   */
		  internals.rfc3986.hierPart = '(?:' + '(?:\\/\\/' + authority + pathAbEmpty + ')' + or + pathAbsolute + or + pathRootless + ')';

		  /**
		   * relative-part = "//" authority path-abempty
		   *                 / path-absolute
		   *                 / path-noscheme
		   *                 / path-empty
		   */
		  internals.rfc3986.relativeRef = '(?:' + '(?:\\/\\/' + authority + pathAbEmpty + ')' + or + pathAbsolute + or + pathNoScheme + or + pathEmpty + ')';

		  /**
		   * query = *( pchar / "/" / "?" )
		   */
		  internals.rfc3986.query = '[' + pchar + '\\/\\?]*(?=#|$)'; //Finish matching either at the fragment part or end of the line.

		  /**
		   * fragment = *( pchar / "/" / "?" )
		   */
		  internals.rfc3986.fragment = '[' + pchar + '\\/\\?]*';
		};

		internals.generate();

		module.exports = internals.rfc3986;

	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		var RFC3986 = __webpack_require__(24);

		// Declare internals

		var internals = {
		    Ip: {
		        cidrs: {
		            required: '\\/(?:' + RFC3986.cidr + ')',
		            optional: '(?:\\/(?:' + RFC3986.cidr + '))?',
		            forbidden: ''
		        },
		        versions: {
		            ipv4: RFC3986.IPv4address,
		            ipv6: RFC3986.IPv6address,
		            ipvfuture: RFC3986.IPvFuture
		        }
		    }
		};

		internals.Ip.createIpRegex = function (versions, cidr) {

		    var regex = void 0;
		    for (var i = 0; i < versions.length; ++i) {
		        var version = versions[i];
		        if (!regex) {
		            regex = '^(?:' + internals.Ip.versions[version];
		        }
		        regex = regex + '|' + internals.Ip.versions[version];
		    }

		    return new RegExp(regex + ')' + internals.Ip.cidrs[cidr] + '$');
		};

		module.exports = internals.Ip;

	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

		var Any = __webpack_require__(14);
		var Ref = __webpack_require__(15);
		var Hoek = __webpack_require__(2);

		// Declare internals

		var internals = {
		    precisionRx: /(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/
		};

		internals.Number = function (_Any) {
		    _inherits(_class, _Any);

		    function _class() {
		        _classCallCheck(this, _class);

		        var _this = _possibleConstructorReturn(this, _Any.call(this));

		        _this._type = 'number';
		        _this._invalids.add(Infinity);
		        _this._invalids.add(-Infinity);
		        return _this;
		    }

		    _class.prototype._base = function _base(value, state, options) {

		        var result = {
		            errors: null,
		            value: value
		        };

		        if (typeof value === 'string' && options.convert) {

		            var number = parseFloat(value);
		            result.value = isNaN(number) || !isFinite(value) ? NaN : number;
		        }

		        var isNumber = typeof result.value === 'number' && !isNaN(result.value);

		        if (options.convert && 'precision' in this._flags && isNumber) {

		            // This is conceptually equivalent to using toFixed but it should be much faster
		            var precision = Math.pow(10, this._flags.precision);
		            result.value = Math.round(result.value * precision) / precision;
		        }

		        result.errors = isNumber ? null : this.createError('number.base', null, state, options);
		        return result;
		    };

		    _class.prototype.multiple = function multiple(base) {

		        var isRef = Ref.isRef(base);

		        if (!isRef) {
		            Hoek.assert(typeof base === 'number' && isFinite(base), 'multiple must be a number');
		            Hoek.assert(base > 0, 'multiple must be greater than 0');
		        }

		        return this._test('multiple', base, function (value, state, options) {

		            var divisor = isRef ? base(state.reference || state.parent, options) : base;

		            if (isRef && (typeof divisor !== 'number' || !isFinite(divisor))) {
		                return this.createError('number.ref', { ref: base.key }, state, options);
		            }

		            if (value % divisor === 0) {
		                return value;
		            }

		            return this.createError('number.multiple', { multiple: base, value: value }, state, options);
		        });
		    };

		    _class.prototype.integer = function integer() {

		        return this._test('integer', undefined, function (value, state, options) {

		            return Hoek.isInteger(value) ? value : this.createError('number.integer', { value: value }, state, options);
		        });
		    };

		    _class.prototype.negative = function negative() {

		        return this._test('negative', undefined, function (value, state, options) {

		            if (value < 0) {
		                return value;
		            }

		            return this.createError('number.negative', { value: value }, state, options);
		        });
		    };

		    _class.prototype.positive = function positive() {

		        return this._test('positive', undefined, function (value, state, options) {

		            if (value > 0) {
		                return value;
		            }

		            return this.createError('number.positive', { value: value }, state, options);
		        });
		    };

		    _class.prototype.precision = function precision(limit) {

		        Hoek.assert(Hoek.isInteger(limit), 'limit must be an integer');
		        Hoek.assert(!('precision' in this._flags), 'precision already set');

		        var obj = this._test('precision', limit, function (value, state, options) {

		            var places = value.toString().match(internals.precisionRx);
		            var decimals = Math.max((places[1] ? places[1].length : 0) - (places[2] ? parseInt(places[2], 10) : 0), 0);
		            if (decimals <= limit) {
		                return value;
		            }

		            return this.createError('number.precision', { limit: limit, value: value }, state, options);
		        });

		        obj._flags.precision = limit;
		        return obj;
		    };

		    return _class;
		}(Any);

		internals.compare = function (type, compare) {

		    return function (limit) {

		        var isRef = Ref.isRef(limit);
		        var isNumber = typeof limit === 'number' && !isNaN(limit);

		        Hoek.assert(isNumber || isRef, 'limit must be a number or reference');

		        return this._test(type, limit, function (value, state, options) {

		            var compareTo = void 0;
		            if (isRef) {
		                compareTo = limit(state.reference || state.parent, options);

		                if (!(typeof compareTo === 'number' && !isNaN(compareTo))) {
		                    return this.createError('number.ref', { ref: limit.key }, state, options);
		                }
		            } else {
		                compareTo = limit;
		            }

		            if (compare(value, compareTo)) {
		                return value;
		            }

		            return this.createError('number.' + type, { limit: compareTo, value: value }, state, options);
		        });
		    };
		};

		internals.Number.prototype.min = internals.compare('min', function (value, limit) {
		    return value >= limit;
		});
		internals.Number.prototype.max = internals.compare('max', function (value, limit) {
		    return value <= limit;
		});
		internals.Number.prototype.greater = internals.compare('greater', function (value, limit) {
		    return value > limit;
		});
		internals.Number.prototype.less = internals.compare('less', function (value, limit) {
		    return value < limit;
		});

		module.exports = new internals.Number();

	/***/ },
	/* 27 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

		var Any = __webpack_require__(14);
		var Hoek = __webpack_require__(2);

		// Declare internals

		var internals = {
		    Set: __webpack_require__(18)
		};

		internals.Boolean = function (_Any) {
		    _inherits(_class, _Any);

		    function _class() {
		        _classCallCheck(this, _class);

		        var _this = _possibleConstructorReturn(this, _Any.call(this));

		        _this._type = 'boolean';
		        _this._flags.insensitive = true;
		        _this._inner.truthySet = new internals.Set();
		        _this._inner.falsySet = new internals.Set();
		        return _this;
		    }

		    _class.prototype._base = function _base(value, state, options) {

		        var result = {
		            value: value
		        };

		        if (typeof value === 'string' && options.convert) {

		            var normalized = this._flags.insensitive ? value.toLowerCase() : value;
		            result.value = normalized === 'true' ? true : normalized === 'false' ? false : value;
		        }

		        if (typeof result.value !== 'boolean') {
		            result.value = this._inner.truthySet.has(value, null, null, this._flags.insensitive) ? true : this._inner.falsySet.has(value, null, null, this._flags.insensitive) ? false : value;
		        }

		        result.errors = typeof result.value === 'boolean' ? null : this.createError('boolean.base', null, state, options);
		        return result;
		    };

		    _class.prototype.truthy = function truthy() {

		        var obj = this.clone();
		        var values = Hoek.flatten(Array.prototype.slice.call(arguments));
		        for (var i = 0; i < values.length; ++i) {
		            var value = values[i];

		            Hoek.assert(value !== undefined, 'Cannot call truthy with undefined');
		            obj._inner.truthySet.add(value);
		        }
		        return obj;
		    };

		    _class.prototype.falsy = function falsy() {

		        var obj = this.clone();
		        var values = Hoek.flatten(Array.prototype.slice.call(arguments));
		        for (var i = 0; i < values.length; ++i) {
		            var value = values[i];

		            Hoek.assert(value !== undefined, 'Cannot call falsy with undefined');
		            obj._inner.falsySet.add(value);
		        }
		        return obj;
		    };

		    _class.prototype.insensitive = function insensitive(enabled) {

		        var insensitive = enabled === undefined ? true : !!enabled;

		        if (insensitive !== this._flags.insensitive) {
		            var obj = this.clone();
		            obj._flags.insensitive = insensitive;
		            return obj;
		        }

		        return this;
		    };

		    _class.prototype.describe = function describe() {

		        var description = Any.prototype.describe.call(this);
		        description.truthy = [true].concat(this._inner.truthySet.values());
		        description.falsy = [false].concat(this._inner.falsySet.values());
		        return description;
		    };

		    return _class;
		}(Any);

		module.exports = new internals.Boolean();

	/***/ },
	/* 28 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

		var Hoek = __webpack_require__(2);
		var Any = __webpack_require__(14);
		var Cast = __webpack_require__(19);
		var Ref = __webpack_require__(15);

		// Declare internals

		var internals = {};

		internals.Alternatives = function (_Any) {
		    _inherits(_class, _Any);

		    function _class() {
		        _classCallCheck(this, _class);

		        var _this = _possibleConstructorReturn(this, _Any.call(this));

		        _this._type = 'alternatives';
		        _this._invalids.remove(null);
		        _this._inner.matches = [];
		        return _this;
		    }

		    _class.prototype._base = function _base(value, state, options) {

		        var errors = [];
		        var il = this._inner.matches.length;
		        var baseType = this._settings && this._settings.baseType;

		        for (var i = 0; i < il; ++i) {
		            var item = this._inner.matches[i];
		            var schema = item.schema;
		            if (!schema) {
		                var failed = item.is._validate(item.ref(state.reference || state.parent, options), null, options, state.parent).errors;

		                if (failed) {
		                    if (item.otherwise) {
		                        return item.otherwise._validate(value, state, options);
		                    } else if (baseType && i === il - 1) {
		                        return baseType._validate(value, state, options);
		                    }
		                } else if (item.then || baseType) {
		                    return (item.then || baseType)._validate(value, state, options);
		                }

		                continue;
		            }

		            var result = schema._validate(value, state, options);
		            if (!result.errors) {
		                // Found a valid match
		                return result;
		            }

		            errors = errors.concat(result.errors);
		        }

		        return { errors: errors.length ? errors : this.createError('alternatives.base', null, state, options) };
		    };

		    _class.prototype.try = function _try() /* schemas */{

		        var schemas = Hoek.flatten(Array.prototype.slice.call(arguments));
		        Hoek.assert(schemas.length, 'Cannot add other alternatives without at least one schema');

		        var obj = this.clone();

		        for (var i = 0; i < schemas.length; ++i) {
		            var cast = Cast.schema(schemas[i]);
		            if (cast._refs.length) {
		                obj._refs = obj._refs.concat(cast._refs);
		            }
		            obj._inner.matches.push({ schema: cast });
		        }

		        return obj;
		    };

		    _class.prototype.when = function when(ref, options) {

		        Hoek.assert(Ref.isRef(ref) || typeof ref === 'string', 'Invalid reference:', ref);
		        Hoek.assert(options, 'Missing options');
		        Hoek.assert((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object', 'Invalid options');
		        Hoek.assert(options.hasOwnProperty('is'), 'Missing "is" directive');
		        Hoek.assert(options.then !== undefined || options.otherwise !== undefined, 'options must have at least one of "then" or "otherwise"');

		        var obj = this.clone();
		        var is = Cast.schema(options.is);

		        if (options.is === null || !(Ref.isRef(options.is) || options.is instanceof Any)) {

		            // Only apply required if this wasn't already a schema or a ref, we'll suppose people know what they're doing
		            is = is.required();
		        }

		        var item = {
		            ref: Cast.ref(ref),
		            is: is,
		            then: options.then !== undefined ? Cast.schema(options.then) : undefined,
		            otherwise: options.otherwise !== undefined ? Cast.schema(options.otherwise) : undefined
		        };

		        if (obj._settings && obj._settings.baseType) {
		            item.then = item.then && obj._settings.baseType.concat(item.then);
		            item.otherwise = item.otherwise && obj._settings.baseType.concat(item.otherwise);
		        }

		        Ref.push(obj._refs, item.ref);
		        obj._refs = obj._refs.concat(item.is._refs);

		        if (item.then && item.then._refs) {
		            obj._refs = obj._refs.concat(item.then._refs);
		        }

		        if (item.otherwise && item.otherwise._refs) {
		            obj._refs = obj._refs.concat(item.otherwise._refs);
		        }

		        obj._inner.matches.push(item);

		        return obj;
		    };

		    _class.prototype.describe = function describe() {

		        var description = Any.prototype.describe.call(this);
		        var alternatives = [];
		        for (var i = 0; i < this._inner.matches.length; ++i) {
		            var item = this._inner.matches[i];
		            if (item.schema) {

		                // try()

		                alternatives.push(item.schema.describe());
		            } else {

		                // when()

		                var when = {
		                    ref: item.ref.toString(),
		                    is: item.is.describe()
		                };

		                if (item.then) {
		                    when.then = item.then.describe();
		                }

		                if (item.otherwise) {
		                    when.otherwise = item.otherwise.describe();
		                }

		                alternatives.push(when);
		            }
		        }

		        description.alternatives = alternatives;
		        return description;
		    };

		    return _class;
		}(Any);

		module.exports = new internals.Alternatives();

	/***/ },
	/* 29 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

		var Hoek = __webpack_require__(2);
		var Topo = __webpack_require__(30);
		var Any = __webpack_require__(14);
		var Errors = __webpack_require__(16);
		var Cast = __webpack_require__(19);
		var Ref = __webpack_require__(15);

		// Declare internals

		var internals = {};

		internals.Object = function (_Any) {
		    _inherits(_class, _Any);

		    function _class() {
		        _classCallCheck(this, _class);

		        var _this = _possibleConstructorReturn(this, _Any.call(this));

		        _this._type = 'object';
		        _this._inner.children = null;
		        _this._inner.renames = [];
		        _this._inner.dependencies = [];
		        _this._inner.patterns = [];
		        return _this;
		    }

		    _class.prototype._base = function _base(value, state, options) {

		        var target = value;
		        var errors = [];
		        var finish = function finish() {

		            return {
		                value: target,
		                errors: errors.length ? errors : null
		            };
		        };

		        if (typeof value === 'string' && options.convert) {

		            value = internals.safeParse(value);
		        }

		        var type = this._flags.func ? 'function' : 'object';
		        if (!value || (typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== type || Array.isArray(value)) {

		            errors.push(this.createError(type + '.base', null, state, options));
		            return finish();
		        }

		        // Skip if there are no other rules to test

		        if (!this._inner.renames.length && !this._inner.dependencies.length && !this._inner.children && // null allows any keys
		        !this._inner.patterns.length) {

		            target = value;
		            return finish();
		        }

		        // Ensure target is a local copy (parsed) or shallow copy

		        if (target === value) {
		            if (type === 'object') {
		                target = Object.create(Object.getPrototypeOf(value));
		            } else {
		                target = function target() {

		                    return value.apply(this, arguments);
		                };

		                target.prototype = Hoek.clone(value.prototype);
		            }

		            var valueKeys = Object.keys(value);
		            for (var i = 0; i < valueKeys.length; ++i) {
		                target[valueKeys[i]] = value[valueKeys[i]];
		            }
		        } else {
		            target = value;
		        }

		        // Rename keys

		        var renamed = {};
		        for (var _i = 0; _i < this._inner.renames.length; ++_i) {
		            var rename = this._inner.renames[_i];

		            if (rename.options.ignoreUndefined && target[rename.from] === undefined) {
		                continue;
		            }

		            if (!rename.options.multiple && renamed[rename.to]) {

		                errors.push(this.createError('object.rename.multiple', { from: rename.from, to: rename.to }, state, options));
		                if (options.abortEarly) {
		                    return finish();
		                }
		            }

		            if (Object.prototype.hasOwnProperty.call(target, rename.to) && !rename.options.override && !renamed[rename.to]) {

		                errors.push(this.createError('object.rename.override', { from: rename.from, to: rename.to }, state, options));
		                if (options.abortEarly) {
		                    return finish();
		                }
		            }

		            if (target[rename.from] === undefined) {
		                delete target[rename.to];
		            } else {
		                target[rename.to] = target[rename.from];
		            }

		            renamed[rename.to] = true;

		            if (!rename.options.alias) {
		                delete target[rename.from];
		            }
		        }

		        // Validate schema

		        if (!this._inner.children && // null allows any keys
		        !this._inner.patterns.length && !this._inner.dependencies.length) {

		            return finish();
		        }

		        var unprocessed = Hoek.mapToObject(Object.keys(target));

		        if (this._inner.children) {
		            for (var _i2 = 0; _i2 < this._inner.children.length; ++_i2) {
		                var child = this._inner.children[_i2];
		                var key = child.key;
		                var item = target[key];

		                delete unprocessed[key];

		                var localState = { key: key, path: (state.path || '') + (state.path && key ? '.' : '') + key, parent: target, reference: state.reference };
		                var result = child.schema._validate(item, localState, options);
		                if (result.errors) {
		                    errors.push(this.createError('object.child', { key: key, child: child.schema._getLabel(key), reason: result.errors }, localState, options));

		                    if (options.abortEarly) {
		                        return finish();
		                    }
		                }

		                if (child.schema._flags.strip || result.value === undefined && result.value !== item) {
		                    delete target[key];
		                } else if (result.value !== undefined) {
		                    target[key] = result.value;
		                }
		            }
		        }

		        // Unknown keys

		        var unprocessedKeys = Object.keys(unprocessed);
		        if (unprocessedKeys.length && this._inner.patterns.length) {

		            for (var _i3 = 0; _i3 < unprocessedKeys.length; ++_i3) {
		                var _key = unprocessedKeys[_i3];
		                var _localState = { key: _key, path: (state.path ? state.path + '.' : '') + _key, parent: target, reference: state.reference };
		                var _item = target[_key];

		                for (var j = 0; j < this._inner.patterns.length; ++j) {
		                    var pattern = this._inner.patterns[j];

		                    if (pattern.regex.test(_key)) {
		                        delete unprocessed[_key];

		                        var _result = pattern.rule._validate(_item, _localState, options);
		                        if (_result.errors) {
		                            errors.push(this.createError('object.child', { key: _key, child: pattern.rule._getLabel(_key), reason: _result.errors }, _localState, options));

		                            if (options.abortEarly) {
		                                return finish();
		                            }
		                        }

		                        if (_result.value !== undefined) {
		                            target[_key] = _result.value;
		                        }
		                    }
		                }
		            }

		            unprocessedKeys = Object.keys(unprocessed);
		        }

		        if ((this._inner.children || this._inner.patterns.length) && unprocessedKeys.length) {
		            if (options.stripUnknown || options.skipFunctions) {

		                var stripUnknown = options.stripUnknown ? options.stripUnknown === true ? true : !!options.stripUnknown.objects : false;

		                for (var _i4 = 0; _i4 < unprocessedKeys.length; ++_i4) {
		                    var _key2 = unprocessedKeys[_i4];

		                    if (stripUnknown) {
		                        delete target[_key2];
		                        delete unprocessed[_key2];
		                    } else if (typeof target[_key2] === 'function') {
		                        delete unprocessed[_key2];
		                    }
		                }

		                unprocessedKeys = Object.keys(unprocessed);
		            }

		            if (unprocessedKeys.length && (this._flags.allowUnknown !== undefined ? !this._flags.allowUnknown : !options.allowUnknown)) {

		                for (var _i5 = 0; _i5 < unprocessedKeys.length; ++_i5) {
		                    var unprocessedKey = unprocessedKeys[_i5];
		                    errors.push(this.createError('object.allowUnknown', { child: unprocessedKey }, { key: unprocessedKey, path: state.path + (state.path ? '.' : '') + unprocessedKey }, options));
		                }
		            }
		        }

		        // Validate dependencies

		        for (var _i6 = 0; _i6 < this._inner.dependencies.length; ++_i6) {
		            var dep = this._inner.dependencies[_i6];
		            var err = internals[dep.type].call(this, dep.key !== null && target[dep.key], dep.peers, target, { key: dep.key, path: (state.path || '') + (dep.key ? '.' + dep.key : '') }, options);
		            if (err instanceof Errors.Err) {
		                errors.push(err);
		                if (options.abortEarly) {
		                    return finish();
		                }
		            }
		        }

		        return finish();
		    };

		    _class.prototype._func = function _func() {

		        var obj = this.clone();
		        obj._flags.func = true;
		        return obj;
		    };

		    _class.prototype.keys = function keys(schema) {

		        Hoek.assert(schema === null || schema === undefined || (typeof schema === 'undefined' ? 'undefined' : _typeof(schema)) === 'object', 'Object schema must be a valid object');
		        Hoek.assert(!schema || !(schema instanceof Any), 'Object schema cannot be a joi schema');

		        var obj = this.clone();

		        if (!schema) {
		            obj._inner.children = null;
		            return obj;
		        }

		        var children = Object.keys(schema);

		        if (!children.length) {
		            obj._inner.children = [];
		            return obj;
		        }

		        var topo = new Topo();
		        if (obj._inner.children) {
		            for (var i = 0; i < obj._inner.children.length; ++i) {
		                var child = obj._inner.children[i];

		                // Only add the key if we are not going to replace it later
		                if (children.indexOf(child.key) === -1) {
		                    topo.add(child, { after: child._refs, group: child.key });
		                }
		            }
		        }

		        for (var _i7 = 0; _i7 < children.length; ++_i7) {
		            var key = children[_i7];
		            var _child = schema[key];
		            try {
		                var cast = Cast.schema(_child);
		                topo.add({ key: key, schema: cast }, { after: cast._refs, group: key });
		            } catch (castErr) {
		                if (castErr.hasOwnProperty('path')) {
		                    castErr.path = key + '.' + castErr.path;
		                } else {
		                    castErr.path = key;
		                }
		                throw castErr;
		            }
		        }

		        obj._inner.children = topo.nodes;

		        return obj;
		    };

		    _class.prototype.unknown = function unknown(allow) {

		        var obj = this.clone();
		        obj._flags.allowUnknown = allow !== false;
		        return obj;
		    };

		    _class.prototype.length = function length(limit) {

		        Hoek.assert(Hoek.isInteger(limit) && limit >= 0, 'limit must be a positive integer');

		        return this._test('length', limit, function (value, state, options) {

		            if (Object.keys(value).length === limit) {
		                return value;
		            }

		            return this.createError('object.length', { limit: limit }, state, options);
		        });
		    };

		    _class.prototype.arity = function arity(n) {

		        Hoek.assert(Hoek.isInteger(n) && n >= 0, 'n must be a positive integer');

		        return this._test('arity', n, function (value, state, options) {

		            if (value.length === n) {
		                return value;
		            }

		            return this.createError('function.arity', { n: n }, state, options);
		        });
		    };

		    _class.prototype.minArity = function minArity(n) {

		        Hoek.assert(Hoek.isInteger(n) && n > 0, 'n must be a strict positive integer');

		        return this._test('minArity', n, function (value, state, options) {

		            if (value.length >= n) {
		                return value;
		            }

		            return this.createError('function.minArity', { n: n }, state, options);
		        });
		    };

		    _class.prototype.maxArity = function maxArity(n) {

		        Hoek.assert(Hoek.isInteger(n) && n >= 0, 'n must be a positive integer');

		        return this._test('maxArity', n, function (value, state, options) {

		            if (value.length <= n) {
		                return value;
		            }

		            return this.createError('function.maxArity', { n: n }, state, options);
		        });
		    };

		    _class.prototype.min = function min(limit) {

		        Hoek.assert(Hoek.isInteger(limit) && limit >= 0, 'limit must be a positive integer');

		        return this._test('min', limit, function (value, state, options) {

		            if (Object.keys(value).length >= limit) {
		                return value;
		            }

		            return this.createError('object.min', { limit: limit }, state, options);
		        });
		    };

		    _class.prototype.max = function max(limit) {

		        Hoek.assert(Hoek.isInteger(limit) && limit >= 0, 'limit must be a positive integer');

		        return this._test('max', limit, function (value, state, options) {

		            if (Object.keys(value).length <= limit) {
		                return value;
		            }

		            return this.createError('object.max', { limit: limit }, state, options);
		        });
		    };

		    _class.prototype.pattern = function pattern(_pattern, schema) {

		        Hoek.assert(_pattern instanceof RegExp, 'Invalid regular expression');
		        Hoek.assert(schema !== undefined, 'Invalid rule');

		        _pattern = new RegExp(_pattern.source, _pattern.ignoreCase ? 'i' : undefined); // Future version should break this and forbid unsupported regex flags

		        try {
		            schema = Cast.schema(schema);
		        } catch (castErr) {
		            if (castErr.hasOwnProperty('path')) {
		                castErr.message = castErr.message + '(' + castErr.path + ')';
		            }

		            throw castErr;
		        }

		        var obj = this.clone();
		        obj._inner.patterns.push({ regex: _pattern, rule: schema });
		        return obj;
		    };

		    _class.prototype.schema = function schema() {

		        return this._test('schema', null, function (value, state, options) {

		            if (value instanceof Any) {
		                return value;
		            }

		            return this.createError('object.schema', null, state, options);
		        });
		    };

		    _class.prototype.with = function _with(key, peers) {

		        return this._dependency('with', key, peers);
		    };

		    _class.prototype.without = function without(key, peers) {

		        return this._dependency('without', key, peers);
		    };

		    _class.prototype.xor = function xor() {

		        var peers = Hoek.flatten(Array.prototype.slice.call(arguments));
		        return this._dependency('xor', null, peers);
		    };

		    _class.prototype.or = function or() {

		        var peers = Hoek.flatten(Array.prototype.slice.call(arguments));
		        return this._dependency('or', null, peers);
		    };

		    _class.prototype.and = function and() {

		        var peers = Hoek.flatten(Array.prototype.slice.call(arguments));
		        return this._dependency('and', null, peers);
		    };

		    _class.prototype.nand = function nand() {

		        var peers = Hoek.flatten(Array.prototype.slice.call(arguments));
		        return this._dependency('nand', null, peers);
		    };

		    _class.prototype.requiredKeys = function requiredKeys(children) {

		        children = Hoek.flatten(Array.prototype.slice.call(arguments));
		        return this.applyFunctionToChildren(children, 'required');
		    };

		    _class.prototype.optionalKeys = function optionalKeys(children) {

		        children = Hoek.flatten(Array.prototype.slice.call(arguments));
		        return this.applyFunctionToChildren(children, 'optional');
		    };

		    _class.prototype.rename = function rename(from, to, options) {

		        Hoek.assert(typeof from === 'string', 'Rename missing the from argument');
		        Hoek.assert(typeof to === 'string', 'Rename missing the to argument');
		        Hoek.assert(to !== from, 'Cannot rename key to same name:', from);

		        for (var i = 0; i < this._inner.renames.length; ++i) {
		            Hoek.assert(this._inner.renames[i].from !== from, 'Cannot rename the same key multiple times');
		        }

		        var obj = this.clone();

		        obj._inner.renames.push({
		            from: from,
		            to: to,
		            options: Hoek.applyToDefaults(internals.renameDefaults, options || {})
		        });

		        return obj;
		    };

		    _class.prototype.applyFunctionToChildren = function applyFunctionToChildren(children, fn, args, root) {

		        children = [].concat(children);
		        Hoek.assert(children.length > 0, 'expected at least one children');

		        var groupedChildren = internals.groupChildren(children);
		        var obj = void 0;

		        if ('' in groupedChildren) {
		            obj = this[fn].apply(this, args);
		            delete groupedChildren[''];
		        } else {
		            obj = this.clone();
		        }

		        if (obj._inner.children) {
		            root = root ? root + '.' : '';

		            for (var i = 0; i < obj._inner.children.length; ++i) {
		                var child = obj._inner.children[i];
		                var group = groupedChildren[child.key];

		                if (group) {
		                    obj._inner.children[i] = {
		                        key: child.key,
		                        _refs: child._refs,
		                        schema: child.schema.applyFunctionToChildren(group, fn, args, root + child.key)
		                    };

		                    delete groupedChildren[child.key];
		                }
		            }
		        }

		        var remaining = Object.keys(groupedChildren);
		        Hoek.assert(remaining.length === 0, 'unknown key(s)', remaining.join(', '));

		        return obj;
		    };

		    _class.prototype._dependency = function _dependency(type, key, peers) {

		        peers = [].concat(peers);
		        for (var i = 0; i < peers.length; ++i) {
		            Hoek.assert(typeof peers[i] === 'string', type, 'peers must be a string or array of strings');
		        }

		        var obj = this.clone();
		        obj._inner.dependencies.push({ type: type, key: key, peers: peers });
		        return obj;
		    };

		    _class.prototype.describe = function describe(shallow) {

		        var description = Any.prototype.describe.call(this);

		        if (description.rules) {
		            for (var i = 0; i < description.rules.length; ++i) {
		                var rule = description.rules[i];
		                // Coverage off for future-proof descriptions, only object().assert() is use right now
		                if ( /* $lab:coverage:off$ */rule.arg && _typeof(rule.arg) === 'object' && rule.arg.schema && rule.arg.ref /* $lab:coverage:on$ */) {
		                        rule.arg = {
		                            schema: rule.arg.schema.describe(),
		                            ref: rule.arg.ref.toString()
		                        };
		                    }
		            }
		        }

		        if (this._inner.children && !shallow) {

		            description.children = {};
		            for (var _i8 = 0; _i8 < this._inner.children.length; ++_i8) {
		                var child = this._inner.children[_i8];
		                description.children[child.key] = child.schema.describe();
		            }
		        }

		        if (this._inner.dependencies.length) {
		            description.dependencies = Hoek.clone(this._inner.dependencies);
		        }

		        if (this._inner.patterns.length) {
		            description.patterns = [];

		            for (var _i9 = 0; _i9 < this._inner.patterns.length; ++_i9) {
		                var pattern = this._inner.patterns[_i9];
		                description.patterns.push({ regex: pattern.regex.toString(), rule: pattern.rule.describe() });
		            }
		        }

		        if (this._inner.renames.length > 0) {
		            description.renames = Hoek.clone(this._inner.renames);
		        }

		        return description;
		    };

		    _class.prototype.assert = function assert(ref, schema, message) {

		        ref = Cast.ref(ref);
		        Hoek.assert(ref.isContext || ref.depth > 1, 'Cannot use assertions for root level references - use direct key rules instead');
		        message = message || 'pass the assertion test';

		        try {
		            schema = Cast.schema(schema);
		        } catch (castErr) {
		            if (castErr.hasOwnProperty('path')) {
		                castErr.message = castErr.message + '(' + castErr.path + ')';
		            }

		            throw castErr;
		        }

		        var key = ref.path[ref.path.length - 1];
		        var path = ref.path.join('.');

		        return this._test('assert', { schema: schema, ref: ref }, function (value, state, options) {

		            var result = schema._validate(ref(value), null, options, value);
		            if (!result.errors) {
		                return value;
		            }

		            var localState = Hoek.merge({}, state);
		            localState.key = key;
		            localState.path = path;
		            return this.createError('object.assert', { ref: localState.path, message: message }, localState, options);
		        });
		    };

		    _class.prototype.type = function type(constructor, name) {

		        Hoek.assert(typeof constructor === 'function', 'type must be a constructor function');
		        var typeData = {
		            name: name || constructor.name,
		            ctor: constructor
		        };

		        return this._test('type', typeData, function (value, state, options) {

		            if (value instanceof constructor) {
		                return value;
		            }

		            return this.createError('object.type', { type: typeData.name }, state, options);
		        });
		    };

		    _class.prototype.ref = function ref() {

		        return this._test('ref', null, function (value, state, options) {

		            if (Ref.isRef(value)) {
		                return value;
		            }

		            return this.createError('function.ref', null, state, options);
		        });
		    };

		    return _class;
		}(Any);

		internals.safeParse = function (value) {

		    try {
		        return JSON.parse(value);
		    } catch (parseErr) {}

		    return value;
		};

		internals.renameDefaults = {
		    alias: false, // Keep old value in place
		    multiple: false, // Allow renaming multiple keys into the same target
		    override: false // Overrides an existing key
		};

		internals.groupChildren = function (children) {

		    children.sort();

		    var grouped = {};

		    for (var i = 0; i < children.length; ++i) {
		        var child = children[i];
		        Hoek.assert(typeof child === 'string', 'children must be strings');
		        var group = child.split('.')[0];
		        var childGroup = grouped[group] = grouped[group] || [];
		        childGroup.push(child.substring(group.length + 1));
		    }

		    return grouped;
		};

		internals.with = function (value, peers, parent, state, options) {

		    if (value === undefined) {
		        return value;
		    }

		    for (var i = 0; i < peers.length; ++i) {
		        var peer = peers[i];
		        if (!Object.prototype.hasOwnProperty.call(parent, peer) || parent[peer] === undefined) {

		            return this.createError('object.with', { peer: peer }, state, options);
		        }
		    }

		    return value;
		};

		internals.without = function (value, peers, parent, state, options) {

		    if (value === undefined) {
		        return value;
		    }

		    for (var i = 0; i < peers.length; ++i) {
		        var peer = peers[i];
		        if (Object.prototype.hasOwnProperty.call(parent, peer) && parent[peer] !== undefined) {

		            return this.createError('object.without', { peer: peer }, state, options);
		        }
		    }

		    return value;
		};

		internals.xor = function (value, peers, parent, state, options) {

		    var present = [];
		    for (var i = 0; i < peers.length; ++i) {
		        var peer = peers[i];
		        if (Object.prototype.hasOwnProperty.call(parent, peer) && parent[peer] !== undefined) {

		            present.push(peer);
		        }
		    }

		    if (present.length === 1) {
		        return value;
		    }

		    if (present.length === 0) {
		        return this.createError('object.missing', { peers: peers }, state, options);
		    }

		    return this.createError('object.xor', { peers: peers }, state, options);
		};

		internals.or = function (value, peers, parent, state, options) {

		    for (var i = 0; i < peers.length; ++i) {
		        var peer = peers[i];
		        if (Object.prototype.hasOwnProperty.call(parent, peer) && parent[peer] !== undefined) {
		            return value;
		        }
		    }

		    return this.createError('object.missing', { peers: peers }, state, options);
		};

		internals.and = function (value, peers, parent, state, options) {

		    var missing = [];
		    var present = [];
		    var count = peers.length;
		    for (var i = 0; i < count; ++i) {
		        var peer = peers[i];
		        if (!Object.prototype.hasOwnProperty.call(parent, peer) || parent[peer] === undefined) {

		            missing.push(peer);
		        } else {
		            present.push(peer);
		        }
		    }

		    var aon = missing.length === count || present.length === count;
		    return !aon ? this.createError('object.and', { present: present, missing: missing }, state, options) : null;
		};

		internals.nand = function (value, peers, parent, state, options) {

		    var present = [];
		    for (var i = 0; i < peers.length; ++i) {
		        var peer = peers[i];
		        if (Object.prototype.hasOwnProperty.call(parent, peer) && parent[peer] !== undefined) {

		            present.push(peer);
		        }
		    }

		    var values = Hoek.clone(peers);
		    var main = values.splice(0, 1)[0];
		    var allPresent = present.length === peers.length;
		    return allPresent ? this.createError('object.nand', { main: main, peers: values }, state, options) : null;
		};

		module.exports = new internals.Object();

	/***/ },
	/* 30 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		var Hoek = __webpack_require__(2);

		// Declare internals

		var internals = {};

		exports = module.exports = internals.Topo = function () {

		    this._items = [];
		    this.nodes = [];
		};

		internals.Topo.prototype.add = function (nodes, options) {
		    var _this = this;

		    options = options || {};

		    // Validate rules

		    var before = [].concat(options.before || []);
		    var after = [].concat(options.after || []);
		    var group = options.group || '?';
		    var sort = options.sort || 0; // Used for merging only

		    Hoek.assert(before.indexOf(group) === -1, 'Item cannot come before itself:', group);
		    Hoek.assert(before.indexOf('?') === -1, 'Item cannot come before unassociated items');
		    Hoek.assert(after.indexOf(group) === -1, 'Item cannot come after itself:', group);
		    Hoek.assert(after.indexOf('?') === -1, 'Item cannot come after unassociated items');

		    [].concat(nodes).forEach(function (node, i) {

		        var item = {
		            seq: _this._items.length,
		            sort: sort,
		            before: before,
		            after: after,
		            group: group,
		            node: node
		        };

		        _this._items.push(item);
		    });

		    // Insert event

		    var error = this._sort();
		    Hoek.assert(!error, 'item', group !== '?' ? 'added into group ' + group : '', 'created a dependencies error');

		    return this.nodes;
		};

		internals.Topo.prototype.merge = function (others) {

		    others = [].concat(others);
		    for (var i = 0; i < others.length; ++i) {
		        var other = others[i];
		        if (other) {
		            for (var j = 0; j < other._items.length; ++j) {
		                var item = Hoek.shallow(other._items[j]);
		                this._items.push(item);
		            }
		        }
		    }

		    // Sort items

		    this._items.sort(internals.mergeSort);
		    for (var _i = 0; _i < this._items.length; ++_i) {
		        this._items[_i].seq = _i;
		    }

		    var error = this._sort();
		    Hoek.assert(!error, 'merge created a dependencies error');

		    return this.nodes;
		};

		internals.mergeSort = function (a, b) {

		    return a.sort === b.sort ? 0 : a.sort < b.sort ? -1 : 1;
		};

		internals.Topo.prototype._sort = function () {

		    // Construct graph

		    var graph = {};
		    var graphAfters = Object.create(null); // A prototype can bungle lookups w/ false positives
		    var groups = Object.create(null);

		    for (var i = 0; i < this._items.length; ++i) {
		        var item = this._items[i];
		        var seq = item.seq; // Unique across all items
		        var group = item.group;

		        // Determine Groups

		        groups[group] = groups[group] || [];
		        groups[group].push(seq);

		        // Build intermediary graph using 'before'

		        graph[seq] = item.before;

		        // Build second intermediary graph with 'after'

		        var after = item.after;
		        for (var j = 0; j < after.length; ++j) {
		            graphAfters[after[j]] = (graphAfters[after[j]] || []).concat(seq);
		        }
		    }

		    // Expand intermediary graph

		    var graphNodes = Object.keys(graph);
		    for (var _i2 = 0; _i2 < graphNodes.length; ++_i2) {
		        var node = graphNodes[_i2];
		        var expandedGroups = [];

		        var graphNodeItems = Object.keys(graph[node]);
		        for (var _j = 0; _j < graphNodeItems.length; ++_j) {
		            var _group = graph[node][graphNodeItems[_j]];
		            groups[_group] = groups[_group] || [];

		            for (var k = 0; k < groups[_group].length; ++k) {
		                expandedGroups.push(groups[_group][k]);
		            }
		        }
		        graph[node] = expandedGroups;
		    }

		    // Merge intermediary graph using graphAfters into final graph

		    var afterNodes = Object.keys(graphAfters);
		    for (var _i3 = 0; _i3 < afterNodes.length; ++_i3) {
		        var _group2 = afterNodes[_i3];

		        if (groups[_group2]) {
		            for (var _j2 = 0; _j2 < groups[_group2].length; ++_j2) {
		                var _node = groups[_group2][_j2];
		                graph[_node] = graph[_node].concat(graphAfters[_group2]);
		            }
		        }
		    }

		    // Compile ancestors

		    var children = void 0;
		    var ancestors = {};
		    graphNodes = Object.keys(graph);
		    for (var _i4 = 0; _i4 < graphNodes.length; ++_i4) {
		        var _node2 = graphNodes[_i4];
		        children = graph[_node2];

		        for (var _j3 = 0; _j3 < children.length; ++_j3) {
		            ancestors[children[_j3]] = (ancestors[children[_j3]] || []).concat(_node2);
		        }
		    }

		    // Topo sort

		    var visited = {};
		    var sorted = [];

		    for (var _i5 = 0; _i5 < this._items.length; ++_i5) {
		        var next = _i5;

		        if (ancestors[_i5]) {
		            next = null;
		            for (var _j4 = 0; _j4 < this._items.length; ++_j4) {
		                if (visited[_j4] === true) {
		                    continue;
		                }

		                if (!ancestors[_j4]) {
		                    ancestors[_j4] = [];
		                }

		                var shouldSeeCount = ancestors[_j4].length;
		                var seenCount = 0;
		                for (var _k = 0; _k < shouldSeeCount; ++_k) {
		                    if (sorted.indexOf(ancestors[_j4][_k]) >= 0) {
		                        ++seenCount;
		                    }
		                }

		                if (seenCount === shouldSeeCount) {
		                    next = _j4;
		                    break;
		                }
		            }
		        }

		        if (next !== null) {
		            next = next.toString(); // Normalize to string TODO: replace with seq
		            visited[next] = true;
		            sorted.push(next);
		        }
		    }

		    if (sorted.length !== this._items.length) {
		        return new Error('Invalid dependencies');
		    }

		    var seqIndex = {};
		    for (var _i6 = 0; _i6 < this._items.length; ++_i6) {
		        var _item = this._items[_i6];
		        seqIndex[_item.seq] = _item;
		    }

		    var sortedNodes = [];
		    this._items = sorted.map(function (value) {

		        var sortedItem = seqIndex[value];
		        sortedNodes.push(sortedItem.node);
		        return sortedItem;
		    });

		    this.nodes = sortedNodes;
		};

	/***/ },
	/* 31 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		var Joi = __webpack_require__(1);

		// Declare internals

		var internals = {};

		exports.options = Joi.object({
		    abortEarly: Joi.boolean(),
		    convert: Joi.boolean(),
		    allowUnknown: Joi.boolean(),
		    skipFunctions: Joi.boolean(),
		    stripUnknown: [Joi.boolean(), Joi.object({ arrays: Joi.boolean(), objects: Joi.boolean() }).or('arrays', 'objects')],
		    language: Joi.object(),
		    presence: Joi.string().only('required', 'optional', 'forbidden', 'ignore'),
		    raw: Joi.boolean(),
		    context: Joi.object(),
		    strip: Joi.boolean(),
		    noDefaults: Joi.boolean()
		}).strict();

	/***/ },
	/* 32 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

		var Any = __webpack_require__(14);
		var Hoek = __webpack_require__(2);

		// Declare internals

		var internals = {};

		internals.Lazy = function (_Any) {
		    _inherits(_class, _Any);

		    function _class() {
		        _classCallCheck(this, _class);

		        var _this = _possibleConstructorReturn(this, _Any.call(this));

		        _this._type = 'lazy';
		        return _this;
		    }

		    _class.prototype._base = function _base(value, state, options) {

		        var result = { value: value };
		        var lazy = this._flags.lazy;

		        if (!lazy) {
		            result.errors = this.createError('lazy.base', null, state, options);
		            return result;
		        }

		        var schema = lazy();

		        if (!(schema instanceof Any)) {
		            result.errors = this.createError('lazy.schema', null, state, options);
		            return result;
		        }

		        return schema._validate(value, state, options);
		    };

		    _class.prototype.set = function set(fn) {

		        Hoek.assert(typeof fn === 'function', 'You must provide a function as first argument');

		        var obj = this.clone();
		        obj._flags.lazy = fn;
		        return obj;
		    };

		    return _class;
		}(Any);

		module.exports = new internals.Lazy();

	/***/ },
	/* 33 */
	/***/ function(module, exports, __webpack_require__) {

		'use strict';

		// Load modules

		var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

		function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

		var Any = __webpack_require__(14);
		var Cast = __webpack_require__(19);
		var Hoek = __webpack_require__(2);

		// Declare internals

		var internals = {};

		internals.fastSplice = function (arr, i) {

		    var pos = i;
		    while (pos < arr.length) {
		        arr[pos++] = arr[pos];
		    }

		    --arr.length;
		};

		internals.Array = function (_Any) {
		    _inherits(_class, _Any);

		    function _class() {
		        _classCallCheck(this, _class);

		        var _this = _possibleConstructorReturn(this, _Any.call(this));

		        _this._type = 'array';
		        _this._inner.items = [];
		        _this._inner.ordereds = [];
		        _this._inner.inclusions = [];
		        _this._inner.exclusions = [];
		        _this._inner.requireds = [];
		        _this._flags.sparse = false;
		        return _this;
		    }

		    _class.prototype._base = function _base(value, state, options) {

		        var result = {
		            value: value
		        };

		        if (typeof value === 'string' && options.convert) {

		            internals.safeParse(value, result);
		        }

		        var isArray = Array.isArray(result.value);
		        var wasArray = isArray;
		        if (options.convert && this._flags.single && !isArray) {
		            result.value = [result.value];
		            isArray = true;
		        }

		        if (!isArray) {
		            result.errors = this.createError('array.base', null, state, options);
		            return result;
		        }

		        if (this._inner.inclusions.length || this._inner.exclusions.length || this._inner.requireds.length || this._inner.ordereds.length || !this._flags.sparse) {

		            // Clone the array so that we don't modify the original
		            if (wasArray) {
		                result.value = result.value.slice(0);
		            }

		            result.errors = this._checkItems.call(this, result.value, wasArray, state, options);

		            if (result.errors && wasArray && options.convert && this._flags.single) {

		                // Attempt a 2nd pass by putting the array inside one.
		                var previousErrors = result.errors;

		                result.value = [result.value];
		                result.errors = this._checkItems.call(this, result.value, wasArray, state, options);

		                if (result.errors) {

		                    // Restore previous errors and value since this didn't validate either.
		                    result.errors = previousErrors;
		                    result.value = result.value[0];
		                }
		            }
		        }

		        return result;
		    };

		    _class.prototype._checkItems = function _checkItems(items, wasArray, state, options) {

		        var errors = [];
		        var errored = void 0;

		        var requireds = this._inner.requireds.slice();
		        var ordereds = this._inner.ordereds.slice();
		        var inclusions = this._inner.inclusions.concat(requireds);

		        var il = items.length;
		        for (var i = 0; i < il; ++i) {
		            errored = false;
		            var item = items[i];
		            var isValid = false;
		            var key = wasArray ? i : state.key;
		            var path = wasArray ? (state.path ? state.path + '.' : '') + i : state.path;
		            var localState = { key: key, path: path, parent: state.parent, reference: state.reference };
		            var res = void 0;

		            // Sparse

		            if (!this._flags.sparse && item === undefined) {
		                errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));

		                if (options.abortEarly) {
		                    return errors;
		                }

		                continue;
		            }

		            // Exclusions

		            for (var j = 0; j < this._inner.exclusions.length; ++j) {
		                res = this._inner.exclusions[j]._validate(item, localState, {}); // Not passing options to use defaults

		                if (!res.errors) {
		                    errors.push(this.createError(wasArray ? 'array.excludes' : 'array.excludesSingle', { pos: i, value: item }, { key: state.key, path: localState.path }, options));
		                    errored = true;

		                    if (options.abortEarly) {
		                        return errors;
		                    }

		                    break;
		                }
		            }

		            if (errored) {
		                continue;
		            }

		            // Ordered
		            if (this._inner.ordereds.length) {
		                if (ordereds.length > 0) {
		                    var ordered = ordereds.shift();
		                    res = ordered._validate(item, localState, options);
		                    if (!res.errors) {
		                        if (ordered._flags.strip) {
		                            internals.fastSplice(items, i);
		                            --i;
		                            --il;
		                        } else if (!this._flags.sparse && res.value === undefined) {
		                            errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));

		                            if (options.abortEarly) {
		                                return errors;
		                            }

		                            continue;
		                        } else {
		                            items[i] = res.value;
		                        }
		                    } else {
		                        errors.push(this.createError('array.ordered', { pos: i, reason: res.errors, value: item }, { key: state.key, path: localState.path }, options));
		                        if (options.abortEarly) {
		                            return errors;
		                        }
		                    }
		                    continue;
		                } else if (!this._inner.items.length) {
		                    errors.push(this.createError('array.orderedLength', { pos: i, limit: this._inner.ordereds.length }, { key: state.key, path: localState.path }, options));
		                    if (options.abortEarly) {
		                        return errors;
		                    }
		                    continue;
		                }
		            }

		            // Requireds

		            var requiredChecks = [];
		            var jl = requireds.length;
		            for (var _j = 0; _j < jl; ++_j) {
		                res = requiredChecks[_j] = requireds[_j]._validate(item, localState, options);
		                if (!res.errors) {
		                    items[i] = res.value;
		                    isValid = true;
		                    internals.fastSplice(requireds, _j);
		                    --_j;
		                    --jl;

		                    if (!this._flags.sparse && res.value === undefined) {
		                        errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));

		                        if (options.abortEarly) {
		                            return errors;
		                        }
		                    }

		                    break;
		                }
		            }

		            if (isValid) {
		                continue;
		            }

		            // Inclusions

		            var stripUnknown = options.stripUnknown ? options.stripUnknown === true ? true : !!options.stripUnknown.arrays : false;

		            jl = inclusions.length;
		            for (var _j2 = 0; _j2 < jl; ++_j2) {
		                var inclusion = inclusions[_j2];

		                // Avoid re-running requireds that already didn't match in the previous loop
		                var previousCheck = requireds.indexOf(inclusion);
		                if (previousCheck !== -1) {
		                    res = requiredChecks[previousCheck];
		                } else {
		                    res = inclusion._validate(item, localState, options);

		                    if (!res.errors) {
		                        if (inclusion._flags.strip) {
		                            internals.fastSplice(items, i);
		                            --i;
		                            --il;
		                        } else if (!this._flags.sparse && res.value === undefined) {
		                            errors.push(this.createError('array.sparse', null, { key: state.key, path: localState.path, pos: i }, options));
		                            errored = true;
		                        } else {
		                            items[i] = res.value;
		                        }
		                        isValid = true;
		                        break;
		                    }
		                }

		                // Return the actual error if only one inclusion defined
		                if (jl === 1) {
		                    if (stripUnknown) {
		                        internals.fastSplice(items, i);
		                        --i;
		                        --il;
		                        isValid = true;
		                        break;
		                    }

		                    errors.push(this.createError(wasArray ? 'array.includesOne' : 'array.includesOneSingle', { pos: i, reason: res.errors, value: item }, { key: state.key, path: localState.path }, options));
		                    errored = true;

		                    if (options.abortEarly) {
		                        return errors;
		                    }

		                    break;
		                }
		            }

		            if (errored) {
		                continue;
		            }

		            if (this._inner.inclusions.length && !isValid) {
		                if (stripUnknown) {
		                    internals.fastSplice(items, i);
		                    --i;
		                    --il;
		                    continue;
		                }

		                errors.push(this.createError(wasArray ? 'array.includes' : 'array.includesSingle', { pos: i, value: item }, { key: state.key, path: localState.path }, options));

		                if (options.abortEarly) {
		                    return errors;
		                }
		            }
		        }

		        if (requireds.length) {
		            this._fillMissedErrors.call(this, errors, requireds, state, options);
		        }

		        if (ordereds.length) {
		            this._fillOrderedErrors.call(this, errors, ordereds, state, options);
		        }

		        return errors.length ? errors : null;
		    };

		    _class.prototype.describe = function describe() {

		        var description = Any.prototype.describe.call(this);

		        if (this._inner.ordereds.length) {
		            description.orderedItems = [];

		            for (var i = 0; i < this._inner.ordereds.length; ++i) {
		                description.orderedItems.push(this._inner.ordereds[i].describe());
		            }
		        }

		        if (this._inner.items.length) {
		            description.items = [];

		            for (var _i = 0; _i < this._inner.items.length; ++_i) {
		                description.items.push(this._inner.items[_i].describe());
		            }
		        }

		        return description;
		    };

		    _class.prototype.items = function items() {

		        var obj = this.clone();

		        Hoek.flatten(Array.prototype.slice.call(arguments)).forEach(function (type, index) {

		            try {
		                type = Cast.schema(type);
		            } catch (castErr) {
		                if (castErr.hasOwnProperty('path')) {
		                    castErr.path = index + '.' + castErr.path;
		                } else {
		                    castErr.path = index;
		                }
		                castErr.message = castErr.message + '(' + castErr.path + ')';
		                throw castErr;
		            }

		            obj._inner.items.push(type);

		            if (type._flags.presence === 'required') {
		                obj._inner.requireds.push(type);
		            } else if (type._flags.presence === 'forbidden') {
		                obj._inner.exclusions.push(type.optional());
		            } else {
		                obj._inner.inclusions.push(type);
		            }
		        });

		        return obj;
		    };

		    _class.prototype.ordered = function ordered() {

		        var obj = this.clone();

		        Hoek.flatten(Array.prototype.slice.call(arguments)).forEach(function (type, index) {

		            try {
		                type = Cast.schema(type);
		            } catch (castErr) {
		                if (castErr.hasOwnProperty('path')) {
		                    castErr.path = index + '.' + castErr.path;
		                } else {
		                    castErr.path = index;
		                }
		                castErr.message = castErr.message + '(' + castErr.path + ')';
		                throw castErr;
		            }
		            obj._inner.ordereds.push(type);
		        });

		        return obj;
		    };

		    _class.prototype.min = function min(limit) {

		        Hoek.assert(Hoek.isInteger(limit) && limit >= 0, 'limit must be a positive integer');

		        return this._test('min', limit, function (value, state, options) {

		            if (value.length >= limit) {
		                return value;
		            }

		            return this.createError('array.min', { limit: limit, value: value }, state, options);
		        });
		    };

		    _class.prototype.max = function max(limit) {

		        Hoek.assert(Hoek.isInteger(limit) && limit >= 0, 'limit must be a positive integer');

		        return this._test('max', limit, function (value, state, options) {

		            if (value.length <= limit) {
		                return value;
		            }

		            return this.createError('array.max', { limit: limit, value: value }, state, options);
		        });
		    };

		    _class.prototype.length = function length(limit) {

		        Hoek.assert(Hoek.isInteger(limit) && limit >= 0, 'limit must be a positive integer');

		        return this._test('length', limit, function (value, state, options) {

		            if (value.length === limit) {
		                return value;
		            }

		            return this.createError('array.length', { limit: limit, value: value }, state, options);
		        });
		    };

		    _class.prototype.unique = function unique(comparator) {

		        var isCustom = !!comparator;
		        comparator = comparator || Hoek.deepEqual;
		        Hoek.assert(typeof comparator === 'function', 'comparator must be a function');

		        return this._test('unique', undefined, function (value, state, options) {

		            var found = {
		                string: {},
		                number: {},
		                undefined: {},
		                boolean: {},
		                object: [],
		                function: [],
		                custom: []
		            };

		            for (var i = 0; i < value.length; ++i) {
		                var item = value[i];
		                var type = typeof item === 'undefined' ? 'undefined' : _typeof(item);
		                var records = isCustom ? found.custom : found[type];

		                // All available types are supported, so it's not possible to reach 100% coverage without ignoring this line.
		                // I still want to keep the test for future js versions with new types (eg. Symbol).
		                if ( /* $lab:coverage:off$ */records /* $lab:coverage:on$ */) {
		                        if (Array.isArray(records)) {
		                            for (var j = 0; j < records.length; ++j) {
		                                if (comparator(records[j], item)) {
		                                    return this.createError('array.unique', { pos: i, value: item }, state, options);
		                                }
		                            }

		                            records.push(item);
		                        } else {
		                            if (records[item]) {
		                                return this.createError('array.unique', { pos: i, value: item }, state, options);
		                            }

		                            records[item] = true;
		                        }
		                    }
		            }

		            return value;
		        });
		    };

		    _class.prototype.sparse = function sparse(enabled) {

		        var obj = this.clone();
		        obj._flags.sparse = enabled === undefined ? true : !!enabled;
		        return obj;
		    };

		    _class.prototype.single = function single(enabled) {

		        var obj = this.clone();
		        obj._flags.single = enabled === undefined ? true : !!enabled;
		        return obj;
		    };

		    _class.prototype._fillMissedErrors = function _fillMissedErrors(errors, requireds, state, options) {

		        var knownMisses = [];
		        var unknownMisses = 0;
		        for (var i = 0; i < requireds.length; ++i) {
		            var label = requireds[i]._getLabel();
		            if (label) {
		                knownMisses.push(label);
		            } else {
		                ++unknownMisses;
		            }
		        }

		        if (knownMisses.length) {
		            if (unknownMisses) {
		                errors.push(this.createError('array.includesRequiredBoth', { knownMisses: knownMisses, unknownMisses: unknownMisses }, { key: state.key, path: state.path }, options));
		            } else {
		                errors.push(this.createError('array.includesRequiredKnowns', { knownMisses: knownMisses }, { key: state.key, path: state.path }, options));
		            }
		        } else {
		            errors.push(this.createError('array.includesRequiredUnknowns', { unknownMisses: unknownMisses }, { key: state.key, path: state.path }, options));
		        }
		    };

		    _class.prototype._fillOrderedErrors = function _fillOrderedErrors(errors, ordereds, state, options) {

		        var requiredOrdereds = [];

		        for (var i = 0; i < ordereds.length; ++i) {
		            var presence = Hoek.reach(ordereds[i], '_flags.presence');
		            if (presence === 'required') {
		                requiredOrdereds.push(ordereds[i]);
		            }
		        }

		        if (requiredOrdereds.length) {
		            this._fillMissedErrors.call(this, errors, requiredOrdereds, state, options);
		        }
		    };

		    return _class;
		}(Any);

		internals.safeParse = function (value, result) {

		    try {
		        var converted = JSON.parse(value);
		        if (Array.isArray(converted)) {
		            result.value = converted;
		        }
		    } catch (e) {}
		};

		module.exports = new internals.Array();

	/***/ },
	/* 34 */
	/***/ function(module, exports, __webpack_require__) {

		/* WEBPACK VAR INJECTION */(function(Buffer) {'use strict';

		// Load modules

		function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

		function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

		function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

		var Any = __webpack_require__(14);
		var Hoek = __webpack_require__(2);

		// Declare internals

		var internals = {};

		internals.Binary = function (_Any) {
		    _inherits(_class, _Any);

		    function _class() {
		        _classCallCheck(this, _class);

		        var _this = _possibleConstructorReturn(this, _Any.call(this));

		        _this._type = 'binary';
		        return _this;
		    }

		    _class.prototype._base = function _base(value, state, options) {

		        var result = {
		            value: value
		        };

		        if (typeof value === 'string' && options.convert) {

		            try {
		                result.value = new Buffer(value, this._flags.encoding);
		            } catch (e) {}
		        }

		        result.errors = Buffer.isBuffer(result.value) ? null : this.createError('binary.base', null, state, options);
		        return result;
		    };

		    _class.prototype.encoding = function encoding(_encoding) {

		        Hoek.assert(Buffer.isEncoding(_encoding), 'Invalid encoding:', _encoding);

		        var obj = this.clone();
		        obj._flags.encoding = _encoding;
		        return obj;
		    };

		    _class.prototype.min = function min(limit) {

		        Hoek.assert(Hoek.isInteger(limit) && limit >= 0, 'limit must be a positive integer');

		        return this._test('min', limit, function (value, state, options) {

		            if (value.length >= limit) {
		                return value;
		            }

		            return this.createError('binary.min', { limit: limit, value: value }, state, options);
		        });
		    };

		    _class.prototype.max = function max(limit) {

		        Hoek.assert(Hoek.isInteger(limit) && limit >= 0, 'limit must be a positive integer');

		        return this._test('max', limit, function (value, state, options) {

		            if (value.length <= limit) {
		                return value;
		            }

		            return this.createError('binary.max', { limit: limit, value: value }, state, options);
		        });
		    };

		    _class.prototype.length = function length(limit) {

		        Hoek.assert(Hoek.isInteger(limit) && limit >= 0, 'limit must be a positive integer');

		        return this._test('length', limit, function (value, state, options) {

		            if (value.length === limit) {
		                return value;
		            }

		            return this.createError('binary.length', { limit: limit, value: value }, state, options);
		        });
		    };

		    return _class;
		}(Any);

		module.exports = new internals.Binary();
		/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).Buffer))

	/***/ },
	/* 35 */
	/***/ function(module, exports) {

		module.exports = {
			"_args": [
				[
					{
						"raw": "joi@10.0.6",
						"scope": null,
						"escapedName": "joi",
						"name": "joi",
						"rawSpec": "10.0.6",
						"spec": "10.0.6",
						"type": "version"
					},
					"/Users/jeff/projects/joi-browser"
				]
			],
			"_from": "joi@10.0.6",
			"_id": "joi@10.0.6",
			"_inCache": true,
			"_location": "/joi",
			"_nodeVersion": "6.9.1",
			"_npmOperationalInternal": {
				"host": "packages-12-west.internal.npmjs.com",
				"tmp": "tmp/joi-10.0.6.tgz_1481722024584_0.36816817289218307"
			},
			"_npmUser": {
				"name": "marsup",
				"email": "nicolas@morel.io"
			},
			"_npmVersion": "3.10.8",
			"_phantomChildren": {},
			"_requested": {
				"raw": "joi@10.0.6",
				"scope": null,
				"escapedName": "joi",
				"name": "joi",
				"rawSpec": "10.0.6",
				"spec": "10.0.6",
				"type": "version"
			},
			"_requiredBy": [
				"#DEV:/"
			],
			"_resolved": "https://registry.npmjs.org/joi/-/joi-10.0.6.tgz",
			"_shasum": "dbacbbf30b4dbb9d28ef6716d82c4580bb04c096",
			"_shrinkwrap": null,
			"_spec": "joi@10.0.6",
			"_where": "/Users/jeff/projects/joi-browser",
			"bugs": {
				"url": "https://github.com/hapijs/joi/issues"
			},
			"dependencies": {
				"hoek": "4.x.x",
				"isemail": "2.x.x",
				"items": "2.x.x",
				"topo": "2.x.x"
			},
			"description": "Object schema validation",
			"devDependencies": {
				"code": "4.x.x",
				"lab": "11.x.x",
				"markdown-toc": "0.13.x"
			},
			"directories": {},
			"dist": {
				"shasum": "dbacbbf30b4dbb9d28ef6716d82c4580bb04c096",
				"tarball": "https://registry.npmjs.org/joi/-/joi-10.0.6.tgz"
			},
			"engines": {
				"node": ">=4.0.0"
			},
			"gitHead": "15f2dbce28efb3fd5ed12e30f1cf96c366a842b8",
			"homepage": "https://github.com/hapijs/joi",
			"keywords": [
				"hapi",
				"schema",
				"validation"
			],
			"license": "BSD-3-Clause",
			"main": "lib/index.js",
			"maintainers": [
				{
					"name": "hueniverse",
					"email": "eran@hueniverse.com"
				},
				{
					"name": "marsup",
					"email": "marsup@gmail.com"
				}
			],
			"name": "joi",
			"optionalDependencies": {},
			"readme": "ERROR: No README data found!",
			"repository": {
				"type": "git",
				"url": "git://github.com/hapijs/joi.git"
			},
			"scripts": {
				"test": "lab -t 100 -a code -L",
				"test-cov-html": "lab -r html -o coverage.html -a code",
				"test-debug": "node $NODE_DEBUG_OPTION ./node_modules/.bin/lab -a code",
				"toc": "node generate-readme-toc.js",
				"version": "npm run toc && git add API.md README.md"
			},
			"version": "10.0.6"
		};

	/***/ }
	/******/ ])
	});
	;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(189).Buffer))

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * The buffer module from node.js, for the browser.
	 *
	 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
	 * @license  MIT
	 */
	/* eslint-disable no-proto */

	'use strict'

	var base64 = __webpack_require__(190)
	var ieee754 = __webpack_require__(191)
	var isArray = __webpack_require__(192)

	exports.Buffer = Buffer
	exports.SlowBuffer = SlowBuffer
	exports.INSPECT_MAX_BYTES = 50

	/**
	 * If `Buffer.TYPED_ARRAY_SUPPORT`:
	 *   === true    Use Uint8Array implementation (fastest)
	 *   === false   Use Object implementation (most compatible, even IE6)
	 *
	 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
	 * Opera 11.6+, iOS 4.2+.
	 *
	 * Due to various browser bugs, sometimes the Object implementation will be used even
	 * when the browser supports typed arrays.
	 *
	 * Note:
	 *
	 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
	 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
	 *
	 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
	 *
	 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
	 *     incorrect length in some situations.

	 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
	 * get the Object implementation, which is slower but behaves correctly.
	 */
	Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
	  ? global.TYPED_ARRAY_SUPPORT
	  : typedArraySupport()

	/*
	 * Export kMaxLength after typed array support is determined.
	 */
	exports.kMaxLength = kMaxLength()

	function typedArraySupport () {
	  try {
	    var arr = new Uint8Array(1)
	    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
	    return arr.foo() === 42 && // typed array instances can be augmented
	        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
	        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
	  } catch (e) {
	    return false
	  }
	}

	function kMaxLength () {
	  return Buffer.TYPED_ARRAY_SUPPORT
	    ? 0x7fffffff
	    : 0x3fffffff
	}

	function createBuffer (that, length) {
	  if (kMaxLength() < length) {
	    throw new RangeError('Invalid typed array length')
	  }
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = new Uint8Array(length)
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    if (that === null) {
	      that = new Buffer(length)
	    }
	    that.length = length
	  }

	  return that
	}

	/**
	 * The Buffer constructor returns instances of `Uint8Array` that have their
	 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
	 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
	 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
	 * returns a single octet.
	 *
	 * The `Uint8Array` prototype remains unmodified.
	 */

	function Buffer (arg, encodingOrOffset, length) {
	  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
	    return new Buffer(arg, encodingOrOffset, length)
	  }

	  // Common case.
	  if (typeof arg === 'number') {
	    if (typeof encodingOrOffset === 'string') {
	      throw new Error(
	        'If encoding is specified then the first argument must be a string'
	      )
	    }
	    return allocUnsafe(this, arg)
	  }
	  return from(this, arg, encodingOrOffset, length)
	}

	Buffer.poolSize = 8192 // not used by this implementation

	// TODO: Legacy, not needed anymore. Remove in next major version.
	Buffer._augment = function (arr) {
	  arr.__proto__ = Buffer.prototype
	  return arr
	}

	function from (that, value, encodingOrOffset, length) {
	  if (typeof value === 'number') {
	    throw new TypeError('"value" argument must not be a number')
	  }

	  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
	    return fromArrayBuffer(that, value, encodingOrOffset, length)
	  }

	  if (typeof value === 'string') {
	    return fromString(that, value, encodingOrOffset)
	  }

	  return fromObject(that, value)
	}

	/**
	 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
	 * if value is a number.
	 * Buffer.from(str[, encoding])
	 * Buffer.from(array)
	 * Buffer.from(buffer)
	 * Buffer.from(arrayBuffer[, byteOffset[, length]])
	 **/
	Buffer.from = function (value, encodingOrOffset, length) {
	  return from(null, value, encodingOrOffset, length)
	}

	if (Buffer.TYPED_ARRAY_SUPPORT) {
	  Buffer.prototype.__proto__ = Uint8Array.prototype
	  Buffer.__proto__ = Uint8Array
	  if (typeof Symbol !== 'undefined' && Symbol.species &&
	      Buffer[Symbol.species] === Buffer) {
	    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
	    Object.defineProperty(Buffer, Symbol.species, {
	      value: null,
	      configurable: true
	    })
	  }
	}

	function assertSize (size) {
	  if (typeof size !== 'number') {
	    throw new TypeError('"size" argument must be a number')
	  } else if (size < 0) {
	    throw new RangeError('"size" argument must not be negative')
	  }
	}

	function alloc (that, size, fill, encoding) {
	  assertSize(size)
	  if (size <= 0) {
	    return createBuffer(that, size)
	  }
	  if (fill !== undefined) {
	    // Only pay attention to encoding if it's a string. This
	    // prevents accidentally sending in a number that would
	    // be interpretted as a start offset.
	    return typeof encoding === 'string'
	      ? createBuffer(that, size).fill(fill, encoding)
	      : createBuffer(that, size).fill(fill)
	  }
	  return createBuffer(that, size)
	}

	/**
	 * Creates a new filled Buffer instance.
	 * alloc(size[, fill[, encoding]])
	 **/
	Buffer.alloc = function (size, fill, encoding) {
	  return alloc(null, size, fill, encoding)
	}

	function allocUnsafe (that, size) {
	  assertSize(size)
	  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) {
	    for (var i = 0; i < size; ++i) {
	      that[i] = 0
	    }
	  }
	  return that
	}

	/**
	 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
	 * */
	Buffer.allocUnsafe = function (size) {
	  return allocUnsafe(null, size)
	}
	/**
	 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
	 */
	Buffer.allocUnsafeSlow = function (size) {
	  return allocUnsafe(null, size)
	}

	function fromString (that, string, encoding) {
	  if (typeof encoding !== 'string' || encoding === '') {
	    encoding = 'utf8'
	  }

	  if (!Buffer.isEncoding(encoding)) {
	    throw new TypeError('"encoding" must be a valid string encoding')
	  }

	  var length = byteLength(string, encoding) | 0
	  that = createBuffer(that, length)

	  var actual = that.write(string, encoding)

	  if (actual !== length) {
	    // Writing a hex string, for example, that contains invalid characters will
	    // cause everything after the first invalid character to be ignored. (e.g.
	    // 'abxxcd' will be treated as 'ab')
	    that = that.slice(0, actual)
	  }

	  return that
	}

	function fromArrayLike (that, array) {
	  var length = array.length < 0 ? 0 : checked(array.length) | 0
	  that = createBuffer(that, length)
	  for (var i = 0; i < length; i += 1) {
	    that[i] = array[i] & 255
	  }
	  return that
	}

	function fromArrayBuffer (that, array, byteOffset, length) {
	  array.byteLength // this throws if `array` is not a valid ArrayBuffer

	  if (byteOffset < 0 || array.byteLength < byteOffset) {
	    throw new RangeError('\'offset\' is out of bounds')
	  }

	  if (array.byteLength < byteOffset + (length || 0)) {
	    throw new RangeError('\'length\' is out of bounds')
	  }

	  if (byteOffset === undefined && length === undefined) {
	    array = new Uint8Array(array)
	  } else if (length === undefined) {
	    array = new Uint8Array(array, byteOffset)
	  } else {
	    array = new Uint8Array(array, byteOffset, length)
	  }

	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    // Return an augmented `Uint8Array` instance, for best performance
	    that = array
	    that.__proto__ = Buffer.prototype
	  } else {
	    // Fallback: Return an object instance of the Buffer class
	    that = fromArrayLike(that, array)
	  }
	  return that
	}

	function fromObject (that, obj) {
	  if (Buffer.isBuffer(obj)) {
	    var len = checked(obj.length) | 0
	    that = createBuffer(that, len)

	    if (that.length === 0) {
	      return that
	    }

	    obj.copy(that, 0, 0, len)
	    return that
	  }

	  if (obj) {
	    if ((typeof ArrayBuffer !== 'undefined' &&
	        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
	      if (typeof obj.length !== 'number' || isnan(obj.length)) {
	        return createBuffer(that, 0)
	      }
	      return fromArrayLike(that, obj)
	    }

	    if (obj.type === 'Buffer' && isArray(obj.data)) {
	      return fromArrayLike(that, obj.data)
	    }
	  }

	  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
	}

	function checked (length) {
	  // Note: cannot use `length < kMaxLength()` here because that fails when
	  // length is NaN (which is otherwise coerced to zero.)
	  if (length >= kMaxLength()) {
	    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
	                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
	  }
	  return length | 0
	}

	function SlowBuffer (length) {
	  if (+length != length) { // eslint-disable-line eqeqeq
	    length = 0
	  }
	  return Buffer.alloc(+length)
	}

	Buffer.isBuffer = function isBuffer (b) {
	  return !!(b != null && b._isBuffer)
	}

	Buffer.compare = function compare (a, b) {
	  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
	    throw new TypeError('Arguments must be Buffers')
	  }

	  if (a === b) return 0

	  var x = a.length
	  var y = b.length

	  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
	    if (a[i] !== b[i]) {
	      x = a[i]
	      y = b[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	Buffer.isEncoding = function isEncoding (encoding) {
	  switch (String(encoding).toLowerCase()) {
	    case 'hex':
	    case 'utf8':
	    case 'utf-8':
	    case 'ascii':
	    case 'latin1':
	    case 'binary':
	    case 'base64':
	    case 'ucs2':
	    case 'ucs-2':
	    case 'utf16le':
	    case 'utf-16le':
	      return true
	    default:
	      return false
	  }
	}

	Buffer.concat = function concat (list, length) {
	  if (!isArray(list)) {
	    throw new TypeError('"list" argument must be an Array of Buffers')
	  }

	  if (list.length === 0) {
	    return Buffer.alloc(0)
	  }

	  var i
	  if (length === undefined) {
	    length = 0
	    for (i = 0; i < list.length; ++i) {
	      length += list[i].length
	    }
	  }

	  var buffer = Buffer.allocUnsafe(length)
	  var pos = 0
	  for (i = 0; i < list.length; ++i) {
	    var buf = list[i]
	    if (!Buffer.isBuffer(buf)) {
	      throw new TypeError('"list" argument must be an Array of Buffers')
	    }
	    buf.copy(buffer, pos)
	    pos += buf.length
	  }
	  return buffer
	}

	function byteLength (string, encoding) {
	  if (Buffer.isBuffer(string)) {
	    return string.length
	  }
	  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
	      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
	    return string.byteLength
	  }
	  if (typeof string !== 'string') {
	    string = '' + string
	  }

	  var len = string.length
	  if (len === 0) return 0

	  // Use a for loop to avoid recursion
	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'ascii':
	      case 'latin1':
	      case 'binary':
	        return len
	      case 'utf8':
	      case 'utf-8':
	      case undefined:
	        return utf8ToBytes(string).length
	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return len * 2
	      case 'hex':
	        return len >>> 1
	      case 'base64':
	        return base64ToBytes(string).length
	      default:
	        if (loweredCase) return utf8ToBytes(string).length // assume utf8
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}
	Buffer.byteLength = byteLength

	function slowToString (encoding, start, end) {
	  var loweredCase = false

	  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
	  // property of a typed array.

	  // This behaves neither like String nor Uint8Array in that we set start/end
	  // to their upper/lower bounds if the value passed is out of range.
	  // undefined is handled specially as per ECMA-262 6th Edition,
	  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
	  if (start === undefined || start < 0) {
	    start = 0
	  }
	  // Return early if start > this.length. Done here to prevent potential uint32
	  // coercion fail below.
	  if (start > this.length) {
	    return ''
	  }

	  if (end === undefined || end > this.length) {
	    end = this.length
	  }

	  if (end <= 0) {
	    return ''
	  }

	  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
	  end >>>= 0
	  start >>>= 0

	  if (end <= start) {
	    return ''
	  }

	  if (!encoding) encoding = 'utf8'

	  while (true) {
	    switch (encoding) {
	      case 'hex':
	        return hexSlice(this, start, end)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Slice(this, start, end)

	      case 'ascii':
	        return asciiSlice(this, start, end)

	      case 'latin1':
	      case 'binary':
	        return latin1Slice(this, start, end)

	      case 'base64':
	        return base64Slice(this, start, end)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return utf16leSlice(this, start, end)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = (encoding + '').toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
	// Buffer instances.
	Buffer.prototype._isBuffer = true

	function swap (b, n, m) {
	  var i = b[n]
	  b[n] = b[m]
	  b[m] = i
	}

	Buffer.prototype.swap16 = function swap16 () {
	  var len = this.length
	  if (len % 2 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 16-bits')
	  }
	  for (var i = 0; i < len; i += 2) {
	    swap(this, i, i + 1)
	  }
	  return this
	}

	Buffer.prototype.swap32 = function swap32 () {
	  var len = this.length
	  if (len % 4 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 32-bits')
	  }
	  for (var i = 0; i < len; i += 4) {
	    swap(this, i, i + 3)
	    swap(this, i + 1, i + 2)
	  }
	  return this
	}

	Buffer.prototype.swap64 = function swap64 () {
	  var len = this.length
	  if (len % 8 !== 0) {
	    throw new RangeError('Buffer size must be a multiple of 64-bits')
	  }
	  for (var i = 0; i < len; i += 8) {
	    swap(this, i, i + 7)
	    swap(this, i + 1, i + 6)
	    swap(this, i + 2, i + 5)
	    swap(this, i + 3, i + 4)
	  }
	  return this
	}

	Buffer.prototype.toString = function toString () {
	  var length = this.length | 0
	  if (length === 0) return ''
	  if (arguments.length === 0) return utf8Slice(this, 0, length)
	  return slowToString.apply(this, arguments)
	}

	Buffer.prototype.equals = function equals (b) {
	  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
	  if (this === b) return true
	  return Buffer.compare(this, b) === 0
	}

	Buffer.prototype.inspect = function inspect () {
	  var str = ''
	  var max = exports.INSPECT_MAX_BYTES
	  if (this.length > 0) {
	    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
	    if (this.length > max) str += ' ... '
	  }
	  return '<Buffer ' + str + '>'
	}

	Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
	  if (!Buffer.isBuffer(target)) {
	    throw new TypeError('Argument must be a Buffer')
	  }

	  if (start === undefined) {
	    start = 0
	  }
	  if (end === undefined) {
	    end = target ? target.length : 0
	  }
	  if (thisStart === undefined) {
	    thisStart = 0
	  }
	  if (thisEnd === undefined) {
	    thisEnd = this.length
	  }

	  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
	    throw new RangeError('out of range index')
	  }

	  if (thisStart >= thisEnd && start >= end) {
	    return 0
	  }
	  if (thisStart >= thisEnd) {
	    return -1
	  }
	  if (start >= end) {
	    return 1
	  }

	  start >>>= 0
	  end >>>= 0
	  thisStart >>>= 0
	  thisEnd >>>= 0

	  if (this === target) return 0

	  var x = thisEnd - thisStart
	  var y = end - start
	  var len = Math.min(x, y)

	  var thisCopy = this.slice(thisStart, thisEnd)
	  var targetCopy = target.slice(start, end)

	  for (var i = 0; i < len; ++i) {
	    if (thisCopy[i] !== targetCopy[i]) {
	      x = thisCopy[i]
	      y = targetCopy[i]
	      break
	    }
	  }

	  if (x < y) return -1
	  if (y < x) return 1
	  return 0
	}

	// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
	// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
	//
	// Arguments:
	// - buffer - a Buffer to search
	// - val - a string, Buffer, or number
	// - byteOffset - an index into `buffer`; will be clamped to an int32
	// - encoding - an optional encoding, relevant is val is a string
	// - dir - true for indexOf, false for lastIndexOf
	function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
	  // Empty buffer means no match
	  if (buffer.length === 0) return -1

	  // Normalize byteOffset
	  if (typeof byteOffset === 'string') {
	    encoding = byteOffset
	    byteOffset = 0
	  } else if (byteOffset > 0x7fffffff) {
	    byteOffset = 0x7fffffff
	  } else if (byteOffset < -0x80000000) {
	    byteOffset = -0x80000000
	  }
	  byteOffset = +byteOffset  // Coerce to Number.
	  if (isNaN(byteOffset)) {
	    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
	    byteOffset = dir ? 0 : (buffer.length - 1)
	  }

	  // Normalize byteOffset: negative offsets start from the end of the buffer
	  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
	  if (byteOffset >= buffer.length) {
	    if (dir) return -1
	    else byteOffset = buffer.length - 1
	  } else if (byteOffset < 0) {
	    if (dir) byteOffset = 0
	    else return -1
	  }

	  // Normalize val
	  if (typeof val === 'string') {
	    val = Buffer.from(val, encoding)
	  }

	  // Finally, search either indexOf (if dir is true) or lastIndexOf
	  if (Buffer.isBuffer(val)) {
	    // Special case: looking for empty string/buffer always fails
	    if (val.length === 0) {
	      return -1
	    }
	    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
	  } else if (typeof val === 'number') {
	    val = val & 0xFF // Search for a byte value [0-255]
	    if (Buffer.TYPED_ARRAY_SUPPORT &&
	        typeof Uint8Array.prototype.indexOf === 'function') {
	      if (dir) {
	        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
	      } else {
	        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
	      }
	    }
	    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
	  }

	  throw new TypeError('val must be string, number or Buffer')
	}

	function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
	  var indexSize = 1
	  var arrLength = arr.length
	  var valLength = val.length

	  if (encoding !== undefined) {
	    encoding = String(encoding).toLowerCase()
	    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
	        encoding === 'utf16le' || encoding === 'utf-16le') {
	      if (arr.length < 2 || val.length < 2) {
	        return -1
	      }
	      indexSize = 2
	      arrLength /= 2
	      valLength /= 2
	      byteOffset /= 2
	    }
	  }

	  function read (buf, i) {
	    if (indexSize === 1) {
	      return buf[i]
	    } else {
	      return buf.readUInt16BE(i * indexSize)
	    }
	  }

	  var i
	  if (dir) {
	    var foundIndex = -1
	    for (i = byteOffset; i < arrLength; i++) {
	      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
	        if (foundIndex === -1) foundIndex = i
	        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
	      } else {
	        if (foundIndex !== -1) i -= i - foundIndex
	        foundIndex = -1
	      }
	    }
	  } else {
	    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
	    for (i = byteOffset; i >= 0; i--) {
	      var found = true
	      for (var j = 0; j < valLength; j++) {
	        if (read(arr, i + j) !== read(val, j)) {
	          found = false
	          break
	        }
	      }
	      if (found) return i
	    }
	  }

	  return -1
	}

	Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
	  return this.indexOf(val, byteOffset, encoding) !== -1
	}

	Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
	}

	Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
	  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
	}

	function hexWrite (buf, string, offset, length) {
	  offset = Number(offset) || 0
	  var remaining = buf.length - offset
	  if (!length) {
	    length = remaining
	  } else {
	    length = Number(length)
	    if (length > remaining) {
	      length = remaining
	    }
	  }

	  // must be an even number of digits
	  var strLen = string.length
	  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

	  if (length > strLen / 2) {
	    length = strLen / 2
	  }
	  for (var i = 0; i < length; ++i) {
	    var parsed = parseInt(string.substr(i * 2, 2), 16)
	    if (isNaN(parsed)) return i
	    buf[offset + i] = parsed
	  }
	  return i
	}

	function utf8Write (buf, string, offset, length) {
	  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
	}

	function asciiWrite (buf, string, offset, length) {
	  return blitBuffer(asciiToBytes(string), buf, offset, length)
	}

	function latin1Write (buf, string, offset, length) {
	  return asciiWrite(buf, string, offset, length)
	}

	function base64Write (buf, string, offset, length) {
	  return blitBuffer(base64ToBytes(string), buf, offset, length)
	}

	function ucs2Write (buf, string, offset, length) {
	  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
	}

	Buffer.prototype.write = function write (string, offset, length, encoding) {
	  // Buffer#write(string)
	  if (offset === undefined) {
	    encoding = 'utf8'
	    length = this.length
	    offset = 0
	  // Buffer#write(string, encoding)
	  } else if (length === undefined && typeof offset === 'string') {
	    encoding = offset
	    length = this.length
	    offset = 0
	  // Buffer#write(string, offset[, length][, encoding])
	  } else if (isFinite(offset)) {
	    offset = offset | 0
	    if (isFinite(length)) {
	      length = length | 0
	      if (encoding === undefined) encoding = 'utf8'
	    } else {
	      encoding = length
	      length = undefined
	    }
	  // legacy write(string, encoding, offset, length) - remove in v0.13
	  } else {
	    throw new Error(
	      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
	    )
	  }

	  var remaining = this.length - offset
	  if (length === undefined || length > remaining) length = remaining

	  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
	    throw new RangeError('Attempt to write outside buffer bounds')
	  }

	  if (!encoding) encoding = 'utf8'

	  var loweredCase = false
	  for (;;) {
	    switch (encoding) {
	      case 'hex':
	        return hexWrite(this, string, offset, length)

	      case 'utf8':
	      case 'utf-8':
	        return utf8Write(this, string, offset, length)

	      case 'ascii':
	        return asciiWrite(this, string, offset, length)

	      case 'latin1':
	      case 'binary':
	        return latin1Write(this, string, offset, length)

	      case 'base64':
	        // Warning: maxLength not taken into account in base64Write
	        return base64Write(this, string, offset, length)

	      case 'ucs2':
	      case 'ucs-2':
	      case 'utf16le':
	      case 'utf-16le':
	        return ucs2Write(this, string, offset, length)

	      default:
	        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
	        encoding = ('' + encoding).toLowerCase()
	        loweredCase = true
	    }
	  }
	}

	Buffer.prototype.toJSON = function toJSON () {
	  return {
	    type: 'Buffer',
	    data: Array.prototype.slice.call(this._arr || this, 0)
	  }
	}

	function base64Slice (buf, start, end) {
	  if (start === 0 && end === buf.length) {
	    return base64.fromByteArray(buf)
	  } else {
	    return base64.fromByteArray(buf.slice(start, end))
	  }
	}

	function utf8Slice (buf, start, end) {
	  end = Math.min(buf.length, end)
	  var res = []

	  var i = start
	  while (i < end) {
	    var firstByte = buf[i]
	    var codePoint = null
	    var bytesPerSequence = (firstByte > 0xEF) ? 4
	      : (firstByte > 0xDF) ? 3
	      : (firstByte > 0xBF) ? 2
	      : 1

	    if (i + bytesPerSequence <= end) {
	      var secondByte, thirdByte, fourthByte, tempCodePoint

	      switch (bytesPerSequence) {
	        case 1:
	          if (firstByte < 0x80) {
	            codePoint = firstByte
	          }
	          break
	        case 2:
	          secondByte = buf[i + 1]
	          if ((secondByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
	            if (tempCodePoint > 0x7F) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 3:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
	            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
	              codePoint = tempCodePoint
	            }
	          }
	          break
	        case 4:
	          secondByte = buf[i + 1]
	          thirdByte = buf[i + 2]
	          fourthByte = buf[i + 3]
	          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
	            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
	            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
	              codePoint = tempCodePoint
	            }
	          }
	      }
	    }

	    if (codePoint === null) {
	      // we did not generate a valid codePoint so insert a
	      // replacement char (U+FFFD) and advance only 1 byte
	      codePoint = 0xFFFD
	      bytesPerSequence = 1
	    } else if (codePoint > 0xFFFF) {
	      // encode to utf16 (surrogate pair dance)
	      codePoint -= 0x10000
	      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
	      codePoint = 0xDC00 | codePoint & 0x3FF
	    }

	    res.push(codePoint)
	    i += bytesPerSequence
	  }

	  return decodeCodePointsArray(res)
	}

	// Based on http://stackoverflow.com/a/22747272/680742, the browser with
	// the lowest limit is Chrome, with 0x10000 args.
	// We go 1 magnitude less, for safety
	var MAX_ARGUMENTS_LENGTH = 0x1000

	function decodeCodePointsArray (codePoints) {
	  var len = codePoints.length
	  if (len <= MAX_ARGUMENTS_LENGTH) {
	    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
	  }

	  // Decode in chunks to avoid "call stack size exceeded".
	  var res = ''
	  var i = 0
	  while (i < len) {
	    res += String.fromCharCode.apply(
	      String,
	      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
	    )
	  }
	  return res
	}

	function asciiSlice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i] & 0x7F)
	  }
	  return ret
	}

	function latin1Slice (buf, start, end) {
	  var ret = ''
	  end = Math.min(buf.length, end)

	  for (var i = start; i < end; ++i) {
	    ret += String.fromCharCode(buf[i])
	  }
	  return ret
	}

	function hexSlice (buf, start, end) {
	  var len = buf.length

	  if (!start || start < 0) start = 0
	  if (!end || end < 0 || end > len) end = len

	  var out = ''
	  for (var i = start; i < end; ++i) {
	    out += toHex(buf[i])
	  }
	  return out
	}

	function utf16leSlice (buf, start, end) {
	  var bytes = buf.slice(start, end)
	  var res = ''
	  for (var i = 0; i < bytes.length; i += 2) {
	    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
	  }
	  return res
	}

	Buffer.prototype.slice = function slice (start, end) {
	  var len = this.length
	  start = ~~start
	  end = end === undefined ? len : ~~end

	  if (start < 0) {
	    start += len
	    if (start < 0) start = 0
	  } else if (start > len) {
	    start = len
	  }

	  if (end < 0) {
	    end += len
	    if (end < 0) end = 0
	  } else if (end > len) {
	    end = len
	  }

	  if (end < start) end = start

	  var newBuf
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    newBuf = this.subarray(start, end)
	    newBuf.__proto__ = Buffer.prototype
	  } else {
	    var sliceLen = end - start
	    newBuf = new Buffer(sliceLen, undefined)
	    for (var i = 0; i < sliceLen; ++i) {
	      newBuf[i] = this[i + start]
	    }
	  }

	  return newBuf
	}

	/*
	 * Need to make sure that buffer isn't trying to write out of bounds.
	 */
	function checkOffset (offset, ext, length) {
	  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
	  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
	}

	Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }

	  return val
	}

	Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    checkOffset(offset, byteLength, this.length)
	  }

	  var val = this[offset + --byteLength]
	  var mul = 1
	  while (byteLength > 0 && (mul *= 0x100)) {
	    val += this[offset + --byteLength] * mul
	  }

	  return val
	}

	Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  return this[offset]
	}

	Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return this[offset] | (this[offset + 1] << 8)
	}

	Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  return (this[offset] << 8) | this[offset + 1]
	}

	Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return ((this[offset]) |
	      (this[offset + 1] << 8) |
	      (this[offset + 2] << 16)) +
	      (this[offset + 3] * 0x1000000)
	}

	Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] * 0x1000000) +
	    ((this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    this[offset + 3])
	}

	Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var val = this[offset]
	  var mul = 1
	  var i = 0
	  while (++i < byteLength && (mul *= 0x100)) {
	    val += this[offset + i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) checkOffset(offset, byteLength, this.length)

	  var i = byteLength
	  var mul = 1
	  var val = this[offset + --i]
	  while (i > 0 && (mul *= 0x100)) {
	    val += this[offset + --i] * mul
	  }
	  mul *= 0x80

	  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

	  return val
	}

	Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 1, this.length)
	  if (!(this[offset] & 0x80)) return (this[offset])
	  return ((0xff - this[offset] + 1) * -1)
	}

	Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset] | (this[offset + 1] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 2, this.length)
	  var val = this[offset + 1] | (this[offset] << 8)
	  return (val & 0x8000) ? val | 0xFFFF0000 : val
	}

	Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset]) |
	    (this[offset + 1] << 8) |
	    (this[offset + 2] << 16) |
	    (this[offset + 3] << 24)
	}

	Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)

	  return (this[offset] << 24) |
	    (this[offset + 1] << 16) |
	    (this[offset + 2] << 8) |
	    (this[offset + 3])
	}

	Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, true, 23, 4)
	}

	Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 4, this.length)
	  return ieee754.read(this, offset, false, 23, 4)
	}

	Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, true, 52, 8)
	}

	Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
	  if (!noAssert) checkOffset(offset, 8, this.length)
	  return ieee754.read(this, offset, false, 52, 8)
	}

	function checkInt (buf, value, offset, ext, max, min) {
	  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
	  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	}

	Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var mul = 1
	  var i = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  byteLength = byteLength | 0
	  if (!noAssert) {
	    var maxBytes = Math.pow(2, 8 * byteLength) - 1
	    checkInt(this, value, offset, byteLength, maxBytes, 0)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    this[offset + i] = (value / mul) & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	function objectWriteUInt16 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
	    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
	      (littleEndian ? i : 1 - i) * 8
	  }
	}

	Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	function objectWriteUInt32 (buf, value, offset, littleEndian) {
	  if (value < 0) value = 0xffffffff + value + 1
	  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
	    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
	  }
	}

	Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset + 3] = (value >>> 24)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 1] = (value >>> 8)
	    this[offset] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = 0
	  var mul = 1
	  var sub = 0
	  this[offset] = value & 0xFF
	  while (++i < byteLength && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) {
	    var limit = Math.pow(2, 8 * byteLength - 1)

	    checkInt(this, value, offset, byteLength, limit - 1, -limit)
	  }

	  var i = byteLength - 1
	  var mul = 1
	  var sub = 0
	  this[offset + i] = value & 0xFF
	  while (--i >= 0 && (mul *= 0x100)) {
	    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
	      sub = 1
	    }
	    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
	  }

	  return offset + byteLength
	}

	Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
	  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
	  if (value < 0) value = 0xff + value + 1
	  this[offset] = (value & 0xff)
	  return offset + 1
	}

	Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	  } else {
	    objectWriteUInt16(this, value, offset, true)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 8)
	    this[offset + 1] = (value & 0xff)
	  } else {
	    objectWriteUInt16(this, value, offset, false)
	  }
	  return offset + 2
	}

	Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value & 0xff)
	    this[offset + 1] = (value >>> 8)
	    this[offset + 2] = (value >>> 16)
	    this[offset + 3] = (value >>> 24)
	  } else {
	    objectWriteUInt32(this, value, offset, true)
	  }
	  return offset + 4
	}

	Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
	  value = +value
	  offset = offset | 0
	  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
	  if (value < 0) value = 0xffffffff + value + 1
	  if (Buffer.TYPED_ARRAY_SUPPORT) {
	    this[offset] = (value >>> 24)
	    this[offset + 1] = (value >>> 16)
	    this[offset + 2] = (value >>> 8)
	    this[offset + 3] = (value & 0xff)
	  } else {
	    objectWriteUInt32(this, value, offset, false)
	  }
	  return offset + 4
	}

	function checkIEEE754 (buf, value, offset, ext, max, min) {
	  if (offset + ext > buf.length) throw new RangeError('Index out of range')
	  if (offset < 0) throw new RangeError('Index out of range')
	}

	function writeFloat (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 23, 4)
	  return offset + 4
	}

	Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
	  return writeFloat(this, value, offset, false, noAssert)
	}

	function writeDouble (buf, value, offset, littleEndian, noAssert) {
	  if (!noAssert) {
	    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
	  }
	  ieee754.write(buf, value, offset, littleEndian, 52, 8)
	  return offset + 8
	}

	Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, true, noAssert)
	}

	Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
	  return writeDouble(this, value, offset, false, noAssert)
	}

	// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
	Buffer.prototype.copy = function copy (target, targetStart, start, end) {
	  if (!start) start = 0
	  if (!end && end !== 0) end = this.length
	  if (targetStart >= target.length) targetStart = target.length
	  if (!targetStart) targetStart = 0
	  if (end > 0 && end < start) end = start

	  // Copy 0 bytes; we're done
	  if (end === start) return 0
	  if (target.length === 0 || this.length === 0) return 0

	  // Fatal error conditions
	  if (targetStart < 0) {
	    throw new RangeError('targetStart out of bounds')
	  }
	  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
	  if (end < 0) throw new RangeError('sourceEnd out of bounds')

	  // Are we oob?
	  if (end > this.length) end = this.length
	  if (target.length - targetStart < end - start) {
	    end = target.length - targetStart + start
	  }

	  var len = end - start
	  var i

	  if (this === target && start < targetStart && targetStart < end) {
	    // descending copy from end
	    for (i = len - 1; i >= 0; --i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
	    // ascending copy from start
	    for (i = 0; i < len; ++i) {
	      target[i + targetStart] = this[i + start]
	    }
	  } else {
	    Uint8Array.prototype.set.call(
	      target,
	      this.subarray(start, start + len),
	      targetStart
	    )
	  }

	  return len
	}

	// Usage:
	//    buffer.fill(number[, offset[, end]])
	//    buffer.fill(buffer[, offset[, end]])
	//    buffer.fill(string[, offset[, end]][, encoding])
	Buffer.prototype.fill = function fill (val, start, end, encoding) {
	  // Handle string cases:
	  if (typeof val === 'string') {
	    if (typeof start === 'string') {
	      encoding = start
	      start = 0
	      end = this.length
	    } else if (typeof end === 'string') {
	      encoding = end
	      end = this.length
	    }
	    if (val.length === 1) {
	      var code = val.charCodeAt(0)
	      if (code < 256) {
	        val = code
	      }
	    }
	    if (encoding !== undefined && typeof encoding !== 'string') {
	      throw new TypeError('encoding must be a string')
	    }
	    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
	      throw new TypeError('Unknown encoding: ' + encoding)
	    }
	  } else if (typeof val === 'number') {
	    val = val & 255
	  }

	  // Invalid ranges are not set to a default, so can range check early.
	  if (start < 0 || this.length < start || this.length < end) {
	    throw new RangeError('Out of range index')
	  }

	  if (end <= start) {
	    return this
	  }

	  start = start >>> 0
	  end = end === undefined ? this.length : end >>> 0

	  if (!val) val = 0

	  var i
	  if (typeof val === 'number') {
	    for (i = start; i < end; ++i) {
	      this[i] = val
	    }
	  } else {
	    var bytes = Buffer.isBuffer(val)
	      ? val
	      : utf8ToBytes(new Buffer(val, encoding).toString())
	    var len = bytes.length
	    for (i = 0; i < end - start; ++i) {
	      this[i + start] = bytes[i % len]
	    }
	  }

	  return this
	}

	// HELPER FUNCTIONS
	// ================

	var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

	function base64clean (str) {
	  // Node strips out invalid characters like \n and \t from the string, base64-js does not
	  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
	  // Node converts strings with length < 2 to ''
	  if (str.length < 2) return ''
	  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
	  while (str.length % 4 !== 0) {
	    str = str + '='
	  }
	  return str
	}

	function stringtrim (str) {
	  if (str.trim) return str.trim()
	  return str.replace(/^\s+|\s+$/g, '')
	}

	function toHex (n) {
	  if (n < 16) return '0' + n.toString(16)
	  return n.toString(16)
	}

	function utf8ToBytes (string, units) {
	  units = units || Infinity
	  var codePoint
	  var length = string.length
	  var leadSurrogate = null
	  var bytes = []

	  for (var i = 0; i < length; ++i) {
	    codePoint = string.charCodeAt(i)

	    // is surrogate component
	    if (codePoint > 0xD7FF && codePoint < 0xE000) {
	      // last char was a lead
	      if (!leadSurrogate) {
	        // no lead yet
	        if (codePoint > 0xDBFF) {
	          // unexpected trail
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        } else if (i + 1 === length) {
	          // unpaired lead
	          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	          continue
	        }

	        // valid lead
	        leadSurrogate = codePoint

	        continue
	      }

	      // 2 leads in a row
	      if (codePoint < 0xDC00) {
	        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	        leadSurrogate = codePoint
	        continue
	      }

	      // valid surrogate pair
	      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
	    } else if (leadSurrogate) {
	      // valid bmp char, but last char was a lead
	      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
	    }

	    leadSurrogate = null

	    // encode utf8
	    if (codePoint < 0x80) {
	      if ((units -= 1) < 0) break
	      bytes.push(codePoint)
	    } else if (codePoint < 0x800) {
	      if ((units -= 2) < 0) break
	      bytes.push(
	        codePoint >> 0x6 | 0xC0,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x10000) {
	      if ((units -= 3) < 0) break
	      bytes.push(
	        codePoint >> 0xC | 0xE0,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else if (codePoint < 0x110000) {
	      if ((units -= 4) < 0) break
	      bytes.push(
	        codePoint >> 0x12 | 0xF0,
	        codePoint >> 0xC & 0x3F | 0x80,
	        codePoint >> 0x6 & 0x3F | 0x80,
	        codePoint & 0x3F | 0x80
	      )
	    } else {
	      throw new Error('Invalid code point')
	    }
	  }

	  return bytes
	}

	function asciiToBytes (str) {
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    // Node's code seems to be doing this and not & 0x7F..
	    byteArray.push(str.charCodeAt(i) & 0xFF)
	  }
	  return byteArray
	}

	function utf16leToBytes (str, units) {
	  var c, hi, lo
	  var byteArray = []
	  for (var i = 0; i < str.length; ++i) {
	    if ((units -= 2) < 0) break

	    c = str.charCodeAt(i)
	    hi = c >> 8
	    lo = c % 256
	    byteArray.push(lo)
	    byteArray.push(hi)
	  }

	  return byteArray
	}

	function base64ToBytes (str) {
	  return base64.toByteArray(base64clean(str))
	}

	function blitBuffer (src, dst, offset, length) {
	  for (var i = 0; i < length; ++i) {
	    if ((i + offset >= dst.length) || (i >= src.length)) break
	    dst[i + offset] = src[i]
	  }
	  return i
	}

	function isnan (val) {
	  return val !== val // eslint-disable-line no-self-compare
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 190 */
/***/ function(module, exports) {

	'use strict'

	exports.byteLength = byteLength
	exports.toByteArray = toByteArray
	exports.fromByteArray = fromByteArray

	var lookup = []
	var revLookup = []
	var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

	var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
	for (var i = 0, len = code.length; i < len; ++i) {
	  lookup[i] = code[i]
	  revLookup[code.charCodeAt(i)] = i
	}

	revLookup['-'.charCodeAt(0)] = 62
	revLookup['_'.charCodeAt(0)] = 63

	function placeHoldersCount (b64) {
	  var len = b64.length
	  if (len % 4 > 0) {
	    throw new Error('Invalid string. Length must be a multiple of 4')
	  }

	  // the number of equal signs (place holders)
	  // if there are two placeholders, than the two characters before it
	  // represent one byte
	  // if there is only one, then the three characters before it represent 2 bytes
	  // this is just a cheap hack to not do indexOf twice
	  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
	}

	function byteLength (b64) {
	  // base64 is 4/3 + up to two characters of the original data
	  return b64.length * 3 / 4 - placeHoldersCount(b64)
	}

	function toByteArray (b64) {
	  var i, j, l, tmp, placeHolders, arr
	  var len = b64.length
	  placeHolders = placeHoldersCount(b64)

	  arr = new Arr(len * 3 / 4 - placeHolders)

	  // if there are placeholders, only get up to the last complete 4 chars
	  l = placeHolders > 0 ? len - 4 : len

	  var L = 0

	  for (i = 0, j = 0; i < l; i += 4, j += 3) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
	    arr[L++] = (tmp >> 16) & 0xFF
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  if (placeHolders === 2) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
	    arr[L++] = tmp & 0xFF
	  } else if (placeHolders === 1) {
	    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
	    arr[L++] = (tmp >> 8) & 0xFF
	    arr[L++] = tmp & 0xFF
	  }

	  return arr
	}

	function tripletToBase64 (num) {
	  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
	}

	function encodeChunk (uint8, start, end) {
	  var tmp
	  var output = []
	  for (var i = start; i < end; i += 3) {
	    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
	    output.push(tripletToBase64(tmp))
	  }
	  return output.join('')
	}

	function fromByteArray (uint8) {
	  var tmp
	  var len = uint8.length
	  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
	  var output = ''
	  var parts = []
	  var maxChunkLength = 16383 // must be multiple of 3

	  // go through the array every three bytes, we'll deal with trailing stuff later
	  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
	    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
	  }

	  // pad the end with zeros, but make sure to not forget the extra bytes
	  if (extraBytes === 1) {
	    tmp = uint8[len - 1]
	    output += lookup[tmp >> 2]
	    output += lookup[(tmp << 4) & 0x3F]
	    output += '=='
	  } else if (extraBytes === 2) {
	    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
	    output += lookup[tmp >> 10]
	    output += lookup[(tmp >> 4) & 0x3F]
	    output += lookup[(tmp << 2) & 0x3F]
	    output += '='
	  }

	  parts.push(output)

	  return parts.join('')
	}


/***/ },
/* 191 */
/***/ function(module, exports) {

	exports.read = function (buffer, offset, isLE, mLen, nBytes) {
	  var e, m
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var nBits = -7
	  var i = isLE ? (nBytes - 1) : 0
	  var d = isLE ? -1 : 1
	  var s = buffer[offset + i]

	  i += d

	  e = s & ((1 << (-nBits)) - 1)
	  s >>= (-nBits)
	  nBits += eLen
	  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  m = e & ((1 << (-nBits)) - 1)
	  e >>= (-nBits)
	  nBits += mLen
	  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

	  if (e === 0) {
	    e = 1 - eBias
	  } else if (e === eMax) {
	    return m ? NaN : ((s ? -1 : 1) * Infinity)
	  } else {
	    m = m + Math.pow(2, mLen)
	    e = e - eBias
	  }
	  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
	}

	exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
	  var e, m, c
	  var eLen = nBytes * 8 - mLen - 1
	  var eMax = (1 << eLen) - 1
	  var eBias = eMax >> 1
	  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
	  var i = isLE ? 0 : (nBytes - 1)
	  var d = isLE ? 1 : -1
	  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

	  value = Math.abs(value)

	  if (isNaN(value) || value === Infinity) {
	    m = isNaN(value) ? 1 : 0
	    e = eMax
	  } else {
	    e = Math.floor(Math.log(value) / Math.LN2)
	    if (value * (c = Math.pow(2, -e)) < 1) {
	      e--
	      c *= 2
	    }
	    if (e + eBias >= 1) {
	      value += rt / c
	    } else {
	      value += rt * Math.pow(2, 1 - eBias)
	    }
	    if (value * c >= 2) {
	      e++
	      c /= 2
	    }

	    if (e + eBias >= eMax) {
	      m = 0
	      e = eMax
	    } else if (e + eBias >= 1) {
	      m = (value * c - 1) * Math.pow(2, mLen)
	      e = e + eBias
	    } else {
	      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
	      e = 0
	    }
	  }

	  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

	  e = (e << mLen) | m
	  eLen += mLen
	  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

	  buffer[offset + i - d] |= s * 128
	}


/***/ },
/* 192 */
/***/ function(module, exports) {

	var toString = {}.toString;

	module.exports = Array.isArray || function (arr) {
	  return toString.call(arr) == '[object Array]';
	};


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _misc = __webpack_require__(194);

	var _inputText = __webpack_require__(195);

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

/***/ },
/* 194 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Created by AntonioGiordano on 05/10/16.
	 */

	module.exports = {
	  FORM_INPUT_STATES: {
	    success: '1',
	    neutral: '2',
	    error: '3'
	  }
	};

/***/ },
/* 195 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"inputTextRoot":"input-text__inputTextRoot___30kDq","inputContainer":"input-text__inputContainer___STT35","error":"input-text__error___DwwiF","success":"input-text__success___fk7YI","neutral":"input-text__neutral___czPx9"};

/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by AntonioGiordano on 13/09/16.
	 */

	var React = __webpack_require__(1);

	/*
	  @TODO: Fading sul visible = false
	 */
	var PageLoader = React.createClass({
	  displayName: 'PageLoader',

	  propTypes: {
	    css: React.PropTypes.object,
	    visible: React.PropTypes.bool
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      css: __webpack_require__(197),
	      visible: true
	    };
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      null,
	      this.props.visible ? React.createElement(
	        'div',
	        { className: this.props.css.root },
	        React.createElement('img', { alt: '', src: '/img/loader.gif' })
	      ) : null
	    );
	  }
	});

	module.exports = PageLoader;

/***/ },
/* 197 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"page-loader__root___1aMW_","layer":"page-loader__layer___V85br","firstRing":"page-loader__firstRing___2It2V","secondRing":"page-loader__secondRing___3C3pU","thirdRing":"page-loader__thirdRing___1_W0M"};

/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Button = _react2.default.createClass({
	  displayName: 'Button',

	  propTypes: {
	    cssRootClass: _react2.default.PropTypes.string,
	    onClick: _react2.default.PropTypes.func
	  },
	  getDefaultProps: function getDefaultProps() {
	    return {
	      cssRootClass: null,
	      onClick: null,
	      style: {}
	    };
	  },
	  render: function render() {
	    var css = __webpack_require__(199);
	    return _react2.default.createElement(
	      'button',
	      { onClick: this.props.onClick, className: css.buttonRoot + ' ' + this.props.cssRootClass, style: this.props.style },
	      this.props.children
	    );
	  }
	}); /**
	     * Created by AntonioGiordano on 17/06/16.
	     */

	module.exports = Button;

/***/ },
/* 199 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"buttonRoot":"button__buttonRoot___ik4rJ","disabled":"button__disabled___3PdVm"};

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _axios = __webpack_require__(201);

	var _axios2 = _interopRequireDefault(_axios);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var handleAJAXError = function handleAJAXError(err, cb) {
	  switch (err.status) {
	    case 401:
	      location.href = '/login';
	      break;
	    default:
	      alert(err.message);
	      cb(err);
	      break;
	  }
	}; /**
	    * Created by AntonioGiordano on 07/10/16.
	    */

	module.exports = {
	  registration: function registration(data, cb) {
	    _axios2.default.post('/registrate.json', data, {
	      withCredentials: true
	    }).then(function (response) {
	      cb(null, response.data);
	    }).catch(function (err) {
	      cb(err);
	    });
	  },
	  isLogged: function isLogged(cb) {
	    _axios2.default.get('/isLogged.json', {
	      withCredentials: true
	    }).then(function (response) {
	      cb(null, response.data);
	    }).catch(function (err) {
	      cb(err);
	    });
	  },
	  login: function login(data, cb) {
	    _axios2.default.post('/login.json', data, {
	      withCredentials: true
	    }).then(function (response) {
	      cb(null, response.data);
	    }).catch(function (err) {
	      cb(err);
	    });
	  },
	  logout: function logout(cb) {
	    _axios2.default.get('/logout.json', {
	      withCredentials: true
	    }).then(function (response) {
	      cb(null, response.data);
	    }).catch(function (err) {
	      cb(err);
	    });
	  }
	};

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(202);

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(203);
	var bind = __webpack_require__(204);
	var Axios = __webpack_require__(205);
	var defaults = __webpack_require__(206);

	/**
	 * Create an instance of Axios
	 *
	 * @param {Object} defaultConfig The default config for the instance
	 * @return {Axios} A new instance of Axios
	 */
	function createInstance(defaultConfig) {
	  var context = new Axios(defaultConfig);
	  var instance = bind(Axios.prototype.request, context);

	  // Copy axios.prototype to instance
	  utils.extend(instance, Axios.prototype, context);

	  // Copy context to instance
	  utils.extend(instance, context);

	  return instance;
	}

	// Create the default instance to be exported
	var axios = createInstance(defaults);

	// Expose Axios class to allow class inheritance
	axios.Axios = Axios;

	// Factory for creating new instances
	axios.create = function create(instanceConfig) {
	  return createInstance(utils.merge(defaults, instanceConfig));
	};

	// Expose Cancel & CancelToken
	axios.Cancel = __webpack_require__(223);
	axios.CancelToken = __webpack_require__(224);
	axios.isCancel = __webpack_require__(220);

	// Expose all/spread
	axios.all = function all(promises) {
	  return Promise.all(promises);
	};
	axios.spread = __webpack_require__(225);

	module.exports = axios;

	// Allow use of default import syntax in TypeScript
	module.exports.default = axios;


/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var bind = __webpack_require__(204);

	/*global toString:true*/

	// utils is a library of generic helper functions non-specific to axios

	var toString = Object.prototype.toString;

	/**
	 * Determine if a value is an Array
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Array, otherwise false
	 */
	function isArray(val) {
	  return toString.call(val) === '[object Array]';
	}

	/**
	 * Determine if a value is an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
	 */
	function isArrayBuffer(val) {
	  return toString.call(val) === '[object ArrayBuffer]';
	}

	/**
	 * Determine if a value is a FormData
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an FormData, otherwise false
	 */
	function isFormData(val) {
	  return (typeof FormData !== 'undefined') && (val instanceof FormData);
	}

	/**
	 * Determine if a value is a view on an ArrayBuffer
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
	 */
	function isArrayBufferView(val) {
	  var result;
	  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
	    result = ArrayBuffer.isView(val);
	  } else {
	    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
	  }
	  return result;
	}

	/**
	 * Determine if a value is a String
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a String, otherwise false
	 */
	function isString(val) {
	  return typeof val === 'string';
	}

	/**
	 * Determine if a value is a Number
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Number, otherwise false
	 */
	function isNumber(val) {
	  return typeof val === 'number';
	}

	/**
	 * Determine if a value is undefined
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if the value is undefined, otherwise false
	 */
	function isUndefined(val) {
	  return typeof val === 'undefined';
	}

	/**
	 * Determine if a value is an Object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is an Object, otherwise false
	 */
	function isObject(val) {
	  return val !== null && typeof val === 'object';
	}

	/**
	 * Determine if a value is a Date
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Date, otherwise false
	 */
	function isDate(val) {
	  return toString.call(val) === '[object Date]';
	}

	/**
	 * Determine if a value is a File
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a File, otherwise false
	 */
	function isFile(val) {
	  return toString.call(val) === '[object File]';
	}

	/**
	 * Determine if a value is a Blob
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Blob, otherwise false
	 */
	function isBlob(val) {
	  return toString.call(val) === '[object Blob]';
	}

	/**
	 * Determine if a value is a Function
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Function, otherwise false
	 */
	function isFunction(val) {
	  return toString.call(val) === '[object Function]';
	}

	/**
	 * Determine if a value is a Stream
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a Stream, otherwise false
	 */
	function isStream(val) {
	  return isObject(val) && isFunction(val.pipe);
	}

	/**
	 * Determine if a value is a URLSearchParams object
	 *
	 * @param {Object} val The value to test
	 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
	 */
	function isURLSearchParams(val) {
	  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
	}

	/**
	 * Trim excess whitespace off the beginning and end of a string
	 *
	 * @param {String} str The String to trim
	 * @returns {String} The String freed of excess whitespace
	 */
	function trim(str) {
	  return str.replace(/^\s*/, '').replace(/\s*$/, '');
	}

	/**
	 * Determine if we're running in a standard browser environment
	 *
	 * This allows axios to run in a web worker, and react-native.
	 * Both environments support XMLHttpRequest, but not fully standard globals.
	 *
	 * web workers:
	 *  typeof window -> undefined
	 *  typeof document -> undefined
	 *
	 * react-native:
	 *  typeof document.createElement -> undefined
	 */
	function isStandardBrowserEnv() {
	  return (
	    typeof window !== 'undefined' &&
	    typeof document !== 'undefined' &&
	    typeof document.createElement === 'function'
	  );
	}

	/**
	 * Iterate over an Array or an Object invoking a function for each item.
	 *
	 * If `obj` is an Array callback will be called passing
	 * the value, index, and complete array for each item.
	 *
	 * If 'obj' is an Object callback will be called passing
	 * the value, key, and complete object for each property.
	 *
	 * @param {Object|Array} obj The object to iterate
	 * @param {Function} fn The callback to invoke for each item
	 */
	function forEach(obj, fn) {
	  // Don't bother if no value provided
	  if (obj === null || typeof obj === 'undefined') {
	    return;
	  }

	  // Force an array if not already something iterable
	  if (typeof obj !== 'object' && !isArray(obj)) {
	    /*eslint no-param-reassign:0*/
	    obj = [obj];
	  }

	  if (isArray(obj)) {
	    // Iterate over array values
	    for (var i = 0, l = obj.length; i < l; i++) {
	      fn.call(null, obj[i], i, obj);
	    }
	  } else {
	    // Iterate over object keys
	    for (var key in obj) {
	      if (Object.prototype.hasOwnProperty.call(obj, key)) {
	        fn.call(null, obj[key], key, obj);
	      }
	    }
	  }
	}

	/**
	 * Accepts varargs expecting each argument to be an object, then
	 * immutably merges the properties of each object and returns result.
	 *
	 * When multiple objects contain the same key the later object in
	 * the arguments list will take precedence.
	 *
	 * Example:
	 *
	 * ```js
	 * var result = merge({foo: 123}, {foo: 456});
	 * console.log(result.foo); // outputs 456
	 * ```
	 *
	 * @param {Object} obj1 Object to merge
	 * @returns {Object} Result of all merge properties
	 */
	function merge(/* obj1, obj2, obj3, ... */) {
	  var result = {};
	  function assignValue(val, key) {
	    if (typeof result[key] === 'object' && typeof val === 'object') {
	      result[key] = merge(result[key], val);
	    } else {
	      result[key] = val;
	    }
	  }

	  for (var i = 0, l = arguments.length; i < l; i++) {
	    forEach(arguments[i], assignValue);
	  }
	  return result;
	}

	/**
	 * Extends object a by mutably adding to it the properties of object b.
	 *
	 * @param {Object} a The object to be extended
	 * @param {Object} b The object to copy properties from
	 * @param {Object} thisArg The object to bind function to
	 * @return {Object} The resulting value of object a
	 */
	function extend(a, b, thisArg) {
	  forEach(b, function assignValue(val, key) {
	    if (thisArg && typeof val === 'function') {
	      a[key] = bind(val, thisArg);
	    } else {
	      a[key] = val;
	    }
	  });
	  return a;
	}

	module.exports = {
	  isArray: isArray,
	  isArrayBuffer: isArrayBuffer,
	  isFormData: isFormData,
	  isArrayBufferView: isArrayBufferView,
	  isString: isString,
	  isNumber: isNumber,
	  isObject: isObject,
	  isUndefined: isUndefined,
	  isDate: isDate,
	  isFile: isFile,
	  isBlob: isBlob,
	  isFunction: isFunction,
	  isStream: isStream,
	  isURLSearchParams: isURLSearchParams,
	  isStandardBrowserEnv: isStandardBrowserEnv,
	  forEach: forEach,
	  merge: merge,
	  extend: extend,
	  trim: trim
	};


/***/ },
/* 204 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function bind(fn, thisArg) {
	  return function wrap() {
	    var args = new Array(arguments.length);
	    for (var i = 0; i < args.length; i++) {
	      args[i] = arguments[i];
	    }
	    return fn.apply(thisArg, args);
	  };
	};


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var defaults = __webpack_require__(206);
	var utils = __webpack_require__(203);
	var InterceptorManager = __webpack_require__(217);
	var dispatchRequest = __webpack_require__(218);
	var isAbsoluteURL = __webpack_require__(221);
	var combineURLs = __webpack_require__(222);

	/**
	 * Create a new instance of Axios
	 *
	 * @param {Object} instanceConfig The default config for the instance
	 */
	function Axios(instanceConfig) {
	  this.defaults = instanceConfig;
	  this.interceptors = {
	    request: new InterceptorManager(),
	    response: new InterceptorManager()
	  };
	}

	/**
	 * Dispatch a request
	 *
	 * @param {Object} config The config specific for this request (merged with this.defaults)
	 */
	Axios.prototype.request = function request(config) {
	  /*eslint no-param-reassign:0*/
	  // Allow for axios('example/url'[, config]) a la fetch API
	  if (typeof config === 'string') {
	    config = utils.merge({
	      url: arguments[0]
	    }, arguments[1]);
	  }

	  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);

	  // Support baseURL config
	  if (config.baseURL && !isAbsoluteURL(config.url)) {
	    config.url = combineURLs(config.baseURL, config.url);
	  }

	  // Hook up interceptors middleware
	  var chain = [dispatchRequest, undefined];
	  var promise = Promise.resolve(config);

	  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
	    chain.unshift(interceptor.fulfilled, interceptor.rejected);
	  });

	  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
	    chain.push(interceptor.fulfilled, interceptor.rejected);
	  });

	  while (chain.length) {
	    promise = promise.then(chain.shift(), chain.shift());
	  }

	  return promise;
	};

	// Provide aliases for supported request methods
	utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url
	    }));
	  };
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  /*eslint func-names:0*/
	  Axios.prototype[method] = function(url, data, config) {
	    return this.request(utils.merge(config || {}, {
	      method: method,
	      url: url,
	      data: data
	    }));
	  };
	});

	module.exports = Axios;


/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(203);
	var normalizeHeaderName = __webpack_require__(207);

	var PROTECTION_PREFIX = /^\)\]\}',?\n/;
	var DEFAULT_CONTENT_TYPE = {
	  'Content-Type': 'application/x-www-form-urlencoded'
	};

	function setContentTypeIfUnset(headers, value) {
	  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
	    headers['Content-Type'] = value;
	  }
	}

	function getDefaultAdapter() {
	  var adapter;
	  if (typeof XMLHttpRequest !== 'undefined') {
	    // For browsers use XHR adapter
	    adapter = __webpack_require__(208);
	  } else if (typeof process !== 'undefined') {
	    // For node use HTTP adapter
	    adapter = __webpack_require__(208);
	  }
	  return adapter;
	}

	var defaults = {
	  adapter: getDefaultAdapter(),

	  transformRequest: [function transformRequest(data, headers) {
	    normalizeHeaderName(headers, 'Content-Type');
	    if (utils.isFormData(data) ||
	      utils.isArrayBuffer(data) ||
	      utils.isStream(data) ||
	      utils.isFile(data) ||
	      utils.isBlob(data)
	    ) {
	      return data;
	    }
	    if (utils.isArrayBufferView(data)) {
	      return data.buffer;
	    }
	    if (utils.isURLSearchParams(data)) {
	      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
	      return data.toString();
	    }
	    if (utils.isObject(data)) {
	      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
	      return JSON.stringify(data);
	    }
	    return data;
	  }],

	  transformResponse: [function transformResponse(data) {
	    /*eslint no-param-reassign:0*/
	    if (typeof data === 'string') {
	      data = data.replace(PROTECTION_PREFIX, '');
	      try {
	        data = JSON.parse(data);
	      } catch (e) { /* Ignore */ }
	    }
	    return data;
	  }],

	  timeout: 0,

	  xsrfCookieName: 'XSRF-TOKEN',
	  xsrfHeaderName: 'X-XSRF-TOKEN',

	  maxContentLength: -1,

	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 300;
	  }
	};

	defaults.headers = {
	  common: {
	    'Accept': 'application/json, text/plain, */*'
	  }
	};

	utils.forEach(['delete', 'get', 'head'], function forEachMehtodNoData(method) {
	  defaults.headers[method] = {};
	});

	utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
	  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
	});

	module.exports = defaults;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(203);

	module.exports = function normalizeHeaderName(headers, normalizedName) {
	  utils.forEach(headers, function processHeader(value, name) {
	    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
	      headers[normalizedName] = value;
	      delete headers[name];
	    }
	  });
	};


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';

	var utils = __webpack_require__(203);
	var settle = __webpack_require__(209);
	var buildURL = __webpack_require__(212);
	var parseHeaders = __webpack_require__(213);
	var isURLSameOrigin = __webpack_require__(214);
	var createError = __webpack_require__(210);
	var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(215);

	module.exports = function xhrAdapter(config) {
	  return new Promise(function dispatchXhrRequest(resolve, reject) {
	    var requestData = config.data;
	    var requestHeaders = config.headers;

	    if (utils.isFormData(requestData)) {
	      delete requestHeaders['Content-Type']; // Let the browser set it
	    }

	    var request = new XMLHttpRequest();
	    var loadEvent = 'onreadystatechange';
	    var xDomain = false;

	    // For IE 8/9 CORS support
	    // Only supports POST and GET calls and doesn't returns the response headers.
	    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
	    if (process.env.NODE_ENV !== 'test' &&
	        typeof window !== 'undefined' &&
	        window.XDomainRequest && !('withCredentials' in request) &&
	        !isURLSameOrigin(config.url)) {
	      request = new window.XDomainRequest();
	      loadEvent = 'onload';
	      xDomain = true;
	      request.onprogress = function handleProgress() {};
	      request.ontimeout = function handleTimeout() {};
	    }

	    // HTTP basic authentication
	    if (config.auth) {
	      var username = config.auth.username || '';
	      var password = config.auth.password || '';
	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
	    }

	    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

	    // Set the request timeout in MS
	    request.timeout = config.timeout;

	    // Listen for ready state
	    request[loadEvent] = function handleLoad() {
	      if (!request || (request.readyState !== 4 && !xDomain)) {
	        return;
	      }

	      // The request errored out and we didn't get a response, this will be
	      // handled by onerror instead
	      // With one exception: request that using file: protocol, most browsers
	      // will return status as 0 even though it's a successful request
	      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
	        return;
	      }

	      // Prepare the response
	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
	      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
	      var response = {
	        data: responseData,
	        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
	        status: request.status === 1223 ? 204 : request.status,
	        statusText: request.status === 1223 ? 'No Content' : request.statusText,
	        headers: responseHeaders,
	        config: config,
	        request: request
	      };

	      settle(resolve, reject, response);

	      // Clean up request
	      request = null;
	    };

	    // Handle low level network errors
	    request.onerror = function handleError() {
	      // Real errors are hidden from us by the browser
	      // onerror should only fire if it's a network error
	      reject(createError('Network Error', config));

	      // Clean up request
	      request = null;
	    };

	    // Handle timeout
	    request.ontimeout = function handleTimeout() {
	      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED'));

	      // Clean up request
	      request = null;
	    };

	    // Add xsrf header
	    // This is only done if running in a standard browser environment.
	    // Specifically not if we're in a web worker, or react-native.
	    if (utils.isStandardBrowserEnv()) {
	      var cookies = __webpack_require__(216);

	      // Add xsrf header
	      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
	          cookies.read(config.xsrfCookieName) :
	          undefined;

	      if (xsrfValue) {
	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
	      }
	    }

	    // Add headers to the request
	    if ('setRequestHeader' in request) {
	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
	          // Remove Content-Type if data is undefined
	          delete requestHeaders[key];
	        } else {
	          // Otherwise add header to the request
	          request.setRequestHeader(key, val);
	        }
	      });
	    }

	    // Add withCredentials to request if needed
	    if (config.withCredentials) {
	      request.withCredentials = true;
	    }

	    // Add responseType to request if needed
	    if (config.responseType) {
	      try {
	        request.responseType = config.responseType;
	      } catch (e) {
	        if (request.responseType !== 'json') {
	          throw e;
	        }
	      }
	    }

	    // Handle progress if needed
	    if (typeof config.onDownloadProgress === 'function') {
	      request.addEventListener('progress', config.onDownloadProgress);
	    }

	    // Not all browsers support upload events
	    if (typeof config.onUploadProgress === 'function' && request.upload) {
	      request.upload.addEventListener('progress', config.onUploadProgress);
	    }

	    if (config.cancelToken) {
	      // Handle cancellation
	      config.cancelToken.promise.then(function onCanceled(cancel) {
	        if (!request) {
	          return;
	        }

	        request.abort();
	        reject(cancel);
	        // Clean up request
	        request = null;
	      });
	    }

	    if (requestData === undefined) {
	      requestData = null;
	    }

	    // Send the request
	    request.send(requestData);
	  });
	};

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var createError = __webpack_require__(210);

	/**
	 * Resolve or reject a Promise based on response status.
	 *
	 * @param {Function} resolve A function that resolves the promise.
	 * @param {Function} reject A function that rejects the promise.
	 * @param {object} response The response.
	 */
	module.exports = function settle(resolve, reject, response) {
	  var validateStatus = response.config.validateStatus;
	  // Note: status is not exposed by XDomainRequest
	  if (!response.status || !validateStatus || validateStatus(response.status)) {
	    resolve(response);
	  } else {
	    reject(createError(
	      'Request failed with status code ' + response.status,
	      response.config,
	      null,
	      response
	    ));
	  }
	};


/***/ },
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var enhanceError = __webpack_require__(211);

	/**
	 * Create an Error with the specified message, config, error code, and response.
	 *
	 * @param {string} message The error message.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The created error.
	 */
	module.exports = function createError(message, config, code, response) {
	  var error = new Error(message);
	  return enhanceError(error, config, code, response);
	};


/***/ },
/* 211 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Update an Error with the specified config, error code, and response.
	 *
	 * @param {Error} error The error to update.
	 * @param {Object} config The config.
	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
	 @ @param {Object} [response] The response.
	 * @returns {Error} The error.
	 */
	module.exports = function enhanceError(error, config, code, response) {
	  error.config = config;
	  if (code) {
	    error.code = code;
	  }
	  error.response = response;
	  return error;
	};


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(203);

	function encode(val) {
	  return encodeURIComponent(val).
	    replace(/%40/gi, '@').
	    replace(/%3A/gi, ':').
	    replace(/%24/g, '$').
	    replace(/%2C/gi, ',').
	    replace(/%20/g, '+').
	    replace(/%5B/gi, '[').
	    replace(/%5D/gi, ']');
	}

	/**
	 * Build a URL by appending params to the end
	 *
	 * @param {string} url The base of the url (e.g., http://www.google.com)
	 * @param {object} [params] The params to be appended
	 * @returns {string} The formatted url
	 */
	module.exports = function buildURL(url, params, paramsSerializer) {
	  /*eslint no-param-reassign:0*/
	  if (!params) {
	    return url;
	  }

	  var serializedParams;
	  if (paramsSerializer) {
	    serializedParams = paramsSerializer(params);
	  } else if (utils.isURLSearchParams(params)) {
	    serializedParams = params.toString();
	  } else {
	    var parts = [];

	    utils.forEach(params, function serialize(val, key) {
	      if (val === null || typeof val === 'undefined') {
	        return;
	      }

	      if (utils.isArray(val)) {
	        key = key + '[]';
	      }

	      if (!utils.isArray(val)) {
	        val = [val];
	      }

	      utils.forEach(val, function parseValue(v) {
	        if (utils.isDate(v)) {
	          v = v.toISOString();
	        } else if (utils.isObject(v)) {
	          v = JSON.stringify(v);
	        }
	        parts.push(encode(key) + '=' + encode(v));
	      });
	    });

	    serializedParams = parts.join('&');
	  }

	  if (serializedParams) {
	    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
	  }

	  return url;
	};


/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(203);

	/**
	 * Parse headers into an object
	 *
	 * ```
	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
	 * Content-Type: application/json
	 * Connection: keep-alive
	 * Transfer-Encoding: chunked
	 * ```
	 *
	 * @param {String} headers Headers needing to be parsed
	 * @returns {Object} Headers parsed into an object
	 */
	module.exports = function parseHeaders(headers) {
	  var parsed = {};
	  var key;
	  var val;
	  var i;

	  if (!headers) { return parsed; }

	  utils.forEach(headers.split('\n'), function parser(line) {
	    i = line.indexOf(':');
	    key = utils.trim(line.substr(0, i)).toLowerCase();
	    val = utils.trim(line.substr(i + 1));

	    if (key) {
	      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
	    }
	  });

	  return parsed;
	};


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(203);

	module.exports = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs have full support of the APIs needed to test
	  // whether the request URL is of the same origin as current location.
	  (function standardBrowserEnv() {
	    var msie = /(msie|trident)/i.test(navigator.userAgent);
	    var urlParsingNode = document.createElement('a');
	    var originURL;

	    /**
	    * Parse a URL to discover it's components
	    *
	    * @param {String} url The URL to be parsed
	    * @returns {Object}
	    */
	    function resolveURL(url) {
	      var href = url;

	      if (msie) {
	        // IE needs attribute set twice to normalize properties
	        urlParsingNode.setAttribute('href', href);
	        href = urlParsingNode.href;
	      }

	      urlParsingNode.setAttribute('href', href);

	      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
	      return {
	        href: urlParsingNode.href,
	        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
	        host: urlParsingNode.host,
	        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
	        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
	        hostname: urlParsingNode.hostname,
	        port: urlParsingNode.port,
	        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
	                  urlParsingNode.pathname :
	                  '/' + urlParsingNode.pathname
	      };
	    }

	    originURL = resolveURL(window.location.href);

	    /**
	    * Determine if a URL shares the same origin as the current location
	    *
	    * @param {String} requestURL The URL to test
	    * @returns {boolean} True if URL shares the same origin, otherwise false
	    */
	    return function isURLSameOrigin(requestURL) {
	      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
	      return (parsed.protocol === originURL.protocol &&
	            parsed.host === originURL.host);
	    };
	  })() :

	  // Non standard browser envs (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return function isURLSameOrigin() {
	      return true;
	    };
	  })()
	);


/***/ },
/* 215 */
/***/ function(module, exports) {

	'use strict';

	// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

	var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

	function E() {
	  this.message = 'String contains an invalid character';
	}
	E.prototype = new Error;
	E.prototype.code = 5;
	E.prototype.name = 'InvalidCharacterError';

	function btoa(input) {
	  var str = String(input);
	  var output = '';
	  for (
	    // initialize result and counter
	    var block, charCode, idx = 0, map = chars;
	    // if the next str index does not exist:
	    //   change the mapping table to "="
	    //   check if d has no fractional digits
	    str.charAt(idx | 0) || (map = '=', idx % 1);
	    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
	    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
	  ) {
	    charCode = str.charCodeAt(idx += 3 / 4);
	    if (charCode > 0xFF) {
	      throw new E();
	    }
	    block = block << 8 | charCode;
	  }
	  return output;
	}

	module.exports = btoa;


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(203);

	module.exports = (
	  utils.isStandardBrowserEnv() ?

	  // Standard browser envs support document.cookie
	  (function standardBrowserEnv() {
	    return {
	      write: function write(name, value, expires, path, domain, secure) {
	        var cookie = [];
	        cookie.push(name + '=' + encodeURIComponent(value));

	        if (utils.isNumber(expires)) {
	          cookie.push('expires=' + new Date(expires).toGMTString());
	        }

	        if (utils.isString(path)) {
	          cookie.push('path=' + path);
	        }

	        if (utils.isString(domain)) {
	          cookie.push('domain=' + domain);
	        }

	        if (secure === true) {
	          cookie.push('secure');
	        }

	        document.cookie = cookie.join('; ');
	      },

	      read: function read(name) {
	        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
	        return (match ? decodeURIComponent(match[3]) : null);
	      },

	      remove: function remove(name) {
	        this.write(name, '', Date.now() - 86400000);
	      }
	    };
	  })() :

	  // Non standard browser env (web workers, react-native) lack needed support.
	  (function nonStandardBrowserEnv() {
	    return {
	      write: function write() {},
	      read: function read() { return null; },
	      remove: function remove() {}
	    };
	  })()
	);


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(203);

	function InterceptorManager() {
	  this.handlers = [];
	}

	/**
	 * Add a new interceptor to the stack
	 *
	 * @param {Function} fulfilled The function to handle `then` for a `Promise`
	 * @param {Function} rejected The function to handle `reject` for a `Promise`
	 *
	 * @return {Number} An ID used to remove interceptor later
	 */
	InterceptorManager.prototype.use = function use(fulfilled, rejected) {
	  this.handlers.push({
	    fulfilled: fulfilled,
	    rejected: rejected
	  });
	  return this.handlers.length - 1;
	};

	/**
	 * Remove an interceptor from the stack
	 *
	 * @param {Number} id The ID that was returned by `use`
	 */
	InterceptorManager.prototype.eject = function eject(id) {
	  if (this.handlers[id]) {
	    this.handlers[id] = null;
	  }
	};

	/**
	 * Iterate over all the registered interceptors
	 *
	 * This method is particularly useful for skipping over any
	 * interceptors that may have become `null` calling `eject`.
	 *
	 * @param {Function} fn The function to call for each interceptor
	 */
	InterceptorManager.prototype.forEach = function forEach(fn) {
	  utils.forEach(this.handlers, function forEachHandler(h) {
	    if (h !== null) {
	      fn(h);
	    }
	  });
	};

	module.exports = InterceptorManager;


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(203);
	var transformData = __webpack_require__(219);
	var isCancel = __webpack_require__(220);
	var defaults = __webpack_require__(206);

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	function throwIfCancellationRequested(config) {
	  if (config.cancelToken) {
	    config.cancelToken.throwIfRequested();
	  }
	}

	/**
	 * Dispatch a request to the server using the configured adapter.
	 *
	 * @param {object} config The config that is to be used for the request
	 * @returns {Promise} The Promise to be fulfilled
	 */
	module.exports = function dispatchRequest(config) {
	  throwIfCancellationRequested(config);

	  // Ensure headers exist
	  config.headers = config.headers || {};

	  // Transform request data
	  config.data = transformData(
	    config.data,
	    config.headers,
	    config.transformRequest
	  );

	  // Flatten headers
	  config.headers = utils.merge(
	    config.headers.common || {},
	    config.headers[config.method] || {},
	    config.headers || {}
	  );

	  utils.forEach(
	    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
	    function cleanHeaderConfig(method) {
	      delete config.headers[method];
	    }
	  );

	  var adapter = config.adapter || defaults.adapter;

	  return adapter(config).then(function onAdapterResolution(response) {
	    throwIfCancellationRequested(config);

	    // Transform response data
	    response.data = transformData(
	      response.data,
	      response.headers,
	      config.transformResponse
	    );

	    return response;
	  }, function onAdapterRejection(reason) {
	    if (!isCancel(reason)) {
	      throwIfCancellationRequested(config);

	      // Transform response data
	      if (reason && reason.response) {
	        reason.response.data = transformData(
	          reason.response.data,
	          reason.response.headers,
	          config.transformResponse
	        );
	      }
	    }

	    return Promise.reject(reason);
	  });
	};


/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var utils = __webpack_require__(203);

	/**
	 * Transform the data for a request or a response
	 *
	 * @param {Object|String} data The data to be transformed
	 * @param {Array} headers The headers for the request or response
	 * @param {Array|Function} fns A single function or Array of functions
	 * @returns {*} The resulting transformed data
	 */
	module.exports = function transformData(data, headers, fns) {
	  /*eslint no-param-reassign:0*/
	  utils.forEach(fns, function transform(fn) {
	    data = fn(data, headers);
	  });

	  return data;
	};


/***/ },
/* 220 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function isCancel(value) {
	  return !!(value && value.__CANCEL__);
	};


/***/ },
/* 221 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Determines whether the specified URL is absolute
	 *
	 * @param {string} url The URL to test
	 * @returns {boolean} True if the specified URL is absolute, otherwise false
	 */
	module.exports = function isAbsoluteURL(url) {
	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
	  // by any combination of letters, digits, plus, period, or hyphen.
	  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
	};


/***/ },
/* 222 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Creates a new URL by combining the specified URLs
	 *
	 * @param {string} baseURL The base URL
	 * @param {string} relativeURL The relative URL
	 * @returns {string} The combined URL
	 */
	module.exports = function combineURLs(baseURL, relativeURL) {
	  return baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '');
	};


/***/ },
/* 223 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * A `Cancel` is an object that is thrown when an operation is canceled.
	 *
	 * @class
	 * @param {string=} message The message.
	 */
	function Cancel(message) {
	  this.message = message;
	}

	Cancel.prototype.toString = function toString() {
	  return 'Cancel' + (this.message ? ': ' + this.message : '');
	};

	Cancel.prototype.__CANCEL__ = true;

	module.exports = Cancel;


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Cancel = __webpack_require__(223);

	/**
	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
	 *
	 * @class
	 * @param {Function} executor The executor function.
	 */
	function CancelToken(executor) {
	  if (typeof executor !== 'function') {
	    throw new TypeError('executor must be a function.');
	  }

	  var resolvePromise;
	  this.promise = new Promise(function promiseExecutor(resolve) {
	    resolvePromise = resolve;
	  });

	  var token = this;
	  executor(function cancel(message) {
	    if (token.reason) {
	      // Cancellation has already been requested
	      return;
	    }

	    token.reason = new Cancel(message);
	    resolvePromise(token.reason);
	  });
	}

	/**
	 * Throws a `Cancel` if cancellation has been requested.
	 */
	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
	  if (this.reason) {
	    throw this.reason;
	  }
	};

	/**
	 * Returns an object that contains a new `CancelToken` and a function that, when called,
	 * cancels the `CancelToken`.
	 */
	CancelToken.source = function source() {
	  var cancel;
	  var token = new CancelToken(function executor(c) {
	    cancel = c;
	  });
	  return {
	    token: token,
	    cancel: cancel
	  };
	};

	module.exports = CancelToken;


/***/ },
/* 225 */
/***/ function(module, exports) {

	'use strict';

	/**
	 * Syntactic sugar for invoking a function and expanding an array for arguments.
	 *
	 * Common use case would be to use `Function.prototype.apply`.
	 *
	 *  ```js
	 *  function f(x, y, z) {}
	 *  var args = [1, 2, 3];
	 *  f.apply(null, args);
	 *  ```
	 *
	 * With `spread` this example can be re-written.
	 *
	 *  ```js
	 *  spread(function(x, y, z) {})([1, 2, 3]);
	 *  ```
	 *
	 * @param {Function} callback
	 * @returns {Function}
	 */
	module.exports = function spread(callback) {
	  return function wrap(arr) {
	    return callback.apply(null, arr);
	  };
	};


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Created by AntonioGiordano on 03/06/16.
	 */

	var Joi = __webpack_require__(188);

	module.exports.loginValidation = Joi.object().keys({
	  username: Joi.string().min(3).max(20).required(),
	  password: Joi.string().min(8).max(50).required()
	});

	module.exports.registrationValidation = Joi.object().keys({
	  username: Joi.string().min(3).max(20).required(),
	  email: Joi.string().email().required(),
	  password: Joi.string().min(8).max(50).required(),
	  confirmPassword: Joi.any().valid(Joi.ref('password')).required()
	});

/***/ },
/* 227 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"root":"registration__root___2I5c6","logo":"registration__logo___K-ILn","pageContent":"registration__pageContent___2Xu6m","formContainer":"registration__formContainer___1zm21","inputCont":"registration__inputCont___3krvN","inputTextRoot":"registration__inputTextRoot___nlpRQ","inputContainer":"registration__inputContainer___2yItM","signupButtonRoot":"registration__signupButtonRoot___3cwVu"};

/***/ }
]);
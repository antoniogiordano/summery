'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sweetalert = require('sweetalert');

var _sweetalert2 = _interopRequireDefault(_sweetalert);

var _inputText = require('../../components/form-components/input-text/input-text.js');

var _inputText2 = _interopRequireDefault(_inputText);

var _pageLoader = require('../../components/page-loader/page-loader.js');

var _pageLoader2 = _interopRequireDefault(_pageLoader);

var _button = require('../../components/button/button.js');

var _button2 = _interopRequireDefault(_button);

var _ajaxRequests = require('../../ajax-requests.js');

var _misc = require('../../../shared/misc.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var menu = [{
  title: 'Summaries',
  onClick: function onClick() {}
}]; /**
     * Created by AntonioGiordano on 19/07/16.
     */

var Dashboard = _react2.default.createClass({
  displayName: 'Dashboard',

  propTypes: {
    css: _react2.default.PropTypes.object
  },
  getDefaultProps: function getDefaultProps() {
    return {
      css: require('./dashboard.scss')
    };
  },
  getInitialState: function getInitialState() {
    return {
      isPageLoading: true
    };
  },
  componentDidMount: function componentDidMount() {
    this.setState({
      isPageLoading: false
    });
  },
  render: function render() {
    var _this = this;

    var css = this.props.css;
    return _react2.default.createElement(
      'div',
      { className: css.root },
      _react2.default.createElement(_pageLoader2.default, { visible: this.state.isPageLoading }),
      _react2.default.createElement(
        'div',
        { className: css.page },
        _react2.default.createElement('div', { className: css.headerContainer }),
        _react2.default.createElement(
          'div',
          { className: css.pageBody },
          _react2.default.createElement(
            'div',
            { className: css.sideMenu },
            _react2.default.createElement(
              'ul',
              null,
              menu.map(function (item, index) {
                return _react2.default.createElement(
                  'li',
                  { key: index, onClick: item.onClick.bind(_this) },
                  item.title
                );
              })
            )
          ),
          _react2.default.createElement('div', { className: css.content })
        )
      )
    );
  }
});

module.exports = Dashboard;
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _Translate = require('./Translate');

var _Translate2 = _interopRequireDefault(_Translate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Translator = function (_Component) {
    _inherits(Translator, _Component);

    function Translator(props) {
        _classCallCheck(this, Translator);

        var _this = _possibleConstructorReturn(this, (Translator.__proto__ || Object.getPrototypeOf(Translator)).call(this, props));

        _this.state = {
            translation: ''
        };
        return _this;
    }

    _createClass(Translator, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _props = this.props,
                transKey = _props.transKey,
                locale = _props.locale,
                messageObj = _props.messageObj;

            this.translate(transKey, locale, messageObj);
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (this.props.transKey !== nextProps.transKey || this.props.locale !== nextProps.locale) {
                this.translate(nextProps.transKey, nextProps.locale);
            }
        }
    }, {
        key: 'translate',
        value: function translate(transKey, locale, messageObj) {
            if (transKey && locale) this.setState({ translation: messageObj[locale][transKey] });
        }
    }, {
        key: 'render',
        value: function render() {
            var translation = this.state.translation;


            if (!translation) return null;

            return _react2.default.createElement(_Translate2.default, { translation: translation, styles: this.props.styles ? this.props.styles : {} });
        }
    }]);

    return Translator;
}(_react.Component);

exports.default = Translator;


Translator.propTypes = {
    transKey: _propTypes.PropTypes.string.isRequired,
    locale: _propTypes.PropTypes.string
};
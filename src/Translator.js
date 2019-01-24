import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Translate from './Translate';

export default class Translator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            translation: '',
        };
    }

    componentDidMount() {
        const { transKey, locale, messageObj } = this.props;
        this.translate(transKey, locale, messageObj);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.transKey !== nextProps.transKey || this.props.locale !== nextProps.locale) {
            this.translate(nextProps.transKey, nextProps.locale);
        }
    }

    translate(transKey, locale, messageObj) {
        if (transKey && locale)
            this.setState({ translation: messageObj[locale][transKey] });
    }

    render() {
        const { translation } = this.state;

        if (!translation)
            return null;

        return (
            <Translate translation={translation} styles={this.props.styles ? this.props.styles : {}} />
        );
    }
}

Translator.propTypes = {
    transKey: PropTypes.string.isRequired,
    locale: PropTypes.string,
};
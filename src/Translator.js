import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import Translate from './Translate';

export default class Translator extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            translation: '',
            msgObj: null
        };
    }

    componentDidMount() {
        const { transKey, locale, messageObj } = this.props;
        this.translate(transKey, locale, messageObj);
    }

    componentDidUpdate(prevProps) {
        this.setState({ msgObj : prevProps.messageObj })
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.transKey !== nextProps.transKey || this.props.locale !== nextProps.locale) {
            this.translate(nextProps.transKey, nextProps.locale);
        }
    }

    translate(transKey, locale, messageObj) {
        const { msgObj } = this.state;
        const message = msgObj ? msgObj : messageObj;

        if (transKey && locale && message)
            this.setState({ translation: message[locale][transKey] });
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
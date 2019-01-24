import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Translate from './Translate';


export default class Translation extends Component {

    static propTypes = {
        translationKey: PropTypes.string.isRequired,
        locale: PropTypes.string,
        styles: PropTypes.Object
    };

    constructor(props) {
        super(props);
        this.state = {
            translation: '',
        };
    }

    componentDidMount() {
        const { key, locale, messageObj } = this.props;
        this.translate(key, locale, messageObj);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.key !== nextProps.key || this.props.locale !== nextProps.locale) {
            this.translate(nextProps.key, nextProps.locale);
        }
    }

    translate(key, locale, messageObj) {
        if (key && locale)
            this.setState({ translation: messageObj[locale][key] });
    }

    render() {
        const { translation } = this.state;
        const { styles } = this.props;

        if (!translation)
            return null;

        return (
            <Translate translation={translation} styles={styles ? styles : {}} />
        );
    }
}


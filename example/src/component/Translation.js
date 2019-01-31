import React, { Component } from 'react';
import { Translator } from 'react-multilang-translate';
import { MESSAGE } from './message';
import { connect } from "react-redux";

class Translation extends Component {

    render() {
        const { locale, transKey } = this.props;
        const messageObj = {...MESSAGE}
        return (
            <Translator
                transKey={transKey}
                locale={locale}
                messageObj={messageObj}
            />
        );
    }
}

const mapStateToProps = state => ({
    locale: state.translator.locale
});

export default connect(
    mapStateToProps,
)(Translation);

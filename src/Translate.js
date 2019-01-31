import React, { Component } from 'react';

import { PropTypes } from 'prop-types';

export default class Translate extends Component {

    render() {
        const { translation, styles } = this.props;

        let isRow = false;
        let transArr = translation.split('\n');

        if (transArr.length > 1)
            isRow = true;

        return (
            isRow ? (
                transArr.map(function (text, index) {
                    return <span key={index}><span style={styles ? styles : {}}>{text}</span><br /></span>
                })
            ) : (
                    translation
                )
        )
    }
}

Translate.propTypes = {
    translation: PropTypes.string.isRequired,
};
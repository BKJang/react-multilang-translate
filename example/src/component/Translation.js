import React from 'react';
import { Translator } from 'react-multilang-translate';
import { MESSAGE } from './message';


const Translation = ({ locale, transKey }) => (
    <Translator
        transKey={transKey}
        locale={locale}
        messageObj={MESSAGE}
    />
)

export default Translation
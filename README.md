# react-multilang-translate

[![GitHub license](https://img.shields.io/github/license/BKJang/react-multilang-translate.svg)](https://github.com/BKJang/react-multilang-translate/blob/master/LICENSE)

## Features

* Translate with message object
* Mutiline translate
* Implementation with React
* Usage with Redux is recommended
* Decorate the style with props.

## Installation

```bash
yarn add react-multilang-translate
```

or

```bash
npm install --save react-multilang-translate
```

## Import

```js
// at the top of your app
import { Translator } from "react-multilang-translate"
```

## Usage

```js
//message.js
export const MESSAGE = {
    en_US : {
        example_say_hello : 'Hello'
    },
    ko_KR : {
        example_say_hello : '안녕하세요'
    }
}
```

```js
import React, { Component } from 'react';
import { Translator } from 'react-multilang-translate';
import { MESSAGE } from './message';

class Example extends Component {
  render() {
    return (
      <Translator
        transKey='example_say_hello'
        locale='en_US'
        messageObj={MESSAGE}
      />
    );
  }
}
```

## [Example](https://github.com/BKJang/react-multilang-translate/tree/master/example)

```bash
git clone https://github.com/BKJang/react-multilang-translate.git
cd react-multilang-translate/example
npm install
npm start
```

## Copyright and License

MIT License

Copyright (c) 2019 BKJang(PaulJ)
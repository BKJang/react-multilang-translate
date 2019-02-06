import React, { Component } from "react";
import LangChanger from "../component/LangChanger";
import Translation from '../component/Translation';

class TranslateContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: "en_US"
    };
  }

  handleSelect = locale => {
    console.log(locale);
    this.setState({
      locale
    });
  };

  render() {
    const { locale } = this.state;
    return (
      <>
        <LangChanger onSelect={this.handleSelect} selected={locale} />
        <Translation transKey="example_say_hello" locale={locale} />
      </>
    );
  }
}

export default TranslateContainer;

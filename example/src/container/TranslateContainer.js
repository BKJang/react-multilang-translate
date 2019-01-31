import React, { Component } from "react";
import { connect } from "react-redux";
import LangChanger from "../component/LangChanger";
import { setLanguage } from "../store/modules/translator";

class TranslateContainer extends Component {
  handleSelect = locale => {
    const { setLanguage } = this.props;
    setLanguage(locale);
  };

  render() {
    const { locale } = this.props;
    return <LangChanger onSelect={this.handleSelect} selected={locale} />;
  }
}

const mapStateToProps = state => ({
  locale: state.translator.locale
});

const mapDispatchToProps = dispatch => ({
  setLanguage: locale => dispatch(setLanguage(locale))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TranslateContainer);

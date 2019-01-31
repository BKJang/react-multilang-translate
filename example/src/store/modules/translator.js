const SET_LANGUAGE = "tranlsator/SET_LANGUAGE";

export const setLanguage = locale => ({ type: SET_LANGUAGE, locale });

const initialState = {
  locale : 'en_US'
};

export default function translator(state = initialState, action) {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        locale: action.locale
      };
    default:
      return state;
  }
}

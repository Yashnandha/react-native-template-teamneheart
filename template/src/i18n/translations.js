import LocalizedStrings from 'react-native-localization';
export const DEFAULT_LANGUAGE = 'en';

const translations = {
  en: {
    WELCOME_BACK: 'Welcome Back',
   
  },
  de: {
    WELCOME_BACK: 'Welcome Back de',
    
  },
};

export default new LocalizedStrings(translations);

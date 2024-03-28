import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            regButtonText: 'Registration',
            linkToHome: 'Home',
            changeLanguageRu: 'RU',
            changeLanguageEn: 'EN',
            localizationHeader: 'Header',
        },
    },
    ru: {
        translation: {
            regButtonText: 'Регистрация',
            linkToHome: 'Домой',
            changeLanguageRu: 'РУС',
            changeLanguageEn: 'АНГЛ',
            localizationHeader: 'Заголовок',
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ru", 
        interpolation: {
            escapeValue: false 
        }
    });

export default i18n;

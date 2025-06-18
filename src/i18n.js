import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
	.use(HttpApi)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en',
		supportedLngs: ['en', 'ru', 'zh', 'tl', 'si'],
		ns: ['translation'],
		defaultNS: 'translation',
		debug: true,
		backend: {
			// 👇 Uses Vite's BASE_URL
			loadPath: `${import.meta.env.BASE_URL}locales/{{lng}}/translation.json`,
		},
		detection: {
			order: ['querystring', 'cookie', 'localStorage', 'navigator'],
			caches: ['cookie'],
		},
		react: {
			useSuspense: false,
		},
	});

export default i18n;

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources: {
        en: {
          translation: {
            products : 'Products',
            contact: 'Contact',
            button_change : 'EN',
            product_header: 'Our Products',
            brand_button: 'View Accessories',
          },
        },
        hu: {
          translation: {
            products : 'Termékek',
            contact: 'Kapcsolat',
            button_change : 'HU',
            product_header: 'Termékeink',
            brand_button: 'Kiegészítők megtekintése',
          },
        },
      },
      lng: "hu",
      fallbackLng: "en",
      interpolation: {
        escapeValue: false,
      },
    });
}
export default i18n;

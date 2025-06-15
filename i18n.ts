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
            brand_button: 'Models',
            model_error: 'Model not found',
            to_product : 'View products',
            cart_button : 'Add to Cart',

            exhaust: 'Exhausts',
            spoiler: 'Spoiler',
            diffuser: 'Diffuser',
            aero: 'Aero',
            kit: 'Kit'
          },
        },
        hu: {
          translation: {
            products : 'Termékek',
            contact: 'Kapcsolat',
            button_change : 'HU',
            product_header: 'Termékeink',
            brand_button: 'Modellek',
            model_error: 'Modell nem található',
            cart_button : 'Kosárba',

            exhaust: 'Kipufogó',
            spoiler: 'Szárnyak',
            diffuser: 'Diffúzor',
            aero: 'Aero',
            kit: 'Kit-ek',
            to_product : 'Termékek megtekintése',
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

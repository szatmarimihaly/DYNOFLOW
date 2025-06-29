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
            view_product: 'View Product',

            exhaust: 'Exhausts',
            spoiler: 'Spoiler',
            diffuser: 'Diffuser',
            aero: 'Aero',
            kit: 'Kit',

            empty: 'Your cart is empty',
            cart_h1: 'Your Cart',
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
            view_product: 'Termék megtekintése',

            exhaust: 'Kipufogó',
            spoiler: 'Szárnyak',
            diffuser: 'Diffúzor',
            aero: 'Aero',
            kit: 'Kit-ek',
            to_product : 'Megtekintése',

            empty: 'A kosár jelenleg üres',
            cart_h1: 'Kosarad',
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


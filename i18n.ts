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
            total: 'Total: ',
            checkout: 'Proceed to Checkout',
            checkout_active: 'Processing...',

            checkout_name: 'Full Name',
            checkout_city: 'City',
            checkout_postal: 'Postal Code',
            checkout_street: 'Street',
            checkout_address: 'House Number',
            checkout_door: 'Door (optional)',
            checkout_phone: '+36305771066',

            payment: 'Payment',
            success_message: 'Your purchase was successful! Thank YOU for choosing us!',
            cancel_message: 'Your purchase was cancelled. Please try again.',
            back_to: 'Back to Home',
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

            total: 'Összesen: ',
            checkout: 'Fizetés',
            checkout_active: 'Feldolgozás...',

            checkout_name: 'Teljes név',
            checkout_city: 'Város',
            checkout_postal: 'Irányítószám',
            checkout_street: 'Utca/Út',
            checkout_address: 'Házszám',
            checkout_door: 'Ajtó (opcionális)',
            checkout_phone: '+36305771066',

            payment: 'Fizetés',
            success_message: 'A vásárlás sikeres volt! Köszönjük, hogy minket választottál!',
            cancel_message: 'A vásárlás megszakítva. Kérjük, próbáld újra.',
            back_to: 'Vissza a főoldalra',
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


import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to Our Product Showcase',
      heroSubtitle: 'Discover our amazing products that will transform your experience. We offer innovative solutions for your needs.',
      getStarted: 'Get Started',
      learnMore: 'Learn more',
      aboutTitle: 'About Our Products',
      aboutSubtitle: 'We are dedicated to providing high-quality products that meet your needs and exceed your expectations.',
      productsTitle: 'Our Products',
      productsSubtitle: 'Discover our range of high-quality products designed to meet your needs.',
      addToCart: 'Add to Cart',
      testimonialsTitle: 'What Our Customers Say',
      testimonialsSubtitle: 'Don\'t just take our word for it. Here\'s what our customers have to say about our products.',
      contactTitle: 'Contact Us',
      contactSubtitle: 'Have questions? We\'d love to hear from you. Send us a message and we\'ll respond as soon as possible.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      sendMessage: 'Send Message',
    },
  },
  es: {
    translation: {
      welcome: 'Bienvenido a Nuestro Escaparate de Productos',
      heroSubtitle: 'Descubre nuestros increíbles productos que transformarán tu experiencia. Ofrecemos soluciones innovadoras para tus necesidades.',
      getStarted: 'Comenzar',
      learnMore: 'Aprender más',
      aboutTitle: 'Sobre Nuestros Productos',
      aboutSubtitle: 'Estamos dedicados a proporcionar productos de alta calidad que satisfacen tus necesidades y superan tus expectativas.',
      productsTitle: 'Nuestros Productos',
      productsSubtitle: 'Descubre nuestra gama de productos de alta calidad diseñados para satisfacer tus necesidades.',
      addToCart: 'Añadir al Carrito',
      testimonialsTitle: 'Lo que Dicen Nuestros Clientes',
      testimonialsSubtitle: 'No solo nos creas a nosotros. Esto es lo que nuestros clientes tienen que decir sobre nuestros productos.',
      contactTitle: 'Contáctanos',
      contactSubtitle: '¿Tienes preguntas? Nos encantaría escucharte. Envíanos un mensaje y te responderemos lo antes posible.',
      name: 'Nombre',
      email: 'Correo Electrónico',
      message: 'Mensaje',
      sendMessage: 'Enviar Mensaje',
    },
  },
  fr: {
    translation: {
      welcome: 'Bienvenue dans Notre Vitrine de Produits',
      heroSubtitle: 'Découvrez nos produits incroyables qui transformeront votre expérience. Nous proposons des solutions innovantes pour vos besoins.',
      getStarted: 'Commencer',
      learnMore: 'En savoir plus',
      aboutTitle: 'À Propos de Nos Produits',
      aboutSubtitle: 'Nous nous engageons à fournir des produits de haute qualité qui répondent à vos besoins et dépassent vos attentes.',
      productsTitle: 'Nos Produits',
      productsSubtitle: 'Découvrez notre gamme de produits de haute qualité conçus pour répondre à vos besoins.',
      addToCart: 'Ajouter au Panier',
      testimonialsTitle: 'Ce que Disent Nos Clients',
      testimonialsSubtitle: 'Ne nous croyez pas sur parole. Voici ce que nos clients disent de nos produits.',
      contactTitle: 'Contactez-nous',
      contactSubtitle: 'Vous avez des questions ? Nous serions ravis d\'avoir de vos nouvelles. Envoyez-nous un message et nous vous répondrons dès que possible.',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      sendMessage: 'Envoyer le Message',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n; 
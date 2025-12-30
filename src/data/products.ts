export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  images?: string[];
  category: "machine" | "beans";
  features: string[];
}

export const products: Product[] = [
  // Machines
  {
    id: "sage-barista-touch-impress",
    name: "Sage Barista Touch Impress SES 882 BSS",
    description:
      "Upplev tredje vågens specialkaffe hemma med hjälp av Swipe, Select och Impress. Barista Touch™ Impress guidar dig genom varje steg för att göra exakt det kaffe du vill ha, och IMPRESS™ Puck System säkerställer perfekt dosering och packning.",
    price: 12299, // ~25% off 15999
    originalPrice: 15999,
    image:
      "https://assets.sageappliances.com/cdn-cgi/image/width=1300,format=auto/BES882/SES882BSS4GUK1/pdp_1300px.png?pdp", // Official Sage Image
    images: [
      "https://assets.sageappliances.com/cdn-cgi/image/width=1300,format=auto/BES882/SES882BSS4GUK1/pdp_1300px.png?pdp",
      "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES881/BES881_CAROUSEL1_EMEA.jpg",
      "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES881/BES881_CAROUSEL2_EMEA.jpg",
      "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES881/BES881_CAROUSEL3_EMEA.jpg",
      "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES881/BES881_CAROUSEL4_EMEA.jpg",
    ],
    category: "machine",
    features: [
      "Impess™ Puck System",
      "ThermoJet® uppvärmning",
      "Auto MilQ handsfree mikroskum",
      "Pekskärmsguide",
    ],
  },
  {
    id: "sage-barista-touch-impress-black",
    name: "Sage Barista Touch Impress SES882BTR (Black Truffle)",
    description:
      "Upplev tredje vågens specialkaffe hemma med hjälp av Swipe, Select och Impress. Barista Touch™ Impress guidar dig genom varje steg för att göra exakt det kaffe du vill ha, och IMPRESS™ Puck System säkerställer perfekt dosering och packning. Elegant svart finish.",
    price: 14299,
    originalPrice: 15999,
    image:
      "https://assets.sageappliances.com/cdn-cgi/image/width=1300,format=auto/BES882/SES882BTR4GUK1/pdp_1300px.png?pdp",
    images: [
      "https://assets.sageappliances.com/cdn-cgi/image/width=1300,format=auto/BES882/SES882BTR4GUK1/pdp_1300px.png?pdp",
      "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES881/SES881_Updated_Dimensions_EMEA_CAROUSEL_01.png",
      "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES881/BES881_CAROUSEL1_EMEA.jpg",
      "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES881/BES881_CAROUSEL2_EMEA.jpg",
      "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES881/BES881_CAROUSEL3_EMEA.jpg",
      "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES881/BES881_CAROUSEL4_EMEA.jpg",
    ],
    category: "machine",
    features: [
      "Impess™ Puck System",
      "ThermoJet® uppvärmning",
      "Auto MilQ handsfree mikroskum",
      "Pekskärmsguide",
      "Black Truffle finish",
    ],
  },
  {
    id: "sage-barista-touch-impress-blue",
    name: "Sage Barista Touch Impress SES882DBL (Damson Blue)",
    description:
      "Upplev tredje vågens specialkaffe hemma med hjälp av Swipe, Select och Impress. Barista Touch™ Impress guidar dig genom varje steg för att göra exakt det kaffe du vill ha, och IMPRESS™ Puck System säkerställer perfekt dosering och packning. Exklusiv blå finish.",
    price: 14299,
    originalPrice: 15999,
    image: "/images/sage-damson-blue.png",
    category: "machine",
    features: [
      "Impess™ Puck System",
      "ThermoJet® uppvärmning",
      "Auto MilQ handsfree mikroskum",
      "Pekskärmsguide",
      "Damson Blue finish",
    ],
  },
  {
    id: "sage-oracle-touch",
    name: "Sage The Oracle Touch",
    description:
      "Helautomatisk manuell espressomaskin som levererar specialkaffe. Automatisering av varje steg, pekskärmsoperation och dubbla kokare.",
    price: 31999,
    originalPrice: 31999,
    image:
      "https://assets.sageappliances.com/cdn-cgi/image/width=1300,format=auto/BES990/SES990BSS4EEU1/pdp1.png?pdp",
    images: [
      "https://assets.sageappliances.com/cdn-cgi/image/width=1300,format=auto/BES990/SES990BSS4EEU1/pdp1.png?pdp",
      "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES990/3_SES990BSS_EUK_Angles_Profile_Right.png",
      "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES990/5_SES990BSS_EUK_Angles_Side_Right.png",
      "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES990/6_SES990BSS_EUK_Angles_Back_Tank-Closed.png",
      "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES990/7_SES990BSS_EUK_Angles_Back_Tank-Open.png",
    ],
    category: "machine",
    features: [
      "Dubbla kokare",
      "Automatisk malning & packning",
      "PID temperaturkontroll",
      "Over Pressure Valve (OPV)",
    ],
  },
  {
    id: "sage-barista-pro",
    name: "Sage Barista Pro",
    description:
      "Baristakvalitet med nytt intuitivt gränssnitt som ger dig all information du behöver för att skapa tredje vågens specialkaffe hemma. Inbyggd kvarn levererar rätt mängd malet kaffe på begäran.",
    price: 11999,
    originalPrice: 11999,
    image:
      "https://assets.sageappliances.com/cdn-cgi/image/width=1300,format=auto/BES878/SES878BSS4EEU1/pdp.jpg?pdp",
    images: [
      "https://assets.sageappliances.com/cdn-cgi/image/width=1300,format=auto/BES878/SES878BSS4EEU1/pdp.jpg?pdp",
      "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES878/SES878_CAROUSEL1_EMEA_NEW.png",
      "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES878/SES878EUK_CAROUSEL1.png",
      "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES878/SES878EUK_CAROUSEL2.png",
      "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES878/08_SES878_EUK_1300px.jpg",
    ],
    category: "machine",
    features: [
      "LCD-skärm för feedback",
      "3 sekunders uppvärmning",
      "Integrerad konisk kvarn",
    ],
  },
  {
    id: "sage-barista-pro-black",
    name: "Sage Barista Pro SES878BTR (Black Truffle)",
    description:
      "Baristakvalitet med nytt intuitivt gränssnitt som ger dig all information du behöver för att skapa tredje vågens specialkaffe hemma. Inbyggd kvarn levererar rätt mängd malet kaffe på begäran. Elegant svart finish.",
    price: 11999,
    originalPrice: 11999,
    image:
      "https://assets.sageappliances.com/cdn-cgi/image/width=1300,format=auto/BES878/SES878BTR4GEU1/pdp.jpg?pdp",
    images: [
      "https://assets.sageappliances.com/cdn-cgi/image/width=1300,format=auto/BES878/SES878BTR4GEU1/pdp.jpg?pdp",
      "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES878/SES878_CAROUSEL1_EMEA_NEW.png",
      "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES878/SES878EUK_CAROUSEL1.png",
      "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES878/SES878EUK_CAROUSEL2.png",
      "https://breville-production-aem-assets.s3.us-west-2.amazonaws.com/BES878/08_SES878_EUK_1300px.jpg",
    ],
    category: "machine",
    features: [
      "LCD-skärm för feedback",
      "3 sekunders uppvärmning",
      "Integrerad konisk kvarn",
      "Black Truffle finish",
    ],
  },
  {
    id: "sage-barista-pro-blue",
    name: "Sage Barista Pro SES878DBL (Damson Blue)",
    description:
      "Baristakvalitet med nytt intuitivt gränssnitt som ger dig all information du behöver för att skapa tredje vågens specialkaffe hemma. Inbyggd kvarn levererar rätt mängd malet kaffe på begäran. Exklusiv blå finish.",
    price: 11999,
    originalPrice: 11999,
    image:
      "https://assets.sageappliances.com/cdn-cgi/image/width=1300,format=auto/BES878/SES878DBL4EEU1/pdp.jpg",
    category: "machine",
    features: [
      "LCD-skärm för feedback",
      "3 sekunders uppvärmning",
      "Integrerad konisk kvarn",
      "Damson Blue finish",
    ],
  },
  {
    id: "sage-bambino-plus",
    name: "Sage The Bambino Plus",
    description:
      "Seriös espresso. Seriöst värde. Bambino Plus kompromissar inte med de 4 nyckelelementen för tredje vågens specialkaffe. Levererar baristakvalitet med en 54 mm portafilter.",
    price: 6999,
    originalPrice: 6999,
    image:
      "https://assets.breville.com/cdn-cgi/image/width=1300,format=auto/BES500/SES500BSS4EEU1/pdp_1300px.png",
    category: "machine",
    features: [
      "Kompakt design",
      "Automatisk mjölktexturering",
      "ThermoJet® teknologi",
    ],
  },
  {
    id: "sage-dual-boiler",
    name: "Sage The Dual Boiler",
    description:
      "För kaffenörden som vill ha full kontroll. Dubbla kokare och dubbla pumpar tillåter samtidig extraktion och mjölkskumning.",
    price: 17499,
    originalPrice: 17499,
    image:
      "https://www.breville.com/content/dam/breville/de/catalog/products/images/ses/ses920bss4eeu1/pdp.jpg",
    category: "machine",
    features: [
      "Dedikerad ångkokare",
      "Elektronisk PID-styrning",
      "Flexibel shot-kontroll",
    ],
  },
  // Beans
  {
    id: "zoegas-mollbergs",
    name: "Zoégas Mollbergs Blandning",
    description:
      "En mörkrost med fyllig smak och toner av svarta vinbär och smörkola. Perfekt för den svenska smaken.",
    price: 79,
    originalPrice: 119,
    image:
      "https://assets.icanet.se/t_product_large_v1,f_auto/7310731101802.jpg",
    category: "beans",
    features: ["Mörkrost", "100% Arabica", "Klassisk svensk smak"],
  },
  {
    id: "lofbergs-lilac",
    name: "Löfbergs Lila Espresso",
    description:
      "Kraftfull och intensiv espressoblandning med bönor från Sydamerika och östra Afrika. Lång och angenäm eftersmak.",
    price: 69,
    originalPrice: 99,
    image:
      "https://assets.icanet.se/t_product_large_v1,f_auto/7310050004013.jpg",
    category: "beans",
    features: [
      "Intensiv smak",
      "Utmärkt crema",
      "Passar helautomatiska maskiner",
    ],
  },
  {
    id: "johan-nystrom-fundamental",
    name: "Johan & Nyström Fundamental",
    description:
      "Modern espresso med stor sötma och krispighet. Toner av nougat och kakao gör den till en favorit.",
    price: 129,
    originalPrice: 189,
    image:
      "https://johanochnystrom.se/cdn/shop/files/johan-och-nystrom-house-espresso-fundamental_1100x.jpg?v=1700230275",
    category: "beans",
    features: ["Specialkaffe", "Hållbart odlat", "Rostat i Sverige"],
  },
];

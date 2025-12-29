export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    originalPrice: number;
    image: string;
    category: 'machine' | 'beans';
    features: string[];
}

export const products: Product[] = [
    // Machines
    {
        id: 'sage-barista-touch-impress',
        name: 'Sage Barista Touch Impress',
        description: 'Upplev tredje vågens specialkaffe hemma med hjälp av Swipe, Select och Impress. Barista Touch™ Impress guidar dig genom varje steg för att göra exakt det kaffe du vill ha, och IMPRESS™ Puck System säkerställer perfekt dosering och packning.',
        price: 11199, // ~30% off 15999
        originalPrice: 15999,
        image: 'https://assets.sageappliances.com/cdn-cgi/image/width=1300,format=auto/BES882/SES882BTR4GUK1/pdp_1300px.png?pdp', // Official Sage Image
        category: 'machine',
        features: ['Impess™ Puck System', 'ThermoJet® uppvärmning', 'Auto MilQ handsfree mikroskum', 'Pekskärmsguide']
    },
    {
        id: 'sage-oracle-touch',
        name: 'Sage The Oracle Touch',
        description: 'Helautomatisk manuell espressomaskin som levererar specialkaffe. Automatisering av varje steg, pekskärmsoperation och dubbla kokare.',
        price: 31999,
        originalPrice: 31999,
        image: 'https://assets.sageappliances.com/cdn-cgi/image/width=1300,format=auto/BES990/SES990BSS4EEU1/pdp1.png?pdp',
        category: 'machine',
        features: ['Dubbla kokare', 'Automatisk malning & packning', 'PID temperaturkontroll', 'Over Pressure Valve (OPV)']
    },
    {
        id: 'sage-barista-pro',
        name: 'Sage Barista Pro',
        description: 'Baristakvalitet med nytt intuitivt gränssnitt som ger dig all information du behöver för att skapa tredje vågens specialkaffe hemma. Inbyggd kvarn levererar rätt mängd malet kaffe på begäran.',
        price: 11999,
        originalPrice: 11999,
        image: 'https://assets.sageappliances.com/cdn-cgi/image/width=1300,format=auto/BES878/SES878BSS4EEU1/pdp.jpg?pdp',
        category: 'machine',
        features: ['LCD-skärm för feedback', '3 sekunders uppvärmning', 'Integrerad konisk kvarn']
    },
    {
        id: 'sage-bambino-plus',
        name: 'Sage The Bambino Plus',
        description: 'Seriös espresso. Seriöst värde. Bambino Plus kompromissar inte med de 4 nyckelelementen för tredje vågens specialkaffe. Levererar baristakvalitet med en 54 mm portafilter.',
        price: 6999,
        originalPrice: 6999,
        image: 'https://assets.breville.com/cdn-cgi/image/width=1300,format=auto/BES500/SES500BSS4EEU1/pdp_1300px.png',
        category: 'machine',
        features: ['Kompakt design', 'Automatisk mjölktexturering', 'ThermoJet® teknologi']
    },
    {
        id: 'sage-dual-boiler',
        name: 'Sage The Dual Boiler',
        description: 'För kaffenörden som vill ha full kontroll. Dubbla kokare och dubbla pumpar tillåter samtidig extraktion och mjölkskumning.',
        price: 17499,
        originalPrice: 17499,
        image: 'https://www.breville.com/content/dam/breville/de/catalog/products/images/ses/ses920bss4eeu1/pdp.jpg?pdp',
        category: 'machine',
        features: ['Dedikerad ångkokare', 'Elektronisk PID-styrning', 'Flexibel shot-kontroll']
    },
    // Beans
    {
        id: 'zoegas-mollbergs',
        name: 'Zoégas Mollbergs Blandning',
        description: 'En mörkrost med fyllig smak och toner av svarta vinbär och smörkola. Perfekt för den svenska smaken.',
        price: 79,
        originalPrice: 119,
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2940&auto=format&fit=crop',
        category: 'beans',
        features: ['Mörkrost', '100% Arabica', 'Klassisk svensk smak']
    },
    {
        id: 'lofbergs-lilac',
        name: 'Löfbergs Lila Espresso',
        description: 'Kraftfull och intensiv espressoblandning med bönor från Sydamerika och östra Afrika. Lång och angenäm eftersmak.',
        price: 69,
        originalPrice: 99,
        image: 'https://images.unsplash.com/photo-1559525839-4f3424079687?q=80&w=2812&auto=format&fit=crop',
        category: 'beans',
        features: ['Intensiv smak', 'Utmärkt crema', 'Passar helautomatiska maskiner']
    },
    {
        id: 'johan-nystrom-fundamental',
        name: 'Johan & Nyström Fundamental',
        description: 'Modern espresso med stor sötma och krispighet. Toner av nougat och kakao gör den till en favorit.',
        price: 129,
        originalPrice: 189,
        image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=2787&auto=format&fit=crop',
        category: 'beans',
        features: ['Specialkaffe', 'Hållbart odlat', 'Rostat i Sverige']
    }
];

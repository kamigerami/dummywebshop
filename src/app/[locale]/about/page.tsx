
import React from 'react';
import { HeroSection } from '@/components/HeroSection';

const AboutPage = () => {
    return (
        <div className="pb-20">
            <section className="container mx-auto px-4 py-20 sm:px-6">
                <div className="mx-auto max-w-2xl">
                    <h1 className="mb-8 font-serif text-4xl font-bold text-stone-900 md:text-5xl">Om Oss</h1>

                    <div className="prose prose-stone prose-lg text-stone-600">
                        <p className="lead text-xl text-stone-800">
                            Välkommen till El & Hem – din destination för premium kaffeupplevelser.
                        </p>

                        <p>
                            Vi på El & Hem brinner för det perfekta kaffet. Vi vet att vägen till en fantastisk espresso handlar lika mycket om bönorna som om maskinen.
                            Därför har vi noggrant valt ut ett sortiment av Sage espressomaskiner som ger dig möjligheten att bli din egen barista hemma.
                        </p>

                        <h2 className="mt-12 text-2xl font-bold text-stone-900">Vår Mission</h2>
                        <p>
                            Vårt mål är enkelt: att göra specialkaffe tillgängligt för alla, direkt i hemmet. Vi tror på kvalitet, hållbarhet och glädjen i att skapa något riktigt gott.
                        </p>

                        <h2 className="mt-12 text-2xl font-bold text-stone-900">Kontakt & Företagsinformation</h2>
                        <div className="rounded-xl border border-stone-200 bg-white p-6 not-prose shadow-sm">
                            <p className="mb-2 font-bold text-stone-900">El & Hem (Code Labs AB)</p>
                            <p className="mb-1 text-stone-600">Södra kungsvägen 68</p>
                            <p className="mb-4 text-stone-600">18132 Lidingö</p>

                            <div className="mt-4 border-t border-stone-100 pt-4">
                                <p className="mb-1 text-stone-600"><span className="text-stone-500">Org.nummer:</span> 559064-2442</p>
                                <p className="text-stone-600"><span className="text-stone-500">Telefon:</span> 08 - 128 164 00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;

import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export const metadata = {
  title: "Kundservice | El & Hem",
  description: "Kontakta oss på El & Hem. Vi hjälper dig med dina frågor.",
};

export default function CustomerServicePage() {
  return (
    <div className="pt-10 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="mb-4 text-center font-serif text-4xl font-bold text-stone-900 md:text-5xl">
          Kundservice
        </h1>
        <p className="mx-auto mb-16 max-w-2xl text-center text-lg text-stone-600">
          Har du frågor om våra produkter eller din beställning? Vi finns här
          för att hjälpa dig!
        </p>

        <div className="mx-auto max-w-5xl">
          <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Phone */}
            <div className="flex flex-col items-center rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-stone-900">
                Ring oss
              </h3>
              <p className="mb-4 text-stone-500">Vi svarar vardagar 09-17</p>
              <a
                href="tel:0812816400"
                className="text-lg font-bold text-amber-600 hover:underline"
              >
                08 - 128 164 00
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-stone-900">
                Maila oss
              </h3>
              <p className="mb-4 text-stone-500">Svar inom 24 timmar</p>
              <a
                href="mailto:info@elochhem.se"
                className="text-lg font-bold text-amber-600 hover:underline"
              >
                info@elochhem.se
              </a>
            </div>

            {/* Visit */}
            <div className="flex flex-col items-center rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-stone-900">
                Besök oss
              </h3>
              <p className="mb-4 text-stone-500">
                Lagret (Endast bokade besök)
              </p>
              <address className="text-stone-600 not-italic">
                Södra kungsvägen 68
                <br />
                181 32 Lidingö
              </address>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold text-stone-900">
              Vanliga frågor
            </h2>

            <div className="space-y-6">
              <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-bold text-stone-900">
                  När får jag min beställning?
                </h3>
                <p className="text-stone-600">
                  Vi skickar normalt din beställning inom 24 timmar.
                  Leveranstiden är sedan 1-3 arbetsdagar med PostNord eller DHL.
                </p>
              </div>

              <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-bold text-stone-900">
                  Vilka garantier gäller?
                </h3>
                <p className="text-stone-600">
                  Vi är auktoriserad återförsäljare av Sage och erbjuder alltid
                  2 års garanti på alla espressomaskiner.
                </p>
              </div>

              <div className="rounded-xl border border-stone-200 bg-white p-6 shadow-sm">
                <h3 className="mb-2 text-lg font-bold text-stone-900">
                  Kan jag delbetala?
                </h3>
                <p className="text-stone-600">
                  Ja, genom Klarna erbjuder vi faktura, delbetalning samt
                  direktbetalning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Returer & Byten | El & Hem",
  description: "Information om returer, ångerrätt och reklamationer.",
};

export default function ReturnsPage() {
  return (
    <div className="pt-10 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="mb-12 text-center font-serif text-4xl font-bold text-stone-900 md:text-5xl">
          Returer & Byten
        </h1>

        <div className="prose prose-stone prose-lg mx-auto max-w-3xl">
          <p className="lead">
            Hos oss har du alltid 30 dagars öppet köp. Vi vill att du ska vara
            helt nöjd med din nya kaffemaskin.
          </p>

          <div className="my-8 rounded-xl border border-stone-200 bg-stone-50 p-6">
            <h3 className="mt-0 text-xl font-bold text-stone-900">
              Så gör du en retur
            </h3>
            <ol className="mt-4 mb-0 list-decimal space-y-2 pl-4">
              <li>Kontakta vår kundservice för att få en retursedel.</li>
              <li>Packa varan väl, helst i originalförpackning.</li>
              <li>Klistra på retursedeln och lämna in hos närmaste ombud.</li>
              <li>
                Vi återbetalar pengarna inom 5-10 dagar efter att vi mottagit
                returen.
              </li>
            </ol>
          </div>

          <h3>Villkor för retur</h3>
          <p>
            För att en retur ska godkännas ska varan vara i väsentligt
            oförändrat skick. Det innebär att du får undersöka varan men inte
            använda den på ett sätt som påverkar dess skick eller värde.
          </p>
          <p>
            Vid retur av kaffemaskiner som använts och fyllts med vatten/kaffe
            kan ett värdeminskningsavdrag göras om varan inte kan säljas som ny.
          </p>

          <h3>Reklamation</h3>
          <p>
            Om du upptäcker ett fel på din vara ska du kontakta oss så snart som
            möjligt. Vi följer Konsumentköplagen och erbjuder 3 års
            reklamationsrätt.
          </p>

          <h3>Återbetalning</h3>
          <p>
            Återbetalning sker med samma betalsätt som vid köpet. Har du betalat
            med Klarna justeras eller makuleras din faktura.
          </p>

          <div className="mt-12 flex justify-center">
            <Link
              href="/customer-service"
              className="inline-flex items-center gap-2 font-bold text-amber-600 hover:text-amber-700"
            >
              Kontakta Kundservice
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

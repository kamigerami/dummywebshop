import React from "react";

export const metadata = {
  title: "Köpvillkor | El & Hem",
  description: "Köpvillkor för El & Hem - Din destination för premium kaffe.",
};

export default function TermsPage() {
  return (
    <div className="pt-10 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="mb-12 text-center font-serif text-4xl font-bold text-stone-900 md:text-5xl">
          Köpvillkor
        </h1>

        <div className="prose prose-stone prose-lg mx-auto max-w-3xl">
          <p className="lead">
            Dessa köpvillkor (&quot;Villkoren&quot;) gäller för alla köp som
            görs av dig som privatperson (&quot;Kunden&quot;) från El & Hem /
            Code Labs AB (&quot;El & Hem&quot;, &quot;vi&quot; eller
            &quot;oss&quot;).
          </p>

          <h3>1. Allmänt</h3>
          <p>
            Genom att genomföra ett köp godkänner du dessa Villkor. För att få
            handla hos oss måste du vara minst 18 år gammal eller ha målsmans
            godkännande.
          </p>

          <h3>2. Priser och Betalning</h3>
          <p>
            Alla priser anges i svenska kronor (SEK) och inkluderar 25% moms. I
            kundvagnen kan du se det totala priset inklusive alla avgifter,
            moms, frakt och betalning.
          </p>
          <p>
            Vi erbjuder betalning via Klarna, kortbetalning (Visa/Mastercard)
            samt Swish. Betalningsvillkor finns angivna i kassan beroende på
            valt betalsätt.
          </p>

          <h3>3. Leverans</h3>
          <p>
            Normal leveranstid är 1-3 arbetsdagar. Vi erbjuder fri frakt på alla
            beställningar inom Sverige med standardfrakt. Expressfrakt kan
            väljas mot en extra kostnad.
          </p>
          <p>
            Om en vara har avvikande leveranstid står det angivet vid respektive
            vara.
          </p>

          <h3>4. Ångerrätt</h3>
          <p>
            Som privatkund har du enligt distansavtalslagen rätt att ångra ditt
            köp inom 14 dagar. Vi på El & Hem erbjuder dock 30 dagars öppet köp.
            Ångerfristen börjar löpa från den dag du tagit emot varan.
          </p>

          <h3>5. Reklamation</h3>
          <p>
            Vi följer Konsumentköplagens regler för reklamation. Du har rätt att
            reklamera en vara i tre år om det är fel på den. Kontakta vår
            kundservice så hjälper vi dig.
          </p>

          <h3>6. Bolagsinformation</h3>
          <p>
            El & Hem (Code Labs AB)
            <br />
            Södra kungsvägen 68
            <br />
            181 32 Lidingö
            <br />
            Org.nr: 559064-2442
            <br />
            E-post: info@elochhem.se
          </p>
        </div>
      </div>
    </div>
  );
}

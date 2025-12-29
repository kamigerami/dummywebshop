import React from "react";

export const metadata = {
  title: "Integritetspolicy | El & Hem",
  description: "Hur vi hanterar dina personuppgifter på El & Hem.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-10 pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <h1 className="mb-12 text-center font-serif text-4xl font-bold text-stone-900 md:text-5xl">
          Integritetspolicy
        </h1>

        <div className="prose prose-stone prose-lg mx-auto max-w-3xl">
          <p className="lead">
            Vi värnar om din personliga integritet och strävar efter att alltid
            skydda dina personuppgifter på bästa sätt. Denna policy beskriver
            hur vi samlar in och använder din data.
          </p>

          <h3>1. Personuppgiftsansvarig</h3>
          <p>
            El & Hem (Code Labs AB), org.nr 559064-2442, är
            personuppgiftsansvarig för behandlingen av dina personuppgifter på
            denna webbplats.
          </p>

          <h3>2. Vilka uppgifter samlar vi in?</h3>
          <p>
            Vi samlar in uppgifter som du lämnar till oss när du genomför ett
            köp, kontaktar oss eller prenumererar på vårt nyhetsbrev. Detta
            inkluderar:
          </p>
          <ul>
            <li>Namn och kontaktuppgifter</li>
            <li>Leveransadress</li>
            <li>Betalningsinformation</li>
            <li>Orderhistorik</li>
          </ul>

          <h3>3. Vad använder vi uppgifterna till?</h3>
          <p>Dina uppgifter används för att:</p>
          <ul>
            <li>Hantera och leverera din beställning.</li>
            <li>Hantera betalningar och fakturering.</li>
            <li>Hantera returer och reklamationer.</li>
            <li>Skicka relevant marknadsföring (om du samtyckt).</li>
          </ul>

          <h3>4. Delning av data</h3>
          <p>
            Vi kan komma att dela dina uppgifter med utvalda tredje parter för
            att kunna fullfölja våra åtaganden mot dig, t.ex.
            betalningsleverantörer (Klarna, Stripe) och logistikpartners
            (PostNord, DHL). Vi säljer aldrig dina uppgifter vidare.
          </p>

          <h3>5. Dina rättigheter</h3>
          <p>
            Du har rätt att begära ut information om vilka personuppgifter vi
            har sparade om dig. Du kan också begära rättelse eller radering av
            dina uppgifter.
          </p>

          <h3>6. Cookies</h3>
          <p>
            Vi använder cookies för att förbättra din upplevelse på webbplatsen,
            analysera trafik och för marknadsföring.
          </p>
        </div>
      </div>
    </div>
  );
}

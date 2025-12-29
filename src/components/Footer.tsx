import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 px-6 py-12 text-stone-600">
      <div className="container mx-auto grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-4 font-serif text-lg font-bold text-stone-900">
            EL & HEM
          </h3>
          <p className="max-w-xs text-sm leading-relaxed">
            Din destination för premium kaffeupplevelser hemma. Vi erbjuder
            marknadens bästa maskiner till oslagbara priser.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold tracking-wider text-stone-900 uppercase">
            Kontakt
          </h3>
          <address className="space-y-2 text-sm not-italic">
            <p>El & Hem (Code Labs AB)</p>
            <p>Södra kungsvägen 68</p>
            <p>181 32 Lidingö</p>
            <p className="mt-4">
              <span className="block text-xs text-stone-500 uppercase">
                Org nummer
              </span>
              559064-2442
            </p>
            <p>
              <span className="block text-xs text-stone-500 uppercase">
                Telefon
              </span>
              08 - 128 164 00
            </p>
          </address>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-bold tracking-wider text-stone-900 uppercase">
            Länkar
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="/terms"
                className="transition-colors hover:text-amber-600"
              >
                Köpvillkor
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="transition-colors hover:text-amber-600"
              >
                Integritetspolicy
              </Link>
            </li>
            <li>
              <Link
                href="/returns"
                className="transition-colors hover:text-amber-600"
              >
                Returer
              </Link>
            </li>
            <li>
              <Link
                href="/customer-service"
                className="transition-colors hover:text-amber-600"
              >
                Kundservice
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-12 border-t border-stone-200 pt-8 text-center text-xs text-stone-500">
        <p>
          &copy; {new Date().getFullYear()} El & Hem (Code Labs AB). Alla
          rättigheter förbehållna.
        </p>
      </div>
    </footer>
  );
}

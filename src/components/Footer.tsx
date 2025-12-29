export function Footer() {
    return (
        <footer className="bg-stone-50 px-6 py-12 text-stone-600 border-t border-stone-200">
            <div className="container mx-auto grid gap-8 md:grid-cols-3">
                <div>
                    <h3 className="mb-4 text-lg font-bold text-stone-900 font-serif">EL & HEM</h3>
                    <p className="text-sm leading-relaxed max-w-xs">
                        Din destination för premium kaffeupplevelser hemma. Vi erbjuder marknadens bästa maskiner till oslagbara priser.
                    </p>
                </div>

                <div>
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-stone-900">Kontakt</h3>
                    <address className="not-italic text-sm space-y-2">
                        <p>El & Hem (Code Labs AB)</p>
                        <p>Södra kungsvägen 68</p>
                        <p>181 32 Lidingö</p>
                        <p className="mt-4">
                            <span className="block text-stone-500 text-xs uppercase">Org nummer</span>
                            559064-2442
                        </p>
                        <p>
                            <span className="block text-stone-500 text-xs uppercase">Telefon</span>
                            08 - 128 164 00
                        </p>
                    </address>
                </div>

                <div>
                    <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-stone-900">Länkar</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-amber-600 transition-colors">Köpvillkor</a></li>
                        <li><a href="#" className="hover:text-amber-600 transition-colors">Integritetspolicy</a></li>
                        <li><a href="#" className="hover:text-amber-600 transition-colors">Returer</a></li>
                        <li><a href="#" className="hover:text-amber-600 transition-colors">Kundservice</a></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto mt-12 border-t border-stone-200 pt-8 text-center text-xs text-stone-500">
                <p>&copy; {new Date().getFullYear()} El & Hem (Code Labs AB). Alla rättigheter förbehållna.</p>
            </div>
        </footer>
    );
}

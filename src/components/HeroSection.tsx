import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden bg-stone-50 py-24 sm:py-32">
            {/* Background Image / Gradient */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=2670&auto=format&fit=crop"
                    alt="Coffee background"
                    fill
                    className="object-cover opacity-10"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-50 via-stone-50/80 to-transparent" />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6">
                <div className="max-w-2xl">
                    <div className="mb-6 inline-flex items-center rounded-full border border-amber-600/30 bg-amber-600/10 px-3 py-1 text-sm text-amber-700">
                        <span className="font-medium">Nyhet</span>
                        <span className="mx-2 h-1 w-1 rounded-full bg-amber-600" />
                        <span>Sage Barista Touch Impress</span>
                    </div>

                    <h1 className="mb-6 font-serif text-5xl font-bold leading-tight text-stone-900 sm:text-7xl">
                        Mästarens val, <br />
                        <span className="text-amber-600 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">i ditt kök.</span>
                    </h1>

                    <p className="mb-8 text-lg text-stone-600 sm:text-xl leading-relaxed">
                        Upplev tredje vågens specialkaffe med automatiserad assistans.
                        Perfekt dosering, precis temperatur och silkeslent mikroskum.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row">
                        <Link
                            href="/product/sage-barista-touch-impress"
                            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-600 px-8 py-4 text-base font-bold text-white transition-all hover:bg-amber-700 hover:scale-105"
                        >
                            Köp Nu - 8 499 kr
                            <ArrowRight className="h-5 w-5" />
                        </Link>
                        <Link
                            href="#products"
                            className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-200 bg-white/50 px-8 py-4 text-base font-bold text-stone-900 transition-all hover:bg-white"
                        >
                            Se alla maskiner
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center gap-8 text-sm text-stone-500">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-600" />
                            Fri frakt
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-600" />
                            1-3 dagars leverans
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-green-600" />
                            Garanti ingår
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

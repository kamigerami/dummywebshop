import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-md">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-2xl font-serif font-bold text-stone-900 tracking-wider">EL & HEM</span>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/#products" className="text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors">
                        MASKINER
                    </Link>
                    <Link href="/#beans" className="text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors">
                        KBÖNOR
                    </Link>
                    <Link href="/about" className="text-sm font-medium text-stone-600 hover:text-amber-600 transition-colors">
                        OM OSS
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <Link
                        href="/cart"
                        className="group relative flex items-center justify-center p-2 text-stone-600 hover:text-amber-600 transition-colors"
                    >
                        <ShoppingBag className="h-6 w-6" />
                        <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-600 text-[10px] font-bold text-white group-hover:bg-amber-500">
                            0
                        </span>
                    </Link>
                </div>
            </div>
        </header>
    );
}

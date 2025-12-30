"use client";

import { ShoppingBag } from "lucide-react";
import Link from "next/link";

import { useCart } from "@/context/CartContext";

export function Header() {
  const { cartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-stone-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-bold tracking-wider text-stone-900">
            EL & HEM
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/#products"
            className="text-sm font-medium text-stone-600 transition-colors hover:text-amber-600"
          >
            MASKINER
          </Link>
          <Link
            href="/#beans"
            className="text-sm font-medium text-stone-600 transition-colors hover:text-amber-600"
          >
            KBÖNOR
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-stone-600 transition-colors hover:text-amber-600"
          >
            OM OSS
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/cart"
            className="group relative flex items-center justify-center p-2 text-stone-600 transition-colors hover:text-amber-600"
          >
            <ShoppingBag className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-600 text-[10px] font-bold text-white group-hover:bg-amber-500">
                {cartCount}
              </span>
            )}
            {cartCount === 0 && (
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-stone-200 text-[10px] font-bold text-stone-500">
                0
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}

"use client";

import { Check, ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

export function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);
  const router = useRouter();

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);

    // Optional: Redirect to cart after a short delay or just show success
    setTimeout(() => {
      setAdded(false);
      router.push("/cart");
    }, 800);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="flex flex-1 items-center justify-center gap-3 rounded-full bg-amber-600 py-4 font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-amber-500 hover:shadow-amber-900/20 active:scale-95 disabled:bg-green-600"
      disabled={added}
    >
      {added ? (
        <>
          <Check className="h-5 w-5" />
          Tillagd!
        </>
      ) : (
        <>
          <ShoppingBag className="h-5 w-5" />
          Lägg i varukorgen
        </>
      )}
    </button>
  );
}

import { ArrowLeft, Check, ShoppingBag, Star, Truck } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { AddToCartButton } from "@/components/AddToCartButton";
import { ProductCard } from "@/components/ProductCard";
import { ProductImageGallery } from "@/components/ProductImageGallery";
import { products } from "@/data/products";

interface PageProps {
  params: Promise<{
    id: string;
    locale: string;
  }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    return {
      title: "Produkt ej hittad | El & Hem",
    };
  }

  const keywords = [
    product.name,
    "Sage",
    "Espressomaskin",
    "Kaffemaskin",
    "Barista",
    "Espresso Machine",
    "Specialkaffe",
    "Hemmabarista",
    "Sage Barista Touch Impress",
  ];

  return {
    title: `${product.name} - Barista Espressomaskin | El & Hem`,
    description: `Köp ${product.name} från Sage hos El & Hem. En premium barista espressomaskin för hemmabruk. ${product.description.substring(0, 150)}...`,
    keywords: keywords,
    openGraph: {
      title: `${product.name} - Barista Espressomaskin`,
      description: product.description,
      images: [product.image],
      type: "website",
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description,
    sku: product.id,
    brand: {
      "@type": "Brand",
      name: "Sage",
    },
    offers: {
      "@type": "Offer",
      url: `https://elochhem.se/product/${product.id}`,
      priceCurrency: "SEK",
      price: product.price,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "48",
    },
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100,
  );

  return (
    <div className="min-h-screen pt-10 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto px-4 sm:px-6">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-stone-500 transition-colors hover:text-amber-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Tillbaka till butiken
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image Section */}
          <div className="relative">
            <div className="absolute top-4 right-4 z-10 rounded-full bg-amber-600 px-3 py-1 text-sm font-bold text-white shadow-sm">
              -{discount}%
            </div>
            <ProductImageGallery
              images={product.images || [product.image]}
              name={product.name}
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-center">
            <div className="mb-2 text-sm font-medium tracking-wider text-amber-600 uppercase">
              {product.category === "machine" ? "Espressomaskin" : "Kaffebönor"}
            </div>

            <h1 className="mb-4 font-serif text-4xl font-bold text-stone-900 sm:text-5xl">
              {product.name}
            </h1>

            <div className="mb-6 flex items-center gap-4">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="text-sm text-stone-500">(48 recensioner)</span>
            </div>

            <div className="mb-8 flex items-baseline gap-4 border-b border-stone-200 pb-8">
              <span className="font-serif text-4xl font-bold text-stone-900">
                {product.price}:-
              </span>
              <span className="text-xl text-stone-500 line-through">
                {product.originalPrice}:-
              </span>
            </div>

            <p className="mb-8 text-lg leading-relaxed text-stone-600">
              {product.description}
            </p>

            <div className="mb-8 space-y-3">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-stone-600">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-100 text-amber-600">
                    <Check className="h-4 w-4" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <AddToCartButton product={product} />
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-stone-500">
              <Truck className="h-5 w-5" />
              <span>
                Fri frakt och snabba leveranser inom Sverige (1-3 dagar).
              </span>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 border-t border-stone-200 pt-16">
            <h2 className="mb-12 font-serif text-3xl font-bold text-stone-900">
              Du kanske också gillar
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

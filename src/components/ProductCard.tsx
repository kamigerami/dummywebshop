import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';
import { Plus } from 'lucide-react';

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-xl bg-white border border-stone-200 transition-all hover:border-amber-400 hover:shadow-xl hover:shadow-amber-900/5">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
                <div className="absolute right-3 top-3 z-10 rounded-full bg-amber-600 px-2 py-1 text-xs font-bold text-white">
                    -{discount}%
                </div>
                <Image
                    src={product.image} // Using the external Unsplash URL
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-xs font-medium uppercase tracking-wider text-amber-600">
                    {product.category === 'machine' ? 'Espressomaskin' : 'Kaffebönor'}
                </div>
                <h3 className="mb-2 text-lg font-bold text-stone-900 line-clamp-2 leading-tight">
                    <Link href={`/product/${product.id}`} className="hover:text-amber-600 transition-colors">
                        {product.name}
                    </Link>
                </h3>

                <div className="mt-auto flex items-end justify-between border-t border-stone-100 pt-4">
                    <div className="flex flex-col">
                        <span className="text-xs text-stone-500 line-through">{product.originalPrice}:-</span>
                        <span className="text-xl font-bold text-stone-900 font-serif">{product.price}:-</span>
                    </div>

                    <Link
                        href={`/product/${product.id}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-100 text-stone-600 transition-colors hover:bg-amber-600 hover:text-white"
                    >
                        <Plus className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

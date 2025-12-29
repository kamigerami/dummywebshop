import { HeroSection } from '@/components/HeroSection';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/products';

const HomePage = async () => {
  const machines = products.filter(p => p.category === 'machine');
  const beans = products.filter(p => p.category === 'beans');

  return (
    <div className="pb-20">
      <HeroSection />

      <section id="products" className="container mx-auto px-4 py-20 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold text-stone-900 md:text-4xl">Espressomaskiner</h2>
          <p className="mx-auto max-w-2xl text-stone-600">
            Upptäck vårt sortiment av Sage-maskiner. Från enkla instegsmodeller till fullfjädrade dubbelkokare.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {machines.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section id="beans" className="bg-stone-100 py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-stone-900 md:text-4xl">Kaffebönor</h2>
            <p className="mx-auto max-w-2xl text-stone-600">
              Handplockade bönor rostade till perfektion för espresso.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {beans.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

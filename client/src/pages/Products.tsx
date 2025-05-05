import { Link } from 'wouter';
import { products } from '@/lib/products';

const Products = () => {
  return (
    <section className="py-16 md:py-24 bg-darker">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Nossos Produtos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="product-card bg-card rounded-lg overflow-hidden">
              {product.image ? (
                <div className="aspect-video bg-gray-900 flex items-center justify-center overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className={`aspect-video ${product.imagePlaceholder || 'bg-gray-800'}`}></div>
              )}
              <div className="p-5">
                <h3 className="text-primary text-lg font-semibold">{product.title}</h3>
                <p className="text-sm text-gray-400">{product.price}</p>
                <p className="mt-2 text-gray-300">{product.casino}</p>
                <Link 
                  href={`/produto/${product.id}`} 
                  className="block mt-4 text-center text-primary hover:underline"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

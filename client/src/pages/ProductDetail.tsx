import { useParams } from 'wouter';
import { useEffect } from 'react';
import { getProductById } from '@/lib/products';

const ProductDetail = () => {
  const { id } = useParams();
  const productId = parseInt(id || '0');
  const product = getProductById(productId);

  // Function to handle buy button click with specific product
  const handleBuyClick = () => {
    if (product) {
      window.location.href = `https://wa.me/351936880192?text=Olá! Tenho interesse no produto: ${product.title} do casino ${product.casino}`;
    }
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h2 className="text-2xl font-bold">Produto não encontrado</h2>
          <p className="mt-4">O produto que você está procurando não existe.</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-darker">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            {product.image ? (
              <div className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className={`aspect-square ${product.imagePlaceholder || 'bg-card'} rounded-lg`}></div>
            )}
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-primary mb-2">{product.title}</h2>
            <p className="text-xl mb-2">{product.price}</p>
            <div className="my-6">
              <p className="text-gray-300">{product.description}</p>
            </div>
            <button 
              onClick={handleBuyClick}
              className="inline-block btn-neon py-3 px-12 rounded-full text-center"
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

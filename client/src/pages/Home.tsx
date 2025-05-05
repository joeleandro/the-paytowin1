import { Link } from 'wouter';
import GridBackground from '@/components/GridBackground';

const Home = () => {
  // Function to handle buy button click
  const handleBuyClick = () => {
    window.location.href = "https://wa.me/?text=Olá! Tenho interesse no CassinoBot!";
  };

  return (
    <GridBackground className="min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            O Futuro das Apostas automatizadas com IA
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-300">
            Conheça o CassinoBot — a IA avançada que joga por você, 
            executa estratégias de apostas automaticamente e maximiza sua banca com precisão.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <button 
              onClick={handleBuyClick}
              className="btn-neon py-3 px-8 rounded-full text-center"
            >
              Comprar
            </button>
            <Link href="/produtos" className="btn-outline py-3 px-8 rounded-full text-center">
              Saber Mais
            </Link>
          </div>
        </div>
      </div>
    </GridBackground>
  );
};

export default Home;

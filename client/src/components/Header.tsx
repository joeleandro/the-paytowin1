import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => {
    return location === path;
  };

  useEffect(() => {
    // Close mobile menu when location changes
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-50 bg-black/40 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center relative">
          {/* Logo à esquerda */}
          <div className="w-1/4">
            <Link href="/" className="text-xl font-poppins font-bold text-white">
              CassinoBot
            </Link>
          </div>
          
          {/* Menu de navegação no centro */}
          <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
            <Link 
              href="/produtos" 
              className={`nav-link text-white hover:text-primary ${isActive('/produtos') ? 'active' : ''}`}
            >
              Produtos
            </Link>
            <Link 
              href="/" 
              className={`nav-link text-white hover:text-primary ${isActive('/') ? 'active' : ''}`}
            >
              Inicio
            </Link>
            <Link 
              href="/sobre" 
              className={`nav-link text-white hover:text-primary ${isActive('/sobre') ? 'active' : ''}`}
            >
              Sobre nos
            </Link>
          </nav>
          
          {/* Contatos à direita */}
          <div className="w-1/4 flex justify-end">
            <Link 
              href="/contatos" 
              className="bg-primary text-primary-foreground py-2 px-5 rounded-full font-medium hover:shadow-lg transition"
            >
              Contatos
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden absolute right-0 text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-darker px-4 py-3 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-4 max-w-6xl mx-auto">
          <Link 
            href="/produtos" 
            className="text-white py-2"
          >
            Produtos
          </Link>
          <Link 
            href="/" 
            className="text-white py-2"
          >
            Inicio
          </Link>
          <Link 
            href="/sobre" 
            className="text-white py-2"
          >
            Sobre nos
          </Link>
          <Link 
            href="/contatos" 
            className="bg-primary text-primary-foreground py-2 px-4 rounded-full text-center font-medium"
          >
            Contatos
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

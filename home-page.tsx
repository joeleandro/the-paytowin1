import { Link } from "wouter";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a]">
      <Header />
      <main className="flex-grow">
        {/* Hero Section - Exatamente como mostrado na imagem */}
        <section className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-20 bg-grid">
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight">
              O Futuro das Apostas<br /> automatizadas com IA
            </h1>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto mb-10">
              Conheça o CassinoBot – a IA avançada que joga por você,<br />executa estratégias de apostas automaticamente e maximiza sua banca com precisão.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/produtos">
                <button className="comprar-button">Comprar</button>
              </Link>
              <Link href="/sobre">
                <button className="border border-white rounded-full px-8 py-2 text-white hover:bg-white/10 transition-colors">
                  Saber Mais
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

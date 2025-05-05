import GridBackground from '@/components/GridBackground';

const About = () => {
  return (
    <GridBackground className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="inline-block border border-primary rounded-full px-6 py-1 text-sm font-medium text-primary mb-6">
              Missão
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nós</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Somos especialistas em automação para apostas online. Oferecemos bots 
                exclusivos que funcionam com diversos cassinos em Angola e Portugal. 
                Nossos sistemas cobrem diferentes tipos de jogos e estratégias, 
                garantindo praticidade, desempenho e maior controle nas suas sessões de jogo.
              </p>
              <p>
                Seja para iniciantes ou apostadores avançados, temos a solução certa para você.
              </p>
            </div>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <div className="aspect-square bg-card rounded-lg"></div>
            <div className="aspect-square bg-card rounded-lg"></div>
            <div className="col-span-2 aspect-video bg-card rounded-lg"></div>
          </div>
        </div>
      </div>
    </GridBackground>
  );
};

export default About;

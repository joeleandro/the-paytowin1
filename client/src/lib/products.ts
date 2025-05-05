export interface Product {
  id: number;
  title: string;
  price: string;
  shortDescription: string; // For card display
  description: string;
  casino: string;
  imagePlaceholder?: string; // Color for placeholder
  image?: string; // P
}

// Product database - these are all the products in our system
// To add more products, simply add a new product object to this array
export const products: Product[] = [
  {
    id: 1,
    title: 'CassinoBot Standard',
    price: '€79,90',
    shortDescription: 'Bot básico para automação de apostas',
    description: 'Nossa solução básica de automação para apostas online. Funciona com os principais cassinos de Angola e Portugal. Ideal para iniciantes que desejam experimentar a automação de apostas.',
    casino: 'Múltiplos Cassinos',
    imagePlaceholder: 'bg-gray-700',
    image: 'https://media.discordapp.net/attachments/1368760752961486949/1368760777653358703/b1.png?ex=6819654f&is=681813cf&hm=6c90030c7b6adc99891adff34c9e5b12fcb49212415ba71edea275b90b2a9c7c&=&format=webp&quality=lossless&width=300&height=400'
  },
  {
    id: 2,
    title: 'Roleta Automatizada',
    price: '€99,90',
    shortDescription: 'Especializado em jogos de roleta',
    description: 'Bot especializado em jogos de roleta. Utiliza algoritmos avançados para identificar padrões e aplicar estratégias de apostas automaticamente. Compatível com Casino Euro e outros cassinos populares.',
    casino: 'Casino Euro',
    imagePlaceholder: 'bg-gray-700'
  },
  {
    id: 3,
    title: 'Bacará Inteligente',
    price: '€149,90',
    shortDescription: 'Sistema premium para jogos de Bacará',
    description: 'Nossa solução premium para jogos de Bacará. Utiliza inteligência artificial para analisar partidas e tomar decisões com base em probabilidades. Oferece maior controle e customização de estratégias.',
    casino: 'Casino Portugal',
    imagePlaceholder: 'bg-gray-900'
  }
];

// Function to get a product by ID
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

// Documentation for adding new products
/*
DOCUMENTAÇÃO: COMO ADICIONAR NOVOS PRODUTOS

Para adicionar um novo produto ao sistema, siga os passos abaixo:

1. Abra o arquivo src/lib/products.ts
2. Adicione um novo objeto ao array 'products' seguindo o formato:

{
  id: 4, // Use um ID único, geralmente o próximo número na sequência
  title: 'Nome do Produto',
  price: '€XX,XX', // Preço formatado como string
  shortDescription: 'Breve descrição para o card',
  description: 'Descrição detalhada do produto que aparecerá na página de detalhes.',
  casino: 'Nome do Casino compatível',
  imagePlaceholder: 'bg-gray-800' // Cor de fundo para o placeholder
}

3. Salve o arquivo e o produto estará disponível automaticamente em todas as páginas do site.

Observações:
- Mantenha IDs únicos para cada produto
- A página de produtos e a página de detalhes usarão automaticamente as informações do produto
- O botão "Comprar" redirecionará para o WhatsApp com o nome do produto incluído na mensagem
*/

# CassinoBot

Um site em português para CassinoBot - um sistema de apostas automatizado com IA, direcionado aos mercados de Angola e Portugal, com botão de compra que redireciona para WhatsApp.

## Funcionalidades

- Interface com tema escuro e botões neon verdes
- Listagem de produtos (bots de apostas)
- Páginas informativas (Sobre nós, Contato)
- Redirecionamento para WhatsApp para compra
- Design responsivo para todos os dispositivos

## Tecnologias

- React
- Vite
- TypeScript
- Tailwind CSS
- Express (backend)

## Como adicionar novos produtos

Para adicionar um novo produto ao sistema, edite o arquivo `src/lib/products.ts` e adicione um novo objeto ao array 'products' seguindo o formato:

```typescript
{
  id: 4, // Use um ID único, geralmente o próximo número na sequência
  title: 'Nome do Produto',
  price: '€XX,XX', // Preço formatado como string
  shortDescription: 'Breve descrição para o card',
  description: 'Descrição detalhada do produto que aparecerá na página de detalhes.',
  casino: 'Nome do Casino compatível',
  imagePlaceholder: 'bg-gray-800' // Cor de fundo para o placeholder
}
```

## Instalação e Execução

```bash
npm install
npm run dev
```

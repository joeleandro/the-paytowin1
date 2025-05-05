import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.name || !formData.email || !formData.whatsapp || !formData.message) {
      toast({
        title: "Erro no formulário",
        description: "Por favor, preencha todos os campos do formulário.",
        variant: "destructive"
      });
      return;
    }
    
    // Here you would typically submit the form data to your backend
    // For now, we'll just show a success message
    toast({
      title: "Mensagem enviada!",
      description: "Agradecemos seu contato. Responderemos em breve!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      whatsapp: '',
      message: ''
    });
  };

  return (
    <section className="py-16 md:py-24 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Entre em Contato</h2>
        
        <div className="max-w-lg mx-auto bg-card rounded-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">Nome</label>
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 bg-dark border border-gray-700 rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-dark border border-gray-700 rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="whatsapp" className="block mb-2 text-sm font-medium">WhatsApp</label>
              <input 
                type="tel" 
                id="whatsapp" 
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full p-3 bg-dark border border-gray-700 rounded-lg focus:ring-primary focus:border-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">Mensagem</label>
              <textarea 
                id="message" 
                rows={4} 
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 bg-dark border border-gray-700 rounded-lg focus:ring-primary focus:border-primary"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full btn-neon py-3 px-6 rounded-full text-center"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

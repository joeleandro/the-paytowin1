import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes with /api prefix
  
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Parse and validate request body
      const contactData = insertContactSchema.extend({
        // Add additional validation if needed
        email: z.string().email("Email inválido"),
        whatsapp: z.string().min(9, "Número de WhatsApp inválido"),
      }).parse(req.body);
      
      // Store the contact in database with timestamp
      const contact = await storage.createContact({
        ...contactData,
        createdAt: Math.floor(Date.now() / 1000),
      });
      
      res.status(201).json({ 
        message: "Mensagem enviada com sucesso!", 
        id: contact.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Erro de validação", 
          errors: error.errors 
        });
      } else {
        console.error("Contact error:", error);
        res.status(500).json({ message: "Erro ao processar a solicitação" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

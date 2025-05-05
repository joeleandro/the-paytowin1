import { pgTable, text, serial, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Product schema
export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  price: text("price").notNull(),
  shortDescription: text("short_description").notNull(),
  description: text("description").notNull(),
  casino: text("casino").notNull(),
  imagePlaceholder: text("image_placeholder"),
});

export const insertProductSchema = createInsertSchema(products).pick({
  title: true,
  price: true,
  shortDescription: true,
  description: true,
  casino: true,
  imagePlaceholder: true,
});

// Contact schema
export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  whatsapp: text("whatsapp").notNull(),
  message: text("message").notNull(),
  createdAt: integer("created_at").notNull(),
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  whatsapp: true,
  message: true,
});

// Keep the existing users schema for compatibility
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

// Type exports
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

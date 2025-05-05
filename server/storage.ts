import { 
  users, type User, type InsertUser,
  contacts, type Contact, type InsertContact 
} from "@shared/schema";

// Interface with all CRUD methods needed
export interface IStorage {
  // User methods (kept for compatibility)
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact methods
  createContact(contact: InsertContact & { createdAt: number }): Promise<Contact>;
  getContact(id: number): Promise<Contact | undefined>;
  getContacts(): Promise<Contact[]>;
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, Contact>;
  private userCurrentId: number;
  private contactCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.userCurrentId = 1;
    this.contactCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact methods
  async createContact(contactData: InsertContact & { createdAt: number }): Promise<Contact> {
    const id = this.contactCurrentId++;
    const contact: Contact = { ...contactData, id };
    this.contacts.set(id, contact);
    return contact;
  }
  
  async getContact(id: number): Promise<Contact | undefined> {
    return this.contacts.get(id);
  }
  
  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }
}

export const storage = new MemStorage();

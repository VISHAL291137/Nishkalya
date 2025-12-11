export interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  date: string;
}

const STORAGE_KEYS = {
  MESSAGES: 'nishkalya_messages',
  AUTH: 'nishkalya_auth'
};

// Simulate server delay for realism
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const backend = {
  async sendMessage(data: { name: string; email: string; message: string }) {
    await delay(1000); // Simulate network request
    
    if (!data.name || !data.email || !data.message) {
      throw new Error("All fields are required.");
    }

    const newMessage: Message = {
      id: Date.now().toString(),
      ...data,
      date: new Date().toISOString()
    };

    // "Server-side" storage
    const messages = JSON.parse(localStorage.getItem(STORAGE_KEYS.MESSAGES) || '[]');
    messages.unshift(newMessage);
    localStorage.setItem(STORAGE_KEYS.MESSAGES, JSON.stringify(messages));

    return { success: true };
  },

  async login(password: string) {
    await delay(800);
    // Simple hardcoded authentication check
    if (password === 'admin123') {
      localStorage.setItem(STORAGE_KEYS.AUTH, 'true');
      return { success: true };
    }
    return { success: false, error: "Invalid Access Key" };
  },

  logout() {
    localStorage.removeItem(STORAGE_KEYS.AUTH);
    window.location.hash = '#/';
    window.location.reload();
  },

  isAuthenticated() {
    return localStorage.getItem(STORAGE_KEYS.AUTH) === 'true';
  },

  async getMessages() {
    await delay(500);
    if (!this.isAuthenticated()) {
      throw new Error("Unauthorized Access");
    }
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.MESSAGES) || '[]') as Message[];
  },
  
  async clearMessages() {
      if (!this.isAuthenticated()) return;
      localStorage.removeItem(STORAGE_KEYS.MESSAGES);
      return { success: true };
  }
};
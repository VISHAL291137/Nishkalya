import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { backend } from '../../services/backend';
import { Send, Loader2, CheckCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await backend.sendMessage(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      // Reset success message after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
  };

  return (
    <Card title="Get in Touch" hasAccentBorder={true} className="max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="md:col-span-2 space-y-4 text-nish-grey text-sm">
          <p className="font-serif text-xl text-nish-brown mb-2">Let's Create Together</p>
          <p>We are currently accepting new projects for Q4 2024.</p>
          <p>Whether you need a complete visual overhaul or a strategic consultation, we are here to help your brand find its stillness and power.</p>
          <div className="pt-4 border-t border-nish-ivory mt-4">
             <p className="uppercase tracking-widest text-xs font-bold mb-1">Email</p>
             <p className="text-nish-brown font-medium">hello@nishkalya.com</p>
          </div>
        </div>

        <div className="md:col-span-3">
          {status === 'success' ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-8 bg-nish-ivory/30 rounded-lg animate-in fade-in">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={32} />
              </div>
              <h3 className="font-serif text-xl text-nish-brown mb-2">Message Sent</h3>
              <p className="text-sm text-nish-grey">Thank you for reaching out. We will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-nish-grey mb-1">Name</label>
                <input 
                  required
                  type="text" 
                  className="w-full px-4 py-3 bg-nish-paper border border-nish-ivory rounded-md focus:outline-none focus:border-nish-gold focus:ring-1 focus:ring-nish-gold transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-nish-grey mb-1">Email</label>
                <input 
                  required
                  type="email" 
                  className="w-full px-4 py-3 bg-nish-paper border border-nish-ivory rounded-md focus:outline-none focus:border-nish-gold focus:ring-1 focus:ring-nish-gold transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-nish-grey mb-1">Message</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-nish-paper border border-nish-ivory rounded-md focus:outline-none focus:border-nish-gold focus:ring-1 focus:ring-nish-gold transition-all resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Tell us about your project..."
                />
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-xs">{errorMessage}</p>
              )}

              <Button type="submit" variant="primary" fullWidth disabled={status === 'loading'}>
                {status === 'loading' ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="animate-spin w-4 h-4" /> Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </Card>
  );
};
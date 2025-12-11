import React, { useState, useEffect } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { backend, Message } from '../../services/backend';
import { Lock, LogOut, RefreshCw, Trash2, Mail } from 'lucide-react';

export const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(backend.isAuthenticated());
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    if (isAuthenticated) {
      loadMessages();
    }
  }, [isAuthenticated]);

  const loadMessages = async () => {
    setLoading(true);
    try {
      const data = await backend.getMessages();
      setMessages(data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    const result = await backend.login(password);
    if (result.success) {
      setIsAuthenticated(true);
    } else {
      setError(result.error || 'Login failed');
    }
    setLoading(false);
  };

  const handleLogout = () => {
    backend.logout();
    setIsAuthenticated(false);
  };
  
  const handleClear = async () => {
      if(window.confirm("Are you sure you want to delete all messages?")) {
          await backend.clearMessages();
          loadMessages();
      }
  }

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto mt-12">
        <Card title="Admin Access" className="text-center">
          <div className="w-16 h-16 bg-nish-ivory rounded-full flex items-center justify-center mx-auto mb-6">
            <Lock className="text-nish-brown w-8 h-8" />
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Access Key"
              className="w-full px-4 py-3 border border-nish-ivory rounded text-center focus:border-nish-gold focus:outline-none"
            />
            {error && <p className="text-red-500 text-xs">{error}</p>}
            <Button fullWidth disabled={loading}>
              {loading ? 'Verifying...' : 'Login'}
            </Button>
            <p className="text-xs text-nish-grey mt-4">Hint: Use 'admin123' for demo</p>
          </form>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in">
      <div className="flex justify-between items-center">
        <h2 className="font-serif text-3xl text-nish-brown">Dashboard</h2>
        <Button variant="outline" onClick={handleLogout} className="flex items-center gap-2 text-xs">
          <LogOut size={14} /> Logout
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-nish-ivory">
          <p className="text-nish-grey text-xs uppercase tracking-wider">Total Inquiries</p>
          <p className="text-4xl font-serif text-nish-brown mt-2">{messages.length}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-nish-ivory">
          <p className="text-nish-grey text-xs uppercase tracking-wider">Unread</p>
          <p className="text-4xl font-serif text-nish-gold mt-2">{messages.length > 0 ? '1' : '0'}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-nish-ivory flex flex-col justify-center items-center">
           <p className="text-nish-grey text-xs mb-2">System Status</p>
           <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             Backend Online
           </div>
        </div>
      </div>

      <Card title="Messages" headerAction={
          <div className="flex gap-2">
            <button onClick={loadMessages} className="p-2 hover:bg-nish-ivory rounded transition-colors text-nish-brown">
                <RefreshCw size={18} className={loading ? 'animate-spin' : ''} />
            </button>
             <button onClick={handleClear} className="p-2 hover:bg-red-50 rounded transition-colors text-red-400 hover:text-red-600">
                <Trash2 size={18} />
            </button>
          </div>
      }>
        {messages.length === 0 ? (
          <div className="text-center py-12 text-nish-grey">
            <Mail className="w-12 h-12 mx-auto mb-4 opacity-20" />
            <p>No messages yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-nish-ivory/50 text-nish-brown uppercase text-xs tracking-wider font-bold">
                <tr>
                  <th className="p-4 rounded-tl-lg">Date</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Email</th>
                  <th className="p-4 rounded-tr-lg">Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-nish-ivory">
                {messages.map((msg) => (
                  <tr key={msg.id} className="hover:bg-nish-paper transition-colors">
                    <td className="p-4 text-nish-grey whitespace-nowrap">
                      {new Date(msg.date).toLocaleDateString()}
                    </td>
                    <td className="p-4 font-medium text-nish-brown">{msg.name}</td>
                    <td className="p-4 text-nish-gold">{msg.email}</td>
                    <td className="p-4 text-nish-grey max-w-md truncate" title={msg.message}>
                      {msg.message}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
};
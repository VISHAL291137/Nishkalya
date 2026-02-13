import React, { useState } from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { generateCreativeConcept } from '../services/geminiService';
import { Sparkles, Loader2 } from 'lucide-react';

export const AIConceptGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    setError('');
    if (!topic.trim()) {
      setError('Please enter a brand topic to get started.');
      return;
    }
    if (topic.trim().length < 3) {
      setError('Topic should be at least 3 characters long.');
      return;
    }
    setLoading(true);
    setResult('');
    const concept = await generateCreativeConcept(topic);
    setResult(concept);
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !loading && topic.trim()) {
      handleGenerate();
    }
  };

  return (
    <Card title="AI Muse" hasAccentBorder={true} className="border-l-nish-brown bg-gradient-to-r from-white to-nish-ivory/20">
      <div className="space-y-6">
        <p className="text-sm text-nish-brown/80 font-serif italic border-l-2 border-nish-gold pl-4">
          "Stuck on a brand identity? Let our AI suggest a mood and direction."
        </p>

        <div className="flex gap-3">
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="e.g., Organic Coffee Shop, Ceramic Studio..."
            disabled={loading}
            className="flex-1 px-4 py-3 border border-nish-grey/30 rounded-md focus:outline-none focus:border-nish-gold bg-white text-nish-brown font-body text-sm shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
          />
          <Button onClick={handleGenerate} disabled={loading} variant="primary" className="!rounded-md whitespace-nowrap">
            {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
          </Button>
        </div>

        {error && (
          <div className="p-4 bg-nish-brown/5 border border-nish-brown/20 rounded-md text-sm text-nish-brown/80">
            {error}
          </div>
        )}

        {loading && (
          <div className="p-6 bg-white rounded-md border border-nish-ivory shadow-inner animate-pulse">
            <div className="flex items-center gap-2 mb-4">
              <Loader2 className="animate-spin w-4 h-4 text-nish-gold" />
              <p className="text-sm text-nish-brown/70 font-serif italic">The muse is thinking...</p>
            </div>
            <div className="space-y-3">
              <div className="h-3 bg-nish-ivory rounded w-3/4"></div>
              <div className="h-3 bg-nish-ivory rounded w-full"></div>
              <div className="h-3 bg-nish-ivory rounded w-5/6"></div>
            </div>
          </div>
        )}

        {result && !loading && (
          <div className="mt-6 p-6 bg-white rounded-md border border-nish-ivory shadow-inner animate-in fade-in slide-in-from-bottom-2">
            <h3 className="font-serif font-bold text-nish-brown mb-3 text-lg border-b border-nish-ivory pb-2">The Concept</h3>
            <div className="text-sm text-nish-brown/90 whitespace-pre-line leading-relaxed font-body">
              {result}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};
import React, { useState } from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { generateCreativeConcept } from '../services/geminiService';
import { Sparkles, Loader2 } from 'lucide-react';

export const AIConceptGenerator: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic.trim()) return;
    setLoading(true);
    const concept = await generateCreativeConcept(topic);
    setResult(concept);
    setLoading(false);
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
            placeholder="e.g., Organic Coffee Shop, Ceramic Studio..."
            className="flex-1 px-4 py-3 border border-nish-grey/30 rounded-md focus:outline-none focus:border-nish-gold bg-white text-nish-brown font-body text-sm shadow-sm"
          />
          <Button onClick={handleGenerate} disabled={loading} variant="primary" className="!rounded-md">
            {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
          </Button>
        </div>

        {result && (
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
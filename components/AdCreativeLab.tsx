import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Image as ImageIcon, Copy, Sparkles, Loader2, Megaphone } from 'lucide-react';

const AdCreativeLab: React.FC = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const adPrompt = "A high-end modern luxury home exterior at twilight with glowing windows. Overlaid is a sleek, translucent 3D glass smartphone showing a 'Calendar Appointment Booked' notification. Cinematic lighting, professional architectural photography style, vibrant corporate blue accents (#2563EB), clean and minimal, 8k resolution, ultra-realistic.";

  const generateAdImage = async () => {
    setLoading(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: adPrompt }],
        },
        config: {
          imageConfig: {
            aspectRatio: "1:1"
          }
        },
      });

      for (const part of response.candidates[0].content.parts) {
        if (part.inlineData) {
          const base64Data = part.inlineData.data;
          setImageUrl(`data:image/png;base64,${base64Data}`);
          break;
        }
      }
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  const copyPrompt = () => {
    navigator.clipboard.writeText(adPrompt);
    alert("Prompt copied to clipboard!");
  };

  return (
    <section id="ad-lab" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-6">
              <Megaphone className="w-4 h-4 mr-2" />
              Marketing Assets
            </div>
            <h2 className="text-4xl sm:text-5xl font-black mb-6 leading-tight">
              Launch Your Ads <br />
              <span className="text-blue-500">In Seconds</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 max-w-xl">
              Don't spend thousands on designers. Use our proprietary AI prompt to generate high-converting ad backgrounds that stop the scroll.
            </p>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Master Prompt</span>
                <button 
                  onClick={copyPrompt}
                  className="flex items-center text-blue-400 hover:text-blue-300 text-xs font-bold transition-colors"
                >
                  <Copy className="w-3 h-3 mr-1" /> Copy Prompt
                </button>
              </div>
              <p className="text-sm text-slate-300 italic leading-relaxed">
                "{adPrompt}"
              </p>
            </div>

            <button 
              onClick={generateAdImage}
              disabled={loading}
              className="btn-blue px-8 py-4 rounded-xl text-white font-bold flex items-center justify-center mx-auto lg:mx-0 disabled:opacity-50"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Generating Visual...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Generate Ad Background
                </>
              )}
            </button>
          </div>

          <div className="flex-1 w-full max-w-md">
            <div className="relative aspect-square bg-slate-800 rounded-[2.5rem] border-4 border-slate-700 overflow-hidden shadow-2xl">
              {imageUrl ? (
                <div className="relative h-full w-full group">
                  <img src={imageUrl} alt="AI Generated Ad" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                    <p className="text-white font-black text-2xl mb-2 leading-none uppercase">Get 7 Listing Appointments</p>
                    <p className="text-blue-400 font-bold text-lg">Guaranteed in 90 Days</p>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                  <ImageIcon className="w-16 h-16 text-slate-600 mb-4" />
                  <p className="text-slate-500 font-medium">Click generate to see your future ad creative appear here.</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AdCreativeLab;
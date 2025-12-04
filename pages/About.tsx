
import React from 'react';
import { MEDIA } from '../lib/media';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-serif text-brand-charcoal mb-12 text-center">
          The Soul of the South
        </h1>
        
        <div className="aspect-video w-full mb-16 overflow-hidden">
             <ImageWithFallback 
               src={MEDIA.images.sections.aboutHero} 
               alt="Weavers" 
               className="w-full h-full object-cover" 
             />
        </div>

        <div className="space-y-8 text-lg text-brand-earth leading-loose font-light">
          <p>
            <span className="text-brand-charcoal font-medium">Dhupa</span> (Incense) represents the lingering essence of tradition. 
            Born in the coastal town of Fort Kochi, our label is a love letter to the handloom heritage of Kerala.
          </p>
          <p>
            In a world of fast fashion, we choose the rhythm of the loom. Our Kasavu sarees are woven in Balaramapuram, 
            our linens are treated with natural dyes extracted from Ayurvedic herbs and coconut husks, and our 
            silhouettes are inspired by the unstitched elegance of the Mundu.
          </p>
          <p>
            We believe in "Quiet Luxury"—luxury that doesn't shout, but whispers through the crisp texture of 
            starch-free cotton and the subtle sheen of pure zari.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
          <div className="bg-white p-8 border border-brand-earth/10">
            <h3 className="text-xl font-serif mb-4 text-brand-charcoal">Sustainable at Heart</h3>
            <p className="text-sm text-brand-earth leading-relaxed">
              We operate on a made-to-order and small-batch model to minimize waste. 
              Our packaging is 100% plastic-free, utilizing reusable cotton dust bags.
            </p>
          </div>
          <div className="bg-white p-8 border border-brand-earth/10">
            <h3 className="text-xl font-serif mb-4 text-brand-charcoal">Artisan First</h3>
            <p className="text-sm text-brand-earth leading-relaxed">
              Every purchase directly supports our weaver communities in Trivandrum and Chendamangalam, 
              ensuring fair wages and the preservation of weaving techniques.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

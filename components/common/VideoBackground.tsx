
import React, { useState } from 'react';
import { ImageWithFallback } from './ImageWithFallback';

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  className?: string;
  overlayOpacity?: number;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  src, 
  poster, 
  className = '',
  overlayOpacity = 0.2
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      
      {/* 1. Static Poster (Always visible as base layer) */}
      {poster && (
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src={poster} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      {/* 2. Video Layer (Fades in over poster) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover z-10 transition-opacity duration-[1.5s] ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src={src} type="video/mp4" />
      </video>
      
      {/* 3. Gradient/Color Overlay (For text readability) */}
      <div 
        className="absolute inset-0 z-20 bg-brand-charcoal transition-opacity duration-1000 pointer-events-none" 
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
};

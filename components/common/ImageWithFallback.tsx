
import React, { useState, useEffect, useRef } from 'react';
import { BRAND_NAME } from '../../constants';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ 
  src, 
  alt, 
  className,
  ...props 
}) => {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setStatus('loading');
    setHasError(false);
  }, [src]);

  // Check if image is already cached by browser
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setStatus('loaded');
    }
  }, []);

  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setStatus('loaded');
  };

  const handleError = () => {
    setStatus('error');
    setHasError(true);
  };

  return (
    <div className={`relative overflow-hidden bg-brand-sand/20 ${className}`}>
      
      {/* 1. The Image */}
      {!hasError && (
        <img
          {...props}
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`relative z-10 w-full h-full object-cover transition-all duration-[1.2s] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            status === 'loaded' ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-105 blur-sm'
          } ${className}`}
        />
      )}

      {/* 2. Premium Loading Shimmer (Skeleton) */}
      {status === 'loading' && (
        <div className="absolute inset-0 z-0 bg-brand-sand/10">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-brand-ivory/40 to-transparent"></div>
        </div>
      )}

      {/* 3. On-Brand Error Fallback (No external requests) */}
      {status === 'error' && (
        <div className="absolute inset-0 z-0 flex flex-col items-center justify-center bg-brand-sand/30 p-4 text-center">
          <span className="font-serif text-brand-charcoal/20 text-4xl italic tracking-widest select-none">
            {BRAND_NAME.slice(0, 1)}
          </span>
          <span className="mt-2 text-[8px] uppercase tracking-[0.3em] text-brand-charcoal/40 font-light">
            Image Unavailable
          </span>
        </div>
      )}
    </div>
  );
};

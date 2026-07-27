import React from 'react';
import { Link } from 'react-router-dom';
import { MEDIA } from '../lib/media';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const Contact: React.FC = () => {
  return (
    <div className="pt-24 pb-24 bg-brand-ivory min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-brand-earth mb-6">Contact</p>
            <h1 className="text-5xl md:text-6xl font-serif text-brand-charcoal leading-tight mb-6">
              Dhupa
            </h1>
            <p className="text-lg leading-relaxed text-brand-earth font-light max-w-3xl">
              Designer clothing store in Kerala.
            </p>
          </div>

          <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
            <ImageWithFallback
              src="/Dhupa%20Logo.png"
              alt="Dhupa logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-10 border border-brand-charcoal/10 shadow-sm">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-brand-charcoal/70 mb-2">Website</p>
                <a href="https://www.instagram.com/dhupa.in?igsh=Nzh1amQ5dWt6eWVp" target="_blank" rel="noreferrer" className="text-brand-charcoal font-semibold hover:text-brand-gold block">
                  Instagram
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-brand-charcoal/70 mb-2">Address</p>
                <a href="https://www.google.com/search?safe=active&sca_esv=e6a29cf1639526a4&rlz=1C1CHBF_enIN1128IN1128&sxsrf=APpeQnu7DzFNPmQGtTZia687kFMVC44PdA:1785152909999&q=dhupa+kochi+address&ludocid=14002029688364751061&sa=X&ved=2ahUKEwi7wsfo5PKVAxW0U2wGHQ6qFSwQ6BN6BAgwEAI" target="_blank" rel="noreferrer" className="text-brand-charcoal font-medium hover:text-brand-gold block">
                  Therummail Lake View, ERA 19, Sunoro Church Ln, Kadavanthra P.O, Elamkulam, Kochi, Ernakulam, Kerala 682020
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-brand-charcoal/70 mb-2">Phone</p>
                <a href="tel:+918139062588" className="text-brand-charcoal font-semibold hover:text-brand-gold block">
                  +91 81390 62588
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-brand-charcoal/70 mb-2">Hours</p>
                <p className="text-brand-charcoal font-medium">10:00 AM – 5:00 PM</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-10 border border-brand-charcoal/10 shadow-sm">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-brand-charcoal/70 mb-2">Reviews</p>
                <a href="https://www.google.com/search?safe=active&sca_esv=e6a29cf1639526a4&rlz=1C1CHBF_enIN1128IN1128&sxsrf=APpeQnu7DzFNPmQGtTZia687kFMVC44PdA:1785152909999&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_37bslaXhznYE-RpuTmVPYxj8Jh4tM82OWNrKVllCjU2fEjpcS8u0qawjtYLf33X3tnzkO6bsMbPdGODJZdW3qX6e5ur&q=Dhupa+Reviews&sa=X&ved=2ahUKEwi7wsfo5PKVAxW0U2wGHQ6qFSwQ0bkNegQILRAH" target="_blank" rel="noreferrer" className="text-brand-charcoal font-semibold hover:text-brand-gold block">
                  Read Reviews
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-brand-charcoal/70 mb-2">Directions</p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=Therummail+Lake+View%2C+ERA+19%2C+Sunoro+Church+Ln%2C+Kadavanthra+P.O%2C+Elamkulam%2C+Kochi%2C+Ernakulam%2C+Kerala+682020" target="_blank" rel="noreferrer" className="text-brand-charcoal font-semibold hover:text-brand-gold block">
                  View Directions
                </a>
                <div className="mt-4 overflow-hidden rounded-2xl border border-brand-charcoal/10 shadow-sm">
                  <iframe
                    title="Dhupa location map"
                    src="https://www.google.com/maps?q=Therummail+Lake+View%2C+ERA+19%2C+Sunoro+Church+Ln%2C+Kadavanthra+P.O%2C+Elamkulam%2C+Kochi%2C+Ernakulam%2C+Kerala+682020&output=embed"
                    className="h-64 w-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-brand-charcoal/70 mb-2">Share</p>
                <p className="text-brand-charcoal font-medium">Share this store with friends and customers.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <Link to="/" className="text-xs uppercase tracking-[0.35em] text-brand-charcoal font-semibold hover:text-brand-gold">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

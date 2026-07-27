
import React from 'react';
import { MEDIA } from '../lib/media';
import { ImageWithFallback } from '../components/common/ImageWithFallback';

export const About: React.FC = () => {
  return (
    <div className="pt-24 pb-24 bg-brand-ivory min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-brand-earth mb-6">About Dhupa</p>
            <h1 className="text-5xl md:text-6xl font-serif text-brand-charcoal leading-tight mb-6">
              At <span className="text-brand-gold">Dhupa</span>, every creation is a celebration of artistry,
              individuality, and timeless elegance.
            </h1>
            <div className="space-y-6 text-lg leading-relaxed text-brand-earth font-light">
              <p>
                Founded by designer <span className="font-semibold text-brand-charcoal">Merlin Elizabeth</span>,
                the brand is built on a passion for garments that transcend trends and become cherished expressions
                of personal style.
              </p>
              <p>
                From bridal couture and wedding ensembles to sarees, lehengas, kurtas and contemporary ready-to-wear,
                each piece is thoughtfully designed with craftsmanship and refinement at its heart.
              </p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-[0_24px_80px_rgba(0,0,0,0.08)]">
              <ImageWithFallback
                src={MEDIA.images.product.kurtaCover}
                alt="Dhupa signature garment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square overflow-hidden rounded-3xl">
                <ImageWithFallback
                  src={MEDIA.images.product.jewellery}
                  alt="Signature detail"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-3xl">
                <ImageWithFallback
                  src={MEDIA.images.product.kalyaniOne}
                  alt="Kalyani - Lokah Universe"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3">
          <div className="rounded-3xl bg-white p-10 border border-brand-charcoal/10 shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-brand-earth mb-4">Design Philosophy</p>
            <h2 className="text-2xl font-serif text-brand-charcoal mb-4">Threaded Artistry</h2>
            <p className="text-brand-earth leading-relaxed">
              Every design is meticulously crafted to balance beauty, comfort, and sophistication.
              Traditional techniques, fine materials, and modern sensibilities come together for a timeless result.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 border border-brand-charcoal/10 shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-brand-earth mb-4">Signature Belief</p>
            <h2 className="text-2xl font-serif text-brand-charcoal mb-4">Heart in Every Seam</h2>
            <p className="text-brand-earth leading-relaxed">
              Dhupa is guided by the belief that each stitch carries emotion, story and intention. Our garments are
              designed to inspire confidence, grace and lasting memories.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 border border-brand-charcoal/10 shadow-sm">
            <p className="text-sm uppercase tracking-[0.35em] text-brand-earth mb-4">Craft & Experience</p>
            <h2 className="text-2xl font-serif text-brand-charcoal mb-4">Modern Luxury</h2>
            <p className="text-brand-earth leading-relaxed">
              Whether for life’s celebrated moments or everyday elegance, our pieces balance thoughtful craftsmanship
              with a sense of contemporary ease.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-brand-earth text-xl leading-relaxed font-light">
              At the heart of Dhupa lies an unwavering dedication to detail, quality, and storytelling through design.
              We create garments that feel both timeless and relevant.
            </p>
            <div className="space-y-4">
              <p className="text-brand-charcoal font-semibold">A world of thoughtful craftsmanship.</p>
              <p className="text-brand-charcoal font-semibold">A modern take on luxury wear.</p>
              <p className="text-brand-charcoal font-semibold">Enduring style for every moment.</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square overflow-hidden rounded-3xl">
              <ImageWithFallback
                src={MEDIA.images.product.bridalRed}
                alt="Deep red ensemble"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-3xl">
              <ImageWithFallback
                src={MEDIA.images.product.bridalGold}
                alt="Gold detail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square overflow-hidden rounded-3xl lg:col-span-2">
              <ImageWithFallback
                src={MEDIA.images.sections.aboutHero}
                alt="Crafted silhouette"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-20 bg-brand-charcoal text-brand-ivory rounded-3xl p-10 lg:p-14">
          <h2 className="text-3xl font-serif mb-4">Dhupa is more than a fashion label.</h2>
          <p className="text-lg leading-relaxed font-light max-w-3xl">
            It is a world of thoughtful craftsmanship, modern luxury, and enduring style.
          </p>
        </div>
      </div>
    </div>
  );
};

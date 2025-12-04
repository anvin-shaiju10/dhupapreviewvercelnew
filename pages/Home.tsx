
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ProductCard } from '../components/product/ProductCard';
import { PRODUCTS, COLLECTIONS, HOME_CATEGORIES, JOURNAL_POSTS } from '../data/mockProducts';
import { MEDIA } from '../lib/media';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ImageWithFallback } from '../components/common/ImageWithFallback';
import { VideoBackground } from '../components/common/VideoBackground';

export const Home: React.FC = () => {
  const newArrivals = PRODUCTS.filter(p => p.isNewArrival).slice(0, 4);
  const { scrollY } = useScroll();
  
  // Parallax Values
  const yHero = useTransform(scrollY, [0, 800], [0, 300]);
  const yImage1 = useTransform(scrollY, [500, 1500], [50, -50]);
  const yImage2 = useTransform(scrollY, [500, 1500], [-30, 30]);

  return (
    <main className="min-h-screen bg-brand-ivory overflow-hidden">
      
      {/* Hero Section - Video Background */}
      <section className="relative h-screen w-full overflow-hidden bg-brand-charcoal">
        <motion.div style={{ y: yHero }} className="absolute inset-0">
          <VideoBackground 
            src={MEDIA.video.hero}
            poster={MEDIA.images.hero.main}
            className="w-full h-full"
            overlayOpacity={0.3}
          />
        </motion.div>
        
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0, 
                transition: { duration: 1.2, staggerChildren: 0.2, delayChildren: 0.5 } 
              }
            }}
            className="max-w-5xl"
          >
            <motion.span variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="block text-brand-ivory text-xs md:text-sm uppercase tracking-[0.4em] mb-6 drop-shadow-md">
              Est. 2024 • Kerala
            </motion.span>
            
            <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif text-brand-ivory leading-[0.8] mb-12 drop-shadow-2xl opacity-90">
              <span className="block italic font-light tracking-wide">Threaded</span>
              <span className="block font-medium tracking-normal">Artistry</span>
            </h1>

            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="flex justify-center gap-6">
              <Link to="/shop">
                <Button variant="outline" className="border-brand-ivory text-brand-ivory hover:bg-brand-ivory hover:text-brand-charcoal px-10 py-4 text-[11px] tracking-[0.3em]">
                  Enter Boutique
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-32 md:py-48 px-6 md:px-12 bg-brand-ivory relative z-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            {/* Image Composition */}
            <motion.div 
              style={{ y: yImage1 }}
              className="md:w-1/2 relative md:pr-12"
            >
              <div className="aspect-[4/5] overflow-hidden bg-brand-sand/20 shadow-2xl relative z-10">
                 <ImageWithFallback
                  src={MEDIA.images.product.sareeWhite}
                  alt="Craftsmanship" 
                  className="w-full h-full object-cover grayscale-[20%] contrast-125" 
                />
              </div>
              {/* Overlapping Detail Image */}
              <motion.div 
                style={{ y: yImage2 }}
                className="absolute -bottom-12 -right-4 md:-bottom-16 md:-right-10 w-48 h-64 md:w-56 md:h-72 z-30 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-4 border-brand-ivory bg-white"
              >
                <ImageWithFallback
                  src={MEDIA.images.product.details}
                  alt="Detail" 
                  className="w-full h-full object-cover" 
                />
              </motion.div>
            </motion.div>
            
            <div className="md:w-1/2 md:pl-20 mt-16 md:mt-0">
              <motion.h2 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-7xl font-serif text-brand-charcoal leading-[0.9] mb-12"
              >
                Quiet <br/><span className="italic text-brand-gold font-light ml-8">Opulence</span>
              </motion.h2>
              
              <div className="w-24 h-[1px] bg-brand-charcoal mb-12"></div>
              
              <p className="text-brand-earth text-lg md:text-xl font-light leading-relaxed max-w-md mb-12">
                Dhupa redefines Kerala's textile heritage through a lens of contemporary restraint. 
                We strip away the excess to reveal the profound beauty of hand-spun cotton and pure zari.
              </p>
              
              <Link to="/about" className="group inline-flex items-center gap-4 text-xs uppercase tracking-[0.25em] border-b border-brand-charcoal pb-2 hover:text-brand-gold hover:border-brand-gold transition-all duration-500">
                Our Heritage <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: The Atelier (Shop by Category) */}
      <section className="py-24 px-6 md:px-12 bg-white border-t border-brand-charcoal/5">
        <div className="container mx-auto">
          <div className="text-center mb-20">
             <span className="text-brand-gold text-xs uppercase tracking-[0.3em] block mb-4">The Atelier</span>
             <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal">Shop by Category</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOME_CATEGORIES.map((cat, idx) => (
              <Link key={idx} to={cat.link} className="group block relative overflow-hidden aspect-[3/4]">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-700 z-10"></div>
                <ImageWithFallback 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                />
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-6">
                  <h3 className="text-3xl md:text-4xl font-serif text-brand-ivory italic mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">{cat.title}</h3>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Video Break - Craftsmanship */}
      <section className="relative h-[80vh] w-full overflow-hidden">
        <VideoBackground 
          src={MEDIA.video.craftsmanship}
          poster={MEDIA.images.sections.craftsmanshipPoster}
          className="absolute inset-0 w-full h-full grayscale-[20%]"
          overlayOpacity={0.25}
        />
        <div className="absolute inset-0 flex items-center justify-center z-20">
            <h2 className="text-white text-4xl md:text-6xl font-serif italic tracking-wider text-center drop-shadow-xl px-4">
              "Woven by hands, <br/> worn by souls."
            </h2>
        </div>
      </section>

      {/* Marquee Separator */}
      <div className="border-y border-brand-charcoal/10 py-10 overflow-hidden bg-brand-ivory">
        <div className="animate-marquee flex items-center space-x-32 whitespace-nowrap">
           {[...Array(6)].map((_, i) => (
             <span key={i} className="text-xl font-serif text-brand-charcoal/40 uppercase tracking-[0.2em]">
               Threaded Artistry • Kerala • Dhupa •
             </span>
           ))}
        </div>
      </div>

      {/* Selected Arrivals */}
      <section className="py-32 px-6 md:px-12 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal">Curated Arrivals</h2>
            <Link to="/shop" className="text-xs uppercase tracking-widest border-b border-brand-charcoal pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors">
              View All Products
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            {newArrivals.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* NEW SECTION: Bridal Spotlight */}
      <section className="relative w-full py-40 px-6 md:px-12 bg-brand-charcoal overflow-hidden flex items-center">
        <div className="absolute inset-0 z-0 opacity-40">
           <ImageWithFallback src={MEDIA.images.product.bridalRed} alt="Bridal Background" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
          <div className="md:w-1/2">
             <span className="text-brand-gold text-xs uppercase tracking-[0.4em] block mb-8">The Wedding Edit</span>
             <h2 className="text-6xl md:text-8xl font-serif text-brand-ivory leading-none mb-10">
               Royal <br/> <span className="italic font-light">Trousseau</span>
             </h2>
             <p className="text-brand-ivory/70 max-w-md font-light leading-relaxed mb-12 text-lg">
               Handwoven tissue silk, antique gold embellishments, and silhouettes inspired by the Travancore royalty. 
               Crafted for the modern bride who values heritage.
             </p>
             <Link to="/shop?category=bridal">
                <Button variant="lux" className="border border-brand-ivory/30 bg-transparent hover:bg-brand-ivory hover:text-brand-charcoal px-12 py-5 tracking-[0.25em]">
                  View Collection
                </Button>
             </Link>
          </div>
          <div className="md:w-1/3 aspect-[3/4] relative border border-brand-ivory/20 p-4">
             <ImageWithFallback src={MEDIA.images.product.bridalGold} alt="Bridal Detail" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Collections - Full Bleed Parallax */}
      <section className="py-0">
        {COLLECTIONS.map((collection, idx) => (
          <div key={collection.id} className="grid grid-cols-1 md:grid-cols-2 min-h-[90vh]">
            <div className={`relative overflow-hidden ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
               <div className="absolute inset-0 bg-black/10 z-10 hover:bg-transparent transition-colors duration-1000"></div>
               <ImageWithFallback 
                src={collection.image} 
                alt={collection.title}
                className="w-full h-full object-cover transition-transform duration-[2.5s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-110"
              />
            </div>
            <div className="bg-brand-charcoal flex flex-col justify-center items-center text-center p-12 md:p-32 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
              <span className="text-brand-gold text-xs uppercase tracking-[0.4em] mb-8 relative z-10">Collection 0{idx + 1}</span>
              <h3 className="text-5xl md:text-7xl font-serif text-brand-ivory mb-8 relative z-10">{collection.title}</h3>
              <p className="text-brand-ivory/60 max-w-sm font-light leading-loose mb-16 text-lg relative z-10">{collection.description}</p>
              <Link to={collection.link} className="relative z-10">
                <Button variant="outline" className="border-brand-ivory text-brand-ivory hover:bg-brand-ivory hover:text-brand-charcoal tracking-[0.2em] px-12 py-5">
                  Explore
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* NEW SECTION: The Journal */}
      <section className="py-32 px-6 md:px-12 bg-brand-sand/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-charcoal">The Journal</h2>
            <Link to="/about" className="text-xs uppercase tracking-widest border-b border-brand-charcoal pb-1 hover:text-brand-gold hover:border-brand-gold transition-colors">
              Read All Stories
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {JOURNAL_POSTS.map((post, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden mb-8 relative">
                  <div className="absolute inset-0 bg-brand-charcoal/0 group-hover:bg-brand-charcoal/10 transition-colors z-10"></div>
                  <ImageWithFallback 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-brand-earth mb-3 block">{post.date}</span>
                <h3 className="text-2xl font-serif text-brand-charcoal mb-4 group-hover:text-brand-gold transition-colors">{post.title}</h3>
                <p className="text-sm font-light text-brand-earth/80 leading-relaxed mb-6">{post.excerpt}</p>
                <span className="inline-flex items-center text-[10px] uppercase tracking-widest text-brand-charcoal group-hover:translate-x-2 transition-transform duration-300">
                  Read Story <ArrowUpRight size={10} className="ml-1" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-40 px-6 bg-brand-ivory text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-charcoal/20 to-transparent"></div>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-serif mb-6">The Private List</h2>
          <p className="text-brand-earth text-base font-light mb-12 italic">Join for first access to our limited handloom runs.</p>
          <div className="flex border-b border-brand-charcoal pb-4">
            <input 
              type="email" 
              placeholder="Email Address" 
              className="flex-grow bg-transparent outline-none placeholder:text-brand-charcoal/30 text-brand-charcoal font-serif italic text-2xl text-center"
            />
          </div>
          <button className="mt-8 text-xs uppercase tracking-[0.3em] hover:text-brand-gold transition-colors">Subscribe</button>
        </div>
      </section>
    </main>
  );
};

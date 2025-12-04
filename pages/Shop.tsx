import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../components/product/ProductCard';
import { PRODUCTS } from '../data/mockProducts';
import { FilterState } from '../types';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') as FilterState | null;
  const [activeFilter, setActiveFilter] = useState<FilterState>(categoryParam || 'all');
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const filters: { label: string; value: FilterState }[] = [
    { label: 'View All', value: 'all' },
    { label: 'Sarees', value: 'saree' },
    { label: 'Kurta Sets', value: 'kurta-set' },
    { label: 'Set Mundu', value: 'set-mundu' },
    { label: 'Bridal', value: 'bridal' },
    { label: 'Accessories', value: 'accessories' },
  ];

  const handleFilterChange = (value: FilterState) => {
    setActiveFilter(value);
    if (value === 'all') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', value);
    }
    setSearchParams(searchParams);
    setIsMobileFiltersOpen(false);
  };

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'all') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="pt-24 min-h-screen bg-brand-ivory">
      
      {/* Page Header */}
      <div className="bg-brand-ivory px-6 md:px-12 py-12 md:py-20 border-b border-brand-charcoal/5">
        <h1 className="text-5xl md:text-7xl font-serif text-brand-charcoal text-center md:text-left">
          Shop <span className="italic text-brand-stone">All</span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row">
        
        {/* Desktop Sidebar Filters */}
        <aside className="hidden md:block w-64 p-12 sticky top-24 h-[calc(100vh-6rem)] overflow-y-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-xs uppercase tracking-widest font-bold text-brand-charcoal mb-6">Categories</h3>
              <ul className="space-y-4">
                {filters.map((filter) => (
                  <li key={filter.value}>
                    <button
                      onClick={() => handleFilterChange(filter.value)}
                      className={`text-sm tracking-wide transition-colors ${
                        activeFilter === filter.value 
                          ? 'text-brand-charcoal font-medium border-b border-brand-charcoal' 
                          : 'text-brand-earth hover:text-brand-charcoal'
                      }`}
                    >
                      {filter.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-8 border-t border-brand-charcoal/10">
              <h3 className="text-xs uppercase tracking-widest font-bold text-brand-charcoal mb-6">Sort By</h3>
              <ul className="space-y-4 text-brand-earth text-sm">
                <li className="cursor-pointer hover:text-brand-charcoal">New Arrivals</li>
                <li className="cursor-pointer hover:text-brand-charcoal">Price: Low to High</li>
                <li className="cursor-pointer hover:text-brand-charcoal">Price: High to Low</li>
              </ul>
            </div>
          </div>
        </aside>

        {/* Mobile Filter Toggle */}
        <div className="md:hidden flex justify-between items-center px-6 py-4 border-b border-brand-charcoal/5 sticky top-[73px] bg-brand-ivory/95 backdrop-blur z-20">
          <span className="text-xs uppercase tracking-widest">{filteredProducts.length} Items</span>
          <button 
            onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest"
          >
            Filter <SlidersHorizontal size={14} />
          </button>
        </div>

        {/* Mobile Filter Menu */}
        {isMobileFiltersOpen && (
          <div className="md:hidden fixed inset-0 bg-brand-ivory z-30 pt-24 px-6 overflow-y-auto">
            <div className="flex justify-end mb-8">
               <button onClick={() => setIsMobileFiltersOpen(false)} className="text-sm uppercase underline">Close</button>
            </div>
            <h3 className="text-lg font-serif mb-6">Categories</h3>
            <ul className="space-y-6">
              {filters.map((filter) => (
                <li key={filter.value}>
                  <button
                    onClick={() => handleFilterChange(filter.value)}
                    className={`text-xl font-light ${
                      activeFilter === filter.value ? 'text-brand-gold italic' : 'text-brand-charcoal'
                    }`}
                  >
                    {filter.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Product Grid */}
        <div className="flex-1 p-6 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-6 gap-y-16">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-32">
              <p className="text-brand-earth mb-4">No products found in this category.</p>
              <button 
                onClick={() => handleFilterChange('all')}
                className="text-brand-charcoal border-b border-brand-charcoal pb-1"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
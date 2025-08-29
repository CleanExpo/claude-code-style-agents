'use client';

import React, { useState, useEffect } from 'react';
import TestimonialCarousel, { Testimonial } from './TestimonialCarousel';

interface DynamicTestimonialCarouselProps {
  featured?: boolean;
  industry?: string;
  autoPlay?: boolean;
  interval?: number;
  showIndicators?: boolean;
  showArrows?: boolean;
}

interface ApiResponse {
  success: boolean;
  data: Testimonial[];
  count: number;
  error?: string;
}

const DynamicTestimonialCarousel: React.FC<DynamicTestimonialCarouselProps> = ({
  featured = true,
  industry,
  autoPlay = true,
  interval = 5000,
  showIndicators = true,
  showArrows = true,
}) => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams();
        if (featured) params.append('featured', 'true');
        if (industry) params.append('industry', industry);

        const response = await fetch(`/api/testimonials?${params.toString()}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result: ApiResponse = await response.json();
        
        if (result.success) {
          setTestimonials(result.data);
        } else {
          setError(result.error || 'Failed to fetch testimonials');
        }
      } catch (err) {
        console.error('Error fetching testimonials:', err);
        setError('Failed to load testimonials');
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, [featured, industry]);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="animate-pulse">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-5 h-5 bg-neutral-200 rounded" />
                ))}
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-neutral-200 rounded w-3/4 mx-auto" />
                <div className="h-4 bg-neutral-200 rounded w-full" />
                <div className="h-4 bg-neutral-200 rounded w-5/6 mx-auto" />
              </div>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-neutral-200 rounded-full" />
                <div className="space-y-2">
                  <div className="h-4 bg-neutral-200 rounded w-24" />
                  <div className="h-3 bg-neutral-200 rounded w-32" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center">
          <div className="text-red-600 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h3 className="font-display text-lg font-semibold text-red-800 mb-2">
            Unable to Load Testimonials
          </h3>
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <TestimonialCarousel
      testimonials={testimonials}
      autoPlay={autoPlay}
      interval={interval}
      showIndicators={showIndicators}
      showArrows={showArrows}
    />
  );
};

export default DynamicTestimonialCarousel;
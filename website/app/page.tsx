import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';
import DynamicTestimonialCarousel from '@/components/DynamicTestimonialCarousel';

const features = [
  {
    icon: '🚀',
    title: 'Lightning Fast',
    description: 'Optimized for speed with cutting-edge performance technologies and best practices.'
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    description: 'Bank-level security with end-to-end encryption and compliance with industry standards.'
  },
  {
    icon: '📱',
    title: 'Mobile First',
    description: 'Responsive design that works perfectly on all devices, from mobile to desktop.'
  },
  {
    icon: '⚙️',
    title: 'Easy Integration',
    description: 'Seamless integration with your existing tools and workflows through our robust API.'
  },
  {
    icon: '📊',
    title: 'Advanced Analytics',
    description: 'Deep insights and analytics to help you make data-driven decisions.'
  },
  {
    icon: '🌐',
    title: 'Global Scale',
    description: 'Built to scale globally with CDN optimization and multi-region deployment.'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100/20 via-transparent to-secondary-100/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-neutral-900 mb-6 animate-slide-up">
              The Future of
              <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                {' '}Digital Innovation
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-100">
              Build exceptional digital experiences with our modern, scalable platform. 
              Designed for teams who demand excellence and built for the future of web development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-200">
              <Button size="lg" className="text-lg px-8 py-4 h-auto">
                Get Started Free
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto">
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Hero Image/Video Placeholder */}
          <div className="mt-16 animate-fade-in animation-delay-300">
            <div className="relative max-w-5xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-neutral-100 to-neutral-200 rounded-2xl shadow-2xl border border-neutral-300 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-neutral-600 font-medium">Interactive Demo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Powerful features designed to help you build, launch, and scale your digital products with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} variant="elevated" className="h-full animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-br from-neutral-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Join thousands of companies who trust our platform to power their digital transformation.
            </p>
          </div>
          
          <DynamicTestimonialCarousel 
            featured={true}
            autoPlay={true}
            interval={5000}
            showIndicators={true}
            showArrows={true}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Digital Experience?
          </h2>
          <p className="text-lg sm:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of companies already using our platform to build the future of digital innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="secondary" size="lg" className="text-lg px-8 py-4 h-auto bg-white text-primary-600 hover:bg-primary-50">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 h-auto border-white text-white hover:bg-white hover:text-primary-600">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

export default function PlatformPage() {
  const platformFeatures = [
    {
      title: 'Scalable Architecture',
      description: 'Built on modern cloud infrastructure that scales automatically with your needs.',
      icon: '🏗️'
    },
    {
      title: 'Developer Experience',
      description: 'Intuitive APIs and comprehensive documentation for rapid development.',
      icon: '👨‍💻'
    },
    {
      title: 'Real-time Collaboration',
      description: 'Work together seamlessly with integrated collaboration tools.',
      icon: '🤝'
    },
    {
      title: 'Advanced Security',
      description: 'Enterprise-grade security with compliance certifications.',
      icon: '🔐'
    }
  ];

  const useCases = [
    {
      title: 'E-commerce Platforms',
      description: 'Build high-converting online stores with advanced features.',
      link: '/solutions/ecommerce'
    },
    {
      title: 'SaaS Applications',
      description: 'Develop scalable software-as-a-service solutions.',
      link: '/solutions/saas'
    },
    {
      title: 'Enterprise Portals',
      description: 'Create secure, feature-rich enterprise applications.',
      link: '/solutions/enterprise'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
              The Platform That Powers
              <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                {' '}Innovation
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
              Our comprehensive platform provides everything you need to build, deploy, and scale 
              modern web applications. From startups to enterprises, we empower teams to create 
              exceptional digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Start Building
              </Button>
              <Button variant="outline" size="lg">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Built for Modern Development Teams
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Our platform combines the power of cloud-native architecture with developer-friendly 
                tools to accelerate your development process. Whether you're building a simple website 
                or a complex application, we provide the foundation you need to succeed.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Zero Configuration</h3>
                    <p className="text-neutral-600">Get started instantly with sensible defaults and automatic optimization.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Global CDN</h3>
                    <p className="text-neutral-600">Lightning-fast delivery worldwide with our distributed network.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-2">Auto Scaling</h3>
                    <p className="text-neutral-600">Handle traffic spikes effortlessly with automatic scaling.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <p className="text-neutral-700 font-medium">Platform Architecture</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 sm:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Core Platform Features
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Everything you need to build, deploy, and scale modern applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platformFeatures.map((feature, index) => (
              <Card key={feature.title} variant="elevated" className="text-center h-full">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Built for Every Use Case
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              From simple websites to complex enterprise applications, our platform adapts to your needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={useCase.title} variant="bordered" className="h-full hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <CardDescription className="text-base mb-4">
                    {useCase.description}
                  </CardDescription>
                  <Link href={useCase.link} className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
                    Learn more
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-20 sm:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Built on modern technologies and industry standards for maximum performance and reliability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="font-display text-2xl font-semibold text-neutral-900 mb-6">Performance</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-neutral-600">Page Load Speed</span>
                  <span className="font-semibold text-neutral-900">&lt; 2 seconds</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-neutral-600">Uptime SLA</span>
                  <span className="font-semibold text-neutral-900">99.9%</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-neutral-600">Global CDN</span>
                  <span className="font-semibold text-neutral-900">180+ locations</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-neutral-600">Auto Scaling</span>
                  <span className="font-semibold text-neutral-900">0-1000+ instances</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-display text-2xl font-semibold text-neutral-900 mb-6">Security</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-neutral-600">SSL Certificate</span>
                  <span className="font-semibold text-neutral-900">Automatic</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-neutral-600">DDoS Protection</span>
                  <span className="font-semibold text-neutral-900">Enterprise-grade</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-neutral-600">Compliance</span>
                  <span className="font-semibold text-neutral-900">SOC 2, GDPR</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-neutral-600">Data Encryption</span>
                  <span className="font-semibold text-neutral-900">AES-256</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-lg sm:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Join thousands of developers and companies building the future with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
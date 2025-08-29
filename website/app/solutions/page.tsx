import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

export default function SolutionsPage() {
  const solutions = [
    {
      icon: '🛒',
      title: 'E-commerce Platforms',
      description: 'Build high-converting online stores with advanced shopping features',
      features: ['Payment processing', 'Inventory management', 'Customer analytics', 'Mobile optimization'],
      caseStudy: 'FashionForward increased sales by 300% after migrating to our platform',
      link: '/solutions/ecommerce'
    },
    {
      icon: '💼',
      title: 'SaaS Applications',
      description: 'Develop scalable software-as-a-service solutions with enterprise features',
      features: ['Multi-tenancy', 'Subscription billing', 'User management', 'API-first architecture'],
      caseStudy: 'ProductivityPro serves 10M+ users with 99.9% uptime',
      link: '/solutions/saas'
    },
    {
      icon: '🏢',
      title: 'Enterprise Portals',
      description: 'Create secure, feature-rich applications for large organizations',
      features: ['Single sign-on', 'Role-based access', 'Compliance tools', 'Integration hub'],
      caseStudy: 'GlobalCorp reduced IT costs by 40% with our enterprise solution',
      link: '/solutions/enterprise'
    },
    {
      icon: '📚',
      title: 'Educational Platforms',
      description: 'Build engaging learning management systems and educational tools',
      features: ['Course management', 'Progress tracking', 'Interactive content', 'Assessment tools'],
      caseStudy: 'EduTech Academy improved student engagement by 250%',
      link: '/solutions/education'
    },
    {
      icon: '🏥',
      title: 'Healthcare Systems',
      description: 'Develop HIPAA-compliant healthcare applications and patient portals',
      features: ['Patient records', 'Appointment scheduling', 'Telemedicine', 'Compliance features'],
      caseStudy: 'MediCare Plus streamlined operations for 50+ clinics',
      link: '/solutions/healthcare'
    },
    {
      icon: '💰',
      title: 'FinTech Applications',
      description: 'Create secure financial services and banking applications',
      features: ['Payment processing', 'Fraud detection', 'Regulatory compliance', 'Real-time analytics'],
      caseStudy: 'FinanceFirst processes $1B+ in transactions monthly',
      link: '/solutions/fintech'
    }
  ];

  const industries = [
    { name: 'Retail & E-commerce', percentage: '25%', color: 'bg-primary-500' },
    { name: 'Technology & SaaS', percentage: '20%', color: 'bg-secondary-500' },
    { name: 'Financial Services', percentage: '18%', color: 'bg-accent-500' },
    { name: 'Healthcare', percentage: '15%', color: 'bg-primary-400' },
    { name: 'Education', percentage: '12%', color: 'bg-secondary-400' },
    { name: 'Others', percentage: '10%', color: 'bg-neutral-400' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="bg-neutral-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="text-neutral-500 hover:text-neutral-700">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <Link href="/platform" className="ml-1 text-neutral-500 hover:text-neutral-700 md:ml-2">
                    Platform
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-neutral-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-1 text-neutral-700 font-medium md:ml-2">Solutions</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-neutral-900 mb-6">
            Industry-Specific
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {' '}Solutions
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            Tailored solutions for every industry. Our platform adapts to your specific needs, 
            providing pre-built components, industry compliance, and specialized features.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Explore Solutions
            </Button>
            <Button variant="outline" size="lg">
              Talk to an Expert
            </Button>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 sm:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Solutions for Every Industry
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              From startups to enterprises, our industry-specific solutions help you build faster and scale smarter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={solution.title} variant="elevated" className="h-full hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{solution.icon}</div>
                  <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                  <CardDescription className="text-base mb-4">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className="flex-shrink-0 w-4 h-4 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
                            <svg className="w-2.5 h-2.5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-sm text-neutral-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-primary-50 rounded-lg p-4">
                    <p className="text-sm text-primary-800 font-medium mb-2">Success Story:</p>
                    <p className="text-sm text-primary-700">{solution.caseStudy}</p>
                  </div>
                  
                  <Link
                    href={solution.link}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
                  >
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

      {/* Industry Breakdown */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mb-6">
                Trusted Across Industries
              </h2>
              <p className="text-lg text-neutral-600 mb-8">
                Our platform serves thousands of companies across diverse industries, 
                providing specialized solutions that meet unique business requirements.
              </p>
              
              <div className="space-y-6">
                {industries.map((industry, index) => (
                  <div key={industry.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 flex-1">
                      <span className="font-medium text-neutral-900 min-w-0 flex-1">{industry.name}</span>
                      <span className="font-semibold text-neutral-700">{industry.percentage}</span>
                    </div>
                    <div className="w-32 bg-neutral-200 rounded-full h-2 ml-4">
                      <div
                        className={`h-2 rounded-full ${industry.color} transition-all duration-500`}
                        style={{ width: industry.percentage }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <Button size="lg">
                  See All Case Studies
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="text-2xl font-bold text-primary-600">1000+</div>
                      <div className="text-sm text-neutral-600">Companies</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="text-2xl font-bold text-secondary-600">50+</div>
                      <div className="text-sm text-neutral-600">Industries</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="text-2xl font-bold text-accent-600">99.9%</div>
                      <div className="text-sm text-neutral-600">Uptime</div>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md">
                      <div className="text-2xl font-bold text-primary-600">24/7</div>
                      <div className="text-sm text-neutral-600">Support</div>
                    </div>
                  </div>
                  <p className="text-neutral-700 font-medium">Industry Statistics</p>
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
            Ready to Build Your Solution?
          </h2>
          <p className="text-lg sm:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Get started with industry-specific templates and expert guidance to accelerate your development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
              Get Started Free
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
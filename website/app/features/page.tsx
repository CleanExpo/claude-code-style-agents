import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/Card';

export default function FeaturesPage() {
  const coreFeatures = [
    {
      icon: '⚡',
      title: 'Lightning Performance',
      description: 'Sub-second page loads with optimized caching and CDN delivery',
      benefits: ['99.9% uptime SLA', 'Global CDN network', 'Automatic optimization']
    },
    {
      icon: '🔒',
      title: 'Enterprise Security',
      description: 'Bank-level security with advanced threat protection',
      benefits: ['SSL/TLS encryption', 'DDoS protection', 'Compliance ready']
    },
    {
      icon: '📊',
      title: 'Real-time Analytics',
      description: 'Comprehensive insights into your application performance',
      benefits: ['Custom dashboards', 'Performance metrics', 'User behavior tracking']
    },
    {
      icon: '🛠️',
      title: 'Developer Tools',
      description: 'Powerful development environment with integrated tools',
      benefits: ['Code editor integration', 'Debug tools', 'Version control']
    },
    {
      icon: '🌐',
      title: 'Global Scalability',
      description: 'Scale from prototype to enterprise with zero configuration',
      benefits: ['Auto-scaling', 'Load balancing', 'Multi-region deployment']
    },
    {
      icon: '🤖',
      title: 'AI-Powered Optimization',
      description: 'Machine learning algorithms optimize your application automatically',
      benefits: ['Smart caching', 'Predictive scaling', 'Performance insights']
    }
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
                  <span className="ml-1 text-neutral-700 font-medium md:ml-2">Features</span>
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
            Powerful Features for
            <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              {' '}Modern Development
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            Everything you need to build, deploy, and scale exceptional web applications. 
            Our comprehensive feature set empowers teams to focus on what matters most - creating amazing user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Try All Features Free
            </Button>
            <Button variant="outline" size="lg">
              See Feature Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="py-20 sm:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Core Platform Features
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Built from the ground up to deliver exceptional performance, security, and developer experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={feature.title} variant="elevated" className="h-full hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-2">
                        <div className="flex-shrink-0 w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm text-neutral-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Compare our comprehensive feature set with traditional solutions.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-display font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-display font-semibold">Our Platform</th>
                  <th className="px-6 py-4 text-center font-display font-semibold">Traditional Solutions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="px-6 py-4 font-medium text-neutral-900">Setup Time</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center text-green-600">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Minutes
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-neutral-600">Weeks</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-6 py-4 font-medium text-neutral-900">Scaling</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center text-green-600">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Automatic
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-neutral-600">Manual</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-neutral-900">Security Updates</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center text-green-600">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Automated
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-neutral-600">Manual</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-6 py-4 font-medium text-neutral-900">Monitoring</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center text-green-600">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Built-in
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-neutral-600">Additional Setup</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium text-neutral-900">Support</td>
                  <td className="px-6 py-4 text-center">
                    <span className="inline-flex items-center text-green-600">
                      <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      24/7 Expert
                    </span>
                  </td>
                  <td className="px-6 py-4 text-center text-neutral-600">Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
            Experience All Features Today
          </h2>
          <p className="text-lg sm:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Start building with our full feature set. No credit card required for your 30-day free trial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-primary-50">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
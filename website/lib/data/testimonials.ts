export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating?: number;
  featured?: boolean;
  industry?: string;
  location?: string;
  createdAt: string;
  updatedAt: string;
}

// Mock database - in production, this would be replaced with a real database
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechForward',
    content: 'This platform has completely transformed how we approach digital innovation. The results have exceeded all our expectations, and our team\'s productivity has increased by 200%.',
    rating: 5,
    avatar: '/api/placeholder/64/64',
    featured: true,
    industry: 'Technology',
    location: 'San Francisco, CA',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'CTO',
    company: 'DataFlow Solutions',
    content: 'The most intuitive and powerful web platform we\'ve ever used. Our development cycle has been cut in half, and our team\'s productivity has increased dramatically.',
    rating: 5,
    avatar: '/api/placeholder/64/64',
    featured: true,
    industry: 'Data Analytics',
    location: 'New York, NY',
    createdAt: '2024-01-20T14:30:00Z',
    updatedAt: '2024-01-20T14:30:00Z'
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    company: 'Creative Labs',
    content: 'Beautiful design meets powerful functionality. It\'s exactly what we needed to bring our creative vision to life. The design system is incredibly well thought out.',
    rating: 5,
    avatar: '/api/placeholder/64/64',
    featured: true,
    industry: 'Creative Services',
    location: 'Los Angeles, CA',
    createdAt: '2024-02-01T09:15:00Z',
    updatedAt: '2024-02-01T09:15:00Z'
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Product Manager',
    company: 'InnovateNow',
    content: 'The analytics and insights provided by this platform have been game-changing for our product development process. We can make data-driven decisions faster than ever.',
    rating: 5,
    avatar: '/api/placeholder/64/64',
    featured: false,
    industry: 'Product Development',
    location: 'Seattle, WA',
    createdAt: '2024-02-10T16:20:00Z',
    updatedAt: '2024-02-10T16:20:00Z'
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    role: 'VP of Engineering',
    company: 'ScaleUp Ventures',
    content: 'The platform\'s scalability is phenomenal. We went from handling 1,000 users to over 100,000 without any infrastructure changes. The auto-scaling just works.',
    rating: 5,
    avatar: '/api/placeholder/64/64',
    featured: false,
    industry: 'Venture Capital',
    location: 'Austin, TX',
    createdAt: '2024-02-15T11:45:00Z',
    updatedAt: '2024-02-15T11:45:00Z'
  },
  {
    id: '6',
    name: 'James Wilson',
    role: 'Founder',
    company: 'EcoSolutions',
    content: 'As a sustainability-focused company, we appreciate the platform\'s commitment to green technology. Our carbon footprint has decreased while our performance improved.',
    rating: 4,
    avatar: '/api/placeholder/64/64',
    featured: false,
    industry: 'Environmental Technology',
    location: 'Portland, OR',
    createdAt: '2024-02-20T13:10:00Z',
    updatedAt: '2024-02-20T13:10:00Z'
  }
];

export class TestimonialService {
  static async getAllTestimonials(): Promise<Testimonial[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return testimonials.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  static async getFeaturedTestimonials(): Promise<Testimonial[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return testimonials
      .filter(testimonial => testimonial.featured)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  static async getTestimonialById(id: string): Promise<Testimonial | null> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return testimonials.find(testimonial => testimonial.id === id) || null;
  }

  static async getTestimonialsByIndustry(industry: string): Promise<Testimonial[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 100));
    return testimonials
      .filter(testimonial => testimonial.industry === industry)
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  static async createTestimonial(testimonial: Omit<Testimonial, 'id' | 'createdAt' | 'updatedAt'>): Promise<Testimonial> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const newTestimonial: Testimonial = {
      ...testimonial,
      id: (testimonials.length + 1).toString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    
    testimonials.push(newTestimonial);
    return newTestimonial;
  }

  static async updateTestimonial(id: string, updates: Partial<Testimonial>): Promise<Testimonial | null> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const testimonialIndex = testimonials.findIndex(t => t.id === id);
    if (testimonialIndex === -1) return null;
    
    testimonials[testimonialIndex] = {
      ...testimonials[testimonialIndex],
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    return testimonials[testimonialIndex];
  }

  static async deleteTestimonial(id: string): Promise<boolean> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const testimonialIndex = testimonials.findIndex(t => t.id === id);
    if (testimonialIndex === -1) return false;
    
    testimonials.splice(testimonialIndex, 1);
    return true;
  }
}
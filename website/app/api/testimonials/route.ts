import { NextRequest, NextResponse } from 'next/server';
import { TestimonialService, Testimonial } from '@/lib/data/testimonials';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const featured = searchParams.get('featured');
    const industry = searchParams.get('industry');
    
    let testimonials: Testimonial[];
    
    if (featured === 'true') {
      testimonials = await TestimonialService.getFeaturedTestimonials();
    } else if (industry) {
      testimonials = await TestimonialService.getTestimonialsByIndustry(industry);
    } else {
      testimonials = await TestimonialService.getAllTestimonials();
    }
    
    return NextResponse.json({
      success: true,
      data: testimonials,
      count: testimonials.length
    });
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch testimonials'
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Basic validation
    const requiredFields = ['name', 'role', 'company', 'content'];
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          {
            success: false,
            error: `Missing required field: ${field}`
          },
          { status: 400 }
        );
      }
    }
    
    // Validate rating if provided
    if (body.rating && (body.rating < 1 || body.rating > 5)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Rating must be between 1 and 5'
        },
        { status: 400 }
      );
    }
    
    const newTestimonial = await TestimonialService.createTestimonial(body);
    
    return NextResponse.json(
      {
        success: true,
        data: newTestimonial
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating testimonial:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create testimonial'
      },
      { status: 500 }
    );
  }
}
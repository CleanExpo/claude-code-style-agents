import { NextRequest, NextResponse } from 'next/server';
import { TestimonialService } from '@/lib/data/testimonials';

interface RouteParams {
  params: {
    id: string;
  };
}

export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const testimonial = await TestimonialService.getTestimonialById(params.id);
    
    if (!testimonial) {
      return NextResponse.json(
        {
          success: false,
          error: 'Testimonial not found'
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: testimonial
    });
  } catch (error) {
    console.error('Error fetching testimonial:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch testimonial'
      },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const body = await request.json();
    
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
    
    const updatedTestimonial = await TestimonialService.updateTestimonial(params.id, body);
    
    if (!updatedTestimonial) {
      return NextResponse.json(
        {
          success: false,
          error: 'Testimonial not found'
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: updatedTestimonial
    });
  } catch (error) {
    console.error('Error updating testimonial:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to update testimonial'
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const deleted = await TestimonialService.deleteTestimonial(params.id);
    
    if (!deleted) {
      return NextResponse.json(
        {
          success: false,
          error: 'Testimonial not found'
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      message: 'Testimonial deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting testimonial:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to delete testimonial'
      },
      { status: 500 }
    );
  }
}
import React from 'react';
import { cn } from '@/lib/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

const getVariantClasses = (variant: ButtonVariant): string => {
  const variants = {
    primary: "bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl",
    secondary: "bg-secondary-500 text-white hover:bg-secondary-600 shadow-lg hover:shadow-xl",
    outline: "border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white",
    ghost: "text-primary-500 hover:bg-primary-50 hover:text-primary-600",
  };
  return variants[variant];
};

const getSizeClasses = (size: ButtonSize): string => {
  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-13 px-8 text-lg",
  };
  return sizes[size];
};

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, ...props }, ref) => {
    const baseClasses = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95";
    
    return (
      <button
        className={cn(
          baseClasses,
          getVariantClasses(variant),
          getSizeClasses(size),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
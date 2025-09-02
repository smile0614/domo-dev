import React, { FC } from 'react';

import { cn } from '@/lib/utils';

type ButtonTypes = 'button' | 'submit' | 'reset';

interface ButtonProps {
  onClick?: () => void;
  type?: ButtonTypes;
  className?: string;
  text: string;
  variant: 'primary' | 'secondary' | 'maroon';
  link?: boolean;
  linkPath?: string;
}

const Button: FC<ButtonProps> = ({
  onClick,
  type,
  className,
  text,
  variant,
  link,
  linkPath,
}) => {
  return !link ? (
    <button
      onClick={onClick}
      data-aos='zoom-in'
      data-aos-offset='0'
      type={type}
      className={cn(
        `text-xl font-normal text-center leading-6 transition-all border w-auto py-3 px-4`,
        className,
        variant === 'primary' &&
          'bg-red border-red hover:bg-transparent hover:text-red  text-marron',
        variant === 'secondary' &&
          'bg-green border-green hover:border-green hover:text-green hover:bg-transparent  text-maroon',
        variant === 'maroon' &&
          'bg-maroon border-maroon hover:border-maroon hover:text-maroon hover:bg-transparent  text-yellow'
      )}
    >
      {text}
    </button>
  ) : (
    <a
      href={linkPath}
      target='_blank'
      data-aos='zoom-in'
      data-aos-offset='0'
      type={type}
      className={cn(
        `text-xl font-normal text-center leading-6 transition-all border w-auto py-3 px-4`,
        className,
        variant === 'primary' &&
          'bg-red border-red hover:bg-transparent hover:text-red  text-marron',
        variant === 'secondary' &&
          'bg-green border-green hover:border-green hover:text-green hover:bg-transparent  text-maroon',
        variant === 'maroon' &&
          'bg-maroon border-maroon hover:border-maroon hover:text-maroon hover:bg-transparent  text-yellow'
      )}
    >
      {text}
    </a>
  );
};

export default Button;

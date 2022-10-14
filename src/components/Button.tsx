import { ButtonHTMLAttributes, ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
  className: string;
}

export function Button({ children, asChild, className, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'bg-purple-600 text-gray-100 text-sm font-semibold py-3 px-4 rounded w-full hover:bg-purple-500 transition-colors focus:ring-2 ring-white',
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

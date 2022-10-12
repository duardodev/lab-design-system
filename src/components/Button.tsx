import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';

export interface ButtonProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Button({ children, asChild }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      className={clsx(
        'bg-purple-600 text-gray-100 text-sm font-semibold py-4 px-3 rounded w-full hover:bg-purple-500 transition-colors focus:ring-2 ring-white'
      )}
    >
      {children}
    </Comp>
  );
}

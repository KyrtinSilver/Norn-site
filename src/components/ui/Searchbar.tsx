'use client';

import { FC, InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SearchbarProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icon?: boolean;
}

export const Searchbar: FC<SearchbarProps> = ({
  className,
  icon = true,
  ...props
}) => {
  return (
    <div className="relative">
      {icon && (
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      )}
      <input
        type="search"
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          icon && 'pl-10',
          className
        )}
        {...props}
      />
    </div>
  );
}; 
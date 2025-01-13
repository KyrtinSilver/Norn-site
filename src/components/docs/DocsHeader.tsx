"use client";

import { FC, useState } from 'react';
import { CommandMenu } from '../ui/CommandMenu';
import { Input } from '../ui/input';
import { cn } from '@/lib/utils';

export const DocsSearch: FC = () => {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <div className="relative flex-1">
      <Input
        type="search"
        placeholder="Search..."
        className={cn(
          "w-full h-10 pl-10 pr-4 rounded-full border-[1.5px] bg-background",
          isSearching ? "border-primary" : "border-border/40"
        )}
        onFocus={() => setIsSearching(true)}
        onBlur={() => setIsSearching(false)}
        onClick={() => setIsSearching(true)}
      />
      <svg
        className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <CommandMenu />
    </div>
  );
};

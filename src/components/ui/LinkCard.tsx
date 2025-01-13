'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface LinkCardProps {
  href: string;
  title: string;
  description?: string;
  className?: string;
  variant?: 'default' | 'primary';
}

export function LinkCard({ 
  href, 
  title, 
  description, 
  className,
  variant = 'default'
}: LinkCardProps) {
  return (
    <Link href={href} className="block no-underline text-foreground hover:text-foreground">
      <Card className={cn(
        "transition-colors cursor-pointer h-full hover:bg-accent dark:hover:bg-accent",
        className
      )}>
        <CardHeader>
          <CardTitle className={cn(
            "line-clamp-1",
            variant === 'primary' ? "text-primary hover:text-primary" : "text-foreground hover:text-foreground"
          )}>
            {title}
          </CardTitle>
          {description && (
            <CardDescription className="line-clamp-2">
              {description}
            </CardDescription>
          )}
        </CardHeader>
      </Card>
    </Link>
  );
} 
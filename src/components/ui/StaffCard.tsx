'use client';

import { FC } from 'react';
import { Brain, Code, Shield, Cpu, Database, Network } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StaffCardProps {
  name: string;
  role: string;
  description?: string;
  icon: 'brain' | 'code' | 'shield' | 'cpu' | 'database' | 'network';
  className?: string;
}

const icons = {
  brain: Brain,
  code: Code,
  shield: Shield,
  cpu: Cpu,
  database: Database,
  network: Network,
};

export const StaffCard: FC<StaffCardProps> = ({
  name,
  role,
  description,
  icon,
  className,
}) => {
  const Icon = icons[icon];
  
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-lg border border-border bg-background p-6",
      className
    )}>
      <div className="flex flex-col items-center text-center">
        <div className="flex items-center justify-center h-32 w-32 mb-4 rounded-full bg-primary/10 dark:bg-primary/20">
          <Icon className="h-16 w-16 text-primary" strokeWidth={1.5} />
        </div>
        <h3 className="text-lg font-semibold leading-none tracking-tight mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{role}</p>
        {description && (
          <p className="text-sm text-muted-foreground leading-normal">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}; 
'use client';

import { FC } from 'react';

export const Copyright: FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <p className="text-sm text-muted-foreground">
      Copyright © {currentYear} Norn.ai - All rights reserved.
    </p>
  );
}; 
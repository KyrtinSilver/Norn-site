'use client'

import BaseMap from '@/components/map'

export function Map({ location }: { location: string }) {
  return <BaseMap location={location} />
} 
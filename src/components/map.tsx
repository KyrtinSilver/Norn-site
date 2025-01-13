'use client'

import { useEffect, useRef } from 'react'

interface MapProps {
  location: string
}

export default function Map({ location }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // In a real application, you would use a mapping service like Google Maps or Mapbox
    // For now, we'll just display a placeholder
    if (mapRef.current) {
      mapRef.current.innerHTML = `
        <div class="bg-muted rounded-lg p-6 text-center">
          <p class="text-lg font-medium mb-2">Map Location: ${location}</p>
          <p class="text-sm text-muted-foreground">
            In a real application, this would display an interactive map for ${location}
          </p>
        </div>
      `
    }
  }, [location])

  return (
    <div 
      ref={mapRef}
      className="w-full h-[300px] bg-muted rounded-lg overflow-hidden"
    />
  )
}

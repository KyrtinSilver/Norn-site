'use client'

import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

export function ToastDemo() {
  return (
    <div>
      <h3 className="text-xl font-medium mb-4">Toast Notifications</h3>
      <div className="flex flex-wrap gap-4">
        <Button
          onClick={() => {
            toast('Default notification', {
              description: 'This is a default toast notification.',
            })
          }}
        >
          Show Default Toast
        </Button>
        <Button
          onClick={() => {
            toast.success('Success notification', {
              description: 'This is a success toast notification.',
              className: 'group',
              style: {
                backgroundColor: 'hsl(var(--background))',
                color: 'hsl(var(--foreground))',
                border: '1px solid hsl(var(--border))',
              },
              icon: (
                <div className="text-primary dark:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="m8 12 3 3 5-5" />
                  </svg>
                </div>
              ),
            })
          }}
          variant="default"
          className="bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Show Success Toast
        </Button>
        <Button
          onClick={() => {
            toast.error('Error notification', {
              description: 'This is an error toast notification.',
              className: 'group',
              style: {
                backgroundColor: 'hsl(var(--background))',
                color: 'hsl(var(--foreground))',
                border: '1px solid hsl(var(--border))',
              },
              icon: (
                <div className="text-destructive dark:text-destructive">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
              ),
            })
          }}
          variant="destructive"
        >
          Show Error Toast
        </Button>
        <Button
          onClick={() => {
            toast.info('Info notification', {
              description: 'This is an info toast notification.',
              className: 'group',
              style: {
                backgroundColor: 'hsl(var(--background))',
                color: 'hsl(var(--foreground))',
                border: '1px solid hsl(var(--border))',
              },
              icon: (
                <div className="text-primary dark:text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </div>
              ),
            })
          }}
          variant="secondary"
        >
          Show Info Toast
        </Button>
      </div>
    </div>
  )
} 
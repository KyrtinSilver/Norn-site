# Marketing Components

## Timeline Component

The timeline component is a horizontal scrolling carousel that showcases key milestones in chronological order.

### Features

- Fluid horizontal scrolling with smooth transitions
- Responsive card layout with hover effects
- Navigation controls for accessibility
- Gradient fade effects on edges
- Optimized images from Unsplash

### Implementation Details

#### Container Structure
```tsx
<section className="py-24 overflow-hidden">
  <Container>
    {/* Header */}
    <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
      {/* Gradient overlays */}
      <div className="no-scrollbar flex overflow-x-auto">
        {/* Timeline cards */}
      </div>
    </div>
    {/* Navigation controls */}
  </Container>
</section>
```

#### Scroll Behavior
- Uses CSS `scroll-behavior: 'smooth'` for fluid scrolling
- Disables snap points for natural mouse/trackpad interaction
- Custom scroll amount for navigation buttons (card width + gap)

#### Card Design
- Fixed width: 320px
- Subtle shadows with hover states
- Image transitions on hover
- Consistent padding and spacing
- Proper dark mode support

#### Navigation
- Client-side component for interactivity
- Circular buttons with clear affordances
- Smooth scrolling between cards
- Screen reader support

### Usage

```tsx
import { TimelineNav } from './components/timeline-nav'

// Timeline data structure
const timeline = [
  {
    year: string,
    description: string,
    image: string // Unsplash URL
  }
]

// Render timeline section
<TimelineSection events={timeline} />
```

### Styling Notes

- Uses Tailwind CSS for responsive design
- Custom shadows for dark mode compatibility
- Gradient overlays to indicate scroll overflow
- Smooth transitions for all interactive elements

### Accessibility

- Keyboard navigation support
- Screen reader announcements
- Proper ARIA labels
- Focus management for navigation controls 
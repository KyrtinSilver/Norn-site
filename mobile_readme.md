# Mobile Button Margin Guidelines

## Button Container Pattern

For consistent button margins across the site, especially on mobile views, follow this pattern:

1. Buttons should be wrapped in a container with these classes:
```tsx
<div className="flex flex-col sm:flex-row gap-6 sm:gap-4 w-full sm:w-auto">
  <Button>...</Button>
</div>
```

2. The button container should be inside a `Container` component:
```tsx
<Container>
  <div className="...">
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 w-full sm:w-auto">
      <Button>...</Button>
    </div>
  </div>
</Container>
```

## Class Breakdown
- `flex flex-col sm:flex-row`: Stacks buttons vertically on mobile, horizontal on desktop
- `gap-6 sm:gap-4`: Provides consistent spacing between buttons
- `w-full sm:w-auto`: Full width on mobile, auto width on desktop

## Example Implementation
```tsx
<section>
  <Container>
    <div className="...">
      {/* Content */}
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-4 w-full sm:w-auto">
        <Button size="lg" asChild>
          <Link href="/path">Button Text</Link>
        </Button>
      </div>
    </div>
  </Container>
</section>
```

## Common Issues to Avoid
1. Don't add `w-full sm:w-auto` directly to the Button component
2. Don't forget to wrap the button container in a `Container` component
3. Don't add extra margin containers that could interfere with the standard pattern 
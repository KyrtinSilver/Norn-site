# Forms Documentation

## Overview
This document outlines the Web3Forms implementation across various forms on the Norn.ai website.

## Forms Updated
1. Contact Form (`/company/contact`)
2. Whitepaper Request Form (`/resources/whitepaper`)
3. Documentation Access Form (`/resources/docs`)
4. Partnership Inquiry Form (`/collaboration/partnership`)
5. Investor Inquiry Form (`/collaboration/investors`)
6. Press Inquiry Form (`/collaboration/press`)

## Implementation Details

### Key Changes Made
1. Changed from JSON to FormData submission
   - Previously: Forms were constructing a JSON object and sending with `Content-Type: application/json`
   - Now: Forms use native `FormData` with `multipart/form-data` content type

2. Standardized Form Structure
   ```tsx
   <form onSubmit={handleSubmit}>
     <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
     <input type="hidden" name="from_name" value="Form Name" />
     <input type="hidden" name="subject" value="Form Subject" />
     // Form fields...
   </form>
   ```

3. Standardized Form Submission
   ```typescript
   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault()
     setIsSubmitting(true)

     const form = e.currentTarget
     const formData = new FormData(form)
     
     try {
       const response = await fetch('https://api.web3forms.com/submit', {
         method: 'POST',
         body: formData
       })

       const result = await response.json()
       
       if (result.success) {
         form.reset()
         // Show success toast
       } else {
         // Show error toast
       }
     } catch (error) {
       // Handle error
     } finally {
       setIsSubmitting(false)
     }
   }
   ```

### User Feedback Implementation
1. Loading States
   - Forms disable all inputs while submitting
   - Submit button shows loading state

2. Toast Notifications
   - Success toasts show for 2 seconds
   - Error toasts show for 5 seconds
   - Custom styling matching site theme
   - Icons for success/error states

### Form-Specific Features
1. Contact Form
   - Redirects to success page after submission
   - Includes autofill support for name/email

2. Whitepaper/Documentation Forms
   - Additional fields for company and role
   - Use case description field

3. Partnership/Investor Forms
   - Split layout for better organization
   - Additional fields for organization details

4. Press Form
   - Deadline field for time-sensitive requests
   - Media organization specific fields

## Best Practices
1. Always include required Web3Forms fields:
   - `access_key`
   - `from_name`
   - `subject`

2. Use proper HTML5 validation attributes:
   - `required`
   - `type="email"`
   - `autoComplete`

3. Handle all submission states:
   - Loading
   - Success
   - Error

4. Provide clear feedback:
   - Visual loading indicators
   - Success/error messages
   - Form reset on success

## Environment Setup
Ensure the Web3Forms API key is set in your environment:
```env
NEXT_PUBLIC_WEB3FORMS_KEY=your-api-key
```

## Testing
Test forms for:
1. Successful submission
2. Error handling
3. Field validation
4. Loading states
5. User feedback
6. Form reset
7. Autofill functionality

## Using Alternative Form Services

To switch from Web3Forms to a different form service, you'll need to modify the form submission logic while keeping the user experience consistent. Here's how to adapt the code for different services:

### 1. FormSpree Example
```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setIsSubmitting(true)

  const form = e.currentTarget
  const formData = new FormData(form)
  
  try {
    const response = await fetch('https://formspree.io/f/your-form-id', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })

    const result = await response.json()
    
    if (response.ok) {
      form.reset()
      toast.success("Message sent successfully!", {
        className: "group",
        style: {
          backgroundColor: "hsl(var(--background))",
          color: "hsl(var(--foreground))",
          border: "1px solid hsl(var(--border))",
        },
        icon: <CheckCircle2 className="h-4 w-4" />,
        duration: 2000,
      })
    } else {
      throw new Error(result.error || 'Failed to send message')
    }
  } catch (error) {
    toast.error("Failed to send message. Please try again.", {
      className: "group",
      style: {
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
        border: "1px solid hsl(var(--border))",
      },
      icon: <AlertCircle className="h-4 w-4" />,
      duration: 5000,
    })
  } finally {
    setIsSubmitting(false)
  }
}
```

### 2. GetForm Example
```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setIsSubmitting(true)

  const form = e.currentTarget
  const formData = new FormData(form)
  
  try {
    const response = await fetch('https://getform.io/f/your-form-id', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })

    if (response.ok) {
      form.reset()
      toast.success("Message sent successfully!", {
        className: "group",
        style: {
          backgroundColor: "hsl(var(--background))",
          color: "hsl(var(--foreground))",
          border: "1px solid hsl(var(--border))",
        },
        icon: <CheckCircle2 className="h-4 w-4" />,
        duration: 2000,
      })
    } else {
      throw new Error('Failed to send message')
    }
  } catch (error) {
    toast.error("Failed to send message. Please try again.", {
      className: "group",
      style: {
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
        border: "1px solid hsl(var(--border))",
      },
      icon: <AlertCircle className="h-4 w-4" />,
      duration: 5000,
    })
  } finally {
    setIsSubmitting(false)
  }
}
```

### 3. Custom API Endpoint Example
```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  setIsSubmitting(true)

  const form = e.currentTarget
  const formData = new FormData(form)
  
  // Convert FormData to JSON if your API expects JSON
  const data = Object.fromEntries(formData.entries())
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })

    const result = await response.json()
    
    if (result.success) {
      form.reset()
      toast.success("Message sent successfully!", {
        className: "group",
        style: {
          backgroundColor: "hsl(var(--background))",
          color: "hsl(var(--foreground))",
          border: "1px solid hsl(var(--border))",
        },
        icon: <CheckCircle2 className="h-4 w-4" />,
        duration: 2000,
      })
    } else {
      throw new Error(result.message || 'Failed to send message')
    }
  } catch (error) {
    toast.error("Failed to send message. Please try again.", {
      className: "group",
      style: {
        backgroundColor: "hsl(var(--background))",
        color: "hsl(var(--foreground))",
        border: "1px solid hsl(var(--border))",
      },
      icon: <AlertCircle className="h-4 w-4" />,
      duration: 5000,
    })
  } finally {
    setIsSubmitting(false)
  }
}
```

### Key Points When Switching Services

1. Form Data Format
   - Some services expect FormData
   - Others require JSON
   - May need to adjust content-type headers

2. Response Handling
   - Different services have different success/error formats
   - Adapt the success check accordingly
   - Keep error messages consistent

3. Required Fields
   - Remove Web3Forms specific fields
   - Add any service-specific required fields
   - Update environment variables

4. CORS Considerations
   - Check if the service requires specific CORS headers
   - May need to add service-specific origins to CORS config

5. Rate Limiting
   - Check service-specific rate limits
   - Implement appropriate error handling

6. File Uploads
   - Verify file upload support
   - Adjust file handling logic if needed

The toast notifications and loading states can remain the same regardless of the form service used, maintaining a consistent user experience. 
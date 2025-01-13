import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: '28a400ce-b699-4898-8c6c-00a185066bb8',
        ...formData
      })
    })

    const data = await response.json()
    
    if (data.success) {
      return NextResponse.json({ success: true })
    }

    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 400 }
    )
  } catch (error) {
    console.error('Contact API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 
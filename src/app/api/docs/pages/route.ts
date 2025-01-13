import { NextResponse } from 'next/server'
import { getAllDocPages } from '@/lib/docs'

export async function GET() {
  const pages = getAllDocPages()
  return NextResponse.json(pages)
} 
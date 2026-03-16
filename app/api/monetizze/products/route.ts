import { NextRequest, NextResponse } from 'next/server'
import { getProducts, createProduct } from '@/lib/monetizze'

export async function GET() {
  try {
    const products = await getProducts()
    return NextResponse.json({ success: true, data: products })
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Erro ao buscar produtos'
    return NextResponse.json({ success: false, error: msg }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const product = await createProduct(body)
    return NextResponse.json({ success: true, data: product }, { status: 201 })
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Erro ao criar produto'
    return NextResponse.json({ success: false, error: msg }, { status: 500 })
  }
}

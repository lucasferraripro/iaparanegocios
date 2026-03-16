import { NextRequest, NextResponse } from 'next/server'
import { getProduct, updateProduct } from '@/lib/monetizze'

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const product = await getProduct(id)
    return NextResponse.json({ success: true, data: product })
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Erro ao buscar produto'
    return NextResponse.json({ success: false, error: msg }, { status: 500 })
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params
    const body = await req.json()
    const product = await updateProduct(id, body)
    return NextResponse.json({ success: true, data: product })
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : 'Erro ao atualizar produto'
    return NextResponse.json({ success: false, error: msg }, { status: 500 })
  }
}

import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://dex-liquidity.vercel.app/api/metrics', {
      next: { revalidate: 60 } // Cache für 1 Minute
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    
    return NextResponse.json({
      success: true,
      data: {
        balances: {
          tokenInPool: data.balances?.tokenInPool || 0,
          quoteInPool: data.balances?.quoteInPool || 0
        },
        supply: {
          total: data.supply?.total || 100000,
          circulating: data.supply?.circulating || 100000
        },
        price: data.price || {},
        marketCap: data.marketCap || {}
      },
      last_updated: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error fetching DEX liquidity:', error)
    
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch DEX liquidity data'
    }, { status: 500 })
  }
}
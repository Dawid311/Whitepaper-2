import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const response = await fetch('https://d-invest-api.vercel.app/api/balance', {
      next: { revalidate: 60 } // Cache für 1 Minute
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    
    // Die externe API liefert balance (verfügbare), wir berechnen verkaufte
    const availableTokens = parseInt(data.data?.balance || '0')
    const totalSupply = 10000
    const soldTokens = totalSupply - availableTokens
    
    return NextResponse.json({
      success: true,
      data: {
        available: availableTokens,
        sold: soldTokens,
        balance: availableTokens.toString() // Für Kompatibilität mit TokenomicsChart
      },
      last_updated: new Date().toISOString()
    })
  } catch (error) {
    console.error('Error fetching D.INVEST balance:', error)
    
    return NextResponse.json({
      success: false,
      error: 'Failed to fetch D.INVEST balance data'
    }, { status: 500 })
  }
}
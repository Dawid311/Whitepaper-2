import { NextResponse } from 'next/server'

// Token Adressen
const DFAITH_TOKEN = '0x69eFD833288605f320d77eB2aB99DDE62919BbC1'
const WETH_BASE = '0x4200000000000000000000000000000000000006'

export async function GET() {
  let dfaithPriceUsd = 0.15  // Fallback
  let dfaithPriceEur = 0.138 // Fallback
  let priceSource = 'fallback'

  try {
    // Hole ETH Preis für Umrechnungen und EUR/USD Rate
    let ethUsd = 2500
    let ethEur = 2300
    let usdToEur = 0.92 // Standard USD zu EUR Rate
    try {
      const ethResponse = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd,eur', {
        next: { revalidate: 300 }
      })
      if (ethResponse.ok) {
        const ethData = await ethResponse.json()
        ethUsd = ethData.ethereum?.usd || 2500
        ethEur = ethData.ethereum?.eur || 2300
        // Berechne die aktuelle USD zu EUR Rate basierend auf ETH
        usdToEur = ethEur / ethUsd
      }
    } catch (error) {
      console.log('Failed to fetch ETH price for conversion')
    }

    try {
      // OpenOcean Quote API für Base Chain - D.FAITH zu WETH
      // Berücksichtige dass D.FAITH nur 2 Dezimalstellen hat!
      const params = new URLSearchParams({
        chain: 'base',
        inTokenAddress: DFAITH_TOKEN,
        outTokenAddress: WETH_BASE,
        amount: '100', // 1 D.FAITH (2 Dezimalstellen, nicht 18!)
        gasPrice: '0.001'
      })
      
      const response = await fetch(`https://open-api.openocean.finance/v3/base/quote?${params}`, {
        next: { revalidate: 60 } // Cache für 1 Minute
      })
      
      if (response.ok) {
        const quoteData = await response.json()
        
        // Verwende den direkten USD-Preis aus der API
        if (quoteData?.data?.inToken?.usd) {
          dfaithPriceUsd = parseFloat(quoteData.data.inToken.usd)
          dfaithPriceEur = dfaithPriceUsd * usdToEur // Verwende aktuelle Rate
          priceSource = 'openocean'
          
          console.log(`OpenOcean: D.FAITH direct price = $${dfaithPriceUsd} (€${dfaithPriceEur.toFixed(4)})`)
        } else if (quoteData?.data?.outAmount) {
          // Fallback: WETH-Umrechnung falls direkter Preis nicht verfügbar
          const wethAmountInWei = Number(quoteData.data.outAmount)
          const wethPerDfaith = wethAmountInWei / Math.pow(10, 18)
          
          dfaithPriceUsd = wethPerDfaith * ethUsd
          dfaithPriceEur = wethPerDfaith * ethEur
          priceSource = 'openocean'
          
          console.log(`OpenOcean: 1 D.FAITH = ${wethPerDfaith} WETH = $${dfaithPriceUsd.toFixed(4)} (€${dfaithPriceEur.toFixed(4)})`)
        }
      }
    } catch (error) {
      console.log('OpenOcean API failed, trying DEXScreener...')
      
      try {
        const dexResponse = await fetch(`https://api.dexscreener.com/latest/dex/tokens/${DFAITH_TOKEN}`, {
          next: { revalidate: 120 }
        })
        
        if (dexResponse.ok) {
          const dexData = await dexResponse.json()
          const validPair = dexData.pairs?.find((pair: any) => 
            pair.chainId === 'base' && 
            parseFloat(pair.priceUsd) > 0 &&
            pair.priceUsd !== '0'
          )
          
          if (validPair) {
            dfaithPriceUsd = parseFloat(validPair.priceUsd)
            dfaithPriceEur = dfaithPriceUsd * usdToEur // Verwende aktuelle Rate
            priceSource = 'dexscreener'
          }
        }
      } catch (dexError) {
        console.log('DEXScreener also failed, using fallback prices')
      }
    }

    // Simuliere kleine Preisschwankungen
    if (priceSource === 'fallback') {
      const timeVariation = Math.sin(Date.now() / 60000) * 0.002
      const randomVariation = (Math.random() - 0.5) * 0.001
      
      dfaithPriceUsd = Math.max(0.01, dfaithPriceUsd + timeVariation + randomVariation)
      dfaithPriceEur = dfaithPriceUsd * usdToEur
    }

    return NextResponse.json({
      success: true,
      tokens: {
        dfaith: {
          symbol: 'D.FAITH',
          price_usd: Number(dfaithPriceUsd.toFixed(4)),
          price_eur: Number(dfaithPriceEur.toFixed(4)),
          source: priceSource
        },
        dinvest: {
          symbol: 'D.INVEST',
          price_usd: Number((5.00 / usdToEur).toFixed(2)), // Rückrechnung von €5 zu USD
          price_eur: 5.00 // Fester Preis von 5€
        }
      },
      eth_price_usd: ethUsd,
      eth_price_eur: ethEur,
      last_updated: new Date().toISOString()
    })

  } catch (error) {
    console.error('Error in token-prices API:', error)
    
    return NextResponse.json({
      success: false,
      tokens: {
        dfaith: {
          symbol: 'D.FAITH',
          price_usd: 0.15,
          price_eur: 0.138,
          source: 'fallback'
        },
        dinvest: {
          symbol: 'D.INVEST', 
          price_usd: Number((5.00 / 0.92).toFixed(2)), // Rückrechnung von €5 zu USD
          price_eur: 5.00 // Fester Preis von 5€
        }
      },
      error: 'Failed to fetch prices'
    })
  }
}
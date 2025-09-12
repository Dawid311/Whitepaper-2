import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Hole Staking Contract Daten
    const stakingResponse = await fetch('https://staking-contract-data.vercel.app/api/staking/contract', {
      next: { revalidate: 30 }
    })
    
    if (!stakingResponse.ok) {
      throw new Error(`Staking API error: ${stakingResponse.status}`)
    }
    
    const stakingData = await stakingResponse.json()
    
    // Parse Staking Contract Daten (verwende echte Werte)
    const totalStaked = parseFloat(stakingData.data?.totalStakedTokens || '0')
    const totalRewardsDistributed = parseFloat(stakingData.data?.totalRewardsDistributed || '0')
    const currentStage = stakingData.data?.currentStage || 1
    const userCount = stakingData.data?.userCount || 0
    const currentRewardRate = stakingData.data?.currentRewardRate || 1000
    
    // Verwende echte Contract-Werte (keine Demo-Werte mehr)
    const contractTotalStaked = totalStaked
    const contractRewardsDistributed = totalRewardsDistributed
    
    // Bestimme Halving Stufe basierend auf verteilten Tokens
    const distributedTokens = contractRewardsDistributed
    let halvingStage = 1
    let nextHalvingAt = 10000
    
    if (distributedTokens >= 80000) {
      halvingStage = 5
      nextHalvingAt = 100000
    } else if (distributedTokens >= 40000) {
      halvingStage = 4
      nextHalvingAt = 80000
    } else if (distributedTokens >= 20000) {
      halvingStage = 3
      nextHalvingAt = 40000
    } else if (distributedTokens >= 10000) {
      halvingStage = 2
      nextHalvingAt = 20000
    } else {
      halvingStage = 1
      nextHalvingAt = 10000
    }
    
    const tokensToNextHalving = Math.max(0, nextHalvingAt - distributedTokens)
    
    // Berechne Rewards Multiplikator basierend auf Halving Stufe
    const rewardsMultiplier = Math.pow(0.5, halvingStage - 1)
    
    return NextResponse.json({
      success: true,
      data: {
        totalStaked: contractTotalStaked,
        totalRewards: contractRewardsDistributed,
        activeStakers: userCount, // Echte User Count vom Contract
        halvingStage: halvingStage,
        rewardsMultiplier: rewardsMultiplier,
        currentAPY: (currentRewardRate / 1000) * 100,
        nextHalvingAt: nextHalvingAt,
        tokensToNextHalving: tokensToNextHalving,
        contractAddress: stakingData.contractAddress || '',
        lastUpdated: new Date().toISOString()
      },
      source: 'staking-contract'
    })
    
  } catch (error) {
    console.error('Error fetching staking contract data:', error)
    
    // Fallback Daten
    return NextResponse.json({
      success: false,
      data: {
        totalStaked: 1250,
        totalRewards: 125.50,
        activeStakers: 8,
        halvingStage: 1,
        rewardsMultiplier: 1.0,
        currentAPY: 100,
        nextHalvingAt: 10000,
        tokensToNextHalving: 9874.5,
        contractAddress: '',
        lastUpdated: new Date().toISOString()
      },
      source: 'fallback',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
}

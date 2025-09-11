import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // Fetch data from external API
    const response = await fetch('https://leaderboard-pi-liard.vercel.app/api/leaderboard', {
      next: { revalidate: 60 } // Cache for 60 seconds
    })
    
    if (!response.ok) {
      throw new Error('Failed to fetch leaderboard data')
    }
    
    const data = await response.json()
    
    // Calculate active users count
    const activeUsersCount = data.entries?.length || 0
    
    // Return the data with additional stats
    return NextResponse.json({
      ...data,
      stats: {
        activeUsers: activeUsersCount,
        totalExp: data.entries?.reduce((total: number, entry: any) => total + entry.expTotal, 0) || 0,
        lastUpdated: data.lastUpdated
      }
    })
    
  } catch (error) {
    console.error('Leaderboard API Error:', error)
    
    // Return mock data if external API fails
    return NextResponse.json({
      entries: [],
      prizes: [],
      timer: {
        endDate: "2025-10-03T20:00",
        title: "Contest endet in:",
        description: "Preisauszahlung erfolgt nach Ablauf des Timers",
        isActive: true
      },
      stats: {
        activeUsers: 8, // Fallback value
        totalExp: 5500,
        lastUpdated: new Date().toISOString()
      },
      error: 'Failed to fetch live data'
    })
  }
}

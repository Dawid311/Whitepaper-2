'use client'

import { useState, useEffect } from 'react'

interface DeviceInfo {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  userAgent: string
  screenWidth: number
  screenHeight: number
}

export const useDeviceDetection = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
    userAgent: '',
    screenWidth: 0,
    screenHeight: 0
  })

  useEffect(() => {
    const checkDevice = () => {
      const userAgent = navigator.userAgent.toLowerCase()
      const screenWidth = window.innerWidth
      const screenHeight = window.innerHeight

      // Mobile detection patterns
      const mobilePatterns = [
        /android/i,
        /webos/i,
        /iphone/i,
        /ipad/i,
        /ipod/i,
        /blackberry/i,
        /windows phone/i,
        /mobile/i
      ]

      // Tablet detection patterns
      const tabletPatterns = [
        /ipad/i,
        /android(?!.*mobile)/i,
        /tablet/i
      ]

      const isMobileUserAgent = mobilePatterns.some(pattern => pattern.test(userAgent))
      const isTabletUserAgent = tabletPatterns.some(pattern => pattern.test(userAgent))
      
      // Screen size based detection
      const isMobileScreen = screenWidth <= 768
      const isTabletScreen = screenWidth > 768 && screenWidth <= 1024
      const isDesktopScreen = screenWidth > 1024

      // Combine user agent and screen size for accurate detection
      const isMobile = isMobileUserAgent || (isMobileScreen && !isTabletUserAgent)
      const isTablet = isTabletUserAgent || (isTabletScreen && !isMobileUserAgent)
      const isDesktop = !isMobile && !isTablet

      setDeviceInfo({
        isMobile,
        isTablet,
        isDesktop,
        userAgent,
        screenWidth,
        screenHeight
      })
    }

    // Initial check
    checkDevice()

    // Listen for resize events
    const handleResize = () => {
      checkDevice()
    }

    window.addEventListener('resize', handleResize)
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return deviceInfo
}

export default useDeviceDetection
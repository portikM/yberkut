'use client'

import { useEffect } from 'react'

export function PageTracker() {
  useEffect(() => {
    window.umami?.track()
  }, [])

  return null
}

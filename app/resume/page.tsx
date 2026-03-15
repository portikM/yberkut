'use client'

import { useEffect } from 'react'

export default function ResumePage() {
  useEffect(() => {
    const interval = setInterval(() => {
      if (window.umami) {
        window.umami.track('resume_direct_visit')
        clearInterval(interval)
        window.location.href = '/Resume_Yuliia_Berkut.pdf'
      }
    }, 100)

    const timeout = setTimeout(() => {
      clearInterval(interval)
      window.location.href = '/Resume_Yuliia_Berkut.pdf'
    }, 2000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <p className="text-gray-500 text-sm">Redirecting to resume…</p>
    </div>
  )
}

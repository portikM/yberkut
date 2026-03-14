'use client'

import { useEffect } from 'react'

export default function ResumePage() {
  useEffect(() => {
    window.umami?.track('resume_direct_visit')
    const timer = setTimeout(() => {
      window.location.href = '/Resume_Yuliia_Berkut.pdf'
    }, 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <p className="text-gray-500 text-sm">Redirecting to resume…</p>
    </div>
  )
}

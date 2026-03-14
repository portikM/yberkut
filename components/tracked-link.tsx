'use client'

import { track } from '@/lib/analytics'

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  event: string
  eventData?: Record<string, string | number | boolean>
}

export function TrackedLink({ event, eventData, onClick, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        track(event, eventData)
        onClick?.(e)
      }}
    />
  )
}

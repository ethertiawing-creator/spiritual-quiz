'use client'
import { useEffect } from 'react'

declare global {
  interface Window { adsbygoogle: unknown[] }
}

export default function AdBanner({ slot, style }: { slot: string; style?: React.CSSProperties }) {
  const publisherId = process.env.NEXT_PUBLIC_ADSENSE_ID

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch {}
  }, [])

  if (!publisherId) return null

  return (
    <div style={{ textAlign: 'center', margin: '4px 0', minHeight: 60, ...style }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={publisherId}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}

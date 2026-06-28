'use client'

import { useMemo } from 'react'

const PETAL_COLORS = ['#fda4af', '#c4b5fd', '#86efac', '#fde68a', '#7dd3fc', '#fecdd3']

export default function Petals() {
  const petals = useMemo(() =>
    Array.from({ length: 22 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      color: PETAL_COLORS[i % PETAL_COLORS.length],
      size: Math.random() * 10 + 6,
      dur: `${Math.random() * 8 + 7}s`,
      delay: `${Math.random() * 12}s`,
      rot: `${Math.random() * 720 - 360}deg`,
      op: (Math.random() * 0.35 + 0.2).toFixed(2),
    }))
  , [])

  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {petals.map((p) => (
        <div
          key={p.id}
          className="petal"
          style={{
            left: p.left,
            top: '-20px',
            '--dur': p.dur,
            '--delay': p.delay,
            '--rot': p.rot,
            '--op': p.op,
          } as React.CSSProperties}
        >
          <svg width={p.size} height={p.size} viewBox="0 0 10 10">
            <ellipse cx="5" cy="5" rx="3.5" ry="5" fill={p.color} />
          </svg>
        </div>
      ))}
    </div>
  )
}

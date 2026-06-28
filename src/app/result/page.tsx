'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import Petals from '@/components/Petals'
import SpotIllustration from '@/components/SpotIllustration'
import { personalityTypes } from '@/data/types'
import { TypeKey } from '@/data/questions'

function ResultContent() {
  const params = useSearchParams()
  const typeKey = (params.get('type') ?? 'A') as TypeKey
  const type = personalityTypes[typeKey] ?? personalityTypes['A']

  const shareText = `私の魂のタイプは「${type.name}」でした✨\nあなたの魂が導く聖地を診断してみよう👇`
  const shareUrl = typeof window !== 'undefined' ? window.location.origin : ''

  function shareX() {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank')
  }
  function shareLine() {
    window.open(`https://line.me/R/msg/text/?${encodeURIComponent(shareText + '\n' + shareUrl)}`, '_blank')
  }

  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      background: 'linear-gradient(160deg, #fce7f3 0%, #f0f9ff 45%, #f0fdf4 100%)',
      paddingBottom: 60,
    }}>
      <Petals />

      {/* タイプカラーのアクセント */}
      <div style={{
        position: 'fixed', top: 0, left: 0, right: 0, height: '45vh',
        background: `radial-gradient(ellipse at 50% 0%, ${type.glowColor}60 0%, transparent 70%)`,
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 520, margin: '0 auto', padding: '0 20px' }}>

        {/* ヘッダー */}
        <div style={{ textAlign: 'center', paddingTop: 48, marginBottom: 32 }} className="reveal-anim">
          <p style={{ fontSize: 11, letterSpacing: '0.32em', color: type.textColor, marginBottom: 18, opacity: 0.75 }}>
            YOUR SOUL TYPE
          </p>

          {/* シンボル */}
          <div style={{
            fontSize: 60,
            marginBottom: 18,
            filter: `drop-shadow(0 4px 12px ${type.glowColor}aa)`,
          }}>
            {type.symbol}
          </div>

          {/* タイプ名 */}
          <h1 style={{
            fontSize: 'clamp(26px, 7vw, 38px)',
            fontWeight: 300,
            letterSpacing: '0.1em',
            marginBottom: 8,
            color: '#2d2d3d',
          }}>
            {type.name}
          </h1>
          <p style={{
            fontSize: 13,
            color: type.textColor,
            letterSpacing: '0.07em',
            marginBottom: 22,
            opacity: 0.85,
          }}>
            {type.subtitle}
          </p>

          {/* 属性タグ */}
          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
            {type.attributes.map((attr) => (
              <span key={attr} style={{
                fontSize: 12,
                padding: '5px 14px',
                borderRadius: 20,
                background: `${type.glowColor}88`,
                color: type.textColor,
                border: `1px solid ${type.glowColor}`,
              }}>
                {attr}
              </span>
            ))}
          </div>
        </div>

        {/* 説明カード */}
        <div className="glass-card" style={{
          padding: '24px',
          marginBottom: 28,
          lineHeight: 2.1,
          fontSize: 14,
          color: '#4a4060',
          fontWeight: 300,
        }}>
          <p style={{ fontSize: 11, letterSpacing: '0.2em', color: type.textColor, marginBottom: 12, opacity: 0.8 }}>
            ✦ あなたの魂について
          </p>
          {type.description}
        </div>

        {/* 元素 */}
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <span style={{ fontSize: 12, letterSpacing: '0.15em', color: '#9d8fb0' }}>
            司る元素：{type.element}
          </span>
        </div>

        <div className="divider" />

        {/* おすすめスポット */}
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 11, letterSpacing: '0.28em', color: type.textColor, opacity: 0.75,
            textAlign: 'center', marginBottom: 22 }}>
            ✦ あなたの魂が求める聖地
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {type.spots.map((spot, i) => (
              <div key={spot.name} className="spot-card">
                {/* SVGイラスト */}
                <SpotIllustration
                  scene={spot.scene}
                  name={spot.name}
                  prefecture={spot.prefecture}
                  index={i}
                  textColor={type.textColor}
                />
                {/* テキスト */}
                <div style={{ padding: '16px 18px 18px' }}>
                  <p style={{ fontSize: 13, lineHeight: 2, color: '#5a5070', fontWeight: 300, marginBottom: 12 }}>
                    {spot.description}
                  </p>
                  <a
                    href={`https://www.jalan.net/kankou/spt_${encodeURIComponent(spot.name)}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 11,
                      color: type.textColor,
                      opacity: 0.7,
                      letterSpacing: '0.1em',
                      textDecoration: 'none',
                      borderBottom: `1px solid ${type.glowColor}`,
                      paddingBottom: 1,
                    }}
                  >
                    旅を計画する →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* シェア */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <p style={{ fontSize: 12, letterSpacing: '0.2em', color: '#b0a0c0', marginBottom: 18 }}>
            ✦ 結果をシェアする
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-share btn-share-x" onClick={shareX}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Xでシェア
            </button>
            <button className="btn-share btn-share-line" onClick={shareLine}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.630 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.630 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
              </svg>
              LINEでシェア
            </button>
          </div>
        </div>

        {/* もう一度 */}
        <div style={{ textAlign: 'center' }}>
          <Link href="/">
            <button className="btn-primary" style={{ fontSize: 14, padding: '12px 36px' }}>
              もう一度診断する
            </button>
          </Link>
        </div>

        <p style={{ textAlign: 'center', marginTop: 36, fontSize: 11, color: '#d4c8e0', letterSpacing: '0.15em' }}>
          ✦ 魂の聖地診断 ✦
        </p>
      </div>
    </div>
  )
}

export default function ResultPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: '100vh', background: '#faf8f5', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: '#b0a0c0', letterSpacing: '0.2em', fontSize: 13 }}>鑑定中...</p>
      </div>
    }>
      <ResultContent />
    </Suspense>
  )
}

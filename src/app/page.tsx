'use client'

import Link from 'next/link'
import Petals from '@/components/Petals'

const TYPES = ['山神の守り人','海龍の導き','花神の祝福','星詠みの旅人','炎の意志','古の智慧','月影の癒し手','大地の豊穣','風の使者','氷の賢者','暁の巫女']
const TAG_COLORS = ['#fecdd3','#bae6fd','#fda4af','#ddd6fe','#fed7aa','#fef08a','#c7d2fe','#d9f99d','#a5f3fc','#e0f2fe','#fef9c3']

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: '32px 20px',
      background: 'linear-gradient(160deg, #fce7f3 0%, #f0f9ff 40%, #f0fdf4 100%)',
    }}>
      <Petals />

      {/* 背景の淡い円 */}
      <div style={{ position: 'fixed', top: '-10%', right: '-5%', width: 320, height: 320,
        borderRadius: '50%', background: 'radial-gradient(#fda4af22, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', bottom: '-5%', left: '-5%', width: 280, height: 280,
        borderRadius: '50%', background: 'radial-gradient(#86efac22, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', top: '40%', right: '5%', width: 200, height: 200,
        borderRadius: '50%', background: 'radial-gradient(#c4b5fd22, transparent 70%)', pointerEvents: 'none' }} />

      <div className="page-enter" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 480, width: '100%' }}>

        {/* イラスト：3つの重なる円 */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: -8, marginBottom: 28 }}>
          {['#fda4af','#c4b5fd','#86efac'].map((c, i) => (
            <div key={i} style={{
              width: 52, height: 52, borderRadius: '50%',
              background: `radial-gradient(circle at 35% 35%, white 0%, ${c} 100%)`,
              boxShadow: `0 4px 14px ${c}55`,
              marginLeft: i > 0 ? -10 : 0,
              zIndex: i,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 22,
            }}>
              {['🌸','⛩','🌿'][i]}
            </div>
          ))}
        </div>

        <h1 className="text-pastel-gradient" style={{
          fontSize: 'clamp(30px, 8vw, 44px)',
          fontWeight: 300,
          lineHeight: 1.35,
          letterSpacing: '0.1em',
          marginBottom: 8,
        }}>
          魂の聖地診断
        </h1>
        <p style={{ fontSize: 11, letterSpacing: '0.28em', color: '#b0a0c0', marginBottom: 36 }}>
          SOUL SANCTUARY DIAGNOSIS
        </p>

        <div className="glass-card" style={{ padding: '24px 28px', marginBottom: 32 }}>
          <p style={{ fontSize: 15, lineHeight: 2.1, color: '#5a5070', fontWeight: 300 }}>
            11の問いに答えるだけで、<br />
            あなたの魂が本当に求めている<br />
            日本のパワースポット・聖地が<br />
            明らかになります。
          </p>
        </div>

        {/* タイプタグ */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, justifyContent: 'center', marginBottom: 36 }}>
          {TYPES.map((t, i) => (
            <span key={t} style={{
              fontSize: 11,
              padding: '5px 12px',
              borderRadius: 20,
              background: TAG_COLORS[i] + '55',
              color: '#5a5070',
              letterSpacing: '0.04em',
              border: `1px solid ${TAG_COLORS[i]}`,
            }}>{t}</span>
          ))}
        </div>

        <Link href="/quiz">
          <button className="btn-primary" style={{ fontSize: 17, padding: '16px 56px' }}>
            診断を始める
          </button>
        </Link>
        <p style={{ marginTop: 16, fontSize: 12, color: '#b0a0c0', letterSpacing: '0.05em' }}>
          所要時間：約2〜3分
        </p>
      </div>
    </div>
  )
}

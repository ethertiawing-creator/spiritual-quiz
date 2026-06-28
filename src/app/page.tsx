'use client'

import Link from 'next/link'
import Petals from '@/components/Petals'
import SpotIllustration from '@/components/SpotIllustration'

const TYPES = [
  { symbol: '⛰', name: '山神の守り人', color: '#a7f3d0', text: '#059669' },
  { symbol: '🌊', name: '海龍の導き', color: '#bae6fd', text: '#0369a1' },
  { symbol: '🌸', name: '花神の祝福', color: '#fecdd3', text: '#be185d' },
  { symbol: '🌟', name: '星詠みの旅人', color: '#ddd6fe', text: '#7c3aed' },
  { symbol: '🔥', name: '炎の意志', color: '#fed7aa', text: '#c2410c' },
  { symbol: '📜', name: '古の智慧', color: '#fef08a', text: '#a16207' },
  { symbol: '🌙', name: '月影の癒し手', color: '#c7d2fe', text: '#4338ca' },
  { symbol: '🌿', name: '大地の豊穣', color: '#d9f99d', text: '#3f6212' },
  { symbol: '💨', name: '風の使者', color: '#a5f3fc', text: '#0e7490' },
  { symbol: '❄️', name: '氷の賢者', color: '#e0f2fe', text: '#075985' },
  { symbol: '🌅', name: '暁の巫女', color: '#fef9c3', text: '#a16207' },
]

const SAMPLE_SPOTS = [
  {
    scene: 'cedar-path' as const,
    name: '高野山',
    prefecture: '和歌山県',
    description: '千年杉の参道に漂う神聖な気。魂の奥底と対話できる真言密教の聖地。',
    textColor: '#059669',
  },
  {
    scene: 'ocean' as const,
    name: '伊勢神宮（外宮）',
    prefecture: '三重県',
    description: '太陽の女神・天照大御神が鎮まる日本最高の聖域。一生に一度は訪れたい場所。',
    textColor: '#0369a1',
  },
  {
    scene: 'cave' as const,
    name: '天岩戸神社',
    prefecture: '宮崎県',
    description: '天照大御神が隠れた洞窟を御神体とする聖地。神々の原点に触れる体験ができる。',
    textColor: '#7c3aed',
  },
]

const STEPS = [
  { num: '01', title: '11の問いに答える', desc: '直感でOK。正解はありません。あなたの本音を選んでください。' },
  { num: '02', title: '魂タイプが判明', desc: '11種類の中からあなただけのタイプと属性が明らかになります。' },
  { num: '03', title: '聖地を発見する', desc: '魂が求める3つのパワースポットとその旅の意味が届きます。' },
]

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      position: 'relative',
      background: 'linear-gradient(160deg, #fce7f3 0%, #f0f9ff 40%, #f0fdf4 100%)',
    }}>
      <Petals />

      <div style={{ position: 'fixed', top: '-10%', right: '-5%', width: 320, height: 320,
        borderRadius: '50%', background: 'radial-gradient(#fda4af22, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'fixed', bottom: '-5%', left: '-5%', width: 280, height: 280,
        borderRadius: '50%', background: 'radial-gradient(#86efac22, transparent 70%)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 520, margin: '0 auto', padding: '0 20px 60px' }}>

        {/* ヒーロー */}
        <div className="page-enter" style={{ textAlign: 'center', paddingTop: 52, marginBottom: 36 }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 28 }}>
            {['#fda4af','#c4b5fd','#86efac'].map((c, i) => (
              <div key={i} style={{
                width: 54, height: 54, borderRadius: '50%',
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
          <p style={{ fontSize: 11, letterSpacing: '0.28em', color: '#b0a0c0', marginBottom: 32 }}>
            SOUL SANCTUARY DIAGNOSIS
          </p>

          <div className="glass-card" style={{ padding: '24px 28px', marginBottom: 28, textAlign: 'left' }}>
            <p style={{ fontSize: 15, lineHeight: 2.1, color: '#5a5070', fontWeight: 300 }}>
              11の問いに答えるだけで、<br />
              あなたの魂が本当に求めている<br />
              <strong style={{ fontWeight: 500, color: '#7c6d8a' }}>日本のパワースポット・聖地</strong>が<br />
              明らかになります。
            </p>
          </div>

          <Link href="/quiz">
            <button className="btn-primary" style={{ fontSize: 17, padding: '16px 56px' }}>
              診断を始める
            </button>
          </Link>
          <p style={{ marginTop: 14, fontSize: 12, color: '#b0a0c0', letterSpacing: '0.05em' }}>
            無料 · 約2〜3分 · 全11問
          </p>
        </div>

        <div className="divider" />

        {/* 使い方 */}
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 11, letterSpacing: '0.28em', color: '#b0a0c0', textAlign: 'center', marginBottom: 22 }}>
            ✦ 使い方
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {STEPS.map((s) => (
              <div key={s.num} className="glass-card" style={{ padding: '16px 20px', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                <span style={{
                  fontSize: 11, fontWeight: 600, color: '#c4b5fd',
                  letterSpacing: '0.08em', minWidth: 24, paddingTop: 2,
                }}>{s.num}</span>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 500, color: '#3d3550', marginBottom: 4 }}>{s.title}</p>
                  <p style={{ fontSize: 12, color: '#9d8fb0', lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* サンプル聖地 */}
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 11, letterSpacing: '0.28em', color: '#b0a0c0', textAlign: 'center', marginBottom: 6 }}>
            ✦ こんな聖地が見つかります
          </p>
          <p style={{ fontSize: 12, color: '#b0a0c0', textAlign: 'center', marginBottom: 22, letterSpacing: '0.04em' }}>
            診断タイプによって異なる3つの聖地をご提案
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {SAMPLE_SPOTS.map((spot) => (
              <div key={spot.name} className="spot-card">
                <SpotIllustration
                  scene={spot.scene}
                  name={spot.name}
                  prefecture={spot.prefecture}
                  index={0}
                  textColor={spot.textColor}
                />
                <div style={{ padding: '14px 18px 16px' }}>
                  <p style={{ fontSize: 13, lineHeight: 1.9, color: '#5a5070', fontWeight: 300 }}>
                    {spot.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ textAlign: 'center', marginTop: 18, fontSize: 12, color: '#b0a0c0' }}>
            あなたにはどの聖地が選ばれる？
          </p>
        </div>

        <div className="divider" />

        {/* 11タイプ一覧 */}
        <div style={{ marginBottom: 40 }}>
          <p style={{ fontSize: 11, letterSpacing: '0.28em', color: '#b0a0c0', textAlign: 'center', marginBottom: 6 }}>
            ✦ 11種類の魂タイプ
          </p>
          <p style={{ fontSize: 12, color: '#b0a0c0', textAlign: 'center', marginBottom: 22, letterSpacing: '0.04em' }}>
            あなたはどのタイプ？
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {TYPES.map((t) => (
              <div key={t.name} className="glass-card" style={{
                padding: '12px 14px',
                display: 'flex', alignItems: 'center', gap: 10,
                borderLeft: `3px solid ${t.color}`,
              }}>
                <span style={{ fontSize: 20 }}>{t.symbol}</span>
                <span style={{ fontSize: 12, color: t.text, fontWeight: 500, lineHeight: 1.4 }}>{t.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="divider" />

        {/* 最終CTA */}
        <div style={{ textAlign: 'center', paddingTop: 8 }}>
          <p style={{ fontSize: 14, color: '#9d8fb0', marginBottom: 22, lineHeight: 1.9 }}>
            魂が求める聖地を知ることで、<br />
            次の旅先が決まります。
          </p>
          <Link href="/quiz">
            <button className="btn-primary" style={{ fontSize: 17, padding: '16px 56px' }}>
              いますぐ診断する
            </button>
          </Link>
          <p style={{ marginTop: 14, fontSize: 11, color: '#c4b5e0', letterSpacing: '0.08em' }}>
            ✦ 無料 · 登録不要 ✦
          </p>
        </div>

      </div>
    </div>
  )
}

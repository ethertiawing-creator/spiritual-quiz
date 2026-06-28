'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Petals from '@/components/Petals'
import { questions, TypeKey } from '@/data/questions'

type HistoryEntry = {
  scores: Record<TypeKey, number>
  optionIdx: number
}

const EMPTY_SCORES: Record<TypeKey, number> = { A:0,B:0,C:0,D:0,E:0,F:0,G:0,H:0,I:0,J:0,K:0 }

export default function QuizPage() {
  const router = useRouter()
  const [currentQ, setCurrentQ] = useState(0)
  const [scores, setScores] = useState<Record<TypeKey, number>>({ ...EMPTY_SCORES })
  const [history, setHistory] = useState<HistoryEntry[]>([])
  const [animating, setAnimating] = useState(false)

  const question = questions[currentQ]
  const progress = (currentQ / questions.length) * 100

  function selectOption(idx: number) {
    if (animating) return

    setAnimating(true)

    const chosen = question.options[idx]
    const newScores = { ...scores }
    chosen.types.forEach((t) => { newScores[t] += 1 })

    setTimeout(() => {
      if (currentQ + 1 >= questions.length) {
        const result = (Object.entries(newScores).sort((a, b) => b[1] - a[1])[0][0]) as TypeKey
        router.push(`/result?type=${result}`)
      } else {
        setHistory(prev => [...prev, { scores: { ...scores }, optionIdx: idx }])
        setScores(newScores)
        setCurrentQ(currentQ + 1)
        setAnimating(false)
      }
    }, 420)
  }

  function handleBack() {
    if (history.length === 0 || animating) return
    const prev = history[history.length - 1]
    setHistory(h => h.slice(0, -1))
    setScores(prev.scores)
    setCurrentQ(currentQ - 1)
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      background: 'linear-gradient(160deg, #fce7f3 0%, #f0f9ff 45%, #f0fdf4 100%)',
    }}>
      <Petals />

      {/* ヘッダー */}
      <div style={{ position: 'relative', zIndex: 1, padding: '20px 20px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
          {/* 戻るボタン */}
          <button
            className="btn-back"
            onClick={handleBack}
            disabled={history.length === 0}
          >
            ← 戻る
          </button>

          {/* 進捗数 */}
          <span style={{ fontSize: 13, color: '#9d8fb0', letterSpacing: '0.1em' }}>
            <span style={{ color: '#7c6d8a', fontWeight: 500 }}>{currentQ + 1}</span>
            {' '}
            <span style={{ color: '#c4b5fd' }}>/</span>
            {' '}
            {questions.length}
          </span>

          {/* ホームへ */}
          <Link href="/">
            <button style={{
              background: 'rgba(255,255,255,0.7)',
              border: '1.5px solid rgba(200,185,220,0.4)',
              borderRadius: 20,
              padding: '8px 14px',
              fontSize: 13,
              color: '#9d8fb0',
              cursor: 'pointer',
            }}>✕</button>
          </Link>
        </div>

        {/* プログレスバー */}
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* 質問エリア */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '28px 20px 40px',
        position: 'relative',
        zIndex: 1,
        maxWidth: 520,
        margin: '0 auto',
        width: '100%',
        opacity: animating ? 0 : 1,
        transform: animating ? 'translateY(-6px)' : 'translateY(0)',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
      }}>

        {/* 質問カード */}
        <div className="glass-card" style={{ padding: '28px 24px', marginBottom: 22, textAlign: 'center' }}>
          <p style={{ fontSize: 11, letterSpacing: '0.28em', color: '#b0a0c0', marginBottom: 14 }}>
            Q{currentQ + 1}
          </p>
          <p style={{
            fontSize: 'clamp(17px, 4.5vw, 21px)',
            lineHeight: 1.85,
            color: '#3d3550',
            fontWeight: 300,
            letterSpacing: '0.04em',
          }}>
            {question.question}
          </p>
        </div>

        {/* 選択肢（タップで自動進行） */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 11 }}>
          {question.options.map((opt, idx) => (
            <button
              key={idx}
              className="option-btn"
              onClick={() => selectOption(idx)}
              disabled={animating}
            >
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 24,
                height: 24,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #fda4af33, #c4b5fd33)',
                border: '1px solid #c4b5fd66',
                fontSize: 11,
                color: '#7c6d8a',
                marginRight: 12,
                flexShrink: 0,
                verticalAlign: 'middle',
              }}>
                {String.fromCharCode(65 + idx)}
              </span>
              {opt.text}
            </button>
          ))}
        </div>

        {/* タップで自動進行の案内（最初の質問のみ） */}
        {currentQ === 0 && (
          <p style={{ textAlign: 'center', marginTop: 20, fontSize: 12, color: '#b0a0c0', letterSpacing: '0.05em' }}>
            選択すると自動で次の問いへ進みます
          </p>
        )}
      </div>

      <div style={{
        position: 'fixed', bottom: 16, left: 0, right: 0,
        textAlign: 'center', zIndex: 1,
        fontSize: 11, letterSpacing: '0.18em', color: '#d4c8e0',
      }}>
        ✦ 魂の聖地診断 ✦
      </div>
    </div>
  )
}

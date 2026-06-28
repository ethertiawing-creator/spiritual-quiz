import type { Metadata, Viewport } from 'next'
import './globals.css'

const APP_URL = 'https://spiritual-quiz-eight.vercel.app'
const TITLE = '魂の聖地診断 | あなたの魂が導く、聖地への旅'
const DESCRIPTION =
  '11の問いに答えるだけ。あなたの魂が本当に求めている日本のパワースポット・聖地・秘境が明らかになります。11種の魂タイプから診断。'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: ['パワースポット', '聖地', '性格診断', '神社', '寺', '日本', 'スピリチュアル', '占い'],
  authors: [{ name: '魂の聖地診断' }],
  creator: '魂の聖地診断',
  metadataBase: new URL(APP_URL),
  openGraph: {
    title: '✨ 魂の聖地診断',
    description: '11問で分かる、あなたの魂が求める日本のパワースポット。あなたはどのタイプ？',
    url: APP_URL,
    siteName: '魂の聖地診断',
    locale: 'ja_JP',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: '魂の聖地診断 - あなたの魂が導く聖地への旅',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '✨ 魂の聖地診断',
    description: '11問で分かる、あなたの魂が求める日本のパワースポット。あなたはどのタイプ？',
    images: ['/og-image.svg'],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: '聖地診断',
  },
  formatDetection: { telephone: false },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#f9a8d4',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="h-full">
      <head>
        <link rel="apple-touch-icon" href="/icon-192.svg" />
        <link rel="icon" type="image/svg+xml" href="/icon-192.svg" />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  )
}

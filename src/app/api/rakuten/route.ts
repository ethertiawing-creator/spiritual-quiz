import { NextRequest } from 'next/server'

const RAKUTEN_AFFILIATE_ID = '' // 楽天アフィリエイトID取得後に入力

export async function GET(req: NextRequest) {
  const spot = req.nextUrl.searchParams.get('spot') ?? ''

  // 楽天トラベル: スポット名のみで検索（UTF-8対応）
  const jalanUrl = `https://travel.rakuten.co.jp/search/?f_keyword=${encodeURIComponent(spot)}`

  const dest = RAKUTEN_AFFILIATE_ID
    ? `https://hb.afl.rakuten.co.jp/hgc/${RAKUTEN_AFFILIATE_ID}/?pc=${encodeURIComponent(jalanUrl)}`
    : jalanUrl

  return new Response(null, {
    status: 302,
    headers: { Location: dest },
  })
}

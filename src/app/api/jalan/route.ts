import { NextRequest } from 'next/server'
import iconv from 'iconv-lite'

const JALAN_A8_ID = '4B66KH+9OW19U+14CS+609HT'

function toSjis(text: string): string {
  const buf = iconv.encode(text, 'Shift_JIS')
  return Array.from(buf)
    .map((b) => '%' + (b as number).toString(16).toUpperCase().padStart(2, '0'))
    .join('')
}

export async function GET(req: NextRequest) {
  const spot = req.nextUrl.searchParams.get('spot') ?? ''
  const pref = req.nextUrl.searchParams.get('pref') ?? ''
  const type = req.nextUrl.searchParams.get('type') ?? 'hotel'

  const keyword = `${pref}　${spot}`
  const enc = toSjis(keyword)

  // Shift-JIS エンコード済みじゃらん URL を生成
  const jalanUrl =
    type === 'hotel'
      ? `https://www.jalan.net/uw/uwp2011/uww2011init.do?keyword=${enc}&distCd=06&rootCd=7701&screenId=FWPCTOP&ccnt=button-fw&image1=`
      : `https://www.jalan.net/kankou/kw_${enc}/?screenId=OUW1011&processId=&afCd=&rootCd=7741&exLrgGenreCd=01`

  // アフィリエイト経由: API → A8.net(+じゃらんURL) → じゃらん
  const dest = JALAN_A8_ID
    ? `https://px.a8.net/svt/ejp?a8mat=${JALAN_A8_ID}&a8ejpredirect=${encodeURIComponent(jalanUrl)}`
    : jalanUrl

  return new Response(null, {
    status: 302,
    headers: { Location: dest },
  })
}

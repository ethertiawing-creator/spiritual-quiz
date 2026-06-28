import { NextRequest, NextResponse } from 'next/server'
import iconv from 'iconv-lite'

function toSjisEncoded(text: string): string {
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
  const encoded = toSjisEncoded(keyword)

  const url =
    type === 'hotel'
      ? `https://www.jalan.net/uw/uwp2011/uww2011init.do?keyword=${encoded}&distCd=06&rootCd=7701&screenId=FWPCTOP&ccnt=button-fw&image1=`
      : `https://www.jalan.net/kankou/kw_${encoded}/?screenId=OUW1011&processId=&afCd=&rootCd=7741&exLrgGenreCd=01`

  return NextResponse.redirect(url)
}

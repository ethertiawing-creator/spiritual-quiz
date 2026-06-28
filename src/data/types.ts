import { TypeKey } from './questions'

export type SceneType =
  | 'mountain'
  | 'ocean'
  | 'sakura'
  | 'fire'
  | 'ancient'
  | 'misty-lake'
  | 'forest'
  | 'sunrise'
  | 'gorge'
  | 'stars'
  | 'cedar-path'
  | 'snow-shrine'
  | 'island'
  | 'night-sea'
  | 'autumn'
  | 'cave'

export type Spot = {
  name: string
  prefecture: string
  description: string
  scene: SceneType
}

export type PersonalityType = {
  id: TypeKey
  name: string
  subtitle: string
  attributes: string[]
  description: string
  element: string
  glowColor: string
  textColor: string
  symbol: string
  spots: Spot[]
}

export const personalityTypes: Record<TypeKey, PersonalityType> = {
  A: {
    id: 'A',
    name: '山神の守り人',
    subtitle: '深山に宿る、静かなる守護者',
    attributes: ['内省', '孤高', '深山'],
    description: 'あなたの魂は、深い山の静寂に宿っています。人の喧騒を離れ、大地と対話することで本来の力を発揮するタイプ。高い洞察力と揺るぎない精神力を持ち、まるで古の山神に守られているような存在感を放ちます。孤独を恐れず、むしろ一人の時間の中で真の自分と出会える人です。',
    element: '土・木',
    glowColor: '#a7f3d0',
    textColor: '#059669',
    symbol: '⛰',
    spots: [
      { name: '高野山', prefecture: '和歌山県', description: '空海が開いた真言密教の聖地。千年以上の時を超えた古杉の参道に漂う神聖な気に包まれ、魂の奥底と対話できる場所。', scene: 'cedar-path' },
      { name: '白山', prefecture: '石川県', description: '古くから修験者が集う三霊山のひとつ。頂上から見渡す雲海は、現世と異界の境を感じさせる。白山比咩神社でご神縁を結ぼう。', scene: 'mountain' },
      { name: '出羽三山', prefecture: '山形県', description: '生・死・再生を旅する修験の道。月山・羽黒山・湯殿山を巡ることで魂が浄化され、新たな自分として生まれ変わる体験ができる。', scene: 'snow-shrine' },
    ],
  },
  B: {
    id: 'B',
    name: '海龍の導き',
    subtitle: '深海から現れし、浄化の使者',
    attributes: ['浄化', '感情', '流動'],
    description: 'あなたの魂は、絶えず動き続ける海のように、豊かな感受性を持っています。人の痛みや喜びを深く感じ取り、自然と人を引き寄せる不思議な引力があります。波のように柔軟でありながら、時に荒れ狂う情熱も秘めている。海龍に守られた、浄化と再生の力の持ち主です。',
    element: '水',
    glowColor: '#bae6fd',
    textColor: '#0284c7',
    symbol: '🐉',
    spots: [
      { name: '龍宮神社（竜宮）', prefecture: '鹿児島県', description: '乙姫様を祀る海中鳥居が幻想的な神社。満潮時に海に沈む鳥居は、異世界への扉そのもの。海龍の加護を強く感じられる聖地。', scene: 'ocean' },
      { name: '青島神社', prefecture: '宮崎県', description: '亜熱帯の緑が生い茂る島全体が神域。波状の岩「鬼の洗濯板」に囲まれた神秘の島で、縁結びと航海安全を司る神が宿る。', scene: 'island' },
      { name: '江ノ島神社', prefecture: '神奈川県', description: '弁財天を祀る、海に浮かぶ小島の聖地。岩屋洞窟では太古の神気を感じ、芸術・縁結び・財運のご利益を授かれる。', scene: 'night-sea' },
    ],
  },
  C: {
    id: 'C',
    name: '花神の祝福',
    subtitle: '花びらに宿る、縁結びの精霊',
    attributes: ['縁結び', '美', '愛'],
    description: 'あなたの魂は、花が咲き誇るように人を引き寄せ、縁を結ぶ才能を持っています。美しいものへの感受性が高く、人の心を温める言葉や笑顔が自然と溢れ出る。花神の祝福を受けたあなたは、どこへ行っても花のような存在として人々の記憶に残ります。',
    element: '花・風',
    glowColor: '#fecdd3',
    textColor: '#e11d48',
    symbol: '🌸',
    spots: [
      { name: '貴船神社', prefecture: '京都府', description: '水の神を祀る、縁結びの最強聖地。川床に並ぶ無数のろうそくが幻想的な光を放つ「貴船の燈籠」は息をのむ美しさ。', scene: 'sakura' },
      { name: '出雲大社', prefecture: '島根県', description: '縁結びの神・大国主命が鎮座する日本最古の神社。旧暦10月には全国の神々が集まり、人々の縁を結ぶ会議を開くとされる。', scene: 'ancient' },
      { name: '箱根神社', prefecture: '神奈川県', description: '芦ノ湖の湖面に建つ平和の鳥居が有名。縁結び・開運・商売繁盛の神として親しまれ、その美しさは訪れる者の心を魂から揺さぶる。', scene: 'misty-lake' },
    ],
  },
  D: {
    id: 'D',
    name: '星詠みの旅人',
    subtitle: '夜空に描かれた、予言者の魂',
    attributes: ['神秘', '直感', '宇宙'],
    description: 'あなたの魂は、夜空の星のように無限の可能性を秘めています。鋭い直感と深い洞察力で、他の人が気づかない真実を見抜く力があります。神秘的なものへの感性が高く、宇宙や霊的な世界との繋がりを強く感じる旅人。星に導かれるように、使命の道を歩んでいます。',
    element: '星・光',
    glowColor: '#ddd6fe',
    textColor: '#7c3aed',
    symbol: '⭐',
    spots: [
      { name: '熊野三山', prefecture: '和歌山県', description: '熊野本宮・速玉・那智の三社からなる聖地。神の使い「八咫烏」が導く熊野古道は、魂の深部へと向かう道そのものとされる。', scene: 'forest' },
      { name: '戸隠神社', prefecture: '長野県', description: '天岩戸伝説の岩を開いた神を祀る奥社。樹齢400年を超える杉並木の参道は、別次元への入口のような神秘的な空間。', scene: 'cedar-path' },
      { name: '三峯神社', prefecture: '埼玉県', description: '秩父山中の最強パワースポット。白い氣守は入手困難で有名。狼を神使とする古社で、秘境感と霊気が他の神社と一線を画す。', scene: 'stars' },
    ],
  },
  E: {
    id: 'E',
    name: '炎の意志',
    subtitle: '燃え盛る魂が拓く、変革の炎',
    attributes: ['情熱', '変革', '挑戦'],
    description: 'あなたの魂は、消えることのない炎のように激しく燃えています。強烈な意志と行動力で、不可能を可能に変える力を持っています。試練を乗り越えるたびに強くなり、周囲を照らす光となる。炎の精に守られたあなたは、現状に満足せず常に変革と成長を求め続ける魂の持ち主です。',
    element: '火',
    glowColor: '#fed7aa',
    textColor: '#ea580c',
    symbol: '🔥',
    spots: [
      { name: '富士山', prefecture: '静岡県・山梨県', description: '日本の最高峰にして、古来より神聖視される霊峰。山頂でご来光を拝む体験は、炎の意志を持つあなたの魂に新たな火を灯す。', scene: 'fire' },
      { name: '愛宕神社', prefecture: '京都府', description: '火の神・火産霊命を祀る、日本最高所の神社のひとつ。800段の石段を登り切った先にある境内は、達成感と強烈な霊気に満ちている。', scene: 'autumn' },
      { name: '鞍馬寺', prefecture: '京都府', description: '牛若丸が修行した霊山。宇宙の根源的エネルギー「尊天」を祀る。鞍馬の火祭は日本三大奇祭のひとつで、炎と魂が共鳴する場所。', scene: 'mountain' },
    ],
  },
  F: {
    id: 'F',
    name: '古の智慧',
    subtitle: '時を超えた知が宿る、賢者の魂',
    attributes: ['知識', '伝統', '格式'],
    description: 'あなたの魂は、何千年もの歴史と智慧を宿しているかのようです。物事の本質を見抜く深い洞察力と、古い知恵を現代に活かす能力を持っています。伝統や格式を重んじながらも、その本質を理解した上で新しいものを生み出せる。過去と現在と未来を繋ぐ、知の守護者です。',
    element: '金・土',
    glowColor: '#fef08a',
    textColor: '#ca8a04',
    symbol: '⛩',
    spots: [
      { name: '伊勢神宮', prefecture: '三重県', description: '日本の最高神・天照大神を祀る神宮。式年遷宮で20年ごとに社殿を建て替える伝統は1300年以上続き、日本精神の源泉と言える聖地。', scene: 'ancient' },
      { name: '日光東照宮', prefecture: '栃木県', description: '徳川家康を神格化した東照大権現を祀る。絢爛豪華な彫刻と建築美は江戸の最高技術の結晶。「見ざる言わざる聞かざる」の教えが心に刻まれる。', scene: 'autumn' },
      { name: '春日大社', prefecture: '奈良県', description: '奈良時代から続く、藤原氏の氏神を祀る古社。世界遺産にも登録された原始林に囲まれた境内で、千年を超える歴史の重みを全身で感じられる。', scene: 'sakura' },
    ],
  },
  G: {
    id: 'G',
    name: '月影の癒し手',
    subtitle: '静寂に宿る、夢と癒しの守護者',
    attributes: ['静寂', '夢', '癒し'],
    description: 'あなたの魂は、月の光のように静かで柔らかい癒しの力を持っています。人の心の傷に気づき、言葉なく癒すことができる稀有な存在。夢と現実の境界を柔軟に行き来する感性を持ち、夜の静寂の中でこそ真の力を発揮します。月影に守られた、癒しと夢の贈り手です。',
    element: '水・月',
    glowColor: '#c7d2fe',
    textColor: '#4f46e5',
    symbol: '🌙',
    spots: [
      { name: '恐山', prefecture: '青森県', description: '日本三大霊場のひとつ。荒涼とした岩肌と硫黄の煙が立ち込める異世界のような景色の中で、亡き人への思いと向き合える魂の場所。', scene: 'misty-lake' },
      { name: '玉置神社', prefecture: '奈良県', description: '熊野の奥地に鎮座する「縁がある人だけが辿り着ける」と言われる神社。深い霧と巨杉に包まれた境内は、この世ならぬ静寂に満ちている。', scene: 'forest' },
      { name: '高千穂峡', prefecture: '宮崎県', description: '神話の舞台となった渓谷。柱状節理の断崖と真名井の滝が織りなす幻想的な景観は、夢の中の風景のよう。日本書紀にも登場する聖地。', scene: 'gorge' },
    ],
  },
  H: {
    id: 'H',
    name: '大地の豊穣',
    subtitle: '命を育む、豊かなる大地の精霊',
    attributes: ['生命力', '感謝', '豊穣'],
    description: 'あなたの魂は、命を育む大地のように、温かく豊かな生命力に溢れています。人を受け入れ、育て、支える力が自然と身についている。小さな命にも大きな喜びを見出し、自然の恵みへの深い感謝を忘れない。大地の精霊に守られた、豊かさと愛の体現者です。',
    element: '土・草',
    glowColor: '#d9f99d',
    textColor: '#65a30d',
    symbol: '🌿',
    spots: [
      { name: '屋久島', prefecture: '鹿児島県', description: '樹齢7200年の縄文杉が息づく世界遺産の島。一日に365日分の雨が降る島には、原始の地球のエネルギーがそのまま封じ込められている。', scene: 'forest' },
      { name: '熊野古道（中辺路）', prefecture: '和歌山県', description: '千年以上の歴史を持つ世界遺産の巡礼路。苔むした石畳と木漏れ日の中を歩くと、大地と繋がる感覚が全身を満たしていく。', scene: 'cedar-path' },
      { name: '厳島神社', prefecture: '広島県', description: '海に浮かぶ大鳥居で名高い世界遺産。島全体を神域とする厳島は、自然と人の祈りが調和した、地球の豊かさを感じられる場所。', scene: 'ocean' },
    ],
  },
  I: {
    id: 'I',
    name: '風の使者',
    subtitle: '境界を越え続ける、自由なる魂',
    attributes: ['自由', '変化', '冒険'],
    description: 'あなたの魂は、風のように自由で、境界を知りません。どんな場所にも新たな発見を見出し、変化を恐れず旅を続ける冒険者。型にはまることを嫌い、誰も踏み込んでいない道を開拓していく。風の使者として、世界の果てまで自由に飛び回る使命を持っています。',
    element: '風・空',
    glowColor: '#a5f3fc',
    textColor: '#0891b2',
    symbol: '💨',
    spots: [
      { name: '与那国島', prefecture: '沖縄県', description: '日本最西端の秘境。水中に眠る謎の「海底遺跡」と荒々しい断崖絶壁が、地の果てまで来た感覚を与える。自由な魂が羽を広げられる場所。', scene: 'island' },
      { name: '稲佐の浜', prefecture: '島根県', description: '旧暦10月に全国の神々が上陸するとされる神聖な浜辺。日本海に沈む夕日と弁天島のシルエットが、この世の終わりと始まりを感じさせる。', scene: 'night-sea' },
      { name: '種子島', prefecture: '鹿児島県', description: '南国の風と宇宙ロケットが共存する不思議な島。天然記念物の砂浜「広田浜」や宇宙センターから、地球と宇宙の繋がりを感じられる。', scene: 'sunrise' },
    ],
  },
  J: {
    id: 'J',
    name: '氷の賢者',
    subtitle: '静寂と孤独が磨き上げた、真実の探求者',
    attributes: ['孤独', '洞察', '真実'],
    description: 'あなたの魂は、冬の澄んだ空気のように透明で、妥協を許しません。深い孤独の中でこそ真実が見え、表面的なものに惑わされない鋭い洞察力を持っています。少数でも深い人間関係を好み、真摯に物事と向き合う姿勢が周囲から深い信頼を得ます。氷の賢者として、静かに真実を探し続ける魂です。',
    element: '氷・雪',
    glowColor: '#e0f2fe',
    textColor: '#0369a1',
    symbol: '❄',
    spots: [
      { name: '立山（雄山）', prefecture: '富山県', description: '富士山・白山と並ぶ日本三霊山。雄大なアルペンルートの先にある雄山神社では、標高3003mの頂上で天と地の境に立つような感覚を覚える。', scene: 'mountain' },
      { name: '諏訪大社', prefecture: '長野県', description: '全国25000社の総本社で日本最古の神社のひとつ。御柱祭の迫力と、諏訪湖の冬に現れる「御神渡り」は、神の存在を疑いなく感じさせる。', scene: 'misty-lake' },
      { name: '八甲田山', prefecture: '青森県', description: '樹氷が創り出す「スノーモンスター」が有名な霊峰。冬の白銀の静寂の中に立つと、余計なものがすべて削ぎ落とされ、魂の芯だけが残る。', scene: 'snow-shrine' },
    ],
  },
  K: {
    id: 'K',
    name: '暁の巫女',
    subtitle: '夜明けを告げる、再生と希望の使者',
    attributes: ['希望', '再生', '光'],
    description: 'あなたの魂は、夜明けの最初の光のように、人々に希望をもたらします。どんな闇の中でも光を見出す強さと、傷ついても何度でも立ち上がる再生の力を持っています。暁の巫女として、あなたの存在そのものが人々の希望の光となる。終わりの先に必ず始まりがあることを、体で知っている人です。',
    element: '光・太陽',
    glowColor: '#fef9c3',
    textColor: '#b45309',
    symbol: '🌅',
    spots: [
      { name: '天岩戸神社', prefecture: '宮崎県', description: '天照大神が隠れた岩戸の伝説の地。神話の最初の「光の復活」の舞台であり、再生と希望を象徴する日本最古の聖地のひとつ。', scene: 'cave' },
      { name: '高千穂（天真名井）', prefecture: '宮崎県', description: '天孫降臨の舞台となった神話の里。朝霧に包まれた早朝の高千穂は、この世に光が生まれた瞬間を追体験させてくれる。', scene: 'gorge' },
      { name: '日向岬', prefecture: '宮崎県', description: '「日向」の名の通り、日本で最も早く太陽の光を受ける土地のひとつ。断崖絶壁から見る日の出は、魂を根底から揺さぶる再生の光。', scene: 'sunrise' },
    ],
  },
}

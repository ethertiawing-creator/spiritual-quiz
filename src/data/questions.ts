export type TypeKey = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' | 'I' | 'J' | 'K'

export type Option = {
  text: string
  types: TypeKey[]
}

export type Question = {
  id: number
  question: string
  options: Option[]
}

export const questions: Question[] = [
  {
    id: 1,
    question: '心が揺れているとき、どこに向かいたくなる？',
    options: [
      { text: '深い森や山の中へ', types: ['A', 'H'] },
      { text: '海や川のほとりへ', types: ['B', 'I'] },
      { text: '静かな神社やお寺へ', types: ['G', 'F'] },
      { text: '光が差し込む高台へ', types: ['K', 'E'] },
    ],
  },
  {
    id: 2,
    question: 'あなたを表す自然現象は？',
    options: [
      { text: '山に立ちこめる霧', types: ['A', 'G'] },
      { text: '岸に打ち寄せる波', types: ['B', 'H'] },
      { text: '夜空を流れる星', types: ['D', 'K'] },
      { text: '野を駆け抜ける風', types: ['I', 'C'] },
    ],
  },
  {
    id: 3,
    question: '旅に出る一番の理由は？',
    options: [
      { text: '自分を見つめ直すため', types: ['A', 'J'] },
      { text: '心の傷を癒すため', types: ['G', 'B'] },
      { text: '新しい縁や出会いのため', types: ['C', 'K'] },
      { text: '知識や真実を求めて', types: ['F', 'D'] },
    ],
  },
  {
    id: 4,
    question: '神様にお願いするとしたら？',
    options: [
      { text: '心の平和と静かな時間', types: ['G', 'J'] },
      { text: '縁結びや愛の成就', types: ['C', 'K'] },
      { text: '勝運や仕事の成功', types: ['E', 'F'] },
      { text: '自由と冒険への加護', types: ['I', 'D'] },
    ],
  },
  {
    id: 5,
    question: '理想の旅のスタイルは？',
    options: [
      { text: '山奥の宿でひとり静かに', types: ['A', 'J'] },
      { text: '海辺でただ波の音を聞く', types: ['B', 'G'] },
      { text: '歴史ある街をゆっくりめぐる', types: ['F', 'H'] },
      { text: '地図にない道を歩く', types: ['I', 'E'] },
    ],
  },
  {
    id: 6,
    question: 'パワースポットに何を求める？',
    options: [
      { text: '浄化と洗い流し', types: ['B', 'G'] },
      { text: '古来からの力とエネルギー', types: ['F', 'A'] },
      { text: '縁と見えない導き', types: ['C', 'K'] },
      { text: '啓示と魂の目覚め', types: ['D', 'J'] },
    ],
  },
  {
    id: 7,
    question: '直感で選んで。惹かれる色は？',
    options: [
      { text: '深緑・苔色・大地色', types: ['A', 'H'] },
      { text: '深海色・群青・漆黒', types: ['B', 'J'] },
      { text: '金・白・桜色', types: ['C', 'K'] },
      { text: '紫・藍・夜の色', types: ['D', 'G'] },
    ],
  },
  {
    id: 8,
    question: '夢によく現れるのは？',
    options: [
      { text: '古い社や霧の中の道', types: ['A', 'F'] },
      { text: '水の流れや深い海', types: ['B', 'G'] },
      { text: '炎や赤く燃える空', types: ['E', 'K'] },
      { text: '旅する自分や知らない土地', types: ['I', 'D'] },
    ],
  },
  {
    id: 9,
    question: 'あなたの守護だと感じる存在は？',
    options: [
      { text: '龍神・水を司る神', types: ['B', 'H'] },
      { text: '天狐・知を司る神', types: ['D', 'F'] },
      { text: '弁財天・縁と美の神', types: ['C', 'K'] },
      { text: '不動明王・炎の守護者', types: ['E', 'A'] },
    ],
  },
  {
    id: 10,
    question: '旅で何を持ち帰りたい？',
    options: [
      { text: '深い静寂と自分との対話', types: ['J', 'A'] },
      { text: '大きな感動と新たな気づき', types: ['K', 'D'] },
      { text: '人との繋がりと温もり', types: ['H', 'I'] },
      { text: '答えと揺るぎない真実', types: ['F', 'J'] },
    ],
  },
  {
    id: 11,
    question: '最後に。あなたの魂が今、求めているのは？',
    options: [
      { text: '解放と、風のような自由', types: ['I', 'E'] },
      { text: '繋がりと、深い愛', types: ['C', 'B'] },
      { text: '真実と、静かな智慧', types: ['F', 'J'] },
      { text: '再生と、光への希望', types: ['K', 'G'] },
    ],
  },
]

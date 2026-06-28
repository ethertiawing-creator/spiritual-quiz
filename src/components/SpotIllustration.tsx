import { SceneType } from '@/data/types'

const scenes: Record<SceneType, { bg: string; content: React.ReactNode }> = {
  mountain: {
    bg: 'linear-gradient(180deg, #fce7f3 0%, #e9d5ff 55%, #dbeafe 100%)',
    content: (
      <>
        {/* Moon */}
        <circle cx="320" cy="48" r="22" fill="white" opacity="0.9" />
        <circle cx="332" cy="41" r="17" fill="#e9d5ff" />
        {/* Stars */}
        {[[60,28],[150,18],[240,38],[100,55],[280,22],[180,10]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r={i%2===0?1.8:1.2} fill="white" opacity="0.75" />
        ))}
        {/* Back mountains */}
        <path d="M-10 220 L80 90 L170 180 L260 85 L360 200 L420 220Z" fill="#e9d5ff" opacity="0.6" />
        {/* Mid mountains */}
        <path d="M30 250 L160 105 L290 250Z" fill="#c4b5fd" opacity="0.75" />
        <path d="M200 250 L310 115 L420 250Z" fill="#d8b4fe" opacity="0.65" />
        {/* Mist */}
        <ellipse cx="200" cy="215" rx="250" ry="28" fill="white" opacity="0.55" />
        <ellipse cx="160" cy="230" rx="220" ry="22" fill="white" opacity="0.45" />
        {/* Torii */}
        <g transform="translate(170,148)">
          <rect x="-32" y="0" width="64" height="7" rx="3.5" fill="#f9a8d4" opacity="0.9" />
          <rect x="-26" y="7" width="52" height="5" rx="2.5" fill="#f9a8d4" opacity="0.75" />
          <rect x="-22" y="12" width="9" height="52" rx="4.5" fill="#f9a8d4" opacity="0.85" />
          <rect x="13" y="12" width="9" height="52" rx="4.5" fill="#f9a8d4" opacity="0.85" />
          <rect x="-27" y="40" width="54" height="4" rx="2" fill="#f9a8d4" opacity="0.6" />
        </g>
        {/* Small trees */}
        <ellipse cx="80" cy="238" rx="18" ry="24" fill="#bbf7d0" opacity="0.7" />
        <ellipse cx="320" cy="235" rx="22" ry="28" fill="#bbf7d0" opacity="0.6" />
      </>
    ),
  },

  ocean: {
    bg: 'linear-gradient(180deg, #dbeafe 0%, #bae6fd 45%, #ecfdf5 75%, #a7f3d0 100%)',
    content: (
      <>
        {/* Clouds */}
        <ellipse cx="80" cy="45" rx="50" ry="22" fill="white" opacity="0.85" />
        <ellipse cx="110" cy="38" rx="38" ry="18" fill="white" opacity="0.9" />
        <ellipse cx="300" cy="55" rx="55" ry="20" fill="white" opacity="0.8" />
        <ellipse cx="330" cy="46" rx="40" ry="16" fill="white" opacity="0.85" />
        {/* Sun reflection */}
        <ellipse cx="200" cy="128" rx="12" ry="30" fill="#fef9c3" opacity="0.6" />
        {/* Sea surface */}
        <path d="M0 130 Q50 122 100 130 Q150 138 200 130 Q250 122 300 130 Q350 138 400 130 L400 250 L0 250Z" fill="#7dd3fc" opacity="0.35" />
        <path d="M0 148 Q60 140 120 148 Q180 156 240 148 Q300 140 360 148 L400 148 L400 250 L0 250Z" fill="#93c5fd" opacity="0.3" />
        {/* Horizon */}
        <line x1="0" y1="128" x2="400" y2="128" stroke="#bae6fd" strokeWidth="1.5" />
        {/* Torii in water */}
        <g transform="translate(185,75)">
          <rect x="-36" y="0" width="72" height="8" rx="4" fill="#fb7185" opacity="0.85" />
          <path d="M-42 0 Q-36 -8 -30 0" fill="#fb7185" opacity="0.7" />
          <path d="M30 0 Q36 -8 42 0" fill="#fb7185" opacity="0.7" />
          <rect x="-28" y="8" width="56" height="5" rx="2.5" fill="#fb7185" opacity="0.7" />
          <rect x="-24" y="13" width="10" height="65" rx="5" fill="#fb7185" opacity="0.8" />
          <rect x="14" y="13" width="10" height="65" rx="5" fill="#fb7185" opacity="0.8" />
        </g>
        {/* Waves */}
        {[155,168,180].map((y,i) => (
          <path key={i} d={`M0 ${y} Q50 ${y-6} 100 ${y} Q150 ${y+6} 200 ${y} Q250 ${y-6} 300 ${y} Q350 ${y+6} 400 ${y}`}
            stroke="white" strokeWidth="1.5" fill="none" opacity={0.4 - i*0.08} />
        ))}
        {/* Birds */}
        <path d="M60 75 Q65 70 70 75" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M80 65 Q85 60 90 65" stroke="white" strokeWidth="1.5" fill="none" />
      </>
    ),
  },

  sakura: {
    bg: 'linear-gradient(135deg, #fce7f3 0%, #ffe4e6 40%, #fff7ed 100%)',
    content: (
      <>
        {/* Ground */}
        <path d="M0 210 Q200 200 400 210 L400 250 L0 250Z" fill="#fef3c7" opacity="0.6" />
        {/* Tree trunk */}
        <path d="M170 250 C168 220 160 190 155 165 C150 140 155 125 165 115" stroke="#92400e" strokeWidth="10" fill="none" strokeLinecap="round" opacity="0.6" />
        <path d="M165 115 C162 100 158 85 160 70" stroke="#92400e" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.55" />
        {/* Branch right */}
        <path d="M165 140 C180 130 200 125 215 115" stroke="#92400e" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.5" />
        <path d="M165 115 C180 105 195 95 205 80" stroke="#92400e" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.45" />
        {/* Blossom clouds */}
        <ellipse cx="165" cy="80" rx="55" ry="45" fill="#fda4af" opacity="0.75" />
        <ellipse cx="200" cy="95" rx="45" ry="38" fill="#fecdd3" opacity="0.8" />
        <ellipse cx="140" cy="100" rx="40" ry="33" fill="#fda4af" opacity="0.7" />
        <ellipse cx="175" cy="55" rx="38" ry="30" fill="#fce7f3" opacity="0.85" />
        <ellipse cx="215" cy="75" rx="35" ry="28" fill="#fecdd3" opacity="0.75" />
        {/* Falling petals */}
        {[[260,60],[300,80],[320,120],[280,150],[240,180],[310,175],[340,95],[270,200],[330,50]].map(([x,y],i) => (
          <ellipse key={i} cx={x} cy={y} rx="5" ry="3" fill="#fda4af" opacity="0.65"
            transform={`rotate(${i*30} ${x} ${y})`} />
        ))}
        {/* Path stones */}
        {[195,215,230,248].map((x,i) => (
          <ellipse key={i} cx={x+i*5} cy={235} rx="12" ry="7" fill="#fef3c7" opacity="0.7" />
        ))}
        {/* Lantern */}
        <g transform="translate(290,140)">
          <rect x="-12" y="0" width="24" height="32" rx="4" fill="#fde68a" opacity="0.85" />
          <rect x="-8" y="-8" width="16" height="10" rx="3" fill="#f59e0b" opacity="0.7" />
          <circle cx="0" cy="16" r="6" fill="#fef9c3" opacity="0.9" />
          <line x1="0" y1="32" x2="0" y2="45" stroke="#92400e" strokeWidth="2" opacity="0.5" />
        </g>
      </>
    ),
  },

  fire: {
    bg: 'linear-gradient(180deg, #fef9c3 0%, #fed7aa 45%, #fce7f3 100%)',
    content: (
      <>
        {/* Sun glow */}
        <circle cx="200" cy="95" r="55" fill="#fef08a" opacity="0.4" />
        <circle cx="200" cy="95" r="38" fill="#fde68a" opacity="0.6" />
        <circle cx="200" cy="95" r="25" fill="#fbbf24" opacity="0.85" />
        {/* Sun rays */}
        {Array.from({length:12},(_,i)=>{
          const a = (i*30)*Math.PI/180
          const r1=30, r2=52
          return <line key={i}
            x1={200+r1*Math.cos(a)} y1={95+r1*Math.sin(a)}
            x2={200+r2*Math.cos(a)} y2={95+r2*Math.sin(a)}
            stroke="#fbbf24" strokeWidth="2" opacity="0.5" />
        })}
        {/* Clouds */}
        <ellipse cx="70" cy="65" rx="45" ry="18" fill="white" opacity="0.7" />
        <ellipse cx="95" cy="56" rx="32" ry="14" fill="white" opacity="0.75" />
        <ellipse cx="330" cy="72" rx="48" ry="19" fill="white" opacity="0.65" />
        {/* Mt. Fuji body */}
        <path d="M0 250 L140 145 L200 175 L260 145 L400 250Z" fill="#a78bfa" opacity="0.5" />
        {/* Mt. Fuji peak */}
        <path d="M155 155 L200 95 L245 155Z" fill="#c4b5fd" opacity="0.7" />
        {/* Snow cap */}
        <path d="M175 140 L200 108 L225 140 Q212 145 200 143 Q188 145 175 140Z" fill="white" opacity="0.9" />
        {/* Horizon */}
        <line x1="0" y1="180" x2="400" y2="180" stroke="#fed7aa" strokeWidth="1" opacity="0.5" />
      </>
    ),
  },

  ancient: {
    bg: 'linear-gradient(180deg, #fefce8 0%, #fef3c7 50%, #fff7ed 100%)',
    content: (
      <>
        {/* Background trees */}
        <ellipse cx="60" cy="170" rx="28" ry="60" fill="#86efac" opacity="0.5" />
        <ellipse cx="340" cy="165" rx="30" ry="65" fill="#86efac" opacity="0.45" />
        <ellipse cx="100" cy="180" rx="22" ry="50" fill="#a3e635" opacity="0.4" />
        <ellipse cx="300" cy="175" rx="25" ry="55" fill="#a3e635" opacity="0.38" />
        {/* Ground path */}
        <path d="M110 250 L150 210 L250 210 L290 250Z" fill="#fef3c7" opacity="0.7" />
        {/* Large Torii */}
        <g transform="translate(200,60)">
          {/* Top curved beam */}
          <path d="M-70 0 Q0 -15 70 0" stroke="#f59e0b" strokeWidth="12" fill="none" strokeLinecap="round" opacity="0.85" />
          <path d="M-75 12 Q0 -2 75 12" stroke="#fbbf24" strokeWidth="7" fill="none" strokeLinecap="round" opacity="0.7" />
          {/* Pillars */}
          <rect x="-58" y="12" width="14" height="130" rx="7" fill="#f59e0b" opacity="0.8" />
          <rect x="44" y="12" width="14" height="130" rx="7" fill="#f59e0b" opacity="0.8" />
          {/* Lower bar */}
          <rect x="-62" y="60" width="124" height="8" rx="4" fill="#fbbf24" opacity="0.65" />
          {/* Rope */}
          <path d="M-54 38 Q-20 48 0 42 Q20 36 54 46" stroke="#92400e" strokeWidth="2" fill="none" opacity="0.4" />
        </g>
        {/* Stone lanterns */}
        <g transform="translate(110,170)">
          <rect x="-10" y="-30" width="20" height="28" rx="3" fill="#fde68a" opacity="0.8" />
          <rect x="-13" y="-35" width="26" height="8" rx="2" fill="#f59e0b" opacity="0.7" />
          <rect x="-8" y="-5" width="16" height="35" rx="2" fill="#d1d5db" opacity="0.5" />
        </g>
        <g transform="translate(290,170)">
          <rect x="-10" y="-30" width="20" height="28" rx="3" fill="#fde68a" opacity="0.8" />
          <rect x="-13" y="-35" width="26" height="8" rx="2" fill="#f59e0b" opacity="0.7" />
          <rect x="-8" y="-5" width="16" height="35" rx="2" fill="#d1d5db" opacity="0.5" />
        </g>
        {/* Autumn leaves */}
        {[[130,130],[155,115],[170,140],[230,120],[255,135],[275,110],[295,140]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r={5+i%3} fill={['#fca5a5','#fb923c','#fde68a'][i%3]} opacity="0.7" />
        ))}
      </>
    ),
  },

  'misty-lake': {
    bg: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 50%, #ecfdf5 100%)',
    content: (
      <>
        {/* Distant mountains */}
        <path d="M-10 160 L70 80 L150 140 L220 70 L300 130 L380 75 L420 160Z" fill="#bae6fd" opacity="0.5" />
        <path d="M-10 170 L50 110 L120 155 L190 95 L260 145 L340 100 L420 170Z" fill="#7dd3fc" opacity="0.4" />
        {/* Mist layers */}
        <ellipse cx="200" cy="165" rx="260" ry="30" fill="white" opacity="0.6" />
        <ellipse cx="200" cy="175" rx="240" ry="25" fill="white" opacity="0.5" />
        <ellipse cx="200" cy="183" rx="220" ry="20" fill="white" opacity="0.4" />
        {/* Lake surface */}
        <path d="M0 175 Q100 168 200 175 Q300 182 400 175 L400 250 L0 250Z" fill="#bae6fd" opacity="0.4" />
        {/* Reflection */}
        <path d="M80 185 Q90 188 100 185" stroke="white" strokeWidth="1" opacity="0.6" />
        <path d="M180 190 Q200 186 220 190" stroke="white" strokeWidth="1" opacity="0.55" />
        <path d="M280 187 Q295 191 310 187" stroke="white" strokeWidth="1" opacity="0.5" />
        {/* Mountain reflection in lake */}
        <path d="M100 180 L145 220 L190 180Z" fill="#93c5fd" opacity="0.3" />
        {/* Snow cap */}
        <path d="M112 110 L145 78 L178 110 Q162 115 145 113 Q128 115 112 110Z" fill="white" opacity="0.85" />
        {/* Reed / plants */}
        {[[50,200],[60,210],[320,205],[335,215],[350,200]].map(([x,y],i) => (
          <line key={i} x1={x} y1={y} x2={x+4} y2={y-30} stroke="#a3e635" strokeWidth="2" opacity="0.5" />
        ))}
      </>
    ),
  },

  forest: {
    bg: 'linear-gradient(180deg, #ecfdf5 0%, #d1fae5 50%, #dcfce7 100%)',
    content: (
      <>
        {/* Sky peek */}
        <path d="M0 0 L400 0 L400 60 L0 60Z" fill="#dbeafe" opacity="0.4" />
        {/* Back trees (wide, soft) */}
        {[[30,0],[80,10],[330,5],[370,15]].map(([x,y],i) => (
          <ellipse key={i} cx={x+20} cy={100+y} rx={20+i*3} ry={80+i*5} fill="#bbf7d0" opacity="0.5" />
        ))}
        {/* Main tall cedars */}
        {[[80,0],[130,8],[170,0],[230,5],[270,-5],[320,2]].map(([x,y],i) => (
          <g key={i}>
            <rect x={x-5} y={60+y} width={10} height={190} rx={5} fill="#6b7280" opacity="0.25} " />
            <path d={`M${x-28} ${250} L${x} ${50+y} L${x+28} ${250}Z`} fill="#4ade80" opacity={0.55-i*0.02} />
            <path d={`M${x-20} ${190} L${x} ${80+y} L${x+20} ${190}Z`} fill="#86efac" opacity={0.65-i*0.02} />
            <path d={`M${x-13} ${130} L${x} ${100+y} L${x+13} ${130}Z`} fill="#a7f3d0" opacity={0.7} />
          </g>
        ))}
        {/* Light rays */}
        {[[140,0,180,200],[200,0,220,200],[250,0,240,200]].map(([x1,y1,x2,y2],i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fef9c3" strokeWidth={12-i*3} opacity={0.15} />
        ))}
        {/* Stone path */}
        {[220,232,244,255,266,276].map((y,i) => (
          <ellipse key={i} cx={200+Math.sin(i)*8} cy={y} rx={18} ry={8} fill="#fef3c7" opacity={0.6} />
        ))}
        {/* Moss / fern at base */}
        <ellipse cx="200" cy="248" rx="200" ry="15" fill="#86efac" opacity="0.3" />
      </>
    ),
  },

  sunrise: {
    bg: 'linear-gradient(180deg, #fce7f3 0%, #fed7aa 35%, #fef9c3 65%, #dbeafe 100%)',
    content: (
      <>
        {/* Sun glow outer */}
        <circle cx="200" cy="128" r="70" fill="#fef9c3" opacity="0.35" />
        <circle cx="200" cy="128" r="50" fill="#fde68a" opacity="0.5" />
        <circle cx="200" cy="128" r="33" fill="#fbbf24" opacity="0.8" />
        {/* Sun rays */}
        {Array.from({length:16},(_,i)=>{
          const a = (i*22.5)*Math.PI/180
          const r1=36,r2=62
          return <line key={i}
            x1={200+r1*Math.cos(a)} y1={128+r1*Math.sin(a)}
            x2={200+r2*Math.cos(a)} y2={128+r2*Math.sin(a)}
            stroke="#fbbf24" strokeWidth="2" opacity="0.4" />
        })}
        {/* Horizon line */}
        <line x1="0" y1="128" x2="400" y2="128" stroke="#fed7aa" strokeWidth="2" opacity="0.6" />
        {/* Sea */}
        <path d="M0 128 Q100 120 200 128 Q300 136 400 128 L400 250 L0 250Z" fill="#7dd3fc" opacity="0.3" />
        {/* Shimmer reflection */}
        <ellipse cx="200" cy="155" rx="15" ry="35" fill="#fef9c3" opacity="0.5" />
        <ellipse cx="195" cy="175" rx="8" ry="15" fill="#fde68a" opacity="0.3" />
        {/* Pink clouds */}
        <ellipse cx="70" cy="95" rx="52" ry="20" fill="#fda4af" opacity="0.55" />
        <ellipse cx="95" cy="85" rx="38" ry="16" fill="#fecdd3" opacity="0.6" />
        <ellipse cx="330" cy="100" rx="55" ry="22" fill="#fda4af" opacity="0.5" />
        <ellipse cx="305" cy="88" rx="40" ry="17" fill="#fecdd3" opacity="0.55" />
        {/* Horizon island silhouette */}
        <path d="M80 128 Q120 118 160 128" stroke="#c4b5fd" strokeWidth="3" fill="none" opacity="0.5" />
      </>
    ),
  },

  gorge: {
    bg: 'linear-gradient(180deg, #ecfdf5 0%, #cffafe 50%, #dbeafe 100%)',
    content: (
      <>
        {/* Left canyon wall */}
        <path d="M0 0 L0 250 L130 250 L90 120 L120 0Z" fill="#6ee7b7" opacity="0.55" />
        <path d="M0 0 L0 250 L100 250 L60 100 L90 0Z" fill="#a7f3d0" opacity="0.45" />
        {/* Right canyon wall */}
        <path d="M400 0 L400 250 L270 250 L310 120 L280 0Z" fill="#6ee7b7" opacity="0.55" />
        <path d="M400 0 L400 250 L300 250 L340 100 L310 0Z" fill="#a7f3d0" opacity="0.45" />
        {/* Waterfall */}
        <path d="M185 0 Q195 40 190 80 Q185 120 192 160 Q198 200 195 250" stroke="white" strokeWidth="18" fill="none" opacity="0.7" strokeLinecap="round" />
        <path d="M200 0 Q210 40 205 80 Q200 120 207 160 Q213 200 210 250" stroke="white" strokeWidth="10" fill="none" opacity="0.5" strokeLinecap="round" />
        {/* Mist at waterfall base */}
        <ellipse cx="198" cy="235" rx="60" ry="18" fill="white" opacity="0.65" />
        <ellipse cx="198" cy="245" rx="80" ry="14" fill="white" opacity="0.5" />
        {/* Pool */}
        <ellipse cx="198" cy="228" rx="55" ry="20" fill="#7dd3fc" opacity="0.45" />
        {/* Small boat */}
        <path d="M175 220 Q198 215 220 220 L215 228 Q198 232 180 228Z" fill="white" opacity="0.75" />
        <line x1="198" y1="215" x2="198" y2="200" stroke="#92400e" strokeWidth="1.5" opacity="0.5" />
        {/* Ferns on walls */}
        {[[80,180],[105,210],[290,190],[315,215]].map(([x,y],i) => (
          <ellipse key={i} cx={x} cy={y} rx={15+i%2*5} ry={8} fill="#86efac" opacity="0.6" transform={`rotate(${i%2===0?-20:20} ${x} ${y})`} />
        ))}
      </>
    ),
  },

  'cedar-path': {
    bg: 'linear-gradient(180deg, #dbeafe 0%, #ecfdf5 40%, #d1fae5 100%)',
    content: (
      <>
        {/* Sky at top */}
        <path d="M0 0 L400 0 L400 55 L0 55Z" fill="#bae6fd" opacity="0.4" />
        {/* Light rays */}
        {[[155,0,168,260],[185,0,192,260],[215,0,208,260]].map(([x1,y1,x2,y2],i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#fef9c3" strokeWidth={16-i*4} opacity={0.18} />
        ))}
        {/* Left cedar trees (tall, narrow, converging perspective) */}
        {[[20,0],[55,5],[85,12],[110,20],[132,32]].map(([x,yt],i) => {
          const scale = 0.5 + i * 0.12
          const h = 260 - yt
          return (
            <g key={i}>
              <rect x={x - 6*scale} y={yt} width={12*scale} height={h} rx={6*scale} fill="#4ade80" opacity={0.38 + i*0.05} />
              <path d={`M${x-28*scale} ${250} L${x} ${yt+20} L${x+28*scale} ${250}Z`} fill="#86efac" opacity={0.45+i*0.05} />
              <path d={`M${x-18*scale} ${180} L${x} ${yt+50} L${x+18*scale} ${180}Z`} fill="#a7f3d0" opacity={0.5+i*0.04} />
            </g>
          )
        })}
        {/* Right cedar trees (mirrored) */}
        {[[380,0],[345,5],[315,12],[290,20],[268,32]].map(([x,yt],i) => {
          const scale = 0.5 + i * 0.12
          const h = 260 - yt
          return (
            <g key={i}>
              <rect x={x - 6*scale} y={yt} width={12*scale} height={h} rx={6*scale} fill="#4ade80" opacity={0.38 + i*0.05} />
              <path d={`M${x-28*scale} ${250} L${x} ${yt+20} L${x+28*scale} ${250}Z`} fill="#86efac" opacity={0.45+i*0.05} />
              <path d={`M${x-18*scale} ${180} L${x} ${yt+50} L${x+18*scale} ${180}Z`} fill="#a7f3d0" opacity={0.5+i*0.04} />
            </g>
          )
        })}
        {/* Stone path (perspective ellipses) */}
        {[250,230,215,202,192,184,178].map((y,i) => (
          <ellipse key={i} cx={200} cy={y} rx={18+i*14} ry={7+i*3} fill="#fef3c7" opacity={0.65} />
        ))}
        {/* Vanishing point glow */}
        <circle cx="200" cy="170" r="30" fill="#fef9c3" opacity="0.25" />
        <circle cx="200" cy="170" r="15" fill="#fef9c3" opacity="0.35" />
        {/* Mist at base */}
        <ellipse cx="200" cy="248" rx="200" ry="14" fill="white" opacity="0.45" />
      </>
    ),
  },

  'snow-shrine': {
    bg: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 45%, #f8fafc 100%)',
    content: (
      <>
        {/* Snowflakes */}
        {[[60,30,4],[120,15,3],[180,40,3.5],[250,20,4],[310,35,3],[360,12,3.5],[40,80,2.5],[90,60,2],[340,70,2.5],[160,10,2.5],[290,55,2]].map(([x,y,r],i) => (
          <g key={i}>
            <circle cx={x} cy={y} r={r} fill="white" opacity={0.8} />
            <line x1={x-r*1.6} y1={y} x2={x+r*1.6} y2={y} stroke="white" strokeWidth={0.8} opacity={0.6} />
            <line x1={x} y1={y-r*1.6} x2={x} y2={y+r*1.6} stroke="white" strokeWidth={0.8} opacity={0.6} />
          </g>
        ))}
        {/* Background cedars (snow-covered) */}
        {[[60,40],[340,40],[100,50],[300,50]].map(([x,yt],i) => (
          <g key={i}>
            <path d={`M${x-22} 230 L${x} ${yt+20} L${x+22} 230Z`} fill="#86efac" opacity={0.35} />
            <path d={`M${x-12} ${yt+10} L${x} ${yt-10} L${x+12} ${yt+10}Z`} fill="white" opacity={0.7} />
          </g>
        ))}
        {/* Snow ground */}
        <path d="M0 210 Q100 200 200 205 Q300 210 400 200 L400 250 L0 250Z" fill="white" opacity="0.85" />
        <ellipse cx="200" cy="205" rx="240" ry="16" fill="white" opacity="0.7" />
        {/* Shrine gate (torii) */}
        <g transform="translate(200,80)">
          <rect x="-42" y="0" width="84" height="10" rx="5" fill="#bae6fd" opacity="0.85" />
          <path d="-48 0 Q0 -12 48 0" fill="none" stroke="#bae6fd" strokeWidth="3" opacity="0.6" />
          <rect x="-34" y="10" width="68" height="6" rx="3" fill="#bae6fd" opacity="0.7" />
          <rect x="-30" y="16" width="12" height="100" rx="6" fill="#93c5fd" opacity="0.8" />
          <rect x="18" y="16" width="12" height="100" rx="6" fill="#93c5fd" opacity="0.8" />
          <rect x="-35" y="55" width="70" height="5" rx="2.5" fill="#bae6fd" opacity="0.65" />
          {/* Snow on torii */}
          <ellipse cx="-36" cy="0" rx="8" ry="5" fill="white" opacity="0.9" />
          <ellipse cx="36" cy="0" rx="8" ry="5" fill="white" opacity="0.9" />
          <ellipse cx="0" cy="-2" rx="28" ry="6" fill="white" opacity="0.85" />
        </g>
        {/* Shrine in background */}
        <g transform="translate(200,145)" opacity="0.55">
          <path d="M-30 0 Q0 -18 30 0Z" fill="#93c5fd" />
          <rect x="-22" y="0" width="44" height="30" rx="2" fill="#bae6fd" />
          <ellipse cx="0" cy="-2" rx="25" ry="6" fill="white" opacity="0.8" />
        </g>
        {/* Falling snow particles */}
        {[[100,100],[200,85],[280,110],[150,130],[330,90],[70,120],[240,140]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r={1.5} fill="white" opacity={0.7} />
        ))}
      </>
    ),
  },

  island: {
    bg: 'linear-gradient(180deg, #dbeafe 0%, #7dd3fc 35%, #06b6d4 60%, #a7f3d0 100%)',
    content: (
      <>
        {/* Sky clouds */}
        <ellipse cx="80" cy="38" rx="48" ry="18" fill="white" opacity="0.8" />
        <ellipse cx="108" cy="29" rx="35" ry="14" fill="white" opacity="0.85" />
        <ellipse cx="320" cy="45" rx="52" ry="19" fill="white" opacity="0.75" />
        <ellipse cx="292" cy="34" rx="38" ry="15" fill="white" opacity="0.8" />
        {/* Sea */}
        <path d="M0 115 Q100 108 200 115 Q300 122 400 115 L400 250 L0 250Z" fill="#38bdf8" opacity="0.5" />
        <path d="M0 130 Q80 124 160 130 Q240 136 320 130 Q370 126 400 130 L400 250 L0 250Z" fill="#7dd3fc" opacity="0.4" />
        {/* Waves */}
        {[145,158,170].map((y,i) => (
          <path key={i} d={`M0 ${y} Q50 ${y-5} 100 ${y} Q150 ${y+5} 200 ${y} Q250 ${y-5} 300 ${y} Q350 ${y+5} 400 ${y}`}
            stroke="white" strokeWidth="1.5" fill="none" opacity={0.4-i*0.08} />
        ))}
        {/* Island main shape */}
        <path d="M110 115 Q155 75 200 68 Q245 75 290 115Z" fill="#86efac" opacity="0.9" />
        <path d="M125 115 Q165 85 200 78 Q235 85 275 115Z" fill="#4ade80" opacity="0.8" />
        {/* Palm trees */}
        <g transform="translate(175,80)">
          <path d="M0 35 C-2 20 2 5 0 -10" stroke="#92400e" strokeWidth="4" fill="none" strokeLinecap="round" opacity="0.7" />
          <ellipse cx="-18" cy="-10" rx="20" ry="8" fill="#a3e635" opacity="0.8" transform="rotate(-20 -18 -10)" />
          <ellipse cx="15" cy="-14" rx="18" ry="7" fill="#86efac" opacity="0.8" transform="rotate(15 15 -14)" />
          <ellipse cx="-5" cy="-18" rx="15" ry="6" fill="#a3e635" opacity="0.85" transform="rotate(-5 -5 -18)" />
        </g>
        <g transform="translate(220,85)">
          <path d="M0 28 C1 15 -1 4 0 -8" stroke="#92400e" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.65" />
          <ellipse cx="-14" cy="-8" rx="16" ry="6" fill="#86efac" opacity="0.75" transform="rotate(-25 -14 -8)" />
          <ellipse cx="12" cy="-12" rx="14" ry="5" fill="#a3e635" opacity="0.75" transform="rotate(20 12 -12)" />
        </g>
        {/* Beach/sand */}
        <ellipse cx="200" cy="114" rx="90" ry="10" fill="#fef9c3" opacity="0.75" />
        {/* Sun glare on water */}
        <ellipse cx="200" cy="160" rx="10" ry="40" fill="white" opacity="0.3" />
      </>
    ),
  },

  'night-sea': {
    bg: 'linear-gradient(180deg, #ede9fe 0%, #c7d2fe 35%, #dbeafe 65%, #e0f2fe 100%)',
    content: (
      <>
        {/* Stars */}
        {[[40,25,2.5],[95,15,2],[155,30,2.2],[220,10,2.5],[285,22,2],[345,18,2.3],[70,50,1.8],[180,45,1.5],[310,40,1.8],[250,55,1.5],[130,60,1.5]].map(([x,y,r],i) => (
          <circle key={i} cx={x} cy={y} r={r} fill="white" opacity={0.65+i%3*0.1} />
        ))}
        {/* Large moon */}
        <circle cx="310" cy="55" r="32" fill="#fef9c3" opacity="0.92" />
        <circle cx="322" cy="47" r="25" fill="#ede9fe" />
        {/* Moon halo ring */}
        <circle cx="310" cy="55" r="40" fill="none" stroke="#fef9c3" strokeWidth="2" opacity="0.25" />
        {/* Horizon */}
        <line x1="0" y1="125" x2="400" y2="125" stroke="#c7d2fe" strokeWidth="1.5" opacity="0.7" />
        {/* Sea */}
        <path d="M0 125 Q100 118 200 125 Q300 132 400 125 L400 250 L0 250Z" fill="#a5b4fc" opacity="0.3" />
        <path d="M0 138 Q80 132 160 138 Q240 144 320 138 Q370 134 400 138 L400 250 L0 250Z" fill="#818cf8" opacity="0.2" />
        {/* Moon reflection */}
        <ellipse cx="200" cy="155" rx="12" ry="38" fill="#fef9c3" opacity="0.45" />
        <ellipse cx="200" cy="175" rx="7" ry="18" fill="#fef9c3" opacity="0.3" />
        {/* Ripples */}
        {[148,162,175].map((y,i) => (
          <path key={i} d={`M140 ${y} Q200 ${y-4} 260 ${y}`} stroke="white" strokeWidth="1.2" fill="none" opacity={0.35-i*0.07} />
        ))}
        {/* Waves */}
        {[140,155,168].map((y,i) => (
          <path key={i} d={`M0 ${y} Q60 ${y-5} 120 ${y} Q180 ${y+5} 240 ${y} Q300 ${y-5} 360 ${y} Q390 ${y+3} 400 ${y}`}
            stroke="white" strokeWidth="1" fill="none" opacity={0.25-i*0.04} />
        ))}
        {/* Island silhouette on horizon */}
        <path d="M60 125 Q100 110 140 125" fill="#8b5cf6" opacity="0.35" />
        <path d="M260 125 Q300 112 340 125" fill="#8b5cf6" opacity="0.3" />
        {/* Shooting star */}
        <line x1="50" y1="20" x2="90" y2="50" stroke="white" strokeWidth="1.5" opacity="0.55" />
        <circle cx="50" cy="20" r="2" fill="white" opacity="0.8" />
      </>
    ),
  },

  autumn: {
    bg: 'linear-gradient(180deg, #fef9c3 0%, #fed7aa 40%, #fce7f3 100%)',
    content: (
      <>
        {/* Sky */}
        <path d="M0 0 L400 0 L400 80 L0 80Z" fill="#fef3c7" opacity="0.5" />
        {/* Background hill */}
        <path d="M-10 180 Q100 120 200 140 Q300 160 420 125 L420 250 L-10 250Z" fill="#fed7aa" opacity="0.45" />
        {/* Left maple tree */}
        <g>
          <path d="M70 250 C68 220 65 195 70 170 C72 155 68 140 75 125" stroke="#92400e" strokeWidth="9" fill="none" strokeLinecap="round" opacity="0.55" />
          <path d="M75 125 C72 108 70 90 68 72" stroke="#92400e" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.5" />
          <path d="M75 150 C85 138 100 130 115 122" stroke="#92400e" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.45" />
          <ellipse cx="75" cy="80" rx="52" ry="42" fill="#fb923c" opacity="0.75" />
          <ellipse cx="62" cy="90" rx="40" ry="35" fill="#f97316" opacity="0.7" />
          <ellipse cx="88" cy="75" rx="38" ry="32" fill="#fbbf24" opacity="0.65" />
          <ellipse cx="110" cy="105" rx="30" ry="25" fill="#fb923c" opacity="0.7" />
        </g>
        {/* Right maple tree */}
        <g>
          <path d="M330 250 C332 218 335 192 330 165 C328 148 332 135 325 118" stroke="#92400e" strokeWidth="9" fill="none" strokeLinecap="round" opacity="0.55" />
          <path d="M325 118 C328 100 330 82 332 65" stroke="#92400e" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.5" />
          <path d="M325 145 C315 133 300 125 285 118" stroke="#92400e" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.45" />
          <ellipse cx="325" cy="75" rx="52" ry="42" fill="#fca5a5" opacity="0.75" />
          <ellipse cx="338" cy="85" rx="40" ry="35" fill="#fb923c" opacity="0.7" />
          <ellipse cx="312" cy="70" rx="38" ry="32" fill="#fde68a" opacity="0.65" />
          <ellipse cx="290" cy="102" rx="30" ry="25" fill="#fca5a5" opacity="0.7" />
        </g>
        {/* Stone path */}
        {[225,215,205,196,189].map((y,i) => (
          <ellipse key={i} cx={200+Math.sin(i)*6} cy={y} rx={16+i*5} ry={7} fill="#fef3c7" opacity={0.65} />
        ))}
        {/* Torii in center-back */}
        <g transform="translate(200,130)" opacity="0.75">
          <rect x="-26" y="0" width="52" height="6" rx="3" fill="#f97316" opacity="0.8" />
          <path d="M-30 0 Q0 -8 30 0" fill="none" stroke="#f97316" strokeWidth="2" opacity="0.6" />
          <rect x="-20" y="6" width="40" height="4" rx="2" fill="#f97316" opacity="0.65" />
          <rect x="-17" y="10" width="7" height="48" rx="3.5" fill="#fb923c" opacity="0.75" />
          <rect x="10" y="10" width="7" height="48" rx="3.5" fill="#fb923c" opacity="0.75" />
        </g>
        {/* Falling leaves */}
        {[[50,160,25],[130,145,15],[180,170,30],[250,155,20],[310,165,10],[160,200,35],[290,185,15],[80,200,40],[350,145,5]].map(([x,y,rot],i) => (
          <ellipse key={i} cx={x} cy={y} rx={6} ry={4} fill={['#fb923c','#fbbf24','#fca5a5','#f97316'][i%4]} opacity={0.7}
            transform={`rotate(${rot} ${x} ${y})`} />
        ))}
      </>
    ),
  },

  cave: {
    bg: 'linear-gradient(135deg, #fce7f3 0%, #e9d5ff 50%, #dbeafe 100%)',
    content: (
      <>
        {/* Outer cave darkness */}
        <path d="M0 0 L0 250 L400 250 L400 0 Z" fill="#1e1b4b" opacity="0.15" />
        {/* Cave opening arch */}
        <path d="M0 0 L0 250 L85 250 L85 80 Q110 20 200 15 Q290 20 315 80 L315 250 L400 250 L400 0Z"
          fill="#0f0f2e" opacity="0.55" />
        {/* Cave walls - left */}
        <path d="M0 0 L0 250 L80 250 Q55 200 60 150 Q65 100 80 60 Q100 20 0 0Z"
          fill="#2d1b69" opacity="0.5" />
        {/* Cave walls - right */}
        <path d="M400 0 L400 250 L320 250 Q345 200 340 150 Q335 100 320 60 Q300 20 400 0Z"
          fill="#2d1b69" opacity="0.5" />
        {/* Inner glow - the light from inside */}
        <ellipse cx="200" cy="160" rx="100" ry="130" fill="#fef9c3" opacity="0.3" />
        <ellipse cx="200" cy="180" rx="70" ry="95" fill="#fde68a" opacity="0.4" />
        <ellipse cx="200" cy="200" rx="50" ry="65" fill="#fbbf24" opacity="0.35" />
        <ellipse cx="200" cy="220" rx="30" ry="38" fill="#fef9c3" opacity="0.55" />
        {/* Divine light rays */}
        {Array.from({length:10},(_,i)=>{
          const a = (i*36-90)*Math.PI/180
          return <line key={i}
            x1={200} y1={130}
            x2={200+150*Math.cos(a)} y2={130+150*Math.sin(a)}
            stroke="#fef9c3" strokeWidth={2} opacity={0.15} />
        })}
        {/* Pool/water at cave floor */}
        <ellipse cx="200" cy="240" rx="85" ry="18" fill="#bae6fd" opacity="0.5" />
        <ellipse cx="200" cy="238" rx="70" ry="12" fill="#7dd3fc" opacity="0.35" />
        {/* Water ripples */}
        {[238,244].map((y,i) => (
          <path key={i} d={`M150 ${y} Q200 ${y-4} 250 ${y}`} stroke="white" strokeWidth="1" fill="none" opacity={0.5-i*0.15} />
        ))}
        {/* Sacred rock / shrine inside */}
        <g transform="translate(200,175)" opacity="0.7">
          <path d="M-15 0 Q0 -20 15 0Z" fill="#fef9c3" opacity="0.85" />
          <rect x="-12" y="0" width="24" height="18" rx="2" fill="#fde68a" opacity="0.8" />
        </g>
        {/* Moss/fern on cave walls */}
        {[[75,180],[78,210],[322,175],[318,208]].map(([x,y],i) => (
          <ellipse key={i} cx={x} cy={y} rx={12} ry={6} fill="#86efac" opacity={0.5} transform={`rotate(${i%2===0?-30:30} ${x} ${y})`} />
        ))}
        {/* Magic particles */}
        {[[165,130,3],[235,125,2.5],[190,105,2],[210,110,2.5],[175,155,2]].map(([x,y,r],i) => (
          <circle key={i} cx={x} cy={y} r={r} fill="#fef9c3" opacity={0.75} />
        ))}
      </>
    ),
  },

  stars: {
    bg: 'linear-gradient(180deg, #ede9fe 0%, #ddd6fe 45%, #dbeafe 100%)',
    content: (
      <>
        {/* Large moon */}
        <circle cx="300" cy="60" r="38" fill="#fef9c3" opacity="0.9" />
        <circle cx="315" cy="50" r="30" fill="#ede9fe" />
        {/* Moon halo */}
        <circle cx="300" cy="60" r="48" fill="none" stroke="#fef9c3" strokeWidth="2" opacity="0.3" />
        {/* Stars scattered */}
        {[[40,30,3],[80,50,2],[120,20,2.5],[170,40,2],[220,15,3],[260,35,1.8],[350,25,2.5],[30,80,1.5],[140,65,2],[380,55,2],[200,50,1.5],[50,100,1.8]].map(([x,y,r],i) => (
          <circle key={i} cx={x} cy={y} r={r} fill="white" opacity={0.5+Math.random()*0.4} />
        ))}
        {/* Shooting star */}
        <line x1="60" y1="25" x2="110" y2="55" stroke="white" strokeWidth="1.5" opacity="0.6" />
        <circle cx="60" cy="25" r="2.5" fill="white" opacity="0.8" />
        {/* Ground mist */}
        <ellipse cx="200" cy="215" rx="250" ry="28" fill="white" opacity="0.5" />
        <ellipse cx="200" cy="228" rx="230" ry="22" fill="white" opacity="0.4" />
        {/* Shrine silhouette */}
        <g transform="translate(200,150)" opacity="0.7">
          {/* Roof */}
          <path d="M-50 0 Q0 -30 50 0Z" fill="#c4b5fd" />
          <path d="M-40 0 Q0 -22 40 0Z" fill="#a78bfa" />
          {/* Body */}
          <rect x="-30" y="0" width="60" height="45" rx="3" fill="#c4b5fd" opacity="0.85" />
          {/* Door */}
          <rect x="-10" y="20" width="20" height="25" rx="2" fill="#ede9fe" opacity="0.6" />
          {/* Steps */}
          <rect x="-35" y="45" width="70" height="6" rx="2" fill="#a78bfa" opacity="0.6" />
          <rect x="-40" y="51" width="80" height="5" rx="2" fill="#8b5cf6" opacity="0.5" />
        </g>
        {/* Torii before shrine */}
        <g transform="translate(200,195)">
          <rect x="-22" y="-8" width="44" height="5" rx="2.5" fill="#f9a8d4" opacity="0.7" />
          <rect x="-17" y="-3" width="34" height="3" rx="1.5" fill="#f9a8d4" opacity="0.6" />
          <rect x="-15" y="0" width="5" height="28" rx="2.5" fill="#f9a8d4" opacity="0.65" />
          <rect x="10" y="0" width="5" height="28" rx="2.5" fill="#f9a8d4" opacity="0.65" />
        </g>
      </>
    ),
  },
}

export default function SpotIllustration({
  scene,
  name,
  prefecture,
  index,
  textColor,
}: {
  scene: SceneType
  name: string
  prefecture: string
  index: number
  textColor: string
}) {
  const { bg, content } = scenes[scene]
  return (
    <div style={{ position: 'relative', borderRadius: '16px 16px 0 0', overflow: 'hidden', aspectRatio: '16/9' }}>
      {/* Gradient background */}
      <div style={{ position: 'absolute', inset: 0, background: bg }} />
      {/* SVG illustration */}
      <svg
        viewBox="0 0 400 250"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {content}
      </svg>
      {/* Badges */}
      <div style={{ position: 'absolute', top: 12, left: 12, width: 26, height: 26, borderRadius: '50%',
        background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 11, color: textColor, fontWeight: 500 }}>
        {`0${index + 1}`}
      </div>
      <div style={{ position: 'absolute', top: 12, right: 12, padding: '3px 10px', borderRadius: 20,
        background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(6px)',
        fontSize: 10, color: textColor, letterSpacing: '0.06em' }}>
        {prefecture}
      </div>
      {/* Bottom name overlay */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '20px 16px 12px',
        background: 'linear-gradient(to top, rgba(255,255,255,0.9) 0%, transparent 100%)' }}>
        <p style={{ fontSize: 18, fontWeight: 400, color: '#2d2d3d', letterSpacing: '0.06em', margin: 0,
          textShadow: '0 1px 4px rgba(255,255,255,0.8)' }}>
          {name}
        </p>
        <div style={{ height: 2, width: 32, background: textColor, opacity: 0.5, borderRadius: 1, marginTop: 4 }} />
      </div>
    </div>
  )
}

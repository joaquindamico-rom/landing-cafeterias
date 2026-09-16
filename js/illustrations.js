/* =====================================================================
   ILUSTRACIONES (SVG) — placeholders gráficos hasta tener fotos reales
   ===================================================================== */
const DF = `font-family="Archivo, 'Arial Narrow', Arial, sans-serif"`;
const W125 = `style="font-variation-settings:'wdth' 125"`;
const W62 = `style="font-variation-settings:'wdth' 62"`;

/* Fachada antes / después (viewBox 1200x720) */
function facade(after){
  const s = [];
  const wall = after ? "#EAE4D7" : "#BFB6A5";
  s.push(`<svg viewBox="0 0 1200 720" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${after?"Fachada con identidad visual coherente":"Fachada sin identidad, con carteles improvisados"}">`);
  s.push(`<defs>
    <linearGradient id="warm${after?1:0}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${after?"#F6DDAE":"#9DB0AA"}"/><stop offset="1" stop-color="${after?"#E2B06E":"#7E918B"}"/></linearGradient>
    <pattern id="stripe${after?1:0}" width="60" height="10" patternUnits="userSpaceOnUse"><rect width="30" height="10" fill="#5E8C62"/><rect x="30" width="30" height="10" fill="#E9E4D2"/></pattern>
  </defs>`);
  s.push(`<rect width="1200" height="720" fill="${wall}"/>`);
  if(!after){ // manchas
    s.push(`<ellipse cx="90" cy="120" rx="70" ry="40" fill="#A89E8C" opacity=".5"/><ellipse cx="1130" cy="420" rx="60" ry="90" fill="#A89E8C" opacity=".45"/><ellipse cx="620" cy="160" rx="120" ry="18" fill="#A89E8C" opacity=".4"/>`);
  }
  // planta superior: balcones
  [250,550,850].forEach((x,i)=>{
    s.push(`<rect x="${x}" y="20" width="110" height="150" fill="${after?"#D8D0C0":"#8E8578"}"/>`);
    const shut = after ? 70 : [120,40,95][i];
    s.push(`<rect x="${x+8}" y="28" width="94" height="${shut}" fill="${after?"#5B574F":"#6B645A"}"/>`);
    for(let y=34;y<28+shut;y+=10) s.push(`<line x1="${x+8}" x2="${x+102}" y1="${y}" y2="${y}" stroke="${after?"#4A463F":"#58524A"}" stroke-width="2"/>`);
    s.push(`<rect x="${x-14}" y="150" width="138" height="6" fill="${after?"#161513":"#4E4A44"}"/>`);
    for(let k=0;k<8;k++) s.push(`<line x1="${x-10+k*18}" x2="${x-10+k*18}" y1="120" y2="150" stroke="${after?"#161513":"#4E4A44"}" stroke-width="3"/>`);
    s.push(`<line x1="${x-14}" x2="${x+124}" y1="120" y2="120" stroke="${after?"#161513":"#4E4A44"}" stroke-width="4"/>`);
    if(after && i!==1) s.push(`<rect x="${x+70}" y="100" width="34" height="22" fill="#B8643F"/><circle cx="${x+80}" cy="92" r="16" fill="#3F6B45"/><circle cx="${x+96}" cy="86" r="13" fill="#4F7E54"/>`);
  });
  if(!after){
    s.push(`<rect x="880" y="165" width="90" height="46" fill="#D9D6CF" stroke="#8C877E" stroke-width="3"/>`);
    for(let k=0;k<6;k++) s.push(`<line x1="${890+k*14}" x2="${890+k*14}" y1="172" y2="204" stroke="#9B968D" stroke-width="3"/>`);
    s.push(`<path d="M0 188 C 200 205, 380 175, 600 196 S 1000 180, 1200 200" stroke="#2A2724" stroke-width="3" fill="none"/><path d="M0 194 C 260 214, 500 186, 760 204 S 1080 192, 1200 208" stroke="#2A2724" stroke-width="2" fill="none"/>`);
  }
  // marco del local
  s.push(`<rect x="130" y="206" width="940" height="434" fill="${after?"#161513":"#6B6257"}"/>`);
  // rótulo
  if(after){
    s.push(`<rect x="146" y="218" width="908" height="78" fill="#161513"/>`);
    s.push(`<text x="600" y="274" text-anchor="middle" ${DF} ${W125} font-weight="800" font-size="56" letter-spacing="-2" fill="#F3F1EB">Tu café</text>`);
    s.push(`<text x="176" y="262" ${DF} font-weight="600" font-size="13" letter-spacing="3" fill="#F3F1EB" opacity=".7">CAFÉ DE ESPECIALIDAD</text>`);
    s.push(`<text x="1024" y="262" text-anchor="end" ${DF} font-weight="600" font-size="13" letter-spacing="3" fill="#F3F1EB" opacity=".7">HORNO PROPIO</text>`);
  } else {
    s.push(`<rect x="146" y="218" width="908" height="78" fill="#E6BF3C"/>`);
    s.push(`<text x="190" y="276" font-family="Georgia, 'Times New Roman', serif" font-weight="700" font-size="54" fill="#C4271E">CAFETERÍA</text>`);
    s.push(`<text x="530" y="276" font-family="'Brush Script MT', 'Comic Sans MS', cursive" font-style="italic" font-size="46" fill="#1F5FA8">bar</text>`);
    s.push(`<text x="640" y="252" font-family="'Comic Sans MS', 'Chalkboard SE', cursive" font-size="22" fill="#1E6B34">Desayunos · Bocadillos</text>`);
    s.push(`<text x="640" y="282" font-family="Impact, 'Arial Black', sans-serif" font-size="24" fill="#111">MENÚ DEL DÍA 11,90€</text>`);
    s.push(`<g transform="rotate(-4 900 330)"><rect x="760" y="300" width="300" height="46" fill="#D6261F"/><text x="910" y="333" text-anchor="middle" font-family="Impact, 'Arial Black', sans-serif" font-size="28" fill="#FFE94A">¡¡NUEVA APERTURA!!</text></g>`);
  }
  // toldo
  if(after){
    s.push(`<path d="M140 300 H1060 L1080 346 H120 Z" style="fill:var(--accent)"/>`);
    for(let x=120;x<1080;x+=40) s.push(`<path d="M${x} 346 a20 20 0 0 0 40 0 Z" style="fill:var(--accent)"/>`);
    s.push(`<text x="600" y="334" text-anchor="middle" ${DF} font-weight="600" font-size="14" letter-spacing="4" fill="#F3F1EB">8 — 16 H · TODOS LOS DÍAS</text>`);
  } else {
    s.push(`<path d="M140 300 H720 L740 350 H120 Z" fill="url(#stripe0)" opacity=".85"/>`);
    s.push(`<path d="M720 300 H760 L735 342 L760 350 H740 Z" fill="#E9E4D2" opacity=".6"/>`);
  }
  // escaparate izquierdo
  s.push(`<rect x="152" y="${after?362:356}" width="448" height="${after?262:268}" fill="url(#warm${after?1:0})"/>`);
  if(after){
    [240,380,520].forEach(x=>s.push(`<line x1="${x}" x2="${x}" y1="362" y2="410" stroke="#161513" stroke-width="2"/><path d="M${x-22} 432 a22 22 0 0 1 44 0 Z" fill="#161513"/><ellipse cx="${x}" cy="440" rx="18" ry="6" fill="#FFF3C9" opacity=".8"/>`));
    s.push(`<rect x="152" y="540" width="448" height="84" fill="#161513"/>`);
    s.push(`<rect x="200" y="498" width="70" height="42" fill="#3A3833"/><rect x="214" y="486" width="42" height="14" fill="#3A3833"/>`);
    [330,356,382].forEach((x,i)=>s.push(`<rect x="${x}" y="${512-i*0}" width="20" height="28" style="fill:${i===1?"var(--accent)":"#C9A57A"}"/>`));
    s.push(`<rect x="440" y="470" width="140" height="6" fill="#6E5A44"/>`);
    [450,480,510,540].forEach(x=>s.push(`<rect x="${x}" y="446" width="22" height="24" fill="${x===480?"#F3F1EB":"#C9A57A"}"/>`));
    s.push(`<circle cx="210" cy="590" r="16" fill="none" stroke="#F3F1EB" stroke-width="2"/><text x="210" y="597" text-anchor="middle" font-size="18" fill="#F3F1EB">✳</text>`);
    s.push(`<text x="236" y="595" ${DF} font-size="15" font-weight="600" letter-spacing="1" fill="#F3F1EB">Tu café · Abierto 8—16 h</text>`);
  } else {
    s.push(`<rect x="160" y="366" width="432" height="10" fill="#E8FFF2" opacity=".85"/>`);
    s.push(`<path d="M160 620 L360 356 L420 356 L220 620 Z" fill="#fff" opacity=".12"/>`);
    const papers = [[190,420,-6,"ABIERTO","#C4271E"],[330,470,4,"WIFI GRATIS","#1F5FA8"],[450,410,-3,"SE BUSCA\nCAMARERO/A","#111"],[240,540,7,"NO SE ACEPTAN\nBILLETES 50€","#111"]];
    papers.forEach(([x,y,r,t,c])=>{
      s.push(`<g transform="rotate(${r} ${x} ${y})"><rect x="${x-60}" y="${y-40}" width="120" height="84" fill="#FAFAF5"/><rect x="${x-20}" y="${y-46}" width="40" height="12" fill="#E8E2B8" opacity=".85"/>`);
      t.split("\n").forEach((l,i)=>s.push(`<text x="${x}" y="${y+ (t.includes("\n")?-4:6) + i*20}" text-anchor="middle" font-family="'Comic Sans MS','Marker Felt',cursive" font-size="${t.length>12?14:20}" font-weight="700" fill="${c}">${l}</text>`));
      s.push(`</g>`);
    });
    [[520,560,"#FF6B00"],[560,590,"#2BB24C"],[540,520,"#E4007C"]].forEach(([x,y,c])=>s.push(`<circle cx="${x}" cy="${y}" r="18" fill="${c}"/>`));
  }
  // puerta
  s.push(`<rect x="620" y="356" width="180" height="276" fill="${after?"#161513":"#A7A9A6"}"/>`);
  s.push(`<rect x="636" y="372" width="148" height="244" fill="url(#warm${after?1:0})"/>`);
  if(after){
    s.push(`<rect x="770" y="470" width="6" height="60" fill="#C9A57A"/>`);
    s.push(`<text x="710" y="420" text-anchor="middle" ${DF} ${W125} font-weight="700" font-size="26" fill="#161513">Hola</text><text x="710" y="446" text-anchor="middle" font-size="16" fill="#161513">✳</text>`);
  } else {
    s.push(`<rect x="650" y="486" width="100" height="26" fill="#C4271E"/><text x="700" y="505" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="16" fill="#fff">EMPUJAR</text>`);
    s.push(`<g transform="rotate(3 700 420)"><rect x="652" y="392" width="96" height="60" fill="#FAFAF5"/><text x="700" y="414" text-anchor="middle" font-family="'Comic Sans MS',cursive" font-size="12" fill="#111">Horario:</text><text x="700" y="432" text-anchor="middle" font-family="'Comic Sans MS',cursive" font-size="12" fill="#111">L-V 7 a 22</text><text x="700" y="446" text-anchor="middle" font-family="'Comic Sans MS',cursive" font-size="10" fill="#C4271E">(a veces)</text></g>`);
  }
  // escaparate derecho
  s.push(`<rect x="820" y="${after?362:356}" width="228" height="${after?262:268}" fill="url(#warm${after?1:0})"/>`);
  if(after){
    s.push(`<rect x="870" y="400" width="128" height="176" style="fill:var(--accent)"/>`);
    s.push(`<text x="882" y="470" ${DF} ${W62} font-weight="900" font-size="44" fill="#F3F1EB">ABRIMOS</text><text x="882" y="520" ${DF} ${W62} font-weight="900" font-size="44" fill="#F3F1EB">EL 12</text><text x="882" y="560" ${DF} font-size="11" letter-spacing="2" fill="#F3F1EB">SÁBADO · 9 H</text>`);
  } else {
    s.push(`<rect x="820" y="356" width="228" height="120" fill="#D9D6CF"/>`);
    for(let y=362;y<476;y+=12) s.push(`<line x1="820" x2="1048" y1="${y}" y2="${y+ (y%24?3:-2)}" stroke="#AFAAA0" stroke-width="3"/>`);
    s.push(`<g transform="rotate(-8 930 550)"><rect x="870" y="490" width="120" height="120" fill="#E93A2F"/><text x="930" y="530" text-anchor="middle" font-family="Impact, sans-serif" font-size="26" fill="#FFE94A">OFERTA</text><text x="930" y="560" text-anchor="middle" font-family="Arial, sans-serif" font-size="14" fill="#fff">café + tostada</text><text x="930" y="594" text-anchor="middle" font-family="Impact, sans-serif" font-size="30" fill="#fff">2,50€</text></g>`);
  }
  // banderola
  if(after){
    s.push(`<rect x="1070" y="250" width="60" height="6" fill="#161513"/><circle cx="1130" cy="300" r="42" fill="#161513"/><text x="1130" y="316" text-anchor="middle" font-size="44" fill="#F3F1EB">✳</text>`);
  } else {
    s.push(`<rect x="1075" y="240" width="90" height="120" fill="#F2F2F2" stroke="#999" stroke-width="3"/><text x="1120" y="312" text-anchor="middle" font-family="Georgia, serif" font-size="30" font-weight="700" fill="#C4271E">CAFÉ</text><path d="M1090 250 L1110 300 L1098 350" stroke="#777" stroke-width="2" fill="none"/>`);
    s.push(`<path d="M20 520 q 20 -40 40 -10 t 40 -20 q 10 40 -30 50 M30 560 q 30 -30 70 0" stroke="#2A2AA8" stroke-width="7" fill="none" stroke-linecap="round"/>`);
  }
  // acera
  s.push(`<rect x="0" y="640" width="1200" height="80" fill="${after?"#D4CCBD":"#99917F"}"/><rect x="0" y="632" width="1200" height="10" fill="${after?"#C2B9A8":"#827A6C"}"/>`);
  if(after){
    s.push(`<path d="M890 700 L930 540 H1010 L1050 700" fill="none" stroke="#161513" stroke-width="8"/><rect x="928" y="552" width="84" height="120" fill="#161513"/>`);
    s.push(`<text x="970" y="584" text-anchor="middle" ${DF} ${W62} font-weight="900" font-size="22" fill="#F3F1EB">FLAT WHITE</text><text x="970" y="612" text-anchor="middle" ${DF} font-weight="700" font-size="20" fill="#F3F1EB">3,20</text><line x1="944" x2="996" y1="628" y2="628" stroke="#F3F1EB" stroke-width="1.5"/><text x="970" y="652" text-anchor="middle" font-size="18" fill="#F3F1EB">✳</text>`);
    s.push(`<rect x="200" y="664" width="190" height="10" fill="#6E5A44"/><rect x="210" y="674" width="8" height="26" fill="#161513"/><rect x="372" y="674" width="8" height="26" fill="#161513"/>`);
    s.push(`<rect x="60" y="630" width="56" height="60" fill="#B8643F"/><circle cx="76" cy="610" r="24" fill="#3F6B45"/><circle cx="100" cy="596" r="22" fill="#4F7E54"/><circle cx="88" cy="580" r="18" fill="#3F6B45"/>`);
  } else {
    s.push(`<path d="M900 700 L940 552 H1010 L1050 700" fill="none" stroke="#6B4A2B" stroke-width="7"/><rect x="936" y="560" width="78" height="112" fill="#1E1E1E"/>`);
    s.push(`<path d="M946 580 q 20 -10 50 4 M944 600 l 60 6 M950 622 q 10 10 40 -6 M946 646 l 55 -4 M960 660 q 10 -8 30 2" stroke="#fff" stroke-width="3" fill="none" opacity=".8"/>`);
    s.push(`<path d="M250 700 v-40 h60 v40 M240 660 h80 l-8 -40 h-64 Z" fill="#F4F4F4" stroke="#BDBDBD" stroke-width="3"/>`);
    s.push(`<rect x="50" y="620" width="60" height="80" fill="#5E6B5A"/><rect x="44" y="612" width="72" height="12" fill="#4A5548"/>`);
  }
  s.push(`</svg>`);
  return s.join("");
}

/* Piezas para el panel de servicios (viewBox 400x480) */
const SV = (inner, bg="f-sheet") => `<svg viewBox="0 0 400 480" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><rect width="400" height="480" class="${bg}"/>${inner}</svg>`;
const tx = (x,y,txt,o="") => `<text x="${x}" y="${y}" ${DF} ${o}>${txt}</text>`;

const PIECES = {
  identidad: () => SV(`
    ${[80,140,200,260,320].map(x=>`<line x1="${x}" x2="${x}" y1="30" y2="450" class="s-rule"/>`).join("")}
    ${[60,120,180,240,300].map(y=>`<line x1="30" x2="370" y1="${y}" y2="${y}" class="s-rule"/>`).join("")}
    <circle cx="200" cy="180" r="112" class="s-ink" stroke-dasharray="4 6"/>
    <circle cx="200" cy="180" r="88" class="f-acc"/>
    <text x="200" y="222" text-anchor="middle" font-size="120" class="f-paper">✳</text>
    ${tx(200,360,"Tu café",`text-anchor="middle" ${W125} font-weight="800" font-size="56" letter-spacing="-2" class="f-ink"`)}
    ${tx(200,392,"CAFÉ DE ESPECIALIDAD · VALENCIA",`text-anchor="middle" font-size="11" font-weight="600" letter-spacing="3" class="f-ink"`)}
    ${tx(30,450,"Logo principal",`font-size="11" class="f-ink2"`)}${tx(370,450,"01",`text-anchor="end" font-size="11" class="f-ink2"`)}`),
  tipo: () => SV(`
    ${tx(26,210,"Aa",`${W62} font-weight="900" font-size="220" class="f-ink"`)}
    ${tx(236,90,"Archivo",`font-weight="700" font-size="22" class="f-ink"`)}
    ${tx(236,112,"Display · 62—125",`font-size="12" class="f-ink2"`)}
    ${tx(236,160,"Instrument",`font-weight="500" font-size="22" class="f-ink"`)}
    ${tx(236,182,"Texto · 400—700",`font-size="12" class="f-ink2"`)}
    ${tx(26,250,"abcdefghijklmnñopq 0123",`font-size="20" class="f-ink"`)}
    <rect x="26" y="290" width="110" height="160" class="f-acc"/><rect x="145" y="290" width="110" height="160" class="f-ink"/><rect x="264" y="290" width="110" height="160" class="f-paper2 s-ink1"/>
    ${tx(36,438,"Tinta 01",`font-size="12" font-weight="600" class="f-paper"`)}${tx(155,438,"Negro",`font-size="12" font-weight="600" class="f-paper"`)}${tx(274,438,"Papel",`font-size="12" font-weight="600" class="f-ink"`)}`),
  carta: () => SV(`<g transform="rotate(-3 200 240)"><rect x="60" y="40" width="280" height="400" class="f-sheet"/>
    ${tx(84,96,"Tu café",`${W125} font-weight="800" font-size="30" letter-spacing="-1" class="f-ink"`)}
    <line x1="84" x2="316" y1="112" y2="112" stroke-width="2" class="s-ink"/>
    ${tx(84,146,"CAFÉ",`${W62} font-weight="800" font-size="14" letter-spacing="2" class="f-acc"`)}
    ${[["Espresso","1,60"],["Cortado","1,80"],["Flat white","3,20"],["Batch brew","2,50"]].map(([a,b],i)=>`${tx(84,174+i*26,a,`font-size="15" class="f-ink"`)}<line x1="${160}" x2="276" y1="${170+i*26}" y2="${170+i*26}" class="s-dot"/>${tx(316,174+i*26,b,`text-anchor="end" font-weight="700" font-size="15" class="f-ink"`)}`).join("")}
    ${tx(84,300,"HORNO",`${W62} font-weight="800" font-size="14" letter-spacing="2" class="f-acc"`)}
    ${[["Bollo de cardamomo","3,40"],["Tostada de temporada","5,50"]].map(([a,b],i)=>`${tx(84,328+i*26,a,`font-size="15" class="f-ink"`)}${tx(316,328+i*26,b,`text-anchor="end" font-weight="700" font-size="15" class="f-ink"`)}`).join("")}
    ${tx(84,412,"Alérgenos: consultá al equipo",`font-size="10" class="f-ink2"`)}</g>`, "f-paper2"),
  cartel: () => SV(`<g transform="rotate(2 200 240)"><rect x="70" y="40" width="260" height="380" class="f-acc"/>
    <rect x="170" y="30" width="60" height="18" fill="#E8E2B8" opacity=".85"/>
    ${tx(90,74,"CARTEL · A3",`font-size="11" font-weight="600" letter-spacing="2" class="f-paper"`)}
    ${tx(86,250,"ABRIMOS",`${W62} font-weight="900" font-size="92" class="f-paper"`)}
    ${tx(86,340,"EL 12",`${W62} font-weight="900" font-size="92" class="f-paper"`)}
    ${tx(90,394,"Sábado · 9 h · Calle ———",`font-size="13" class="f-paper"`)}</g>`, "f-paper2"),
  senal: () => SV(`
    <rect x="0" y="0" width="400" height="480" class="f-paper2"/>
    <rect x="40" y="70" width="90" height="8" class="f-ink"/><circle cx="130" cy="150" r="66" class="f-ink"/>
    <text x="130" y="176" text-anchor="middle" font-size="70" class="f-paper">✳</text>
    <rect x="190" y="90" width="170" height="64" class="f-sheet s-ink2"/>${tx(210,132,"BAÑOS  →",`${W62} font-weight="850" font-size="28" letter-spacing="1" class="f-ink"`)}
    <rect x="40" y="260" width="320" height="110" class="f-acc"/>
    ${tx(62,298,"WIFI",`${W62} font-weight="900" font-size="30" class="f-paper"`)}
    ${tx(62,330,"red: tucafe",`font-size="16" class="f-paper"`)}${tx(62,352,"clave: flatwhite",`font-size="16" class="f-paper"`)}
    <rect x="190" y="400" width="170" height="46" class="f-ink"/>${tx(206,430,"RECOGIDA ↓",`${W62} font-weight="850" font-size="20" letter-spacing="1" class="f-paper"`)}`),
  pack: () => SV(`
    <path d="M70 150 L100 430 H220 L250 150 Z" class="f-sheet s-ink2"/>
    <rect x="58" y="126" width="204" height="26" rx="4" class="f-ink"/><rect x="80" y="112" width="160" height="18" rx="4" class="f-ink"/>
    <path d="M82 250 L238 250 L229 340 L91 340 Z" class="f-acc"/>
    <text x="160" y="310" text-anchor="middle" font-size="46" class="f-paper">✳</text>
    <path d="M250 230 h110 v220 h-110 Z" fill="#C9A57A"/>
    <path d="M250 230 l14 -14 l14 14 l14 -14 l14 14 l14 -14 l14 14 l14 -14 l14 14" fill="#C9A57A" stroke="#B08E63" stroke-width="2"/>
    <circle cx="305" cy="330" r="38" class="f-ink"/>${tx(305,336,"Tu café",`text-anchor="middle" ${W125} font-weight="800" font-size="13" class="f-paper"`)}`, "f-paper2"),
  redes: () => SV(`
    <rect x="100" y="30" width="200" height="420" rx="30" class="f-ink"/>
    <rect x="112" y="60" width="176" height="370" rx="8" class="f-sheet"/>
    <circle cx="140" cy="92" r="16" class="f-acc"/>${tx(164,90,"tucafe",`font-weight="700" font-size="13" class="f-ink"`)}${tx(164,106,"Café · Valencia",`font-size="10" class="f-ink2"`)}
    ${[0,1,2,3,4,5,6,7,8].map(i=>{const x=116+(i%3)*57,y=130+Math.floor(i/3)*57;const c=["f-acc","f-ink","f-pink","f-paper2","f-acc","f-paper2","f-ink","f-pink","f-acc"][i];const g=["✳","3,20","Sáb","","Nº1","","Hola","","12"][i];return `<rect x="${x}" y="${y}" width="54" height="54" class="${c}"/>${g?tx(x+27,y+34,g,`text-anchor="middle" ${W62} font-weight="850" font-size="16" class="${c==="f-paper2"||c==="f-pink"?"f-ink":"f-paper"}"`):""}`}).join("")}
    ${tx(122,330,"Plantillas editables",`font-size="11" font-weight="600" class="f-ink"`)}
    <rect x="122" y="342" width="156" height="10" class="f-paper2"/><rect x="122" y="358" width="110" height="10" class="f-paper2"/>`, "f-acc"),
  merch: () => SV(`
    <path d="M110 140 q 50 -90 100 0" class="s-ink" stroke-width="8"/>
    <rect x="70" y="140" width="180" height="230" class="f-sheet s-ink1"/>
    <text x="160" y="250" text-anchor="middle" font-size="56" class="f-acc">✳</text>${tx(160,292,"Tu café",`text-anchor="middle" ${W125} font-weight="800" font-size="24" class="f-ink"`)}
    <path d="M230 250 l40 -30 h26 q14 20 34 0 h26 l40 30 l-22 34 l-20 -12 v150 h-102 v-150 l-20 12 Z" class="f-ink"/>
    <text x="313" y="306" text-anchor="middle" font-size="22" class="f-paper">✳</text>`, "f-paper2"),
  web: () => SV(`
    <rect x="30" y="70" width="340" height="340" class="f-sheet s-ink2"/>
    <line x1="30" x2="370" y1="100" y2="100" class="s-ink" stroke-width="2"/>
    <circle cx="48" cy="85" r="5" class="f-ink"/><circle cx="64" cy="85" r="5" class="f-ink"/><circle cx="80" cy="85" r="5" class="f-ink"/>
    <rect x="46" y="116" width="308" height="140" class="f-acc"/>${tx(66,206,"Tu café",`${W125} font-weight="800" font-size="46" letter-spacing="-2" class="f-paper"`)}${tx(66,232,"Café de especialidad · Horno",`font-size="12" class="f-paper"`)}
    ${tx(46,290,"HORARIO",`${W62} font-weight="850" font-size="14" letter-spacing="1" class="f-ink"`)}${tx(46,312,"L—D · 8 a 16 h",`font-size="14" class="f-ink"`)}
    ${tx(46,346,"CARTA ↗",`${W62} font-weight="850" font-size="14" letter-spacing="1" class="f-ink"`)}
    <rect x="210" y="274" width="144" height="120" class="f-paper2"/><path d="M210 330 L354 300 M250 274 L290 394" class="s-rule" stroke-width="6"/><circle cx="282" cy="330" r="10" class="f-acc"/>`, "f-paper2"),
  print: () => SV(`
    ${[[60,60,-1,-1],[340,60,1,-1],[60,400,-1,1],[340,400,1,1]].map(([x,y,a,b])=>`<line x1="${x}" x2="${x+a*26}" y1="${y}" y2="${y}" class="s-ink" stroke-width="1"/><line x1="${x}" x2="${x}" y1="${y}" y2="${y+b*26}" class="s-ink" stroke-width="1"/>`).join("")}
    <rect x="70" y="70" width="260" height="320" class="f-acc"/>
    ${tx(90,190,"CARTA",`${W62} font-weight="900" font-size="74" class="f-paper"`)}${tx(90,250,"A4 · 2 caras",`font-size="16" class="f-paper"`)}
    <text x="200" y="340" text-anchor="middle" font-size="60" class="f-paper">✳</text>
    <rect x="70" y="420" width="30" height="16" fill="#00AEEF"/><rect x="100" y="420" width="30" height="16" fill="#EC008C"/><rect x="130" y="420" width="30" height="16" fill="#FFF200"/><rect x="160" y="420" width="30" height="16" fill="#161513"/>
    ${tx(330,433,"PDF/X-4 · 3 mm sangrado",`text-anchor="end" font-size="11" class="f-ink2"`)}`),
  prov: () => SV(`
    <rect x="60" y="40" width="280" height="400" class="f-sheet"/><rect x="160" y="26" width="80" height="30" rx="4" class="f-ink"/>
    ${tx(84,100,"Producción",`${W62} font-weight="900" font-size="34" class="f-ink"`)}
    ${[["Imprenta — cartas",1],["Rotulista — fachada",1],["Stickers",1],["Vasos 8 oz",0,"en producción"],["Delantales",0,"pedido"],["Toldo",0,"medidas"]].map(([a,ok,st],i)=>`
      <rect x="84" y="${136+i*46}" width="20" height="20" class="f-sheet s-ink1"/>${ok?`<path d="M86 ${146+i*46} l7 7 l14 -16" class="s-acc" stroke-width="3.5" fill="none"/>`:""}
      ${tx(116,152+i*46,a,`font-size="15" class="${ok?"f-ink2":"f-ink"}"`)}${st?tx(316,152+i*46,st,`text-anchor="end" font-size="11" class="f-acc"`):""}`).join("")}`, "f-paper2")
};

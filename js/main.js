/* =====================================================================
   RENDER
   ===================================================================== */
let LANG = CONFIG.defaultLang;
const T = () => CONTENT[LANG] || CONTENT.es;
const $ = (s,c=document)=>c.querySelector(s);
const $$ = (s,c=document)=>[...c.querySelectorAll(s)];
const esc = s => String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const hl = str => esc(str).replace(/\*(.+?)\*/g, '<mark class="hl">$1</mark>');
const mark = text => `<span class="mark">${esc(text)}<svg viewBox="0 0 300 20" preserveAspectRatio="none" aria-hidden="true"><path d="M3 14 C 60 4, 120 18, 180 9 S 270 6, 297 12"/></svg></span>`;
const wa = text => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
const fine = matchMedia("(hover:hover) and (pointer:fine)").matches;
const variant = ["ig","corta"].includes(document.body.dataset.variant) ? document.body.dataset.variant : "full";
const SECTIONS = {
  full:  { problem:true,  beforeAfter:true, checklist:true,  projects:true, why:true,  partners:true },
  ig:    { problem:false, beforeAfter:false, checklist:true, projects:false, why:false, partners:false },
  corta: { problem:false, beforeAfter:true,  checklist:false, projects:true, why:false, partners:false },
};
const show = SECTIONS[variant];
const base = variant==="full" ? "" : "../";
document.documentElement.lang = LANG;
document.documentElement.classList.add("js");

function art(kind, word, cap, img){
  if(img) return `<div class="art"><img src="${esc(img)}" alt="" loading="lazy"></div>`;
  const ui = kind.includes("ui") ? `<div class="screen"><i></i><i></i><i></i></div>` : "";
  return `<div class="art ${esc(kind)}"><div class="cap"><span>${esc(cap[0]||"")}</span><span>${esc(cap[1]||"")}</span></div>${ui}<div class="big">${esc(word)}</div><span class="wm">Placeholder</span></div>`;
}

function render(){
  const t = T();
  document.documentElement.lang = LANG;

  const navLinks = t.nav.filter(([h])=> (h!=="#checklist" || show.checklist) && (h!=="#proyectos" || show.projects));
  const tagParts = CONFIG.tagline.split(", "); const tagLast = tagParts.pop();
  $("#head").innerHTML = `<div class="wrap">
    <a class="brand" href="#inicio"><span class="brand-mark" aria-hidden="true">J</span><span class="brand-name">${esc(CONFIG.name)}<small>${esc(tagParts.join(", "))}<br>${esc(tagLast)}</small></span></a>
    <nav class="nav" aria-label="Principal">${navLinks.map(([h,l])=>`<a class="nl" href="${h}">${esc(l)}</a>`).join("")}
      <a class="btn mag" href="#contacto">${esc(t.navCta)} <span class="arr">→</span></a></nav></div>`;

  const h = t.hero;
  const words = h.l1.split(" ").map((w,i)=>`<span class="w" style="animation-delay:${.05+i*.07}s">${esc(w)}</span>`).join(" ");

  const tagPos = [[3,8,-4],[34,6,3],[64,10,-2],[97,7,5],[14,36,2],[50,33,-3],[86,38,4],[2,63,-5],[30,65,2],[62,61,3],[98,66,-3],[18,90,-2],[52,92,5],[85,88,-4]];

  $("#main").innerHTML = `
  <!-- 1 HERO -->
  <section class="hero" id="inicio">
    <div class="hero-photo">
      <div class="hero-bg" style="background-image:url('${esc(base + "img/hero-bg.webp")}')" aria-hidden="true"></div>
      <div class="wrap">
        <h1 class="hero-title"><span class="d d-cond l1">${words}</span><span class="sr-only"> ${esc(h.l2a)} ${esc(h.l2mark)}</span></h1>
        <p class="d d-wide l2" aria-hidden="true">${esc(h.l2a)} ${mark(h.l2mark)}</p>
        <div class="cta-row">
          <a class="btn mag" href="#contacto">${esc(h.cta1)} <span class="arr">→</span></a>
          <a class="btn btn-ghost mag" href="#servicios">${esc(h.cta2)} <span class="arr">↓</span></a>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="hero-copy">
        <div class="owner">
          <b class="owner-label">${esc(h.ownerPre)}</b>
          <ul class="owner-grid">${h.owner.map(o=>`<li>${esc(o)}</li>`).join("")}</ul>
        </div>
        <div class="ticker-line"><span>${esc(h.tickerPre)}</span><span class="ticker" id="ticker">${h.ticker.map((w,i)=>`<span class="${i?"":"on"}">${esc(w)}</span>`).join("")}</span></div>
        <p class="lead">${hl(h.support)}</p>
      </div>
    </div>
  </section>

  <div class="marquee-head wrap"><h2 class="d h2">${esc(t.marqueeLabel)}</h2></div>
  <div class="marquee" aria-hidden="true"><div class="marquee-track">${[0,1].map(()=>t.marquee1.map(w=>`<span>${esc(w)}</span>`).join("")).join("")}</div></div>

  ${!show.problem ? "" : `
  <!-- 2 PROBLEMA -->
  <section class="problem${reduced?" static":""}" id="problema">
    <div class="problem-stage">
      <div class="wrap"><span class="lab">${esc(t.problem.lab)}</span><h2 class="d h2">${esc(t.problem.title)}</h2></div>
      <div class="tags" id="tags">${t.problem.tags.map(([n,d],i)=>{const p=tagPos[i%tagPos.length];return `<span class="tag" data-d="${d?1:0}" style="--x:${p[0]};--y:${p[1]};--r:${p[2]}deg">${esc(n)}</span>`}).join("")}</div>
      <div class="design-reveal" id="dreveal"><div class="lab">${esc(t.problem.revealLab)}</div><b>${esc(t.problem.revealWord)}</b><p>${esc(t.problem.revealText)}</p></div>
    </div>
  </section>`}

  ${!show.beforeAfter ? "" : `
  <!-- 2b ANTES / DESPUÉS -->
  <section class="ba-sec" id="antes-despues"><div class="wrap">
    <div class="ba-head">
      <div style="display:grid;gap:18px"><span class="lab">${esc(t.beforeAfter.lab)}</span><h2 class="d h2 rv" style="font-size:clamp(38px,6vw,96px)">${esc(t.beforeAfter.title)}</h2></div>
      <p class="lead rv" style="font-size:17px">${hl(t.beforeAfter.text)} <b>${mark(t.beforeAfter.textMark)}</b></p>
    </div>
    <div class="ba rv" id="ba">
      <div class="lay after">${t.beforeAfter.afterImg?`<img src="${esc(base + t.beforeAfter.afterImg)}" alt="${esc(t.beforeAfter.after)}: fachada con identidad coherente" draggable="false" loading="lazy">`:facade(true)}</div>
      <div class="lay before">${t.beforeAfter.beforeImg?`<img src="${esc(base + t.beforeAfter.beforeImg)}" alt="${esc(t.beforeAfter.before)}: fachada con carteles improvisados" draggable="false" loading="lazy">`:facade(false)}</div>
      <span class="tagl l lab">${esc(t.beforeAfter.before)}</span><span class="tagl r lab">${esc(t.beforeAfter.after)}</span>
      <input type="range" id="baRange" min="0" max="100" value="50" aria-label="${esc(t.beforeAfter.hint)}">
      <div class="bar"><span class="knob">↔</span></div>
    </div>
    <div class="ba-foot"><span>${esc(t.beforeAfter.hint)}</span><span>${esc(t.beforeAfter.note)}</span></div>
  </div></section>`}

  <!-- 3 SERVICIOS -->
  <section id="servicios"><div class="wrap">
    <div class="sec-head services-intro">
      <div style="display:grid;gap:18px"><span class="lab lab-accent">${esc(t.services.lab)}</span><h2 class="d h2 rv">${esc(t.services.title)}</h2></div>
      <p class="small rv">${esc(t.services.intro)}</p>
    </div>
    <div class="svc-layout">
      <ul class="svc-list" id="svcList">${t.services.items.map(([n],i)=>`<li class="svc${i?"":" on"}" data-i="${i}" tabindex="0"><div class="svc-in"><span class="svc-n">${String(i+1).padStart(2,"0")}</span><span class="svc-name">${esc(n)}</span></div></li>`).join("")}</ul>
      <div class="svc-panel" aria-hidden="true">
        <div class="svc-stage" id="svcStage">${[...new Set(t.services.items.map(x=>x[2]))].map((k,j)=>`<div class="pc${j?"":" on"}" data-k="${k}">${PIECES[k]()}</div>`).join("")}${t.services.items.filter(x=>x[3]).map((x,j)=>`<div class="pc" data-img="${t.services.items.indexOf(x)}"><img src="${esc(x[3])}" alt="" loading="lazy" style="width:100%;height:100%;object-fit:cover"></div>`).join("")}</div>
        <div class="svc-cap"><b id="svcCapN"></b><span id="svcCapT"></span></div>
      </div>
    </div>
    <div class="svc-note"><p class="rv">${esc(t.services.note)}</p>${!show.checklist ? "" : `<a class="btn btn-ghost mag" href="#checklist">${esc(t.services.noteCta)} <span class="arr">↓</span></a>`}</div>
  </div></section>

  ${!show.checklist ? "" : `
  <!-- 4 CHECKLIST -->
  <section class="checklist" id="checklist" style="margin-top:clamp(80px,12vw,160px)"><div class="wrap">
    <div class="cl-layout">
      <aside class="cl-aside">
        <span class="lab">${esc(t.checklist.lab)}</span>
        <h2 class="d">${esc(t.checklist.title)}</h2>
        <p class="small">${esc(t.checklist.hint)}</p>
        <div class="counter">
          <div class="num" aria-hidden="true"><span class="n" id="clN">0</span><small>/<span id="clT">0</span></small></div>
          <div class="meter"><i id="clMeter"></i></div>
          <p class="sent" id="clSent" aria-live="polite"></p>
          <p class="msg" id="clMsg"></p>
        </div>
        <div class="cl-actions">
          <a class="btn btn-accent mag cl-help" target="_blank" rel="noopener" href="#">${esc(t.checklist.cta)} <span class="arr">→</span></a>
          <button class="cl-reset" id="clReset" type="button">${esc(t.checklist.reset)}</button>
        </div>
      </aside>
      <div class="cl-grid" id="clGrid">${t.checklist.cats.map(([cat,items],ci)=>`
        <div class="cl-cat" data-c="${ci}">
          <button class="cl-head" type="button" aria-expanded="true" aria-controls="clc-${ci}"><span class="name">${esc(cat)}</span><span class="cnt"></span><span class="chev" aria-hidden="true"></span></button>
          <div class="cl-items" id="clc-${ci}"><div><ul style="list-style:none;margin:0;padding:0">${items.map((it,ii)=>`
            <li><label class="cl-item"><input type="checkbox" id="cl-${ci}-${ii}" data-name="${esc(it)}"><span class="box"><svg viewBox="0 0 30 30" aria-hidden="true"><path d="M5 15 L12 22 L28 3"/></svg></span><span class="txt">${esc(it)}</span></label></li>`).join("")}
          </ul></div></div>
        </div>`).join("")}
      </div>
    </div>
    <div class="cl-dock" id="clDock"><div><div class="dnum"><span id="dN">0</span><small>/<span id="dT">0</span></small></div><div class="dmsg" id="dMsg"></div></div><a class="btn btn-accent cl-help" target="_blank" rel="noopener" href="#"><span class="dock-long">${esc(t.checklist.cta)}</span><span class="dock-short">${esc(t.checklist.ctaShort)}</span> →</a></div>
  </div></section>`}

  <!-- 5 PROCESO -->
  <section id="proceso" class="blue-zone" style="margin-top:clamp(40px,6vw,80px)"><div class="wrap">
    <div class="sec-head"><span class="lab">${esc(t.process.lab)}</span><h2 class="d h2 rv">${esc(t.process.title)}</h2></div>
    <ol class="steps">${t.process.steps.map((s,i)=>`<li class="step rv" style="transition-delay:${i*.08}s"><span class="sn">${String(i+1).padStart(2,"0")}</span><p>${esc(s)}</p></li>`).join("")}</ol>
    ${t.process.notes.length ? `<div class="proc-note">${t.process.notes.map(n=>`<span>${esc(n)}</span>`).join("")}</div>` : ""}
    <p class="big-quote rv">${t.process.quote}</p>
  </div></section>

  ${!show.projects ? "" : `
  <!-- 6 PROYECTOS -->
  <section id="proyectos"><div class="wrap">
    <div class="sec-head services-intro">
      <div style="display:grid;gap:18px"><span class="lab">${esc(t.projects.lab)}</span><h2 class="d h2 rv" style="font-size:clamp(36px,5.6vw,92px)">${esc(t.projects.title)}</h2></div>
      <p class="small rv">${esc(t.projects.intro)}</p>
    </div>
    <div class="swipe" aria-hidden="true"><span>${t.projects.items.length} proyectos</span><span>Deslizá →</span></div>
    <div class="pj-grid">${t.projects.items.map((p,i)=>`
      <button class="pj rv ${p.size||"s6"} ${p.off?"off":""}" data-p="${i}" type="button" aria-label="${esc(t.projects.open)}: ${esc(p.name)}">
        <span class="frame" style="--ar:${p.ar||"4/3"}">
          <span class="layer base">${art(p.art[0], p.word, [p.type, p.year], p.cover && base + p.cover)}</span>
          <span class="layer alt">${art(p.art[1], p.word, [p.name, "↗"], p.hover && base + p.hover)}</span>
          <span class="open">${esc(t.projects.open)} ↗</span>
        </span>
        <span class="meta"><b>${esc(p.name)}</b><span>${esc(p.type)}</span></span>
      </button>`).join("")}
    </div>
  </div></section>`}

  ${!show.why ? "" : `
  <!-- 7 POR QUÉ YO -->
  <section id="sobre-mi"><div class="wrap why">
    <div class="why-text">
      <span class="lab">${esc(t.why.lab)}</span>
      <p class="rv">${esc(t.why.p1)}</p>
      <p class="rv" style="font-weight:600">${esc(t.why.p2)}</p>
      <p class="rv">${esc(t.why.p3)}</p>
      <p class="quote rv">${hl(t.why.quote)}</p>
    </div>
    <div class="inks" id="inks" aria-label="${esc(t.why.eq.join(" "))}">
      <span class="reg r1"><i></i></span><span class="reg r2"><i></i></span>
      <div class="ink-c a"><span>${esc(t.why.inkA)}</span></div>
      <div class="ink-c b"><span>${esc(t.why.inkB)}</span></div>
      <div class="ink-x"><b>${esc(t.why.inkX)}</b></div>
      <div class="eq" aria-hidden="true">${t.why.eq.map(w=> w==="×"?`<i>×</i>`:`<span>${esc(w)}</span>`).join("")}</div>
    </div>
  </div></section>`}

  <!-- 8 PAQUETES -->
  <section id="paquetes"><div class="wrap">
    <div class="sec-head"><span class="lab">${esc(t.packages.lab)}</span><h2 class="d h2 rv">${esc(t.packages.title)}</h2></div>
    <div class="pk-board rv">
      <div class="pk-top lab"><span>${esc(t.packages.boardTop[0])}</span><span>${esc(t.packages.boardTop[1])}</span></div>
      ${t.packages.items.map(p=>`<article class="pk ${p.feature?"feature":""}">
        ${p.stamp?`<span class="stamp">${esc(p.stamp)}</span>`:""}
        <h3>${esc(p.name)}</h3>
        <div class="price">${p.from?`<small>${esc(p.from)}</small>`:""}<b>${esc(p.price)}</b></div>
        <p class="for">${esc(p.for)}</p>
        <ul>${p.list.map(l=>`<li>${esc(l)}</li>`).join("")}</ul>
        <a class="btn mag" href="#contacto">${esc(t.packages.cta)} <span class="arr">→</span></a>
      </article>`).join("")}
    </div>
    <div class="pk-foot"><p>${esc(t.packages.note)}</p></div>
  </div></section>

  ${!show.partners ? "" : `
  <!-- 9 PARTNERS (enlace directo: #partners) -->
  <section class="partners" id="partners"><div class="wrap">
    <div style="display:grid;gap:22px">
      <span class="lab">${esc(t.partners.lab)}</span>
      <h2 class="d">${t.partners.title}</h2>
      <div class="who">${t.partners.who.map(w=>`<span>${esc(w)}</span>`).join("")}</div>
    </div>
    <div style="display:grid;gap:22px;justify-items:start">
      <p>${esc(t.partners.text)}</p>
      <a class="btn mag" target="_blank" rel="noopener" href="${wa(t.partners.waText)}">${esc(t.partners.cta)} <span class="arr">→</span></a>
      <button class="share" id="share" type="button">${esc(t.partners.share)}</button>
    </div>
  </div></section>`}

  <!-- 10 CTA FINAL -->
  <section class="final" id="contacto"><div class="wrap">
    <span class="lab">${esc(t.final.lab)}</span>
    <h2 class="d d-cond" style="margin-top:14px">${esc(t.final.title)}<span class="what"><span id="what"></span><span class="cur"></span></span></h2>
    <form class="picker" id="picker" onsubmit="return false">
      <p class="pick-hint">${esc(t.final.pickHint)}</p>
      <fieldset><legend class="lab">${esc(t.final.q1)}</legend><div class="chips">${t.final.opts1.map((o,i)=>`<label class="chip"><input type="radio" name="kind" id="k-${i}" value="${esc(o)}"><span>${esc(o)}</span></label>`).join("")}</div></fieldset>
      <p class="pick-hint">${esc(t.final.pickHint)}</p>
      <fieldset><legend class="lab">${esc(t.final.q2)}</legend><div class="chips">${t.final.opts2.map((o,i)=>`<label class="chip"><input type="radio" name="when" id="w-${i}" value="${esc(o)}"><span>${esc(o)}</span></label>`).join("")}</div></fieldset>
      <div class="final-cta">
        <a class="btn btn-accent mag" id="tellme" target="_blank" rel="noopener" href="${wa(t.final.waText("",""))}">${esc(t.final.cta)} <span class="arr">→</span></a>
        <div class="alts"><span>${esc(t.final.or)}</span>
          <a class="link-u" target="_blank" rel="noopener" href="${esc(CONFIG.instagram)}">Instagram ↗</a>
          <a class="link-u" target="_blank" rel="noopener" href="${wa(t.final.waText("",""))}">WhatsApp ↗</a>
          <a class="link-u" href="mailto:${esc(CONFIG.email)}">Email ↗</a>
        </div>
      </div>
    </form>
  </div></section>

  <footer class="site-foot"><div class="wrap"><div class="foot">
    <span>© ${new Date().getFullYear()} ${esc(CONFIG.name)} — ${esc(t.footer.rights)}</span>
    <span class="lang">${t.footer.langs.map(([k,l])=>`<button type="button" data-lang="${k}" ${CONTENT[k]?"":"disabled title=\"Próximamente\""}>${l}</button>`).join(" / ")}</span>
  </div></div></footer>

  ${!show.projects ? "" : `
  <div class="pj-overlay" id="pjo" hidden role="dialog" aria-modal="true" aria-labelledby="pjTitle">
    <div class="pj-panel" id="pjPanel"><div class="wrap">
      <div class="pj-bar"><span class="lab" id="pjCount"></span><div class="nav-btns"><button type="button" id="pjPrev" aria-label="Anterior">${t.projects.prev}</button><button type="button" id="pjNext" aria-label="Siguiente">${t.projects.next}</button><button type="button" id="pjClose">${esc(t.projects.close)} ✕</button></div></div>
      <div class="pj-head"><h3 class="d d-cond" id="pjTitle"></h3><div style="display:grid;gap:16px"><p class="lead" id="pjDesc" style="margin:0"></p><dl id="pjMeta"></dl></div></div>
      <div class="pj-imgs" id="pjImgs"></div>
    </div></div>
  </div>`}`;

  // JSON-LD SEO
  let ld = $("#ld"); if(!ld){ ld = document.createElement("script"); ld.type="application/ld+json"; ld.id="ld"; document.body.appendChild(ld); }
  ld.textContent = JSON.stringify({"@context":"https://schema.org","@type":"ProfessionalService","name":CONFIG.name+" — "+CONFIG.tagline,"description":"Diseño gráfico y branding para cafeterías, coffee shops, bakeries y wine bars: identidad, carta, señalética, packaging y redes.","areaServed":CONFIG.city,"email":CONFIG.email,"sameAs":[CONFIG.instagram],"knowsAbout":["diseño para cafeterías","branding cafetería","diseño de menú","branding gastronómico"]});

  init();
}

/* =====================================================================
   INTERACCIONES
   ===================================================================== */
function init(){
  const t = T();

  // header
  const head = $("#head");
  const onHead = ()=> head.classList.toggle("scrolled", scrollY > 20);

  // ticker (el ancho se adapta a cada palabra)
  const tkBox = $("#ticker"), tk = $$("#ticker span"); let ti = 0;
  const fitTk = ()=>{ const em = parseFloat(getComputedStyle(tkBox).fontSize); tkBox.style.setProperty("--tw", (tk[ti].offsetWidth + em*.64) + "px"); };
  fitTk(); document.fonts && document.fonts.ready.then(fitTk);
  clearInterval(window.__tk);
  if(!reduced && tk.length) window.__tk = setInterval(()=>{
    const cur = tk[ti]; ti = (ti+1)%tk.length; const nx = tk[ti];
    tk.forEach(x=>{ if(x!==cur && x!==nx){ x.classList.remove("on","out"); } });
    nx.style.transition="none"; nx.classList.remove("out","on"); nx.offsetHeight; nx.style.transition="";
    cur.classList.remove("on"); cur.classList.add("out"); nx.classList.add("on"); fitTk();
  }, 1900);

  // collage parallax (mouse) + sticker aim
  const collage = $("#collage");
  const pieces = collage ? $$(".piece", collage) : [];
  if(collage && fine && !reduced){
    const aim = $("#aim");
    addEventListener("pointermove", e=>{
      const cx = e.clientX/innerWidth - .5, cy = e.clientY/innerHeight - .5;
      pieces.forEach(p=>{ const d=+p.dataset.depth; p.style.setProperty("--px", (-cx*d).toFixed(1)); p.style.setProperty("--py", (-cy*d).toFixed(1)); });
      const r = aim.getBoundingClientRect();
      const a = Math.atan2(e.clientY-(r.top+r.height/2), e.clientX-(r.left+r.width/2))*180/Math.PI;
      aim.style.setProperty("--aim", a.toFixed(0)+"deg");
    }, {passive:true});
  }


  // reveal
  const io = new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target);} }), {rootMargin:"0px 0px -8% 0px"});
  $$(".hl").forEach((el,i)=>{ el.style.transitionDelay = (.25 + (i%3)*.25)+"s"; if(reduced) el.classList.add("in"); else io.observe(el); });
  $$(".rv").forEach(el=>{ if(el.getBoundingClientRect().top < innerHeight) el.classList.add("in"); else io.observe(el); });

  // servicios: panel fijo que cambia
  const svcs = $$(".svc"), pcs = $$("#svcStage .pc");
  const setSvc = i=>{
    const it = t.services.items[i];
    svcs.forEach((x,j)=>x.classList.toggle("on", j===i));
    const img = pcs.find(p=>p.dataset.img==String(i));
    pcs.forEach(p=>p.classList.toggle("on", img ? p===img : p.dataset.k===it[2] && !p.dataset.img));
    $("#svcCapN").textContent = `${String(i+1).padStart(2,"0")} — ${it[0]}`; $("#svcCapT").textContent = it[1];
  };
  window.__setSvc = setSvc; window.__svcCur = 0; setSvc(0);
  svcs.forEach((li,i)=>{
    li.addEventListener("pointerenter", e=>{ if(e.pointerType==="mouse"){ window.__svcCur=i; setSvc(i);} });
    li.addEventListener("focus", ()=>{ window.__svcCur=i; setSvc(i); });
    li.addEventListener("click", ()=>{ window.__svcCur=i; setSvc(i); });
  });

  // antes / después
  const ba = $("#ba");
  if(ba){
  const baR = $("#baRange");
  const setBA = v=>{ ba.style.setProperty("--pos", v+"%"); baR.value = v; };
  baR.addEventListener("input", ()=>setBA(baR.value));
  let baDrag=false; const baMove=e=>{ const q=ba.getBoundingClientRect(); setBA(Math.max(0,Math.min(100,(e.clientX-q.left)/q.width*100)).toFixed(1)); };
  ba.addEventListener("pointerdown", e=>{ baDrag=true; ba.__user=true; baMove(e); try{ba.setPointerCapture(e.pointerId)}catch(_){} e.preventDefault(); });
  ba.addEventListener("pointermove", e=>{ if(baDrag) baMove(e); });
  ["pointerup","pointercancel"].forEach(ev=>ba.addEventListener(ev, ()=>baDrag=false));
  if(!reduced) new IntersectionObserver((es,o)=>es.forEach(e=>{ if(e.isIntersecting){ o.disconnect();
    const seq=[[50,0],[22,700],[74,1500],[50,2200]]; const t0=performance.now(); let k=0; let from=50;
    const step=now=>{ const el=now-t0; while(k<seq.length-1 && el>seq[k+1][1]) {from=seq[k+1][0];k++;} if(ba.__user) return; if(k>=seq.length-1){ setBA(50); return; }
      const [v1,t1]=seq[k+1], [,tA]=seq[k]; const q=Math.min(1,(el-tA)/(t1-tA)); const ez=q<.5?2*q*q:1-Math.pow(-2*q+2,2)/2; setBA((seq[k][0]+(v1-seq[k][0])*ez).toFixed(1)); requestAnimationFrame(step); };
    setTimeout(()=>requestAnimationFrame(step), 300); } }), {threshold:.5}).observe(ba);
  }

  // checklist
  const KEY = "apertura-checklist-v1";
  const clGrid = $("#clGrid");
  if(clGrid){
  const boxes = $$("#clGrid input[type=checkbox]");
  let saved = null; try{ saved = JSON.parse(localStorage.getItem(KEY)); }catch(e){}
  boxes.forEach(b=>{ b.checked = saved ? !!saved[b.id] : t.checklist.example.includes(b.dataset.name); });
  const N=$("#clN"), dN=$("#dN");
  $("#clT").textContent = $("#dT").textContent = boxes.length;
  let last = -1;
  const updCL = ()=>{
    const done = boxes.filter(b=>b.checked).length, tot = boxes.length, pend = tot-done;
    N.textContent = dN.textContent = done;
    if(last!==-1 && last!==done){ N.classList.remove("bump"); N.offsetWidth; N.classList.add("bump"); }
    last = done;
    $("#clMeter").style.setProperty("--p", done/tot);
    $("#clSent").textContent = t.checklist.sentence(done, tot);
    const m = t.checklist.msgs; const msg = pend===0 ? m.all : pend/tot > .55 ? m.many : pend > 5 ? m.some : m.few;
    $("#clMsg").textContent = $("#dMsg").textContent = msg;
    $$(".cl-cat").forEach(c=>{ const bs=$$("input",c), d=bs.filter(b=>b.checked).length, cnt=$(".cnt",c); cnt.textContent=`${d}/${bs.length}`; cnt.classList.toggle("full", d===bs.length); });
    const pendNames = boxes.filter(b=>!b.checked).map(b=>b.dataset.name);
    const txt = t.checklist.waIntro + (pendNames.length ? pendNames.slice(0,18).join(", ") + (pendNames.length>18?"…":"") : "revisar todo antes de imprimir") + ".";
    $$(".cl-help").forEach(a=>a.href = wa(txt));
    try{ localStorage.setItem(KEY, JSON.stringify(Object.fromEntries(boxes.map(b=>[b.id,b.checked])))); }catch(e){}
  };
  boxes.forEach(b=>b.addEventListener("change", updCL));
  $("#clReset").addEventListener("click", ()=>{ boxes.forEach(b=>b.checked=false); updCL(); });
  $$(".cl-cat").forEach((c,i)=>{
    const hb = $(".cl-head",c);
    if(matchMedia("(max-width:639px)").matches && i>1){ c.classList.add("closed"); hb.setAttribute("aria-expanded","false"); }
    hb.addEventListener("click", ()=>{ const cl=c.classList.toggle("closed"); hb.setAttribute("aria-expanded", String(!cl)); });
  });
  updCL();
  const dock = $("#clDock");
  new IntersectionObserver(es=>es.forEach(e=>dock.classList.toggle("show", e.isIntersecting)), {rootMargin:"-35% 0px -20% 0px"}).observe(clGrid);
  }

  // projects
  const ov = $("#pjo");
  if(ov){
  const items = t.projects.items, panel = $("#pjPanel");
  let curP = 0, lastBtn = null;
  const fill = i=>{
    curP = (i+items.length)%items.length; const p = items[curP];
    $("#pjTitle").textContent = p.name; $("#pjDesc").textContent = p.desc;
    $("#pjCount").textContent = `${String(curP+1).padStart(2,"0")} / ${String(items.length).padStart(2,"0")}`;
    const L=t.projects.labels;
    $("#pjMeta").innerHTML = `<dt>${L.type}</dt><dd>${esc(p.type)}</dd><dt>${L.role}</dt><dd>${esc(p.role)}</dd>`;
    const natural = p.images && p.images.length;
    const imgs = natural ? p.images.map(src=>`<img src="${esc(base + src)}" alt="" loading="lazy">`) : [art(p.art[0],p.word,[p.type,p.year]), art(p.art[1],p.word,[p.name,"02"]), art(p.art[0].includes("ink")?"sheet halftone":"ink halftone",p.word,[p.name,"03"])];
    $("#pjImgs").innerHTML = imgs.map(a=>`<div class="fig${natural?" fig-natural":""}">${a}</div>`).join("");
    panel.scrollTop = 0;
    $$(".fig",panel).forEach(f=>{f.style.animation="none";f.offsetHeight;f.style.animation="";});
  };
  const openP = (i, btn)=>{
    lastBtn = btn; fill(i);
    const r = btn.querySelector(".frame").getBoundingClientRect();
    panel.style.setProperty("--clip", `inset(${r.top}px ${innerWidth-r.right}px ${innerHeight-r.bottom}px ${r.left}px)`);
    ov.hidden = false; ov.classList.remove("open"); panel.offsetHeight;
    requestAnimationFrame(()=>ov.classList.add("open"));
    document.body.style.overflow="hidden"; $("#pjClose").focus({preventScroll:true});
  };
  const closeP = ()=>{
    ov.classList.remove("open");
    setTimeout(()=>{ ov.hidden = true; document.body.style.overflow=""; lastBtn && lastBtn.focus({preventScroll:true}); }, reduced?0:600);
  };
  $$(".pj").forEach(b=>{
    b.addEventListener("click", ()=>openP(+b.dataset.p, b));
    b.addEventListener("pointermove", e=>{ const r=b.querySelector(".frame").getBoundingClientRect(); b.style.setProperty("--hx",((e.clientX-r.left)/r.width*100)+"%"); b.style.setProperty("--hy",((e.clientY-r.top)/r.height*100)+"%"); });
  });
  $("#pjClose").addEventListener("click", closeP);
  $("#pjPrev").addEventListener("click", ()=>fill(curP-1));
  $("#pjNext").addEventListener("click", ()=>fill(curP+1));
  addEventListener("keydown", e=>{ if(ov.hidden) return; if(e.key==="Escape") closeP(); if(e.key==="ArrowRight") fill(curP+1); if(e.key==="ArrowLeft") fill(curP-1); });
  }

  // partners share
  const shareBtn = $("#share");
  if(shareBtn) shareBtn.addEventListener("click", async ()=>{
    const url = (CONFIG.siteUrl || location.href.split("#")[0]) + "#partners";
    let ok = false; try{ await navigator.clipboard.writeText(url); ok = true; }catch(e){}
    toast(ok ? t.partners.copied : url);
  });

  // final: typing words + picker
  const what = $("#what"); let wi=0, ci=0, del=false, typeTimer=null, locked=false;
  const type = ()=>{
    if(locked) return;
    const w = t.final.words[wi];
    if(reduced){ what.textContent = w; return; }
    if(!del){ ci++; if(ci>w.length){ del=true; typeTimer=setTimeout(type,1500); return; } }
    else { ci--; if(ci===0){ del=false; wi=(wi+1)%t.final.words.length; } }
    what.textContent = w.slice(0,ci);
    typeTimer = setTimeout(type, del?35:75);
  };
  what.textContent = t.final.words[0]; ci = t.final.words[0].length; del = false;
  typeTimer = setTimeout(()=>{ del=true; type(); }, 2400);
  const pick = ()=>{
    const k = $("input[name=kind]:checked"), w = $("input[name=when]:checked");
    $("#tellme").href = wa(t.final.waText(k&&k.value!=="Otro"?k.value:"", w?w.value:""));
    const idx = k ? t.final.opts1.indexOf(k.value) : -1;
    if(k && k.value!=="Otro" && idx>-1 && t.final.words[idx]){
      clearTimeout(typeTimer); locked = true; what.textContent = t.final.words[idx];
    } else if(locked){
      locked = false; wi = 0; ci = 0; del = false; type();
    }
  };
  $$("#picker input").forEach(i=>i.addEventListener("change", pick));

  // lang switch (listo para EN)
  $$(".foot [data-lang]").forEach(b=>b.addEventListener("click", ()=>{ if(CONTENT[b.dataset.lang]){ LANG=b.dataset.lang; render(); } }));

  // scroll-driven scenes
  const prob = $("#problema"), tags = prob ? $$(".tag", prob) : [], dr = $("#dreveal"), inks = $("#inks");
  const clamp = (v,a=0,b=1)=>Math.min(b,Math.max(a,v));
  const ease = x=>1-Math.pow(1-x,3);
  let ticking = false;
  const frame = ()=>{
    ticking = false; onHead();
    { const pz = $("#proceso"); if(pz){ const q = pz.getBoundingClientRect(); document.documentElement.classList.toggle("is-blue", q.top < innerHeight*.5 && q.bottom > innerHeight*.5); } }
    if(!reduced){
      // problema
      if(prob){
      const r = prob.getBoundingClientRect(), total = r.height - innerHeight;
      if(r.bottom > 0 && r.top < innerHeight){
        const p = clamp(-r.top/Math.max(total,1));
        const stage = $(".problem-stage", prob), h2 = $("h2", prob), tagsEl = $("#tags");
        const tt = h2.getBoundingClientRect().bottom - stage.getBoundingClientRect().top + 24;
        tagsEl.style.setProperty("--tt", tt+"px");
        const TW = tagsEl.clientWidth, TH = tagsEl.clientHeight;
        dr.style.setProperty("--dt", (tt + TH/2)+"px");
        const f = clamp((p-.5)/.12), m = ease(clamp((p-.66)/.16));
        tags.forEach((tg,i)=>{
          const a = ease(clamp((p - i*.03)/.06)), d = tg.dataset.d==="1";
          const x = parseFloat(tg.style.getPropertyValue("--x")), y = parseFloat(tg.style.getPropertyValue("--y"));
          let o = a, s = .7+.3*a, dx=0, dy=0;
          if(d){ tg.classList.toggle("hot", f>.4); dx=(TW*.5 - TW*x/100)*m; dy=(TH*.5 - TH*y/100)*m; o = a*(1-m); s = s*(1-.5*m); }
          else { tg.classList.toggle("dim", f>.4); o = a*(1-.75*f)*(1-m*.6); }
          tg.style.setProperty("--o", o.toFixed(3)); tg.style.setProperty("--s", s.toFixed(3));
          tg.style.setProperty("--dx", dx.toFixed(1)+"px"); tg.style.setProperty("--dy", dy.toFixed(1)+"px");
        });
        const dp = ease(clamp((p-.76)/.14));
        dr.style.setProperty("--do", dp.toFixed(3)); dr.style.setProperty("--ds", (.6+.4*dp).toFixed(3));
        prob.style.setProperty("--to", (1-.88*dp).toFixed(3));
      }
      }
      // servicios en móvil: se activa la fila que pasa por el centro
      if(!fine && window.__setSvc){
        const list = $("#svcList"), lr = list.getBoundingClientRect();
        if(lr.top < innerHeight*.7 && lr.bottom > innerHeight*.4){
          let best=0, bd=1e9; $$(".svc").forEach((x,i)=>{ const q=x.getBoundingClientRect(); const dd=Math.abs(q.top+q.height/2 - innerHeight*.62); if(dd<bd){bd=dd;best=i;} });
          if(best!==window.__svcCur){ window.__svcCur=best; window.__setSvc(best); }
        }
      }
      // tintas
      if(inks){
      const ir = inks.getBoundingClientRect();
      if(ir.bottom>0 && ir.top<innerHeight){
        const q = clamp((innerHeight - ir.top)/(innerHeight + ir.height));
        const d = clamp(1 - q/.55);
        inks.style.setProperty("--d", d.toFixed(3));
        $$(".ink-c",inks).forEach((c,i)=>c.style.setProperty("--ir", ((i?1:-1)*d*14).toFixed(1)+"deg"));
      }
      }
      // parallax sutil del collage en scroll (móvil incluido)
      if(scrollY < innerHeight*1.2 && !fine) pieces.forEach(pc=>pc.style.setProperty("--py", (-scrollY*+pc.dataset.depth/140).toFixed(1)));
    }
  };
  const onScroll = ()=>{ if(!window.__tick){ window.__tick=true; requestAnimationFrame(()=>{ window.__tick=false; window.__frame(); }); } };
  if(!window.__scrollBound){ addEventListener("scroll", onScroll, {passive:true}); addEventListener("resize", onScroll); window.__scrollBound = true; }
  window.__frame = frame; frame();
}
function toast(msg){ const el=$("#toast"); el.textContent=msg; el.classList.add("on"); clearTimeout(el._t); el._t=setTimeout(()=>el.classList.remove("on"), 2600); }

render();
if(location.hash){ const el = document.querySelector(location.hash); el && setTimeout(()=>el.scrollIntoView(), 60); }

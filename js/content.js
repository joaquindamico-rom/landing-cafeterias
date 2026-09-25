/* =====================================================================
   CONFIG — datos de contacto y marca (placeholders editables)
   ===================================================================== */
const CONFIG = {
  name: "Joaquín D'Amico",              // tu nombre o nombre del estudio
  tagline: "Branding, Diseño Gráfico, Experiencia Digital",
  city: "Valencia",
  email: "joaquindamico@gmail.com",
  whatsapp: "34624128731",              // número sin + ni espacios
  instagram: "https://instagram.com/joaco.damico.design",
  siteUrl: "",                          // ej. "https://tudominio.com" (para el link de partners)
  defaultLang: "es"
};

/* =====================================================================
   CONTENT — todos los textos por idioma. Para inglés, duplicá "es" como "en".
   ===================================================================== */
const CONTENT = {
es: {
  nav: [["#servicios","Qué resuelvo"],["#checklist","Checklist"],["#proyectos","Proyectos"],["#paquetes","Paquetes"]],
  navCta: "Contame",
  hero: {
    l1: "Vos ocupate del negocio.",
    l2a: "Yo me ocupo de que", l2mark: "se vea bien.",
    ownerPre: "Todo lo que estás resolviendo", owner: ["local","permisos","obra","proveedores","equipamiento","empleados","carta","presupuesto","apertura"],
    tickerPre: "Ahí entro yo",
    ticker: ["la identidad","cómo se ve el local","cómo se presenta la marca","cada punto de contacto"],
    // *texto* = subrayado con fibrón
    support: "Abrir un café implica resolver *demasiadas cosas a la vez*. Ahí te ayudo a ordenar, diseñar y llevar a tierra *toda la parte visual* del proyecto, acompañándote en las decisiones para que llegues al día de apertura con una *identidad clara, coherente y lista*.",
    cta1: "Contame qué estás abriendo", cta2: "Ver qué podemos resolver"
  },
  collage: {
    menuName: "Tu café", menuSub: ["Carta", "Nº 01"],
    menu: [["Café",null],["Espresso","1,60"],["Cortado","1,80"],["Flat white","3,20"],["Batch brew","2,50"],["Horno",null],["Bollo de cardamomo","3,40"],["Tostada de temporada","5,50"]],
    allergens: "Alérgenos: consultá al equipo · Leche de avena +0,40",
    poster: "Abrimos pronto", posterCap: ["Rótulo", "A3"],
    ticketBig: "#24", ticketRows: [["2× Flat white","6,40"],["1× Cortado","1,80"],["Para llevar","Sí"]], ticketCap: "Sábado · 11:42",
    sticker: "ABRIMOS PRONTO · OPENING SOON · ",
    swatch: ["Tinta 01","Papel","Negro"]
  },
  marqueeLabel: "Una marca también está en:",
  marquee1: ["Carta","Fachada","Pizarras","Packaging","Vasos","Vajilla","Merch","Señalética","Web","Stickers"],
  problem: {
    lab: "El problema",
    title: "Abrir un café ya es bastante trabajo.",
    // d:true = parte visual (lo que resuelvo yo)
    tags: [
      ["Local",false],["Licencias",false],["Obra",false],["Cafetera",false],["Proveedores",false],["Personal",false],
      ["Carta",true],["Precios",false],["Instagram",true],["Carteles",true],["Packaging",true],["Google Maps",false],["Uniformes",true],["Take away",true]
    ],
    revealLab: "Yo me encargo de esta parte ↓",
    revealWord: "Diseño.",
    revealText: "Vos seguís con la obra, la cafetera y el equipo. Todo lo que se ve, lo resuelvo yo."
  },
  beforeAfter: {
    lab: "Antes / después",
    title: "Mismo local. Dos formas de presentarse.",
    text: "El espacio es el mismo. Lo que cambia es cómo se ve, cómo se entiende y qué transmite. La identidad, la fachada, el escaparate y los detalles visuales hacen la diferencia. ¿Lo percibís igual?",
    textMark: "Tus clientes tampoco.",
    before: "Antes", after: "Después",
    hint: "Arrastrá para comparar",
    note: "Visualización de ejemplo.",
    beforeImg: "img/antes.jpg", afterImg: "img/despues.jpg"   // si se vacían, se usa la ilustración SVG
  },
  services: {
    lab: "¿En qué te puedo ayudar?",
    title: "De la identidad a todo lo que viene después.",
    intro: "Diseñamos todo lo que tu negocio necesita para verse y sentirse coherente en cada punto de contacto.",
    items: [
      // [nombre, etiqueta (sin uso hoy), ilustración, imagen real opcional]
      ["Branding","","identidad",""],
      ["Carta y menú","","carta",""],
      ["Cartelería y señalética","","cartel",""],
      ["Packaging y take away","","pack",""],
      ["Redes y contenido","","redes",""],
      ["Merch y textiles","","merch",""],
      ["Página web","","web",""],
      ["Piezas impresas","","print",""],
      ["Herramientas digitales a medida","","web",""]
    ],
    note: "No necesitás contratar todo. Armamos el paquete según lo que realmente necesites para abrir.",
    noteCta: "Ver la checklist"
  },
  checklist: {
    lab: "Checklist de apertura",
    title: "Todo lo que probablemente vas a tener que resolver antes de abrir.",
    hint: "Marcá lo que ya tenés. Se guarda en este navegador.",
    sentence: (d,t) => `Tenés resueltas ${d} de ${t} cosas.`,
    msgs: { many: "Tranqui. Para eso estoy.", some: "Vas bien. Lo que falta lo vemos juntos.", few: "Casi. Revisemos los detalles finales.", all: "Todo listo. Si querés, lo revisamos antes de imprimir." },
    cta: "Necesito ayuda con esto", ctaShort: "Pedir ayuda", reset: "Empezar de cero",
    waIntro: "Hola! Estoy por abrir un café y todavía me falta resolver: ",
    cats: [
      ["Identidad",["Nombre","Logo","Colores","Tipografías","Sistema gráfico"]],
      ["Local",["Cartel exterior","Horarios","Señalética","Baños","Wifi","Recogida de pedidos","Take away"]],
      ["Menú",["Carta","Precios","Categorías","Alérgenos","Bebidas especiales","Cartelería de vitrina"]],
      ["Packaging",["Vasos","Stickers","Bolsas","Servilletas","Packaging para comida"]],
      ["Digital",["Instagram","Google Maps","Templates de publicación","Fotos iniciales","Landing / web básica"]],
      ["Equipo",["Camisetas","Delantales","Merch","Tote bags"]],
      ["Producción",["Archivos finales","Imprentas","Rótulos","Proveedores","Materiales"]]
    ],
    example: ["Nombre","Horarios","Wifi"]  // marcados de ejemplo la primera vez
  },
  process: {
    lab: "Cómo trabajo",
    title: "De la idea a la apertura.",
    steps: ["Me contás sobre tu negocio.","Vemos qué tenés y qué te hace falta.","Definimos un paquete cerrado.","Diseñamos y producimos.","Llegás a la apertura con todo listo."],
    notes: [],
    quote: "Diseñamos pensando en cómo se ve el negocio, pero también en cómo funciona. <b>Sabemos lo que es una barra llena, un servicio un sábado y todo lo que pasa antes de abrir.</b>"
  },
  projects: {
    lab: "Proyectos",
    title: "Algunos de los proyectos en los que trabajé.",
    intro: "Una selección de identidades, piezas gráficas y proyectos digitales que muestran distintas formas de construir una marca.",
    open: "Ver proyecto", close: "Cerrar", prev: "←", next: "→",
    labels: { type: "Tipo", year: "Año", role: "Rol" },
    /* ---- Para usar imágenes reales: subí archivos junto al HTML (ej. img/proyecto-01.jpg)
       y completá cover / hover / images. Si están vacíos se usa el placeholder gráfico. ---- */
    items: [
      { name:"Birman", type:"Identidad visual", year:"2025", role:"Dirección de arte", size:"s7", ar:"4/3",
        cover:"img/proyectos/birman-packs.webp", hover:"img/proyectos/birman-packs.webp",
        images:["img/proyectos/birman-logo.webp","img/proyectos/birman-packs.webp","img/proyectos/birman-local.webp","img/proyectos/birman-barra.webp"],
        art:["poster","sheet"], word:"B",
        desc:"Birman es una propuesta de identidad para una cervecería artesanal. Trabajé una marca con carácter, pensada para verse bien en botella, en barra y en cada punto de contacto." },
      { name:"Proyecto 02", type:"Packaging", year:"2024", role:"Diseño y producción", size:"s5", ar:"4/5", off:true,
        cover:"", hover:"", images:[], art:["circle sheet","pink"], word:"Pack",
        desc:"Packaging pensado para producirse en tiradas cortas. Reemplazá con la descripción real." },
      { name:"Proyecto 03", type:"Editorial", year:"2024", role:"Diseño editorial", size:"s4", ar:"3/4",
        cover:"", hover:"", images:[], art:["sheet gridart","ink"], word:"Nº3",
        desc:"Publicación / catálogo. Reemplazá con la descripción real." },
      { name:"Proyecto 04", type:"Cartelería", year:"2023", role:"Diseño gráfico", size:"s4", ar:"3/4",
        cover:"", hover:"", images:[], art:["ink stripes","poster"], word:"Sáb",
        desc:"Serie de carteles. Reemplazá con la descripción real." },
      { name:"Proyecto 05", type:"Packaging", year:"2023", role:"Diseño de packaging", size:"s4", ar:"3/4",
        cover:"", hover:"", images:[], art:["pink halftone","poster halftone"], word:"2×",
        desc:"Cajas y bolsas de take away a dos tintas. Reemplazá con la descripción real." },
      { name:"Proyecto 06", type:"Merchandising", year:"2022", role:"Diseño", size:"s5", ar:"1/1",
        cover:"", hover:"", images:[], art:["sheet stripes","ink"], word:"Tote",
        desc:"Camisetas, totes y piezas para equipo. Reemplazá con la descripción real." },
      { name:"Proyecto 07", type:"Producto digital", year:"2025", role:"UX / UI · Sistema de diseño", size:"s7", ar:"16/10", off:false,
        cover:"", hover:"", images:[], art:["ui sheet","ui poster"], word:"UX",
        desc:"Producto digital con sistema de diseño. Reemplazá con la descripción real." }
    ]
  },
  why: {
    lab: "Por qué yo",
    p1: "Soy diseñador gráfico y de producto digital. Durante años trabajé en identidad, UX, producto y sistemas de diseño.",
    p2: "Hoy también trabajo detrás de la barra de una cafetería.",
    quote: "No pienso solamente en cómo se ve una carta, sino en *cómo se usa un sábado con veinte pedidos esperando*.",
    p3: "Eso cambia bastante cómo diseño para hospitality.",
    inkA: "Gráfica", inkB: "UX", inkX: "Café", eq: ["Gráfica","×","UX","×","Café"]
  },
  packages: {
    lab: "Cómo podemos trabajar juntos",
    title: "Tres formas de empezar.",
    boardTop: ["Carta de servicios", "Precios orientativos · IVA no incluido"],
    items: [
      { name:"Apertura base", from:"Desde", price:"1.000 €", for:"Para resolver lo esencial y salir con una imagen clara.", list:["Branding","Carta y menú","Cartelería básica","Piezas impresas"] },
      { name:"Apertura", from:"Desde", price:"1.800 €", for:"Para llegar a la apertura con un sistema más completo.", list:["Branding","Carta y menú","Cartelería y señalética","Packaging y take away","Redes y contenido","Merch y textiles"], feature:true },
      { name:"Apertura a medida", from:"", price:"Según alcance", for:"Para proyectos que necesitan algo más específico.", list:["Página web","Packaging más completo","Herramientas digitales a medida","Piezas o necesidades específicas"] }
    ],
    cta: "Contame tu proyecto",
    note: "Cada proyecto es distinto. Estos precios son orientativos y nos sirven como punto de partida."
  },
  partners: {
    lab: "Tostadores · Arquitectos · Proveedores",
    title: "¿Trabajás con gente que está por <em>abrir cafeterías</em>?",
    text: "Si sos tostador, arquitecto, proveedor o trabajás con nuevos cafés y alguno de tus clientes necesita resolver la parte visual, podemos colaborar.",
    who: ["Tostadores","Arquitectura e interiorismo","Proveedores de maquinaria","Consultores de café","Distribuidores"],
    cta: "Trabajemos juntos", share: "Copiar enlace a esta sección", copied: "Enlace copiado",
    waText: "Hola! Trabajo con cafeterías que están por abrir y me interesa colaborar."
  },
  final: {
    lab: "Empecemos",
    title: "¿Qué estás por abrir?",
    words: ["una cafetería.","una bakery.","un wine bar.","un brunch.","un tostadero."],
    q1: "Es…", opts1: ["Cafetería","Bakery","Wine bar","Brunch","Tostadero","Otro"],
    pickHint: "Elegí una opción ↓",
    q2: "¿Para cuándo?", opts2: ["Menos de 1 mes","1–3 meses","Más de 3 meses","Todavía no sé"],
    cta: "Contámelo", or: "O si preferís, escribime por",
    waText: (a,b) => `Hola! Estoy por abrir ${a ? a.toLowerCase() : "un negocio gastronómico"}${b ? " (" + b.toLowerCase() + ")" : ""} y quiero resolver la parte visual.`
  },
  footer: { rights: "Diseño para cafeterías y negocios gastronómicos en Valencia.", langs: [["es","ES"],["en","EN"]] }
},
en: {
  nav: [["#servicios","What I solve"],["#checklist","Checklist"],["#proyectos","Projects"],["#paquetes","Packages"]],
  navCta: "Get in touch",
  hero: {
    l1: "You handle the business.",
    l2a: "I'll make sure", l2mark: "it looks good.",
    ownerPre: "Everything you're dealing with", owner: ["the space","permits","construction","suppliers","equipment","staff","menu","budget","opening"],
    tickerPre: "That's where I come in",
    ticker: ["the identity","how the place looks","how the brand shows up","every touchpoint"],
    // *text* = highlighter underline
    support: "Opening a café means juggling *way too many things at once*. That's where I help you sort out, design and actually deliver *the entire visual side* of the project, walking you through the decisions so you reach opening day with a *clear, coherent, ready identity*.",
    cta1: "Tell me what you're opening", cta2: "See what I can help with"
  },
  collage: {
    menuName: "Your café", menuSub: ["Menu", "No. 01"],
    menu: [["Coffee",null],["Espresso","1.60"],["Cortado","1.80"],["Flat white","3.20"],["Batch brew","2.50"],["Bakery",null],["Cardamom bun","3.40"],["Seasonal toast","5.50"]],
    allergens: "Allergens: ask the team · Oat milk +0.40",
    poster: "Opening soon", posterCap: ["Sign", "A3"],
    ticketBig: "#24", ticketRows: [["2× Flat white","6.40"],["1× Cortado","1.80"],["Takeaway","Yes"]], ticketCap: "Saturday · 11:42",
    sticker: "OPENING SOON · ABRIMOS PRONTO · ",
    swatch: ["Ink 01","Paper","Black"]
  },
  marqueeLabel: "A brand also lives in:",
  marquee1: ["Menu","Storefront","Chalkboards","Packaging","Cups","Tableware","Merch","Signage","Website","Stickers"],
  problem: {
    lab: "The problem",
    title: "Opening a café is already a lot of work.",
    // d:true = the visual part (what I handle)
    tags: [
      ["Space",false],["Licenses",false],["Construction",false],["Coffee machine",false],["Suppliers",false],["Staff",false],
      ["Menu",true],["Pricing",false],["Instagram",true],["Signage",true],["Packaging",true],["Google Maps",false],["Uniforms",true],["Takeaway",true]
    ],
    revealLab: "I take care of this part ↓",
    revealWord: "Design.",
    revealText: "You keep handling construction, the coffee machine and the team. Everything people see, I handle."
  },
  beforeAfter: {
    lab: "Before / after",
    title: "Same place. Two ways of showing up.",
    text: "The space is the same. What changes is how it looks, how it reads and what it says. The identity, the storefront, the window display and the visual details make the difference. Can you tell the difference?",
    textMark: "So can your customers.",
    before: "Before", after: "After",
    hint: "Drag to compare",
    note: "Sample visualization.",
    beforeImg: "img/antes.jpg", afterImg: "img/despues.jpg"   // if left empty, the SVG illustration is used
  },
  services: {
    lab: "What can I help with?",
    title: "From the identity to everything that comes after.",
    intro: "We design everything your business needs to look and feel coherent at every touchpoint.",
    items: [
      // [name, tag (unused today), illustration, optional real image]
      ["Branding","","identidad",""],
      ["Menu design","","carta",""],
      ["Signage","","cartel",""],
      ["Packaging & takeaway","","pack",""],
      ["Social & content","","redes",""],
      ["Merch & apparel","","merch",""],
      ["Website","","web",""],
      ["Printed pieces","","print",""],
      ["Custom digital tools","","web",""]
    ],
    note: "You don't need to hire everything. We build the package around what you actually need to open.",
    noteCta: "See the checklist"
  },
  checklist: {
    lab: "Opening checklist",
    title: "Everything you'll probably need to sort out before opening.",
    hint: "Check off what you already have. It's saved in this browser.",
    sentence: (d,t) => `You've sorted ${d} of ${t} things.`,
    msgs: { many: "Relax. That's what I'm here for.", some: "You're doing fine. We'll figure out the rest together.", few: "Almost there. Let's go over the last details.", all: "All set. If you want, we can review it before printing." },
    cta: "I need help with this", ctaShort: "Ask for help", reset: "Start over",
    waIntro: "Hi! I'm about to open a café and I still need to sort out: ",
    cats: [
      ["Identity",["Name","Logo","Colors","Typefaces","Graphic system"]],
      ["Space",["Outdoor sign","Hours","Signage","Restrooms","Wifi","Order pickup","Takeaway"]],
      ["Menu",["Menu","Pricing","Categories","Allergens","Specialty drinks","Display signage"]],
      ["Packaging",["Cups","Stickers","Bags","Napkins","Food packaging"]],
      ["Digital",["Instagram","Google Maps","Post templates","Initial photos","Basic landing page"]],
      ["Team",["T-shirts","Aprons","Merch","Tote bags"]],
      ["Production",["Final files","Printers","Signs","Suppliers","Materials"]]
    ],
    example: ["Name","Hours","Wifi"]  // checked by default the first time
  },
  process: {
    lab: "How I work",
    title: "From idea to opening day.",
    steps: ["You tell me about your business.","We look at what you have and what you need.","We define a closed package.","We design and produce.","You reach opening day with everything ready."],
    notes: [],
    quote: "We design with how the business looks in mind, but also how it works. <b>We know what a packed bar looks like, a busy Saturday service, and everything that happens before opening.</b>"
  },
  projects: {
    lab: "Projects",
    title: "Some of the projects I've worked on.",
    intro: "A selection of identities, graphic pieces and digital products that show different ways of building a brand.",
    open: "View project", close: "Close", prev: "←", next: "→",
    labels: { type: "Type", year: "Year", role: "Role" },
    items: [
      { name:"Project 01", type:"Visual identity", year:"2025", role:"Art direction", size:"s7", ar:"4/3",
        cover:"", hover:"", images:[], art:["poster","sheet"], word:"Aa",
        desc:"Brief description of the project: what problem it solved, what was designed and what pieces came out of the system. Replace this text." },
      { name:"Project 02", type:"Packaging", year:"2024", role:"Design and production", size:"s5", ar:"4/5", off:true,
        cover:"", hover:"", images:[], art:["circle sheet","pink"], word:"Pack",
        desc:"Packaging designed for short production runs. Replace with the real description." },
      { name:"Project 03", type:"Editorial", year:"2024", role:"Editorial design", size:"s4", ar:"3/4",
        cover:"", hover:"", images:[], art:["sheet gridart","ink"], word:"No.3",
        desc:"Publication / catalog. Replace with the real description." },
      { name:"Project 04", type:"Signage", year:"2023", role:"Graphic design", size:"s4", ar:"3/4",
        cover:"", hover:"", images:[], art:["ink stripes","poster"], word:"Sat",
        desc:"Poster series. Replace with the real description." },
      { name:"Project 05", type:"Packaging", year:"2023", role:"Packaging design", size:"s4", ar:"3/4",
        cover:"", hover:"", images:[], art:["pink halftone","poster halftone"], word:"2×",
        desc:"Two-tone takeaway boxes and bags. Replace with the real description." },
      { name:"Project 06", type:"Merchandising", year:"2022", role:"Design", size:"s5", ar:"1/1",
        cover:"", hover:"", images:[], art:["sheet stripes","ink"], word:"Tote",
        desc:"T-shirts, totes and pieces for the team. Replace with the real description." },
      { name:"Project 07", type:"Digital product", year:"2025", role:"UX / UI · Design system", size:"s7", ar:"16/10", off:false,
        cover:"", hover:"", images:[], art:["ui sheet","ui poster"], word:"UX",
        desc:"Digital product with a design system. Replace with the real description." }
    ]
  },
  why: {
    lab: "Why me",
    p1: "I'm a graphic and digital product designer. For years I worked in identity, UX, product and design systems.",
    p2: "These days I also work behind the bar at a café.",
    quote: "I don't just think about how a menu looks, but about *how it holds up on a Saturday with twenty orders waiting*.",
    p3: "That changes quite a bit how I design for hospitality.",
    inkA: "Graphic", inkB: "UX", inkX: "Coffee", eq: ["Graphic","×","UX","×","Coffee"]
  },
  packages: {
    lab: "How we can work together",
    title: "Three ways to start.",
    boardTop: ["Service menu", "Estimated prices · VAT not included"],
    items: [
      { name:"Base opening", from:"From", price:"€1,000", for:"To cover the essentials and launch with a clear image.", list:["Branding","Menu design","Basic signage","Printed pieces"] },
      { name:"Opening", from:"From", price:"€1,800", for:"To reach opening day with a more complete system.", list:["Branding","Menu design","Signage","Packaging & takeaway","Social & content","Merch & apparel"], feature:true },
      { name:"Custom opening", from:"", price:"Scope-based", for:"For projects that need something more specific.", list:["Website","Fuller packaging","Custom digital tools","Specific pieces or needs"] }
    ],
    cta: "Tell me about your project",
    note: "Every project is different. These prices are a starting point and give you a rough idea."
  },
  partners: {
    lab: "Roasters · Architects · Suppliers",
    title: "Do you work with people who are <em>opening cafés</em>?",
    text: "If you're a roaster, architect, supplier, or work with new cafés and one of your clients needs to sort out the visual side, we can collaborate.",
    who: ["Roasters","Architecture & interior design","Equipment suppliers","Coffee consultants","Distributors"],
    cta: "Let's work together", share: "Copy link to this section", copied: "Link copied",
    waText: "Hi! I work with cafés that are about to open and I'm interested in collaborating."
  },
  final: {
    lab: "Let's get started",
    title: "What are you about to open?",
    words: ["a café.","a bakery.","a wine bar.","a brunch spot.","a roastery."],
    q1: "It's…", opts1: ["Café","Bakery","Wine bar","Brunch","Roastery","Other"],
    pickHint: "Pick one ↓",
    q2: "For when?", opts2: ["Less than 1 month","1–3 months","More than 3 months","Not sure yet"],
    cta: "Tell me about it", or: "Or if you'd rather, reach me on",
    waText: (a,b) => `Hi! I'm about to open ${a ? a.toLowerCase() : "a food & beverage business"}${b ? " (" + b.toLowerCase() + ")" : ""} and I want to sort out the visual side.`
  },
  footer: { rights: "Design for cafés and food & beverage businesses in Valencia.", langs: [["es","ES"],["en","EN"]] }
}
};

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
    meta: ["Diseño gráfico + experiencia + hospitality", "Cafeterías · Coffee shops · Bakeries · Wine bars", "Valencia — y donde abras"],
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
  marquee1: ["Una marca también está en:","Carta","Fachada","Pizarras","Packaging","Vasos","Vajilla","Merch","Señalética","Web","Stickers"],
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
    text: "El espacio es el mismo. Lo que cambia es cómo se ve, cómo se entiende y qué transmite. La identidad, la fachada, el escaparate y los detalles visuales hacen la diferencia. ¿Lo percibís igual? Tus clientes tampoco.",
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
    quote: "Diseñamos pensando en cómo se ve el negocio, pero también en cómo funciona. Sabemos lo que es una barra llena, un servicio un sábado y todo lo que pasa antes de abrir."
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
      { name:"Proyecto 01", type:"Identidad visual", year:"2025", role:"Dirección de arte", size:"s7", ar:"4/3",
        cover:"", hover:"", images:[], art:["poster","sheet"], word:"Aa",
        desc:"Descripción breve del proyecto: qué problema había, qué se diseñó y qué piezas salieron del sistema. Reemplazá este texto." },
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
  footer: { rights: "Diseño para cafeterías, coffee shops y negocios gastronómicos en Valencia.", langs: [["es","ES"],["en","EN"]] }
}
};

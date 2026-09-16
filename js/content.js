/* =====================================================================
   CONFIG — datos de contacto y marca (placeholders editables)
   ===================================================================== */
const CONFIG = {
  name: "Joaquín D'Amico",              // tu nombre o nombre del estudio
  tagline: "Diseño gráfico · Producto digital · Hospitality",
  city: "Valencia",
  email: "hola@tudominio.com",
  whatsapp: "34600000000",              // número sin + ni espacios
  instagram: "https://instagram.com/tuusuario",
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
    ownerPre: "Lo tuyo:", owner: ["el local","los permisos","la obra","la cafetera","el equipo","los proveedores"],
    tickerPre: "Lo mío:",
    ticker: ["la identidad","la carta","el rótulo","el packaging","las redes","el merch","la apertura"],
    // *texto* = subrayado con fibrón
    support: "Abrir un café implica resolver *demasiadas cosas a la vez*. Identidad, carta, fachada, señalética, packaging, redes, impresos… Te ayudo a ordenar y diseñar *toda la parte visual* para que llegues al día de apertura con *todo listo y coherente*.",
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
  marquee1: ["Apertura","Carta","Rótulo","Take away","Vasos","Stickers","Horarios","Wifi","Google Maps","Delantales","Imprenta","Vitrina"],
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
    title: "La diferencia se ve desde la calle.",
    text: "Mismo local, misma cafetera. Cambia cómo se presenta: el rótulo, el escaparate, los carteles y la pizarra *hablan el mismo idioma*.",
    before: "Antes", after: "Después",
    hint: "Arrastrá para comparar",
    note: "Visualización de ejemplo.",
    beforeImg: "img/antes.jpg", afterImg: "img/despues.jpg"   // si se vacían, se usa la ilustración SVG
  },
  services: {
    lab: "Qué puedo resolver",
    title: "Lo que se ve, se toca y se imprime.",
    intro: "Cada cosa de esta lista es una pieza que tu cliente va a ver, usar o llevarse.",
    items: [
      // [nombre, etiqueta, ilustración, imagen real opcional]
      ["Identidad visual","Base","identidad",""],["Logo y sistema gráfico","Base","identidad",""],["Tipografía y color","Base","tipo",""],["Carta / menú","Casi siempre","carta",""],
      ["Cartelería","Casi siempre","cartel",""],["Señalética","Según local","senal",""],["Packaging","Según producto","pack",""],["Take away","Según producto","pack",""],
      ["Templates para redes","Digital","redes",""],["Merchandising","Extra","merch",""],["Camisetas / tote bags","Extra","merch",""],["Landing simple","Digital","web",""],
      ["Archivos para imprenta","Siempre","print",""],["Coordinación con proveedores","Si hace falta","prov",""]
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
    title: "Cinco pasos. Sin vueltas.",
    steps: ["Me contás qué estás abriendo.","Vemos qué ya tenés y qué falta.","Definimos un paquete cerrado.","Diseñamos y producimos.","Llegás a la apertura con todo preparado."],
    notes: ["Briefings de 40 páginas","Reuniones eternas","Presupuestos abiertos"],
    quote: "Sin agencia en el medio: hablás con quien diseña, y <b>quien diseña sabe lo que es una barra un sábado</b>."
  },
  projects: {
    lab: "Proyectos",
    title: "Algunos trabajos que muestran cómo pienso visualmente.",
    intro: "No todos son de cafeterías, y no voy a fingir que lo son. Son identidades, piezas impresas y productos donde se ve el criterio.",
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
      { name:"Proyecto 05", type:"Serigrafía", year:"2023", role:"Diseño e impresión", size:"s4", ar:"3/4",
        cover:"", hover:"", images:[], art:["pink halftone","poster halftone"], word:"2×",
        desc:"Edición serigrafiada a dos tintas. Reemplazá con la descripción real." },
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
    lab: "Paquetes",
    title: "Tres formas de empezar.",
    boardTop: ["Carta de servicios", "Precios orientativos · IVA no incluido"],
    items: [
      { name:"Apertura base", from:"Desde", price:"1.500 €", for:"Para resolver lo esencial.", list:["Identidad","Carta","Cartelería básica","Archivos finales"] },
      { name:"Apertura", from:"Desde", price:"2.200 €", for:"Para llegar con todo el sistema listo.", list:["Identidad","Carta","Señalética","Packaging básico","Redes","Merch","Producción"], feature:true, stamp:"Lo completo" },
      { name:"Apertura a medida", from:"", price:"Según alcance", for:"Para proyectos con web, packaging, producción u otras necesidades específicas.", list:["Web / landing","Packaging completo","Producción y proveedores","Lo que tu apertura necesite"] }
    ],
    cta: "Contame tu proyecto",
    note: "Cada apertura es distinta. Estos precios sirven como referencia."
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
    words: ["una cafetería.","un coffee shop.","una bakery.","un wine bar.","un brunch.","un tostadero."],
    q1: "Es…", opts1: ["Cafetería","Coffee shop","Bakery","Wine bar","Brunch","Otro"],
    q2: "¿Para cuándo?", opts2: ["Menos de 1 mes","1–3 meses","Más de 3 meses","Todavía no sé"],
    cta: "Contámelo", or: "O por",
    waText: (a,b) => `Hola! Estoy por abrir ${a ? a.toLowerCase() : "un negocio gastronómico"}${b ? " (" + b.toLowerCase() + ")" : ""} y quiero resolver la parte visual.`
  },
  footer: { rights: "Diseño para cafeterías, coffee shops y negocios gastronómicos en Valencia.", langs: [["es","ES"],["en","EN"]] }
}
};

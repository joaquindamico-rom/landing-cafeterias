# CLAUDE.md — criterios del proyecto

Landing de un diseñador gráfico y de producto digital que ayuda a gente que está por abrir una cafetería / coffee shop / bakery / wine bar a resolver toda la parte visual. Valencia, España.

## Objetivo
Que quien está por abrir entienda en segundos: "vos ocupate del negocio, yo me ocupo de que se vea bien", y escriba (WhatsApp / email). La conversión principal es el contacto.

## Tono
- Español rioplatense con voseo ("contame", "tenés"), cercano, directo, con criterio.
- Como un diseñador con experiencia, no una agencia.
- Prohibido: "experiencias memorables", "transformamos marcas", "estrategias 360", "soluciones integrales".
- Términos del mundo café reales: carta, barra, take away, rótulo, escaparate, vitrina, alérgenos, flat white.

## Dirección visual
- Editorial europeo / póster / papel e tintas. Nada de estética SaaS o startup.
- Paleta: papel cálido `--paper`, negro `--ink`, un acento fuerte `--accent` (azul). Rosa `--ink-b` solo como segunda tinta puntual.
- Tipografía: Archivo (variable, eje de ancho: condensada 62 para titulares en mayúsculas, expandida 125 para frases) + Instrument Sans para texto.
- Contraste de escalas: titulares enormes + textos pequeños editoriales.
- Bordes rectos (radios solo en chips/pastillas). Sin sombras decorativas salvo en piezas "impresas".
- Sin fotos de stock genéricas. Imágenes: proyectos reales, fotos reales del local/negocio (ej. la foto de fondo del hero) o ilustraciones SVG propias.
- Hero con foto de fondo: overlay oscuro + texto claro (`--paper`). El azul de `--accent` tiene poca luminosidad propia y no contrasta bien sobre fondos oscuros — para usarlo ahí (ej. acentos, subrayados), aclararlo mezclándolo con blanco. Verificar siempre el contraste real contra la imagen (no asumirlo), sobre todo en las zonas más claras de la foto.

## Mobile primero
- Gran parte del tráfico llega por un link abierto en el teléfono.
- El CTA principal debe verse en la primera pantalla del móvil.
- Objetivos táctiles ≥ 44px. Nada de hover como única forma de ver contenido.
- Sin scroll horizontal del body (solo carruseles con overflow propio).
- Probar siempre a 360–390px de ancho además de escritorio.
- Animaciones: fluidas, con `prefers-reduced-motion` respetado, sin bloquear el scroll.

## Técnica
- Estático, sin dependencias ni build. No agregar frameworks sin motivo claro.
- Todo el contenido editable vive en `js/content.js`; no hardcodear textos en `main.js`.
- `*texto*` en el contenido = subrayado tipo fibrón.
- Performance: nada de vídeos autoplay pesados; imágenes optimizadas y `loading="lazy"` (excepto la foto de fondo del hero, que va sin lazy por estar en la primera pantalla).

## Secciones (orden)
Hero · Problema · Antes/después · Servicios · Checklist · Cómo trabajo (tramo azul) · Proyectos · Por qué yo · Paquetes · Partners (`#partners`, enlace compartible) · CTA final

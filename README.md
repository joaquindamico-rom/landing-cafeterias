# Landing — Diseño para abrir cafeterías

Landing one-page de Joaquín D'Amico: diseño gráfico para quienes están por abrir una cafetería, coffee shop, bakery o wine bar (Valencia).

Web estática: HTML + CSS + JavaScript sin dependencias ni build. Se abre `index.html` y funciona.

## Estructura

```
index.html            → <head> (SEO, Open Graph), contenedores y carga de scripts
css/styles.css        → estilos. Colores y tipografías en :root (arriba de todo)
js/content.js         → CONFIG (contacto) + CONTENT (todos los textos, precios, proyectos)
js/illustrations.js   → ilustraciones SVG (antes/después y piezas de servicios)
js/main.js            → render de secciones + interacciones y animaciones
img/                  → imágenes reales (proyectos, antes/después, og.jpg)
CLAUDE.md             → criterios del proyecto para trabajar con Claude
```

## Editar lo más habitual

| Quiero cambiar…                     | Dónde |
|-------------------------------------|-------|
| Email, WhatsApp, Instagram, nombre  | `js/content.js` → `CONFIG` |
| Cualquier texto                     | `js/content.js` → `CONTENT.es` |
| Palabras subrayadas con fibrón      | En el texto, entre asteriscos: `*así*` |
| Precios y paquetes                  | `CONTENT.es.packages.items` |
| Proyectos                           | `CONTENT.es.projects.items` → `cover`, `hover`, `images`, `desc` |
| Fotos del antes / después           | `CONTENT.es.beforeAfter.beforeImg` / `afterImg` |
| Foto para un servicio               | 4º valor de cada fila en `CONTENT.es.services.items` |
| Color acento                        | `css/styles.css` → `--accent` |
| Ítems de la checklist               | `CONTENT.es.checklist.cats` |

Imágenes: subilas a `img/` y referencialas con ruta relativa, por ejemplo `"img/proyectos/proyecto-01-cover.jpg"`. Recomendado: JPG/WebP de ~1600px de ancho, < 300 KB.

## Inglés

Duplicá `CONTENT.es` como `CONTENT.en` en `js/content.js` y traducilo. El selector ES / EN del footer se activa solo.

## Ver en local

Abrí `index.html` en el navegador, o levantá un servidor simple:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Publicar

**GitHub Pages** (gratis): Settings → Pages → Source: *Deploy from a branch* → `main` / `root`. Queda en `https://TUUSUARIO.github.io/NOMBRE-REPO/`. Se puede conectar un dominio propio.

También funciona directo en Netlify o Vercel (importar repo, sin build command).

## Antes de lanzar

- [ ] Reemplazar datos de `CONFIG` (email, WhatsApp, Instagram, `siteUrl`)
- [ ] Dominio real en `canonical` y `og:url` de `index.html`
- [ ] Crear `img/og.jpg` (1200×630) para la vista previa al compartir el link
- [ ] Subir imágenes reales de proyectos
- [ ] Revisar precios
- [ ] Probar en un móvil real (iPhone y Android) y en escritorio

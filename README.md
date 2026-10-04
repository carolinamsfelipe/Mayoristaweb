# Mayorista a tu Casa — web de pedidos

Esta es la web pública de pedidos de Mayorista a tu Casa. Cada cambio que se guarda acá se publica solo en la web en 1 o 2 minutos.

**Importante:** este repositorio es solo para la web pública. No subas costos, márgenes, planillas internas ni datos de clientes.

## Cómo editar algo

1. Entrá al archivo que querés cambiar (ver la tabla de abajo).
2. Tocá el lápiz ✏️ (arriba a la derecha del archivo).
3. Hacé el cambio.
4. Tocá **Commit changes…**, escribí en una línea qué cambiaste (por ejemplo: "Precio del aceite Natura") y confirmá con **Commit changes**.
5. Esperá 1 o 2 minutos y recargá la web para verlo.

## Qué se cambia en cada archivo

| Quiero cambiar… | Archivo |
|---|---|
| WhatsApp, zonas y costo de envío, días y horarios, medios de pago | `js/config.js` |
| Precios, productos y los 6 combos del catálogo | `js/datos.js` |
| Nombres de productos, "Varias opciones", notas y el combo de $200.000 | `js/ajustes.js` |
| Qué imagen lleva cada producto o una foto propia | `js/imagenes.js` (y la foto en `img/fotos/`) |
| Textos fijos (títulos, "Cómo comprar", pie) | `index.html` |
| Colores y diseño | `css/estilos.css` |
| Funcionamiento del armador, carrito y WhatsApp | `js/app.js` — **no tocar** sin consultar |

Más detalle de cada archivo en `LEEME.txt`.

## Cuidados para no romper la web

- Cambiá solo lo que está **entre comillas** o los **números**. Respetá las comas, comillas y llaves `{ }` como están. Si falta una coma o una comilla, la web entera deja de mostrarse.
- Los precios se escriben **sin punto ni signo $**: `2380`, no `$2.380`.
- Los precios de `datos.js` ya son los finales: la web **no** suma el 10% ni redondea.
- Los combos suman exacto su precio con los productos que tienen adentro. Si cambiás un precio que está en un combo, el total del combo cambia: avisale a AdminYA para reajustarlo.
- Un cambio por vez, con una descripción clara en el commit.

## Si algo se rompió

1. Entrá a Cloudflare → **Workers & Pages** → el proyecto de la web → **Deployments**.
2. En la versión anterior que funcionaba, tocá los tres puntos `…` → **Rollback to this deployment**. La web vuelve a esa versión en segundos.
3. Después corregí el archivo en GitHub (el historial de cada archivo está en **History**).

## Fotos de productos

1. Entrá a la carpeta `img/fotos/` y tocá **Add file → Upload files**. Cuadrada, JPG o WEBP, de unos 300 × 300 px, con el código del producto como nombre: `M72.jpg`.
2. En `js/imagenes.js`, dentro de `fotos`, agregá la línea con el código: `"M72": "img/fotos/M72.jpg",`
3. Usá fotos propias o que el proveedor o la marca autoricen.

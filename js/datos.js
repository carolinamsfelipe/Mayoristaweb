/* Catálogo público de Mayorista a tu Casa.
   Para actualizar: reemplazá todo lo que está después de 'window.CATALOGO =' por el contenido completo
   del nuevo datos_publicos_web.json (mismo formato) y guardá. No hace falta tocar nada más. */
window.CATALOGO = {
 "brand": {
  "name": "Mayorista a tu Casa",
  "colors": {
   "primary": "#153F60",
   "accent": "#F57C1F"
  }
 },
 "currency": "ARS",
 "priceSourceDate": "2026-09-29",
 "briefCreatedDate": "2026-09-30",
 "pricesAreFinal": true,
 "minimumMerchandiseOrderARS": 200000,
 "whatsappNumber": null,
 "deliveryZones": null,
 "deliveryFeeARS": null,
 "orderStatus": "request_pending_confirmation",
 "notes": [
  "Los precios finales ya incluyen el recargo comercial. No volver a aplicar porcentajes.",
  "Los pedidos y el stock requieren confirmación humana. No se incluyen existencias verificadas.",
  "Las cantidades de las plantillas son unidades de venta o paquetes según el nombre, no cajas mayoristas.",
  "Los productos con orderMode inquiry deben poder consultarse sin integrar el subtotal exacto.",
  "El costo de entrega se confirma por separado; un valor nulo no significa envío gratis."
 ],
 "products": [
  {
   "id": "M2",
   "name": "Manteca x100 g",
   "section": "Almacén",
   "category": "Mantecas y grasas",
   "unit": "un.",
   "priceARS": 1240,
   "orderMode": "inquiry",
   "confirmationReason": "Presentación o unidad de venta por confirmar.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M3",
   "name": "Manteca x200 g",
   "section": "Almacén",
   "category": "Mantecas y grasas",
   "unit": "un.",
   "priceARS": 2480,
   "orderMode": "inquiry",
   "confirmationReason": "Presentación o unidad de venta por confirmar.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M4",
   "name": "Grasa Esani vaca",
   "section": "Almacén",
   "category": "Mantecas y grasas",
   "unit": "un.",
   "priceARS": 2740,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M5",
   "name": "Grasa Esani cerdo",
   "section": "Almacén",
   "category": "Mantecas y grasas",
   "unit": "un.",
   "priceARS": 3130,
   "orderMode": "inquiry",
   "confirmationReason": "Presentación o unidad de venta por confirmar.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M6",
   "name": "Verdes 000 x2kg",
   "section": "Almacén",
   "category": "Aceitunas y conservas",
   "unit": "un.",
   "priceARS": 24200,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M7",
   "name": "Verdes descarozadas x2kg",
   "section": "Almacén",
   "category": "Aceitunas y conservas",
   "unit": "un.",
   "priceARS": 22000,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M8",
   "name": "Verdes rellenas x1kg (aceite)",
   "section": "Almacén",
   "category": "Aceitunas y conservas",
   "unit": "un.",
   "priceARS": 22000,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M9",
   "name": "Negras x2kg en aceite",
   "section": "Almacén",
   "category": "Aceitunas y conservas",
   "unit": "un.",
   "priceARS": 24200,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M10",
   "name": "Ajies x1kg",
   "section": "Almacén",
   "category": "Aceitunas y conservas",
   "unit": "un.",
   "priceARS": 18700,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M11",
   "name": "Picles x2kg",
   "section": "Almacén",
   "category": "Aceitunas y conservas",
   "unit": "un.",
   "priceARS": 16500,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M12",
   "name": "Anchoas x60 sobres",
   "section": "Almacén",
   "category": "Aceitunas y conservas",
   "unit": "un.",
   "priceARS": 40700,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M13",
   "name": "Pepinillos x1kg",
   "section": "Almacén",
   "category": "Aceitunas y conservas",
   "unit": "un.",
   "priceARS": 16500,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M14",
   "name": "Verdes 0 x5kg",
   "section": "Almacén",
   "category": "Aceitunas y conservas",
   "unit": "un.",
   "priceARS": 31900,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M15",
   "name": "Verdes descarozadas x4kg",
   "section": "Almacén",
   "category": "Aceitunas y conservas",
   "unit": "un.",
   "priceARS": 41800,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M16",
   "name": "Verdes 0 x2kg",
   "section": "Almacén",
   "category": "Aceitunas y conservas",
   "unit": "un.",
   "priceARS": 16500,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M17",
   "name": "Verdes 00 x2k",
   "section": "Almacén",
   "category": "Aceitunas y conservas",
   "unit": "un.",
   "priceARS": 22000,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M18",
   "name": "Zwift / Pate y picadillo",
   "section": "Almacén",
   "category": "Varios almacén",
   "unit": "un.",
   "priceARS": 1090,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M19",
   "name": "Azúcar Gury x1 kg",
   "section": "Almacén",
   "category": "Varios almacén",
   "unit": "un.",
   "priceARS": 1140,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M20",
   "name": "Fideos Luquetti spaghetti / tallarín",
   "section": "Almacén",
   "category": "Fideos",
   "unit": "un.",
   "priceARS": 1250,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M21",
   "name": "Fideos Luquetti guiseros",
   "section": "Almacén",
   "category": "Fideos",
   "unit": "un.",
   "priceARS": 1250,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M22",
   "name": "Fideos Sol Pampeano spaghetti / tallarín",
   "section": "Almacén",
   "category": "Fideos",
   "unit": "un.",
   "priceARS": 900,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M23",
   "name": "Fideos Sol Pampeano guiso / sopa",
   "section": "Almacén",
   "category": "Fideos",
   "unit": "un.",
   "priceARS": 900,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M24",
   "name": "Arroz Ala x1 kg",
   "section": "Almacén",
   "category": "Arroz",
   "unit": "un.",
   "priceARS": 1380,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M25",
   "name": "Arroz Ala x500 g",
   "section": "Almacén",
   "category": "Arroz",
   "unit": "un.",
   "priceARS": 730,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M26",
   "name": "Arroz parboil Luquetti x500 g",
   "section": "Almacén",
   "category": "Arroz",
   "unit": "un.",
   "priceARS": 1060,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M27",
   "name": "Arroz 0000 (varias marcas)",
   "section": "Almacén",
   "category": "Arroz",
   "unit": "un.",
   "priceARS": 990,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M28",
   "name": "Maiz Pisingallo Tobogan",
   "section": "Almacén",
   "category": "Varios almacén",
   "unit": "un.",
   "priceARS": 370,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M29",
   "name": "Nesquik x180 g",
   "section": "Almacén",
   "category": "Varios almacén",
   "unit": "un.",
   "priceARS": 2010,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M30",
   "name": "Toddy x180",
   "section": "Almacén",
   "category": "Varios almacén",
   "unit": "un.",
   "priceARS": 1730,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M31",
   "name": "Tomate perita Arcor",
   "section": "Almacén",
   "category": "Conservas y tomates",
   "unit": "un.",
   "priceARS": 1140,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M32",
   "name": "Tomate triturado Francisco x520 g",
   "section": "Almacén",
   "category": "Conservas y tomates",
   "unit": "un.",
   "priceARS": 1590,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M33",
   "name": "Puré de tomate Huerta x520 g",
   "section": "Almacén",
   "category": "Conservas y tomates",
   "unit": "un.",
   "priceARS": 880,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M34",
   "name": "Puré de tomate Molto",
   "section": "Almacén",
   "category": "Conservas y tomates",
   "unit": "un.",
   "priceARS": 770,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M35",
   "name": "Puré de tomate Marolio",
   "section": "Almacén",
   "category": "Conservas y tomates",
   "unit": "un.",
   "priceARS": 740,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M36",
   "name": "Choclo en granos Inca",
   "section": "Almacén",
   "category": "Conservas y tomates",
   "unit": "un.",
   "priceARS": 1580,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M37",
   "name": "Arvejas Sabores del Valle (brick)",
   "section": "Almacén",
   "category": "Conservas y tomates",
   "unit": "un.",
   "priceARS": 390,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M38",
   "name": "Salsa para pizza Knorr",
   "section": "Almacén",
   "category": "Conservas y tomates",
   "unit": "un.",
   "priceARS": 1310,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M39",
   "name": "Duraznos en almíbar (lata)",
   "section": "Almacén",
   "category": "Conservas y tomates",
   "unit": "un.",
   "priceARS": 2380,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M40",
   "name": "Atún La Campagnola en lomo (aceite o natural)",
   "section": "Almacén",
   "category": "Atunes",
   "unit": "un.",
   "priceARS": 5300,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M41",
   "name": "Atún Cumaná en lomo",
   "section": "Almacén",
   "category": "Atunes",
   "unit": "un.",
   "priceARS": 2670,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M42",
   "name": "Atún Cumaná desmenuzado (aceite o natural)",
   "section": "Almacén",
   "category": "Atunes",
   "unit": "un.",
   "priceARS": 1320,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M43",
   "name": "Aceite de girasol x900 ml (Prados, Grisol y otras)",
   "section": "Almacén",
   "category": "Aceites y vinagre",
   "unit": "un.",
   "priceARS": 2300,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M44",
   "name": "Aceite de girasol x1,5 L",
   "section": "Almacén",
   "category": "Aceites y vinagre",
   "unit": "un.",
   "priceARS": 3960,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M45",
   "name": "Aceite Natura x1,5 L",
   "section": "Almacén",
   "category": "Aceites y vinagre",
   "unit": "un.",
   "priceARS": 6660,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M46",
   "name": "Aceite Cañuelas x900 ml",
   "section": "Almacén",
   "category": "Aceites y vinagre",
   "unit": "un.",
   "priceARS": 3850,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M47",
   "name": "Aceite Cañuelas x1,5 L",
   "section": "Almacén",
   "category": "Aceites y vinagre",
   "unit": "un.",
   "priceARS": 6140,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M48",
   "name": "Vinagre de alcohol Silva",
   "section": "Almacén",
   "category": "Aceites y vinagre",
   "unit": "un.",
   "priceARS": 1020,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M49",
   "name": "Caldos Knorr x2",
   "section": "Almacén",
   "category": "Caldos",
   "unit": "un.",
   "priceARS": 530,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M50",
   "name": "Caldos Knorr x12",
   "section": "Almacén",
   "category": "Caldos",
   "unit": "un.",
   "priceARS": 2310,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M51",
   "name": "Harina Tassara 000 x1 kg",
   "section": "Almacén",
   "category": "Harina",
   "unit": "un.",
   "priceARS": 800,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M52",
   "name": "Harina Morixe 000 x1 kg",
   "section": "Almacén",
   "category": "Harina",
   "unit": "un.",
   "priceARS": 850,
   "orderMode": "inquiry",
   "confirmationReason": "Presentación o unidad de venta por confirmar.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M53",
   "name": "Agua mineral x2 litros",
   "section": "Almacén",
   "category": "Varios almacén",
   "unit": "un.",
   "priceARS": 550,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M54",
   "name": "Agua mineral x1,5 L",
   "section": "Almacén",
   "category": "Varios almacén",
   "unit": "un.",
   "priceARS": 490,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M55",
   "name": "Sal fina Doña Sal x500 g",
   "section": "Almacén",
   "category": "Sal",
   "unit": "un.",
   "priceARS": 520,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M56",
   "name": "Celusal de 500 paquete",
   "section": "Almacén",
   "category": "Sal",
   "unit": "un.",
   "priceARS": 1080,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M57",
   "name": "Sal gruesa Doña Sal x1 kg",
   "section": "Almacén",
   "category": "Sal",
   "unit": "un.",
   "priceARS": 770,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M58",
   "name": "Pan rallado Preferido x500 g",
   "section": "Almacén",
   "category": "Pan rallado",
   "unit": "un.",
   "priceARS": 1610,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M59",
   "name": "Rosa Blanca de 500 pan / rebozador",
   "section": "Almacén",
   "category": "Pan rallado",
   "unit": "un.",
   "priceARS": 1080,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M60",
   "name": "Rosa Blanca de kilo pan / rebozador",
   "section": "Almacén",
   "category": "Pan rallado",
   "unit": "un.",
   "priceARS": 2150,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M61",
   "name": "Mayonesa Natura x500 g",
   "section": "Almacén",
   "category": "Mayonesas",
   "unit": "un.",
   "priceARS": 3150,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M62",
   "name": "Mayonesa Natura x250 g",
   "section": "Almacén",
   "category": "Mayonesas",
   "unit": "un.",
   "priceARS": 1650,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M63",
   "name": "Mayonesa Hellmann's x250 g",
   "section": "Almacén",
   "category": "Mayonesas",
   "unit": "un.",
   "priceARS": 1270,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M64",
   "name": "Mayonesa Natura x125 g",
   "section": "Almacén",
   "category": "Mayonesas",
   "unit": "un.",
   "priceARS": 730,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M65",
   "name": "Mayonesa Hellmann's x125 g",
   "section": "Almacén",
   "category": "Mayonesas",
   "unit": "un.",
   "priceARS": 650,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M66",
   "name": "Mostaza Savora x250 g",
   "section": "Almacén",
   "category": "Mayonesas",
   "unit": "un.",
   "priceARS": 1370,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M67",
   "name": "Mayonesa Natura x1 kg",
   "section": "Almacén",
   "category": "Mayonesas",
   "unit": "un.",
   "priceARS": 5940,
   "orderMode": "inquiry",
   "confirmationReason": "Presentación o unidad de venta por confirmar.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M68",
   "name": "AA x2",
   "section": "Almacén",
   "category": "Pilas",
   "unit": "un.",
   "priceARS": 1170,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M69",
   "name": "AAA x2",
   "section": "Almacén",
   "category": "Pilas",
   "unit": "un.",
   "priceARS": 1170,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M70",
   "name": "Nobleza Gaucha por 500",
   "section": "Desayuno y merienda",
   "category": "Yerbas",
   "unit": "un.",
   "priceARS": 1650,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M71",
   "name": "Andrecito x500",
   "section": "Desayuno y merienda",
   "category": "Yerbas",
   "unit": "un.",
   "priceARS": 1570,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M72",
   "name": "Yerba Playadito x500 g",
   "section": "Desayuno y merienda",
   "category": "Yerbas",
   "unit": "un.",
   "priceARS": 2400,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M73",
   "name": "Yerba Playadito x1 kg",
   "section": "Desayuno y merienda",
   "category": "Yerbas",
   "unit": "un.",
   "priceARS": 4510,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M74",
   "name": "Amanda de 500",
   "section": "Desayuno y merienda",
   "category": "Yerbas",
   "unit": "un.",
   "priceARS": 1630,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M75",
   "name": "Union de 500",
   "section": "Desayuno y merienda",
   "category": "Yerbas",
   "unit": "un.",
   "priceARS": 2020,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M76",
   "name": "Rosamonte suave amarillo de 500",
   "section": "Desayuno y merienda",
   "category": "Yerbas",
   "unit": "un.",
   "priceARS": 1960,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M77",
   "name": "Rosamonte roja plus de 500",
   "section": "Desayuno y merienda",
   "category": "Yerbas",
   "unit": "un.",
   "priceARS": 1760,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M78",
   "name": "Mañanita de 500",
   "section": "Desayuno y merienda",
   "category": "Yerbas",
   "unit": "un.",
   "priceARS": 2020,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M79",
   "name": "Taragui de 500",
   "section": "Desayuno y merienda",
   "category": "Yerbas",
   "unit": "un.",
   "priceARS": 2020,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M80",
   "name": "Cachamate de 500 rosa / amarillo",
   "section": "Desayuno y merienda",
   "category": "Yerbas",
   "unit": "un.",
   "priceARS": 1710,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M81",
   "name": "CBSE de 500 limon y naranja / guarana",
   "section": "Desayuno y merienda",
   "category": "Yerbas",
   "unit": "un.",
   "priceARS": 1850,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M82",
   "name": "CBSE de 500 tradicional",
   "section": "Desayuno y merienda",
   "category": "Yerbas",
   "unit": "un.",
   "priceARS": 1850,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M83",
   "name": "Tranquera de 500",
   "section": "Desayuno y merienda",
   "category": "Yerbas",
   "unit": "un.",
   "priceARS": 1650,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M84",
   "name": "Cumbrecita de 500",
   "section": "Desayuno y merienda",
   "category": "Yerbas",
   "unit": "un.",
   "priceARS": 1570,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M85",
   "name": "Cruz Malta de 500",
   "section": "Desayuno y merienda",
   "category": "Yerbas",
   "unit": "un.",
   "priceARS": 1710,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M86",
   "name": "Sello Negro x500",
   "section": "Desayuno y merienda",
   "category": "Yerbas",
   "unit": "un.",
   "priceARS": 750,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M87",
   "name": "Café Dolca x170 g",
   "section": "Desayuno y merienda",
   "category": "Cafés",
   "unit": "un.",
   "priceARS": 7590,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M88",
   "name": "Arlistan por 50",
   "section": "Desayuno y merienda",
   "category": "Cafés",
   "unit": "un.",
   "priceARS": 2730,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M89",
   "name": "Arlistan por 100",
   "section": "Desayuno y merienda",
   "category": "Cafés",
   "unit": "un.",
   "priceARS": 4620,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M90",
   "name": "Arlistan por 170",
   "section": "Desayuno y merienda",
   "category": "Cafés",
   "unit": "un.",
   "priceARS": 7480,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M91",
   "name": "Morenita sachets x20",
   "section": "Desayuno y merienda",
   "category": "Cafés",
   "unit": "un.",
   "priceARS": 4590,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M92",
   "name": "Té Taragüí x50 saquitos",
   "section": "Desayuno y merienda",
   "category": "Té y mate cocido",
   "unit": "un.",
   "priceARS": 1800,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M93",
   "name": "Te Taragui de 25",
   "section": "Desayuno y merienda",
   "category": "Té y mate cocido",
   "unit": "un.",
   "priceARS": 980,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M94",
   "name": "Te Green Hills de 25",
   "section": "Desayuno y merienda",
   "category": "Té y mate cocido",
   "unit": "un.",
   "priceARS": 1580,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M95",
   "name": "Te Crysf de 25",
   "section": "Desayuno y merienda",
   "category": "Té y mate cocido",
   "unit": "un.",
   "priceARS": 760,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M96",
   "name": "Te Crysf de 50",
   "section": "Desayuno y merienda",
   "category": "Té y mate cocido",
   "unit": "un.",
   "priceARS": 1410,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M97",
   "name": "Mate cocido Taragui x25",
   "section": "Desayuno y merienda",
   "category": "Té y mate cocido",
   "unit": "un.",
   "priceARS": 1160,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M98",
   "name": "Mate cocido Union x25",
   "section": "Desayuno y merienda",
   "category": "Té y mate cocido",
   "unit": "un.",
   "priceARS": 1160,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M99",
   "name": "Mate cocido Union x50",
   "section": "Desayuno y merienda",
   "category": "Té y mate cocido",
   "unit": "un.",
   "priceARS": 2310,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M100",
   "name": "Mate cocido Taragüí x50 saquitos",
   "section": "Desayuno y merienda",
   "category": "Té y mate cocido",
   "unit": "un.",
   "priceARS": 2310,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M101",
   "name": "B/C Durazno Damasco Ciruela Naranja",
   "section": "Desayuno y merienda",
   "category": "Dulces",
   "unit": "un.",
   "priceARS": 2380,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M102",
   "name": "B/C Frutilla F.Bosque Arandanos",
   "section": "Desayuno y merienda",
   "category": "Dulces",
   "unit": "un.",
   "priceARS": 2690,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M103",
   "name": "Bizcochuelo vainilla o frutal",
   "section": "Desayuno y merienda",
   "category": "Dulces",
   "unit": "un.",
   "priceARS": 1710,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M104",
   "name": "Bizcochuelo chocolate chips D.de leche",
   "section": "Desayuno y merienda",
   "category": "Dulces",
   "unit": "un.",
   "priceARS": 2120,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M105",
   "name": "Brownie",
   "section": "Desayuno y merienda",
   "category": "Dulces",
   "unit": "un.",
   "priceARS": 2250,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M106",
   "name": "Bizcochuelo Exquisita vainilla",
   "section": "Desayuno y merienda",
   "category": "Dulces",
   "unit": "un.",
   "priceARS": 2310,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M107",
   "name": "Dulce de leche \"San Sebastian\" x400",
   "section": "Desayuno y merienda",
   "category": "Dulce de leche",
   "unit": "un.",
   "priceARS": 1500,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M108",
   "name": "Dulce de leche Tanto x400 g",
   "section": "Desayuno y merienda",
   "category": "Dulce de leche",
   "unit": "un.",
   "priceARS": 1720,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M109",
   "name": "Tanto x250",
   "section": "Desayuno y merienda",
   "category": "Dulce de leche",
   "unit": "un.",
   "priceARS": 1140,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M110",
   "name": "Guaymallen simple",
   "section": "Desayuno y merienda",
   "category": "Alfajores",
   "unit": "un.",
   "priceARS": 290,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M111",
   "name": "Guaymallen triple",
   "section": "Desayuno y merienda",
   "category": "Alfajores",
   "unit": "un.",
   "priceARS": 480,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M112",
   "name": "Rasta simple",
   "section": "Desayuno y merienda",
   "category": "Alfajores",
   "unit": "un.",
   "priceARS": 1140,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M113",
   "name": "Turron Misky (caja madre)",
   "section": "Desayuno y merienda",
   "category": "Alfajores",
   "unit": "un.",
   "priceARS": 220,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M114",
   "name": "Azúcar Ledesma x1 kg",
   "section": "Desayuno y merienda",
   "category": "Azúcar y endulzantes",
   "unit": "un.",
   "priceARS": 1540,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M115",
   "name": "Hileret de 250 azucar light",
   "section": "Desayuno y merienda",
   "category": "Azúcar y endulzantes",
   "unit": "un.",
   "priceARS": 1360,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M116",
   "name": "Hileret de 500 azucar light",
   "section": "Desayuno y merienda",
   "category": "Azúcar y endulzantes",
   "unit": "un.",
   "priceARS": 2040,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M117",
   "name": "Hileret liquido de 500 forte y azul",
   "section": "Desayuno y merienda",
   "category": "Azúcar y endulzantes",
   "unit": "un.",
   "priceARS": 3520,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M118",
   "name": "Hileret liquido de 250 forte y azul",
   "section": "Desayuno y merienda",
   "category": "Azúcar y endulzantes",
   "unit": "un.",
   "priceARS": 1900,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M119",
   "name": "Leiva sandwich x3",
   "section": "Desayuno y merienda",
   "category": "Galletitas",
   "unit": "un.",
   "priceARS": 1040,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M120",
   "name": "Galletitas Media Tarde x3",
   "section": "Desayuno y merienda",
   "category": "Galletitas",
   "unit": "un.",
   "priceARS": 1570,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M121",
   "name": "Pepas Toconato x400 gramos",
   "section": "Desayuno y merienda",
   "category": "Galletitas",
   "unit": "un.",
   "priceARS": 1270,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M122",
   "name": "Cerealitas",
   "section": "Desayuno y merienda",
   "category": "Galletitas",
   "unit": "un.",
   "priceARS": 1540,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M123",
   "name": "Galletitas surtidas Bagley",
   "section": "Desayuno y merienda",
   "category": "Galletitas",
   "unit": "un.",
   "priceARS": 2880,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M124",
   "name": "Surtido diversion",
   "section": "Desayuno y merienda",
   "category": "Galletitas",
   "unit": "un.",
   "priceARS": 2480,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M125",
   "name": "Oblea Hip Hop",
   "section": "Desayuno y merienda",
   "category": "Galletitas",
   "unit": "un.",
   "priceARS": 390,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M126",
   "name": "Traviatas",
   "section": "Desayuno y merienda",
   "category": "Galletitas",
   "unit": "un.",
   "priceARS": 1830,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M127",
   "name": "Bizcochos Satur",
   "section": "Desayuno y merienda",
   "category": "Galletitas",
   "unit": "un.",
   "priceARS": 1140,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M128",
   "name": "Pepitos",
   "section": "Desayuno y merienda",
   "category": "Galletitas",
   "unit": "un.",
   "priceARS": 1570,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M129",
   "name": "Chocolina x250",
   "section": "Desayuno y merienda",
   "category": "Galletitas",
   "unit": "un.",
   "priceARS": 2150,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M130",
   "name": "Providencia x3",
   "section": "Desayuno y merienda",
   "category": "Galletitas",
   "unit": "un.",
   "priceARS": 1360,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M131",
   "name": "Providencia x5",
   "section": "Desayuno y merienda",
   "category": "Galletitas",
   "unit": "un.",
   "priceARS": 2150,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M132",
   "name": "Vocacion x3",
   "section": "Desayuno y merienda",
   "category": "Galletitas",
   "unit": "un.",
   "priceARS": 2230,
   "orderMode": "inquiry",
   "confirmationReason": "Presentación o unidad de venta por confirmar.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M133",
   "name": "Dale Maria x3",
   "section": "Desayuno y merienda",
   "category": "Galletitas",
   "unit": "un.",
   "priceARS": 1930,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M134",
   "name": "Obleas Zupay (pack x3)",
   "section": "Desayuno y merienda",
   "category": "Galletitas",
   "unit": "un.",
   "priceARS": 800,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M135",
   "name": "Paseo con sal",
   "section": "Desayuno y merienda",
   "category": "Galletitas",
   "unit": "un.",
   "priceARS": 1400,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M136",
   "name": "Paseo sin sal",
   "section": "Desayuno y merienda",
   "category": "Galletitas",
   "unit": "un.",
   "priceARS": 1400,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M137",
   "name": "Merm. PVC durazno damasco ciruela naranja",
   "section": "Desayuno y merienda",
   "category": "Mermeladas Emeth",
   "unit": "un.",
   "priceARS": 970,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M138",
   "name": "PVC frutilla",
   "section": "Desayuno y merienda",
   "category": "Mermeladas Emeth",
   "unit": "un.",
   "priceARS": 1070,
   "orderMode": "inquiry",
   "confirmationReason": "Presentación o unidad de venta por confirmar.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M139",
   "name": "PVC frambuesa",
   "section": "Desayuno y merienda",
   "category": "Mermeladas Emeth",
   "unit": "un.",
   "priceARS": 1400,
   "orderMode": "inquiry",
   "confirmationReason": "Presentación o unidad de venta por confirmar.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M140",
   "name": "Merm. PVC B/C durazno ciruela naranja",
   "section": "Desayuno y merienda",
   "category": "Mermeladas Emeth",
   "unit": "un.",
   "priceARS": 1030,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M141",
   "name": "PVC B/C frutilla",
   "section": "Desayuno y merienda",
   "category": "Mermeladas Emeth",
   "unit": "un.",
   "priceARS": 1100,
   "orderMode": "inquiry",
   "confirmationReason": "Presentación o unidad de venta por confirmar.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M142",
   "name": "PVC B/C frambuesa",
   "section": "Desayuno y merienda",
   "category": "Mermeladas Emeth",
   "unit": "un.",
   "priceARS": 1490,
   "orderMode": "inquiry",
   "confirmationReason": "Presentación o unidad de venta por confirmar.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M143",
   "name": "Mermelada Emeth en frasco",
   "section": "Desayuno y merienda",
   "category": "Mermeladas Emeth",
   "unit": "un.",
   "priceARS": 1930,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M144",
   "name": "Vidrio frutilla F.Bosque arandanos",
   "section": "Desayuno y merienda",
   "category": "Mermeladas Emeth",
   "unit": "un.",
   "priceARS": 2370,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M145",
   "name": "Yogur Dahi (varios sabores)",
   "section": "Desayuno y merienda",
   "category": "Yogures",
   "unit": "un.",
   "priceARS": 1100,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M146",
   "name": "Punta del Agua",
   "section": "Fiambrería y quesos",
   "category": "Quesos - Cremosos",
   "unit": "kg",
   "priceARS": 10400,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M147",
   "name": "D-70 / varios",
   "section": "Fiambrería y quesos",
   "category": "Quesos - Cremosos",
   "unit": "kg",
   "priceARS": 7700,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M148",
   "name": "Popular",
   "section": "Fiambrería y quesos",
   "category": "Quesos - Cremosos",
   "unit": "kg",
   "priceARS": 6880,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M149",
   "name": "Punta del Agua",
   "section": "Fiambrería y quesos",
   "category": "Quesos - Barra",
   "unit": "kg",
   "priceARS": 12320,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M150",
   "name": "Siku / varios",
   "section": "Fiambrería y quesos",
   "category": "Quesos - Barra",
   "unit": "kg",
   "priceARS": 10010,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M151",
   "name": "Barraza cilindro",
   "section": "Fiambrería y quesos",
   "category": "Quesos - Muzzarella",
   "unit": "kg",
   "priceARS": 12650,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M152",
   "name": "Dom Tim",
   "section": "Fiambrería y quesos",
   "category": "Quesos - Muzzarella",
   "unit": "kg",
   "priceARS": 7480,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M153",
   "name": "Quesera",
   "section": "Fiambrería y quesos",
   "category": "Quesos - Roquefort",
   "unit": "kg",
   "priceARS": 15840,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M154",
   "name": "Lucrecia / Luisa / Emperador",
   "section": "Fiambrería y quesos",
   "category": "Quesos - Roquefort",
   "unit": "kg",
   "priceARS": 13200,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M155",
   "name": "El Juan sin sal",
   "section": "Fiambrería y quesos",
   "category": "Quesos - Por salud",
   "unit": "kg",
   "priceARS": 12430,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M156",
   "name": "Regiano Melincue",
   "section": "Fiambrería y quesos",
   "category": "Quesos - Duros",
   "unit": "kg",
   "priceARS": 18150,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M157",
   "name": "Sardo",
   "section": "Fiambrería y quesos",
   "category": "Quesos - Duros",
   "unit": "kg",
   "priceARS": 9020,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M158",
   "name": "Puggio \"Super calidad\"",
   "section": "Fiambrería y quesos",
   "category": "Quesos - Mar del Plata",
   "unit": "kg",
   "priceARS": 18150,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M159",
   "name": "Varios \"oferta\" Mana Luisa",
   "section": "Fiambrería y quesos",
   "category": "Quesos - Mar del Plata",
   "unit": "kg",
   "priceARS": 13640,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M160",
   "name": "Siku",
   "section": "Fiambrería y quesos",
   "category": "Quesos - Ricota",
   "unit": "kg",
   "priceARS": 3850,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M161",
   "name": "Cheddar Serenisima",
   "section": "Fiambrería y quesos",
   "category": "Quesos - Otros",
   "unit": "kg",
   "priceARS": 15840,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M162",
   "name": "Fiambrin Serenisima",
   "section": "Fiambrería y quesos",
   "category": "Quesos - Otros",
   "unit": "kg",
   "priceARS": 15840,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M163",
   "name": "Provoleta Nona Pia",
   "section": "Fiambrería y quesos",
   "category": "Quesos - Otros",
   "unit": "kg",
   "priceARS": 16500,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M164",
   "name": "La Quesera x40",
   "section": "Fiambrería y quesos",
   "category": "Quesos rallados x40gr",
   "unit": "un.",
   "priceARS": 700,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M165",
   "name": "Reggio x40",
   "section": "Fiambrería y quesos",
   "category": "Quesos rallados x40gr",
   "unit": "un.",
   "priceARS": 330,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M166",
   "name": "Serenisima",
   "section": "Fiambrería y quesos",
   "category": "Quesos rallados x40gr",
   "unit": "un.",
   "priceARS": 1580,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M167",
   "name": "Cocido natural Bocatti",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Jamones",
   "unit": "pieza",
   "priceARS": 21450,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por pieza: confirmar presentación y peso antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M168",
   "name": "Cocido natural Montesano",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Jamones",
   "unit": "kg",
   "priceARS": 19800,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M169",
   "name": "Cocido natural \"Don Jorge\" (Gonzalez)",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Jamones",
   "unit": "kg",
   "priceARS": 9900,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M170",
   "name": "Cocido Paladini",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Jamones",
   "unit": "kg",
   "priceARS": 12540,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M171",
   "name": "Cocido La Octava",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Jamones",
   "unit": "kg",
   "priceARS": 12100,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M172",
   "name": "Cocido 214",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Jamones",
   "unit": "kg",
   "priceARS": 14850,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M173",
   "name": "Cocido Gonzalez",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Jamones",
   "unit": "kg",
   "priceARS": 9130,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M174",
   "name": "Cocido pata San Tore",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Jamones",
   "unit": "kg",
   "priceARS": 7540,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M175",
   "name": "Cocido pata Gonzalez",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Jamones",
   "unit": "kg",
   "priceARS": 7540,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M176",
   "name": "Gonzalez",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Paletas",
   "unit": "kg",
   "priceARS": 6600,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M177",
   "name": "Orfebre",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Paletas",
   "unit": "kg",
   "priceARS": 4620,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M178",
   "name": "Parma importado España",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Crudos",
   "unit": "kg",
   "priceARS": 42900,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M179",
   "name": "Sol Naciente",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Crudos",
   "unit": "kg",
   "priceARS": 20680,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M180",
   "name": "Ahumada / salada Gonzalez",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Pancetas",
   "unit": "kg",
   "priceARS": 13200,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M181",
   "name": "Gonzalez redondo",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Lomos",
   "unit": "kg",
   "priceARS": 13970,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M182",
   "name": "Calchaqui",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Milán",
   "unit": "kg",
   "priceARS": 17930,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M183",
   "name": "La Octava",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Milán",
   "unit": "kg",
   "priceARS": 17050,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M184",
   "name": "Cagnoli",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Milán",
   "unit": "kg",
   "priceARS": 16170,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M185",
   "name": "Cuatro Condes",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Milán",
   "unit": "kg",
   "priceARS": 11880,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M186",
   "name": "Leandrin",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Milán",
   "unit": "kg",
   "priceARS": 10670,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M187",
   "name": "Gonzalez",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Milán",
   "unit": "kg",
   "priceARS": 9240,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M188",
   "name": "Salamines (12) Las Calvos",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Salames",
   "unit": "kg",
   "priceARS": 22990,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M189",
   "name": "Longaniza baston Leandrin",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Salames",
   "unit": "kg",
   "priceARS": 13090,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M190",
   "name": "Salamines Torgelon fino grueso colorado",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Salames",
   "unit": "kg",
   "priceARS": 12100,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M191",
   "name": "Baston Condes \"Especial\"",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Salames",
   "unit": "kg",
   "priceARS": 14080,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M192",
   "name": "Lario",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Bondiolas",
   "unit": "kg",
   "priceARS": 20350,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M193",
   "name": "Calchaqui Bocha",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Mortadelas",
   "unit": "kg",
   "priceARS": 9680,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M194",
   "name": "Gonzalez jamon/primavera",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Salchichones",
   "unit": "kg",
   "priceARS": 4950,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M195",
   "name": "La Octava jamon/primavera",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Salchichones",
   "unit": "kg",
   "priceARS": 7680,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M196",
   "name": "Queso de cerdo Losifar",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Salchichones",
   "unit": "kg",
   "priceARS": 6050,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M197",
   "name": "Losifar carne",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Matambre",
   "unit": "kg",
   "priceARS": 12100,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M198",
   "name": "Losifar pollo",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Matambre",
   "unit": "kg",
   "priceARS": 11880,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M199",
   "name": "Salchichas x6 \"oferta\"",
   "section": "Fiambrería y quesos",
   "category": "Fiambres - Salchichas",
   "unit": "un.",
   "priceARS": 1080,
   "orderMode": "inquiry",
   "confirmationReason": "Presentación o unidad de venta por confirmar.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M200",
   "name": "Lata batata / batata con chocolate",
   "section": "Fiambrería y quesos",
   "category": "Dulces de corte",
   "unit": "kg",
   "priceARS": 14300,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M201",
   "name": "Lata membrillo",
   "section": "Fiambrería y quesos",
   "category": "Dulces de corte",
   "unit": "kg",
   "priceARS": 15510,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M202",
   "name": "Cajon batata / batata con chocolate Emeth",
   "section": "Fiambrería y quesos",
   "category": "Dulces de corte",
   "unit": "kg",
   "priceARS": 10670,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M203",
   "name": "Cajon membrillo Emeth",
   "section": "Fiambrería y quesos",
   "category": "Dulces de corte",
   "unit": "kg",
   "priceARS": 13090,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M204",
   "name": "Cavan Serna batata-choc",
   "section": "Fiambrería y quesos",
   "category": "Dulces de corte",
   "unit": "kg",
   "priceARS": 9460,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M205",
   "name": "Cavan Serna membrillo",
   "section": "Fiambrería y quesos",
   "category": "Dulces de corte",
   "unit": "kg",
   "priceARS": 11220,
   "orderMode": "inquiry",
   "confirmationReason": "Venta por peso: confirmar peso y presentación antes de cotizar el total.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M206",
   "name": "Papas x420 tradicional",
   "section": "Snacks",
   "category": "Krachitos",
   "unit": "un.",
   "priceARS": 8750,
   "orderMode": "inquiry",
   "confirmationReason": "Presentación o unidad de venta por confirmar.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M207",
   "name": "Papas x420 americano",
   "section": "Snacks",
   "category": "Krachitos",
   "unit": "un.",
   "priceARS": 8750,
   "orderMode": "inquiry",
   "confirmationReason": "Presentación o unidad de venta por confirmar.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M208",
   "name": "Chizitos x400gs",
   "section": "Snacks",
   "category": "Krachitos",
   "unit": "un.",
   "priceARS": 4400,
   "orderMode": "inquiry",
   "confirmationReason": "Presentación o unidad de venta por confirmar.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M209",
   "name": "Bastonitos x330",
   "section": "Snacks",
   "category": "Krachitos",
   "unit": "un.",
   "priceARS": 4680,
   "orderMode": "inquiry",
   "confirmationReason": "Presentación o unidad de venta por confirmar.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M210",
   "name": "Palitos salados x800",
   "section": "Snacks",
   "category": "Krachitos",
   "unit": "un.",
   "priceARS": 6880,
   "orderMode": "inquiry",
   "confirmationReason": "Presentación o unidad de venta por confirmar.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M211",
   "name": "Mani salados pelados x800 (280gr)",
   "section": "Snacks",
   "category": "Krachitos",
   "unit": "un.",
   "priceARS": 5010,
   "orderMode": "inquiry",
   "confirmationReason": "Presentación o unidad de venta por confirmar.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M212",
   "name": "Mani japones",
   "section": "Snacks",
   "category": "Krachitos",
   "unit": "un.",
   "priceARS": 6990,
   "orderMode": "inquiry",
   "confirmationReason": "Presentación o unidad de venta por confirmar.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M213",
   "name": "Papas tradicional y americanas x430gr",
   "section": "Snacks",
   "category": "Snacks Good Show",
   "unit": "un.",
   "priceARS": 6770,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M214",
   "name": "Papas cheddar x280gr",
   "section": "Snacks",
   "category": "Snacks Good Show",
   "unit": "un.",
   "priceARS": 5670,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M215",
   "name": "Chizitos y bastonitos x287gr",
   "section": "Snacks",
   "category": "Snacks Good Show",
   "unit": "un.",
   "priceARS": 3120,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M216",
   "name": "Palitos salados x500gr",
   "section": "Snacks",
   "category": "Snacks Good Show",
   "unit": "un.",
   "priceARS": 4510,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M217",
   "name": "Mani pelado x500gr",
   "section": "Snacks",
   "category": "Snacks Good Show",
   "unit": "un.",
   "priceARS": 5940,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M218",
   "name": "Papas x63gr (varios sabores)",
   "section": "Snacks",
   "category": "Snacks Good Show",
   "unit": "un.",
   "priceARS": 1270,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M219",
   "name": "Pochoclo",
   "section": "Snacks",
   "category": "Snacks Good Show",
   "unit": "un.",
   "priceARS": 1710,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M220",
   "name": "Mani King x80gr (cebolla-panceta-asado-pimienta)",
   "section": "Snacks",
   "category": "Snacks Good Show",
   "unit": "un.",
   "priceARS": 930,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M221",
   "name": "Mani King x100gr (salado-frito-s/sal)",
   "section": "Snacks",
   "category": "Snacks Good Show",
   "unit": "un.",
   "priceARS": 930,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M222",
   "name": "Valentin lacrado",
   "section": "Bebidas",
   "category": "Vinos",
   "unit": "un.",
   "priceARS": 3250,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M223",
   "name": "Balbo",
   "section": "Bebidas",
   "category": "Vinos",
   "unit": "un.",
   "priceARS": 2530,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M224",
   "name": "Viñas de Alvear",
   "section": "Bebidas",
   "category": "Vinos",
   "unit": "un.",
   "priceARS": 2710,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M225",
   "name": "Patero Santa Filomena x1125",
   "section": "Bebidas",
   "category": "Vinos",
   "unit": "un.",
   "priceARS": 2930,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M226",
   "name": "Norton Cosecha Tardia",
   "section": "Bebidas",
   "category": "Vinos",
   "unit": "un.",
   "priceARS": 4400,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M227",
   "name": "Tang",
   "section": "Bebidas",
   "category": "Jugos",
   "unit": "un.",
   "priceARS": 380,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M228",
   "name": "Clight",
   "section": "Bebidas",
   "category": "Jugos",
   "unit": "un.",
   "priceARS": 370,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M229",
   "name": "Jugo Noel x2 litros (caja madre)",
   "section": "Bebidas",
   "category": "Jugos",
   "unit": "un.",
   "priceARS": 320,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M230",
   "name": "Fernet Branca x450",
   "section": "Bebidas",
   "category": "Aperitivos",
   "unit": "un.",
   "priceARS": 11550,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M231",
   "name": "Fernet Branca x750",
   "section": "Bebidas",
   "category": "Aperitivos",
   "unit": "un.",
   "priceARS": 17330,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M232",
   "name": "Gancia x950",
   "section": "Bebidas",
   "category": "Aperitivos",
   "unit": "un.",
   "priceARS": 6710,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M233",
   "name": "Sky Cosmic",
   "section": "Bebidas",
   "category": "Aperitivos",
   "unit": "un.",
   "priceARS": 9900,
   "orderMode": "inquiry",
   "confirmationReason": "Presentación o unidad de venta por confirmar.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M234",
   "name": "Speed XL",
   "section": "Bebidas",
   "category": "Energizantes",
   "unit": "un.",
   "priceARS": 2200,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M235",
   "name": "Speed chico",
   "section": "Bebidas",
   "category": "Energizantes",
   "unit": "un.",
   "priceARS": 1360,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M236",
   "name": "Monster negro / Mango loco",
   "section": "Bebidas",
   "category": "Energizantes",
   "unit": "un.",
   "priceARS": 2550,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M237",
   "name": "Detergente Magistral x500 ml",
   "section": "Limpieza del hogar",
   "category": "Limpieza - Detergentes",
   "unit": "un.",
   "priceARS": 3170,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M238",
   "name": "Magistral x300",
   "section": "Limpieza del hogar",
   "category": "Limpieza - Detergentes",
   "unit": "un.",
   "priceARS": 2040,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M239",
   "name": "Cif x300 varios",
   "section": "Limpieza del hogar",
   "category": "Limpieza - Detergentes",
   "unit": "un.",
   "priceARS": 1670,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M240",
   "name": "Detergente Cif x500 ml",
   "section": "Limpieza del hogar",
   "category": "Limpieza - Detergentes",
   "unit": "un.",
   "priceARS": 2860,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M241",
   "name": "Detergente Val x750 ml",
   "section": "Limpieza del hogar",
   "category": "Limpieza - Detergentes",
   "unit": "un.",
   "priceARS": 1050,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M242",
   "name": "Limpiador en crema Odex",
   "section": "Limpieza del hogar",
   "category": "Limpieza - Limpiadores",
   "unit": "un.",
   "priceARS": 2200,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M243",
   "name": "Susex",
   "section": "Limpieza del hogar",
   "category": "Limpieza - Rollos",
   "unit": "un.",
   "priceARS": 1810,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M244",
   "name": "Celestial x3",
   "section": "Limpieza del hogar",
   "category": "Limpieza - Rollos",
   "unit": "un.",
   "priceARS": 1250,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M245",
   "name": "Rollo de cocina Sol Mayor x200",
   "section": "Limpieza del hogar",
   "category": "Limpieza - Rollos",
   "unit": "un.",
   "priceARS": 1430,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M246",
   "name": "Jabón en pan Seiseme",
   "section": "Limpieza del hogar",
   "category": "Limpieza - Jabones en pan",
   "unit": "un.",
   "priceARS": 1980,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M247",
   "name": "El Argentino",
   "section": "Limpieza del hogar",
   "category": "Limpieza - Jabones en pan",
   "unit": "un.",
   "priceARS": 870,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M248",
   "name": "Insecticida Raid",
   "section": "Limpieza del hogar",
   "category": "Limpieza - Insecticidas",
   "unit": "un.",
   "priceARS": 6820,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M249",
   "name": "Insecticida Selton",
   "section": "Limpieza del hogar",
   "category": "Limpieza - Insecticidas",
   "unit": "un.",
   "priceARS": 4180,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M250",
   "name": "Alcohol fino Dismar x500 ml",
   "section": "Limpieza del hogar",
   "category": "Varios limpieza",
   "unit": "un.",
   "priceARS": 1820,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M251",
   "name": "Desinfectante Lysoform clásico",
   "section": "Limpieza del hogar",
   "category": "Varios limpieza",
   "unit": "un.",
   "priceARS": 3630,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M252",
   "name": "Desinfectante Lysoform original",
   "section": "Limpieza del hogar",
   "category": "Varios limpieza",
   "unit": "un.",
   "priceARS": 3630,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M253",
   "name": "Skyp x800",
   "section": "Limpieza del hogar",
   "category": "Jabones para ropa",
   "unit": "un.",
   "priceARS": 3060,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M254",
   "name": "Ala x800",
   "section": "Limpieza del hogar",
   "category": "Jabones para ropa",
   "unit": "un.",
   "priceARS": 2860,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M255",
   "name": "Jabon liquido Querubin x800",
   "section": "Limpieza del hogar",
   "category": "Jabones para ropa",
   "unit": "un.",
   "priceARS": 2610,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M256",
   "name": "Gramby x800",
   "section": "Limpieza del hogar",
   "category": "Jabones para ropa",
   "unit": "un.",
   "priceARS": 2290,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M257",
   "name": "Ariel x800",
   "section": "Limpieza del hogar",
   "category": "Jabones para ropa",
   "unit": "un.",
   "priceARS": 2720,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M258",
   "name": "Jabón líquido Ariel x3 L",
   "section": "Limpieza del hogar",
   "category": "Jabones para ropa",
   "unit": "un.",
   "priceARS": 9130,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M259",
   "name": "Gramby x3000",
   "section": "Limpieza del hogar",
   "category": "Jabones para ropa",
   "unit": "un.",
   "priceARS": 6930,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M260",
   "name": "Val x800 liquido matic",
   "section": "Limpieza del hogar",
   "category": "Jabones para ropa",
   "unit": "un.",
   "priceARS": 1380,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M261",
   "name": "Jabón en polvo Zorro x400 g",
   "section": "Limpieza del hogar",
   "category": "Jabones para ropa",
   "unit": "un.",
   "priceARS": 990,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M262",
   "name": "Odex x1 concentrada",
   "section": "Limpieza del hogar",
   "category": "Lavandina y limpiadores de piso",
   "unit": "un.",
   "priceARS": 890,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M263",
   "name": "Lavandina Querubín x2 L doble rendimiento",
   "section": "Limpieza del hogar",
   "category": "Lavandina y limpiadores de piso",
   "unit": "un.",
   "priceARS": 1980,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M264",
   "name": "Lavandina Ayudín x2 L",
   "section": "Limpieza del hogar",
   "category": "Lavandina y limpiadores de piso",
   "unit": "un.",
   "priceARS": 2250,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M265",
   "name": "Ayudin x1",
   "section": "Limpieza del hogar",
   "category": "Lavandina y limpiadores de piso",
   "unit": "un.",
   "priceARS": 1100,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M266",
   "name": "Val x1",
   "section": "Limpieza del hogar",
   "category": "Lavandina y limpiadores de piso",
   "unit": "un.",
   "priceARS": 690,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M267",
   "name": "Val x2",
   "section": "Limpieza del hogar",
   "category": "Lavandina y limpiadores de piso",
   "unit": "un.",
   "priceARS": 1360,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M268",
   "name": "Odex x2 litros",
   "section": "Limpieza del hogar",
   "category": "Lavandina y limpiadores de piso",
   "unit": "un.",
   "priceARS": 1810,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M269",
   "name": "Querubin \"concentrada\" x1 litro",
   "section": "Limpieza del hogar",
   "category": "Lavandina y limpiadores de piso",
   "unit": "un.",
   "priceARS": 950,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M270",
   "name": "Limpiador de pisos Procenex",
   "section": "Limpieza del hogar",
   "category": "Lavandina y limpiadores de piso",
   "unit": "un.",
   "priceARS": 1370,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M271",
   "name": "Deo Val piso",
   "section": "Limpieza del hogar",
   "category": "Lavandina y limpiadores de piso",
   "unit": "un.",
   "priceARS": 800,
   "orderMode": "inquiry",
   "confirmationReason": "Presentación o unidad de venta por confirmar.",
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M272",
   "name": "Suavizante Querubín",
   "section": "Limpieza del hogar",
   "category": "Suavizantes",
   "unit": "un.",
   "priceARS": 2970,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M273",
   "name": "Encendedor",
   "section": "Limpieza del hogar",
   "category": "Varios limpieza",
   "unit": "un.",
   "priceARS": 240,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M274",
   "name": "Guantes de goma",
   "section": "Limpieza del hogar",
   "category": "Varios limpieza",
   "unit": "un.",
   "priceARS": 1430,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M275",
   "name": "Sedal doy pack x300",
   "section": "Perfumería e higiene personal",
   "category": "Limpieza - Shampoo",
   "unit": "un.",
   "priceARS": 2860,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M276",
   "name": "Shampoo o acondicionador Plusbelle",
   "section": "Perfumería e higiene personal",
   "category": "Limpieza - Shampoo",
   "unit": "un.",
   "priceARS": 3060,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M277",
   "name": "Shampoo Pantene x200 ml",
   "section": "Perfumería e higiene personal",
   "category": "Limpieza - Shampoo",
   "unit": "un.",
   "priceARS": 3850,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M278",
   "name": "Acondicionador Pantene x200 ml",
   "section": "Perfumería e higiene personal",
   "category": "Limpieza - Shampoo",
   "unit": "un.",
   "priceARS": 3850,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M279",
   "name": "Higienol x80m",
   "section": "Perfumería e higiene personal",
   "category": "Limpieza - Higienicos",
   "unit": "un.",
   "priceARS": 3580,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M280",
   "name": "Higienol fresh",
   "section": "Perfumería e higiene personal",
   "category": "Limpieza - Higienicos",
   "unit": "un.",
   "priceARS": 1700,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M281",
   "name": "Papel higiénico Higienol doble hoja",
   "section": "Perfumería e higiene personal",
   "category": "Limpieza - Higienicos",
   "unit": "un.",
   "priceARS": 2670,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M282",
   "name": "Campanita soft rojo 4x30",
   "section": "Perfumería e higiene personal",
   "category": "Limpieza - Higienicos",
   "unit": "un.",
   "priceARS": 1250,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M283",
   "name": "Campanita plus (azul) 4x30",
   "section": "Perfumería e higiene personal",
   "category": "Limpieza - Higienicos",
   "unit": "un.",
   "priceARS": 1480,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M284",
   "name": "Papel higiénico Elegante 4x30",
   "section": "Perfumería e higiene personal",
   "category": "Limpieza - Higienicos",
   "unit": "un.",
   "priceARS": 1580,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M285",
   "name": "Comboy 4x80",
   "section": "Perfumería e higiene personal",
   "category": "Limpieza - Higienicos",
   "unit": "un.",
   "priceARS": 1870,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M286",
   "name": "Pañuelos descartables Elite x6",
   "section": "Perfumería e higiene personal",
   "category": "Limpieza - Higienicos",
   "unit": "un.",
   "priceARS": 1350,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M287",
   "name": "Jabón de tocador Rexona",
   "section": "Perfumería e higiene personal",
   "category": "Limpieza - Jabones tocador",
   "unit": "un.",
   "priceARS": 1210,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M288",
   "name": "Plusbelle x1",
   "section": "Perfumería e higiene personal",
   "category": "Limpieza - Jabones tocador",
   "unit": "un.",
   "priceARS": 970,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M289",
   "name": "Lux x1",
   "section": "Perfumería e higiene personal",
   "category": "Limpieza - Jabones tocador",
   "unit": "un.",
   "priceARS": 1190,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M290",
   "name": "Jabón de tocador Dove",
   "section": "Perfumería e higiene personal",
   "category": "Limpieza - Jabones tocador",
   "unit": "un.",
   "priceARS": 1870,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M291",
   "name": "Desodorante Rexona hombre",
   "section": "Perfumería e higiene personal",
   "category": "Desodorantes",
   "unit": "un.",
   "priceARS": 3630,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M292",
   "name": "Desodorante Axe",
   "section": "Perfumería e higiene personal",
   "category": "Desodorantes",
   "unit": "un.",
   "priceARS": 3390,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M293",
   "name": "Desodorante Rexona mujer",
   "section": "Perfumería e higiene personal",
   "category": "Desodorantes",
   "unit": "un.",
   "priceARS": 3630,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M294",
   "name": "Desodorante en crema Odorono",
   "section": "Perfumería e higiene personal",
   "category": "Desodorantes",
   "unit": "un.",
   "priceARS": 2270,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M295",
   "name": "Mach 3 x4 unidades",
   "section": "Perfumería e higiene personal",
   "category": "Máquinas de afeitar",
   "unit": "un.",
   "priceARS": 7810,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M296",
   "name": "Presto 2 azul",
   "section": "Perfumería e higiene personal",
   "category": "Máquinas de afeitar",
   "unit": "un.",
   "priceARS": 990,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M297",
   "name": "Máquina de afeitar Prestobarba 3",
   "section": "Perfumería e higiene personal",
   "category": "Máquinas de afeitar",
   "unit": "un.",
   "priceARS": 1830,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M298",
   "name": "Máquina de afeitar Venus",
   "section": "Perfumería e higiene personal",
   "category": "Máquinas de afeitar",
   "unit": "un.",
   "priceARS": 1810,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M299",
   "name": "Pasta dental Kolynos x90 g",
   "section": "Perfumería e higiene personal",
   "category": "Pasta dental",
   "unit": "un.",
   "priceARS": 1870,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M300",
   "name": "Colgate x180 original",
   "section": "Perfumería e higiene personal",
   "category": "Pasta dental",
   "unit": "un.",
   "priceARS": 3080,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M301",
   "name": "Oral B x70 varios",
   "section": "Perfumería e higiene personal",
   "category": "Pasta dental",
   "unit": "un.",
   "priceARS": 1260,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M302",
   "name": "Pasta dental Colgate x90 g",
   "section": "Perfumería e higiene personal",
   "category": "Pasta dental",
   "unit": "un.",
   "priceARS": 2090,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M303",
   "name": "Colgate x90 \"ultra blanca\"",
   "section": "Perfumería e higiene personal",
   "category": "Pasta dental",
   "unit": "un.",
   "priceARS": 2090,
   "orderMode": "add_to_request",
   "confirmationReason": null,
   "stockStatus": "unverified",
   "image": null
  },
  {
   "id": "M304",
   "name": "Crema Hinds x125 ml",
   "section": "Perfumería e higiene personal",
   "category": "Cremas",
   "unit": "un.",
   "priceARS": 1760,
   "orderMode": "inquiry",
   "confirmationReason": "Presentación o unidad de venta por confirmar.",
   "stockStatus": "unverified",
   "image": null
  }
 ],
 "combos": [
  {
   "id": "C500",
   "name": "Compra completa familiar",
   "description": "Una compra grande para reponer despensa, desayuno, limpieza y cuidado personal, con básicos de uso frecuente y variedad para la familia.",
   "referenceTotalARS": 500000,
   "references": 50,
   "salesUnits": 224,
   "items": [
    {
     "productId": "M20",
     "quantity": 9
    },
    {
     "productId": "M21",
     "quantity": 7
    },
    {
     "productId": "M24",
     "quantity": 9
    },
    {
     "productId": "M29",
     "quantity": 5
    },
    {
     "productId": "M31",
     "quantity": 7
    },
    {
     "productId": "M32",
     "quantity": 5
    },
    {
     "productId": "M35",
     "quantity": 7
    },
    {
     "productId": "M36",
     "quantity": 5
    },
    {
     "productId": "M37",
     "quantity": 5
    },
    {
     "productId": "M40",
     "quantity": 5
    },
    {
     "productId": "M44",
     "quantity": 5
    },
    {
     "productId": "M45",
     "quantity": 2
    },
    {
     "productId": "M48",
     "quantity": 2
    },
    {
     "productId": "M50",
     "quantity": 2
    },
    {
     "productId": "M51",
     "quantity": 7
    },
    {
     "productId": "M55",
     "quantity": 2
    },
    {
     "productId": "M58",
     "quantity": 5
    },
    {
     "productId": "M61",
     "quantity": 2
    },
    {
     "productId": "M66",
     "quantity": 2
    },
    {
     "productId": "M73",
     "quantity": 5
    },
    {
     "productId": "M87",
     "quantity": 3
    },
    {
     "productId": "M92",
     "quantity": 3
    },
    {
     "productId": "M97",
     "quantity": 4
    },
    {
     "productId": "M108",
     "quantity": 5
    },
    {
     "productId": "M114",
     "quantity": 6
    },
    {
     "productId": "M120",
     "quantity": 7
    },
    {
     "productId": "M121",
     "quantity": 5
    },
    {
     "productId": "M123",
     "quantity": 5
    },
    {
     "productId": "M129",
     "quantity": 5
    },
    {
     "productId": "M143",
     "quantity": 4
    },
    {
     "productId": "M237",
     "quantity": 5
    },
    {
     "productId": "M242",
     "quantity": 2
    },
    {
     "productId": "M245",
     "quantity": 7
    },
    {
     "productId": "M246",
     "quantity": 4
    },
    {
     "productId": "M248",
     "quantity": 1
    },
    {
     "productId": "M250",
     "quantity": 3
    },
    {
     "productId": "M251",
     "quantity": 2
    },
    {
     "productId": "M258",
     "quantity": 4
    },
    {
     "productId": "M263",
     "quantity": 4
    },
    {
     "productId": "M270",
     "quantity": 5
    },
    {
     "productId": "M272",
     "quantity": 4
    },
    {
     "productId": "M274",
     "quantity": 2
    },
    {
     "productId": "M277",
     "quantity": 3
    },
    {
     "productId": "M278",
     "quantity": 4
    },
    {
     "productId": "M281",
     "quantity": 9
    },
    {
     "productId": "M287",
     "quantity": 9
    },
    {
     "productId": "M291",
     "quantity": 2
    },
    {
     "productId": "M293",
     "quantity": 2
    },
    {
     "productId": "M297",
     "quantity": 2
    },
    {
     "productId": "M299",
     "quantity": 5
    }
   ]
  },
  {
   "id": "C400A",
   "name": "Despensa y desayuno",
   "description": "Una reserva variada de alimentos de almacén e infusiones: pastas, arroz, conservas, aceites, café, yerba, galletitas y dulces.",
   "referenceTotalARS": 400000,
   "references": 44,
   "salesUnits": 189,
   "items": [
    {
     "productId": "M20",
     "quantity": 8
    },
    {
     "productId": "M21",
     "quantity": 8
    },
    {
     "productId": "M24",
     "quantity": 8
    },
    {
     "productId": "M26",
     "quantity": 4
    },
    {
     "productId": "M29",
     "quantity": 4
    },
    {
     "productId": "M30",
     "quantity": 3
    },
    {
     "productId": "M31",
     "quantity": 6
    },
    {
     "productId": "M32",
     "quantity": 4
    },
    {
     "productId": "M35",
     "quantity": 6
    },
    {
     "productId": "M36",
     "quantity": 6
    },
    {
     "productId": "M37",
     "quantity": 5
    },
    {
     "productId": "M38",
     "quantity": 4
    },
    {
     "productId": "M39",
     "quantity": 4
    },
    {
     "productId": "M40",
     "quantity": 6
    },
    {
     "productId": "M41",
     "quantity": 4
    },
    {
     "productId": "M44",
     "quantity": 6
    },
    {
     "productId": "M45",
     "quantity": 3
    },
    {
     "productId": "M48",
     "quantity": 2
    },
    {
     "productId": "M50",
     "quantity": 3
    },
    {
     "productId": "M51",
     "quantity": 8
    },
    {
     "productId": "M55",
     "quantity": 2
    },
    {
     "productId": "M58",
     "quantity": 4
    },
    {
     "productId": "M61",
     "quantity": 3
    },
    {
     "productId": "M66",
     "quantity": 2
    },
    {
     "productId": "M73",
     "quantity": 5
    },
    {
     "productId": "M74",
     "quantity": 4
    },
    {
     "productId": "M87",
     "quantity": 4
    },
    {
     "productId": "M91",
     "quantity": 3
    },
    {
     "productId": "M92",
     "quantity": 4
    },
    {
     "productId": "M97",
     "quantity": 2
    },
    {
     "productId": "M101",
     "quantity": 3
    },
    {
     "productId": "M104",
     "quantity": 3
    },
    {
     "productId": "M105",
     "quantity": 2
    },
    {
     "productId": "M108",
     "quantity": 4
    },
    {
     "productId": "M114",
     "quantity": 6
    },
    {
     "productId": "M117",
     "quantity": 1
    },
    {
     "productId": "M120",
     "quantity": 6
    },
    {
     "productId": "M121",
     "quantity": 5
    },
    {
     "productId": "M122",
     "quantity": 4
    },
    {
     "productId": "M123",
     "quantity": 5
    },
    {
     "productId": "M128",
     "quantity": 4
    },
    {
     "productId": "M129",
     "quantity": 4
    },
    {
     "productId": "M143",
     "quantity": 4
    },
    {
     "productId": "M144",
     "quantity": 3
    }
   ]
  },
  {
   "id": "C400B",
   "name": "Hogar y cuidado personal",
   "description": "Reposición amplia para ropa, cocina y pisos, junto con papel, productos para el cabello, higiene bucal y cuidado personal.",
   "referenceTotalARS": 400000,
   "references": 40,
   "salesUnits": 171,
   "items": [
    {
     "productId": "M237",
     "quantity": 5
    },
    {
     "productId": "M240",
     "quantity": 4
    },
    {
     "productId": "M241",
     "quantity": 4
    },
    {
     "productId": "M242",
     "quantity": 3
    },
    {
     "productId": "M244",
     "quantity": 5
    },
    {
     "productId": "M245",
     "quantity": 6
    },
    {
     "productId": "M246",
     "quantity": 4
    },
    {
     "productId": "M247",
     "quantity": 4
    },
    {
     "productId": "M248",
     "quantity": 2
    },
    {
     "productId": "M250",
     "quantity": 3
    },
    {
     "productId": "M251",
     "quantity": 3
    },
    {
     "productId": "M254",
     "quantity": 4
    },
    {
     "productId": "M257",
     "quantity": 4
    },
    {
     "productId": "M258",
     "quantity": 3
    },
    {
     "productId": "M261",
     "quantity": 4
    },
    {
     "productId": "M263",
     "quantity": 4
    },
    {
     "productId": "M264",
     "quantity": 3
    },
    {
     "productId": "M270",
     "quantity": 6
    },
    {
     "productId": "M272",
     "quantity": 4
    },
    {
     "productId": "M274",
     "quantity": 2
    },
    {
     "productId": "M275",
     "quantity": 3
    },
    {
     "productId": "M276",
     "quantity": 3
    },
    {
     "productId": "M277",
     "quantity": 4
    },
    {
     "productId": "M278",
     "quantity": 4
    },
    {
     "productId": "M281",
     "quantity": 9
    },
    {
     "productId": "M282",
     "quantity": 6
    },
    {
     "productId": "M284",
     "quantity": 6
    },
    {
     "productId": "M286",
     "quantity": 4
    },
    {
     "productId": "M287",
     "quantity": 8
    },
    {
     "productId": "M289",
     "quantity": 6
    },
    {
     "productId": "M290",
     "quantity": 6
    },
    {
     "productId": "M291",
     "quantity": 4
    },
    {
     "productId": "M292",
     "quantity": 3
    },
    {
     "productId": "M293",
     "quantity": 4
    },
    {
     "productId": "M294",
     "quantity": 2
    },
    {
     "productId": "M297",
     "quantity": 5
    },
    {
     "productId": "M298",
     "quantity": 4
    },
    {
     "productId": "M299",
     "quantity": 4
    },
    {
     "productId": "M300",
     "quantity": 5
    },
    {
     "productId": "M302",
     "quantity": 4
    }
   ]
  },
  {
   "id": "C300A",
   "name": "Despensa esencial",
   "description": "Básicos para cocinar y completar comidas: pastas, arroz, harina, tomates, legumbres, atún, aceite y condimentos, más algunos productos de desayuno.",
   "referenceTotalARS": 300000,
   "references": 36,
   "salesUnits": 167,
   "items": [
    {
     "productId": "M18",
     "quantity": 4
    },
    {
     "productId": "M19",
     "quantity": 6
    },
    {
     "productId": "M20",
     "quantity": 8
    },
    {
     "productId": "M21",
     "quantity": 8
    },
    {
     "productId": "M24",
     "quantity": 8
    },
    {
     "productId": "M26",
     "quantity": 6
    },
    {
     "productId": "M28",
     "quantity": 4
    },
    {
     "productId": "M29",
     "quantity": 3
    },
    {
     "productId": "M31",
     "quantity": 8
    },
    {
     "productId": "M32",
     "quantity": 6
    },
    {
     "productId": "M33",
     "quantity": 6
    },
    {
     "productId": "M36",
     "quantity": 6
    },
    {
     "productId": "M37",
     "quantity": 8
    },
    {
     "productId": "M38",
     "quantity": 4
    },
    {
     "productId": "M39",
     "quantity": 4
    },
    {
     "productId": "M40",
     "quantity": 5
    },
    {
     "productId": "M41",
     "quantity": 4
    },
    {
     "productId": "M44",
     "quantity": 6
    },
    {
     "productId": "M45",
     "quantity": 2
    },
    {
     "productId": "M48",
     "quantity": 2
    },
    {
     "productId": "M50",
     "quantity": 3
    },
    {
     "productId": "M51",
     "quantity": 8
    },
    {
     "productId": "M55",
     "quantity": 2
    },
    {
     "productId": "M57",
     "quantity": 2
    },
    {
     "productId": "M58",
     "quantity": 6
    },
    {
     "productId": "M61",
     "quantity": 3
    },
    {
     "productId": "M66",
     "quantity": 3
    },
    {
     "productId": "M73",
     "quantity": 4
    },
    {
     "productId": "M87",
     "quantity": 2
    },
    {
     "productId": "M92",
     "quantity": 3
    },
    {
     "productId": "M100",
     "quantity": 3
    },
    {
     "productId": "M108",
     "quantity": 3
    },
    {
     "productId": "M120",
     "quantity": 6
    },
    {
     "productId": "M121",
     "quantity": 4
    },
    {
     "productId": "M122",
     "quantity": 4
    },
    {
     "productId": "M143",
     "quantity": 3
    }
   ]
  },
  {
   "id": "C300B",
   "name": "Desayunos y meriendas",
   "description": "Para mate, café y meriendas variadas: infusiones, azúcar, cacao, galletitas, mermeladas, dulce de leche y mezclas para preparar algo dulce.",
   "referenceTotalARS": 300000,
   "references": 34,
   "salesUnits": 132,
   "items": [
    {
     "productId": "M29",
     "quantity": 4
    },
    {
     "productId": "M30",
     "quantity": 4
    },
    {
     "productId": "M73",
     "quantity": 4
    },
    {
     "productId": "M74",
     "quantity": 4
    },
    {
     "productId": "M79",
     "quantity": 4
    },
    {
     "productId": "M87",
     "quantity": 5
    },
    {
     "productId": "M89",
     "quantity": 3
    },
    {
     "productId": "M91",
     "quantity": 3
    },
    {
     "productId": "M92",
     "quantity": 4
    },
    {
     "productId": "M94",
     "quantity": 3
    },
    {
     "productId": "M97",
     "quantity": 4
    },
    {
     "productId": "M100",
     "quantity": 3
    },
    {
     "productId": "M101",
     "quantity": 4
    },
    {
     "productId": "M102",
     "quantity": 3
    },
    {
     "productId": "M103",
     "quantity": 3
    },
    {
     "productId": "M104",
     "quantity": 3
    },
    {
     "productId": "M105",
     "quantity": 3
    },
    {
     "productId": "M106",
     "quantity": 2
    },
    {
     "productId": "M108",
     "quantity": 5
    },
    {
     "productId": "M114",
     "quantity": 6
    },
    {
     "productId": "M117",
     "quantity": 1
    },
    {
     "productId": "M120",
     "quantity": 6
    },
    {
     "productId": "M121",
     "quantity": 6
    },
    {
     "productId": "M122",
     "quantity": 4
    },
    {
     "productId": "M123",
     "quantity": 5
    },
    {
     "productId": "M124",
     "quantity": 4
    },
    {
     "productId": "M128",
     "quantity": 4
    },
    {
     "productId": "M129",
     "quantity": 5
    },
    {
     "productId": "M133",
     "quantity": 4
    },
    {
     "productId": "M134",
     "quantity": 4
    },
    {
     "productId": "M135",
     "quantity": 4
    },
    {
     "productId": "M136",
     "quantity": 4
    },
    {
     "productId": "M143",
     "quantity": 4
    },
    {
     "productId": "M144",
     "quantity": 3
    }
   ]
  },
  {
   "id": "C300C",
   "name": "Limpieza cotidiana",
   "description": "Surtido para lavar ropa, limpiar cocina y pisos, desinfectar y reponer papel y jabones de tocador.",
   "referenceTotalARS": 300000,
   "references": 33,
   "salesUnits": 137,
   "items": [
    {
     "productId": "M237",
     "quantity": 5
    },
    {
     "productId": "M238",
     "quantity": 3
    },
    {
     "productId": "M240",
     "quantity": 4
    },
    {
     "productId": "M241",
     "quantity": 5
    },
    {
     "productId": "M242",
     "quantity": 4
    },
    {
     "productId": "M243",
     "quantity": 4
    },
    {
     "productId": "M244",
     "quantity": 5
    },
    {
     "productId": "M245",
     "quantity": 7
    },
    {
     "productId": "M246",
     "quantity": 4
    },
    {
     "productId": "M247",
     "quantity": 5
    },
    {
     "productId": "M248",
     "quantity": 2
    },
    {
     "productId": "M249",
     "quantity": 1
    },
    {
     "productId": "M250",
     "quantity": 3
    },
    {
     "productId": "M251",
     "quantity": 3
    },
    {
     "productId": "M254",
     "quantity": 4
    },
    {
     "productId": "M255",
     "quantity": 4
    },
    {
     "productId": "M257",
     "quantity": 4
    },
    {
     "productId": "M258",
     "quantity": 3
    },
    {
     "productId": "M259",
     "quantity": 2
    },
    {
     "productId": "M260",
     "quantity": 3
    },
    {
     "productId": "M261",
     "quantity": 5
    },
    {
     "productId": "M263",
     "quantity": 4
    },
    {
     "productId": "M264",
     "quantity": 4
    },
    {
     "productId": "M270",
     "quantity": 5
    },
    {
     "productId": "M272",
     "quantity": 4
    },
    {
     "productId": "M274",
     "quantity": 3
    },
    {
     "productId": "M281",
     "quantity": 7
    },
    {
     "productId": "M282",
     "quantity": 5
    },
    {
     "productId": "M284",
     "quantity": 5
    },
    {
     "productId": "M286",
     "quantity": 3
    },
    {
     "productId": "M287",
     "quantity": 7
    },
    {
     "productId": "M288",
     "quantity": 5
    },
    {
     "productId": "M290",
     "quantity": 5
    }
   ]
  }
 ]
};

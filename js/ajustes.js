/* ============================================================
   AJUSTES DEL CATÁLOGO — Mayorista a tu Casa (versión 01/10/2026)
   Se aplica DESPUÉS de js/datos.js. Si reemplazás datos.js con un catálogo
   nuevo, estos ajustes se siguen aplicando por código de producto.

   - nombres:     nombre al público corregido (tipo + marca + variedad +
                  presentación). No cambia códigos, precios ni cantidades.
                  El nombre original queda guardado y se puede seguir buscando.
   - opciones:    productos con varias opciones (sabor, tipo o marca). La web
                  no elige por el cliente: le pide que lo aclare en
                  Observaciones o se define al confirmar.
   - notas:       aclaraciones que se muestran debajo del producto.
   - combosExtra: combos que se suman a los del catálogo. Solo se agregan si
                  todos sus productos existen y tienen precio por unidad.
   ============================================================ */
window.AJUSTES_CATALOGO = {
  nombres: {
  "M2": "Manteca x100 (Cluselat, Cotampo o SyS)",
  "M3": "Manteca x200 (Cluselat, Cotampo, SyS o Tanto)",
  "M4": "Grasa de vaca Esani",
  "M5": "Grasa de cerdo Esani",
  "M6": "Aceitunas verdes 000 x2 kg",
  "M7": "Aceitunas verdes descarozadas x2 kg",
  "M8": "Aceitunas verdes rellenas en aceite x1 kg",
  "M9": "Aceitunas negras en aceite x2 kg",
  "M10": "Ajíes x1 kg",
  "M11": "Pickles x2 kg",
  "M12": "Anchoas x60 sobres",
  "M13": "Pepinillos x1 kg",
  "M14": "Aceitunas verdes 0 x5 kg",
  "M15": "Aceitunas verdes descarozadas x4 kg",
  "M16": "Aceitunas verdes 0 x2 kg",
  "M17": "Aceitunas verdes 00 x2 kg",
  "M18": "Paté o picadillo Zwift",
  "M19": "Azúcar Gury",
  "M20": "Fideos Luchetti spaghetti o tallarín",
  "M21": "Fideos guiseros Luchetti (codito, tirabuzón o mostachol)",
  "M22": "Fideos Sol Pampeano spaghetti o tallarín",
  "M23": "Fideos Sol Pampeano para guiso o sopa (varios)",
  "M24": "Arroz Ala \"verde\" x1 kg",
  "M25": "Arroz Ala \"verde\" x500",
  "M26": "Arroz parboil Luchetti x500",
  "M27": "Arroz 0000 (varias marcas)",
  "M28": "Maíz pisingallo Tobogán",
  "M29": "Cacao en polvo Nesquik x180",
  "M30": "Cacao en polvo Toddy x180",
  "M31": "Tomate perita Arcor",
  "M32": "Tomate triturado Francisco x520",
  "M33": "Puré de tomate Huerta x520",
  "M34": "Puré de tomate Molto",
  "M35": "Puré de tomate Marolio",
  "M36": "Choclo amarillo en granos Inca",
  "M37": "Arvejas Sabores del Valle en brick",
  "M38": "Salsa para pizza Knorr",
  "M39": "Duraznos en almíbar Colina o Río Salado en trozos, en lata",
  "M40": "Atún La Campagnola lomo en aceite o al natural",
  "M41": "Atún Cumaná lomo en aceite o al natural",
  "M42": "Atún Cumaná desmenuzado en aceite o al natural",
  "M43": "Aceite de girasol x900 (Prados, Grisol u otras marcas)",
  "M44": "Aceite de girasol x1500 (Paisano u otras marcas)",
  "M45": "Aceite Natura x1500",
  "M46": "Aceite Cañuelas x900",
  "M47": "Aceite Cañuelas x1500",
  "M48": "Vinagre de alcohol Silva",
  "M49": "Caldos Knorr x2",
  "M50": "Caldos Knorr x12",
  "M51": "Harina 000 Tassara",
  "M52": "Harina 000 Morixe",
  "M53": "Agua mineral x2 litros",
  "M54": "Agua mineral x1,5 litros",
  "M55": "Sal fina Doña Sal x500",
  "M56": "Sal Celusal x500 en paquete",
  "M57": "Sal gruesa Doña Sal x1 kg",
  "M58": "Pan rallado o rebozador Preferido x500",
  "M59": "Pan rallado o rebozador Rosa Blanca x500",
  "M60": "Pan rallado o rebozador Rosa Blanca x1 kg",
  "M61": "Mayonesa Natura x500",
  "M62": "Mayonesa Natura x250",
  "M63": "Mayonesa Hellmann's x250",
  "M64": "Mayonesa Natura x125",
  "M65": "Mayonesa Hellmann's x125",
  "M66": "Mostaza Savora x250",
  "M67": "Mayonesa Natura x1 kg",
  "M68": "Pilas AA x2",
  "M69": "Pilas AAA x2",
  "M70": "Yerba Nobleza Gaucha x500",
  "M71": "Yerba Andresito x500",
  "M72": "Yerba Playadito x500",
  "M73": "Yerba Playadito x1 kg",
  "M74": "Yerba Amanda x500",
  "M75": "Yerba Unión x500",
  "M76": "Yerba Rosamonte suave (amarilla) x500",
  "M77": "Yerba Rosamonte roja Plus x500",
  "M78": "Yerba Mañanita x500",
  "M79": "Yerba Taragüí x500",
  "M80": "Yerba Cachamate rosa o amarilla x500",
  "M81": "Yerba CBSé limón y naranja o guaraná x500",
  "M82": "Yerba CBSé tradicional x500",
  "M83": "Yerba Tranquera x500",
  "M84": "Yerba Cumbrecita x500",
  "M85": "Yerba Cruz de Malta x500",
  "M86": "Yerba Sello Negro x500",
  "M87": "Café Dolca suave o clásico x170",
  "M88": "Café Arlistán x50",
  "M89": "Café Arlistán x100",
  "M90": "Café Arlistán x170",
  "M91": "Café Morenita en saquitos x20",
  "M92": "Té Taragüí x50",
  "M93": "Té Taragüí x25",
  "M94": "Té Green Hills x25",
  "M95": "Té Crysf x25",
  "M96": "Té Crysf x50",
  "M97": "Mate cocido Taragüí x25",
  "M98": "Mate cocido Unión x25",
  "M99": "Mate cocido Unión x50",
  "M100": "Mate cocido Taragüí x50",
  "M101": "B/C durazno, damasco, ciruela o naranja",
  "M102": "B/C frutilla, frutos del bosque o arándanos",
  "M103": "Bizcochuelo vainilla, naranja o limón",
  "M104": "Bizcochuelo chocolate chips o dulce de leche",
  "M105": "Brownie",
  "M106": "Bizcochuelo Exquisita vainilla",
  "M107": "Dulce de leche San Sebastián x400",
  "M108": "Dulce de leche Tanto x400",
  "M109": "Dulce de leche Tanto x250",
  "M110": "Alfajor Guaymallén simple",
  "M111": "Alfajor Guaymallén triple",
  "M112": "Alfajor Rasta simple",
  "M113": "Turrón Misky",
  "M114": "Azúcar Ledesma",
  "M115": "Azúcar light Hileret x250",
  "M116": "Azúcar light Hileret x500",
  "M117": "Edulcorante líquido Hileret Forte o Azul x500",
  "M118": "Edulcorante líquido Hileret Forte o Azul x250",
  "M119": "Galletitas Leiva sándwich x3",
  "M120": "Galletitas Media Tarde clásicas x3",
  "M121": "Pepas Toconato x400 g",
  "M122": "Galletitas Cerealitas",
  "M123": "Galletitas surtidas Bagley",
  "M124": "Galletitas surtidas Diversión",
  "M125": "Oblea Hip Hop",
  "M126": "Galletitas Traviata",
  "M127": "Bizcochos Satur",
  "M128": "Galletitas Pepitos",
  "M129": "Galletitas Chocolinas x250",
  "M130": "Providencia x3",
  "M131": "Providencia x5",
  "M132": "Vocación x3",
  "M133": "Dale María x3",
  "M134": "Obleas Zupay x3",
  "M135": "Galletitas Paseo con sal",
  "M136": "Galletitas Paseo sin sal",
  "M137": "Mermelada Emeth durazno, damasco, ciruela o naranja (envase plástico PVC)",
  "M138": "Mermelada Emeth frutilla (envase plástico PVC)",
  "M139": "Mermelada Emeth frambuesa (envase plástico PVC)",
  "M140": "Mermelada Emeth B/C durazno, ciruela o naranja (envase plástico PVC)",
  "M141": "Mermelada Emeth B/C frutilla (envase plástico PVC)",
  "M142": "Mermelada Emeth B/C frambuesa (envase plástico PVC)",
  "M143": "Mermelada Emeth durazno, damasco, ciruela o naranja (frasco de vidrio)",
  "M144": "Mermelada Emeth frutilla, frutos del bosque o arándanos (frasco de vidrio)",
  "M145": "Yogur Dahi (durazno, frutos del bosque, frutilla o firme de vainilla)",
  "M146": "Queso cremoso Punta del Agua",
  "M147": "Queso cremoso D-70 u otras marcas",
  "M148": "Queso cremoso Popular",
  "M149": "Queso en barra Punta del Agua",
  "M150": "Queso en barra Siku u otras marcas",
  "M151": "Muzzarella Barraza en cilindro",
  "M152": "Muzzarella Dom Tim",
  "M153": "Queso roquefort Quesera",
  "M154": "Queso roquefort Lucrecia, Luisa o Emperador",
  "M155": "Queso sin sal El Juan",
  "M156": "Queso regiano Melincué",
  "M157": "Queso sardo",
  "M158": "Queso Mar del Plata Puggio \"Súper calidad\"",
  "M159": "Queso Mar del Plata Mana Luisa u otras marcas (oferta)",
  "M160": "Ricota Siku",
  "M161": "Queso cheddar La Serenísima",
  "M162": "Queso Fiambrín La Serenísima",
  "M163": "Provoleta Nona Pia",
  "M164": "Queso rallado La Quesera x40 g",
  "M165": "Queso rallado Reggio x40 g",
  "M166": "Queso rallado La Serenísima x40 g",
  "M167": "Jamón cocido natural Bocatti",
  "M168": "Jamón cocido natural Montesano",
  "M169": "Jamón cocido natural Don Jorge (González)",
  "M170": "Jamón cocido Paladini",
  "M171": "Jamón cocido La Octava",
  "M172": "Jamón cocido 214",
  "M173": "Jamón cocido González",
  "M174": "Jamón cocido de pata San Tore",
  "M175": "Jamón cocido de pata González",
  "M176": "Paleta González",
  "M177": "Paleta Orfebre",
  "M178": "Jamón crudo Parma importado de España",
  "M179": "Jamón crudo Sol Naciente",
  "M180": "Panceta ahumada o salada González",
  "M181": "Lomo redondo González",
  "M182": "Salame Milán Calchaquí",
  "M183": "Salame Milán La Octava",
  "M184": "Salame Milán Cagnoli",
  "M185": "Salame Milán Cuatro Condes",
  "M186": "Salame Milán Leandrin",
  "M187": "Salame Milán González",
  "M188": "Salamines Las Calvos (12)",
  "M189": "Longaniza bastón Leandrin",
  "M190": "Salamines Torgelon fino, grueso o colorado",
  "M191": "Salame bastón Condes \"Especial\"",
  "M192": "Bondiola Lario",
  "M193": "Mortadela Calchaquí en bocha",
  "M194": "Salchichón de jamón o primavera González",
  "M195": "Salchichón de jamón o primavera La Octava",
  "M196": "Queso de cerdo Losifar",
  "M197": "Matambre de carne Losifar",
  "M198": "Matambre de pollo Losifar",
  "M199": "Salchichas x6 (oferta)",
  "M200": "Dulce de batata o batata con chocolate en lata",
  "M201": "Dulce de membrillo en lata",
  "M202": "Dulce de batata o batata con chocolate Emeth en cajón",
  "M203": "Dulce de membrillo Emeth en cajón",
  "M204": "Dulce de batata Cavan Serna (batata o chocolate)",
  "M205": "Dulce de membrillo Cavan Serna",
  "M206": "Papas fritas Krachitos tradicionales x420",
  "M207": "Papas fritas Krachitos americanas x420",
  "M208": "Chizitos Krachitos x400 g",
  "M209": "Bastoncitos Krachitos x330",
  "M210": "Palitos salados Krachitos x800",
  "M211": "Maní salado pelado Krachitos x800 (280 g)",
  "M212": "Maní japonés Krachitos",
  "M213": "Papas fritas Good Show tradicionales o americanas x430 g",
  "M214": "Papas fritas Good Show cheddar x280 g",
  "M215": "Chizitos o bastoncitos Good Show x287 g",
  "M216": "Palitos salados Good Show x500 g",
  "M217": "Maní pelado Good Show x500 g",
  "M218": "Papas fritas Good Show x63 g (varios sabores)",
  "M219": "Pochoclo Good Show",
  "M220": "Maní King x80 g (cebolla, panceta, asado o pimienta)",
  "M221": "Maní King x100 g (salado, frito o sin sal)",
  "M222": "Vino Valentín lacrado",
  "M223": "Vino Balbo",
  "M224": "Vino Viñas de Alvear",
  "M225": "Vino Patero Santa Filomena x1125",
  "M226": "Vino Norton Cosecha Tardía",
  "M227": "Jugo en polvo Tang",
  "M228": "Jugo en polvo Clight",
  "M229": "Jugo Noel x2 litros",
  "M230": "Fernet Branca x450",
  "M231": "Fernet Branca x750",
  "M232": "Gancia x950",
  "M233": "Sky Cosmic",
  "M234": "Energizante Speed XL",
  "M235": "Energizante Speed chico",
  "M236": "Energizante Monster negro o Mango Loco",
  "M237": "Detergente Magistral x500 (limón-verde o marina)",
  "M238": "Detergente Magistral x300",
  "M239": "Detergente Cif x300 (varios)",
  "M240": "Detergente Cif limón x500",
  "M241": "Detergente Val x750",
  "M242": "Limpiador en crema Odex grande",
  "M243": "Rollo de cocina Susex",
  "M244": "Rollo de cocina Celestial x3",
  "M245": "Rollo de cocina Sol Mayor Mega x200",
  "M246": "Jabón en pan Seiseme",
  "M247": "Jabón en pan El Argentino",
  "M248": "Insecticida en aerosol Raid azul",
  "M249": "Insecticida en aerosol Selton rojo",
  "M250": "Alcohol fino Dismar x500",
  "M251": "Desinfectante Lysoform clásico",
  "M252": "Desinfectante Lysoform original",
  "M253": "Jabón líquido para ropa Skip x800",
  "M254": "Jabón líquido para ropa Ala x800",
  "M255": "Jabón líquido para ropa Querubín x800",
  "M256": "Jabón líquido para ropa Gramby x800",
  "M257": "Jabón líquido para ropa Ariel x800",
  "M258": "Jabón líquido para ropa Ariel x3000",
  "M259": "Jabón líquido para ropa Gramby x3000",
  "M260": "Jabón líquido para ropa Val matic x800",
  "M261": "Jabón en polvo Zorro matic x400",
  "M262": "Lavandina Odex concentrada x1",
  "M263": "Lavandina Querubín doble rendimiento x2",
  "M264": "Lavandina Ayudín x2 litros",
  "M265": "Lavandina Ayudín x1",
  "M266": "Lavandina Val x1",
  "M267": "Lavandina Val x2",
  "M268": "Lavandina Odex x2 litros",
  "M269": "Lavandina Querubín concentrada x1 litro",
  "M270": "Desodorante para pisos Procenex",
  "M271": "Desodorante para pisos Val",
  "M272": "Suavizante para ropa Querubín",
  "M273": "Encendedor",
  "M274": "Guantes de goma",
  "M275": "Shampoo Sedal en doypack x300",
  "M276": "Shampoo o crema de enjuague Plusbelle Única Fragancia brillo",
  "M277": "Shampoo Pantene x200",
  "M278": "Crema de enjuague Pantene x200",
  "M279": "Papel higiénico Higienol x80 m",
  "M280": "Papel higiénico Higienol Fresh",
  "M281": "Papel higiénico Higienol doble hoja",
  "M282": "Papel higiénico Campanita Soft rojo 4x30",
  "M283": "Papel higiénico Campanita Plus azul 4x30",
  "M284": "Papel higiénico Elegante 4x30",
  "M285": "Papel higiénico Comboy 4x80",
  "M286": "Pañuelos Elite x6",
  "M287": "Jabón de tocador Rexona",
  "M288": "Jabón de tocador Plusbelle",
  "M289": "Jabón de tocador Lux",
  "M290": "Jabón de tocador Dove",
  "M291": "Desodorante Rexona hombre",
  "M292": "Desodorante Axe (Musk, Marine u otras fragancias)",
  "M293": "Desodorante Rexona mujer",
  "M294": "Desodorante en crema Odorono",
  "M295": "Máquinas de afeitar Mach 3 x4 unidades",
  "M296": "Máquina de afeitar Presto 2 azul",
  "M297": "Máquina de afeitar Presto 3",
  "M298": "Máquina de afeitar Venus",
  "M299": "Pasta dental Kolynos triple x90",
  "M300": "Pasta dental Colgate original x180",
  "M301": "Pasta dental Oral-B x70 (varios)",
  "M302": "Pasta dental Colgate original o triple acción x90",
  "M303": "Pasta dental Colgate Ultra Blanca x90",
  "M304": "Crema Hinds x125 ml"
},
  opciones: ["M2", "M3", "M18", "M20", "M21", "M22", "M23", "M27", "M39", "M40", "M41", "M42", "M43", "M44", "M58", "M59", "M60", "M80", "M81", "M87", "M101", "M102", "M103", "M104", "M117", "M118", "M137", "M140", "M143", "M144", "M145", "M147", "M150", "M154", "M159", "M180", "M190", "M194", "M195", "M200", "M202", "M204", "M213", "M215", "M218", "M220", "M221", "M236", "M237", "M239", "M276", "M292", "M301", "M302"],
  notas: {
  "M101": "Así figura en la lista del proveedor. Si tenés dudas, consultanos qué producto es antes de pedir.",
  "M102": "Así figura en la lista del proveedor. Si tenés dudas, consultanos qué producto es antes de pedir.",
  "M215": "Bastoncitos: consultar disponibilidad."
},
  combosExtra: [{
  "id": "C200",
  "name": "Esenciales para tu casa",
  "referenceTotalARS": 200000,
  "badge": "Empezá desde $200.000",
  "description": "Una primera compra equilibrada con lo básico de todos los días: fideos, arroz, aceite, tomates, yerba, café y galletitas, más limpieza, papel higiénico y cuidado personal.",
  "items": [
    {
      "productId": "M20",
      "quantity": 4
    },
    {
      "productId": "M21",
      "quantity": 4
    },
    {
      "productId": "M24",
      "quantity": 4
    },
    {
      "productId": "M51",
      "quantity": 3
    },
    {
      "productId": "M31",
      "quantity": 3
    },
    {
      "productId": "M32",
      "quantity": 3
    },
    {
      "productId": "M35",
      "quantity": 3
    },
    {
      "productId": "M37",
      "quantity": 3
    },
    {
      "productId": "M36",
      "quantity": 2
    },
    {
      "productId": "M41",
      "quantity": 4
    },
    {
      "productId": "M44",
      "quantity": 4
    },
    {
      "productId": "M48",
      "quantity": 1
    },
    {
      "productId": "M50",
      "quantity": 2
    },
    {
      "productId": "M55",
      "quantity": 2
    },
    {
      "productId": "M58",
      "quantity": 2
    },
    {
      "productId": "M61",
      "quantity": 2
    },
    {
      "productId": "M114",
      "quantity": 3
    },
    {
      "productId": "M73",
      "quantity": 3
    },
    {
      "productId": "M97",
      "quantity": 2
    },
    {
      "productId": "M92",
      "quantity": 1
    },
    {
      "productId": "M108",
      "quantity": 2
    },
    {
      "productId": "M120",
      "quantity": 3
    },
    {
      "productId": "M121",
      "quantity": 2
    },
    {
      "productId": "M123",
      "quantity": 2
    },
    {
      "productId": "M87",
      "quantity": 1
    },
    {
      "productId": "M237",
      "quantity": 2
    },
    {
      "productId": "M242",
      "quantity": 2
    },
    {
      "productId": "M245",
      "quantity": 3
    },
    {
      "productId": "M246",
      "quantity": 3
    },
    {
      "productId": "M258",
      "quantity": 1
    },
    {
      "productId": "M263",
      "quantity": 3
    },
    {
      "productId": "M270",
      "quantity": 2
    },
    {
      "productId": "M272",
      "quantity": 2
    },
    {
      "productId": "M274",
      "quantity": 1
    },
    {
      "productId": "M281",
      "quantity": 5
    },
    {
      "productId": "M287",
      "quantity": 4
    },
    {
      "productId": "M302",
      "quantity": 3
    },
    {
      "productId": "M277",
      "quantity": 1
    },
    {
      "productId": "M278",
      "quantity": 1
    }
  ]
}]
};

(function () {
  'use strict';
  var D = window.CATALOGO, A = window.AJUSTES_CATALOGO;
  if (!D || !Array.isArray(D.products) || !A) return;
  var byId = {};
  D.products.forEach(function (p) { byId[p.id] = p; });
  Object.keys(A.nombres || {}).forEach(function (id) {
    var p = byId[id], n = A.nombres[id];
    if (!p || typeof n !== 'string' || !n.trim()) return;
    if (p.nombreLista == null) p.nombreLista = p.name;
    p.name = n.trim();
  });
  (A.opciones || []).forEach(function (id) { if (byId[id]) byId[id].opciones = true; });
  Object.keys(A.notas || {}).forEach(function (id) { if (byId[id] && A.notas[id]) byId[id].nota = String(A.notas[id]); });
  if (!Array.isArray(D.combos)) D.combos = [];
  var extra = [];
  (A.combosExtra || []).forEach(function (c) {
    if (!c || !c.id || D.combos.some(function (x) { return x.id === c.id; })) return;
    var ok = Array.isArray(c.items) && c.items.length && c.items.every(function (i) {
      var p = byId[i.productId];
      return p && p.orderMode === 'add_to_request' && Number(p.priceARS) > 0 && Number(i.quantity) > 0;
    });
    if (ok) extra.push(c);
    else if (window.console) console.warn('Combo ' + c.id + ' no se agregó: algún producto ya no está en el catálogo o no tiene precio por unidad.');
  });
  D.combos = extra.concat(D.combos);
})();

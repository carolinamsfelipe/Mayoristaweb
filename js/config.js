/* ============================================================
   CONFIGURACIÓN COMERCIAL — Mayorista a tu Casa
   Editá solo los valores entre comillas o los números.
   Guardá el archivo y recargá la página para ver los cambios.
   ============================================================ */
window.CONFIG_TIENDA = {

  /* WhatsApp de pedidos, con código de país y sin espacios, "+" ni guiones.
     Argentina celular: 54 9 + código de área sin 0 + número sin 15.
     Ejemplo: 11 3033-2341  ->  "5491130332341".
     Si lo dejás vacío (""), la web ofrece "Copiar pedido" y avisa que falta el número. */
  whatsapp: "5491130332341",

  /* Cómo se muestra el número en pantalla. */
  whatsappVisible: "11 3033-2341",

  /* Zonas con costo de envío conocido. costoEnvio en pesos, sin puntos: 0 = gratis.
     La web reconoce la zona cuando el cliente la escribe en "Localidad o barrio".
     Para sumar otra zona: { zona: "Castelar", costoEnvio: 3000 } */
  zonasEnvio: [
    { zona: "Ituzaingó", costoEnvio: 0 }
  ],

  /* Envío a cualquier otra zona. null = "a confirmar" (NO significa gratis).
     Si algún día tiene un costo fijo, escribí el número (ej. 5000). */
  costoEnvioOtrasZonas: null,

  /* Días y horarios de entrega o atención. Vacío = "A coordinar". */
  horarios: "",

  /* Medios de pago aceptados (aparecen para elegir en el pedido). */
  mediosDePago: ["Efectivo al recibir", "Mercado Pago"],

  /* Montos rápidos del presupuesto opcional del armador. */
  presupuestosRapidos: [200000, 300000, 400000, 500000]
};

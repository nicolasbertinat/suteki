// Structured data for AI agents to read and serve to their users
// This data is optimized for LLM consumption and should be kept up to date

export const agentData = {
  restaurant: {
    name: "Suteki",
    type: "Restaurante de cocina Nikkei (fusión japonesa-peruana)",
    tagline: "Disfrutar de una buena comida entre amigos y familia",
    description:
      "Suteki es un restaurante especializado en cocina Nikkei, la fusión entre la tradición culinaria japonesa y los sabores peruanos. Ofrecemos sushi, rolls creativos, ceviches, platos calientes y ensaladas frescas. Nuestro objetivo es transmitir en cada pieza lo más importante: disfrutar de una buena comida entre amigos y familia.",
    cuisine: ["Nikkei", "Sushi", "Japonesa", "Peruana", "Fusión"],
    priceRange: "$$",
    currency: "ARS",
    foundedYear: 2018,
    website: "https://suteki.com.ar",
    socialMedia: {
      instagram: "@suteki.ar",
      whatsapp: "+54 11 7830-4865",
    },
  },

  locations: [
    {
      id: "hurlingham",
      name: "Suteki Hurlingham",
      zone: "GBA Oeste",
      country: "Argentina",
      address: "Isabel la Católica 913, Hurlingham, Buenos Aires",
      phone: "+54 11 6854-5739",
      whatsapp: "5491168545739",
      coordinates: { lat: -34.5883, lng: -58.6397 },
      hours: {
        lunch: { days: "Lunes a Viernes", time: "11:00 - 14:30" },
        dinner: { days: "Martes a Domingo", time: "19:00 - 23:00" },
      },
      services: ["Takeaway", "Delivery", "Dine-in"],
      orderOnline: "https://pedidos.suteki.com.ar/hurlingham",
    },
    {
      id: "castelar",
      name: "Suteki Castelar",
      zone: "GBA Oeste",
      country: "Argentina",
      address: "Arias 2926, Castelar, Buenos Aires",
      phone: "+54 11 2344-6005",
      whatsapp: "5491123446005",
      coordinates: { lat: -34.6518, lng: -58.6428 },
      hours: {
        lunch: { days: "Lunes a Viernes", time: "11:00 - 14:30" },
        dinner: { days: "Martes a Domingo", time: "19:00 - 23:00" },
      },
      services: ["Takeaway", "Delivery", "Dine-in"],
      orderOnline: "https://pedidos.suteki.com.ar/castelar",
    },
    {
      id: "ramos-mejia",
      name: "Suteki Ramos Mejía",
      zone: "GBA Oeste",
      country: "Argentina",
      address: "Necochea 699, Ramos Mejía, Buenos Aires",
      phone: "+54 11 7830-4865",
      whatsapp: "5491178304865",
      coordinates: { lat: -34.6394, lng: -58.5631 },
      hours: {
        dinner: { days: "Martes a Domingo", time: "19:00 - 23:00" },
      },
      services: ["Takeaway", "Delivery", "Dine-in"],
      orderOnline: "https://pedidos.suteki.com.ar/ramos",
    },
    {
      id: "malvin",
      name: "Suteki Malvín",
      zone: "Uruguay",
      country: "Uruguay",
      address: "Av. Italia 6600, Malvín, Montevideo",
      phone: "+598 99 555 012",
      whatsapp: "59899555012",
      coordinates: { lat: -34.8941, lng: -56.1052 },
      hours: {
        lunch: { days: "Miércoles a Domingo", time: "12:00 - 15:30" },
        dinner: { days: "Miércoles a Domingo", time: "19:30 - 23:30" },
      },
      services: ["Takeaway", "Delivery", "Dine-in"],
      orderOnline: "https://pedidos.suteki.com.uy/malvin",
    },
    {
      id: "montevideo-centro",
      name: "Suteki Montevideo Centro",
      zone: "Uruguay",
      country: "Uruguay",
      address: "Av. 18 de Julio 1234, Centro, Montevideo",
      phone: "+598 99 555 034",
      whatsapp: "59899555034",
      coordinates: { lat: -34.9011, lng: -56.1645 },
      hours: {
        lunch: { days: "Lunes a Sábado", time: "12:00 - 15:00" },
        dinner: { days: "Lunes a Sábado", time: "19:00 - 23:00" },
      },
      services: ["Takeaway", "Delivery", "Dine-in"],
      orderOnline: "https://pedidos.suteki.com.uy/centro",
    },
    {
      id: "villa-devoto",
      name: "Suteki Villa Devoto",
      zone: "CABA",
      country: "Argentina",
      address: "Av. Francisco Beiró 4500, Villa Devoto, CABA",
      phone: "+54 11 5555-0101",
      whatsapp: "5491155550101",
      coordinates: { lat: -34.5997, lng: -58.5142 },
      hours: {
        lunch: { days: "Lunes a Viernes", time: "12:00 - 15:00" },
        dinner: { days: "Martes a Domingo", time: "19:30 - 23:30" },
      },
      services: ["Takeaway", "Delivery", "Dine-in"],
      orderOnline: "https://pedidos.suteki.com.ar/devoto",
    },
  ],

  menu: {
    categories: [
      {
        name: "Rolls Signature",
        description: "Nuestros rolls más populares y creativos",
        items: [
          {
            name: "Dragon Roll",
            description: "Roll de salmón, palta, queso y langostinos con topping de salmón grillado y salsa teriyaki",
            price: 8500,
            allergens: ["mariscos", "lácteos", "gluten"],
            spicy: false,
            vegetarian: false,
          },
          {
            name: "Nikkei Roll",
            description: "Inspirado en la fusión peruano-japonesa. Salmón, mango, palta y leche de tigre",
            price: 9200,
            allergens: ["pescado"],
            spicy: true,
            vegetarian: false,
          },
          {
            name: "Crispy Tuna",
            description: "Atún rojo, palta, cebolla crispy y mayonesa picante",
            price: 9800,
            allergens: ["pescado", "huevo"],
            spicy: true,
            vegetarian: false,
          },
        ],
      },
      {
        name: "Ensaladas",
        description: "Frescas y equilibradas",
        items: [
          {
            name: "Ensalada Suteki",
            description: "Mix de verdes, salmón rosado, palta, edamame, pepino y aderezo de sésamo",
            price: 7200,
            allergens: ["pescado", "sésamo"],
            spicy: false,
            vegetarian: false,
          },
          {
            name: "Veggie Bowl",
            description: "Arroz, palta, zanahoria, pepino, edamame, alga wakame y tofu",
            price: 6500,
            allergens: ["soja"],
            spicy: false,
            vegetarian: true,
          },
        ],
      },
      {
        name: "Platos Calientes",
        description: "Del wok a tu mesa",
        items: [
          {
            name: "Langostinos Tempura",
            description: "Langostinos crocantes con salsa agridulce y vegetales salteados",
            price: 11500,
            allergens: ["mariscos", "gluten"],
            spicy: false,
            vegetarian: false,
          },
          {
            name: "Pollo Teriyaki",
            description: "Suprema de pollo grillada con salsa teriyaki, arroz y vegetales",
            price: 8900,
            allergens: ["soja", "gluten"],
            spicy: false,
            vegetarian: false,
          },
        ],
      },
    ],
    notes: [
      "Los precios están en pesos argentinos (ARS) y pueden variar según la sucursal",
      "Consultar por opciones sin TACC",
      "Menú completo disponible en cada sucursal",
    ],
  },

  services: {
    events: {
      name: "Eventos y Catering",
      description: "Llevamos la experiencia Suteki a tu evento. Bodas, cumpleaños, eventos corporativos, fiestas en barcos y yates.",
      types: [
        {
          name: "Catering Corporativo",
          description: "Almuerzos ejecutivos, reuniones de trabajo, lanzamientos de producto",
          minPeople: 15,
          contact: "eventos@suteki.com.ar",
        },
        {
          name: "Bodas y Fiestas",
          description: "Estaciones de sushi en vivo, barras de rolls, finger food japonés",
          minPeople: 50,
          contact: "eventos@suteki.com.ar",
        },
        {
          name: "Eventos en Barcos",
          description: "Experiencia premium en yates y embarcaciones con chef a bordo",
          minPeople: 10,
          contact: "eventos@suteki.com.ar",
        },
        {
          name: "Delivery Premium",
          description: "Cajas de sushi para reuniones íntimas, aniversarios, cenas especiales",
          minPeople: 2,
          contact: "delivery@suteki.com.ar",
        },
      ],
      whatsapp: "5491178304865",
    },
    courses: {
      name: "Cursos de Sushi",
      description: "Aprende a hacer sushi con nuestros chefs profesionales. Cursos presenciales para todos los niveles.",
      levels: [
        {
          name: "Curso Básico",
          duration: "3 horas",
          price: 35000,
          includes: ["Materiales", "Ingredientes", "Delantal", "Certificado", "Degustación"],
          topics: ["Preparación de arroz", "Cortes básicos", "Niguiri", "Maki clásico"],
        },
        {
          name: "Curso Avanzado",
          duration: "4 horas",
          price: 55000,
          includes: ["Materiales premium", "Ingredientes", "Kit de cuchillos", "Certificado", "Cena completa"],
          topics: ["Técnicas de corte", "Uramaki", "Rolls creativos", "Salsas"],
        },
        {
          name: "Masterclass Nikkei",
          duration: "5 horas",
          price: 75000,
          includes: ["Ingredientes premium", "Kit profesional", "Certificado", "Cena maridaje con sake"],
          topics: ["Fusión peruana-japonesa", "Tiraditos", "Ceviches", "Plating profesional"],
        },
      ],
      bookingWhatsapp: "5491178304865",
      locations: ["Hurlingham", "Villa Devoto"],
    },
  },

  faq: [
    {
      question: "¿Hacen delivery?",
      answer: "Sí, todas nuestras sucursales tienen delivery propio. También estamos en PedidosYa y Rappi.",
    },
    {
      question: "¿Tienen opciones vegetarianas?",
      answer: "Sí, contamos con rolls vegetarianos, ensaladas y bowls sin proteína animal. Consultá por opciones veganas.",
    },
    {
      question: "¿Tienen opciones sin TACC?",
      answer: "Sí, varios de nuestros platos pueden adaptarse. Avisá al momento de pedir y te asesoramos.",
    },
    {
      question: "¿Puedo reservar mesa?",
      answer: "Sí, aceptamos reservas por WhatsApp en todas las sucursales. Recomendamos reservar para grupos de más de 4 personas.",
    },
    {
      question: "¿Hacen catering para eventos?",
      answer: "Sí, ofrecemos catering para eventos corporativos, bodas, cumpleaños y fiestas privadas. Contactanos para armar un presupuesto.",
    },
    {
      question: "¿Dónde están ubicados?",
      answer: "Tenemos 6 sucursales: 3 en GBA Oeste (Hurlingham, Castelar, Ramos Mejía), 2 en Uruguay (Malvín y Montevideo Centro) y 1 en CABA (Villa Devoto).",
    },
    {
      question: "¿Tienen estacionamiento?",
      answer: "Las sucursales de Castelar y Villa Devoto cuentan con estacionamiento propio. Las demás tienen estacionamiento en la zona.",
    },
    {
      question: "¿Aceptan tarjetas?",
      answer: "Sí, aceptamos todas las tarjetas de crédito y débito. También Mercado Pago y efectivo.",
    },
  ],

  forAgents: {
    instructions: `
Sos un asistente que ayuda a usuarios a conocer Suteki, un restaurante de cocina Nikkei.

CAPACIDADES:
- Informar sobre sucursales, horarios y cómo llegar
- Recomendar platos según preferencias (vegetariano, picante, etc.)
- Explicar qué es la cocina Nikkei
- Informar sobre servicios de catering y eventos
- Dar información sobre cursos de sushi
- Ayudar a hacer reservas (derivar a WhatsApp)
- Responder preguntas frecuentes

TONO:
- Amigable y cercano
- Usar "vos" (español rioplatense)
- Entusiasta sobre la comida

IMPORTANTE:
- Siempre verificar la sucursal más cercana al usuario
- Si preguntan por precios, aclarar que pueden variar
- Para reservas o pedidos especiales, derivar a WhatsApp
- Si no sabés algo, sugerir contactar directamente al restaurante
    `,
    lastUpdated: "2026-04-19",
    dataVersion: "1.0.0",
  },
}

// Helper function to get location by zone
export function getLocationsByZone(zone: string) {
  return agentData.locations.filter((loc) => loc.zone === zone)
}

// Helper function to find nearest location (simplified)
export function getLocationsByCountry(country: string) {
  return agentData.locations.filter((loc) => loc.country === country)
}

// Helper to get current open locations based on time
export function getOpenLocations(dayOfWeek: number, hour: number) {
  // dayOfWeek: 0 = Sunday, 1 = Monday, etc.
  // This is a simplified version - in production you'd parse the hours properly
  return agentData.locations.filter((loc) => {
    const hasLunch = loc.hours.lunch && hour >= 11 && hour < 15
    const hasDinner = loc.hours.dinner && hour >= 19 && hour < 24
    return hasLunch || hasDinner
  })
}

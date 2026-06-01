export type LocationType = "restaurant" | "takeaway"
export type TakeAwayZone = "gba-oeste" | "caba" | "uruguay"

export interface LocationHours {
  label: string
  days: string
  time: string
}

export interface Location {
  id: string
  name: string
  address: string
  phone: string
  image: string
  type: LocationType
  zone: TakeAwayZone
  orderUrl: string
  mapsUrl: string
  hours: LocationHours[]
}

export const zones: { id: TakeAwayZone; label: string }[] = [
  { id: "gba-oeste", label: "GBA OESTE" },
  { id: "caba", label: "CABA" },
  { id: "uruguay", label: "URUGUAY" },
]

export const locations: Location[] = [
  {
    id: "bellavista",
    name: "Bellavista",
    address: "Av. Bellavista 1234",
    phone: "11 5555-0000",
    image: "/images/location-bellavista.jpg",
    type: "restaurant",
    zone: "gba-oeste",
    orderUrl: "https://pedir.suteki.com.ar/menu/SutekiSalad",
    mapsUrl: "https://maps.app.goo.gl/QhAVCBELa3WBoiq16",
    hours: [
      { label: "Mediodías", days: "Lun a Vier", time: "12:00 a 15:00" },
      { label: "Noche", days: "Mar a Dom", time: "19:30 a 23:30" },
    ],
  },
  {
    id: "hurlingham",
    name: "Hurlingham",
    address: "Isabel la Católica 913",
    phone: "11 6854-5739",
    image: "/images/location-hurlingham.jpg",
    type: "takeaway",
    zone: "gba-oeste",
    orderUrl: "https://pedir.suteki.com.ar/menu/SutekiSalad",
    mapsUrl: "https://maps.app.goo.gl/JmMQqqoKEjue9n788",
    hours: [
      { label: "Mediodías", days: "Lun a Vier", time: "11:00 a 14:30" },
      { label: "Noche", days: "Mar a Dom", time: "19:00 a 23:00" },
    ],
  },
  {
    id: "castelar",
    name: "Castelar",
    address: "Arias 2926",
    phone: "11 2344-6005",
    image: "/images/location-castelar.jpg",
    type: "takeaway",
    zone: "gba-oeste",
    orderUrl: "https://pedir.suteki.com.ar/menu/SutekiSalad",
    mapsUrl: "https://maps.app.goo.gl/MfEWLDoH6wueLWbg9",
    hours: [
      { label: "Mediodías", days: "Lun a Vier", time: "11:00 a 14:30" },
      { label: "Noche", days: "Mar a Dom", time: "19:00 a 23:00" },
    ],
  },
  {
    id: "ramos-mejia",
    name: "Ramos Mejía",
    address: "Necochea 699",
    phone: "11 7830-4865",
    image: "/images/location-ramos-mejia.jpg",
    type: "takeaway",
    zone: "gba-oeste",
    orderUrl: "https://pedir.suteki.com.ar/menu/SutekiSalad",
    mapsUrl: "https://maps.app.goo.gl/7enyxrCSnQAu3nbG7",
    hours: [
      { label: "Noche", days: "Mar a Dom", time: "19:00 a 23:00" },
    ],
  },
  {
    id: "villa-devoto",
    name: "Villa Devoto",
    address: "Av. Francisco Beiró 4500",
    phone: "11 5555-0101",
    image: "/images/location-villa-devoto.jpg",
    type: "takeaway",
    zone: "caba",
    orderUrl: "https://pedir.suteki.com.ar/menu/SutekiSalad",
    mapsUrl: "https://maps.app.goo.gl/mtJWatkSo9hrkz5f9",
    hours: [
      { label: "Mediodías", days: "Lun a Vier", time: "12:00 a 15:00" },
      { label: "Noche", days: "Mar a Dom", time: "19:30 a 23:30" },
    ],
  },
  {
    id: "nuevo-pocitos",
    name: "Nuevo Pocitos",
    address: "Av. Brasil 2800, Montevideo",
    phone: "099 555 013",
    image: "/images/location-montevideo.jpg",
    type: "takeaway",
    zone: "uruguay",
    orderUrl: "https://pedir.tucan.la/menu/SutekiSushiUY",
    mapsUrl: "https://maps.app.goo.gl/ch2ScBZrFZAY9bKv9",
    hours: [
      { label: "Mediodías", days: "Mié a Dom", time: "12:00 a 15:30" },
      { label: "Noche", days: "Mié a Dom", time: "19:30 a 23:30" },
    ],
  },
  {
    id: "malvin",
    name: "Malvín",
    address: "Av. Italia 6600, Montevideo",
    phone: "099 555 012",
    image: "/images/location-malvin.jpg",
    type: "takeaway",
    zone: "uruguay",
    orderUrl: "https://pedir.tucan.la/menu/SutekiSushiUY",
    mapsUrl: "https://maps.app.goo.gl/1oxBGQ2B9ebdthUaA",
    hours: [
      { label: "Mediodías", days: "Mié a Dom", time: "12:00 a 15:30" },
      { label: "Noche", days: "Mié a Dom", time: "19:30 a 23:30" },
    ],
  },
]

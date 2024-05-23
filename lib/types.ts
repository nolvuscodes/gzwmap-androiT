import { LatLngTuple } from "leaflet"

export type vendor = {
  name: string
}

export type faction = {
  id: string
  name: string
  shorthand: string
  description: string
  position: [number, number]
  image: string
  types: MarkerType[]
};

export type lz = {
  id: string
  name: string
  position: [number, number]
  discoverable: boolean
  types: MarkerType[]
  faction?: faction
};

export type location = {
  id: string
  name: string
  position: [number, number]
  objectives: objective[]
  pois: poi[]
  types: MarkerType[]
};

export type poi = {
  id: string
  name: string
  position: [number, number]
  types: MarkerType[]
}

export enum MarkerType {
  // Generic
  TASK = "Task",
  LZ = "Landing Zone",
  LOCATION = "Location",
  POI = "Place of Interest",

  // Factions
  LRI = "Lamang Recovery Initiative",
  MSS = "Mithras Security Systems",
  CSI ="Crimson Shield International",

  // Vendors
  HANDSHAKE = "Handshake",
  GUNNY = "Gunny",
  LABRAT = "Lab Rat",
  ARTISAN = "Artisan",
  TURNCOAT = "Turncoat",
  BANSHEE = "Banshee",

  // Locations
  PHALANG = "Pha Lang",
  NAMTHAVEN = "Nam Thaven",
  KIUVONGSA = "Kiu Vongsa",
  BANPA = "Ban Pa",
  HUNTERSPARADISE = "Hunter's Paradise",
  YBL1 = "YBL-1",
  BLUELAGOON = "Blue Lagoon",
  SAWMILL = "Sawmill",
  PHALANGAIRFIELD = "Pha Lang Airfield",
  FORTNARITH = "Fort Narith",
  MIDNIGHTSAPPHIRE = "Midnight Sapphire",
  TIGERBAY = "Tiger Bay",

  // Task varients
  COLLECT = "Collect",
  MARK = "Mark",
  STASH = "Stash",
  ELIMINATION = "Elimination",
  LOCATE = "Locate",
  HACK = "Hack",
}

export enum ObjectiveType {
  COLLECT = "Collect",
  MARK = "Mark",
  STASH = "Stash",
  ELIMINATION = "Elimination",
  LOCATE = "Locate",
  HACK = "Hack",
}

export type task = {
  id: string
  name: string
  briefing?: string
  debriefing?: string
  note?: string
  objectives: objective[]
  vendor: vendor
  level: number
  prerequisites?: task
  items?: item[]
  key?: key
  faction?: faction
};

export type objective = {
  id: string
  name: string
  description: string
  position: [number, number]
  type: ObjectiveType
  types: MarkerType[]
  faction?: faction
  image?: string
  note?: string
}

export type item = {
  id: string
  name: string
  description: string
  vendor: vendor
}

export type key = {
  id: string
  name: string
  locations: location[]
  position: LatLngTuple
}
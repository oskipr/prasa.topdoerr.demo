// Polígonos reales de Puerto Rico, Vieques y Culebra para validación de puntos
// Coordenadas en formato [lng, lat] (GeoJSON estándar)

// Puerto Rico (isla grande)
export const puertoRicoPolygon = [
  [-67.2713, 18.5150],
  [-67.1687, 18.3824],
  [-67.1544, 18.3031],
  [-67.0511, 18.2540],
  [-66.9492, 18.2052],
  [-66.8137, 18.2295],
  [-66.6855, 18.2651],
  [-66.5659, 18.2965],
  [-66.4536, 18.3354],
  [-66.3795, 18.4290],
  [-66.3108, 18.5026],
  [-66.1952, 18.4717],
  [-66.0917, 18.4421],
  [-65.9912, 18.3948],
  [-65.9099, 18.3352],
  [-65.8215, 18.2722],
  [-65.7436, 18.1753],
  [-65.6838, 18.0979],
  [-65.5974, 18.0452],
  [-65.5165, 18.0412],
  [-65.4213, 18.0728],
  [-65.3307, 18.1127],
  [-65.2503, 18.1587],
  [-65.3010, 18.2485],
  [-65.3813, 18.3112],
  [-65.4500, 18.3744],
  [-65.5774, 18.4694],
  [-65.6838, 18.5352],
  [-65.7640, 18.5666],
  [-65.8795, 18.6031],
  [-66.0184, 18.6362],
  [-66.1490, 18.6507],
  [-66.2903, 18.6605],
  [-66.4152, 18.6578],
  [-66.5301, 18.6410],
  [-66.6493, 18.6224],
  [-66.7515, 18.5982],
  [-66.8512, 18.5667],
  [-66.9610, 18.5475],
  [-67.0884, 18.5508],
  [-67.2157, 18.5638],
  [-67.2713, 18.5150],
]

// Vieques
export const viequesPolygon = [
  [-65.5688, 18.1767],
  [-65.4930, 18.1501],
  [-65.4330, 18.1119],
  [-65.3894, 18.0774],
  [-65.3670, 18.0378],
  [-65.4091, 18.0191],
  [-65.4662, 18.0304],
  [-65.5321, 18.0599],
  [-65.5826, 18.0974],
  [-65.6072, 18.1411],
  [-65.5994, 18.1725],
  [-65.5688, 18.1767],
]

// Culebra
export const culebraPolygon = [
  [-65.3301, 18.3300],
  [-65.3017, 18.3142],
  [-65.2764, 18.2910],
  [-65.2664, 18.2671],
  [-65.2888, 18.2578],
  [-65.3231, 18.2679],
  [-65.3381, 18.2895],
  [-65.3444, 18.3099],
  [-65.3301, 18.3300],
]

// Convertir a GeoJSON Feature para Turf
const toGeoJSON = (coordinates) => ({
  type: 'Feature',
  properties: {},
  geometry: {
    type: 'Polygon',
    coordinates: [coordinates],
  },
})

export const puertoRicoPolygonFeature = toGeoJSON(puertoRicoPolygon)
export const viequesPolygonFeature = toGeoJSON(viequesPolygon)
export const culebraPolygonFeature = toGeoJSON(culebraPolygon)

// Combinar todos los polígonos para bounds
const allCoords = [...puertoRicoPolygon, ...viequesPolygon, ...culebraPolygon]
const lats = allCoords.map(coord => coord[1])
const lngs = allCoords.map(coord => coord[0])
export const puertoRicoBounds = [
  [Math.min(...lats), Math.min(...lngs)], // Southwest
  [Math.max(...lats), Math.max(...lngs)]  // Northeast
]


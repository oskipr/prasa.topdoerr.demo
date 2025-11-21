// Dataset de puntos de infraestructura PRASA
// Puntos reales dentro de Puerto Rico, Vieques y Culebra

const regions = ['Metro', 'Norte', 'Sur', 'Este', 'Oeste', 'Centro']
const estados = ['Operativo', 'Mantenimiento', 'Alerta', 'Crítico']

// Nombres por tipo para generar nombres descriptivos
const nombresPlantas = ['Planta Carraízo', 'Planta Filtros', 'Planta Norte', 'Planta Sur', 'Planta Este', 'Planta Oeste', 'Planta Central', 'Planta Metro']
const nombresBombas = ['Estación Metro', 'Estación Río Blanco', 'Estación Este', 'Estación Oeste', 'Estación Norte', 'Estación Sur', 'Bomba Principal', 'Bomba Secundaria']
const nombresTanques = ['Tanque Norte', 'Tanque Sur', 'Tanque Este', 'Tanque Oeste', 'Tanque Metro', 'Tanque Central', 'Reservorio Principal', 'Reservorio Secundario']
const tiposSensor = ['Químico', 'Presión', 'Flujo', 'Nivel', 'Calidad']

// Función para generar nombre basado en tipo e índice
function generateName(type, index, island) {
  const typeLower = type.toLowerCase()
  const islandPrefix = island === 'PR' ? '' : island === 'VQ' ? 'Vieques - ' : 'Culebra - '
  
  if (typeLower === 'planta') {
    return `${islandPrefix}${nombresPlantas[index % nombresPlantas.length]}`
  } else if (typeLower === 'bomba') {
    return `${islandPrefix}${nombresBombas[index % nombresBombas.length]}`
  } else if (typeLower === 'tanque') {
    return `${islandPrefix}${nombresTanques[index % nombresTanques.length]}`
  } else if (typeLower === 'sensor') {
    return `${islandPrefix}Sensor ${tiposSensor[index % tiposSensor.length]}`
  }
  return `${islandPrefix}${type} ${index + 1}`
}

// Función para determinar región basada en latitud/longitud
function getRegionByLocation(lat, lng) {
  // Puerto Rico se divide aproximadamente en:
  // Norte: lat > 18.3
  // Sur: lat < 18.2
  // Este: lng > -65.8
  // Oeste: lng < -67.0
  // Metro: 18.2 < lat < 18.3 && -66.3 < lng < -66.0
  
  if (lat > 18.3) return 'Norte'
  if (lat < 18.2) return 'Sur'
  if (lng > -65.8) return 'Este'
  if (lng < -67.0) return 'Oeste'
  if (lat >= 18.2 && lat <= 18.3 && lng >= -66.3 && lng <= -66.0) return 'Metro'
  return 'Centro'
}

// Dataset de puntos de infraestructura (primeros 80 puntos proporcionados)
export const prasaInfrastructurePoints = [
  {
    "id": "PR-001",
    "type": "planta",
    "island": "PR",
    "lat": 18.18003,
    "lng": -66.71787
  },
  {
    "id": "PR-002",
    "type": "tanque",
    "island": "PR",
    "lat": 18.27698,
    "lng": -66.05558
  },
  {
    "id": "PR-003",
    "type": "tanque",
    "island": "PR",
    "lat": 18.4042,
    "lng": -66.96992
  },
  {
    "id": "PR-004",
    "type": "sensor",
    "island": "PR",
    "lat": 18.11188,
    "lng": -66.64667
  },
  {
    "id": "PR-005",
    "type": "tanque",
    "island": "PR",
    "lat": 18.34623,
    "lng": -66.365
  },
  {
    "id": "PR-006",
    "type": "sensor",
    "island": "PR",
    "lat": 18.37693,
    "lng": -65.73142
  },
  {
    "id": "PR-007",
    "type": "bomba",
    "island": "PR",
    "lat": 18.39312,
    "lng": -66.97711
  },
  {
    "id": "PR-008",
    "type": "sensor",
    "island": "PR",
    "lat": 18.38039,
    "lng": -66.88835
  },
  {
    "id": "PR-009",
    "type": "tanque",
    "island": "PR",
    "lat": 18.21433,
    "lng": -66.35746
  },
  {
    "id": "PR-010",
    "type": "planta",
    "island": "PR",
    "lat": 18.12737,
    "lng": -66.57302
  },
  {
    "id": "PR-011",
    "type": "sensor",
    "island": "PR",
    "lat": 18.32977,
    "lng": -66.64435
  },
  {
    "id": "PR-012",
    "type": "sensor",
    "island": "PR",
    "lat": 18.39924,
    "lng": -66.25232
  },
  {
    "id": "PR-013",
    "type": "sensor",
    "island": "PR",
    "lat": 18.42355,
    "lng": -66.00646
  },
  {
    "id": "PR-014",
    "type": "bomba",
    "island": "PR",
    "lat": 18.20372,
    "lng": -66.44995
  },
  {
    "id": "PR-015",
    "type": "bomba",
    "island": "PR",
    "lat": 18.41567,
    "lng": -66.36803
  },
  {
    "id": "PR-016",
    "type": "sensor",
    "island": "PR",
    "lat": 18.38911,
    "lng": -66.24146
  },
  {
    "id": "PR-017",
    "type": "planta",
    "island": "PR",
    "lat": 18.31465,
    "lng": -66.03755
  },
  {
    "id": "PR-018",
    "type": "sensor",
    "island": "PR",
    "lat": 18.40023,
    "lng": -66.68256
  },
  {
    "id": "PR-019",
    "type": "sensor",
    "island": "PR",
    "lat": 18.25781,
    "lng": -66.24626
  },
  {
    "id": "PR-020",
    "type": "planta",
    "island": "PR",
    "lat": 18.1918,
    "lng": -66.92516
  },
  {
    "id": "PR-021",
    "type": "sensor",
    "island": "PR",
    "lat": 18.22135,
    "lng": -66.70525
  },
  {
    "id": "PR-022",
    "type": "planta",
    "island": "PR",
    "lat": 18.31023,
    "lng": -66.46772
  },
  {
    "id": "PR-023",
    "type": "sensor",
    "island": "PR",
    "lat": 18.33716,
    "lng": -66.14137
  },
  {
    "id": "PR-024",
    "type": "sensor",
    "island": "PR",
    "lat": 18.36753,
    "lng": -66.14041
  },
  {
    "id": "PR-025",
    "type": "bomba",
    "island": "PR",
    "lat": 18.24671,
    "lng": -66.62004
  },
  {
    "id": "PR-026",
    "type": "tanque",
    "island": "PR",
    "lat": 18.4148,
    "lng": -66.73088
  },
  {
    "id": "PR-027",
    "type": "sensor",
    "island": "PR",
    "lat": 18.32693,
    "lng": -66.8896
  },
  {
    "id": "PR-028",
    "type": "sensor",
    "island": "PR",
    "lat": 18.21158,
    "lng": -66.20528
  },
  {
    "id": "PR-029",
    "type": "tanque",
    "island": "PR",
    "lat": 18.34798,
    "lng": -66.01526
  },
  {
    "id": "PR-030",
    "type": "sensor",
    "island": "PR",
    "lat": 18.26663,
    "lng": -66.68406
  },
  {
    "id": "PR-031",
    "type": "bomba",
    "island": "PR",
    "lat": 18.28974,
    "lng": -66.29782
  },
  {
    "id": "PR-032",
    "type": "sensor",
    "island": "PR",
    "lat": 18.30783,
    "lng": -65.74596
  },
  {
    "id": "PR-033",
    "type": "sensor",
    "island": "PR",
    "lat": 18.20793,
    "lng": -66.59103
  },
  {
    "id": "PR-034",
    "type": "bomba",
    "island": "PR",
    "lat": 18.39778,
    "lng": -66.83276
  },
  {
    "id": "PR-035",
    "type": "sensor",
    "island": "PR",
    "lat": 18.27429,
    "lng": -66.35217
  },
  {
    "id": "PR-036",
    "type": "sensor",
    "island": "PR",
    "lat": 18.30848,
    "lng": -66.12268
  },
  {
    "id": "PR-037",
    "type": "planta",
    "island": "PR",
    "lat": 18.33668,
    "lng": -66.28954
  },
  {
    "id": "PR-038",
    "type": "planta",
    "island": "PR",
    "lat": 18.35762,
    "lng": -66.78206
  },
  {
    "id": "PR-039",
    "type": "sensor",
    "island": "PR",
    "lat": 18.22633,
    "lng": -66.70935
  },
  {
    "id": "PR-040",
    "type": "sensor",
    "island": "PR",
    "lat": 18.37977,
    "lng": -66.61801
  },
  {
    "id": "PR-041",
    "type": "planta",
    "island": "PR",
    "lat": 18.1424,
    "lng": -66.71193
  },
  {
    "id": "PR-042",
    "type": "sensor",
    "island": "PR",
    "lat": 18.35578,
    "lng": -66.83516
  },
  {
    "id": "PR-043",
    "type": "bomba",
    "island": "PR",
    "lat": 18.22317,
    "lng": -66.315
  },
  {
    "id": "PR-044",
    "type": "tanque",
    "island": "PR",
    "lat": 18.36834,
    "lng": -66.83952
  },
  {
    "id": "PR-045",
    "type": "planta",
    "island": "PR",
    "lat": 18.24905,
    "lng": -66.62045
  },
  {
    "id": "PR-046",
    "type": "planta",
    "island": "PR",
    "lat": 18.19448,
    "lng": -66.93012
  },
  {
    "id": "PR-047",
    "type": "tanque",
    "island": "PR",
    "lat": 18.35329,
    "lng": -65.84747
  },
  {
    "id": "PR-048",
    "type": "bomba",
    "island": "PR",
    "lat": 18.18872,
    "lng": -66.01014
  },
  {
    "id": "PR-049",
    "type": "sensor",
    "island": "PR",
    "lat": 18.30601,
    "lng": -66.07988
  },
  {
    "id": "PR-050",
    "type": "tanque",
    "island": "PR",
    "lat": 18.15169,
    "lng": -66.91912
  },
  {
    "id": "PR-051",
    "type": "bomba",
    "island": "PR",
    "lat": 18.34681,
    "lng": -66.24539
  },
  {
    "id": "PR-052",
    "type": "bomba",
    "island": "PR",
    "lat": 18.36303,
    "lng": -66.81728
  },
  {
    "id": "PR-053",
    "type": "planta",
    "island": "PR",
    "lat": 18.23332,
    "lng": -66.54981
  },
  {
    "id": "PR-054",
    "type": "tanque",
    "island": "PR",
    "lat": 18.29992,
    "lng": -66.28671
  },
  {
    "id": "PR-055",
    "type": "tanque",
    "island": "PR",
    "lat": 18.26009,
    "lng": -66.48277
  },
  {
    "id": "PR-056",
    "type": "tanque",
    "island": "PR",
    "lat": 18.27209,
    "lng": -65.93004
  },
  {
    "id": "PR-057",
    "type": "planta",
    "island": "PR",
    "lat": 18.35324,
    "lng": -66.77596
  },
  {
    "id": "PR-058",
    "type": "bomba",
    "island": "PR",
    "lat": 18.12166,
    "lng": -66.6725
  },
  {
    "id": "PR-059",
    "type": "planta",
    "island": "PR",
    "lat": 18.31497,
    "lng": -66.42486
  },
  {
    "id": "PR-060",
    "type": "sensor",
    "island": "PR",
    "lat": 18.28715,
    "lng": -66.81073
  },
  {
    "id": "PR-061",
    "type": "planta",
    "island": "PR",
    "lat": 18.37032,
    "lng": -66.96166
  },
  {
    "id": "PR-062",
    "type": "sensor",
    "island": "PR",
    "lat": 18.22688,
    "lng": -65.94614
  },
  {
    "id": "PR-063",
    "type": "sensor",
    "island": "PR",
    "lat": 18.2942,
    "lng": -66.24558
  },
  {
    "id": "PR-064",
    "type": "bomba",
    "island": "PR",
    "lat": 18.31316,
    "lng": -66.61314
  },
  {
    "id": "PR-065",
    "type": "sensor",
    "island": "PR",
    "lat": 18.13933,
    "lng": -66.50764
  },
  {
    "id": "PR-066",
    "type": "sensor",
    "island": "PR",
    "lat": 18.21041,
    "lng": -65.97236
  },
  {
    "id": "PR-067",
    "type": "sensor",
    "island": "PR",
    "lat": 18.25536,
    "lng": -65.80346
  },
  {
    "id": "PR-068",
    "type": "planta",
    "island": "PR",
    "lat": 18.27246,
    "lng": -66.74904
  },
  {
    "id": "PR-069",
    "type": "sensor",
    "island": "PR",
    "lat": 18.38697,
    "lng": -66.33405
  },
  {
    "id": "PR-070",
    "type": "sensor",
    "island": "PR",
    "lat": 18.22794,
    "lng": -66.23165
  },
  {
    "id": "PR-071",
    "type": "planta",
    "island": "PR",
    "lat": 18.26308,
    "lng": -66.39196
  },
  {
    "id": "PR-072",
    "type": "bomba",
    "island": "PR",
    "lat": 18.23614,
    "lng": -66.39362
  },
  {
    "id": "PR-073",
    "type": "sensor",
    "island": "PR",
    "lat": 18.41313,
    "lng": -66.85703
  },
  {
    "id": "PR-074",
    "type": "sensor",
    "island": "PR",
    "lat": 18.3217,
    "lng": -66.19726
  },
  {
    "id": "PR-075",
    "type": "sensor",
    "island": "PR",
    "lat": 18.3004,
    "lng": -66.53939
  },
  {
    "id": "PR-076",
    "type": "sensor",
    "island": "PR",
    "lat": 18.32442,
    "lng": -66.63223
  },
  {
    "id": "PR-077",
    "type": "tanque",
    "island": "PR",
    "lat": 18.40243,
    "lng": -66.64282
  },
  {
    "id": "PR-078",
    "type": "sensor",
    "island": "PR",
    "lat": 18.30851,
    "lng": -66.70479
  },
  {
    "id": "PR-079",
    "type": "sensor",
    "island": "PR",
    "lat": 18.30902,
    "lng": -66.20676
  },
  {
    "id": "PR-080",
    "type": "bomba",
    "island": "PR",
    "lat": 18.21266,
    "lng": -66.49312
  },
  // Puntos adicionales con formato completo (name, region, status)
  { id: "PR-081", type: "planta", name: "Planta #0081 – Puerto Rico", region: "Oeste", status: "critico", lat: 18.280000, lng: -67.150000 },
  { id: "PR-082", type: "bomba", name: "Bomba #0082 – Puerto Rico", region: "Oeste", status: "normal", lat: 18.23632, lng: -66.297039 },
  { id: "PR-083", type: "tanque", name: "Tanque #0083 – Puerto Rico", region: "Noroeste", status: "riesgo", lat: 18.093796, lng: -66.143666 },
  { id: "PR-084", type: "sensor", name: "Sensor #0084 – Puerto Rico", region: "Este", status: "critico", lat: 18.027133, lng: -66.932699 },
  { id: "PR-085", type: "planta", name: "Planta #0085 – Puerto Rico", region: "Noroeste", status: "normal", lat: 18.450000, lng: -67.100000 },
  { id: "PR-086", type: "bomba", name: "Bomba #0086 – Puerto Rico", region: "Noroeste", status: "riesgo", lat: 18.420000, lng: -67.120000 },
  { id: "PR-087", type: "tanque", name: "Tanque #0087 – Puerto Rico", region: "Metro", status: "critico", lat: 18.451925, lng: -66.459377 },
  { id: "PR-088", type: "sensor", name: "Sensor #0088 – Puerto Rico", region: "Oeste", status: "normal", lat: 18.154644, lng: -67.109213 },
  { id: "PR-089", type: "planta", name: "Planta #0089 – Puerto Rico", region: "Noroeste", status: "riesgo", lat: 18.310000, lng: -67.150000 },
  { id: "PR-090", type: "bomba", name: "Bomba #0090 – Puerto Rico", region: "Noroeste", status: "critico", lat: 18.362251, lng: -67.22291 },
  { id: "PR-091", type: "tanque", name: "Tanque #0091 – Puerto Rico", region: "Noroeste", status: "normal", lat: 18.265000, lng: -67.130000 },
  { id: "PR-092", type: "sensor", name: "Sensor #0092 – Puerto Rico", region: "Noroeste", status: "riesgo", lat: 18.214197, lng: -66.87847 },
  { id: "PR-093", type: "planta", name: "Planta #0093 – Puerto Rico", region: "Oeste", status: "critico", lat: 18.140000, lng: -67.150000 },
  { id: "PR-094", type: "bomba", name: "Bomba #0094 – Puerto Rico", region: "Metro", status: "normal", lat: 18.32632, lng: -66.303832 },
  { id: "PR-095", type: "tanque", name: "Tanque #0095 – Puerto Rico", region: "Metro", status: "riesgo", lat: 18.38341, lng: -66.445523 },
  { id: "PR-096", type: "sensor", name: "Sensor #0096 – Puerto Rico", region: "Metro", status: "critico", lat: 18.339696, lng: -66.463212 },
  { id: "PR-097", type: "planta", name: "Planta #0097 – Puerto Rico", region: "Noroeste", status: "normal", lat: 18.39238, lng: -66.921889 },
  { id: "PR-098", type: "bomba", name: "Bomba #0098 – Puerto Rico", region: "Metro", status: "riesgo", lat: 18.445208, lng: -66.541564 },
  { id: "PR-099", type: "tanque", name: "Tanque #0099 – Puerto Rico", region: "Metro", status: "critico", lat: 18.315738, lng: -66.287034 },
  { id: "PR-100", type: "sensor", name: "Sensor #0100 – Puerto Rico", region: "Metro", status: "normal", lat: 18.44464, lng: -66.047964 },
  { id: "PR-101", type: "planta", name: "Planta #0101 – Puerto Rico", region: "Noroeste", status: "riesgo", lat: 18.399925, lng: -67.090339 },
  { id: "PR-102", type: "bomba", name: "Bomba #0102 – Puerto Rico", region: "Metro", status: "critico", lat: 18.434726, lng: -66.384819 },
  { id: "PR-103", type: "tanque", name: "Tanque #0103 – Puerto Rico", region: "Metro", status: "normal", lat: 18.448146, lng: -66.302028 },
  { id: "PR-104", type: "sensor", name: "Sensor #0104 – Puerto Rico", region: "Metro", status: "riesgo", lat: 18.336481, lng: -66.050611 },
  { id: "PR-105", type: "planta", name: "Planta #0105 – Puerto Rico", region: "Metro", status: "critico", lat: 18.472981, lng: -66.093209 },
  { id: "PR-106", type: "bomba", name: "Bomba #0106 – Puerto Rico", region: "Metro", status: "normal", lat: 18.364242, lng: -66.356913 },
  { id: "PR-107", type: "tanque", name: "Tanque #0107 – Puerto Rico", region: "Metro", status: "riesgo", lat: 18.323923, lng: -66.01694 },
  { id: "PR-108", type: "sensor", name: "Sensor #0108 – Puerto Rico", region: "Metro", status: "critico", lat: 18.421699, lng: -66.202391 },
  { id: "PR-109", type: "planta", name: "Planta #0109 – Puerto Rico", region: "Metro", status: "normal", lat: 18.457622, lng: -66.186053 },
  { id: "PR-110", type: "bomba", name: "Bomba #0110 – Puerto Rico", region: "Metro", status: "riesgo", lat: 18.3128, lng: -66.098215 },
  { id: "PR-111", type: "tanque", name: "Tanque #0111 – Puerto Rico", region: "Metro", status: "critico", lat: 18.429168, lng: -66.060389 },
  { id: "PR-112", type: "sensor", name: "Sensor #0112 – Puerto Rico", region: "Metro", status: "normal", lat: 18.404613, lng: -66.230004 },
  { id: "PR-113", type: "planta", name: "Planta #0113 – Puerto Rico", region: "Metro", status: "riesgo", lat: 18.332493, lng: -66.162692 },
  { id: "PR-114", type: "bomba", name: "Bomba #0114 – Puerto Rico", region: "Metro", status: "critico", lat: 18.37181, lng: -66.135364 },
  { id: "PR-115", type: "tanque", name: "Tanque #0115 – Puerto Rico", region: "Metro", status: "normal", lat: 18.347907, lng: -66.248837 },
  { id: "PR-116", type: "sensor", name: "Sensor #0116 – Puerto Rico", region: "Metro", status: "riesgo", lat: 18.42512, lng: -66.33258 },
  { id: "PR-117", type: "planta", name: "Planta #0117 – Puerto Rico", region: "Metro", status: "critico", lat: 18.458377, lng: -66.270424 },
  { id: "PR-118", type: "bomba", name: "Bomba #0118 – Puerto Rico", region: "Metro", status: "normal", lat: 18.387079, lng: -66.21194 },
  { id: "PR-119", type: "tanque", name: "Tanque #0119 – Puerto Rico", region: "Metro", status: "riesgo", lat: 18.314288, lng: -66.204888 },
  { id: "PR-120", type: "sensor", name: "Sensor #0120 – Puerto Rico", region: "Metro", status: "critico", lat: 18.350339, lng: -66.292779 },
  { id: "PR-121", type: "planta", name: "Planta #0121 – Puerto Rico", region: "Noroeste", status: "normal", lat: 18.334976, lng: -67.064187 },
  { id: "PR-122", type: "bomba", name: "Bomba #0122 – Puerto Rico", region: "Noroeste", status: "riesgo", lat: 18.425000, lng: -67.100000 },
  { id: "PR-123", type: "tanque", name: "Tanque #0123 – Puerto Rico", region: "Noroeste", status: "critico", lat: 18.39238, lng: -67.045381 },
  { id: "PR-124", type: "sensor", name: "Sensor #0124 – Puerto Rico", region: "Noroeste", status: "normal", lat: 18.276937, lng: -67.111308 },
  { id: "PR-125", type: "planta", name: "Planta #0125 – Puerto Rico", region: "Oeste", status: "riesgo", lat: 18.160000, lng: -67.150000 },
  { id: "PR-126", type: "bomba", name: "Bomba #0126 – Puerto Rico", region: "Oeste", status: "critico", lat: 18.135000, lng: -67.140000 },
  { id: "PR-127", type: "tanque", name: "Tanque #0127 – Puerto Rico", region: "Oeste", status: "normal", lat: 18.034267, lng: -67.143978 },
  { id: "PR-128", type: "sensor", name: "Sensor #0128 – Puerto Rico", region: "Oeste", status: "riesgo", lat: 18.027058, lng: -67.034921 },
  { id: "PR-129", type: "planta", name: "Planta #0129 – Puerto Rico", region: "Oeste", status: "critico", lat: 18.064251, lng: -67.010658 },
  { id: "PR-130", type: "bomba", name: "Bomba #0130 – Puerto Rico", region: "Oeste", status: "normal", lat: 18.004431, lng: -67.066333 },
  { id: "PR-131", type: "tanque", name: "Tanque #0131 – Puerto Rico", region: "Oeste", status: "riesgo", lat: 18.020000, lng: -67.150000 },
  { id: "PR-132", type: "sensor", name: "Sensor #0132 – Puerto Rico", region: "Oeste", status: "critico", lat: 18.088338, lng: -67.18143 },
  { id: "PR-133", type: "planta", name: "Planta #0133 – Puerto Rico", region: "Oeste", status: "normal", lat: 18.201099, lng: -67.141666 },
  { id: "PR-134", type: "bomba", name: "Bomba #0134 – Puerto Rico", region: "Oeste", status: "riesgo", lat: 18.210000, lng: -67.150000 },
  { id: "PR-135", type: "tanque", name: "Tanque #0135 – Puerto Rico", region: "Oeste", status: "critico", lat: 18.190000, lng: -67.150000 },
  { id: "PR-136", type: "sensor", name: "Sensor #0136 – Puerto Rico", region: "Oeste", status: "normal", lat: 18.180000, lng: -67.140000 },
  { id: "PR-137", type: "planta", name: "Planta #0137 – Puerto Rico", region: "Oeste", status: "riesgo", lat: 18.115673, lng: -67.122451 },
  { id: "PR-138", type: "bomba", name: "Bomba #0138 – Puerto Rico", region: "Oeste", status: "critico", lat: 18.054593, lng: -67.202882 },
  { id: "PR-139", type: "tanque", name: "Tanque #0139 – Puerto Rico", region: "Oeste", status: "normal", lat: 18.040000, lng: -67.150000 },
  { id: "PR-140", type: "sensor", name: "Sensor #0140 – Puerto Rico", region: "Oeste", status: "riesgo", lat: 18.010000, lng: -67.140000 },
  { id: "PR-141", type: "planta", name: "Planta #0141 – Puerto Rico", region: "Sur", status: "critico", lat: 17.989011, lng: -66.786843 },
  { id: "PR-142", type: "bomba", name: "Bomba #0142 – Puerto Rico", region: "Sur", status: "normal", lat: 17.986394, lng: -66.986967 },
  { id: "PR-143", type: "tanque", name: "Tanque #0143 – Puerto Rico", region: "Sur", status: "riesgo", lat: 18.015908, lng: -66.668265 },
  { id: "PR-144", type: "sensor", name: "Sensor #0144 – Puerto Rico", region: "Sur", status: "critico", lat: 18.088323, lng: -66.801996 },
  { id: "PR-145", type: "planta", name: "Planta #0145 – Puerto Rico", region: "Sur", status: "normal", lat: 17.974218, lng: -66.541493 },
  { id: "PR-146", type: "bomba", name: "Bomba #0146 – Puerto Rico", region: "Sur", status: "riesgo", lat: 18.027538, lng: -66.575657 },
  { id: "PR-147", type: "tanque", name: "Tanque #0147 – Puerto Rico", region: "Sur", status: "critico", lat: 18.030863, lng: -66.817201 },
  { id: "PR-148", type: "sensor", name: "Sensor #0148 – Puerto Rico", region: "Sur", status: "normal", lat: 18.063547, lng: -66.919393 },
  { id: "PR-149", type: "planta", name: "Planta #0149 – Puerto Rico", region: "Sur", status: "riesgo", lat: 18.097752, lng: -66.585913 },
  { id: "PR-150", type: "bomba", name: "Bomba #0150 – Puerto Rico", region: "Sur", status: "critico", lat: 18.077329, lng: -66.731784 },
  { id: "PR-151", type: "tanque", name: "Tanque #0151 – Puerto Rico", region: "Sur", status: "normal", lat: 18.037058, lng: -66.873412 },
  { id: "PR-152", type: "sensor", name: "Sensor #0152 – Puerto Rico", region: "Sur", status: "riesgo", lat: 18.0108, lng: -66.935223 },
  { id: "PR-153", type: "planta", name: "Planta #0153 – Puerto Rico", region: "Sur", status: "critico", lat: 18.025566, lng: -66.722481 },
  { id: "PR-154", type: "bomba", name: "Bomba #0154 – Puerto Rico", region: "Sur", status: "normal", lat: 17.977116, lng: -66.609267 },
  { id: "PR-155", type: "tanque", name: "Tanque #0155 – Puerto Rico", region: "Sur", status: "riesgo", lat: 17.950000, lng: -66.700000 },
  { id: "PR-156", type: "sensor", name: "Sensor #0156 – Puerto Rico", region: "Sur", status: "critico", lat: 17.950000, lng: -66.900000 },
  { id: "PR-157", type: "planta", name: "Planta #0157 – Puerto Rico", region: "Sur", status: "normal", lat: 17.950000, lng: -66.840000 },
  { id: "PR-158", type: "bomba", name: "Bomba #0158 – Puerto Rico", region: "Sur", status: "riesgo", lat: 17.950000, lng: -66.780000 },
  { id: "PR-159", type: "tanque", name: "Tanque #0159 – Puerto Rico", region: "Sur", status: "critico", lat: 17.959627, lng: -66.849187 },
  { id: "PR-160", type: "sensor", name: "Sensor #0160 – Puerto Rico", region: "Sur", status: "normal", lat: 17.969321, lng: -66.916285 },
  { id: "PR-161", type: "planta", name: "Planta #0161 – Puerto Rico", region: "Este", status: "riesgo", lat: 18.205437, lng: -65.951485 },
  { id: "PR-162", type: "bomba", name: "Bomba #0162 – Puerto Rico", region: "Este", status: "critico", lat: 18.240389, lng: -65.918578 },
  { id: "PR-163", type: "tanque", name: "Tanque #0163 – Puerto Rico", region: "Este", status: "normal", lat: 18.260186, lng: -65.799894 },
  { id: "PR-164", type: "sensor", name: "Sensor #0164 – Puerto Rico", region: "Este", status: "riesgo", lat: 18.247399, lng: -65.694854 },
  { id: "PR-165", type: "planta", name: "Planta #0165 – Puerto Rico", region: "Este", status: "critico", lat: 18.195021, lng: -65.724593 },
  { id: "PR-166", type: "bomba", name: "Bomba #0166 – Puerto Rico", region: "Este", status: "normal", lat: 18.150313, lng: -65.839641 },
  { id: "PR-167", type: "tanque", name: "Tanque #0167 – Puerto Rico", region: "Este", status: "riesgo", lat: 18.125907, lng: -65.915607 },
  { id: "PR-168", type: "sensor", name: "Sensor #0168 – Puerto Rico", region: "Este", status: "critico", lat: 18.172988, lng: -65.972799 },
  { id: "PR-169", type: "planta", name: "Planta #0169 – Puerto Rico", region: "Este", status: "normal", lat: 18.214907, lng: -65.87993 },
  { id: "PR-170", type: "bomba", name: "Bomba #0170 – Puerto Rico", region: "Este", status: "riesgo", lat: 18.250216, lng: -65.858268 },
  { id: "PR-171", type: "tanque", name: "Tanque #0171 – Puerto Rico", region: "Este", status: "critico", lat: 18.214059, lng: -65.812379 },
  { id: "PR-172", type: "sensor", name: "Sensor #0172 – Puerto Rico", region: "Este", status: "normal", lat: 18.173402, lng: -65.764211 },
  { id: "PR-173", type: "planta", name: "Planta #0173 – Puerto Rico", region: "Este", status: "riesgo", lat: 18.130000, lng: -65.750000 },
  { id: "PR-174", type: "bomba", name: "Bomba #0174 – Puerto Rico", region: "Este", status: "critico", lat: 18.095711, lng: -65.780441 },
  { id: "PR-175", type: "tanque", name: "Tanque #0175 – Puerto Rico", region: "Este", status: "normal", lat: 18.083272, lng: -65.862819 },
  { id: "PR-176", type: "sensor", name: "Sensor #0176 – Puerto Rico", region: "Este", status: "riesgo", lat: 18.110662, lng: -65.932663 },
  { id: "PR-177", type: "planta", name: "Planta #0177 – Puerto Rico", region: "Este", status: "critico", lat: 18.147278, lng: -65.902848 },
  { id: "PR-178", type: "bomba", name: "Bomba #0178 – Puerto Rico", region: "Este", status: "normal", lat: 18.184709, lng: -65.842553 },
  { id: "PR-179", type: "tanque", name: "Tanque #0179 – Puerto Rico", region: "Este", status: "riesgo", lat: 18.210222, lng: -65.811751 },
  { id: "PR-180", type: "sensor", name: "Sensor #0180 – Puerto Rico", region: "Este", status: "critico", lat: 18.226588, lng: -65.777004 },
  { id: "PR-181", type: "planta", name: "Planta #0181 – Puerto Rico", region: "Centro", status: "normal", lat: 18.22309, lng: -66.378997 },
  { id: "PR-182", type: "bomba", name: "Bomba #0182 – Puerto Rico", region: "Centro", status: "riesgo", lat: 18.216753, lng: -66.445627 },
  { id: "PR-183", type: "tanque", name: "Tanque #0183 – Puerto Rico", region: "Centro", status: "critico", lat: 18.177274, lng: -66.509777 },
  { id: "PR-184", type: "sensor", name: "Sensor #0184 – Puerto Rico", region: "Centro", status: "normal", lat: 18.145023, lng: -66.470777 },
  { id: "PR-185", type: "planta", name: "Planta #0185 – Puerto Rico", region: "Centro", status: "riesgo", lat: 18.194627, lng: -66.417763 },
  { id: "PR-186", type: "bomba", name: "Bomba #0186 – Puerto Rico", region: "Centro", status: "critico", lat: 18.248554, lng: -66.436566 },
  { id: "PR-187", type: "tanque", name: "Tanque #0187 – Puerto Rico", region: "Centro", status: "normal", lat: 18.266258, lng: -66.494082 },
  { id: "PR-188", type: "sensor", name: "Sensor #0188 – Puerto Rico", region: "Centro", status: "riesgo", lat: 18.244404, lng: -66.548413 },
  { id: "PR-189", type: "planta", name: "Planta #0189 – Puerto Rico", region: "Centro", status: "critico", lat: 18.208585, lng: -66.538683 },
  { id: "PR-190", type: "bomba", name: "Bomba #0190 – Puerto Rico", region: "Centro", status: "normal", lat: 18.168406, lng: -66.520191 },
  { id: "PR-191", type: "tanque", name: "Tanque #0191 – Puerto Rico", region: "Centro", status: "riesgo", lat: 18.141206, lng: -66.457115 },
  { id: "PR-192", type: "sensor", name: "Sensor #0192 – Puerto Rico", region: "Centro", status: "critico", lat: 18.159812, lng: -66.401114 },
  { id: "PR-193", type: "planta", name: "Planta #0193 – Puerto Rico", region: "Centro", status: "normal", lat: 18.19941, lng: -66.354608 },
  { id: "PR-194", type: "bomba", name: "Bomba #0194 – Puerto Rico", region: "Centro", status: "riesgo", lat: 18.237978, lng: -66.373552 },
  { id: "PR-195", type: "tanque", name: "Tanque #0195 – Puerto Rico", region: "Centro", status: "critico", lat: 18.260945, lng: -66.427819 },
  { id: "PR-196", type: "sensor", name: "Sensor #0196 – Puerto Rico", region: "Centro", status: "normal", lat: 18.23695, lng: -66.481108 },
  { id: "PR-197", type: "planta", name: "Planta #0197 – Puerto Rico", region: "Centro", status: "riesgo", lat: 18.206557, lng: -66.462289 },
  { id: "PR-198", type: "bomba", name: "Bomba #0198 – Puerto Rico", region: "Centro", status: "critico", lat: 18.180041, lng: -66.418155 },
  { id: "PR-199", type: "tanque", name: "Tanque #0199 – Puerto Rico", region: "Centro", status: "normal", lat: 18.176286, lng: -66.352683 },
  { id: "PR-200", type: "sensor", name: "Sensor #0200 – Puerto Rico", region: "Centro", status: "riesgo", lat: 18.210291, lng: -66.333908 },
  // Vieques (pocos puntos)
  { id: "PR-201", type: "planta", name: "Planta #0201 – Vieques", region: "Este", status: "critico", lat: 18.109221, lng: -65.448733 },
  { id: "PR-202", type: "bomba", name: "Bomba #0202 – Vieques", region: "Este", status: "normal", lat: 18.131228, lng: -65.432551 },
  { id: "PR-203", type: "tanque", name: "Tanque #0203 – Vieques", region: "Este", status: "riesgo", lat: 18.093418, lng: -65.421044 },
  { id: "PR-204", type: "sensor", name: "Sensor #0204 – Vieques", region: "Este", status: "critico", lat: 18.115746, lng: -65.470181 },
  // Culebra (muy pocos)
  { id: "PR-205", type: "planta", name: "Planta #0205 – Culebra", region: "Este", status: "normal", lat: 18.321377, lng: -65.303265 },
  { id: "PR-206", type: "bomba", name: "Bomba #0206 – Culebra", region: "Este", status: "riesgo", lat: 18.333889, lng: -65.281947 },
  { id: "PR-207", type: "tanque", name: "Tanque #0207 – Culebra", region: "Este", status: "critico", lat: 18.307865, lng: -65.292685 },
]

// Función para mapear status a estado
function mapStatusToEstado(status) {
  if (!status) return estados[0] // Default
  const statusLower = status.toLowerCase()
  if (statusLower === 'normal') return 'Operativo'
  if (statusLower === 'critico') return 'Crítico'
  if (statusLower === 'riesgo') return 'Alerta'
  return estados[0] // Default
}

// Función para determinar island si no está presente
function determineIsland(point) {
  if (point.island) return point.island
  // Determinar por nombre o coordenadas
  if (point.name) {
    if (point.name.includes('Vieques')) return 'VQ'
    if (point.name.includes('Culebra')) return 'CU'
  }
  // Determinar por coordenadas aproximadas
  // Vieques: lat ~18.1, lng ~-65.4
  // Culebra: lat ~18.3, lng ~-65.3
  if (point.lat >= 18.0 && point.lat <= 18.2 && point.lng >= -65.5 && point.lng <= -65.3) return 'VQ'
  if (point.lat >= 18.3 && point.lat <= 18.35 && point.lng >= -65.35 && point.lng <= -65.25) return 'CU'
  return 'PR' // Default
}

// Transformar los puntos al formato esperado por el componente
export const prasaMapData = prasaInfrastructurePoints.map((point, index) => {
  const typeLower = point.type.toLowerCase()
  const island = determineIsland(point)
  
  // Capitalizar tipo para coincidir con typeColors
  let typeFormatted
  if (typeLower === 'planta') {
    typeFormatted = 'Planta'
  } else if (typeLower === 'bomba') {
    typeFormatted = 'Bomba'
  } else if (typeLower === 'tanque') {
    typeFormatted = 'Tanque'
  } else if (typeLower === 'sensor') {
    // Para sensores, usar el tipo específico del nombre generado
    const sensorType = tiposSensor[index % tiposSensor.length]
    typeFormatted = `Sensor ${sensorType}`
  } else {
    typeFormatted = point.type.charAt(0).toUpperCase() + point.type.slice(1)
  }
  
  // Si el punto ya tiene name, region y status, usarlos directamente
  if (point.name && point.region && point.status) {
    return {
      id: point.id,
      name: point.name,
      type: typeFormatted,
      region: point.region,
      estado: mapStatusToEstado(point.status),
      lat: point.lat,
      lng: point.lng,
    }
  }
  
  // Si no, generar los valores como antes
  const typeCount = prasaInfrastructurePoints
    .slice(0, index + 1)
    .filter(p => {
      const pIsland = determineIsland(p)
      return p.type === point.type && pIsland === island
    }).length
  
  return {
    id: point.id,
    name: generateName(point.type, typeCount - 1, island),
    type: typeFormatted,
    region: point.region || getRegionByLocation(point.lat, point.lng),
    estado: point.status ? mapStatusToEstado(point.status) : estados[index % estados.length],
    lat: point.lat,
    lng: point.lng,
  }
})

// Configuración de colores por tipo
export const typeColors = {
  'Planta': '#2563eb',      // azul
  'Bomba': '#16a34a',       // verde
  'Tanque': '#dc2626',      // rojo
  'Sensor Químico': '#ea580c',  // anaranjado
  'Sensor Presión': '#ea580c',
  'Sensor Flujo': '#ea580c',
  'Sensor Nivel': '#ea580c',
  'Sensor Calidad': '#ea580c',
}

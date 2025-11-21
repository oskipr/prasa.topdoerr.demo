import React, { useEffect, useMemo } from 'react'
import { MapContainer, TileLayer, CircleMarker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { booleanPointInPolygon } from '@turf/turf'
import { prasaMapData, typeColors } from '../data/prasaMapData'
import { puertoRicoPolygonFeature, puertoRicoBounds } from '../data/puertoRicoPolygon'

// Fix para iconos de Leaflet en React
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

// Componente para ajustar el viewport del mapa
const MapBounds = () => {
  const map = useMap()
  useEffect(() => {
    map.fitBounds(puertoRicoBounds, { padding: [20, 20] })
  }, [map])
  return null
}

const OperationalMap = () => {
  // Los puntos ya están filtrados por polígono en la generación, solo usar directamente
  const filteredPoints = useMemo(() => {
    return prasaMapData
  }, [])

  const getColorForType = (type) => {
    if (type.startsWith('Sensor')) {
      return typeColors['Sensor Químico']
    }
    return typeColors[type] || '#6b7280'
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Mapa Operacional</h2>
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Mapa de Puerto Rico - Infraestructura</h3>
        </div>
        
        <div className="relative rounded-lg border border-gray-300 overflow-hidden" style={{ height: '400px' }}>
          <MapContainer
            center={[18.2, -66.3]}
            zoom={8}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={true}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <MapBounds />
            
            {filteredPoints.map((point) => {
              const color = getColorForType(point.type)
              return (
                <CircleMarker
                  key={point.id}
                  center={[point.lat, point.lng]}
                  radius={4}
                  pathOptions={{
                    fillColor: color,
                    fillOpacity: 0.65,
                    color: '#000000',
                    weight: 1,
                    opacity: 0.7,
                  }}
                >
                  <Popup>
                    <div className="text-sm">
                      <p className="font-semibold text-gray-900">{point.name}</p>
                      <p className="text-gray-600 mt-1">
                        <span className="font-medium">Tipo:</span> {point.type}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Región:</span> {point.region}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Estado:</span> {point.estado}
                      </p>
                    </div>
                  </Popup>
                </CircleMarker>
              )
            })}
          </MapContainer>
          
          {/* Leyenda personalizada */}
          <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg border border-gray-300 p-3 z-[1000]">
            <h4 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Leyenda</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: typeColors['Planta'] }}></div>
                <span className="text-xs text-gray-700 font-medium">Plantas</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: typeColors['Bomba'] }}></div>
                <span className="text-xs text-gray-700 font-medium">Bombas</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: typeColors['Tanque'] }}></div>
                <span className="text-xs text-gray-700 font-medium">Tanques</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: typeColors['Sensor Químico'] }}></div>
                <span className="text-xs text-gray-700 font-medium">Sensores</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OperationalMap

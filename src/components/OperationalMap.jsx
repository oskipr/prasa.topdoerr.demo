import React from 'react'

const OperationalMap = () => {
  const stats = [
    {
      label: 'Estaciones activas',
      value: '1,517',
      icon: '🏭',
      color: 'text-blue-600',
    },
    {
      label: 'Alertas activas',
      value: '123',
      icon: '🔔',
      color: 'text-yellow-600',
    },
    {
      label: 'Alarmas críticas',
      value: '17',
      icon: '🚨',
      color: 'text-red-600',
    },
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Mapa Operacional</h2>
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Mapa de Puerto Rico - Infraestructura</h3>
          <div className="flex items-center space-x-4 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full border border-gray-300"></div>
              <span className="text-gray-700 font-medium">Plantas</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-600 rounded-full border border-gray-300"></div>
              <span className="text-gray-700 font-medium">Bombas</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full border border-gray-300"></div>
              <span className="text-gray-700 font-medium">Tanques</span>
            </div>
          </div>
        </div>
        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg h-[500px] border border-gray-300 overflow-hidden">
          {/* Grid técnico de fondo */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
          
          {/* Contorno aproximado de Puerto Rico */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M 20 30 L 25 25 L 30 28 L 35 25 L 40 30 L 45 28 L 50 35 L 55 40 L 60 45 L 65 50 L 70 55 L 75 60 L 70 65 L 65 70 L 60 75 L 55 80 L 50 85 L 45 80 L 40 75 L 35 70 L 30 65 L 25 60 L 20 55 L 15 50 L 20 40 Z"
              fill="rgba(59, 130, 246, 0.1)"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="0.5"
            />
          </svg>
          
          {/* Plantas - Azul */}
          <div className="absolute top-[25%] left-[20%] group">
            <div className="w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-md cursor-pointer"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">Planta Carraízo</div>
            </div>
          </div>
          <div className="absolute top-[35%] right-[25%] group">
            <div className="w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-md cursor-pointer"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">Planta Filtros</div>
            </div>
          </div>
          
          {/* Estaciones de bombeo - Verde */}
          <div className="absolute top-[30%] right-[30%] group">
            <div className="w-3 h-3 bg-green-600 rounded-full border-2 border-white shadow-md cursor-pointer"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">Est. Río Blanco</div>
            </div>
          </div>
          <div className="absolute bottom-[30%] left-[30%] group">
            <div className="w-3 h-3 bg-green-600 rounded-full border-2 border-white shadow-md cursor-pointer"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">Est. Metro</div>
            </div>
          </div>
          <div className="absolute top-[50%] right-[20%] group">
            <div className="w-3 h-3 bg-green-600 rounded-full border-2 border-white shadow-md cursor-pointer"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">Est. Este</div>
            </div>
          </div>
          
          {/* Tanques - Naranja */}
          <div className="absolute bottom-[35%] left-[50%] group">
            <div className="w-3 h-3 bg-orange-500 rounded-full border-2 border-white shadow-md cursor-pointer"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">Tanque Norte</div>
            </div>
          </div>
          <div className="absolute bottom-[25%] right-[35%] group">
            <div className="w-3 h-3 bg-orange-500 rounded-full border-2 border-white shadow-md cursor-pointer"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap">Tanque Sur</div>
            </div>
          </div>
          
          {/* Más puntos distribuidos */}
          <div className="absolute top-[20%] left-[40%] w-2 h-2 bg-green-600 rounded-full border border-white"></div>
          <div className="absolute top-[45%] left-[15%] w-2 h-2 bg-green-600 rounded-full border border-white"></div>
          <div className="absolute bottom-[40%] right-[15%] w-2 h-2 bg-green-600 rounded-full border border-white"></div>
          <div className="absolute top-[60%] left-[60%] w-2 h-2 bg-orange-500 rounded-full border border-white"></div>
          <div className="absolute bottom-[20%] left-[25%] w-2 h-2 bg-orange-500 rounded-full border border-white"></div>
        </div>
      </div>
    </div>
  )
}

export default OperationalMap


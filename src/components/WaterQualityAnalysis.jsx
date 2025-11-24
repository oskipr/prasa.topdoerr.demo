import React from 'react'
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts'

const WaterQualityAnalysis = () => {
  const qualityData = [
    { name: 'Cloro Residual', value: 1.2, unit: 'ppm', color: '#3b82f6' },
    { name: 'Turbidez', value: 0.9, unit: 'NTU', color: '#10b981' },
    { name: 'pH', value: 7.1, unit: '', color: '#8b5cf6' },
  ]

  const statusCards = [
    {
      location: 'Planta de Filtros',
      parameter: 'Cloro bajo',
      status: 'riesgo',
      statusColor: 'text-red-700 bg-red-50 border-red-200',
    },
    {
      location: 'Estación Metro',
      parameter: 'Turbidez estable',
      status: 'normal',
      statusColor: 'text-green-700 bg-green-50 border-green-200',
    },
    {
      location: 'Zona Norte',
      parameter: 'pH normal',
      status: 'normal',
      statusColor: 'text-green-700 bg-green-50 border-green-200',
    },
  ]

  return (
    <div>
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Análisis Químico / Calidad de Agua</h2>
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-5 md:p-6">
        <div className="mb-4 sm:mb-5 md:mb-6">
          <div className="h-[200px] sm:h-[220px] md:h-[250px] lg:h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={qualityData}>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Bar dataKey="value">
                  {qualityData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 sm:mt-4 grid grid-cols-3 gap-3 sm:gap-4">
            {qualityData.map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-xs sm:text-sm md:text-base font-medium text-gray-600">{item.name}</p>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mt-1">
                  {item.value} <span className="text-xs sm:text-sm md:text-base text-gray-600">{item.unit}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mt-4 sm:mt-5 md:mt-6">
          {statusCards.map((card, index) => (
            <div
              key={index}
              className={`rounded border-2 p-3 sm:p-4 ${card.statusColor}`}
            >
              <p className="font-semibold text-gray-900 text-xs sm:text-sm md:text-base mb-1">{card.location}</p>
              <p className="text-xs sm:text-sm text-gray-600">{card.parameter}</p>
              <span className={`inline-block mt-2 px-2 py-1 rounded text-xs font-medium ${
                card.status === 'riesgo' 
                  ? 'bg-red-200 text-red-800' 
                  : 'bg-green-200 text-green-800'
              }`}>
                {card.status === 'riesgo' ? 'Riesgo' : 'Normal'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WaterQualityAnalysis


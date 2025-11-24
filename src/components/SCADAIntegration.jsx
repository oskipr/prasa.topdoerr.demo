import React from 'react'

const SCADAIntegration = () => {
  const touchpoints = [
    { label: '1,500 touchpoints', color: 'bg-blue-100 text-blue-800 border-blue-300' },
    { label: '20,000 sensores', color: 'bg-green-100 text-green-800 border-green-300' },
    { label: 'API Gateway TopDoerr (mock)', color: 'bg-purple-100 text-purple-800 border-purple-300' },
  ]

  return (
    <div>
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Integración con SCADA – Wonderware / AVEVA</h2>
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-5 md:p-6">
        <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4">
          Conexión conceptual vía API para ingestión de telemetría operacional (nivel, presión, caudal, alarmas).
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {touchpoints.map((item, index) => (
            <span
              key={index}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-base font-medium border ${item.color}`}
            >
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SCADAIntegration


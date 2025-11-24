import React from 'react'

const ProductionFlow = () => {
  const flowSteps = [
    {
      label: 'Producción',
      value: 312,
      unit: 'M gal',
      color: 'bg-blue-600',
      percentage: 100,
    },
    {
      label: 'Distribución',
      value: 298,
      unit: 'M gal',
      color: 'bg-indigo-600',
      percentage: 95.5,
    },
    {
      label: 'Consumo',
      value: 284,
      unit: 'M gal',
      color: 'bg-green-600',
      percentage: 91.0,
    },
    {
      label: 'Pérdidas',
      value: 12.8,
      unit: '%',
      color: 'bg-red-600',
      percentage: 12.8,
    },
  ]

  return (
    <div>
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">
        Producción → Distribución → Consumo → Pérdidas
      </h2>
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-5 md:p-6 lg:p-8">
        <div className="space-y-3 sm:space-y-4 md:space-y-5">
          {flowSteps.map((step, index) => (
            <div key={index}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2 sm:gap-0">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className={`w-3 h-3 sm:w-4 sm:h-4 ${step.color} rounded-full flex-shrink-0`}></div>
                  <span className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-gray-700">{step.label}</span>
                </div>
                <div className="flex items-baseline space-x-2">
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900">{step.value}</span>
                  <span className="text-xs sm:text-sm md:text-base text-gray-600">{step.unit}</span>
                </div>
              </div>
              <div className="h-2.5 sm:h-3 md:h-4 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${step.color} transition-all`}
                  style={{ width: `${step.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductionFlow


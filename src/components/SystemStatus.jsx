import React from 'react'

const SystemStatus = () => {
  const statusItems = [
    {
      label: 'Plantas operando',
      value: '37/39',
      unit: '',
      color: 'text-blue-700',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      label: 'Estaciones de bombeo',
      value: '1,517',
      unit: 'activas',
      color: 'text-green-700',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      label: 'Tanques monitoreados',
      value: '286',
      unit: '',
      color: 'text-purple-700',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      label: 'Alarmas críticas del día',
      value: '17',
      unit: '',
      color: 'text-red-700',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
    },
  ]

  return (
    <div>
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Estado del Sistema (en tiempo real)</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {statusItems.map((item, index) => (
          <div
            key={index}
            className={`bg-white rounded border-2 ${item.borderColor} ${item.bgColor} p-3 sm:p-4 lg:p-5 shadow-sm`}
          >
            <p className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
              {item.label}
            </p>
            <div className="flex items-baseline">
              <span className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold ${item.color}`}>{item.value}</span>
              {item.unit && (
                <span className={`ml-2 text-xs sm:text-sm lg:text-base ${item.color} font-medium`}>{item.unit}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SystemStatus


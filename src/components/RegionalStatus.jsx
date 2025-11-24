import React from 'react'

const RegionalStatus = () => {
  const regions = [
    {
      name: 'Metro',
      percentage: 97,
      status: 'normal',
    },
    {
      name: 'Norte',
      percentage: 92,
      status: 'normal',
    },
    {
      name: 'Sur',
      percentage: 84,
      status: 'alert',
    },
    {
      name: 'Este',
      percentage: 95,
      status: 'normal',
    },
    {
      name: 'Oeste',
      percentage: 89,
      status: 'normal',
    },
  ]

  const getStatusColor = (status, percentage) => {
    if (status === 'alert' || percentage < 85) {
      return {
        bg: 'bg-orange-50',
        border: 'border-orange-300',
        text: 'text-orange-700',
        bar: 'bg-orange-500',
        barBg: 'bg-orange-100',
      }
    }
    return {
      bg: 'bg-green-50',
      border: 'border-green-300',
      text: 'text-green-700',
      bar: 'bg-green-500',
      barBg: 'bg-green-100',
    }
  }

  return (
    <div>
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Estado por Región</h2>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
        {regions.map((region, index) => {
          const colors = getStatusColor(region.status, region.percentage)
          return (
            <div
              key={index}
              className={`bg-white rounded border-2 ${colors.border} ${colors.bg} p-3 sm:p-4 lg:p-5 shadow-sm`}
            >
              <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-800 mb-2 sm:mb-3">{region.name}</p>
              <div className="mb-2">
                <div className="flex items-baseline justify-between mb-1">
                  <span className={`text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold ${colors.text}`}>
                    {region.percentage}%
                  </span>
                  <span className="text-xs sm:text-sm text-gray-600">sensores activos</span>
                </div>
                <div className={`h-2 sm:h-2.5 ${colors.barBg} rounded-full overflow-hidden`}>
                  <div
                    className={`h-full ${colors.bar} transition-all`}
                    style={{ width: `${region.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RegionalStatus


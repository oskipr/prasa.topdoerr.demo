import React from 'react'

const KPICards = () => {
  const kpis = [
    {
      title: 'Producción total (hoy)',
      value: '312M',
      unit: 'gal',
      icon: '💧',
      color: '#3B82F6',
      bgColor: 'bg-blue-500',
    },
    {
      title: 'Consumo total (hoy)',
      value: '284M',
      unit: 'gal',
      icon: '📊',
      color: '#10B981',
      bgColor: 'bg-green-500',
    },
    {
      title: 'Sensores activos',
      value: '18,945',
      unit: '',
      icon: '📡',
      color: '#6366F1',
      bgColor: 'bg-indigo-500',
    },
    {
      title: 'Pérdidas (NRW)',
      value: '12.8',
      unit: '%',
      icon: '⚠️',
      color: '#F59E0B',
      bgColor: 'bg-amber-500',
    },
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">KPIs Principales</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{kpi.icon}</span>
              <div className="w-12 h-12 rounded-lg opacity-20" style={{ backgroundColor: kpi.color }}></div>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-2">{kpi.title}</h3>
            <div className="flex items-baseline">
              <span className="text-3xl font-bold text-gray-900">{kpi.value}</span>
              {kpi.unit && (
                <span className="ml-2 text-lg text-gray-600">{kpi.unit}</span>
              )}
            </div>
            {kpi.title === 'Sensores activos' && (
              <p className="text-xs text-gray-500 mt-2">
                Integrados vía Wonderware/AVEVA + IoT TopDoerr
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default KPICards


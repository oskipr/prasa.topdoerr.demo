import React from 'react'

const PredictiveModules = () => {
  const modules = [
    {
      title: 'Falla de Bombas',
      subtitle: 'Análisis predictivo de mantenimiento',
      icon: '⚙',
      risks: [
        { name: 'Bomba #A-1247', location: 'Planta Carraízo', risk: 'Alto', status: 'critical' },
        { name: 'Bomba #B-0891', location: 'Estación Río Blanco', risk: 'Medio', status: 'warning' },
        { name: 'Bomba #C-2156', location: 'Planta Filtros', risk: 'Bajo', status: 'info' },
      ],
      color: 'border-gray-300 bg-gray-50',
      iconBg: 'bg-gray-100',
    },
    {
      title: 'Fugas Probables',
      subtitle: 'Detección mediante ML',
      icon: '●',
      risks: [
        { name: 'Zona Metro', location: 'San Juan', risk: 'Alto', status: 'critical' },
        { name: 'Zona Este', location: 'Carolina', risk: 'Medio', status: 'warning' },
        { name: 'Zona Oeste', location: 'Mayagüez', risk: 'Bajo', status: 'info' },
      ],
      color: 'border-gray-300 bg-gray-50',
      iconBg: 'bg-gray-100',
    },
    {
      title: 'Consumo Anómalo',
      subtitle: 'Análisis de patrones',
      icon: '▲',
      risks: [
        { name: 'Sector 12', location: 'Bayamón', risk: 'Alto', status: 'critical' },
        { name: 'Sector 8', location: 'Caguas', risk: 'Medio', status: 'warning' },
        { name: 'Sector 5', location: 'Ponce', risk: 'Bajo', status: 'info' },
      ],
      color: 'border-gray-300 bg-gray-50',
      iconBg: 'bg-gray-100',
    },
  ]

  const getRiskBadgeColor = (status) => {
    switch (status) {
      case 'critical':
        return { bg: '#FEE2E2', text: '#DC2626', border: '#FCA5A5' }
      case 'warning':
        return { bg: '#FEF3C7', text: '#F59E0B', border: '#FCD34D' }
      case 'info':
        return { bg: '#D1FAE5', text: '#10B981', border: '#6EE7B7' }
      default:
        return { bg: '#F3F4F6', text: '#6B7280', border: '#D1D5DB' }
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Módulos Predictivos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <div
            key={index}
            className={`bg-white rounded border ${module.color} p-5 shadow-sm hover:shadow-md transition-shadow`}
          >
            <div className="flex items-start justify-between mb-4 pb-4 border-b border-gray-200">
              <div className="flex items-center space-x-3 flex-1">
                <div className={`${module.iconBg} p-2 rounded border border-gray-300`}>
                  <span className="text-xl font-bold text-gray-700">{module.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-0.5">{module.title}</h3>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">{module.subtitle}</p>
                </div>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              {module.risks.map((risk, riskIndex) => {
                const badgeColors = getRiskBadgeColor(risk.status)
                return (
                  <div key={riskIndex}>
                    <div className="bg-white rounded border border-gray-200 p-3">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 text-sm">{risk.name}</p>
                          <p className="text-xs text-gray-500 mt-0.5 font-mono">{risk.location}</p>
                        </div>
                        <span
                          className="px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wide border ml-3"
                          style={{
                            backgroundColor: badgeColors.bg,
                            color: badgeColors.text,
                            borderColor: badgeColors.border,
                          }}
                        >
                          {risk.risk}
                        </span>
                      </div>
                    </div>
                    {riskIndex < module.risks.length - 1 && (
                      <div className="h-px bg-gray-200 my-2"></div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PredictiveModules


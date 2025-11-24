import React from 'react'

const AutomaticRecommendations = () => {
  const recommendations = [
    {
      id: 1,
      action: 'Ajustar dosificación de cloro en Planta Filtros',
      timeframe: 'inmediata',
      icon: '✓',
      priority: 'high',
    },
    {
      id: 2,
      action: 'Revisar válvula de control en Sector 12',
      timeframe: 'próxima visita',
      icon: '✓',
      priority: 'medium',
    },
    {
      id: 3,
      action: 'Programar análisis de laboratorio Zona Sur',
      timeframe: '48 hrs',
      icon: '✓',
      priority: 'medium',
    },
    {
      id: 4,
      action: 'Confirmar calibración de sensor de pH',
      timeframe: 'semanal',
      icon: '✓',
      priority: 'low',
    },
  ]

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return { border: 'border-l-orange-600', bg: 'bg-orange-50/20' }
      case 'medium':
        return { border: 'border-l-yellow-600', bg: 'bg-yellow-50/20' }
      case 'low':
        return { border: 'border-l-blue-600', bg: 'bg-blue-50/20' }
      default:
        return { border: 'border-l-gray-500', bg: 'bg-gray-50/20' }
    }
  }

  return (
    <div>
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Recomendaciones Automáticas (IA)</h2>
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-5 md:p-6">
        <div className="space-y-3 sm:space-y-4">
          {recommendations.map((rec) => {
            const priorityColors = getPriorityColor(rec.priority)
            return (
              <div
                key={rec.id}
                className={`border-l-4 ${priorityColors.border} ${priorityColors.bg} rounded-r-lg p-3 sm:p-4 hover:shadow-sm transition-shadow`}
              >
                <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                  <span className="text-xl sm:text-2xl text-green-600 flex-shrink-0">{rec.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-2 gap-2 sm:gap-0">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">{rec.action}</h3>
                      <span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700 border border-gray-300 self-start sm:self-auto">
                        {rec.timeframe}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AutomaticRecommendations


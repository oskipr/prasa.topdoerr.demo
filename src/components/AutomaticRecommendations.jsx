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
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Recomendaciones Automáticas (IA)</h2>
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <div className="space-y-4">
          {recommendations.map((rec) => {
            const priorityColors = getPriorityColor(rec.priority)
            return (
              <div
                key={rec.id}
                className={`border-l-4 ${priorityColors.border} ${priorityColors.bg} rounded-r-lg p-4 hover:shadow-sm transition-shadow`}
              >
                <div className="flex items-start space-x-4">
                  <span className="text-2xl text-green-600">{rec.icon}</span>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-gray-900">{rec.action}</h3>
                      <span className="px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-700 border border-gray-300">
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


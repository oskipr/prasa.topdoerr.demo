import React from 'react'

const IntelligentAlerts = () => {
  const alerts = [
    {
      id: 1,
      priority: 'critical',
      title: 'Presión crítica en Estación Río Blanco',
      description: 'La presión ha descendido por debajo del umbral mínimo en los últimos 15 minutos',
      time: 'Hace 5 min',
      location: 'Estación Río Blanco, Caguas',
      icon: '🚨',
    },
    {
      id: 2,
      priority: 'high',
      title: 'Consumo anómalo detectado en Sector 12',
      description: 'Incremento del 45% en el consumo comparado con el promedio histórico',
      time: 'Hace 12 min',
      location: 'Sector 12, Bayamón',
      icon: '⚠️',
    },
    {
      id: 3,
      priority: 'high',
      title: 'Sensor de calidad de agua offline',
      description: 'El sensor QW-7842 no ha reportado datos en las últimas 2 horas',
      time: 'Hace 18 min',
      location: 'Planta Carraízo, Trujillo Alto',
      icon: '📡',
    },
    {
      id: 4,
      priority: 'medium',
      title: 'Nivel de tanque bajo en Estación Metro',
      description: 'El nivel del tanque principal está al 28% de su capacidad',
      time: 'Hace 25 min',
      location: 'Estación Metro, San Juan',
      icon: '💧',
    },
    {
      id: 5,
      priority: 'medium',
      title: 'Posible fuga detectada en Zona Este',
      description: 'Análisis predictivo indica probabilidad del 72% de fuga activa',
      time: 'Hace 32 min',
      location: 'Zona Este, Carolina',
      icon: '🔍',
    },
    {
      id: 6,
      priority: 'low',
      title: 'Mantenimiento programado próximo',
      description: 'Bomba #A-1247 requiere mantenimiento preventivo en 48 horas',
      time: 'Hace 1 hora',
      location: 'Planta Filtros, San Juan',
      icon: '🔧',
    },
    {
      id: 7,
      priority: 'low',
      title: 'Actualización de firmware disponible',
      description: 'Nueva versión de firmware disponible para 15 sensores',
      time: 'Hace 2 horas',
      location: 'Sistema Central',
      icon: '💾',
    },
  ]

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'critical':
        return { border: 'border-l-red-600', bg: 'bg-red-50/20' }
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
  
  const getAlertIcon = (title) => {
    if (title.toLowerCase().includes('presión') || title.toLowerCase().includes('crítica')) {
      return '🔴'
    }
    if (title.toLowerCase().includes('consumo') || title.toLowerCase().includes('anómalo')) {
      return '📊'
    }
    if (title.toLowerCase().includes('sensor') || title.toLowerCase().includes('offline')) {
      return '📡'
    }
    if (title.toLowerCase().includes('nivel') || title.toLowerCase().includes('tanque')) {
      return '💧'
    }
    if (title.toLowerCase().includes('fuga')) {
      return '🔍'
    }
    if (title.toLowerCase().includes('mantenimiento')) {
      return '🔧'
    }
    if (title.toLowerCase().includes('firmware') || title.toLowerCase().includes('actualización')) {
      return '💾'
    }
    return '🔔'
  }

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'critical':
        return { text: 'Crítica', color: 'bg-red-100 text-red-800 border-red-300' }
      case 'high':
        return { text: 'Alta', color: 'bg-orange-100 text-orange-800 border-orange-300' }
      case 'medium':
        return { text: 'Media', color: 'bg-yellow-100 text-yellow-800 border-yellow-300' }
      case 'low':
        return { text: 'Baja', color: 'bg-blue-100 text-blue-800 border-blue-300' }
      default:
        return { text: 'Normal', color: 'bg-gray-100 text-gray-800 border-gray-300' }
    }
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Alertas Inteligentes</h2>
      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <div className="space-y-4">
          {alerts.map((alert) => {
            const badge = getPriorityBadge(alert.priority)
            const priorityColors = getPriorityColor(alert.priority)
            return (
              <div
                key={alert.id}
                className={`border-l-4 ${priorityColors.border} ${priorityColors.bg} rounded-r-lg p-4 hover:shadow-sm transition-shadow`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <span className="text-2xl">{getAlertIcon(alert.title)}</span>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-gray-900">{alert.title}</h3>
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium border ${badge.color}`}
                        >
                          {badge.text}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{alert.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>📍 {alert.location}</span>
                        <span>🕐 {alert.time}</span>
                      </div>
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

export default IntelligentAlerts


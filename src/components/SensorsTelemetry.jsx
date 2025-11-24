import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts'

const SensorsTelemetry = () => {
  // Datos para distribución de sensores
  const sensorDistribution = [
    { name: 'Presión', value: 6245, color: '#3b82f6' },
    { name: 'Flujo', value: 4850, color: '#10b981' },
    { name: 'Calidad', value: 3850, color: '#8b5cf6' },
    { name: 'Nivel', value: 4000, color: '#f59e0b' },
  ]

  // Datos para estado de telemetría
  const telemetryStatus = [
    { name: 'Activos', value: 16850, color: '#10b981' },
    { name: 'Caídos', value: 1520, color: '#ef4444' },
    { name: 'Sin datos', value: 575, color: '#f59e0b' },
  ]

  // Datos para gráfico de barras
  const barData = [
    { name: 'Lun', activos: 16850, caidos: 1520, sinDatos: 575 },
    { name: 'Mar', activos: 16920, caidos: 1480, sinDatos: 545 },
    { name: 'Mié', activos: 16830, caidos: 1540, sinDatos: 575 },
    { name: 'Jue', activos: 16890, caidos: 1500, sinDatos: 555 },
    { name: 'Vie', activos: 16850, caidos: 1520, sinDatos: 575 },
    { name: 'Sáb', activos: 16800, caidos: 1580, sinDatos: 565 },
    { name: 'Dom', activos: 16850, caidos: 1520, sinDatos: 575 },
  ]

  return (
    <div>
      <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">Sensores y Telemetría</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        {/* Distribución de sensores */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-5 md:p-6">
          <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-3 sm:mb-4">Distribución de Sensores</h3>
          <div className="h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] xl:h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sensorDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                >
                {sensorDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                </Pie>
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-3 sm:gap-4">
            {sensorDistribution.map((item, index) => (
              <div key={index} className="text-center p-2 sm:p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-1">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded flex-shrink-0" style={{ backgroundColor: item.color }}></div>
                  <span className="text-xs sm:text-sm font-medium text-gray-700">{item.name}</span>
                </div>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900">{item.value.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Estado de telemetría */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 sm:p-5 md:p-6">
          <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-3 sm:mb-4">Estado de Telemetría</h3>
          <div className="h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] xl:h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip />
                <Legend wrapperStyle={{ fontSize: '12px' }} />
                <Bar dataKey="activos" fill="#10b981" name="Activos" />
                <Bar dataKey="caidos" fill="#ef4444" name="Caídos" />
                <Bar dataKey="sinDatos" fill="#f59e0b" name="Sin datos" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 sm:mt-4 space-y-2 sm:space-y-3">
            {telemetryStatus.map((status, index) => (
              <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded flex-shrink-0" style={{ backgroundColor: status.color }}></div>
                  <span className="text-xs sm:text-sm md:text-base font-medium text-gray-700">{status.name}</span>
                </div>
                <span className="text-base sm:text-lg lg:text-xl font-bold text-gray-900">{status.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SensorsTelemetry


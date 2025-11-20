import React from 'react'
import InstitutionalHeader from './components/InstitutionalHeader'
import SystemStatus from './components/SystemStatus'
import RegionalStatus from './components/RegionalStatus'
import ProductionFlow from './components/ProductionFlow'
import KPICards from './components/KPICards'
import OperationalMap from './components/OperationalMap'
import SensorsTelemetry from './components/SensorsTelemetry'
import PredictiveModules from './components/PredictiveModules'
import IntelligentAlerts from './components/IntelligentAlerts'
import PRASAPipeline from './components/PRASAPipeline'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Institucional */}
      <InstitutionalHeader />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {/* Estado del Sistema */}
        <SystemStatus />

        {/* Estado por Región */}
        <RegionalStatus />

        {/* Producción → Distribución → Consumo → Pérdidas */}
        <ProductionFlow />

        {/* KPIs principales */}
        <KPICards />

        {/* Mapa operacional */}
        <OperationalMap />

        {/* Sensores y telemetría */}
        <SensorsTelemetry />

        {/* Módulos predictivos */}
        <PredictiveModules />

        {/* Alertas inteligentes */}
        <IntelligentAlerts />

        {/* Arquitectura del Sistema */}
        <PRASAPipeline />
      </main>
    </div>
  )
}

export default App


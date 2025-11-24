import React from 'react'
import InstitutionalHeader from './components/InstitutionalHeader'
import SystemStatus from './components/SystemStatus'
import SCADAIntegration from './components/SCADAIntegration'
import RegionalStatus from './components/RegionalStatus'
import ProductionFlow from './components/ProductionFlow'
import KPICards from './components/KPICards'
import OperationalMap from './components/OperationalMap'
import SensorsTelemetry from './components/SensorsTelemetry'
import WaterQualityAnalysis from './components/WaterQualityAnalysis'
import PredictiveModules from './components/PredictiveModules'
import IntelligentAlerts from './components/IntelligentAlerts'
import AutomaticRecommendations from './components/AutomaticRecommendations'
import PRASAPipeline from './components/PRASAPipeline'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Institucional */}
      <InstitutionalHeader />

      {/* Main Content */}
      <main className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-4 sm:py-5 md:py-6 space-y-4 sm:space-y-5 md:space-y-6">
        {/* Estado del Sistema */}
        <SystemStatus />

        {/* Integración con SCADA */}
        <SCADAIntegration />

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

        {/* Análisis Químico / Calidad de Agua */}
        <WaterQualityAnalysis />

        {/* Módulos predictivos */}
        <PredictiveModules />

        {/* Alertas inteligentes */}
        <IntelligentAlerts />

        {/* Recomendaciones Automáticas */}
        <AutomaticRecommendations />

        {/* Arquitectura del Sistema */}
        <PRASAPipeline />
      </main>
    </div>
  )
}

export default App


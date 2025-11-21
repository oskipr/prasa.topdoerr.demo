import React from 'react'

const PRASAPipeline = () => {
  const pipelineSteps = [
    {
      id: 1,
      name: 'SCADA',
      description: 'Wonderware/AVEVA',
      status: 'active',
    },
    {
      id: 2,
      name: 'IoT / Telemetría',
      description: 'Sensores',
      status: 'active',
    },
    {
      id: 3,
      name: 'Capa de Armonización',
      description: 'TopDoerr',
      status: 'active',
    },
    {
      id: 4,
      name: 'Modelos Predictivos',
      description: 'ML/AI',
      status: 'active',
    },
    {
      id: 5,
      name: 'Dashboard Unificado',
      description: 'Visualización',
      status: 'active',
    },
    {
      id: 6,
      name: 'Alertas & Recomendaciones',
      description: 'Auto',
      status: 'active',
    },
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Arquitectura del Sistema – TopDoerr Utilities</h2>
      <div className="bg-white rounded border border-gray-300 shadow-sm p-6">
        {/* Diagrama horizontal institucional */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          {pipelineSteps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center flex-1 min-w-[140px]">
                <div className="w-full bg-gray-100 border border-gray-300 rounded p-4 mb-3">
                  <h3 className="font-bold text-gray-900 text-sm mb-1 text-center">{step.name}</h3>
                  <p className="text-xs text-gray-600 text-center font-mono">{step.description}</p>
                </div>
                <div className="text-xs">
                  <span className="inline-flex items-center px-2 py-1 rounded bg-green-100 text-green-800 font-medium">
                    ✓ Operativo
                  </span>
                </div>
              </div>
              {index < pipelineSteps.length - 1 && (
                <div className="flex-1 max-w-[40px] h-0.5 bg-gray-400 mx-2 hidden md:block"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PRASAPipeline


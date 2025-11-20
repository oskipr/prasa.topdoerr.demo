import React from 'react'

const InstitutionalHeader = () => {
  return (
    <header className="bg-white shadow-md border-b-2 border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center space-x-6">
          <img 
            src="/logo prasa.png" 
            alt="PRASA Logo" 
            className="h-20 object-contain"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.onerror = null
            }}
          />
          <div className="border-l-2 border-gray-300 pl-6">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">
              PRASA – Plataforma Unificada de Operaciones y Analítica Predictiva
            </h1>
            <p className="mt-1 text-sm text-gray-600">
              Autoridad de Acueductos y Alcantarillados de Puerto Rico
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default InstitutionalHeader


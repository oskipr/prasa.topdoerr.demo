import React from 'react'

const InstitutionalHeader = () => {
  return (
    <header className="bg-white shadow-md border-b-2 border-gray-300">
      <div className="max-w-7xl 2xl:max-w-[90rem] mx-auto px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 md:space-x-6">
          <img 
            src="/logo prasa.png" 
            alt="PRASA Logo" 
            className="h-12 sm:h-16 md:h-20 lg:h-24 object-contain"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.onerror = null
            }}
          />
          <div className="border-l-0 sm:border-l-2 border-gray-300 pl-0 sm:pl-4 md:pl-6 w-full sm:w-auto">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-gray-900 leading-tight">
              PRASA – Plataforma Unificada de Operaciones y Analítica Predictiva
            </h1>
            <p className="mt-1 text-xs sm:text-sm md:text-base lg:text-lg text-gray-600">
              Autoridad de Acueductos y Alcantarillados de Puerto Rico
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default InstitutionalHeader


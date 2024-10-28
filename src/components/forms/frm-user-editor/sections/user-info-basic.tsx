import { Input } from '@/components/ui/input'
import React from 'react'

export const UserInfoBasic = () => {
  return (
    <section>
      <header>
        <h1 className="font-bold">Configurar la información básica</h1>
        <p className="text-sm text-gray-500">
          Para empezar, rellene información básica sobre el usuario que va a
          agregar
        </p>
      </header>
      <hr className="my-4 border-t border-gray-300" />
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="col-span-1 sm:col-span-1">
          <h3 className="text-sm font-bold">N° Documento</h3>
          <p className="text-xs text-gray-500">
            Ingrese el documento de la persona
          </p>
        </div>
        <div className="col-span-1 sm:col-span-2">
          <Input placeholder="N° Documento" />
        </div>
      </section>
    </section>
  )
}

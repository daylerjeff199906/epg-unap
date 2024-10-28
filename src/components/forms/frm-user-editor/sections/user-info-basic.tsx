import { Input } from '@/components/ui/input'
import React from 'react'

export const UserInfoBasic = () => {
  return (
    <section id="user-info-basic">
      <header>
        <h1 className="font-bold">Configurar la información básica</h1>
        <p className="text-sm text-gray-500">
          Para empezar, rellene información básica sobre el usuario que va a
          agregar
        </p>
      </header>
      <hr className="my-4 border-t border-gray-300" />
      <section
        className="grid grid-cols-1 gap-4 md:grid-cols-3 py-4"
        id="nro-documento"
      >
        <div className="col-span-1 sm:col-span-1">
          <h3 className="text-sm font-bold">N° Documento</h3>
          <p className="text-xs text-gray-500">
            Ingrese el documento de la persona
          </p>
        </div>
        <div className="col-span-1 sm:col-span-2">
          <Input placeholder="N° Documento: 784542" />
        </div>
      </section>
      <hr className="my-4 border-t border-gray-300" />
      <section
        className="grid grid-cols-1 gap-4 md:grid-cols-3 py-4"
        id="name"
      >
        <div className="col-span-1 sm:col-span-1">
          <h3 className="text-sm font-bold">Nombres</h3>
          <p className="text-xs text-gray-500">
            Ingrese los nombres de la persona
          </p>
        </div>
        <div className="col-span-1 sm:col-span-2">
          <Input placeholder="Ejemplo: Juan Jorge" />
        </div>
      </section>
      <hr className="my-4 border-t border-gray-300" />
      <section
        className="grid grid-cols-1 gap-4 md:grid-cols-3 py-4"
        id="primer-apellido"
      >
        <div className="col-span-1 sm:col-span-1">
          <h3 className="text-sm font-bold">Prime apellido</h3>
          <p className="text-xs text-gray-500">
            Ingrese el primer apellido de la persona
          </p>
        </div>
        <div className="col-span-1 sm:col-span-2">
          <Input placeholder="Ejemplo: Pérez" />
        </div>
      </section>
      <hr className="my-4 border-t border-gray-300" />
      <section
        className="grid grid-cols-1 gap-4 md:grid-cols-3 py-4"
        id="segundo-apellido"
      >
        <div className="col-span-1 sm:col-span-1">
          <h3 className="text-sm font-bold">Segundo apellido</h3>
          <p className="text-xs text-gray-500">
            Ingrese el segundo apellido de la persona
          </p>
        </div>
        <div className="col-span-1 sm:col-span-2">
          <Input placeholder="Ejemplo: Pérez" />
        </div>
      </section>
      <hr className="my-4 border-t border-gray-300" />
    </section>
  )
}

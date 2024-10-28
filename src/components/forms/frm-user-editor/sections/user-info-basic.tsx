import { ContentInput } from '@/components/layouts'
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
      <ContentInput
        id="nro-documento"
        label="N° Documento"
        description="Ingrese el documento de la persona"
      >
        <Input placeholder="N° Documento: 784542" />
      </ContentInput>
      <hr className="my-4 border-t border-gray-300" />
      <ContentInput
        id="name"
        label="Nombres"
        description="Ingrese los nombres de la persona"
      >
        <Input placeholder="Ejemplo: Juan Jorge" />
      </ContentInput>
      <hr className="my-4 border-t border-gray-300" />
      <ContentInput
        id="primer-apellido"
        label="Primer apellido"
        description="Ingrese el primer apellido de la persona"
      >
        <Input placeholder="Ejemplo: Pérez" />
      </ContentInput>
      <hr className="my-4 border-t border-gray-300" />
      <ContentInput
        id="segundo-apellido"
        label="Segundo apellido"
        description="Ingrese el segundo apellido de la persona"
      >
        <Input placeholder="Ejemplo: Pérez" />
      </ContentInput>
    </section>
  )
}

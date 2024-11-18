'use client'
import { Divider } from '@nextui-org/react'
import { ContentInput, HeaderFormSection } from '@/components/layouts'
import { Input } from '@/components/ui/input'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'


export const InformationStudents = () => {

  return (
    <div className="flex flex-col gap-6">
      <HeaderFormSection
        title="Información personal"
        description="Ingresa la información personal del estudiante"
      />
      <ContentInput
        id="documento_type"
        label="Tipo de documento"
        description="Seleccione el tipo de documento (DNI, CARNET, etc)"
      >
        
        <Select onValueChange={(value) => console.log("Opción seleccionada:", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Seleccione un tipo de documento" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="DNI">DNI</SelectItem>
            <SelectItem value="CARNET">CARNET</SelectItem>
            <SelectItem value="PASAPORTE">PASAPORTE</SelectItem>
          </SelectContent>
        </Select>
      </ContentInput>
      <Divider />
      <ContentInput
        id="documento"
        label="Tipo de persona"
        description="Selecciona si es persona jurídica o natural"
      >
        <Select onValueChange={(value) => console.log("Opción seleccionada:", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Seleccione un tipo de persona" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="NATURAL">NATURAL</SelectItem>
            <SelectItem value="JURIDICA">JURIDICA</SelectItem>
          </SelectContent>
        </Select>
      </ContentInput>
      <Divider />
      <ContentInput
        id="document"
        label="N° Documento"
        description="Ingresa una descripción de la etapa"
      >
        <Input placeholder="Ejemplo: 0017745l" />
      </ContentInput>
      <Divider />
      <ContentInput
        id="name"
        label="Nombre"
        description="Ingresa los nombres del estudiante"
      >
        <Input placeholder="Nombres del estudiante" />
      </ContentInput>
      <Divider />
      <ContentInput
        id="last_name_1"
        label="Apellido paterno"
        description="Ingresa apellido paterno del estudiante"
      >
        <Input placeholder="Apellido paterno" />
      </ContentInput>
 
    </div>
  )
}

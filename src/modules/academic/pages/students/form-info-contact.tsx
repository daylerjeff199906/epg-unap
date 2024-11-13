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
import { DatePickerCustom } from '@/components/app'


export const InformationContactStudents = () => {

  return (
    <div className="flex flex-col gap-6">
      <HeaderFormSection
        title="Información de contacto"
        description="Ingresa la información de contacto del estudiante"
      />
      <ContentInput id="birthday" label="Fecha de nacimineto" description="Ingresa la fecha de nacimineto del estudiante">
        <DatePickerCustom 
          mode="single"
          value={new Date()}
          onChange={(date) => console.log("Fecha seleccionada:", date)}
          placeholder="Seleccione una fecha"
          className='w-full'
        />
      </ContentInput>
      <Divider />
      <ContentInput
        id="email"
        label="Email"
        description="Ingresa el email de estudiante"
      >
        <Input placeholder="Ejemplo: estudiante@hotmail.com" />
      </ContentInput>
      <Divider />
      <ContentInput
        id="direccion"
        label="Direccion"
        description="Ingresa la direccion del estudiante"
        
      >
        <Input placeholder="Ejemplo: Av. de la universidad, 123" />
      </ContentInput>
      <Divider />
      <ContentInput
        id="ubigeo"
        label="Ubigeo"
        description="Seleccione el ubigeo de tu ubicacion"
      >
        
        <Select onValueChange={(value) => console.log("Opción seleccionada:", value)}>
          <SelectTrigger>
            <SelectValue placeholder="Seleccione un ubigeo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="142323">BELEN</SelectItem>
            <SelectItem value="12312321">MAYNAS</SelectItem>
            <SelectItem value="12321321">PUNCHANA</SelectItem>
          </SelectContent>
        </Select>
      </ContentInput>
      <Divider />
      <ContentInput
        id="phone"
        label="Celular"
        description="Ingresa el nombre del celular"
      >
        <Input placeholder="Example: 21557" />
      </ContentInput>
      {/* 
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
        label="N° DOCUMENTO"
        description="Ingresa una descripción de la etapa"
      >
        <Input placeholder="Ejemplo: 0017745l" />
      </ContentInput>
      <Divider />
      
      <Divider />
      <ContentInput
        id="last_name_1"
        label="APELLIDO PATERNO"
        description="Ingresa apellido paterno del estudiante"
      >
        <Input placeholder="Apellido paterno" />
      </ContentInput> */}
 
    </div>
  )
}

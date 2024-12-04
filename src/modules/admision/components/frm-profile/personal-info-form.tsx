'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export function PersonalInfoForm() {
  const [photo] = useState<string | null>(null)
  return (
    <form className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Perfil</h2>
        <div className="space-y-4">
          <div>
            <Label>Foto *</Label>
            <div className="mt-2 flex items-center gap-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src={photo || ''} />
                <AvatarFallback>FP</AvatarFallback>
              </Avatar>
              <Button
                variant="outline"
                type="button"
              >
                Subir foto
              </Button>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="document-type">Documento de identidad *</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="DNI" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dni">DNI</SelectItem>
                  <SelectItem value="passport">Pasaporte</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="document-number">Número de documento</Label>
              <Input
                id="document-number"
                placeholder="Ingrese su número de documento"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="names">Nombres *</Label>
            <Input
              id="names"
              placeholder="Ingrese su nombre completo"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="first-surname">Primer apellido *</Label>
            <Input
              id="first-surname"
              placeholder="Ingrese el primer apellido"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="second-surname">Segundo apellido *</Label>
            <Input
              id="second-surname"
              placeholder="Ingrese el segundo apellido"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-4">
        <Button variant="outline">Cancelar</Button>
        <Button>Siguiente</Button>
      </div>
    </form>
  )
}

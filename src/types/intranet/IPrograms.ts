export interface Programa {
  titulo: string
  planEstudios: string
  facultad: string
  creditos: number
  duracion: string
  estado: string
  botones: Boton[]
  etiqueta: string
}

export interface Boton {
  texto: string
  tipo: 'outline' | 'primary'
}

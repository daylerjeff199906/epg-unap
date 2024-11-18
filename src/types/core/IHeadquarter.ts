import { IUbigeo } from '@/types/person'

export interface IHeadquarter {
  id: number
  name: string
  is_active: boolean
  address: string
  photo: string
  latitude: string
  longitude: string
  id_ubigeo: IUbigeo
}
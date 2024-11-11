import { IPerson } from '@/types/person'
import { IAdmin_Unity } from './IAdmin_Unity'
import { IStaff_Type } from './IStaff_Type'
import { IRectoral_Resolution } from './IResolution'
import { IPrograms } from '../academic/IPrograms'

export interface IStaff {
  id: number
  id_person: IPerson
  id_admin_unity: IAdmin_Unity
  id_program: IPrograms
  id_staff_type: IStaff_Type
  is_active: boolean
  id_rectoral_resolution: IRectoral_Resolution
}
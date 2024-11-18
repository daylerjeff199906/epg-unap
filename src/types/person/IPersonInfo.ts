import { IPerson } from "./IPerson";
import { ICountry } from "./ICountry";
import { IUbigeo } from "./IUbigeo";


export interface IPersonInfo {
    id: number;
    fk_person: IPerson;
    fk_country: ICountry;
    fk_ubigeo_address: IUbigeo;
    fk_ubigeo_birth: IUbigeo;
    birthdate: Date;
    gender: Date;
    email: string;
    phone: string;
    address: string;
    whatsapp: string;
}
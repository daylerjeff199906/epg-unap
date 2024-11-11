import { IDocument } from "./IDocument";
import { IUser } from "../accounts";
import { IPersonType } from "./IPersonType";



export interface IPerson {
    id: number;
    id_document_type: IDocument;
    document_number: string;
    name: string;
    last_name_1: string;
    last_name_2: string;
    photo: string;
    id_user: IUser;
    id_person_type: IPersonType;
    id_contact_person: number;
};
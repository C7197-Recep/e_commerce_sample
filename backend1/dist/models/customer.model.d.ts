import { Entity } from '@loopback/repository';
export declare class Customer extends Entity {
    Ad: string;
    Soyad: string;
    Firma: string;
    GSM: string;
    Adres: string;
    id?: string;
    constructor(data?: Partial<Customer>);
}
export interface CustomerRelations {
}
export type CustomerWithRelations = Customer & CustomerRelations;

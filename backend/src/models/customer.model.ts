import {Entity, model, property} from '@loopback/repository';

@model()
export class Customer extends Entity {

  @property({
    type: 'string',
    id: true,
  })
  id?: string;
  
  @property({
    type: 'string',
    required: true,
  })
  Ad: string;

  @property({
    type: 'string',
    required: true,
  })
  Soyad: string;

  @property({
    type: 'string',
  })
  Firma?: string;

  @property({
    type: 'string',
    required: true,
  })
  GSM: string;

  @property({
    type: 'string',
    required: true,
  })
  Adres: string;


  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations {
  // describe navigational properties here
}

export type CustomerWithRelations = Customer & CustomerRelations;

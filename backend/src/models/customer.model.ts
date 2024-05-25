import {Entity, model, property} from '@loopback/repository';

@model

/* BU KISMI EKLEMEZSEK MONGODB TARAFINDA TABLE Customers SEKLINDE OLUR. */
({
  settings: {
    mongodb: {
      collection: 'customers',
    }
  },
}) 
/* BU KISMI EKLEMEZSEK MONGODB TARAFINDA TABLE Customers SEKLINDE OLUR. */

export class Customer extends Entity {
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
    required: true,
  })
  Firma: string;

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

  @property({
    type: 'string',
    id: true,
  })
  id?: string;
  
  // @property({
  //   type: 'number',
  //   id: true,
  //   generated: true,
  // })
  // ID?: number;

  // @property({
  //   type: 'string',
  //   id: true,
  //   generated: true,
  // })
  // _id?: string;


  constructor(data?: Partial<Customer>) {
    super(data);
  }
}

export interface CustomerRelations {
  // describe navigational properties here
}

export type CustomerWithRelations = Customer & CustomerRelations;

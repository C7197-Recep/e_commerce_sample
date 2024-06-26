import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
  HttpErrors,
} from '@loopback/rest';
import {Customer} from '../models';
import {CustomerRepository} from '../repositories';

export class CustomerController {
  constructor(
    @repository(CustomerRepository)
    public customerRepository : CustomerRepository,
  ) {}

  // @post('/customers')
  // @response(200, {
  //   description: 'Customer model instance',
  //   content: {'application/json': {schema: getModelSchemaRef(Customer)}},
  // })
  // async create(
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Customer, {
  //           title: 'NewCustomer',
            
  //         }),
  //       },
  //     },
  //   })
  //   customer: Customer,
  // ): Promise<Customer> {
  //   return this.customerRepository.create(customer);
  // }

  @get('/customers/count')
  @response(200, {
    description: 'Customer model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Customer) where?: Where<Customer>,
  ): Promise<Count> {
    return this.customerRepository.count(where);
  }

  @get('/customers')
  @response(200, {
    description: 'Array of Customer model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Customer, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Customer) filter?: Filter<Customer>,
  ): Promise<Customer[]> {
    return this.customerRepository.find(filter);
  }

  // @patch('/customers')
  // @response(200, {
  //   description: 'Customer PATCH success count',
  //   content: {'application/json': {schema: CountSchema}},
  // })
  // async updateAll(
  //   @requestBody({
  //     content: {
  //       'application/json': {
  //         schema: getModelSchemaRef(Customer, {partial: true}),
  //       },
  //     },
  //   })
  //   customer: Customer,
  //   @param.where(Customer) where?: Where<Customer>,
  // ): Promise<Count> {
  //   return this.customerRepository.updateAll(customer, where);
  // }

  @get('/customers/{id}')
  @response(200, {
    description: 'Customer model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Customer, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Customer, {exclude: 'where'}) filter?: FilterExcludingWhere<Customer>
  ): Promise<Customer> {
    return this.customerRepository.findById(id, filter);
  }

  @patch('/customers/{id}')
  @response(204, {
    description: 'Customer PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Customer, {partial: true}),
        },
      },
    })
    customer: Customer,
  ): Promise<void> {
  
    // Güvenlik kontrolleri
    if (!this.isValidCustomer(customer)) {
      throw new HttpErrors.BadRequest('Geçersiz müşteri bilgisi');
    }
  
    await this.customerRepository.updateById(id, customer);
  }

  @put('/customers/{id}')
  @response(204, {
    description: 'Customer PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() customer: Customer,
  ): Promise<void> {

    // Güvenlik kontrolleri
    if (!this.isValidCustomer(customer)) {
      throw new HttpErrors.BadRequest('Geçersiz müşteri bilgisi');
    }

    await this.customerRepository.replaceById(id, customer);
  }

  @del('/customers/{id}')
  @response(204, {
    description: 'Customer DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.customerRepository.deleteById(id);
  }

 // Güvenlik kontrolleri
 private isValidCustomer(customer: Customer): boolean {
  const { Ad, Soyad, GSM, Firma, Adres } = customer;

  if (
    Ad.length < 3 || Ad.length > 100 ||
    Soyad.length < 3 || Soyad.length > 100 ||
    Firma.length < 3 || Firma.length > 100 ||
    Adres.length < 3 || Adres.length > 100
  ) {
    return false;
  }

  // GSM kontrolü
  if (GSM.length !== 10 || !(/^\d+$/.test(GSM))) {
    return false;
  }

  // XSS kontrolleri
  const hasXSS = [Ad, Soyad, Firma, Adres].some(field => /<\s*script\s*>/i.test(field));
  if (hasXSS) {
    return false;
  }

  return true;
  }


}



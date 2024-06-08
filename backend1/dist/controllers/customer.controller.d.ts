import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Customer } from '../models';
import { CustomerRepository } from '../repositories';
export declare class CustomerController {
    customerRepository: CustomerRepository;
    constructor(customerRepository: CustomerRepository);
    create(customer: Omit<Customer, 'id'>): Promise<Customer>;
    count(where?: Where<Customer>): Promise<Count>;
    find(filter?: Filter<Customer>): Promise<Customer[]>;
    updateAll(customer: Customer, where?: Where<Customer>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Customer>): Promise<Customer>;
    updateById(id: string, customer: Customer): Promise<void>;
    replaceById(id: string, customer: Customer): Promise<void>;
    deleteById(id: string): Promise<void>;
}

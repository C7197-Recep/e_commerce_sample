"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Customer = class Customer extends repository_1.Entity {
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
    constructor(data) {
        super(data);
    }
};
exports.Customer = Customer;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "Ad", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "Soyad", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "Firma", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "GSM", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "Adres", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
    }),
    tslib_1.__metadata("design:type", String)
], Customer.prototype, "id", void 0);
exports.Customer = Customer = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            mongodb: {
                collection: 'customers',
            }
        },
    })
    /* BU KISMI EKLEMEZSEK MONGODB TARAFINDA TABLE Customers SEKLINDE OLUR. */
    ,
    tslib_1.__metadata("design:paramtypes", [Object])
], Customer);
//# sourceMappingURL=customer.model.js.map
import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

/* data klasörü içinde bir FAKE DB oluşturup ona bağlayabiliriz.*/
// const config = {
//   name: 'db',
//   connector: 'memory',
//   localStorage: '',
//   file: './data/db.json'
// };

/* ONLINE DB'ye bağlayabiliriz. 
Buradaki "host" bilgisini veritabanına erişim sağladığı
için Github'a yüklemeden önce .env vb. yöntemle
emniyete almayı unutma.*/
const config = {
  name: 'db',
  connector: 'mongodb',
  host: "yalcinr896:m173NIF28RM6gzwc@cluster0.lopa7ph.mongodb.net",
  database: 'e-commerce-sample',
  protocol: 'mongodb+srv',
};

/* LOCAL DB'ye bağlayabiliriz. */
// const config = {
//   name: 'db',
//   connector: 'mongodb',
//   url: '',
//   host: 'localhost',
//   port: 27017,
//   user: '',
//   password: '',
//   database: 'testdb',
// };                    

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongodbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongodb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongodb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}

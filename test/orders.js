process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../server';
import models from '../server/models/';
import ctrl from '../server/controllers/orders';

const expect = chai.expect;
chai.use(chaiHttp);

describe('Orders', () => {
  before((done) => {
    models.sequelize.authenticate().then(() => {
      done();
      // models.sequelize.sync({ force: true }).success(() => done());
    });
  });

  beforeEach((done) => {
    models.sequelize.sync({ force: true }).then(() => {
      models.Orders.create(
        {
          delivery_date: '2016-01-28T22:15:11+00:00',
          customer_id: 1,
          picker_id: 1,
          item_id: 1,
        },
        {
          delivery_date: '2016-20-28T22:15:11+00:00',
          customer_id: 2,
          picker_id: 2,
          item_id: 2,
        },
      ).then(() => done());
    });
  });

  afterEach((done) => {
    return models.sequelize.sync({ force: true }).then(() => done());
  });

  describe('Orders api endpoints', () => {
    describe('/GET orders', () => {
      it('should get all orders', (done) => {
        chai.request(server)
        .get('/api/orders')
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.a('array');
          done();
        });
      });
    });
  });
});










//

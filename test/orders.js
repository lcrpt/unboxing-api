process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';

const should = chai.should();
chai.use(chaiHttp);

describe('Addresses', () => {
  return true;
});

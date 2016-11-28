import addresses from '../controllers/addresses';

export default (router) => {
  router.get('/addresses', addresses.getAddresses);
  router.get('/addresses/:id', addresses.getAddress);
  router.post('/addresses', addresses.postAddress);
  router.put('/addresses/:id', addresses.updateAddress);
  router.delete('/addresses/:id', addresses.deleteAddress);

  return router;
};

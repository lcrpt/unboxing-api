import users from '../controllers/users';
import items from '../controllers/items';
import addresses from '../controllers/addresses';
import orders from '../controllers/orders';
import itemsRoute from './items';

export default (router) => {
  router.get('/users', users.getUsers);
  router.get('/users/:id', users.getUser);
  // router.post('/users', users.postUser);
  // router.put('/users/:id', users.updateUser);
  // router.delete('/users/:id', users.deleteUser);

  itemsRoute(router);

  router.get('/addresses', addresses.getAddresses);
  router.get('/addresses/:id', addresses.getAddress);
  // router.post('/addresses', addresses.postAddress);
  // router.put('/addresses/:id', addresses.updateAddress);
  // router.delete('/addresses/:id', addresses.deleteAddress);

  router.get('/orders', orders.getOrders);
  router.get('/orders/:id', orders.getOrder);
  // router.post('/orders', orders.postOrder);
  // router.put('/orders/:id', orders.updateOrder);
  // router.delete('/orders/:id', orders.deleteOrder);

  return router;
};

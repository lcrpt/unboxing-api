import users from '../controllers/users';
import items from '../controllers/items';
import addressesRoute from './addresses';
import ordersRoute from './orders';
import itemsRoute from './items';

export default (router) => {
  router.get('/users', users.getUsers);
  router.get('/users/:id', users.getUser);
  // router.post('/users', users.postUser);
  // router.put('/users/:id', users.updateUser);
  // router.delete('/users/:id', users.deleteUser);
  addressesRoute(router);
  itemsRoute(router);
  
  router.get('/orders', orders.getOrders);
  router.get('/orders/:id', orders.getOrder);
  // router.post('/orders', orders.postOrder);
  // router.put('/orders/:id', orders.updateOrder);
  // router.delete('/orders/:id', orders.deleteOrder);

  ordersRoute(router);

  return router;
};

import usersRoute from './users';
import addresses from '../controllers/addresses';
import addressesRoute from './addresses';
import ordersRoute from './orders';
import itemsRoute from './items';

export default (router) => {
  usersRoute(router);
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

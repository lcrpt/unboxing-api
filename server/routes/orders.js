import orders from '../controllers/orders';

export default (router) => {
  router.get('/orders', orders.getOrders);
  router.get('/orders/:id', orders.getOrder);
  router.post('/orders', orders.postOrder);
  router.put('/orders/:id', orders.updateOrder);
  router.delete('/orders/:id', orders.deleteOrder);

  return router;
};

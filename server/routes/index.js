import usersRoute from './users';
import addressesRoute from './addresses';
import itemsRoute from './items';
import ordersRoute from './orders';

export default (router) => {
  usersRoute(router);
  addressesRoute(router);
  itemsRoute(router);
  ordersRoute(router);

  return router;
};

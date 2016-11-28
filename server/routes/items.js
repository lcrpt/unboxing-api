import items from '../controllers/items';

export default (router) => {
  router.get('/items', items.getItems);
  router.get('/items/:id', items.getItem);
  router.post('/items', items.postItem);
  router.put('/items/:id', items.updateItem);
  router.delete('/items/:id', items.deleteItem);

  return router;
};

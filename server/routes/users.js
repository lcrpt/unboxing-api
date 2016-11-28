import users from '../controllers/users';

export default (router) => {
  router.get('/users', users.getUsers);
  router.get('/users/:id', users.getUser);
  router.post('/users', users.postUser);
  router.put('/users/:id', users.updateUser);
  router.delete('/users/:id', users.deleteUser);

  return router;
};

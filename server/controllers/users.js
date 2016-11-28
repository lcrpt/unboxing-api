const Users = require('../models/').Users;

export default {
  getUsers(req, res) {
    Users.findAll().then((users) => {
      res.status(200).json(users);
    }).catch((err) => {
      res.status(500).json(err);
    });
  },

  getUser(req, res) {
    Users.findById(req.params.id).then((user) => {
      res.status(200).json(user);
    }).catch((err) => {
      res.status(500).json(err);
    });
  },

  postUser(req, res) {
    Users.create(req.body).then((newUser) => {
      res.status(200).json(newUser);
    }).catch((err) => {
      res.status(500).json(err);
    });
  },

  updateUser(req, res) {
    Users.update(req.body, {
      where: { id: req.params.id },
    }).then((updatedUser) => {
      res.status(200).json(updatedUser);
    }).catch((err) => {
      res.status(500).json(err);
    });
  },

  deleteUser(req, res) {
    Users.destroy({
      where: { id: req.params.id },
    }).then((deletedUser) => {
      res.status(200).json(deletedUser);
    }).catch((err) => {
      res.status(500).json(err);
    });
  },
};

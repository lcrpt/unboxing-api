const Items = require('../models/').Items;

export default {
  getItems(req, res) {
    Items.findAll().then((items) => {
      res.status(200).json(items);
    }).catch((err) => {
      res.status(500).json(err);
    });
  },

  getItem(req, res) {
    Items.findById(req.params.id).then((item) => {
      res.status(200).json(item);
    }).catch((err) => {
      res.status(500).json(err);
    });
  },

  postItem(req, res) {
    Items.create(req.body).then((newItem) => {
      res.status(200).json(newItem);
    }).catch((err) => {
      res.status(500).json(err);
    });
  },

  updateItem(req, res) {
    Items.update(req.body, {
      where: { id: req.params.id },
    }).then((updatedItem) => {
      res.status(200).json(updatedItem);
    }).catch((err) => {
      res.status(500).json(err);
    });
  },

  deleteItem(req, res) {
    Items.destroy({
      where: { id: req.params.id },
    }).then((deletedItem) => {
      res.status(200).json(deletedItem);
    }).catch((err) => {
      res.status(500).json(err);
    });
  },
};

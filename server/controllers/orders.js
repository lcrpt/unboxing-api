const Orders = require('../models/').Orders;

export default {
  getOrders(req, res) {
    Orders.findAll().then((orders) => {
      res.status(200).json(orders);
    }).catch((err) => {
      res.status(500).json(err);
    });
  },

  getOrder(req, res) {
    Orders.findById(req.params.id).then((order) => {
      res.status(200).json(order);
    }).catch((err) => {
      res.status(500).json(err);
    });
  },

  postOrder(req, res) {
    Orders.create(req.body).then((newOrder) => {
      res.status(200).json(newOrder);
    }).catch((err) => {
      res.status(500).json(err);
    });
  },

  updateOrder(req, res) {
    Orders.update(req.body, {
      where: { id: req.params.id },
    }).then((updatedOrder) => {
      res.status(200).json(updatedOrder);
    }).catch((err) => {
      res.status(500).json(err);
    });
  },

  deleteOrder(req, res) {
    Orders.destroy({
      where: { id: req.params.id },
    }).then((deletedOrder) => {
      res.status(200).json(deletedOrder);
    }).catch((err) => {
      res.status(500).json(err);
    });
  },
};

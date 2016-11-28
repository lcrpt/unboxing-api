import Addresses from '../models/addresses';

export default {
  getAddresses(req, res) {
    Addresses.findAll().then((addresses) => {
      res.status(200).json(addresses);
    }).catch((err) => {
      res.status(500).json(err);
    });
  },

  getAddress(req, res) {
    Addresses.findById(req.params.id).then((address) => {
      res.status(200).json(address);
    }).catch((err) => {
      res.status(500).json(err);
    });
  },

  postAddress(req, res) {
    Addresses.create(req.body).then((newAddress) => {
      res.status(200).json(newAddress);
    }).catch((err) => {
      res.status(500).json(err);
    });
  },

  updateAddress(req, res) {
    Addresses.update(req.body, {
      where: { id: req.params.id },
    }).then((updatedAddress) => {
      res.status(200).json(updatedAddress);
    }).catch((err) => {
      res.status(500).json(err);
    });
  },

  deleteAddress(req, res) {
    Addresses.delete({
      where: { id: req.params.id },
    }).then((deletedAddress) => {
      res.status(200).json(deletedAddress);
    }).catch((err) => {
      res.status(500).json(err);
    });
  },
};

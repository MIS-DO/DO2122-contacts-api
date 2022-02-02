'use strict'

module.exports.getContacts = function getContacts(req, res, next) {
  res.send({
    message: 'This is the mockup controller for getContacts'
  });
};

module.exports.addContact = function addContact(req, res, next) {
  res.send({
    message: 'This is the mockup controller for addContact'
  });
};
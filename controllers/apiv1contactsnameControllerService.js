'use strict'

module.exports.findContactByname = function findContactByname(req, res, next) {
  res.send({
    message: 'This is the mockup controller for findContactByname'
  });
};

module.exports.deleteContact = function deleteContact(req, res, next) {
  res.send({
    message: 'This is the mockup controller for deleteContact'
  });
};

module.exports.updateContact = function updateContact(req, res, next) {
  res.send({
    message: 'This is the mockup controller for updateContact'
  });
};
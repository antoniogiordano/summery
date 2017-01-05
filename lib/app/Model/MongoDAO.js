"use strict";

/**
 * Created by AntonioGiordano on 10/06/16.
 */

module.exports = {
  findOne: function findOne(db, collectionName, filters, cb) {
    db.collection(collectionName).findOne(filters, function (err, result) {
      cb(err, result);
    });
  },
  find: function find(db, collectionName, filters, options) {
    return db.collection(collectionName).find(filters, options);
  },
  create: function create(db, collectionName, object, cb) {
    db.collection(collectionName).insertOne(object, function (err) {
      cb(err);
    });
  },
  update: function update(db, collectionName, filters, object, cb) {
    db.collection(collectionName).updateOne(filters, object, function (err) {
      cb(err);
    });
  },
  deleteOne: function deleteOne(db, collectionName, filters, options, cb) {
    db.collection(collectionName).deleteOne(filters, options, function (err) {
      cb(err);
    });
  },
  deleteMany: function deleteMany(db, collectionName, filters, options, cb) {
    db.collection(collectionName).removeMany(filters, options, function (err) {
      cb(err);
    });
  }
};
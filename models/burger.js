// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function (cb) {
    orm.selectAll("burgers", function (res) {
      cb(res);
    });
  },

  create: function (insertData, cb) {
    orm.insertOne("burgers", insertData, function (res) {
      cb(res);
    });
  },
  update: function (updateData, condition, cb) {
    orm.updateOne("burgers", updateData, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.deleteOne("burgers", condition, function (res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;

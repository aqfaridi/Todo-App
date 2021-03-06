'use strict';

var dbm;
var type;
var seed;

exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db, callback) {
  db.createTable('users', {
    id: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true,
      unsigned: true,
      notNull:  true
    },
    name: {
      type: 'string',
      notNull: true
    },
    email: {
      type: 'string',
      unique: true,
      notNull: true
    },
    password: {
      type: 'string',
      notNull: true
    },
    createdAt: 'datetime',
    updatedAt: 'datetime'
    
  }, callback);
};

exports.down = function(db, callback) {
  db.dropTable('users', callback);  
};
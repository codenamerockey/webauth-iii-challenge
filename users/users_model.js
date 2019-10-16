const db = require('../database/db-config.js');

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db('users').select('id', 'username', 'role');
}

function findBy(filter) {
  return db('users').where(filter);
}

function add(user) {
  return db('users')
    .insert(user, 'id')
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findById(id) {
  return db('users')
    .select('id', 'username', 'role')
    .where({ id })
    .first();
}

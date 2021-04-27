const knex = require('knex');
const knexfile =  require('./knexfile');
const { Model } = require('objection');


function setupDatabase() {
    const database = knex(knexfile.development);
    Model.knex(database);
};

module.exports = setupDatabase;
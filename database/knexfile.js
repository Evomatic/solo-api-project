// Update with your config settings.
//mapper for converting space to _ i.e firstName -> first_name
//good practice for database naming
const { knexSnakeCaseMappers } = require('objection');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'twitch',
      user:     'evomatic',
      password: null
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds : {
      directory: './seeds',
    },
    ...knexSnakeCaseMappers,
  },

};

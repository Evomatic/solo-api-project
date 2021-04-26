exports.up = function(knex) {
    //first param is name of table, second is callback function
    return knex.schema.createTable('accounts', (table) => {
        //these are the columns in the table
        //add id column with INT value, auto increment
        table.increments();
        table.string('user').notNullable();
        table.string('email').notNullable().unique();
        table.timestamps(true, true);

    })
    .createTable('channels', (table) => {
        table.increments();
        table.string('name').notNullable();
        table.integer('accountId').references('id').inTable('accounts');
        table.timestamps(true, true);
    })
    .createTable('videos', (table) => {
        table.increments();
        table.string('title').notNullable;
        table.timestamps(true, true);
        table.integer('accountId').references('id').inTable('accounts');
    });



};

//used to rollback changes to database/drop tables
exports.down = function(knex) {
    return knex.schema
    .dropTableIfExist('accounts')
    .dropTableIfExist('channels')
    .dropTableIfExist('videos')
};
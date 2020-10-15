import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('reservations', table => {
    table.increments('id').primary(),
      table.date('initial_date').notNullable(),
      table.date('finish_date'),
      table.string('reason').notNullable();

    table
      .integer('motorist_id')
      .notNullable()
      .references('id')
      .inTable('motorists')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    table
      .integer('car_id')
      .notNullable()
      .references('id')
      .inTable('cars')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('reservations');
}

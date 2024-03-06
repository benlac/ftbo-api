import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("vehicle", (table) => {
    table.increments().unsigned().unique().primary();
    table.string("model");
    table.string("location");
    table.string("location_id");
    table.string("price");
    table.string("vp_rating");
    table.string("awarded_price");
    table.boolean("is_sold");
    table.integer("year");
    table.string("brand_new_price");
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("vehicle");
}

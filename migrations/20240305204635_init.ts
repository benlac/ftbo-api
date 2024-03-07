import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("vehicle", (table) => {
    table.increments().unsigned().unique().primary();
    table.string("model");
    table.string("location");
    table.string("location_id");
    table.integer("price");
    table.integer("vp_rating");
    table.integer("awarded_price");
    table.boolean("is_sold");
    table.integer("year");
    table.integer("brand_new_price");
    table.timestamps();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("vehicle");
}

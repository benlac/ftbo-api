import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("vehicle", (table) => {
    table.integer("sold_price");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("vehicle", (table) => {
    table.dropColumn("sold_price");
  });
}

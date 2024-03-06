import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("vehicle", (table) => {
    table.string("image");
    table.string("kilometers");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("vehicle", (table) => {
    table.dropColumn("image");
    table.dropColumn("kilometers");
  });
}

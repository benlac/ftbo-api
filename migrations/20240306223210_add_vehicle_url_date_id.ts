import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable("vehicle", (table) => {
    table.string("url");
    table.string("vp_id");
    table.string("sale_date");
    table.boolean("is_after_sales");
    table.string("end_after_sales");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable("vehicle", (table) => {
    table.dropColumn("url");
    table.dropColumn("vp_id");
    table.dropColumn("sale_date");
    table.dropColumn("is_after_sales");
    table.dropColumn("end_after_sales");
  });
}

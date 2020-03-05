
exports.up = async function(knex) {
    await knex.schema.createTable("recipes", (table) => {
        table.increments("id")
        table.text("recipe-name", 40).notNull().unique()
    })
    await knex.schema.createTable("ingredient", (table) => {
        table.increments("id")
        table.text("ingredient-name", 40).notNull()
        table.decimal("quantity", 12, 2).notNull()
        table.integer("recipe_id")
            .references("id")
            .inTable("recipes")
    })
    await knex.schema.createTable("instructions", (table) => {
        table.increments("id")
        table.text("steps", 40).notNull()
        table.time("time", 6).notNull()
        table.integer("recipe_id")
            .references("id")
            .inTable("recipes")
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("ingredient");
  await knex.schema.dropTableIfExists("instructions");
  await knex.schema.dropTableIfExists("recipes");
};

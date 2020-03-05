
exports.up = async function(knex) {
    await knex.schema.createTable("recipes", (table) => {
        table.increments("id")
        table.string("recipe-name", 40).notNull().unique()
    })
    await knex.schema.createTable("ingredient", (table) => {
        table.increments("id")
        table.string("ingredient-name", 40).notNull()
        table.decimal("amount", 12, 2).notNull()
    })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("ingredient");
  await knex.schema.dropTableIfExists("recipes");
};

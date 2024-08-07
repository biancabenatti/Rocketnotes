exports.up = knex => knex.schema.createTable("tags", table => {
    table.increments("id");
    table.text("name").notNullable();
  
    table.integer("note_id").references("id").inTable("notes").onDelete("CASCADE");
    // onDelete("CASCADE") = Se deletar a nota que essa tag estiver vinculada ele vai deletar a tag.
    
    table.integer("user_id").references("id").inTable("users");
  });
  
  exports.down = knex => knex.schema.dropTable("tags");
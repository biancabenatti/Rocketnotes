const path = require("path")

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, "src", "database", "database.db")
    },
    pool: { // O que for colocado dentro do pool vai ser executado no momento de estabelecer conexão com o banco de dados 
      afterCreate: (conn, cb) => conn.run("PRAGMA foreign_keys = ON", cb)
      /* Logo apos criar (afterCreate) recuperar a conexão (conn) e a função de (callback)
      depois pegar a conexão e vai rodar (conn.run) um comando "PRAGMA foreign_keys = ON"
      para que quando for deletado uma nota vai ser deletados os vinculos em cascata. */ 
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "knex", "migrations")
    },
    useNullAsDefault: true
  }
};
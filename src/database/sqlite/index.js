const sqlite3 = require ("sqlite3"); // Driver que ira estabelecer comunicação com a base de dados.
const sqlite = require ("sqlite"); // Driver que ira conectar 
const path = require("path"); // Biblioteca para resolver os endereços de acordo com o ambiente.

async function sqliteConnection(){
    const database = await sqlite.open({
        filename:path.resolve (__dirname, "..", "database.db"), // Propriedade para saber onde o arquivo ira ficar salvo.
        driver: sqlite3.Database // Dizer qual driver ira utilizar.
    });

    return database;
}

module.exports = sqliteConnection; // Exportar a sql
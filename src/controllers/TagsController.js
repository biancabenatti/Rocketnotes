const knex = require("../database/knex")

class TagsController {
  async index(request, response) {
    const user_id  = request.user.id;

    const tags = await knex("tags")
      .where({ user_id })
      .groupBy("name") // Recurso do banco de dados, ele vai agrupar pelo campo e nao vai retornar repetidos desse campo 

    return response.json(tags)
  }
}

module.exports = TagsController
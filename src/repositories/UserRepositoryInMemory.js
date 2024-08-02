class UserRepositoryInMemory {
    users = [] // Vetor que começa vazio
    // Dentro da classe teremos dois metodos um async para manter o padrao mesmo que manipulação de arrei seja sincrono
    async create({ name, email, password }) {
        const user = {
            id: Math.floor(Math.random() * 100) + 1, // Gerar numero aleatorio 
            email,
            name,
            password
        }
        this.users.push(user); // Metodo para adicionar um usuario dentro do array 

        return user
    }

    async findByEmail(email) {
        return this.users.find(user => user.email === email);
    }
}

module.exports = UserRepositoryInMemory
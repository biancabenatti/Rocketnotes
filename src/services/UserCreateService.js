const { hash } = require('bcryptjs')
const AppError = require('../utils/AppError')

class UserCreateService {
    constructor(userRepository) { // O método construtos é executado no momento em que a classe é instanciada ele tem que ficar no nivel da classe fora da função.
        this.userRepository = userRepository// Para compartilhar com a classe toda 
    }
    async execute({ name, email, password }) {// Método que recebe o nome, email, password

        const checkUserExists = await this.userRepository.findByEmail(email);

        if (checkUserExists) {
            throw new AppError("Este e-mail já está em uso.");
        }

        const hashedPassword = await hash(password, 8);

        const userCreated = await this.userRepository.create({ name, email, password: hashedPassword });

        return userCreated;
    }
}
module.exports = UserCreateService
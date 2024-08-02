const UserCreatService = require("./UserCreateService")
const UserRepositoryInMemory = require("../repositories/UserRepositoryInMemory")
const AppError = require('../utils/AppError')


describe("UserCreateService", () => {

    it("user should be create", async () => { // Criar um usuario de exemplo 
        const user = {
            name: "user test",
            email: "user@teste.com",
            password: "123"
        }
        const userRepositoryInMemory = new UserRepositoryInMemory()
        const userCreateService = new UserCreatService(userRepositoryInMemory); // Precisamos dizer para o UserCreatService() qual é o repositorio que vamos usar  
        const userCreated = await userCreateService.execute(user);

        expect(userCreated).toHaveProperty("id")

    });

    it("user not should be create with exists email", async () => { // Criar um usuario de exemplo 
        const user1 = {
            name: "user test 1",
            email: "user@teste.com",
            password: "123"
        };

        const user2 = {
            name: "user test 2",
            email: "user@teste.com", //  Mesmo email para ver se ele vai barrar 
            password: "456"
        };
        const userRepository = new UserRepositoryInMemory()
        const userCreateService = new UserCreatService(userRepository); // Precisamos dizer para o UserCreatService() qual é o repositorio que vamos usar  

        await userCreateService.execute(user1); // Primeiro momento vou cadastrar o primeiro usuario 
        await expect(userCreateService.execute(user2)).rejects.toEqual(new AppError("Este e-mail já está em uso."))
    // Tentar criar o segundo e verificar se o conteudo desse erro é igual ao erro que estou esperando que aconteça ou seja 
    // rejects.toEqual = rejeitado igual ao erro 
    });
});


/* it - É uma função que recebe dois parametros: 

1° Recebe a descrição do nosso teste ou seja o que nosso teste faz.
2º O teste de fato.

expect(result) -  Expectativa de resultado.
toEqual(5) - E eu espero que seja igual a 4

Como no exemplo: 

it("result of them sum of 2 + 2 must be 4", () => { 
    const a =2;
    const b = 2;
    const result = a + b;

    expect(result).toEqual(4);
})

*/
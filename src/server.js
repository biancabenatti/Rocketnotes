require("express-async-errors");
require("dotenv/config");

const uploadConfig = require("./configs/upload")
const migrationsRun = require("./database/sqlite/migrations");

const AppError = require("./utils/AppError");

const cors  = require("cors")

const  express = require('express'); //estou pegando a pasta express que esta dentro do node e importando para uma variavel constante.

const routes = require("./routes")

migrationsRun();

const app = express(); //inicializando o express.
app.use(cors())
app.use(express.json ()); //qual é o padrao que ira receber ar informaçoes, no caso json. 

app.use("/files", express.static(uploadConfig.UPLOADS_FOLDER))

app.use(routes)

app.use((error, request, response, next) => {
    if(error instanceof AppError){ // Ver se o erro foi gerado pelo lado do cliente.
        return response.status (error.statusCode).json ({
            status: "error",
            message: error.message
        })
    }

    console.error(error);

    return response.status(500).json({
        status: "error",
        message: "Internal server error"
    })
});

const PORT = 3333; //Qual endereço que o express vai atender.
app.listen(PORT, () => console.log (`Server is running on Port ${PORT}`));//Fique escutanto (listen) no endereço (PORT) e quando a aplicação começar execute a função ()=> console.log.


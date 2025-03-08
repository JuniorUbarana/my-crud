// Importar a biblioteca Express
import express, {Request, Response} from "express";

// Importar as credenciais do banco de dados
import { AppDataSource } from "./data-source";

//Criar a aplicação Express
const app = express();

// Inicializar a conexão com o banco de dados
AppDataSource.initialize()
    .then(() => {
        console.log("Conexão com o banco de dados realizada com sucesso!")
    })
    .catch((error) => console.log("Erro na conexão com o banco de daods: ", error))

// Crair a rota GET principal
app.get("/", (req: Request, res: Response) => {
    res.send("Hello world")
});

app.listen(8080, () => {
    console.log("Conectado na porta 8080: http://localhost:8080")
});
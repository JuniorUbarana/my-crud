import express, {Request, Response} from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world")
});

app.listen(8080, () => {
    console.log("Conectado na porta 8080: http://localhost:8080")
});
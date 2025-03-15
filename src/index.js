import express from "express";
import cors from "cors";
import router from "./routes.js";

const app = express();

app.use(express.json());
app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: 'Content-Type, Authorization',
  }));
app.use(router);

app.listen(3001, () => {
    console.log("Servidor rodando na porta: 3001..");
});

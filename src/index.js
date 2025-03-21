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
    exposedHeaders: 'Content-Type, Authorization, X-Requested-With',
  credentials: true
  }));
app.use(router);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.listen(3001, () => {
    console.log("Servidor rodando na porta: 3001..");
});

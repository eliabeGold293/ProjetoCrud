import express, { Router } from "express";
import {getUsers} from "../controlador/usuarios.js";

/** com esta invocação estou indicando que é uma rota */
const rota = express.Router();

/** este getUsers vai no nosso banco e trás para nós */
rota.get("/", getUsers);

export default rota;

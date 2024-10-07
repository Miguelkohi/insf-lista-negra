import * as db from "../repository/userRepository";

import { Router } from "express"
const endpoints = Router()

endpoints.post('/usuario/', async (req, resp) => {
    try {
        let pessoa = req.body;

        let id = await db.inserirUsuario(pessoa)

        resp.send({
            novoId: id
        })
    }
    catch (err) {
        resp.status(400).send({
            ERRO: err.message
        })
    }
})


endpoints.post('/entrar/', async (req, resp)  => {
    try {
        let usuario =  req.body

        let dados = await db.validarUsuario(usuario)
        
        if (dados == null) {
            resp.send({
                erro: "usuario ou senha invalidos"
            })
        } else {
            resp.send(dados)
        }
    }
})

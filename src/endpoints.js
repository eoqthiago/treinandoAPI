import { Router } from 'express';

import {semaforo, diasemana, fatorial, par} from './services.js'

const server = Router();

server.get('/semaforo/:cor', (req, resp) => {

    try {
        const cor = req.params.cor;
        const x = semaforo(cor)
    
        resp.send({
            cor: x
        })
    } catch (error) {
        resp.status(404).send({
            error:error.message
        })
    }

})

server.get('/diasemana', (req, resp) => {
    const dia = req.query.dia;
    const x = diasemana(dia);
    resp.send({
        dia: x
    })
})

server.post('/fatorial', (req, resp) => {
    const n = req.query.n;
    const x = fatorial(n)
    resp.send({
        fatorial: x
    })
})

server.post('/sequenciaPar', (req, resp) => {
    const limite = req.body.limite;
    const x = par(limite)
    resp.send({
        limite: x
    })
})



export default server
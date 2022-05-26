import "dotenv/config"

import express from "express";
import cors from "cors";

const server = express();
server.use(cors());

server.listen(process.env.PORT,
    () => console.log(`INICIOU A API ${process.env.PORT}`));


server.get('/dobroo', (req, resp) => {

        resp.send({
            resposta: 2 + 3
        })


})
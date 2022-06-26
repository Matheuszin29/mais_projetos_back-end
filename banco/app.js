const express = require('express');
const app = express();
const user = require('./models/User');

app.use(express.json());

//const db = require('./models/db');

app.get("/", async(req, res) => {
    res.send("Pagina inicial!");
});

app.post("/cadastrar", async(req, res) => {
   // console.log(req.body);

    await User.create(req.body)
        .then(() => {
            return res.json({
                erro: false,
                mensagem: "okay !!!!"
            });

        }).catch(() => {
            return res.status(400).json({
                erro: true,
                mensagem: "nada okay !!!"

            });
        });


    res.send("Pagina cadastrar");
});

app.listen(8080, () => {
    console.log("servidor iniciado na porta 8080: http://localhost:8080");
});
const express = require("express");
const Services = require("../services/services");
const router = express.Router();

router.get("/",(req, res) =>{
    res.send("Seja bem Vindo ao nosso sistema de Tarefas.");
    });

    router.get("/tarefas/cadastrar",(req, res) =>{
        res.render("tarefas/cadastrar");
        });

        router.post("/tarefas/Create", Services.TarefaCreate);

        router.get("/tarefas/listar", Services.TarefaListar);


        



module.exports=router;
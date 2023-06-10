const axios = require("axios");
const { response } = require("express");


module.exports = class Services {
  static async TarefaCreate(req, res) {
    let valores = req.body;
    const options = {
      url: "https://replit.com/@mhoffmann761/listarTarefas/Cadastrar",
      method: "POST",
      data: valores,
    };

    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", {mensagem});
    
  };


  static async TarefaListar(req, res) {
    const options = {
      url: "https://replit.com/@mhoffmann761/listarTarefas/tarefas",
      method: "GET",
      data: {}

    };
    axios(options).then(response=>{
      console.log(response.data);
      const tarefa = response.data;
      res.render("tarefas/listar",{tarefa});
    });
  };
};




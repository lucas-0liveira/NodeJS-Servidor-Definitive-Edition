import express from "express";

// @types/express
const app = express();

/**
 * GET => Buscar Informação
 * POST => Inserir/Criar uma informação 
 * PUT => Alterar uma Informação
 * DELETE => Remover um dado
 * PATCH => Alterar uma informação específica
 */

app.get("/test", (request, response) => {
    //Request => Tudo que está entrando
    //Response => Tudo que está saindo
    return response.send("Olá Usuário");
});

app.post("/test-post", (request, response) => {
 return response.send("Olá Usário, esse é o método POST")
});

// http://localhost:3000
app.listen(3000, () => console.log("server user running"));
const express = require("express");

const app = express();
app.get("/", (request, response) => {
  return response.json({
      evento: 'SEMANA OMINISTACK 11.0',
      aluno: 'VINICIOS OLIVEIRA'
  })
});

app.listen(3333);

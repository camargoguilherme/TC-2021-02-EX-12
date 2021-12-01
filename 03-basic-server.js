const fsp = require("fs").promises;
const express = require("express");

const app = express();

app.get("/", async (req, res) => {
  console.log("some request");

  // leitura async libera o event loop para processar outras requisicoes

  try {
    const file = await fsp.readFile("./html/basic.html", "utf-8");
    return res.send(file);
  } catch (error) {
    return res.send(error);
  }
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});

console.log("End of the script");

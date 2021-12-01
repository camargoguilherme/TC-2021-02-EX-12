const axios = require("axios").default;

async function requests() {
  try {
    const { data } = await axios.post("http://localhost:3000/books", {
      ID: 3,
      name: "My Boook",
      author: "Me and only me",
    });
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }

  try {
    const { data } = await axios.get("http://localhost:3000/books");

    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
}

async function exercicio1() {
  //Exercício 1: no arquivo "client.js", adicione um post para um novo livro e um post com um ID existente.
  // Exercite o uso de Promises.
  // POST novo livro
  try {
    const { data } = await axios.post("http://localhost:3000/books", {
      ID: 4,
      name: "A Arte da Guerra",
      author: "Sun Tzu",
    });
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }

  // POST livro existente
  try {
    const { data } = await axios.post("http://localhost:3000/books", {
      ID: 2,
      name: "Os Lusiadas",
      author: "Luis de Camoes",
    });
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }

  try {
    const { data } = await axios.get("http://localhost:3000/books");

    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
}

async function exercicio2() {
  //Exercício 2: no arquivo "client.js", após recuperar todos os livros,
  // faça requisições um-a-um para cada livro usando seu ID em /books/<ID>
  // POST novo livro
  const LIVROS = [];
  try {
    const { data } = await axios.get("http://localhost:3000/books");
    data.forEach((livro) => {
      LIVROS.push(livro);
    });
  } catch (error) {
    console.log(error.response.data);
  }

  try {
    LIVROS.forEach(async ({ ID }) => {
      const { data } = await axios.get(`http://localhost:3000/books/${ID}`);
      console.log(data);
    });
  } catch (error) {
    console.log(error.response.data);
  }
}

async function exercicio4() {
  //Exercício 4: no arquivo "client.js", faça um GET para "/log" do exercício 3.

  try {
    const { data } = await axios.get(`http://localhost:3000/log`);
    console.log(data);
  } catch (error) {
    console.log(error.response.data);
  }
}

requests();
exercicio1();
exercicio2();
exercicio4();

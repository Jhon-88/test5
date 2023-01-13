/*1 - Cadastrar novo usuário
2 - Ver um usuário pelo ID
3 - Ver todos os usuário
4 - Pesquisar usuário por nome
5 - Deletar usuário
6 - Sair
=Usuario=

-nome
-email
-nascimento
-cpf
-sexo
Digite sua opção:?*/

const input = require("simple-input");
var cadastros = [];
const fs = require("fs");

async function main() {
  opcoes();
  const arquivo = fs.readFileSync("./cadastro.json").toString();
  cadastros = JSON.parse(arquivo);
}
async function opcoes() {
  console.log("1 - Cadastrar novo usuário");
  console.log("2 - Ver um usuário pelo ID");
  console.log("3 - Ver todos os usuário");
  console.log("4 - Pesquisar usuário por nome");
  console.log("5 - Deletar usuário");
  console.log("6 - Sair");
  const opc = await input("Digite uma opção:");
  if (opc === "1") {
    cadastra();
  } else if (opc === "2") {
    console.log("2");
  } else if (opc === "3") {
    console.log(cadastros);
    opcoes();
  } else if (opc === "4") {
    console.log("4");
  } else if (opc == "5") {
    console.log("5");
  } else if (opc == "6") {
    sair();
  } else {
    console.log("Digite uma opção valida");
    opcoes();
  }
}

async function cadastra() {
  const nome = await input("digite seu nome");
  const email = await input("digite seu email");
  const nascimento = await input("digite sua data de nascimento");
  const cpf = await input("digite seu cpf");
  const sexo = await input("digite seu sexo");

  const cadastro = {};
  cadastro.nome = nome;
  cadastro.email = email;
  cadastro.nascimento = nascimento;
  cadastro.cpf = cpf;
  cadastro.sexo = sexo;
  cadastros.push(cadastro);
  opcoes();
}

async function sair() {
  fs.writeFileSync("./cadastro.json", JSON.stringify(cadastros));
  process.exit(0);
}
main();

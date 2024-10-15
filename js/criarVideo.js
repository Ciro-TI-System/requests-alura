import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
  evento.preventDefault();

  const imagem = document.querySelector("[data-imagem]").value;
  const url = document.querySelector("[data-url]").value;
  const titulo = document.querySelector("[data-titulo]").value;
  const descricao = Math.floor(Math.random() * 10).toString(); // Gere uma descrição aleatória

  try {
    await conectaApi.criaVideo(titulo, descricao, url, imagem);

    // Redireciona para a página de envio concluído
    window.location.href = "../pages/envio-concluido.html";
  } catch (e) {
    alert(e);
  }
}

// Adiciona o evento de submit ao formulário
formulario.addEventListener("submit", (evento) => criarVideo(evento));

import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(titulo, descricao, url, imagem) {
  const video = document.createElement("li");
  video.className = "videos__item";
  video.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
      title="${titulo}" frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>
    <div class="descricao-video">
      <img src="${imagem}" alt="Imagem representando o canal do vídeo ${titulo}">
      <h3>${titulo}</h3>
      <p>${descricao}</p>
    </div>`;
  return video;
}

async function listaVideos() {
  try {
    lista.innerHTML = `<p>Carregando vídeos...</p>`; // Indicador de carregamento
    const listaApi = await conectaApi.listaVideos();
    lista.innerHTML = ""; // Limpa o indicador após carregar
    listaApi.forEach((elemento) =>
      lista.appendChild(
        constroiCard(
          elemento.titulo,
          elemento.descricao,
          elemento.url,
          elemento.imagem
        )
      )
    );
  } catch (erro) {
    console.error("Erro ao carregar vídeos:", erro);
    lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h2>`;
  }
}

listaVideos();

import { searchVideoAPI } from "./conexaoApi.js";
import constroiCard from "./mostrarVideos.js";

async function searchVideo(event) {
  event.preventDefault();

  const dadosPesquisa = document.querySelector("[data-pesquisa]").value;
  const search = await searchVideoAPI(dadosPesquisa);

  const list = document.querySelector("[data-lista]");

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  search.forEach((elemento) =>
    list.appendChild(
      constroiCard(
        elemento.titulo,
        elemento.descricao,
        elemento.url,
        elemento.imagem
      )
    )
  );

  if (search.length == 0) {
    list.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`;
  }
}

const buttonSearch = document.querySelector("[data-botao-pesquisa]");
buttonSearch.addEventListener("click", (event) => searchVideo(event));

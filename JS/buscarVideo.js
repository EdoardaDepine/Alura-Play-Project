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
}

const buttonSearch = document.querySelector("[data-botao-pesquisa]");
buttonSearch.addEventListener("click", (event) => searchVideo(event));

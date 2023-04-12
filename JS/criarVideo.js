import { createdVideoAPI } from "./conexaoApi.js";
const formulary = document.querySelector("[data-formulario]");

async function createdVideo(event) {
  event.preventDefault();

  const imagem = document.querySelector("[data-imagem]").value;
  const url = document.querySelector("[data-url]").value;
  const titulo = document.querySelector("[data-titulo]").value;
  const descricao = Math.floor(Math.random() * 10).toString();

  try {
    await createdVideoAPI(titulo, descricao, url, imagem);

    window.location.href = "../pages/envio-concluido.html";
  } catch (error) {
    alert(error);
  }
}

formulary.addEventListener("submit", (event) => createdVideo(event));

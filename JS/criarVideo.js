const formulary = document.querySelector("[data-formulario]");

function createdVideo(event) {
  event.preventDefault();
  const imagem = document.querySelector("[data-imagem]").value;
  const url = document.querySelector("[data-url]").value;
  const titulo = document.querySelector("[data-url]").value;
  const descricao = Math.floor(Math.random() * 10).toString();
}

formulary.addEventListener("submit", (event) => createdVideo(event));

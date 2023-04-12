async function getVideoList() {
  const videoListString = await fetch("http://localhost:3000/videos");
  const videoList = await videoListString.json();

  return videoList;
}

async function createdVideoAPI(titulo, descricao, url, imagem) {
  const conectionAPI = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-type": "aplication/json",
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem,
    }),
  });

  if (!conectionAPI.ok) {
    throw new Error("Não foi possível enviar o vídeo");
  }

  const conectionAPIconverter = conectionAPI.json();
  return conectionAPIconverter;
}

async function searchVideoAPI(nameVideo) {
  const conectionAPI = await fetch(
    `http://localhost:3000/videos/?q=${nameVideo}`
  );
  const conectionAPIconverter = conectionAPI.json();

  return conectionAPIconverter;
}

export { getVideoList, createdVideoAPI, searchVideoAPI };

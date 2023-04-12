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

  const conectionAPIconverter = conectionAPI.json();
  return conectionAPIconverter;
}

async function searchVideo(nameVideo) {
  const conectionAPI = await fetch(
    `http://localhost:3000/videos/q=${nameVideo}`
  );
  const conectionAPIconverter = conectionAPI.json();

  return conectionAPIconverter;
}

export { getVideoList, createdVideoAPI, searchVideo };

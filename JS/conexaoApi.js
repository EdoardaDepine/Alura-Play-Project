export default async function getVideoList() {
  const videoListString = await fetch("http://localhost:3000/videos");
  const videoList = await videoListString.json();

  return videoList;
}

export default async function createdVideo(titulo, descricao, url, imagem) {
  const conectionAPI = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-type": "aplication/json",
    },
    body: JSON.stringify({
      titulo: titulo,
      descricao: `${descricao} mil visualizaões`,
      url: url,
      imagem: imagem,
    }),
  });

  const conectionAPIconverter = conectionAPI.json();
  return conectionAPIconverter;
}

export default async function getVideoList() {
  const videoListString = await fetch("http://localhost:3000/videos");
  const videoList = await videoListString.json();

  return videoList;
}

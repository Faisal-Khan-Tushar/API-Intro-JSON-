function loadPhotos() {
  fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayPhotos(data))
}
loadPhotos();
function displayPhotos(photos) {
  console.log(photos)
  const section = document.getElementById('photos')
  for (const photo of photos) {
    const div = document.createElement('div')
    div.innerHTML = `
    <h1>id-${photo.id}</h1>
    <h1>title-${photo.title}</h1>
    <h3>url-${photo.url}</h3>
    `
    section.appendChild(div);
  }
}
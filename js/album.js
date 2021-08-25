function loadAlbums() {
  fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayAlbums(data))
}
loadAlbums();
function displayAlbums(albums) {
  console.log(albums);
  const div = document.getElementById('albums')
  for (const album of albums) {
    const p = document.createElement('p');
    p.style.backgroundColor = 'orange';
    p.style.padding = '10px';
    p.style.borderRadius = '10px';
    p.innerText = album.title;
    div.appendChild(p);
  }

}
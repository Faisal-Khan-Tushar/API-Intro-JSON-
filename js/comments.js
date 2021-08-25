function loadComment() {
  fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data))
}
loadComment()
function displayComment(comments) {
  console.log(comments);
  const section = document.getElementById('comments')
  for (const comment of comments) {
    const div = document.createElement('div')
    div.style.backgroundColor = "lime";
    div.style.padding = '10px';
    div.style.margin = '10px';
    div.style.borderRadius = '5px';
    div.innerHTML = `
   
 <h1>Commented by- ${comment.name}</h1>
 <h2>Id-${comment.id}</h2>
 <p>${comment.body}</p>
  `
    section.appendChild(div);
  }

}
function loadUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}
// loadUsers();
function displayUsers(users) {

  const ul = document.getElementById('users');
  for (const user of users) {
    const li = document.createElement('li');
    li.classList.add('user')
    li.innerText = `
    user name:${user.name}.User email:${user.email}
    `;
    ul.appendChild(li);
  }
}

//loading posts
function loadPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}
loadPosts()
function displayPosts(posts) {
  // console.log(posts)
  const section = document.getElementById('posts');
  for (const post of posts) {
    const div = document.createElement('div');
    div.classList.add('posts')
    div.innerHTML = `
    <h1>${post.id}</h1>
    <h3>${post.title}</h3>
    <p>${post.body}</p>
    `
    section.appendChild(div);
  }

}
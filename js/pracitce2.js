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
//get,post,patch,delete
/*
get->get means if someone posts something on facebook, and I see it with my browser, that means I am getting their data that they have sent to the sever.This is called the get procedure.

post->if I post something on my wall & eventually they will be sent to facebook servers. When anyone else will see my posts they will get the data & I have posted the data in this regard.

patch->if I am wounded and I patch myself, or in technicl term, if I updated something, then it is called patching.

delete->if I delete something.
*/

function addAPost2() {
  fetch('https://jsonplaceholder.typicode.com/pasts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'This is a title',
      body: 'This is the body of the title',
      userId: 1
    }),
    hearders: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
    .then(res => res.json())
    .then(data => console.log(data))
}
function addAPost() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'This is a title',
      body: 'This is the body of the title',
      userId: 1
    }),
    hearders: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
    .then(res => res.json())
    .then(data => console.log(data))
}
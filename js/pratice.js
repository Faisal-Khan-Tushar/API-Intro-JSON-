function loadUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers(data))
}
function displayUsers(users) {
  const ul = document.getElementById('users');
  for (const user of users) {
    // console.log(user.name);

    const li = document.createElement('li');
    li.innerText = `User name: ${user.name}. Email id-${user.email}`;
    ul.appendChild(li);


  }
}
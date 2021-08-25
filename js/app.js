function loadData() {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(amarData => console.log(amarData))


}
function loadUsers() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => pleaseAppiLoadUsers(data))
}
function loadPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
}
// loadUsers();
function pleaseAppiLoadUsers(data) {
  console.log(data);
}
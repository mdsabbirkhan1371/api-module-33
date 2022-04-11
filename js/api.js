// function updateJson() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(data => console.log(data.id))
// }
function updatePost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data))
}



// get user 
function userUpdate() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data))
}

// get post 

function displayUser(data) {
    const ul = document.getElementById('user-list')
    for (const user of data) {
        console.log(user)
        const li = document.createElement('li')
        li.innerText = `name:${user.name}  email:${user.email}`;
        ul.appendChild(li)
    }
}
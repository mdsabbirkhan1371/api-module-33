function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}
loadPosts();


function displayPost(posts) {
    const postContainer = document.getElementById('posts')
    for (const post of posts) {

        console.log(post)
        const div = document.createElement('div')
        div.classList.add('post')
        div.innerHTML = `
        <h2>${post.id}</h2>
        <h3>${post.title}</h3>
       <p>${post.body}</p>
        `
        postContainer.appendChild(div)
    }
}
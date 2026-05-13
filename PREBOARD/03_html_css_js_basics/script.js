const button = document.querySelector("#loadPostsButton");
const postsDiv = document.querySelector("#posts");

const loadPosts = async () => {
  postsDiv.textContent = "Loading...";

  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const posts = await response.json();

  postsDiv.innerHTML = "";
  posts.forEach((post) => {
    const article = document.createElement("article");
    article.className = "post";
    article.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
    postsDiv.appendChild(article);
  });
};

button.addEventListener("click", loadPosts);

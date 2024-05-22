const parsedDataArray = JSON.parse(localStorage.getItem('blogEntries')) || [];
const postAreaElement = document.getElementById('post-area');
const storedData = localStorage.getItem('blogEntries');
let blogPost = '';

if (storedData) {
    const parsedData = JSON.parse(storedData);
}
for (let i = 0; i < parsedDataArray.length; i++) {
    blogPost += `
    <div class="blog-post-element">
        <h2>${parsedDataArray[i].title}</h2>
        <p><strong>Author:</strong> ${parsedDataArray[i].author}</p>
        <p>${parsedDataArray[i].content}</p>
    </div>
`;
}
    
postAreaElement.innerHTML = blogPost;


const backArrow = document.getElementById('backArrow');
    if (backArrow) {
        backArrow.addEventListener('click', function (event) {
            event.stopPropagation();
            window.location.href = 'index.html';
        });
     }

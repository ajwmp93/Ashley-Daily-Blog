document.addEventListener('DOMContentLoaded', function() { 
    
    const postAreaElement = document.getElementById('postArea');
    const articles = JSON.parse(localStorage.getItem('articles')) || [];

    let blogPostElement = '';
    for (let i = 0; i < articles.length; i++) {
        blogPostElement += `
        <div class="blog-post-element">
        <h2>${parsedData[i].title}</h2>
        <p><strong>Author:</strong> ${parsedData[i].author}</p>
        <p>${parsedData[i].content}</p>
        `
        postAreaElement.innerHTML = blogPostElement
    }
    const backArrow = document.getElementById('backArrow');
     if (backArrow) {
        backArrow.addEventListener('click', function (event) {
            event.stopPropagation();
            window.location.href = 'index.html';
        });
     }
});
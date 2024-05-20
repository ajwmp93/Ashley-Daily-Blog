document.addEventListener('DOMContentLoaded', function() { 
    const submitButton = document.getElementById('submitbutton');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();

        const author = document.getElementById('author').value;
        const title = document.getElementById('blogTitle').value;
        const  content = document.getElementById('blogContent').value;

        const blogData = {author: author, title: title, content: content};
        console.log('blog data:', blogData);

        localStorage.setItem('blogData', JSON.stringify(blogData));
        localStorage.setItem('author', author);
        localStorage.setItem('blogTitle', title);
        localStorage.setItem('blogContent', content);

    window.location.href = 'blog.html';
    });

    const storedData = localStorage.getItem('blogData');
    console.log('stored data:', storedData);

    const parsedData = JSON.parse(storedData);
    console.log('parsed data:', parsedData);

    console.log('author:', parsedData.author);

    document.getElementById('author').value = parsedData.author;
    document.getElementById('blogTitle').value = parsedData.title;
    document.getElementById('blogContent').value = parsedData.content;

    function displayBlogPosts () {
        const storedData = localStorage.getItem('blogData');
        if (storedData) {
             const parsedData = JSON.parse(storedData);

            const blogPostElement = document.createElement('div');
            blogPostElement.classList.add('blog-post');
            blogPostElement.innerHTML = `
            <h2>${parsedData.title}</h2>
            <p><strong>Author:</strong> ${parsedData.author}</p>
            <p>${parsedData.content}</p>
            `;

            const blogPostsContainer = document.getElementById('blogPostsContainer');
            blogPostsContainer.appendChild(blogPostElement);
        }
    }

    displayBlogPosts ();
});

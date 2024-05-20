document.addEventListener('DOMContentLoaded', function() { 

    const submitButton = document.getElementById('submitbutton');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();

        let blogEntries = JSON.parse(localStorage.getItem('blogEntries')) || [];

        const author = document.getElementById('author').value;
        const title = document.getElementById('blogTitle').value;
        const  content = document.getElementById('blogContent').value;

        const blogData = {author: author, title: title, content: content};

        blogEntries.push(blogData);

        localStorage.setItem('blogEntries', JSON.stringify(blogEntries));
        localStorage.setItem('author', author);
        localStorage.setItem('blogTitle', title);
        localStorage.setItem('blogContent', content);

    window.location.href = 'blog.html';
    });
});
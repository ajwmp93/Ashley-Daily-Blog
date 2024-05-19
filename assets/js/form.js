const title = document.getElementById('blogTitle').value;
const  content = document.getElementById('blogContent').value;

localStorage.setItem('blogTitle', title);
localStorage.setItem('blogContent', content);

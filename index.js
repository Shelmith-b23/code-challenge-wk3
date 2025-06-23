const baseURL =' http://localhost:3000/posts'
function main(){
    displayPost();
    addNewPostListener();

}

function displayPost(){
    fetch(baseURL).then(Response => res.json())
    .then(post =>{
        const postlist = document.getElementById('post-list');
      postlist.innerHTML = '';
      post.array.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.addEventListener('click', () => handlePostClick(post.id));
        postList.appendchild(postDiv);
   });
   
   if(post.length > 0){
    handlePostClick(post.id);
   }
    });
}

function handlePostClick(postId){
    fetch(`${baseURL}`/$(postId)).then(response => res.json())
    .then(post =>{
        const postDetail = document.getElementById('post-detail');
        postDetail.innerHTML= `
        <h2>${post.title}</h2>
        <img src="${post.image}" alt="Post Image" width="100"/>
        <p>${post.content}</p>
        <small>By ${post.author}</small>
        <br />
        <button onclick="showEditForm(${post.id}, '${post.title}', \`${post.content}\`)">Edit</button>
        <button onclick="deletePost(${post.id})">Delete</button>
        `;
         
    });

    function addNewPostListener(){
        document.getElementById('new-post-form').addEventListener('submit', function (e){
            e.preventDefault();


            const title = document.getElementById('new-title').value; 
            const author = document.getElementById('new-author').value; 
            const content = document.getElementById('new-content').value;

            const newPost = {
                 title, 
                 author,
                 content,
                 image: "https://apis.xogrp.com/media-api/images/2b2642b8-41fe-11e5-9816-22000aa61a3e"
            };


            fetch(baseURL, {
                method: 'POST',
                headers: {'content-Type': 'application/json'},
                body: JSON.stringify(newPost)
            })
            .then(response => res.json())
            .then(post =>{
                displayPosts();
                this.requestFullscreen();
            });
        });
    }

    function showEditForm(id, title, content){
        const form = document.getElementById('edit-post-form');
        form.classList.remove('hidden');
        form.dataset.id = id;
        document.getElementById('edit-title').value = title;
        document.getElementById('edit.content').value = content;
    }

   document.getElementById('edit-post-form').addEventListener('submit', function (e) {
  e.preventDefault();
      
      const id = this.dataset.id;
      const updatedPost = {
        title: document.getElementById('edit-title').value,
        content: document.getElementById('edit-content').value
      };

      fetch(`${baseURL}/${id}`,{
        method: 'PATCH',
        headers: {'content-Type': 'application/json'},
        body: JSON.stringify(updatePost)
      })
      .then(response => res.json())
      .then(() =>{
        displayPost();
        document.getElementById('edit-post-form').classList.add('hidden');
      });
      });

      document.getElementById('cancel-edit').addEventListener('click', function (){
        document.getElementById('edit-post-form').classList.add('hidden');
      });

      function deletePost(id) {
        fetch(`${baseURL}/${id}`,{
            method: 'DELETE'
        }).then(() => {
            displayPost();
            document.getElementById('post-detail').innerHTML = '<h2>Post deleted. Select another post.</h2>';   
        });
      }

    }

document.addEventListener('DOMContentLoaded', main);

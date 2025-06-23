# code-challenge-wk3
Setup
Create a new project folder and inside it, add an index.html, src/index.js, css/styles.css and a db.json file.
Run npm install -g json-server@0.17.4 to install json-server.
Add some valid JSON sample data in the db.json file.
Run json-server db.json to get the backend started. This will serve your mock API.
Run live-server to start the frontend in your browser.
Write your code in the index.js file.
As you are writing your code and completing the deliverables, ensure that it works on the DOM.
Endpoints
Your base URL for your API will be: http://localhost:3000

The endpoints you may need are:

GET /posts - To retrieve all blog posts.
GET /posts/:id - To retrieve a single blog post by its ID.
POST /posts - To create a new blog post.
PATCH /posts/:id - To update an existing blog post.
DELETE /posts/:id - To delete a blog post.
Feel free to add any additional classes or IDs to any elements in the index.html file as you see fit to facilitate DOM manipulation.

Core Deliverables
As a user, I can:

See all blog post titles and the images in the list. When the page loads, fire a function called displayPosts that requests the data from the server (http://localhost:3000/posts) to get all the post objects. Then, display the title for each post as a list item (e.g., within an <ul> or a series of <div> elements) inside the div with the ID of #post-list.

Click on a post title from the #post-list and see its details. Attach a click event listener to each post title (or its containing element) from the #post-list div. When clicked, fire a callback function called handlePostClick to fetch and display all the info about that specific post (title, content, and author) inside the div with the ID of #post-detail.

Add a new blog post. Attach a submit event listener to the form with the ID of new-post-form using a function called addNewPostListener. After the submission, create a new post object from the form input values (title, content, author) and add it to the #post-list div. The new post does not need to persist after refreshing the page for this deliverable.
Attention here: Your program should have a main() function that invokes displayPosts and addNewPostListener after the DOM has fully loaded and started the program logic.
Advanced Deliverables
These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills.

Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

As a user, I can:

See the details for the first post as soon as the page loads (without clicking on a post title).
Update the title and content for a post by submitting a form. Add an "Edit" button to the #post-detail section. When clicked, display an editable form (or fields) within #post-detail that allows the user to change the post's title and content. Upon form submission, the changes should be reflected on the frontend (#post-list and #post-detail). No need to persist these changes to the backend for this deliverable.
You can add this HTML to your index.html file to create an edit form:


<form id="edit-post-form" class="hidden"> <!-- Add 'hidden' class by default -->
    <h4>Update Post Details</h4>
    <label for="edit-title">Title:</label>
    <input type="text" name="title" id="edit-title" class="p-2 border rounded-md w-full mb-2">
    <label for="edit-content">Content:</label>
    <textarea name="content" id="edit-content" rows="5" class="p-2 border rounded-md w-full mb-4"></textarea>
    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">Update Post</button>
    <button type="button" id="cancel-edit" class="bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md ml-2">Cancel</button>
</form>

Delete a post. Add a "Delete" button to the #post-detail section. When clicked, the post should be removed from the #post-list div, and the #post-detail div should be cleared or display a default message. No need to persist this deletion to the backend for this deliverable.
Extra Advanced Deliverables
You'll need these endpoints for the advanced deliverables to work:

POST /posts
PATCH /posts/:id
DELETE /posts/:id
As a user, I can:

Persist my updates to a post's title and content by making a PATCH request to the API.
Persist new posts that I create by making a POST request to the API.
Persist any post deletions by making a DELETE request to the API.


// CRUD: Create, Read, Update and Delete

// Get all posts
async function getAllPosts() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    console.log(posts);
    return posts;
}
// getAllPosts();

// Get a post by the id
async function getPostById(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const post = await res.json();
    console.log(post);
    return post;
}
// getPostById(5);


// Create a new post
async function createPost(blogData) {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(blogData),
        headers: {
            "Content-type": "application/json;"
        }
    });

    const data = await res.json();
    console.log(data);
    return data;
    
}

const blogData = {title: "First Blog Post", body: "Hello World"};
// createPost(blogData);


async function updatePost(id, blogData) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PUT",
        body: JSON.stringify(blogData),
        headers: {
            "Content-type": "application/json;"
        }
    });

    console.log(res.status);
    

    const data = await res.json();
    console.log(data);
    return data;    
}

// updatePost(1, blogData);

const newBlogData = {title: "My new Title"};

async function patchPost(id, blogData) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "PATCH",
        body: JSON.stringify(blogData),
        headers: {
            "Content-type": "application/json;"
        }
    });

    console.log(res.status);
    

    const data = await res.json();
    console.log(data);
    return data;    
}

// patchPost(1, newBlogData);

async function deletePost(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: "DELETE"
    });

    // console.log(res);

    if (res.ok) {
      console.log("Deleted post successfully");
    } else {
      console.error("Failed to delete post");
    }
    
}

deletePost(100000);
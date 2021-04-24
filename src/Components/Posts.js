import '../Styles/Posts.css';
import React from 'react';
import {Link} from 'react-router-dom';
  
export var posts = [
  {
    title: 'Blog Post #1',
    content: 'My first blog post is all about my blog post and how to write a new post in my blog, you can find it here.',
    published: '3 days ago',
    author: 'Israel Israeli',
    image: 'https://www.pngarts.com/files/1/X-Shape-PNG-High-Quality-Image.png',
    id: '1'
  },
  {
    title: 'Blog Post #2',
    content: 'My second blog post is all about my blog post.',
    published: '2 days ago',
    author: 'Joe',
    image: 'https://www.pngarts.com/files/1/X-Shape-PNG-High-Quality-Image.png',
    id: '2'
  },
  {
    title: 'Blog Post #3',
    content: 'My third blog post is all about my blog post.',
    published: '1 day ago',
    author: 'Yarin',
    image: 'https://www.pngarts.com/files/1/X-Shape-PNG-High-Quality-Image.png',
    id: '3'
  }
]

function Posts() {
  return posts.map(function(post) {
      return <Post
          title={post.title}
          content={post.content}
          image={post.image}
          published={post.published}
          author={post.author}
          id={post.id}
      />
  })
}

function Post(props) {
  return (
    <div className="post-container">
      <div className="post">
        <label className="post-title"><Link to={`/post/${props.id}`} className="post-title"> {props.title} </Link></label>
        <p className="post-content">{props.content}</p>
        <img width="90" height="90" className="post-image" src={props.image}/>
        <label className="post-footer">Published {props.published} by {props.author}</label>
      </div>
    </div>
  );
}

export default Posts;
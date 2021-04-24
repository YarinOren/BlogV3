import React from 'react';
import {posts} from '../Components/Posts';
import {useParams} from 'react-router-dom';

function Post () {
    let { id } = useParams();
    return (
        <div>
            <center>
                <h1>{posts[id - 1].title}</h1>
                <p>{posts[id - 1].content}</p>
                <br></br>
                <label>Published {posts[id - 1].published} by {posts[id - 1].author}</label>
            </center>
        </div>
    );
}

export default Post;
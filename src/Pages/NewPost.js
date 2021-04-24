import React from 'react';

function NewPost () {
    return (
        <div>
            <center>
                <h1>Create new post</h1>
                <p>
                    <form>
                        <label>Post Title:   </label>
                        <input type="text" size="40"></input>
                        <br/><br/>
                        <textarea rows="8" cols="60" placeholder="Enter post content here..."></textarea>
                        <br/><br/>
                        <button type="submit">Create post</button>
                    </form>
                </p>
            </center>
        </div>
    );
}

export default NewPost;
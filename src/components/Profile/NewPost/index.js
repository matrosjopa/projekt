import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks'

const new_post = gql`
    mutation createPost($text: String!, $title: String!, $userId: ID!) {
        createPost(text: $text, title: $title, userId: $userId) {
            id
        }        
    }
`;

function NewPost() {
    const [createPost, { data }] = useMutation(new_post);
    let userId, title, text;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    createPost({
                        variables: {
                            userId: userId.value,
                            title: title.value,
                            text: text.value
                        }
                    });
                }}>
                <input
                    type='hidden'
                    ref={node => userId = node}
                />
                <input
                    name="post_title"
                    className="post_area"
                    type="text"
                    placeholder="Your title"
                    ref={node => title = node}
                />
                <textarea
                    name="post_text"
                    className="post_area"
                    type="text"
                    placeholder="Your post"
                    ref={node => text = node}
                    
                />
                <button type='submit' className="wall-btn">New post</button>
            </form>
        </div>
    );
}

export default NewPost;
import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import { Post } from '../Post'

const AllPosts = gql`
  {
    allPosts(first:5) {
      id
      text
      title
      user {
        id
        name
      }
    }
  }
`;

function AllPostList() {
    const { loading, error, data } = useQuery(AllPosts);
    for (let key in arguments[0])
    console.log(key, arguments[0][key]);
    console.log('data', data)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
    return (
      
      <div key='allPost'>
          {data.allPosts.map(({id, user, title, text}) => ( 
            <div key={id}>
              <Post 
              user={user ? user.name: "invognito"} 
              title={title}
              text={text}
              
              />
            </div>
          ))}
          
      </div>
    );
  }

  export default AllPostList;
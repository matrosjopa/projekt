import React from 'react';
import ReactDom from 'react-dom'
import './Wall.css'
import ApolloClient from "apollo-boost";
import { ApolloProvider, useQuery, useApolloClient } from "@apollo/react-hooks";
import gql from "graphql-tag";


import  AllPostList from '../AllPosts'

import NewPost from '../NewPost'

export const client = new ApolloClient({
  uri: `https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex`
});




/*
const User = gql`
  {
  User (id: "") {
    id
    name  
  }
  }
`;


const Post = gql`
  {
    Post(id: "${props.match.params.userId}" ) {
      id
      title
      text
    }
  }
`;


function PostList() {
  const { loading, error, data } = useQuery( Post );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>

  return (
    <div>
      <li>{data.Post.id}</li>
      <li>{data.Post.title}</li>
      <li>{data.Post.text}</li>
    </div>
  );
}





*/



export class Wall extends React.Component {

  render() {
    return (
<ApolloProvider client={client}>
        <div className="Wall">
        <NewPost />
        <AllPostList />
        </div>
</ApolloProvider>
    );
  }
}


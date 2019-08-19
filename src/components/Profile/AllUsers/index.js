import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { NavLink } from 'react-router-dom'




const AllUsers = gql`
  {
    allUsers {
      id
      name
      email
    }
  }
`;



function AllUsersList() {
  const { loading, error, data } = useQuery(AllUsers);
  for (let key in arguments[0])
  console.log(key, arguments[0][key]);
  console.log('data', data)
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul key='allUsers'>
      {data.allUsers.map(({ id, name, email }) => (
        <div key={id}>
        <NavLink className="btn_chat" to={"/" + id}>{name}</NavLink>
        {email}
        </div>
      ))}
    </ul>
  );
}


export default AllUsersList;
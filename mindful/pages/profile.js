import React from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Router from 'next/router';

function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        {/* Kailin hide this part */}
        {/* <p>{JSON.stringify(user, null, 2)}</p> */}
        <img src={user.picture} alt={user.name} />
        <h2>name: </h2><span>{user.name}</span>
        <h2>email: </h2><span>{user.email}</span>
        <h1>
         
          <button type="submit"onClick={() => Router.push('/')}>Back to Home</button> 
          <button type="submit"onClick={() => Router.push('/journal')}>Journal Page</button> 
        </h1>
      </div>
    )
  );
}

export default withPageAuthRequired(Profile);
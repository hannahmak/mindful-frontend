import React from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <p>{JSON.stringify(user, null, 2)}</p>
        <img src={user.picture} alt={user.name} />
        <h2>name: </h2><span>{user.name}</span>
        <h2>email: </h2><span>{user.email}</span>
        <h1>
          <a href="/">Back to Home</a>
        </h1>
      </div>
    )
  );
}

export default withPageAuthRequired(Profile);
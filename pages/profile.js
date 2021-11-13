import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';

function Profile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div>
        <p>{JSON.stringify(user, null, 2)}</p>
        <Image src={user.picture} alt={user.name} />
        <h2>name: </h2><span>{user.name}</span>
        <h2>email: </h2><span>{user.email}</span>
        <h1>
          <Link href="/">Back to Home</Link>
        </h1>
      </div>
    )
  );
}

export default withPageAuthRequired(Profile);
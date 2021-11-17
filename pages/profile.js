import React from 'react';
import Image from "next/image";
import Button from '../comps/Button';
import Link from "next/link";
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
          <Image src={user.picture} alt={user.name} width={200} height={200} />
        <h2>name: </h2><span>{user.name}</span>
        <h2>email: </h2><span>{user.email}</span>
        <h1>
          <Button routeTo="./" ButtonText="Home" type="submit" />
          <Button routeTo="./journal" ButtonText="Journal Page" type="submit" />
          <Button routeTo="./api/auth/logout" ButtonText="Logout" type="submit" />
        </h1>
      </div>
    )
  );
}

export default withPageAuthRequired(Profile);

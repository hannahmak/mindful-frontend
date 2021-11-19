import React, { useEffect } from 'react';
import Image from 'next/image';
import Button from '../comps/Button';
import Link from 'next/link';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Button as ChatButton } from '@mui/material';	
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';	
import AuthService from '../services/AuthService';	
import Router from 'next/router';

const checkIfUserAlreadyStoreProfile = () => {	
	const profile = localStorage.getItem('hasStoreProfile');	
	return profile ? true : false;	
};

function Profile() {
  const authService = new AuthService();
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  useEffect(() => {
		(async () => {
			const isAlreadyStoreProfile = checkIfUserAlreadyStoreProfile();

			console.log(isAlreadyStoreProfile);
			if (!isAlreadyStoreProfile) await storeProfile();
		})();
	}, []);

	const storeProfile = async () => {
		try {
			await authService.saveProfile(user);
			console.info('Succesfully store profile to database');
		} catch (error) {
			console.error(error.message);
		}
	};

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

        <Link href="/chat">
					<ChatButton
						sx={{
							background: 'skyblue',
							bottom: 30,
							color: 'white',
							position: 'fixed',
							right: 50,
						}}
					>
						<ChatBubbleIcon sx={{ color: 'white' }} /> Go To Chat
					</ChatButton>
				</Link>
      </div>
    )
  );
}

export default withPageAuthRequired(Profile);

import styled from 'styled-components';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

const Menu = styled.a`
color: white;
text-decoration: none;
`

const NavBar = () => {
  const { user, isLoading } = useUser();

  if (user) {
    return <Container>
      <Link prefetch href="/" passHref>
        <Menu>Home</Menu>
      </Link>
      <Link prefetch href="/profile" passHref>
        <Menu>Profile</Menu>
      </Link>
      <Link prefetch href="/api/auth/logout" passHref>
        <Menu>Logout</Menu>
      </Link>
    </Container>
  } else {
    return <Container>
      <Link prefetch href="/" passHref>
        <Menu>Home</Menu>
      </Link>
      <Link prefetch href="/api/auth/login" passHref>
        <Menu>Login</Menu>
      </Link>
    </Container>
  }
}

export default NavBar;
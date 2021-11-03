import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
padding:20px;
width:100vw;
background: linear-gradient(140.51deg, rgba(255, 255, 255, 0.4) 0%, rgba(196, 196, 196, 0) 99.96%);
box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(40px);
flex-wrap:wrap;
margin-bottom:50px;
`
const Container1 = styled.div`
display:flex;
align-items:center;
`

const Container2 = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
gap:5%;

`

const Holder = styled.div `
flex:1;
`

const Image = styled.img `
width:10%;
`

const Link = styled.a `
color:white;
font-size:20px;
`


const Menu = ({

}) => {
    return <Container>
        <Holder>
            <Container1>
                <Image src="/logo.png"/>
            </Container1>
        </Holder>
        <Holder>
            <Container2>
                <Link href="/myprofile" >My Profile</Link>
                <Link href="/dashboard" >Dashboard</Link>
                <Link href="#" >Feed</Link>
                <Link href="#" >Chat</Link>
                <Link href="#" >Trend</Link>
            </Container2>
        </Holder>
    </Container>
}

export default Menu;
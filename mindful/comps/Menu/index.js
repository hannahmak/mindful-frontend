import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
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
width:15%;
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
                <Link>My Profile</Link>
                <Link>Dashboard</Link>
                <Link>Feed</Link>
                <Link>Chat</Link>
                <Link>Trend</Link>
            </Container2>
        </Holder>
    </Container>
}

export default Menu;
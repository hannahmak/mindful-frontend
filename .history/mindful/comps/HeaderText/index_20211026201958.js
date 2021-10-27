import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:-20px;
`
const Head = styled.h1`
font-size:40px;
color:white;
`

const Text = styled.p`
font-size:30;
color:white;
`



const HeaderText = ({
    head="Setup your profile",
    text="Pick Your Companion"
}) => {
    return <Container>
        <Head>{head}</Head>
        <Text>{text}</Text>
        
    </Container>
}

export default HeaderText;
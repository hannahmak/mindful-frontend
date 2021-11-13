import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Head = styled.h1`
font-size:40px;
color:#420062;
`

const Text = styled.p`
font-size:20px;
color:#420062;
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
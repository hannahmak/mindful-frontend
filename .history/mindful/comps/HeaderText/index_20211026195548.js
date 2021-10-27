import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;

`
const Head = styled.h1`
font-size:40px;
`

const Text = styled.p`
font-size:30;
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
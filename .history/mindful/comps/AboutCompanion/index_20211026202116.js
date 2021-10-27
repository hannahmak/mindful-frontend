import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`



const AboutCompanion = ({
    head="Setup your profile",
    text="Pick Your Companion"
}) => {
    return <Container>
        <Head>{head}</Head>
        <Text>{text}</Text>
        
    </Container>
}

export default AboutCompanion;
import styled from 'styled-components';

const Container = styled.div`
`
const Head = styled.h1`
font-size:40px;
`

const Text = styled.p`
font-size:30;
`



const HeaderText = ({}) => {
    return <Container>
        <Head>Setup your profile</Head>
        <Text>Pick Your Companion</Text>
        
    </Container>
}

export default HeaderText;
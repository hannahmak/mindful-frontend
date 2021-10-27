import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`



const CompanionAvatar = ({
}) => {
    return <Container>
        <Head>{head}</Head>
        <Text>{text}</Text>
        
    </Container>
}

export default HeaderText;
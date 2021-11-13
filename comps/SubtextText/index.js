import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
`
const Head = styled.p`
font-size:24px;
margin-bottom:0px;

`

const Text = styled.p`

`



const SubtextText = ({
    subhead="subhead",
    text="text"
}) => {
    return <Container>
        <Head>{subhead}</Head>
        <Text>{text}</Text>
        
    </Container>
}

export default SubtextText;
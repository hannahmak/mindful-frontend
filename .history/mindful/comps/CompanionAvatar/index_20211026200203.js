import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`



const Circle = styled.div`
max-width:
`

const Name = styled.p`
color:white;
`


const CompanionAvatar = ({
    name="Name"
}) => {
    return <Container>
        <Circle></Circle>
        <Name>{name}</Name>
        
    </Container>
}

export default CompanionAvatar;
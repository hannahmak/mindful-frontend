import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`



const Circle = styled.div`
width:120px;
height:120px;
background-color: rgba(255, 255, 255, .15); 
border-radius:60px;
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
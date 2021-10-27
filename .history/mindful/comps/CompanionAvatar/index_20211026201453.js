import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`



const Circle = styled.img`
width:120px;
height:120px;
box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
border-radius:60px;
`

const Name = styled.p`
color:white;
`


const CompanionAvatar = ({
    name="Name",
    // source="./assets/images/puffin.jpeg"
}) => {
    return <Container>
        <Circle src="./public/puffin.jpeg"/>
        <Name>{name}</Name>
        
    </Container>
}

export default CompanionAvatar;
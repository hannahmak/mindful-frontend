import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`



const Circle = styled.img`
width:100px;
height:100px;
box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
border-radius:60px;
`

const Name = styled.p`
color:white;
`


const CompanionAvatar = ({
    name="Name",
    source="https://i.natgeofe.com/n/496b9ca3-0839-43b9-9a4f-5501502d258a/atlantic-puffin_thumb.jpg"
}) => {
    return <Container>
        <Circle src={source}/>
        <Name>{name}</Name>
        
    </Container>
}

export default CompanionAvatar;
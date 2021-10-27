import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`



const Circle = styled.div`
width:120px;
height:120px;
background: linear-gradient(140.51deg, rgba(255, 255, 255, 0.4) 0%, rgba(196, 196, 196, 0) 99.96%);
/* Glass Effect Effect's */

box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(40px);
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
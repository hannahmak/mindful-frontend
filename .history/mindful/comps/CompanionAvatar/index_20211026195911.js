import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

const Name = styled.p`
`


const Circle = styled.div`
`



const CompanionAvatar = ({
    name="Name"
}) => {
    return <Container>
        <Circle></Circle>
        <Name></Name>
        
    </Container>
}

export default HeaderText;
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

const Holder = styled.div``

const image = styled.img``

const CompName = styled.p``

const CompDescription = styled.p``



const AboutCompanion = ({
}) => {
    return <Container>
        <Holder>
            <image/>
        </Holder>
        <Holder>
            <CompName>Meet Companion Name</CompName>
            <CompDescription></CompDescription>
        </Holder>

        
    </Container>
}

export default AboutCompanion;
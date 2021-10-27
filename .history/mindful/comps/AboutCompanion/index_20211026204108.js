import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:row;
align-items:center;
`

const Holder = styled.div`
display:flex;
flex:1;
justify-content:center;
`

const Holder2 = styled.div`
display:flex;
flex-direction:column;
flex:1;
`

const Image = styled.img`
height:292px;
width:292px;
border-radius:150px;
`

const CompName = styled.p`
font-style: normal;
color:white;
font-weight: bold;
font-size: 24px;
`

const CompDescription = styled.p`
font-size: 18px;
color:white;
max-width:70%;
`



const AboutCompanion = ({
    source="https://i.natgeofe.com/n/496b9ca3-0839-43b9-9a4f-5501502d258a/atlantic-puffin_thumb.jpg",
    companionname="Meet Companion Name",
    comp
}) => {
    return <Container>
        <Holder>
            <Image src={source}/>
        </Holder>
        <Holder2>
            <CompName>{companionname}}</CompName>
            <CompDescription>{compdescription}</CompDescription>
        </Holder2>
    </Container>
}

export default AboutCompanion;
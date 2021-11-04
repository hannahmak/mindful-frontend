import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding: 50px;
`

const Button = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 210px;
width: 210px;
border-radius: 50%;
background: linear-gradient(125deg, rgba(255,255,255,1), rgba(166, 164, 248,0.5));
box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(40px);
`

const Option = styled.div`
display:flex;
flex-direction:column;
`

const Image = styled.img`
width: 20%;
`

const CompName = styled.p`
font-style: normal;
color:white;
font-weight: 400;
font-size: 20px;
`



const LockedBadges = ({
    source="/lock.svg",
    text="Add Friend",
}) => {
    return <Container>
        <Button>
            <Image src={source}/>
        </Button>
        <Option>
            <CompName>{text}</CompName>
        </Option>
    </Container>
}

export default LockedBadges;
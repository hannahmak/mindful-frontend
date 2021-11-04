import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding-right: 30px;
padding-left: 30px;
padding-bottom: 70px;
`

const Button = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 100px;
width: 100px;
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
width: 100px
font-weight: 400;
font-size: 20px;
`



const EarnedBadges = ({
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

export default EarnedBadges;
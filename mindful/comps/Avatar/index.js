import { borderRadius, width } from '@mui/system';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`



const Circle = styled.img`
width:${props=>props.width};
height:${props=>props.height};
box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
border-radius:${props=>props.borderRadius};
`

const Name = styled.h1`
color:white;
display:${props=>props.show};
`


const Avatar = ({
    name="John Smith",
    source="https://i.natgeofe.com/n/496b9ca3-0839-43b9-9a4f-5501502d258a/atlantic-puffin_thumb.jpg",
    show="block",
    width="200px",
    height="200px",
    borderRadius="160px"
}) => {
    return <Container>
        <Circle width={width} height={height} borderRadius={borderRadius} src={source}/>
        <Name show={show} >{name}</Name>
        
    </Container>
}

export default Avatar;
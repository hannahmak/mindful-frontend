import { borderRadius, width } from '@mui/system';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
`

const Circle = styled.img`
    width:${props=>props.width};
    height:${props=>props.height};
    background: ${props=>props.color};
    box-shadow: 0px 0px 20px #F2F3F7;
    border-radius:${props=>props.borderRadius};
`

const AvatarPicture = ({
    source="/",
    width="110px",
    height="110px",
    borderRadius="160px",
    color="#B0D8D2",
}) => {
    return <Container>
        <Circle color={color} width={width} height={height} borderRadius={borderRadius} src={source}/>
    </Container>
}

export default AvatarPicture;
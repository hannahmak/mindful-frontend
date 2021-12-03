import { borderRadius, width } from '@mui/system';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
`

const Circle = styled.img`
    width: ${props=>props.width};
    height: ${props=>props.height};
    border-radius:${props=>props.borderRadius};
`

const AvatarPicture = ({
    source="aura.svg",
    borderRadius="160px",
    width= "81px",
    height= "81px",

 
}) => {
    return <Container>
        <Circle width={width} height={height} className="avatarpicture" borderRadius={borderRadius} src={source}/>
    </Container>
}

export default AvatarPicture;
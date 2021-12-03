import { borderRadius, width } from '@mui/system';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
`

const Circle = styled.img`
    width: 81px;
    height: 81px;
    border-radius:${props=>props.borderRadius};
`

const AvatarPicture = ({
    source="happy.svg",
    borderRadius="160px",
 
}) => {
    return <Container>
        <Circle className="avatarpicture" borderRadius={borderRadius} src={source}/>
    </Container>
}

export default AvatarPicture;
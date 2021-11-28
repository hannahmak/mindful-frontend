import { borderRadius, width } from '@mui/system';
import styled from 'styled-components';

const Container = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    gap:30px;
`

const Name = styled.h1`
    font-size:50px;
    color:#0F2046;
    display:${props=>props.show};
    margin-bottom:0px;
`


const Name = ({
    username="John Smith",
}) => {
    return <Container>
        <Name>{username}</Name>
    </Container>
}

export default Name;
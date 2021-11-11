import { borderRadius, width } from '@mui/system';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:row;
align-items:center;
width:90%;
`

const Circle = styled.img`
width:${props=>props.width};
height:${props=>props.height};
box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
border-radius:${props=>props.borderRadius};
`

const Holder1 = styled.div `
display:flex;
flex:1;
align-items:center;
justify-content:flex-start;
`
const Holder2 = styled.div `
display:flex;
flex:1;
align-items:center;
justify-content:flex-end;
height:100%;
width:100%;
`

const Check = styled.img `
width:20px;
`

const Moods = ({
    source="logo2.svg",
    width="70px",
    height="70px",
    borderRadius="160px",
    src="/open.svg"
}) => {
    return <Container>
        <Holder1>
            <Circle width={width} height={height} borderRadius={borderRadius} src={source}/>
        </Holder1>
        <Holder2>
            <Check src={src}/>
        </Holder2>
    </Container>
}

export default Moods;
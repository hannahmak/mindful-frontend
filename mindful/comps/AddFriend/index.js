import styled from 'styled-components';


const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`



const Circle = styled.div`
display:flex;
align-items:center;
justify-content:center;
width:${props=>props.width};
height:${props=>props.height};
box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
border-radius:${props=>props.borderRadius};

`

const Image = styled.img`
width:100px;
height:100px;

`


const AddFriend = ({
    source="/plus.svg",
    show="block",
    width="100px",
    height="100px",
    borderRadius="160px"
}) => {
    return <Container>
        <Circle width={width} height={height} borderRadius={borderRadius}>
            <Image src={source}/>
        </Circle>
    </Container>
}

export default AddFriend;
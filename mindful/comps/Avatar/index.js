import { borderRadius, width } from '@mui/system';
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:row;
align-items:center;
gap:30px;
`



const Circle = styled.img`
width:${props=>props.width};
height:${props=>props.height};
box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
border-radius:${props=>props.borderRadius};
margin-top:20px;
`

const Name = styled.h1`
font-size:50px;
color:#420062;
display:${props=>props.show};
margin-bottom:0px;
`

const Holder = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`

const Follow = styled.div`
display:flex;
flex-direction:row;
gap:20px;
`
const Following = styled.p`
color:#420062;
`
const FollowingNumber = styled.span`
color:#420062;
font-weight:800;
`

const Follower = styled.p`
color:#420062;
`
const FollowerNumber = styled.span`
color:#420062;
font-weight:800;
`



const Avatar = ({
    name="John Smith",
    source="https://i.natgeofe.com/n/496b9ca3-0839-43b9-9a4f-5501502d258a/atlantic-puffin_thumb.jpg",
    show="block",
    width="110px",
    height="110px",
    borderRadius="160px",
    following="0",
    follower="0"
}) => {
    return <Container>
        <Circle width={width} height={height} borderRadius={borderRadius} src={source}/>
        <Holder>
            <Name show={show} >{name}</Name>
            <Follow>
                <Following><FollowingNumber>{following}</FollowingNumber> Followers</Following>
                <Follower><FollowerNumber>{follower}</FollowerNumber> Followers</Follower>
            </Follow>
        </Holder>
        
    </Container>
}

export default Avatar;
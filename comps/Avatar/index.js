import { borderRadius, width } from '@mui/system';
import styled from 'styled-components';
import AvatarPicture from '../AvatarPicture';

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

const Holder = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
`

const Follow = styled.div`
    display:${props=>props.display};
    flex-direction:row;
    gap:20px;
`
const Following = styled.p`
    color:#0F2046;
`
const FollowingNumber = styled.span`
    color:#0F2046;
    font-weight:800;
`

const Follower = styled.p`
    color:#0F2046;
`
const FollowerNumber = styled.span`
    color:#0F2046;
    font-weight:800;
`


const Avatar = ({
    name="John Smith",
    show="block",
    following="0",
    follower="0",
    display="flex",
}) => {
    return <Container>
        <AvatarPicture height="147px" width="147px"/>
        <Holder>
            <Name show={show}>{name}</Name>
            <Follow display={display}>
                <Following><FollowingNumber>{following}</FollowingNumber> Followers</Following>
                <Follower><FollowerNumber>{follower}</FollowerNumber> Followers</Follower>
            </Follow>
        </Holder>
        
    </Container>
}

export default Avatar;
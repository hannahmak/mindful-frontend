import { borderRadius, width } from '@mui/system';
import styled from 'styled-components';
import AvatarPicture from '../AvatarPicture';
import router, {useRouter} from 'next/router';

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

    @media only screen and (max-width: 768px) {
        font-size:30px;
      }
`

const Holder = styled.div`
    display:flex;
    width:100%;
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
        <AvatarPicture/>
        <Holder>
            <Name show={show}>{name}</Name>
            <Follow display={display}>
                <Following onClick={()=>router.push("./myfriends")} ><FollowingNumber>{following}</FollowingNumber> Friends</Following>
                <Follower><FollowerNumber>{follower}</FollowerNumber> Journals</Follower>
            </Follow>
        </Holder>
        
    </Container>
}

export default Avatar;
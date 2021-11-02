import styled from 'styled-components';
import Avatar from '../comps/Avatar'
import AddFriend from '../comps/AddFriend';

const Container = styled.div `
height:100vh;
width:100%;
display:flex;
flex-direction:column;
align-items:center;

`

const Holder = styled.div `
display:flex;
flex-direction:column;
width:70%;
gap:20px;
`

const MyFriendsHead = styled.div `
`

const FriendNumber = styled.div `
`

const FriendAvatarHolder = styled.div `
display:flex;
flex-grow:1;
flex-wrap:wrap;
gap:20px;
`


export default function MyFriends() {
  return (
    <Container>
        <Holder>
            <MyFriendsHead>
                <h1>My Friends</h1>
            </MyFriendsHead>
            <FriendNumber>
                <p>15 friends</p>
            </FriendNumber>
            <FriendAvatarHolder>
                <Avatar width="100px" height="100px" show="none"/>
                <Avatar width="100px" height="100px" show="none"/>
                <Avatar width="100px" height="100px" show="none"/>
                <AddFriend/>
            </FriendAvatarHolder>

        </Holder>
    </Container>
  )
}

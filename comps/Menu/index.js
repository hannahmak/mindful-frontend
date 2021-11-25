import styled from 'styled-components';
import router, {useRouter} from 'next/router';

const Container = styled.div`
position:fixed;
z-index: 2;
display:flex;
flex-direction:column;
background-color:#F2F3F7;
height:100vh;
width:8%;
`
const Holder1 = styled.div`
display:flex;
flex:1;
width:100%;
justify-content:center;
`

const Images = styled.img`
height:80px;
width:80px;
`
const MyProfile = styled.img`
width:20px;
height:20px;

`

const Dashboard = styled.img`
height:20px;
width:20px;
`
const Feed = styled.img`
height:20px;
width:20px;
`

const Trends = styled.img`
height:20px;
width:20px;
`

const Chat = styled.img`
height:20px;
width:20px;
`

const Circle1 = styled.div `
display:flex;
justify-content:center;
align-items:center;
background: #F2F3F7;
box-shadow:${props=>props.press1};
height:50px;
width:50px;
border-radius:100px;
`

const Circle2 = styled.div `
display:flex;
justify-content:center;
align-items:center;
background: #F2F3F7;
box-shadow:${props=>props.press2};
height:50px;
width:50px;
border-radius:100px;
`

const Circle3 = styled.div `
display:flex;
justify-content:center;
align-items:center;
background: #F2F3F7;
box-shadow:${props=>props.press3};
height:50px;
width:50px;
border-radius:100px;
`

const Circle4 = styled.div `
display:flex;
justify-content:center;
align-items:center;
background: #F2F3F7;
box-shadow:${props=>props.press4};
height:50px;
width:50px;
border-radius:100px;
`

const Circle5 = styled.div `
display:flex;
justify-content:center;
align-items:center;
background: #F2F3F7;
box-shadow:${props=>props.press5};
height:50px;
width:50px;
border-radius:100px;
`
// for button press inset 0px 0px 4px rgba(0, 0, 0, 0.25)


const Holder2 = styled.div`
display:flex;
flex:4;
flex-direction:column;
align-items:center;
justify-contnet:center;
gap:90px;
`

const Menu = ({
    press1="none",
    press2="none",
    press3="none",
    press4="none",
    press5="none",
}) => {
    return <Container>
        <Holder1>
            <Images src="/logo2.svg"/>
        </Holder1>
        <Holder2>
            <Circle1 onClick={()=>router.push('/myprofile')} press1={press1}>
                <MyProfile src="/profileuser.svg"/>
            </Circle1>
            <Circle2 press2={press2}>
                <Dashboard onClick={()=>router.push('/dashboard')} src="/dashboard.svg" />
            </Circle2>
            <Circle3 onClick={()=>router.push('#')} press3={press3}>
                <Feed src="/feed.svg" />
            </Circle3>
            <Circle4 onClick={()=>router.push('#')} press4={press4}>
                <Chat src="/chatt.svg" />
            </Circle4>
            <Circle5 onClick={()=>router.push('#')} press5={press5}>
                <Trends src="/trends.svg" />
            </Circle5>
        </Holder2>
        

    </Container>
}

export default Menu;
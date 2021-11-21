import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { motion } from 'framer-motion';

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
max-height:70px;
max-width:70px;
`
const MyProfile = styled.img`
width:20px;
height:20px;
`

const MyJournal = styled.img`
width:20px;
height:20px;
`

const MoodBooster = styled.img`
width:20px;
height:20px;
`
const Badge = styled.img`
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
height:50px;
width:50px;
border-radius:100px;
`

const Circle2 = styled.div `
display:flex;
justify-content:center;
align-items:center;
background: #F2F3F7;
height:50px;
width:50px;
border-radius:100px;
`

const Circle3 = styled.div `
display:flex;
justify-content:center;
align-items:center;
height:50px;
width:50px;
border-radius:100px;
`

const Circle4 = styled.div `
display:flex;
justify-content:center;
align-items:center;
background: #F2F3F7;
height:50px;
width:50px;
border-radius:100px;
`

const Circle5 = styled.div `
display:flex;
justify-content:center;
align-items:center;
background: #F2F3F7;
height:50px;
width:50px;
border-radius:100px;
`

const Circle6 = styled.div `
display:flex;
justify-content:center;
align-items:center;
background: #F2F3F7;
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
gap:70px;
`

const Menu1 = ({
    dashsrc="/homeNormal.svg",
    journsrc="/journalNormal.svg",
    moodsrc="/moodNormal.svg",
    badgesrc="/badgeNormal.svg",
    chatsrc="/chatt.svg",
    trendsrc="/trends.svg",
}) => {
    return <Container>
        <Holder1>
            <Images src="/logoin.png"/>
        </Holder1>
        <Holder2>

            <Circle1 as={motion.div} onClick={()=>router.push('/dashboard')} whileHover={{
                scale:1.3,
                transition: {
                    duration:.1,
                }
            }}>
                <Dashboard src={dashsrc} />
            </Circle1>
            <Circle2 as={motion.div} onClick={()=>router.push('/journal')}  whileHover={{
                scale:1.3,
                transition: {
                    duration:.1,
                }
            }}>
                <MyJournal src={journsrc}/>
            </Circle2>
            <Circle3 as={motion.div} onClick={()=>router.push('/mood')} whileHover={{
                scale:1.3,
                transition: {
                    duration:.1,
                }
            }}>
                <MoodBooster src={moodsrc}/>
            </Circle3>
            <Circle4 as={motion.div} whileHover={{
                scale:1.3,
                transition: {
                    duration:.1,
                }
            }}  onClick={()=>router.push('/badges')}>
                <Chat src={badgesrc} />
            </Circle4>
            <Circle5 as={motion.div} whileHover={{
                scale:1.3,
                transition: {
                    duration:.1,
                }
            }}  onClick={()=>router.push('/messaging')}>
                <Trends src={chatsrc} />
            </Circle5>
            <Circle6 as={motion.div} whileHover={{
                scale:1.3,
                transition: {
                    duration:.1,
                }
            }}  onClick={()=>router.push('/trends')}>
                <Trends src={trendsrc} />
            </Circle6>
        </Holder2>
    </Container>
}

export default Menu1;

// import styled from 'styled-components';
// import router, {useRouter} from 'next/router';
// import { motion } from 'framer-motion';

// const Container = styled.div`
//     position:fixed;
//     z-index: 2;
//     display:flex;
//     flex-direction:column;
//     background-color:#F2F3F7;
//     height:100%;
//     width:144px;
//     grid-area: menu;
// `
// const Holder1 = styled.div`
//     display:flex;
//     flex:1;
//     width:100%;
//     justify-content:center;
// `

// const Images = styled.img`
//     height:124px;
//     width:124px;
// `

// const Dashboard = styled.div`
//     width:24px;
//     height:24px;
//     background: no-repeat url('${props=>props.dashsrc}');
//     border: none;
// `
// const Journal = styled.div`
//     width:24px;
//     height:24px;
//     background: no-repeat url('${props=>props.journsrc}');
//     border: none;
// `

// const Mood = styled.div`
//     width:24px;
//     height:24px;
//     background: no-repeat url('${props=>props.moodsrc}');
//     border: none;
// `

// const Badge = styled.div`
//     width:24px;
//     height:24px;
//     background: no-repeat url('${props=>props.badgesrc}');
//     border: none;
// `

// const Trends = styled.div`
//     width:24px;
//     height:24px;
//     background: no-repeat url('${props=>props.trendsrc}');
//     border: none;
// `

// const Chat = styled.div`
//     width:24px;
//     height:24px;
//     background: no-repeat url('${props=>props.chatsrc}');
//     border: none;
// `

// const Circle = styled.div `
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     background: #F2F3F7;
//     box-shadow:${props=>props.press1};
//     height:50px;
//     width:50px;
//     border-radius:100px;
// `

// const Holder2 = styled.div`
//     display:flex;
//     flex:4;
//     flex-direction:column;
//     align-items:center;
//     justify-contnet:center;
//     gap:90px;
// `

// const Menu = ({
//     dashsrc="/homeNormal.svg",
//     journsrc="/journalNormal.svg",
//     moodsrc="/moodNormal.svg",
//     badgesrc="/badgeNormal.svg",
//     chatsrc="/chatt.svg",
//     trendsrc="/trends.svg",
// }) => {
//     return <Container>
//         <Holder1>
//             <Images src="/logo.svg"/>
//         </Holder1>
//         <Holder2>
//             <Circle>
//                 <Dashboard onClick={()=>router.push('/dashboard')} dashsrc={dashsrc} />
//             </Circle>
//             <Circle onClick={()=>router.push('/journal')} >
//                 <Journal journsrc={journsrc} />
//             </Circle>
//             <Circle onClick={()=>router.push('/mood')} >
//                 <Mood moodsrc={moodsrc} />
//             </Circle>
//             <Circle onClick={()=>router.push('/badges')} >
//                 <Badge badgesrc={badgesrc} />
//             </Circle>
//             <Circle onClick={()=>router.push('/talk')}>
//                 <Chat chatsrc={chatsrc} />
//             </Circle>
//             <Circle onClick={()=>router.push('#')}>
//                 <Trends trendsrc={trendsrc}/>
//             </Circle>
//         </Holder2>
//     </Container>
// }

// export default Menu;
import styled from 'styled-components';
import MoodUpdate from '../MoodUpdate';
import MoodCard from '../MoodCard';
import Avatar from '../Avatar';
import Moods from '../Moods';
import router, {useRouter} from 'next/router';
import AvatarPicture from '../AvatarPicture';

const Container = styled.div`
display:flex;
flex-direction:column;
height:100vh;
width:22%;
background-color:#F9FBFC;
position:fixed;
z-index: 2;
align-items:center;
gap:30px;
color: #0F2046;
padding: 31px;
`



const MoodBar = ({

}) => {
    return <Container>
            <MoodUpdate/>
            <MoodCard/>
        <MoodUpdate subhead="Update Mood" text="Update"/>
        <Moods src="check.svg"/>
        <Moods/>
        <Moods/>
        <Moods/>
        <Moods/>
    </Container>
}

export default MoodBar;

// import styled from 'styled-components';
// import MoodUpdate from '../MoodUpdate';
// import MoodCard from '../MoodCard';
// import AvatarPicture from '../AvatarPicture';
// import Moods from '../Moods';
// import router, {useRouter} from 'next/router';

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     position: fixed;
//     width: 376px;
//     right: 0px;
//     float: right;
//     overflow: hidden;
//     background: #F9FBFC;
//     height: 150%;
// `

// const CurrentMoodCont = styled.div`
//     display: flex;
//     align-items: center;
//     flex-direction: column;
// `

// const CurrentMoodHeaderCont = styled.div`
//     display: flex;
//     justify-content: center;
//     gap: 100px;
//     align-items: flex-end;
//     padding: 74px 0px 61px 0px;
// `

// const Header = styled.div`
//     font-family: Inter;
//     font-style: normal;
//     font-weight: bold;
//     font-size: 24px;
//     line-height: 29px;
//     color: #0F2046;
//     bottom: 0;
// `
// const SubHeader = styled.div`
//     font-family: Inter;
//     font-style: normal;
//     font-weight: 300;
//     font-size: 14px;
//     line-height: 17px;
//     text-align: center;
//     color: #E8924F;
//     bottom: 0;
// `

// const StatusCont = styled.div`
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     align-self: center;
// `

// const Status = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 123px;
//     width: 319px;
//     background: #FFFFFF;
//     box-shadow: 0px 0px 20px #F2F3F7;
//     border-radius: 25px;
// `

// const TextCont = styled.div`
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//     padding-left: 29px;
// `

// const Name = styled.div`
//     font-family: Inter;
//     font-weight: bold;
//     font-size: 18px;
//     color: #0F2046;
// `

// const Mood = styled.div`
//     padding-top: 8px;
//     font-family: Inter;
//     font-size: 13px;
//     color: #878FA2;
// `

// const MoodCont =  styled.div`
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
// `

// const MoodContIndv =  styled.div`   
//     display: flex;
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//     padding-left: 29px;
//     padding-right: 29px;
//     padding-bottom: 71px;
// `

// const UpdateCurrentMoodCont = styled.div`

// `

// const Check = styled.button`
//     display: flex;
//     background: url(/open.svg) no-repeat;    
//     cursor: pointer;
//     border: none;
//     width: 29px;
//     height: 29px;
// `


// const MoodBar = ({

// }) => {
//     return <Container>
//         <CurrentMoodCont>
//             <CurrentMoodHeaderCont>
//                 <Header>Current Mood</Header>
//                 <SubHeader onClick={()=>router.push("/myprofile")}>View Profile</SubHeader>
//             </CurrentMoodHeaderCont>
//             <StatusCont>
//                 <Status>
//                     <AvatarPicture height={"76px"} width={"76px"}></AvatarPicture>
//                     <TextCont>
//                         <Name>Kelly Menzul</Name>
//                         <Mood>Happy</Mood>
//                     </TextCont>
//                 </Status>
//             </StatusCont>
//         </CurrentMoodCont>

//         <UpdateCurrentMoodCont>
//             <CurrentMoodHeaderCont>
//                     <Header>Update Mood</Header>
//                     <SubHeader onClick={()=>router.push("/myprofile")}>Update</SubHeader>
//             </CurrentMoodHeaderCont>
//             <MoodCont>
//                 <MoodContIndv>
//                     <AvatarPicture height={"76px"} width={"76px"}></AvatarPicture>
//                     <Check></Check>
//                 </MoodContIndv>

//                 <MoodContIndv>
//                     <AvatarPicture height={"76px"} width={"76px"}></AvatarPicture>
//                     <Check></Check>
//                 </MoodContIndv>

//                 <MoodContIndv>
//                     <AvatarPicture height={"76px"} width={"76px"}></AvatarPicture>
//                     <Check></Check>
//                 </MoodContIndv>

//                 <MoodContIndv>
//                     <AvatarPicture height={"76px"} width={"76px"}></AvatarPicture>
//                     <Check></Check>
//                 </MoodContIndv> 
//             </MoodCont>
//         </UpdateCurrentMoodCont>
//     </Container>
// }

// export default MoodBar;
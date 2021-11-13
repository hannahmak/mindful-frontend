import styled from 'styled-components';
import router, {useRouter} from 'next/router';

const Container = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
width:100%;
padding:10px;
`
const Head = styled.p`
font-size:17px;
font-weight:800;
margin-bottom:0px;

`

const Text = styled.a`
font-size:14px;
color:#F09682;

`

const HeaderHolder = styled.div`
display:flex;
flex:1;
align-items:flex-end;
`

const TextHolder = styled.div`
display:flex;
flex:1;
align-items:flex-end;
justify-content:flex-end;

`



const MoodUpdate = ({
    subhead="Current Mood",
    text="View Profile"
}) => {
    return <Container>
        <HeaderHolder>
            <Head>{subhead}</Head>
        </HeaderHolder>
        <TextHolder>
            <Text onClick={()=>router.push('/myprofile')} >{text}</Text>
        </TextHolder>
    </Container>
}

export default MoodUpdate;
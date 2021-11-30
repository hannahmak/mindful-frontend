import styled from 'styled-components';
import MoodUpdate from '../MoodUpdate';
import MoodCard from '../MoodCard';
import Avatar from '../Avatar';
import Moods from '../Moods';
import router, {useRouter} from 'next/router';
import AvatarPicture from '../AvatarPicture';
import { useState } from 'react';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { style } from '@mui/system';

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

const MoodHolder = styled.div `
display:flex;

`

const FormHolder = styled.div `
`

const ImageHolder = styled.div `
display:flex;
flex-direction:row;
`

const Image = styled.img `
width:40%;
`




const MoodBar = ({


}) => {
    const [showMood, setShowMood] = useState("sad.svg")

    return <Container>
            <MoodUpdate/>
            <MoodCard source={showMood}/>
        <MoodUpdate subhead="Update Mood" text="Update"/>
        <MoodHolder>
            {/* <ImageHolder>
                <Image src="happy.svg"/>
                <Image src="good.svg"/>
                <Image src="indifferent.svg"/>
                <Image src="sad.svg"/>
                <Image src="stressed.svg"/>
            </ImageHolder> */}
            <FormHolder>
                <FormControl component="fieldset">
                    <RadioGroup
                        style={{display:"flex", gap:15}}
                        aria-label="mood"
                        defaultValue="Happy"
                        name="radio-buttons-group"
                    >
                        <ImageHolder>
                        <Image src="happy.svg"/>
                        <FormControlLabel onClick={()=>{setShowMood("happy.svg")}} value="Happy" control={<Radio />} label="Happy" />
                        </ImageHolder>
                        
                        <ImageHolder>
                        <Image src="good.svg"/>
                        <FormControlLabel onClick={()=>{setShowMood("good.svg")}} value="Good" control={<Radio />} label="Good" />
                        </ImageHolder>

                        <ImageHolder>
                        <Image src="indifferent.svg"/>
                        <FormControlLabel onClick={()=>{setShowMood("indifferent.svg")}} value="Indifferent" control={<Radio />} label="Indifferent" />
                        </ImageHolder>

                        <ImageHolder>
                        <Image src="sad.svg"/>
                        <FormControlLabel onClick={()=>{setShowMood("sad.svg")}} value="Sad" control={<Radio />} label="Sad" />
                        </ImageHolder>

                        <ImageHolder>
                        <Image src="stressed.svg"/>
                        <FormControlLabel onClick={()=>{setShowMood("stressed.svg")}} value="Stressed" control={<Radio />} label="Stressed" />
                        </ImageHolder>
                    </RadioGroup>
                </FormControl>
            </FormHolder>


        </MoodHolder>

    </Container>
}

export default MoodBar;

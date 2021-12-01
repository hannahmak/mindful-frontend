import styled from 'styled-components';
import MoodUpdate from '../MoodUpdate';
import MoodCard from '../MoodCard';
import Avatar from '../Avatar';
import Moods from '../Moods';
import router, { useRouter } from 'next/router';
import AvatarPicture from '../AvatarPicture';
import { useState } from 'react';
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { style } from '@mui/system';
import { useUser } from '@auth0/nextjs-auth0';

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
padding:30px;

`

const MoodHolder = styled.div`
display:flex;
flex-direction:column;
width:100%;
align-items:center;
ksutify-content:center;
`

const FormHolder = styled.div`
`

const ImageHolder = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
width:100%;
`


const Image = styled.img `
width: 81px;
`

const MoodBar = ({

}) => {
  const { user, isLoading, error } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  const [showMood, setShowMood] = useState("happy.svg")
  const [UpdateMood, SetUpdateMood] = useState("Happy")

  return (user &&
    (
      <Container>
        <MoodUpdate />
        <MoodCard mood={UpdateMood} source={showMood} name={user.name} />
        <MoodUpdate subhead="Update Mood" text="" />
        <MoodHolder>
          {/* <ImageHolder>
                <Image src="happy.svg"/>
                <Image src="good.svg"/>
                <Image src="indifferent.svg"/>
                <Image src="sad.svg"/>
                <Image src="stressed.svg"/>
            </ImageHolder> */}

            <FormHolder
            style={{display:"flex", width:"100%", height:"100%"}}
            >
                <FormControl
                style={{display:"flex", width:"100%", height:"100%"}}
                component="fieldset">
                    <RadioGroup
                        style={{display:"flex", gap:40, width:"100%"}}
                        aria-label="mood"
                        defaultValue="Happy"
                        name="radio-buttons-group"
                    >
                        <ImageHolder>
                        <Image src="happy.svg"/>
                        <FormControlLabel onClick={()=>{setShowMood("happy.svg"), SetUpdateMood("Happy")}} value="Happy" control={<Radio />} label="" />
                        </ImageHolder>
                        
                        <ImageHolder>
                        <Image src="good.svg"/>
                        <FormControlLabel onClick={()=>{setShowMood("good.svg"), SetUpdateMood("Good")}} value="Good" control={<Radio />} label="" />
                        </ImageHolder>

                        <ImageHolder>
                        <Image src="indifferent.svg"/>
                        <FormControlLabel onClick={()=>{setShowMood("indifferent.svg"), SetUpdateMood("Indifferent")}} value="Indifferent" control={<Radio />} label="" />
                        </ImageHolder>

                        <ImageHolder>
                        <Image src="sad.svg"/>
                        <FormControlLabel onClick={()=>{setShowMood("sad.svg"), SetUpdateMood("Sad")}} value="Sad" control={<Radio />} label="" />
                        </ImageHolder>

                        <ImageHolder>
                        <Image src="stressed.svg"/>
                        <FormControlLabel onClick={()=>{setShowMood("stressed.svg"), SetUpdateMood("Stressed")}} value="Stressed" control={<Radio />} label="" />
                        </ImageHolder>
                    </RadioGroup>
                </FormControl>
            </FormHolder>
        </MoodHolder>
    </Container>
}

export default MoodBar;

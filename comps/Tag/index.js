import React from 'react';
import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { motion } from 'framer-motion';
import AvatarPicture from '../AvatarPicture'

const Container = styled.div`
    display:inline-block;
    background: #FCEEB5;
    box-shadow: 0px 0px 20px #F2F3F7;
    border-radius: 25px;
    margin-right: 21px;
`

const TagText = styled.div`
    margin: 7px 20px 7px 20px;
    font-family: Inter;
    font-weight: normal;
    font-size: 18px;
    text-align: center;
    color: #0F2046;
`

const Tag = ({
    tagtext="Activity",
}) => {
    return  <Container>
                <TagText>{tagtext}</TagText>
            </Container>
}
export default Tag;
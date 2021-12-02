import React from 'react';
import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { motion } from 'framer-motion';
import { height } from '@mui/system';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    height: ${props=>props.height};
    width: ${props=>props.width};
    border-radius: 25px;
    gap:10px;
`

const ContentCont = styled.div`
    display:flex;
    flex-direction: column;
    margin: 22px;
    height:100%;
`

const Header = styled.div`
    display: flex;
    font-weight:800;
    font-size:13px;
    color: #0F2046;
`

const ImageCont = styled.div`
    display: flex;
    flex-direction:column;
    justify-contnet:center;
    height:100%;
`

const Image = styled.img`
    max-width: ${props=>props.iwidth};
    max-height: ${props=>props.iheight};
`

const Text = styled.p `
font-size:20px;

@media only screen and (max-width: 768px) {
    font-size:15px;
  }
`

const Author = styled.p `
@media only screen and (max-width: 768px) {
    font-size:10px;
  }

`

const QuoteCard = ({
    height= "100%",
    width= "100%",
    header= "Journal",
    area='',
    quote="hi",
    author="author"
}) => {
    return  <Container height={height} width={width} area={area} >
                <ContentCont>
                    <ImageCont > 
                        <Text>"{quote}"</Text>
                        <Author>- {author}</Author>
                    </ImageCont>
                </ContentCont>
            </Container>
}
export default QuoteCard;
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
    background: #FFFFFF;
    box-shadow: 0px 0px 20px #F2F3F7;
    border-radius: 25px;
    gap:10px;
`

const ContentCont = styled.div`
    display:flex;
    flex-direction: column;
    margin: 22px;
`

const Header = styled.div`
    display: flex;
    font-weight:800;
    font-size:13px;
    color: #0F2046;
`

const ImageCont = styled.div`
    display: flex;
    align-self center;
`

const Image = styled.img`
    max-width: ${props=>props.iwidth};
    max-height: ${props=>props.iheight};
`

const DashboardCard = ({
    height= "100%",
    width= "100%",
    iwidth= "100%",
    iheight= "100%",
    header= "Journal",
    routeTo='/.',
    area='',
    src='/moodCover.svg',
}) => {
    return  <Container height={height} width={width}  as={motion.div} whileHover={{
            scale:1.05,
            transition: {
                duration:.1,
            }
            }} onClick={()=>router.push(routeTo)} area={area} >
                <ContentCont>
                    <Header>{header}</Header>
                    <ImageCont > 
                        <Image iheight={iheight} iwidth={iwidth} src={src}/>
                    </ImageCont>
                </ContentCont>
            </Container>
}
export default DashboardCard;
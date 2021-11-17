import React from 'react';
import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { motion } from 'framer-motion';

const Container = styled.div`
    display:flex;
    flex-direction: column;
    height: ${props=>props.height};
    width: ${props=>props.width};
    grid-area: ${props=>props.area};
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
    width: ${props=>props.iwidth};
    height: ${props=>props.iheight};
`

const DashboardCard = ({
    iheight= "50px",
    iwidth= "50px",
    height= "202px",
    width= "300px",
    header= "Journal",
    routeTo='/.',
    area='',
    src='/moodCover.svg'
}) => {
    return  <Container as={motion.div} whileHover={{
            scale:1.05,
            transition: {
                duration:.1,
            }
            }} onClick={()=>router.push(routeTo)} area={area} height={height} width={width}>
                <ContentCont>
                    <Header>{header}</Header>
                    <ImageCont > 
                        <Image src={src} iwidth={iwidth} iheight={iheight}/>
                    </ImageCont>
                </ContentCont>
            </Container>
}
export default DashboardCard;
import React from 'react';
import styled from 'styled-components';
import router, {useRouter} from 'next/router';
import { motion } from 'framer-motion';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ImageIcon from '../ImageIcon';
import Backdrop from '@mui/material/Backdrop';



const Container = styled.div ``


const actions = [
    { icon: <ImageIcon src="/homeNormal.svg" />, name: 'dashboard' },
    { icon: <ImageIcon src="/journalNormal.svg" />, name: 'journal' },
    { icon: <ImageIcon src="/moodNormal.svg" />, name: 'mood' },
    { icon: <ImageIcon src="/badgeNormal.svg" />, name: 'badge' },
    { icon: <ImageIcon src="/chatt.svg" />, name: 'chat' },
    { icon: <ImageIcon src="/trends.svg" />, name: 'trends' },
    
    
  ];

const ResponsiveMenu = ({

   

}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return <Container>
            <Box sx={{ height: 700, transform: 'translateZ(0px)', flexGrow: 1 }}>
                
                <SpeedDial
                    ariaLabel="SpeedDial basic example"
                    sx={{ position: 'absolute', bottom: 16, right: 16 }}
                    icon={<ImageIcon />}
                >
                    {actions.map((action) => (
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                    />
                    ))}
                </SpeedDial>
                
                </Box>
        
        
            
        </Container>
}
export default ResponsiveMenu;
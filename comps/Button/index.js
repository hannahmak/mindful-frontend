import styled from 'styled-components';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import router, {useRouter} from 'next/router';

const Container = styled.div``

// const Buttons = styled.button``




const Buttons = ({
    variant="contained",
    ButtonText="Text Here",
    routeTo="/.",
    buttonType="text",
}) => {
    return <Container>
        <Button onClick={()=>router.push(routeTo)} type={buttonType} style={{width:250, height:50, borderRadius:60,}} variant={variant}>{ButtonText}</Button>
    </Container>
}

export default Buttons;
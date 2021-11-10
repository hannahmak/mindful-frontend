import styled from 'styled-components';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

const Container = styled.div``

// const Buttons = styled.button``




const SetupButton = ({
    variant="contained",
    ButtonText="Text Here",
    onButtonInteract=()=>{}
}) => {
    return <Container>
        <Button onClick={()=>{onButtonInteract();}} style={{width:250, height:50, borderRadius:60,}} variant={variant}>{ButtonText}</Button>
    </Container>
}

export default SetupButton;
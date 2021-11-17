import styled from 'styled-components';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

const Container = styled.div``

const JokesButton = ({
    variant="contained",
    ButtonText="Text Here",
    onButtonInteract=()=>{}
}) => {
    return <Container>
        <Button onClick={()=>{onButtonInteract();}} style={{width:248, height:75, borderRadius:60, textTransform:'none', fontSize:'24px'}} variant={variant}>{ButtonText}</Button>
    </Container>
}

export default JokesButton;
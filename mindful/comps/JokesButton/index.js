import styled from 'styled-components';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

const Container = styled.div``

// const Buttons = styled.button``




const JokesButton = ({
    variant="contained",
    ButtonText="Text Here",

}) => {
    return <Container>
        <Button style={{width:250, height:50, borderRadius:60,}} variant={variant}>{ButtonText}</Button>
    </Container>
}

export default JokesButton;
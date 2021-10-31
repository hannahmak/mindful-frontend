import styled from 'styled-components';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

const Container = styled.div``

// const Buttons = styled.button``




const Buttons = ({
    variant="contained",
    ButtonText="Text Here"

}) => {
    return <Container>
        <Button variant={variant}>{ButtonText}</Button>
        

    </Container>
}

export default Buttons;
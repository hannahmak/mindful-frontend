import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

const Holder = styled.div``

const image = styled.img``

const CompName = styled.p`
color:white;
`

const CompDescription = styled.p`
color:white;
`



const AboutCompanion = ({
}) => {
    return <Container>
        <Holder>
            <image/>
        </Holder>
        <Holder>
            <CompName>Meet Companion Name</CompName>
            <CompDescription>Chocolate toffee biscuit shortbread halvah shortbread. Carrot cake gummies jujubes halvah sesame snaps chupa chups marshmallow pastry pastry. Jelly beans tart cookie chocolate chocolate cake lemon drops jujubes gummi bears brownie. Pudding liquorice chocolate cake muffin cake topping. Jelly-o lollipop bear claw bear claw chocolate bar croissant. Sweet sugar plum pastry chocolate cake cotton candy. Danish apple pie biscuit chupa chups chocolate bar ice cream pudding marzipan chocolate bar. Bear claw toffee tart candy chocolate bar croissant.</CompDescription>
        </Holder>

        
    </Container>
}

export default AboutCompanion;
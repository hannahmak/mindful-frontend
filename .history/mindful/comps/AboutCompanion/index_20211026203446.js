import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:row;
align-items:center;
`

const Holder = styled.div`
flex:1;
background-color:green;
`

const Image = styled.img`
height:292px;
width:292px;
border-radius:150px;
align-items:center;
`

const CompName = styled.p`
font-style: normal;
color:white;
font-weight: bold;
font-size: 24px;
`

const CompDescription = styled.p`
font-size: 18px;
color:white;
`



const AboutCompanion = ({
    source="https://i.natgeofe.com/n/496b9ca3-0839-43b9-9a4f-5501502d258a/atlantic-puffin_thumb.jpg"
}) => {
    return <Container>
        <Holder>
            <Image src={source}/>
        </Holder>
        <Holder>
            <CompName>Meet Companion Name</CompName>
            <CompDescription>Chocolate toffee biscuit shortbread halvah shortbread. Carrot cake gummies jujubes halvah sesame snaps chupa chups marshmallow pastry pastry. Jelly beans tart cookie chocolate chocolate cake lemon drops jujubes gummi bears brownie. Pudding liquorice chocolate cake muffin cake topping. Jelly-o lollipop bear claw bear claw chocolate bar croissant. Sweet sugar plum pastry chocolate cake cotton candy. Danish apple pie biscuit chupa chups chocolate bar ice cream pudding marzipan chocolate bar. Bear claw toffee tart candy chocolate bar croissant.</CompDescription>
        </Holder>
    </Container>
}

export default AboutCompanion;
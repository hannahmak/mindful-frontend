import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:row;
align-items:center;
flex-wrap:wrap;


@media only screen and (max-width: 768px) {
    display:flex;
    flex-direction:column;
}

`

const Holder = styled.div`
display:flex;
flex:1;
justify-content:center;
`

const Holder2 = styled.div`
display:flex;
flex-direction:column;
flex:1;

@media only screen and (max-width: 768px) {
    display:flex;
    flex-direction:column;
    align-items:center;
}

`

const Image = styled.img`
height:292px;
width:292px;
border-radius:150px;

@media only screen and (max-width: 768px) {
    height:100px;
    width:100px;
}
`


const CompName = styled.p`
font-style: normal;
color:#420062;
font-weight: bold;
font-size: 24px;
`

const CompDescription = styled.p`
font-size: 18px;
color:#7E7E7E;
max-width:70%;
`



const AboutCompanion = ({
    source="https://i.natgeofe.com/n/496b9ca3-0839-43b9-9a4f-5501502d258a/atlantic-puffin_thumb.jpg",
    companionname="Meet Companion Name",
    compdescription="Chocolate toffee biscuit shortbread halvah shortbread. Carrot cake gummies jujubes halvah sesame snaps chupa chups marshmallow pastry pastry. Jelly beans tart cookie chocolate chocolate cake lemon drops jujubes gummi bears brownie. Pudding liquorice chocolate cake muffin cake topping. Jelly-o lollipop bear claw bear claw chocolate bar croissant. Sweet sugar plum pastry chocolate cake cotton candy. Danish apple pie biscuit chupa chups chocolate bar ice cream pudding marzipan chocolate bar. Bear claw toffee tart candy chocolate bar croissant."
}) => {
    return <Container>
        <Holder>
            <Image src={source}/>
        </Holder>
        <Holder2>
            <CompName>{companionname}</CompName>
            <CompDescription>{compdescription}</CompDescription>
        </Holder2>
    </Container>
}

export default AboutCompanion;
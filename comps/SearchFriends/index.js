import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;
`
const SearchItems = styled.div`
display:flex;
flex-direction:row;
align-items:space-between;
justify-content:space-between;
background: #FFFFFF;
border-radius: 25px;
height: 100px;
width:900px;
`

const Text = styled.p`
font-size:20px;
color:#2F2E4C;
`
const Icon = styled.div`
width:20px;
`



const SearchFriends = ({
    text="KellyM",
    icon="search",
}) => {
    return <Container>
        <SearchItems>
        <Text>{text}</Text>
        <Icon>{icon}</Icon>
        </SearchItems>

    </Container>
}

export default SearchFriends;
import styled from 'styled-components';

const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

const Button = styled.div`
display:flex;
justify-content: center;
align-items: center;
height: 350px;
width: 350px;
border-radius: 50%;
background: linear-gradient(125deg, rgba(255,255,255,1), rgba(166, 164, 248,0.5));
`

const Option = styled.div`
display:flex;
flex-direction:column;
`

const Image = styled.img`
width: 70%;
`

const CompName = styled.p`
font-style: normal;
color:white;
font-weight: 400;
font-size: 24px;
`



const TalkButton = ({
    source="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0ab7f2c8-6c66-4408-a091-a95bf7306023/debs5wu-2c9fa4fe-a5f6-4f0b-b606-e4d44e66912a.png/v1/fill/w_1192,h_670,strp/dumb_ways_to_die_cast__transparent_background__by_mlppvzbfbdwtdtttefan_debs5wu-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTA4MCIsInBhdGgiOiJcL2ZcLzBhYjdmMmM4LTZjNjYtNDQwOC1hMDkxLWE5NWJmNzMwNjAyM1wvZGViczV3dS0yYzlmYTRmZS1hNWY2LTRmMGItYjYwNi1lNGQ0NGU2NjkxMmEucG5nIiwid2lkdGgiOiI8PTE5MjAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.iV6dxo4_s-rdHV8j4DWDl8peRJzAw4CtIMYkXm5X-K8",
    optiontitle="Friend(s)",
}) => {
    return <Container>
        <Button>
            <Image src={source}/>
        </Button>
        <Option>
            <CompName>{optiontitle}</CompName>
        </Option>
    </Container>
}

export default TalkButton;
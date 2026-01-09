import { Box, styled, Typography } from "@mui/material";
import Button from '@mui/material/Button';
import { emptyChatImage2 } from '../../../constants/data';



const Component = styled(Box)`
  background-color:#f8fafb;
  text-align: center;
`;

const Container = styled(Box)`
  
`;

const Image = styled('img')({
  width:350,
  marginTop:' 110px',
})

const Title = styled(Typography)`
  font-family: inherit !important;
  margin-top: 38px;
  font-size: 36px;
  font-weight: 200;
  color: #41525d;
  padding: 0 0 20px 0;
  `;
  
  const SubTitle = styled(Typography)`
  font-family: inherit !important;
  font-size: .875rem;
  color: #54656f;
  line-height: 1.4286;
`;

const ButtonsContener = styled(Box)`
  padding: 20px 0 40px 0;
  & > * {
    font-family: inherit !important;
    color: #ffffff !important;
    font-size: 15px !important;
    font-weight: 450 !important;
    background-color: #008069 !important;
    text-transform: none !important;
    border-radius: 20px !important;
  }
`;

const EmptyChatArea = () => {

  return(
    <Component>
      <Container>
        <Image src={emptyChatImage2} alt="emptyChat" />
        <Title>Download WhatsApp for Windows</Title>
        <SubTitle>Make calls, share your screen and get a faster experience when you download the</SubTitle>
        <SubTitle>Windows app.</SubTitle>
        <ButtonsContener>
          <Button variant="contained" href="https://www.whatsapp.com/download">Get from Microsoft Store</Button>
        </ButtonsContener>
        <SubTitle sx={{ padding:'33px 0',}}>Your personal messages are end-to-end encrypted</SubTitle>
      </Container>
    </Component>
  )

}

export default EmptyChatArea;
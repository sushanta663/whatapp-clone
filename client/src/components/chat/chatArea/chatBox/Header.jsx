import { Box, styled, Typography } from '@mui/material';
import { Search , MoreVert , VideocamRounded } from '@mui/icons-material';

const Container = styled(Box)`
  display: flex;
  align-items: center;
  height: 44px;
  padding: 10px 16px;
  background-color:rgb(243, 243, 243);
`;

const Image = styled('img')({
  height: 40,
  borderRadius: '50%',
  objectFit:'cover',
});

const Name = styled(Typography)`
  margin-left: 12px !important;
`;

const Status = styled(Typography)`
  margin-left: 12px !important;
  font-size: 12px;
  color: rgb(0,0,0,0.6);
`;

const IconContainer = styled(Box)`
  margin-left: auto;
  & > svg {
    color:rgb(101, 101, 101);
    padding: 10px;
  }
`;

const VideoIcon = styled(VideocamRounded)`
  color: rgb(174, 175, 176) !important;
  border: 0.8px solid rgb(174, 175, 176, 0.6);
  padding: 6px 15px !important;
  border-radius: 17px;
  margin-right: 10px;
`;



const Header = ( {person} ) => {

  return(
    <Container>
      <Image src={ person.picture } alt="pd" />
      <Box>
        <Name>{person.name}</Name>
        <Status>Offline</Status>
      </Box>
      <IconContainer>
        <VideoIcon />
        <Search />
        <MoreVert />
      </IconContainer>
    </Container>
  )
} 

export default Header;
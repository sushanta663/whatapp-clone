
import { Box , styled, Typography } from "@mui/material";
import { AddCommentOutlined as AddChatIcon } from '@mui/icons-material';
import{ MoreVert as MoreIcon } from '@mui/icons-material';


const Contener = styled(Box)`
  display: flex;
  align-items: center;
  height: 64px;
  padding: 0 16px;
  justify-content: space-between;
  & > .MuiTypography-root {
    font-family: inherit;
    font-size: 1.375rem;
    font-weight: 700;
    color:#111b21;
  }
  
  & > .IconBox{
  color:#7a8891 !important;
  padding: 0 20px;
  }
`;

const IconBox = styled(Box)`
  & >*{
    padding: 2px 10px 0 10px;
    color:#7a8891;
  }
`;


const Header = () => {

  return(
    <Contener>
      <Typography> Chats</Typography>

      <IconBox>
        <AddChatIcon />
        <MoreIcon />
      </IconBox>
    </Contener>
  )
}


export default Header;


import { Box, styled } from '@mui/material';
import Button from '@mui/material/Button';

const ButtonsContener = styled(Box)`
  display: flex;
  padding: 10px 15px 7px 15px;
  height: 31px;

  & > * {
    color: #54656f !important;
    font-family: inherit !important;
    font-size: 15px !important;
    font-weight: 450 !important;
    background-color: #f0f2f5 !important;
    text-transform: none !important;
    margin-right: 10px !important;
    border-radius: 20px !important;
  }
`;


const Buttons = () => {

  return(
    <ButtonsContener>
        <Button variant="text">All</Button>
        <Button variant="text">Unread</Button>
        <Button variant="text">Favourites</Button>
        <Button variant="text">Croups</Button>
    </ButtonsContener>
  )

}

export default Buttons;
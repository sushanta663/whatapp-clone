import { useContext } from "react";
import { Dialog , Box , styled  } from "@mui/material";

import { AccountContext } from "../../context/AccountProvider";

import SideBar from "./SideBar";
import ChatManu from "./chatMenu/chatMenu";
import EmptyChatArea from "./chatArea/EmptyChatArea";
import ChatBox from '../chat/chatArea/chatBox/ChatBox';

const dialogStyle = {
  height: '94.5%',
  width: '100%',
  maxHeight: '100%',
  maxWidth: '100%',
  // boxShadow: 'none',
  borderRadius: '0px',
  margin: '18px',
}

const DialogBox = styled(Box)`
  height: 100%;
  width: 100%;
  display: flex;

`;

const SideBarBox = styled(Box)`
  height: 100%;
  width: 65px;
  background-color: #f0f2f5;

`;

const ChatManuBox = styled(Box)`
  height: 81vh; // changed from 100%
  width: 30%;
  min-width: 350px;
  background-color: #ffffff;
`
const ChatAreaBox = styled(Box)`
  height: 100%;
  width: 66%;
  min-width: 350px;
  border-left: 1.2px solid rgb(174, 175, 176, 0.5);
`


const ChatDialog = () => {

  const { person } = useContext(AccountContext);

  return(
    <Dialog
      open={true}
      PaperProps={{sx: dialogStyle}}
      hideBackdrop = {true}
    >
      
      <DialogBox>
        <SideBarBox>
          <SideBar></SideBar>
        </SideBarBox>
        <ChatManuBox>
          <ChatManu></ChatManu>
        </ChatManuBox>
        <ChatAreaBox >
          { Object.keys(person).length ? <ChatBox /> : <EmptyChatArea /> }
        </ChatAreaBox>

      </DialogBox>

    </Dialog>
  )

}

export default ChatDialog;
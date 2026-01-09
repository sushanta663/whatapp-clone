import { useContext, useEffect , useState } from 'react';
 
import { Box } from '@mui/material';

import { AccountContext } from '../../../../context/AccountProvider';

import { getConversation } from '../../../../services/api';

import Header from "./Header";
import MessageArea from "./MessageArea";

const ChatBox = () => {
  
  const { account , person } = useContext(AccountContext);

  const [conversation , setConversation] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      const data = await getConversation({ senderId: account.sub , receiverId: person.sub} || []);
      setConversation(data);
    }
    getConversationDetails()
  },[person.sub]);

  return(
    <Box>
      <Box>
       <Header  person={person} />
      </Box>
      <Box>
        <MessageArea conversation={conversation} />
      </Box>
    </Box>
  )
}

export default ChatBox;
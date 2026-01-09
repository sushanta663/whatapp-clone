
import { useContext , useState , useEffect } from 'react';

import { Box, styled } from '@mui/material';

import { messageBoxBackgroundImage  } from '../../../../constants/data';
import Footer from './Footer';
import Message from './Message';

import { AccountContext } from '../../../../context/AccountProvider';
import { getMessage, newMessage } from '../../../../services/api';


const Container = styled(Box)`
  background-image: url(${messageBoxBackgroundImage});
  background-size: 50%;
`;

const Messages = styled(Box)`
  height: 77.15vh;
  overflow-y: scroll;
`;

const MessageArea = ({ conversation }) => {

  const [messages , setMessages] = useState([]);
  const [newMessageFlag , setNewMessageFlag] = useState(false);
  const [value , setValue] = useState('');
  const [file , setFile] = useState();

  const { account , person } = useContext(AccountContext);

  const sendText = async (e) => {
    const code = e.keyCode || e.which ;
    if(code === 13){
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: 'text',
        text: value,
      }
      await newMessage(message);

      setValue('');
      setNewMessageFlag(prev => !prev)
    }
  }

  useEffect(() => {
    const getMessageDetails = async () => {
      // let data = conversation._id ? await getMessage(conversation._id) : "";
      let data = await getMessage(conversation?._id);
      setMessages(data);
    }
    conversation?._id && getMessageDetails();
  },[person.sub,conversation?._id,newMessageFlag]);


  return(
    <Container>
      <Messages>
        {
          messages && messages.map(message => (
            <Message message={message} />
          ))
        }
      </Messages>
      <Footer
        sendText={sendText} 
        setValue={setValue} 
        value={value} 
        file={file}
        setFile={setFile}
      />
    </Container>
  )
} 

export default MessageArea;
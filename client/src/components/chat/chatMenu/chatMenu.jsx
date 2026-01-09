import { useState } from 'react';


import { Box , styled } from '@mui/material';
import Header from './Header';
import SearchBar from './SearchBar';
import Buttons from './Buttons';
import ChatList from './ChatList';

const MainContener = styled(Box)`
`;

const ChatManu = () => {

   const [text , setText] = useState('');

   return (
      
      <MainContener>
         <Header />
         <SearchBar setText={setText} />
         <Buttons />
         <ChatList text={text} />
      </MainContener>
   )
}

export default ChatManu;
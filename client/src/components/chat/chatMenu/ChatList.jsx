
import { useEffect, useState , useContext } from "react";
import { getUsers } from "../../../services/api";

import { Box , styled, Divider } from '@mui/material';


import { AccountContext } from "../../../context/AccountProvider";
import Conversation from './Conversation';


const ChatListBox = styled(Box)`
  overflow: overlay;
`

const StyleDivider = styled(Divider)`
  margin-left: 73px;
  background-color: #e9edef;
  opacity: 0.5;
`;

const ChatList = ({ text }) => {

  const [users,setUsers] = useState([]);
  const { account, socket, setActiveUsers } = useContext(AccountContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await getUsers();
        const filteredResponce = response.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
        setUsers(filteredResponce || []);
      } catch (error) {
        console.error("Error fetching users:", error);
        setUsers([]);
      }
    };
    fetchData();
  }, [text]);

  useEffect(() => {
      socket.current.emit('addUser', account);
      socket.current.on("getUsers", users => {
          setActiveUsers(users);
      })
  }, [account])


  return(

    <ChatListBox>
      {
        users.map(user => (
          user.sub != account.sub &&
          <>
            <Conversation user={user} />
            <StyleDivider />
          </>
        ))
      }
    </ChatListBox>
  )

}

export default ChatList;
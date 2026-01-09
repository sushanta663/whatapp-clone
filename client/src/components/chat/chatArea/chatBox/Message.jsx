import { useContext } from 'react';

import { Box , Typography , styled } from '@mui/material';
import { formatDate } from '../../../../utils/dateTime-utils';

import { AccountContext } from '../../../../context/AccountProvider';

const Own = styled(Box)`
  max-width: 60%;
  background-color: #dcf8c6;
  margin: 5px 80px 5px 0;
  margin-left: auto;
  width: fit-content;
  display: flex;
  color:rgb(17, 27, 33);
  border-radius: 10px 0 10px 10px;
  font-family: Arial, sans-serif;
  word-wrap: break-word;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;
const Wrapper = styled(Box)`
  max-width: 60%;
  background-color: #ffffff;
  margin: 5px 0 5px 80px;
  width: fit-content;
  display: flex;
  color:rgb(17, 27, 33);
  border-radius: 0 10px 10px 10px;
  font-family: Arial, sans-serif;
  word-wrap: break-word;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

const Text = styled(Typography)`
  font-size: 14px;
  padding: 6px 7px 8px 9px;
`;

const Time = styled(Typography)`
word-break: keep-all;
font-size: 10px;
  color: #919191;
  padding: 2px 10px 2px 5px;
  margin-top: auto;
`;

const Message = ({ message }) => {

  const { account } = useContext(AccountContext);

  return(
      account.sub === message.senderId ?
          <Own>
            <Text> {message.text} </Text>
            <Time> {formatDate(message.createdAt)} </Time>
          </Own>
        :
          <Wrapper>
            <Text> {message.text} </Text>
            <Time> {formatDate(message.createdAt)} </Time>
          </Wrapper>
    )
}

export default Message;
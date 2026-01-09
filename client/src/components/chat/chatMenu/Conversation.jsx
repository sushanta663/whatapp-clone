import { useContext } from 'react';

import { Box, Typography , styled } from '@mui/material';

import { AccountContext } from '../../../context/AccountProvider';

import { setConversation } from '../../../services/api';

const Container = styled(Box)`
  display: flex;
`
const Image = styled('img')({
  height: 50,
  borderRadius: '50%',
  padding: '12px 13px',
  objectFit:'cover',
})

const Conversation = ({ user }) => {

  const { setPerson , account } = useContext(AccountContext);

  const getPerson = async () => {
    setPerson(user);
    await setConversation({  senderId: account.sub, receiverId: user.sub  });
  }

  return(
    <Container onClick={() => getPerson() }>
      <Box>
        <Image src={user.picture} alt="dp" />
      </Box>
      <Box>
        <Typography>{user.name}</Typography>
      </Box>
    </Container>
  )
}

export default Conversation;
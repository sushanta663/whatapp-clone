

import LoginDialog from "./loginDialog"
import { AppBar, Toolbar } from '@mui/material';
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
import ChatDialog from "../chat/ChatDialog";

const LoginPage = () =>{

  const { account } = useContext(AccountContext);


  return(
    
    account ? 
    <>
      <AppBar
        position="static"
        sx={{
          height: '18vh',
          backgroundColor:'#00a884',
          boxShadow: 'none',
        }}
      >
        <Toolbar>

        </Toolbar>
      </AppBar>

      <ChatDialog /> 
    </>
    :
    <>
      <AppBar
        position="static"
        sx={{
          height: '100vh',
          backgroundColor:'#fcf5eb',
        }}
      >
        <Toolbar>

        </Toolbar>
      </AppBar>
      <LoginDialog />
    </>
  )
}

export default LoginPage;

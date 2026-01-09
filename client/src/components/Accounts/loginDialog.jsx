

import { Dialog , Box , Typography, List, ListItem } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

import { addUser } from "../../services/api";



const LoginDialog = () => {

  const { setAccount } = useContext(AccountContext);

  const onLoginSuccess = async (res) => {
    let decoded = jwtDecode(res.credential);
    setAccount(decoded);
    await addUser(decoded);
  }

  const onLoginFailure = (res) => {
    console.log('Login Failed:', res);
  }

  return(
    <Dialog
      open={true}
      hideBackdrop ={true}
      sx={{
        '& .MuiDialog-paper': {
          height: '67%',
          width: '63%',
          maxWidth: '100%',
          borderRadius: '25px',
          border: '1px solid black',
          boxShadow: 'none',
          marginBottom: '5%',
        },
      }}
    >
     <Box
      sx={{
        display: 'flex',
        marginLeft:'55px',
      }}
     >
      <Box
        sx={{
          padding: '50px 0px 0px 0px',
        }}
      >
        <Typography
          sx={{
            fontSize:'2rem',
            fontWeight:'400',
            color:'#111b21',
          }}
        >Log into WhatsApp Web</Typography>
        <p
          style={{
            color:'#111b21',
            fontSize:'1.125rem',
            lineHeight:'21px',
            marginBottom:'25px',
          }}
        >Message privately with friends and family using WhatsApp on your browser.</p>
        <List
          sx={{
            lineHeight: '20px',
            font: 'inherit',
            fontSize: '1.125rem',
          }}
        >
          <ListItem>1. Open WhatsApp on your phone</ListItem>
          <ListItem>2. Tap Menu : on Android, or Settings  on iPhone</ListItem>
          <ListItem>3. Tap Linked devices and then Link a device</ListItem>
          <ListItem>4. Point your phone at this screen to scan the QR code</ListItem>
        </List>
        <List>
          {/* <ListItem> <a href="#">Need help getting started?</a></ListItem>
          <ListItem> <a href="#">Log in with phone number</a></ListItem> */}
        </List>
        </Box>
        <Box
          sx={{
            position:'relative',
          }}
        >
          <img src={qrCodeImage} 
          alt="qr-Code"
          style={{
            height: '260px',
            margin: '85px 50px 0px 55px',
          }}
          />
          <Box
            sx={{
              position: 'absolute',
              top:'45%',
              transform:'translateX(30%)',
            }}
          >
            <GoogleLogin
              onSuccess={onLoginSuccess}
              onError={onLoginFailure}
            />
          </Box>
        </Box>
     </Box>
    </Dialog>
  )

}

export default LoginDialog;
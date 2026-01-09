import { Box , styled } from "@mui/material";


import { Chat as MessageIcon} from '@mui/icons-material';
import{ WifiTethering as StoryIcon } from '@mui/icons-material';
import{ MapsUgc as ChannelsIcon } from '@mui/icons-material';
import{ Groups as GroupsIcon } from '@mui/icons-material';
import{ DataSaverOff as AiIcon } from '@mui/icons-material';
import{ Settings as SettingsIcon } from '@mui/icons-material';

import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";

const IconBox = styled(Box)`
   display: flex;
   flex-direction: column;
   align-items: center;

`;
const Icons = styled(Box)`
   margin-top: 20px;
   color: #7a8891;
`;

const SettingsBox = styled(Box)`
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const SettingsIcons = styled(Box)`
   margin-bottom: 15px;
`

const Image = styled('img')({
   height: 32,
   borderRadius: '50%',
})

const SideBar = () => {

   const { account } = useContext(AccountContext);

   return (
      
      <Box
         sx={{
            height: '100%',
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
         }}
      >
         <IconBox>
            <Icons>
               <MessageIcon />
            </Icons>
            <Icons>
               <StoryIcon />
            </Icons>
            <Icons>
             <ChannelsIcon />
            </Icons>
            <Icons>
               <GroupsIcon />
            </Icons>
            <Icons>
               <AiIcon />
            </Icons>
         </IconBox>

         <SettingsBox>
            <SettingsIcons sx={{ color:'#7a8891' }} >
               <SettingsIcon />
            </SettingsIcons>

            <SettingsIcons>
               <Image src={account.picture} alt="dp" />
            </SettingsIcons>
         </SettingsBox>
      </Box>

   )
}

export default SideBar;
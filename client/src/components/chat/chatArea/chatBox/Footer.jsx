import { useEffect } from 'react';

import { Box, styled , InputBase} from '@mui/material';
import { AddSharp , KeyboardVoice ,AddReactionOutlined } from '@mui/icons-material';

import { uploadFile } from '../../../../services/api';

const Container = styled(Box)`
  background-color:rgb(243, 243, 243);
  height: 60px;
  display: flex;
  padding: 0 0px 3px 0px;
  align-items: center;
  & > * {
    padding: 0 22px;
    font-size: 30px;
  }
`;

const InputContainer = styled(Box)`
  display: flex;
  align-items: center;
  height: 42px;
  width: 85%;
  background-color: #fff;
  border-radius: 10px;
  & > * {
    font-size: 15px;
  }
  & > svg{
    font-size: 25px;
  }

`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 3px;
  margin-left: 15px;
`;


const Footer = ({ sendText , setValue , value , file , setFile }) => {

  useEffect( () => {
    const getImage = async () => {
      if(file){
        const data = new FormData();
        data.append("name",file.name);
        data.append("file",file);


        await uploadFile(data);
      }
    }
    
    getImage();
  },[file])

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  }

  return(
    <Container>
      <label htmlFor="fileInput" >
        <AddSharp fontSize='25px'/>
      </label>
      <input
        type="file" 
        id="fileInput" 
        style={{ display: 'none' }}
        onChange={(e) => onFileChange(e)}
      />

      <InputContainer>
        <AddReactionOutlined />
        <InputField  
          placeholder="Type a Message"
          onChange={(e) => setValue(e.target.value)}
          onKeyPress={(e) => sendText(e)}
          value={value}
        />
      </InputContainer>

      <KeyboardVoice />
    </Container>
  )
} 

export default Footer;

import { Box , styled} from '@mui/material';
import{ Search as SearchIcon } from '@mui/icons-material';
import { InputBase } from '@mui/material';


const Contener = styled(Box)`
  height: 35px;
  background-color:#f0f2f5;
  margin: 0 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  
  & >:last-child{
    width: 100%;
  }
  
  & > *{
    padding:15px;
  }
`;

const SearchBar = ({ setText }) =>{

  return(
    <Contener>
      <SearchIcon
        fontSize='small' 
      />

      <InputBase
        placeholder='Search'
        onChange={(e) => setText(e.target.value)}
      />
    </Contener>
  )

}

export default SearchBar;
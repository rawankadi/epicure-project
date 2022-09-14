import { faClose, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SearchInput } from '../HomePage/HomePageMobile/SearchBar/styles';
import { setSearchBar } from '../HomePage/Reducer/searchBarSlicer';
import {SElement,Menu,SearchDiv, Btn, InputBox, Close} from './styles'
import { useDispatch } from "react-redux";


// interface Props{
//   setOpenSearchBar: (params: any)=> any;
// }

export default function ShowSearchBar() {

  const dispatch = useDispatch();


  return (
      <SearchDiv>
        <Btn onClick={()=>dispatch(setSearchBar(false))}><Close/></Btn>
        <Menu>
            <SElement>
              Search
            </SElement><br/>
            <InputBox>
                    <FontAwesomeIcon icon={faSearch}/>
                    <SearchInput placeholder='Search for restaurant cuisine, chef'/>
            </InputBox>
          </Menu>
      </SearchDiv>
  )
}

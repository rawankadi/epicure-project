import React from 'react'
import { Pragraph,Hero, Searchbox, SearchInput, InputBox, Title } from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


export default function SearchBar() { 
  return (
    <Hero>
        <Searchbox>
              <Pragraph>
                <Title>
                      Ebicure works with the top <br/><br/>
                      chef restaurants in Tel-Aviv <br/>
                </Title>
                <InputBox>
                <FontAwesomeIcon icon={faSearch}/>
                 <SearchInput placeholder='Search for restaurant cuisine, chef'/>
                </InputBox>
              </Pragraph>
        </Searchbox>
    </Hero>
  )
}

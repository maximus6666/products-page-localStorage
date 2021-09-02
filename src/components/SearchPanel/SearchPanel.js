import { Box, CheckBox } from "grommet";
import React, { useState } from "react"
import './SearchPanel.css'

const SearchPanel = ({searchingParam, sortParam}) => {
  const [sortByName, setsortByName] = useState(false);
  const [sortByCount, setSortByCount] = useState(false);
  
  return (
    <Box 
      direction='row'
      align='center'
      justify='center'
    >
      <CheckBox 
        pad='5px'
        label="Sort by name?"
        checked={sortByName}
        onChange={(event) => {
          setsortByName((prevVal) => prevVal = !prevVal)
          searchingParam(event.target.checked)
        }}
      />
      <CheckBox
        pad='5px'
        label='Sort by count?'
        checked={sortByCount}
        onChange={(event) => {
          setSortByCount((prevVal) => prevVal = !prevVal)
          sortParam(event.target.checked)
        }}
      />    
    </Box>
  )
}

export default SearchPanel

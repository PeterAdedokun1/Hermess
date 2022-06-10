import React from 'react'
// import Select from "./Select"
import { TextField, Box } from '@mui/material'
const Input = () => {
  return (
     <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1},
      }}
      noValidate
      autoComplete="off"
    >
          <div sx={{
          display: "flex"
      }}>
        <TextField
          id="outlined-password-input"
          label="From post code"
          type="text"
          autoComplete="current-password"
              />
               <TextField
          id="outlined-password-input"
          label="To post code"
          type="text"
          autoComplete="current-password"
              />
                      <TextField
          id="outlined-password-input"
          label="To post code"
          type="text"
          autoComplete="current-password"
              />
    
                     <TextField
          id="outlined-password-input"
          label="To post code"
          type="text"
                  autoComplete="current-password"
                  
              />
    
      </div>
    
    </Box>  
  )
}

export default Input
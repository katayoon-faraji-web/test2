import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';


export default function RtlDemo() {
  const[inp,setInp] = useState('')

  const changeHandler =(event:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    
  ) =>{
    setInp(event?.target.value)

  }
  useEffect(()=>{
    console.log(inp);
    
  },[inp])
  return (

    <TextField
    sx={{ minWidth: 120 , background:'red', alignItems:'center'}}
      label="سن"
      placeholder=" سن"
      helperText=" سن خود را وارد کنید "
      variant="outlined"
      value={inp}
      onChange={changeHandler}
    />
      
  );
}
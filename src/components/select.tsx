import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useSelectDataQuery} from '../hooks/useSelectDataQuery'


interface type1{
    userId:string,
    id:string,
    title:string,
    completed:string

}
export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const {data:selectData} = useSelectDataQuery()
  console.log(selectData);
  

  return (
    <Box sx={{ minWidth: 120 , background:'red', alignItems:'center'}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">سن</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="سن"
          onChange={handleChange}
        >
            {selectData?.data?.map((val:type1)=>{
                return(
                    <MenuItem sx={{textAlign:'right',justifyContent:'end'}} value={val.id}>{val.id}</MenuItem>
                )

            })}
          {/* <MenuItem sx={{textAlign:'right',justifyContent:'end'}} value={10}>ده</MenuItem>
          <MenuItem sx={{textAlign:'right',justifyContent:'end'}} value={20}>بیست</MenuItem>
          <MenuItem sx={{textAlign:'right',justifyContent:'end'}} value={30}>سی</MenuItem> */}
        </Select>
      </FormControl>
    </Box>
  );
}
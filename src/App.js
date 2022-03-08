import './App.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import Button from '@mui/material/Button';

function App() {
  const [age, setAge] = useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const option = [{ value: 10, text: 'ten' }, { value: 20, text: 'twenty' }, { value: 30, text: 'thirty' },]

  return (
    <div className="App">
      <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            sx={{ borderRadius:4 }}
          >
            {option.map((option) => {
              return <MenuItem value={option.value}>{option.text}</MenuItem>
            })}
          </Select>
        </FormControl>
      <Button variant="outlined" sx={{width:300,backgroundColor:'blue',color:'white',":hover":{backgroundColor:"grey",color:'black'}}}>Outlined</Button>

    </div>
  );
}

export default App;

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import {Tooltip} from "@mui/material";


const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider() {
  const [value, setValue] = React.useState(40); //Default value is set to 50

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <Box>
      <Typography id="input-slider" gutterBottom>
        <label>Pourcentage of electric cars in 2030 :</label>
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <ElectricCarIcon />
        </Grid>
        <Grid item xs>
            <Tooltip title="%" placement="bottom" arrow>
                <Slider
                    value={typeof value === 'number' ? value : 0}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                />
            </Tooltip>
        </Grid>
        <Grid item>
          <Input
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

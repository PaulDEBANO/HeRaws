import React from 'react';
import { render } from 'react-dom';

import {Component} from "react";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Slider from '@mui/material/Slider';

//Palete color 
const theme = createTheme({
    palette: {
      primary: {
        light: '#FFC900',
        main: '#086E7D',
        dark: '#1A5F7A',
        contrastText: '#fff',
      },
      secondary: {
        light: '#FFF89A',
        main: '#FFC900',
        dark: '#086E7D',
        contrastText: '#000',
      },
    },
  });

const Simulator = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '90vh'
            }}
        >
            <h1>Simulator</h1>

            <ThemeProvider theme={theme}>
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
            </ThemeProvider>

            <Slider
                defaultValue={30}
                sx={{
                    width: 300,
                    color: 'success.main',
                }}
            />
        </div>
    );
};

export default Simulator;
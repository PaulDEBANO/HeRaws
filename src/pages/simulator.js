import React from 'react';
import { render } from 'react-dom';

import { Component } from "react";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

//Palete color 
const theme_button = createTheme({
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

const theme_elt_selector = createTheme({
    palette: {
        primary: {
            light: '#FFC900',
            main: '#086E7D',
            dark: '#1A5F7A',
            contrastText: '#fff',
        }
    }

})

const Simulator = () => {
    return (
        <div
            className="page-content-grid"
        /*
        style={{
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',
            height: '90vh'
        }}
        */
        >
            {
                //---Title of the page---
            }
            <div className="page-title">
                <h1 Style='font-size: 48px;'>Simulator</h1>
            </div>

            {
                //---Selector of elements---
            }
            <div className="elt-selector-grid">
                <h2 className="section-title">Please select the elements from your battery</h2>
                <ThemeProvider theme={theme_elt_selector}>
                    <Button variant="contained" color="primary">Ni</Button>
                    <Button variant="contained" color="primary">Co</Button>
                    <Button variant="contained" color="primary">Al</Button>
                    <Button variant="contained" color="primary">Mn</Button>
                    <Button variant="contained" color="primary">Fe</Button>
                    <Button variant="contained" color="primary">P</Button>
                    <Button variant="contained" color="primary">Li</Button>
                    <Button variant="contained" color="primary">S</Button>
                    <Button variant="contained" color="primary">F</Button>
                    <Button variant="contained" color="primary">V</Button>
                    <Button variant="contained" color="primary">Ti</Button>
                    <Button variant="contained" color="primary">O</Button>
                </ThemeProvider>
            </div>

            {
                //---Inputs for caracteristics---
            }
            <div className="inputs-caracteristics">
                {
                    // Dynamics inputs for concentration of elements
                    //FAIRE UNE FONCTION POUR RECUPERER LES ELT ET AFFICHER DYNAMIQUEMENT LES INPUT
                }

                {
                    // Battery and Tension 
                }
                <TextField
                    label="Battery performance"
                    id="outlined-start-adornment"
                    sx={{ m: 2, width: '25ch' }}
                    InputProps={{
                        endAdornment: <InputAdornment position="mAh/g">mAh/g</InputAdornment>,
                    }}
                />
                <TextField
                    label="Tension"
                    id="outlined-start-adornment"
                    sx={{ m: 2, width: '25ch' }}
                    InputProps={{
                        endAdornment: <InputAdornment position="V">mAh/G</InputAdornment>,
                    }}
                />
                {
                    // Electric cars
                }


            </div>

            {
                //---Graphics---
            }
            <div className='graphics'>
                { }
            </div>


        </div>
    );
};

export default Simulator;

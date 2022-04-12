import React from 'react';

import { Component } from "react";
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import { List } from '@mui/material';
import { list } from 'postcss';
import Checkbox from '@mui/material/Checkbox';

import SliderElectricCars from '../components/SliderElectricCars';
import CompositionOfElements from '../components/CompositionOfElements';


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

});


const Simulator = () => {
    return (
        //Structure of the page : grid with 2 columns
        <div
            className="grid grid-cols-2 m-5 gap-1"
        >
            {
                //---Title of the page---
                //The title of the page take one complete row = col-span-2
            }
            <div className="col-span-2 text-center">
                <h1 className='text-5xl'>Simulator</h1>
            </div>

            {
                //---All the left side elements---
                //The selection of the elements, inputs for their concentration, performance, tension and % of electric cars
            }
            <div className="w-2/5 col-span-1 content-start gap-5">
                <CompositionOfElements />
            </div>

            {
                //---Graphics---
            }
            <div className="gap-3 col-start-2 row-start-2 row-span-2 col-span-1 grid grid-rows-2 grid-cols-2">
                {
                    //World production
                }
                <div className="row-start-1 col-span-2 p-2" Style='background: #F0F0F0; box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25); border-radius: 10px;'>
                    <h3 className="text-left">World Production</h3>
                </div>

                {
                    //Geopolitical risks & CO2 footprint
                }
                <div className="row-start-2 col-start-1 p-2" Style='background: #F0F0F0; box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25); border-radius: 10px;'>
                    <h3 className="text-left">Geopolitical Risks</h3>

                </div>
                <div className="row-start-2 col-start-2 p-2" Style='background: #F0F0F0; box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25); border-radius: 10px;'>
                    <h3 className="text-left">CO2 Footprint</h3>

                </div>
            </div>


        </div>
    );
};

export default Simulator;

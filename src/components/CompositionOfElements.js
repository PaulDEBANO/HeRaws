/*
Component for creating the elements buttons and their inputs for their compositions
*/

import React, { useState } from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SliderElectricCars from '../components/SliderElectricCars';
import { Tooltip } from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
//Dropdown import
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


//Color palette for the elements on the left side
const theme_elt_selector = createTheme({
    palette: {
        primary: {
            light: '#FFC900',
            main: '#086E7D',
            dark: '#1A5F7A',
            contrastText: '#fff',
        },
        secondary: {
            light: '#1A5F7A',
            main: '#1A5F7A',
            dark: '#FFC900',
            contrastText: '#fff',
        }
    }

});


//Gobal variable : array of all the elements of a battery
let allElements = ["Ni", "Co", "Al", "Mn", "Fe", "P", "Li", "S", "F", "V", "Ti", "O"]
//Global variable : empty array for storage of all the element of the battery
let listOfElement = [];


//Function for all the elements of the left side of the simulator
function BatteryElements() {
    //Code for handle the check of th checkbox for selesting the elements of the battery
    let elems = allElements; //all the checkboxex
    let [checked, setChecked] = useState([]);
    const handleCheck = (el) => {
        if (el.target.checked) {
            setChecked((old) => [...old, el.target.id]);
        } else {
            setChecked((old) => old.filter((x) => x !== el.target.id));
        }
        console.log(checked);
    };

    //HTML elements, all elements are contained in a form
    return (
        <form className="p-2" Style='background: #F0F0F0; box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25); border-radius: 10px;'>
            {
                // Electric cars
                //Slider for the pourcentage of electric cars
            }
            <ThemeProvider theme={theme_elt_selector}>
                <SliderElectricCars />
            </ThemeProvider>

            {
                //Aide contextuelle avec icone
            }
            <ThemeProvider theme={theme_elt_selector}>
                <Tooltip
                    className="m-1"
                    title="You can find this information on the battery label."
                    placement="right-start"
                    arrow>
                    <HelpOutlineIcon color="primary" />
                </Tooltip>
            </ThemeProvider>

            <label className="text-left col-span-1">Please select the composition from your battery : </label>

            <div className="checkbox-premake-battery">
                <div className="checkbox-container">
                    <label className="checkbox-label">
                        NMC
                        <input type="checkbox" className="checkboxElt" />
                    </label>
                    <label className="checkbox-label">
                        LFP
                        <input type="checkbox" className="checkboxElt" />
                    </label>
                    <label className="checkbox-label">
                        NCA
                        <input type="checkbox" className="checkboxElt" />
                    </label>
                </div>
                <button className="more-options-button">
                    <span>More options...</span>
                </button>
            </div>

            <div className="more-options">
                <div >
                    <div className="grid grid-cols-3 m-2 gap-1" >
                        <ThemeProvider theme={theme_elt_selector}>
                            { //Creation of all the checkbox for selecting the elements of the battery
                                elems.map((el) => {
                                    return (
                                        <div key={el} className="checkbox-container">
                                            <label htmlFor={el} className="checkbox-label">
                                                {el}
                                                <input type="checkbox" className="checkboxElt" name={el} id={el} onChange={handleCheck} />
                                            </label>
                                        </div>
                                    );
                                })
                            }
                        </ThemeProvider>
                    </div>

                    {
                        // Inputs for concentration of elements
                        //Creation of the input for a selected elements
                    }
                    <div className='my-5'>
                        {
                            //Aide contextuelle avec icone
                        }
                        <ThemeProvider theme={theme_elt_selector}>
                            <Tooltip
                                className="m-1"
                                title="For a good simulation, we need to know the concentration of each elements."
                                placement="right-start"
                                arrow>
                                <HelpOutlineIcon color="primary" />
                            </Tooltip>
                        </ThemeProvider>
                        <label className='text-left col-span-1'>Fill in the precise composition of your battery : </label>
                        <ThemeProvider theme={theme_elt_selector}>
                            {
                                [...checked].map((el) => (
                                    <div className='my-3'>
                                        <TextField
                                            type="number"
                                            step="1"
                                            max="100"
                                            min="0"
                                            label={el}
                                            id="outlined-start-adornment"
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                            }}
                                        />
                                    </div>
                                ))
                            }
                        </ThemeProvider>
                    </div>
                </div>

                {
                    //---Inputs for caracteristics---
                    // 5 rows : title, battery perf., tension, slider for cars and button
                }
                <div className="col-span-1 row-start-3 grid grid-rows-5">
                    {
                        // Battery perf. and Tension 
                        //Inputs for fill in the battery performance and the tension
                    }
                    <label >Fill the battery performance and the tension :</label>
                    <Tooltip title="Please enter your battery performance" placement="right-start" arrow>
                        <TextField
                            className="row-start-2"
                            type="number"
                            step="0.1"
                            label="Battery performance"
                            id="outlined-start-adornment"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">mAh/g</InputAdornment>,
                            }}
                        />
                    </Tooltip>
                    <Tooltip title="Please enter the tension of your battery" placement="right-start" arrow>
                        <TextField
                            className="row-start-3"
                            type="number"
                            step="0.1"
                            label="Tension"
                            id="outlined-start-adornment"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">V</InputAdornment>,
                            }}
                        />
                    </Tooltip>

                </div>
            </div>
            {
                // Button Simulate
            }
            <ThemeProvider theme={theme_elt_selector}>
                <Button variant="contained" color="primary" type="submit" Style='margin-top:10px; width=100%;'>Simulate</Button>
            </ThemeProvider>
        </form >
    );

}

export default BatteryElements;
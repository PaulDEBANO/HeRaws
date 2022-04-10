/*
Component for creating the elements buttons and their inputs for their compositions
*/

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import SliderElectricCars from '../components/SliderElectricCars';

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
//Global variable : empty array for storage of inputs for representation of the element of the battery
let listInputsOfElement = [];


function BatteryElements() {
    //const [elt, setElt] = useState("Coucou,"); //Variable : store all the selected elements 

    //CODE LOUIS
    let elems = allElements; //liste de toutes les checkbox
    let [checked, setChecked] = useState([]);
    const handleCheck = (el) => {
        if (el.target.checked) {
            setChecked((old) => [...old, el.target.id]);
        } else {
            setChecked((old) => old.filter((x) => x !== el.target.id));
        }
        console.log(checked);
    };

    return (
        <form>
            <label className="text-left col-span-1">Please select the elements from your battery : </label>
            <div>
                <ThemeProvider theme={theme_elt_selector}>
                    {/* AVANT TEST PROGRAMME LOUIS
                    <FormGroup className="grid grid-cols-4 grid-rows-3 gap-1 ">
                        <TextField
                            label="Concentration of Ni"
                            type="number"
                            step={0.1}
                            min={0}
                            id="outlined-start-adornment"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">Ni</InputAdornment>,
                            }}
                        />
                        <FormControlLabel className="col-start-1 row-start-1" control={<Checkbox />} label="Ni" value="Ni" onClick={e => handleCheck()} />
                        <FormControlLabel className="col-start-2 row-start-1" control={<Checkbox />} label="Co" value="Co" onClick={e => handleChange(e.target.value)} />
                        <FormControlLabel className="col-start-3 row-start-1" control={<Checkbox />} label="Al" value="Al" onClick={e => handleChange(e.target.value)} />
                        <FormControlLabel className="col-start-4 row-start-1" control={<Checkbox />} label="Mn" value="Mn" onClick={e => handleChange(e.target.value)} />
                        <FormControlLabel className="col-start-1 row-start-2" control={<Checkbox />} label="Fe" value="Fe" onClick={e => handleChange(e.target.value)} />
                        <FormControlLabel className="col-start-2 row-start-2" control={<Checkbox />} label="P" value="P" onClick={e => handleChange(e.target.value)} />
                        <FormControlLabel className="col-start-3 row-start-2" control={<Checkbox />} label="Li" value="Li" onClick={e => handleChange(e.target.value)} />
                        <FormControlLabel className="col-start-4 row-start-2" control={<Checkbox />} label="S" value="S" onClick={e => handleChange(e.target.value)} />
                        <FormControlLabel className="col-start-1 row-start-3" control={<Checkbox />} label="F" value="F" onClick={e => handleChange(e.target.value)} />
                        <FormControlLabel className="col-start-2 row-start-3" control={<Checkbox />} label="V" value="V" onClick={e => handleChange(e.target.value)} />
                        <FormControlLabel className="col-start-3 row-start-3" control={<Checkbox />} label="Ti" value="Ti" onClick={e => handleChange(e.target.value)} />
                        <FormControlLabel className="col-start-4 row-start-3" control={<Checkbox />} label="O" value="O" onClick={e => handleChange(e.target.value)} />
                    </FormGroup>
                    */
                    }

                    {
                        elems.map((el) => {
                            return (
                                <div key={el}>
                                    <input type="checkbox" name={el} id={el} onChange={handleCheck} />
                                    <label htmlFor={el}>{el}</label>
                                </div>
                            );
                        })
                    }

                    {
                        // Inputs for concentration of elements
                    }
                    <label className='text-left col-span-1'>Caracteristics of your battery</label>

                    {
                        [...checked].map((el) => (
                            <div style={{ display: "flex" }}>
                                <TextField
                                    type="number"
                                    step="0.1"
                                    label={el}
                                    id="outlined-start-adornment"
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">unit</InputAdornment>,
                                    }}
                                />
                            </div>
                        ))
                    }
                </ThemeProvider>
            </div>

            {
                //---Inputs for caracteristics---
                // 5 rows : title, battery perf., tension, slider for cars and button
            }
            <div className="col-span-1 row-start-3 grid grid-rows-5 gap-3">
                {
                    // Battery and Tension 
                }
                <label className="text-left row-start-1">Fill the battery performance and the tension :</label>
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
                {
                    // Electric cars
                }
                <ThemeProvider theme={theme_elt_selector}>
                    <SliderElectricCars />
                </ThemeProvider>

                {
                    // Button Simulate
                }
                <ThemeProvider theme={theme_elt_selector}>
                    <Button variant="contained" color="primary" type="submit">Simulate</Button>
                </ThemeProvider>
            </div>
        </form >
    );

    //Function for modified the list of all selected element after the click on one element
    //Function for add or delete an element elt in the list listOfElement
    //param : a string contain the name of the element (ex : "Ni")
    function handleChange(param) {
        //If the element is already in the list, we delete it        
        if (listOfElement.includes(param)) {
            listOfElement = listOfElement.filter((item) => item !== param);
            console.log("delete : " + param); //Test to print in console
        }
        //If it's not in the list, we add it
        else {
            listOfElement.push(param);
            console.log("push : " + param); //Test to print in console
        }
    }

    //Function for creating inputs for the elements of the list
    function createInputsForElements() {
        console.log("createInput function")
        listInputsOfElement = listOfElement.map((elt) => {
            return (
                <div>
                    <p>Element : {elt}</p>
                    <TextField
                        type="number"
                        label={elt}
                        id="outlined-start-adornment"
                        InputProps={{
                            startAdornment: <InputAdornment position="start">Concentration :</InputAdornment>,
                        }}
                    />
                </div>
            )
        })
        console.log("input crée")
    }

}

export default BatteryElements;
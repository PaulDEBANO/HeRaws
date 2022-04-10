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

/*
Global function for add or delete an element elt in the list listOfElement
elt : a string contain the name of the element (ex : "Ni")
*/
function editListOfElements(elt) {

}




function BatteryElements() {
    //const [elt, setElt] = useState("Coucou,"); //Variable : store all the selected elements 

    return (
        <form>
            <label className="text-left col-span-1">Please select the elements from your battery : </label>
            <div>
                <ThemeProvider theme={theme_elt_selector}>
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
                        <FormControlLabel className="col-start-1 row-start-1" control={<Checkbox />} label="Ni" value="Ni" onClick={e => handleChange(e.target.value)} />
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
                    {/*
                        <Button variant="contained" color="primary" value="Ni" onClick={e => handleChange(e.target.value)}>Ni</Button>
                        <Button variant="contained" color="primary" value="Co" onClick={e => handleChange(e.target.value)}>Co</Button>
                        <Button variant="contained" color="primary" value="Al" onClick={e => handleChange(e.target.value)}>Al</Button>
                        <Button variant="contained" color="primary" value="Mn" onClick={e => handleChange(e.target.value)}>Mn</Button>
                        <Button variant="contained" color="primary" value="Fe" onClick={e => handleChange(e.target.value)}>Fe</Button>
                        <Button variant="contained" color="primary" value="P" onClick={e => handleChange(e.target.value)}>P</Button>
                        <Button variant="contained" color="primary" value="Li" onClick={e => handleChange(e.target.value)}>Li</Button>
                        <Button variant="contained" color="primary" value="S" onClick={e => handleChange(e.target.value)}>S</Button>
                        <Button variant="contained" color="primary" value="F" onClick={e => handleChange(e.target.value)}>F</Button>
                        <Button variant="contained" color="primary" value="V" onClick={e => handleChange(e.target.value)}>V</Button>
                        <Button variant="contained" color="primary" value="Ti" onClick={e => handleChange(e.target.value)}>Ti</Button>
                        <Button variant="contained" color="primary" value="O" onClick={e => handleChange(e.target.value)}>O</Button>
                    */
                    }
                </ThemeProvider>
            </div>

            {
                // Inputs for concentration of elements
            }
            <label className='text-left col-span-1'>Caracteristics of your battery</label>
            <div>
                <br></br>
                {
                    createInputsForElements
                }
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
        </form>
    );

    //Function for modified the list of all selected element after the click on one element
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

        /*
        if (true === true) {
            var currentInput;
            currentInput = (
                <TextField
                    type="number"
                    label={name}
                    id="outlined-start-adornment"
                    InputProps={{
                        startAdornment: <InputAdornment position="concentration">Concentration :</InputAdornment>,
                    }}
                />
            )
        }
        else {
            //Trouver comment supprimer l'input

        }
        */
        console.log("input crée")
    }


}

export default BatteryElements;
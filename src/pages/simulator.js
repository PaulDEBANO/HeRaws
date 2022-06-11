import React from 'react';
import '../style/App.css';

//Creation of the color palette or customize the MUI components
import { createTheme, ThemeProvider } from "@mui/material/styles";

//For creating contextual help
import { Tooltip } from "@mui/material";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

//Calling the components for all the left side elements
import CompositionOfElements from '../components/CompositionOfElements';
import ActualDate from '../components/ActualDate.js';

//import Rock svg
import rockSVG from '../components/rock-svgrepo-com.svg';

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

//Structure of the simulator page
const Simulator = () => {
    return (
        //Structure of the page : grid with 2 columns
        //Tailwind classname : grid grid-cols-2 m-5 gap-1
        <div
            className="page-structure"
        >
            {
                //---Title of the page---
                //The title of the page take one complete row = col-span-2
                //Tailwind classname : col-span-2 text-center
            }
            <div className="page-title">
                <h1 className='text-5xl'>Simulator</h1>
            </div>

            {
                //---All the left side elements---
                //The selection of the elements, inputs for their concentration, performance, tension and % of electric cars
                //Tailwind classname : w-3/5 col-span-1 content-start gap-5 mt-10
            }
            <div className="simulator-form">
                <CompositionOfElements />
            </div>

            {
                //---Graphics---
                //Tailwind classname : gap-3 col-start-2 row-start-2 row-span-2 col-span-1 grid grid-rows-2 grid-cols-2 mt-10
            }
            <div className="simulator-graphics">
                {
                    //World production
                    //Tailwind classname : row-start-1 col-span-2 p-2
                }
                <div className="world-production" Style='background: #F0F0F0; box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25); border-radius: 10px;'>
                    <h3 className="text-left">World Production</h3>
                    <div className="actual-ressource">
                        <div id="actual-date">
                            <ActualDate />
                        </div>
                        <div className="rocks">
                            {
                                //Affichage des cailloux
                                /*
                            <iframe src="../components/rock-svgrepo-com.svg" width="500" height="500" sandbox>
                                <img src="../components/rock-svgrepo-com.svg" alt="Un triangle avec trois côtés inégaux" />
                            </iframe>
                            */
                            }
                        </div>
                    </div>
                </div>

                {
                    //Geopolitical risks & CO2 footprint
                    //Geopolitical : Tailwind classname : row-start-2 col-start-1 p-2
                    //CO2 footprint : Tailwind classname : row-start-2 col-start-2 p-2
                }
                <div className="geopolitical-risk" Style='background: #F0F0F0; box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25); border-radius: 10px;'>
                    <h3 className="text-left">Geopolitical Risks</h3>

                </div>
                <div className="co2-footprint" Style='background: #F0F0F0; box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25); border-radius: 10px;'>
                    <h3 className="text-left">CO2 Footprint</h3>

                </div>
            </div>


        </div>
    );
};

export default Simulator;

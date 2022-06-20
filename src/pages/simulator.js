import React from 'react';
import '../style/App.css';

//Creation of the color palette or customize the MUI components
import { createTheme, ThemeProvider } from "@mui/material/styles";

//For creating contextual help
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
//Icons and images
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import Earth from '@mui/icons-material/Public';
import TrackChanges from '@mui/icons-material/TrackChanges';
import rockSVG from '../components/rock-svgrepo-com.svg'; //Rock SVG
import mapGisement from '../components/map-gisement.jpeg';
//Calling the components for all the left side elements
import CompositionOfElements from '../components/CompositionOfElements';
import ActualDate from '../components/ActualDate.js';


//For charts
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


//Representative distance with a diesel vehicle
let carEquivalent = (Math.floor(Math.random() * 100) + 1) * 100;
//Random number to generate a first Pie Chart
const number1 = Math.floor(Math.random() * 100) + 1;
const number2 = Math.floor(Math.random() * 100) + 1;
const number3 = Math.floor(Math.random() * 100) + 1;
//Data for the Pie Chart
let dataForDatasets = [number1, number2, number3];
let labelsForData = ['Material 1', 'Material 2', 'Material 3'];
const data = {
    labels: labelsForData,
    datasets: [
        {
            label: 'CO2 Footprint',
            data: dataForDatasets,
            backgroundColor: [
                'rgba(255, 248, 154, 0.7)',
                'rgba(255, 201, 1, 0.7)',
                'rgba(9, 111, 125, 0.7)',
                'rgba(63, 91, 101, 0.7)'
            ],
            borderColor: [
                'rgba(235, 227, 118, 1)',
                'rgba(224, 177, 2, 1)',
                'rgba(9, 97, 110, 1)',
                'rgba(47, 68, 76, 1)'
            ],
            borderWidth: 1,
        },
    ],
};

//Function for changing the rocks (World Production)
function changeRocks (percentage) {
    //Get all the rocks
    const rock1 = document.getElementsByClassName('rock-1');
    console.log(rock1);
    //Change the rocks according to the percentage
    if (percentage>=0 && percentage <=10) {
        //rock1.style.opacity = "0,50";
    } 
    else if (percentage>10 && percentage<=20) {

    }
    else if (percentage>20 && percentage<=30) {

    }
    else if (percentage>30 && percentage<=30) {

    }
    else if (percentage>40 && percentage<=50) {

    }
    else if (percentage>50 && percentage<=60){

    }
    //A CONTINUER
}

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

/*
* Function to get all the selected elements from the URL
*/
function getTheElement() {
    //Save the URL (because there is all the selected element in it)
    var urlcourante = document.location.href;
    //Save the element
    var queue_url = urlcourante.substring(urlcourante.lastIndexOf("?") + 1);
    //The list for all the elements
    let selectedElements = [];
    //Go through the end of the url to save each element
    while (queue_url.length !== 0) {
        let indexOfElt = queue_url.indexOf("="); //Search the position of the "=", wich is the end
        if (selectedElements.length === 0) {
            selectedElements.push(queue_url.slice(0, indexOfElt)); //Save an elt into the array
        }

        else {
            let indexOfBegin = queue_url.indexOf("&"); //Search the position of the "&", whic is the begin
            selectedElements.push(queue_url.slice(indexOfBegin + 1, indexOfElt)); //Save an elt into the array
        }

        //Supprimer tout jusqu'au prochain "&" ou tout supprimer (car c'est le dernier elt)
        if (selectedElements.length == 1) {
            //Supprimer 5 caractères
            queue_url = queue_url.slice(4, queue_url.length);
        }
        else {
            //Supprimer 6 caractères
            queue_url = queue_url.slice(6, queue_url.length);
        }

    }

    //Specify elements for battery model
    if (selectedElements.includes("NMC")) {
        selectedElements = ["Ni", "Mn", "Co"]; //Add each elements to selectedElements
    }
    else if (selectedElements.includes("LFP")) {
        selectedElements = ["Li", "Fe", "P", "O"]; //Add each elements to selectedElements
    }
    else if (selectedElements.includes("NCA")) {
        selectedElements = ["Ni", "Co", "Al"]; //Add each elements to selectedElements
    }

    return (selectedElements);
};

/*
* Function to generate the pieChart graphic
*/
export function genPieChart() {
    const pieGraph = document.querySelector('#pie-chart'); //Get the div for pieChart
    var urlcourante = document.location.href; //Get the current URL
    //If : avoids running the instructions before the click on "simulate" (=submit the form) 
    if (urlcourante.includes("=")) {
        let selectedElement = getTheElement(); //Get all selected elements

        //Cleanning (delete empty value)
        function deleteEmptyData(element) {
            return element !== "";
        }
        selectedElement = selectedElement.filter(deleteEmptyData);

        //Delete the current elements in the PieChart
        dataForDatasets.splice(0, dataForDatasets.length);
        labelsForData.splice(0, labelsForData.length);
        //Add nex element to the PieChart
        for (var i = 0; i < selectedElement.length; i++) {
            labelsForData.push(selectedElement[i]);
            dataForDatasets.push(Math.floor(Math.random() * 100) + 1);
        }

    }
}


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
                    <div id="world-production-title">
                        <h3 className="text-left">World Production</h3>
                        <p>Quantity of mineral known and economicaly explotable</p>
                    </div>
                    <div className="actual-ressource">
                        <div id="actual-date">
                            <ActualDate />
                        </div>
                        <div className="rocks">
                            {
                                //Affichage des cailloux
                            }
                            <img src={rockSVG} alt="a rock" className="rock-1" />
                            <img src={rockSVG} alt="a rock" className="rock-2" />
                            <img src={rockSVG} alt="a rock" className="rock-3" />
                            <img src={rockSVG} alt="a rock" className="rock-4" />
                            <img src={rockSVG} alt="a rock" className="rock-5" />
                            <img src={rockSVG} alt="a rock" className="rock-6" />
                            <img src={rockSVG} alt="a rock" className="rock-7" />
                            <img src={rockSVG} alt="a rock" className="rock-8" />
                            <img src={rockSVG} alt="a rock" className="rock-9" />
                            <img src={rockSVG} alt="a rock" className="rock-10" />
                            {
                                changeRocks(5)
                            }
                        </div>
                    </div>
                    <div className="world-production-arrow">
                        <p style={{ fontSize: 45 + 'px', margin: 'auto' }}> ➡ </p>
                    </div>
                    <div className="future-date">
                        <p>2050</p>
                        <div className="rocks">
                            {
                                //Affichage des cailloux
                            }
                            <img src={rockSVG} alt="a rock" class="rock-1" />
                            <img src={rockSVG} alt="a rock" class="rock-2" />
                            <img src={rockSVG} alt="a rock" class="rock-3" />
                            <img src={rockSVG} alt="a rock" class="rock-4" />
                            <img src={rockSVG} alt="a rock" class="rock-5" />
                            <img src={rockSVG} alt="a rock" class="rock-6" />
                            <img src={rockSVG} alt="a rock" class="rock-7" />
                            <img src={rockSVG} alt="a rock" class="rock-8" />
                            <img src={rockSVG} alt="a rock" class="rock-9" />
                            <img src={rockSVG} alt="a rock" class="rock-10" />
                            {
                                changeRocks(24)
                            }
                        </div>
                    </div>
                    <div className="world-production-exhaustion">
                        <p><Earth /> Remaining ressources before exhaustion (%)</p>
                        <div id="exhaustion-calendar">
                            <p></p>
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
                    <img src={mapGisement} id="map-gisement"/>
                </div>
                <div className="co2-footprint" Style='background: #F0F0F0; box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25); border-radius: 10px;'>
                    <h3 className="text-left">CO2 Footprint (%)</h3>
                    <div id="spaceForPieChart">
                        <Pie data={data} className="graph" id="pie-chart" />
                    </div>
                    <div id="CO2carEquivalent">
                        <p>Representative distance with a diesel vehicle :</p>
                        <p><ElectricCarIcon /> {carEquivalent} km</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Simulator;

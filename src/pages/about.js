import React from 'react';
import '../style/App.css';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import logo_IDMC from "../assets/logo_IDMC.png";
import logo_IJL from "../assets/logo_ijl.jpg";
import logo_Mines from "../assets/logo_Mines.png";
import logo_UL from "../assets/logo_UL.png";

const About = () => {
    return (
        <>
            <div class='container xl:w-1/2 md:w-3/5 w-4/5'>
                <div class='container pt-12'>
                    <h1 Style="font-size: 36px; font-weight: bold;">The HeRaws project</h1>
                    <p>HERawS (Highlights on Europe Raw materials Sustainability) project aims to decipher the question of raw materials sustainability for the actors of the green and digital transitions. We develop Decision-Making support tools to assess the sustainability of devices for different audiences (researchers, policymakers, journal editors). The launching of the first online platform is expected within the year.</p>
                </div>
                <div class='container pt-12'>
                    <h1 Style="font-size: 36px; font-weight: bold;">Who are we?</h1>
                    <h2 Style="font-size: 28px; font-weight: bold;">Developers</h2>
                    <p>All developers are currently completing a master degree in cognitive science at the University of Lorraine in the IDMC component.
                    </p>
                    <ul>
                        <li>- Paul DEBANO : UX/UI designer, developer</li>
                        <li>- Amélie JACOB--GUIZON : UX/UI designer, project manager</li>
                        <li>- Loélia PINT : UX/UI designer, developer</li>
                    </ul>

                    <h2 Style="font-size: 28px; font-weight: bold;">Professors and researchers</h2>
                    <p></p>
                    <ul>
                        <li>- Armelle BRUN : associate professor at IDMC and head of the BIRD research team at LORIA lab.</li>
                        <li>- Alexandre NOMINE : lecturer at Mines Nancy and researcher at the Institut Jean Lamour.</li>
                    </ul>

                    <h2 Style="font-size: 28px; font-weight: bold;">Students from Mines Nancy</h2>
                    <p></p>
                    <ul>
                        <li>- Pauline RICHEVILLAIN</li>
                        <li>- Anita GACON</li>
                        <li>- Elena DORADO BUGALLO</li>
                    </ul>

                </div>
                <div class='container pt-12'>
                    <h1 Style="font-size: 36px; font-weight: bold;">Thanks</h1>
                    <p>
                        We want to give a special thanks to all laboratories and universities involved in this project :
                    </p>
                    <ul>
                        <li>- Université de Lorraine</li>
                        <li>- IDMC : were developpers of the website are</li>
                        <li>- Mines Nancy : were researchers in materials are</li>
                        <li>- Institut Jean Lamour</li>
                    </ul>

                    <Box class="pt-12" sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <a href="https://www.univ-lorraine.fr/" target="_blank"><img src={logo_UL} /></a>
                            </Grid>
                            <Grid item xs={3}>
                                <a href="https://idmc.univ-lorraine.fr/" target="_blank"><img src={logo_IDMC} /></a>
                            </Grid>
                            <Grid item xs={3}>
                                <a href="https://mines-nancy.univ-lorraine.fr/" target="_blank"><img src={logo_Mines} /></a>
                            </Grid>
                            <Grid item xs={3}>
                                <a href="https://ijl.univ-lorraine.fr/" target="_blank"><img src={logo_IJL} /></a>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>

        </>

    );
};

export default About;
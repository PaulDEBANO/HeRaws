import React from 'react';
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
                    <p>Donec tristique ex id libero scelerisque, vitae mollis risus sollicitudin. Aliquam ut magna ligula. Suspendisse libero diam, vehicula eget tellus ut, lacinia luctus dolor. Fusce tristique blandit egestas. Fusce vel auctor magna. Nulla tempor, enim vitae ullamcorper tempus, leo ex vulputate nunc, id pretium est sapien id turpis. Aliquam erat volutpat. Aenean non quam interdum, faucibus ipsum maximus, pharetra metus. Vestibulum leo urna, aliquet vitae dolor vitae, eleifend malesuada mi. Ut ultrices a mauris id vestibulum. Donec mollis, ante in pellentesque faucibus, sapien nibh cursus ex, at varius purus dolor id orci. Cras ac ex leo. Proin pellentesque viverra orci consequat iaculis. Donec blandit dui vitae tortor fermentum, in dignissim arcu cursus.</p>
                </div>
                <div class='container pt-12'>
                    <h1 Style="font-size: 36px; font-weight: bold;">Thanks</h1>
                    <p>Etiam aliquet fringilla ex, a vulputate libero sodales sed. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur accumsan consequat eros vel semper. Aenean venenatis vestibulum justo eget aliquet. Integer egestas vulputate ex vitae congue. Duis egestas vel ante varius consectetur. Nam ullamcorper metus ligula. Ut eu magna elit. Maecenas eleifend mauris et lectus ullamcorper, eu tincidunt est fermentum. Duis vel lacus lorem. Fusce scelerisque vel lectus ut euismod. Cras pretium quis ante id fringilla. Phasellus vitae efficitur ex, ut rhoncus risus.</p>

                    <Box class="pt-12" sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={3}>
                                <a href="https://www.univ-lorraine.fr/" target="_blank"><img src={logo_UL}/></a>
                            </Grid>
                            <Grid item xs={3}>
                                <a href="https://idmc.univ-lorraine.fr/" target="_blank"><img src={logo_IDMC}/></a>
                            </Grid>
                            <Grid item xs={3}>
                                <a href="https://mines-nancy.univ-lorraine.fr/" target="_blank"><img src={logo_Mines}/></a>
                            </Grid>
                            <Grid item xs={3}>
                                <a href="https://ijl.univ-lorraine.fr/" target="_blank"><img src={logo_IJL}/></a>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>

        </>

    );
};

export default About;
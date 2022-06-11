import React from 'react';
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin
} from "react-icons/fa";
import {
    FooterContainer,
    FooterWrap,
    FooterLinkContainer,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    StyleBarFooter,
} from "./FooterElements";
import Grid from "@mui/material/Grid";
import logo_UL from "../../assets/logo_UL.png";
import logo_IDMC from "../../assets/logo_IDMC.png";
import logo_Mines from "../../assets/logo_Mines.png";
import logo_IJL_2 from "../../assets/logo_ijl_2.png";
import Box from "@mui/material/Box";


const Footer = () => {
    return (
        <>
            <StyleBarFooter/>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinkContainer>
                        <FooterLinkWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/project'>The HeRaws project</FooterLink>
                                <FooterLink to='/how-it-work'>How it works</FooterLink>
                                <FooterLink to='/terms'>Terms of Service</FooterLink>
                                <FooterLink to='/privacy'>Privacy</FooterLink>
                                <FooterLink to='/cookie'>Cookie Statement</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Navigation</FooterLinkTitle>
                                <FooterLink to='/'>Home</FooterLink>
                                <FooterLink to='/simulator'>Simulator</FooterLink>
                                <FooterLink to='/about'>About</FooterLink>
                                <FooterLink to='/'>Sign In</FooterLink>
                            </FooterLinkItems>
                        </FooterLinkWrapper>
                        <FooterLinkWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to='/'>Facebook</FooterLink>
                                <FooterLink to='/'>Instagram</FooterLink>
                                <FooterLink to='/'>LinkedIn</FooterLink>
                            </FooterLinkItems>
                        </FooterLinkWrapper>
                    </FooterLinkContainer>
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
                                            <a href="https://ijl.univ-lorraine.fr/" target="_blank"><img src={logo_IJL_2}/></a>
                                        </Grid>
                                    </Grid>
                                </Box>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to=''>Heraws</SocialLogo>
                            <WebsiteRights>Heraws © {new Date().getFullYear()}. All rights reserved.</WebsiteRights>
                            <SocialIcons></SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
        </>
    );
};

export default Footer;
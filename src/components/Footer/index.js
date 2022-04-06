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
} from "./FooterElements";


const Footer = () => {
    return (
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
                            <FooterLink to='/signin'>Sign In</FooterLink>
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
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to=''>Heraws</SocialLogo>
                        <WebsiteRights>Heraws © {new Date().getFullYear()}. All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://facebook.com' target='_blank' aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.instagram.com' target='_blank' aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='https://www.linkedin.com' target='_blank' aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;
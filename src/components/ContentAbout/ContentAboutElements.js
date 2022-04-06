import styled from 'styled-components';

export const AboutContainer = styled.div`
    width: 50vw;
    height: 40vh; 
    
    margin-left: auto;
    margin-right: auto;
    margin-top: 5vh;
    margin-bottom: 5vh;
    
    background: #F9F9F9;
    border-radius: 20px;
    
    @media screen and (max-width: 820px) {
        width: 80vw ;
    }
    
`;

export const AboutTitle = styled.h1`
    font-size: 24px;
    color: #000;
`;

export const AboutBody = styled.p`
    color: #000;
    
`;

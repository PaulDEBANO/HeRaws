import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from "styled-components";
import image_simulator from '../assets/simulator.png';


const BtnLink = styled(Link)`
  border-radius: 10px;
  background: #FFC901;
  padding: 15px 40px;
  color: #000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #000;
    color: #fff;
  }
`;

const Home = () => {
    return (
        <>
            <div className="relative z-0">
                <div className="absolute top-0 right-0 z-10">
                    <svg width="485" height="509" viewBox="0 0 485 509" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M579.614 0.0195312V508.142C466.036 475.523 416.433 446.278 408.861 361.184C403.122 296.683 418.445 236.86 357.615 194.024C296.785 151.187 178.162 170.975 144.089 152.538C110.015 134.102 31.1163 122.867 15.9727 73.2286C3.85779 33.5182 -2.49683 8.52893 2.55103 0.0195312H579.614Z" fill="#1B607A"/>
                    </svg>
                </div>
                <div className='absolute top-0 right-0 z-0'>
                    <svg width="523" height="501" viewBox="0 0 523 501" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M546.463 0.800781V500.018C432.886 467.398 393.134 414.924 385.562 329.83C377.99 244.736 355.275 246.155 336.345 229.136C317.416 212.117 130.013 178.08 95.9395 159.643C61.8662 141.206 22.1141 125.605 6.97052 75.967C-5.14441 36.2566 1.92261 9.31021 6.97052 0.800781H546.463Z" fill="#FFC901"/>
                    </svg>
                </div>
            </div>
            <div className='container relative xl:w-3/5 md:w-4/5 w-11/12 mt-12 z-50' Style='background: #F0F0F0; box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25); border-radius: 10px;'>
                <div className='container p-6'>
                    <h1 Style='font-size: 36px;'>We can be HERAWS !</h1>
                    <p>
                        HERawS (Highlights on Europe Raw materials Sustainability) project aims to decipher the question of raw materials sustainability for the actors of the green and digital transitions. We develop Decision-Making support tools to assess the sustainability of devices for different audiences (researchers, policymakers, journal editors). The launching of the first online platform is expected within the year. 
                    </p>
                    <Link Style='color:#096F7D;' to='/about'> Read More</Link>
                </div>
            </div>
            <div className='container relative xl:w-3/5 md:w-4/5 w-11/12 mt-12 z-50' Style='background: #F0F0F0; box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25); border-radius: 10px;'>
                <div className='grid lg:grid-cols-2 p-6 pb-20'>
                    <div>
                        <img src={image_simulator} width='90%'/>
                    </div>
                    <div>
                        <h1 Style='font-size: 36px;'>Our simulator</h1>
                        <p>
                            HeRaws is a simulator create in coworking with students and researchers to allow everyone  to learn about the impacts of materials within electric batteries. To try it, click on “Simulator”, compose your battery on the left panel, validate and discover the impact of this on the ecology and geopolitical context...
                        </p>
                        <div className='mt-10 flex justify-center'>
                            <BtnLink to='/simulator'>GO</BtnLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative mt-52 z-0">
                <div className="absolute bottom-0 left-0 z-10">
                    <svg width="316" height="375" viewBox="0 0 566 671" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M-13.1788 670.687V0.0175781C100.399 43.0717 150.001 81.6716 157.573 193.987C163.313 279.122 147.989 358.082 208.82 414.622C269.65 471.161 388.273 445.043 422.346 469.378C456.419 493.713 535.318 508.541 550.462 574.059C562.577 626.472 568.932 659.455 563.884 670.687H-13.1788Z" fill="#1B607A"/>
                    </svg>
                </div>
                <div className='absolute bottom-0 left-0 z-0'>
                    <svg width="443" height="541" viewBox="0 0 693 846" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.187378 845.502V0.533203C144.216 55.7442 194.626 144.562 204.228 288.591C213.83 432.619 242.636 430.219 266.641 459.025C290.645 487.83 528.293 545.442 571.501 576.648C614.71 607.854 665.12 634.26 684.324 718.276C699.687 785.49 690.725 831.099 684.324 845.502H0.187378Z" fill="#FFC901"/>
                    </svg>
                </div>
            </div>
        </>
    );
};

export default Home;

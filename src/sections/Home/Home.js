import React from 'react'
import { motion } from 'framer-motion'
import {HeroWrapper, HeroContainer, HeroContent, SiteNavLink, ScrollWrapper, ScrollContainer, ScrollBall, HeroLogoBackGround} from './Home.elements'
import styled from 'styled-components'
import { Container } from '../../globalStyles'
import {FaGithub, FaHamburger, FaLinkedin, FaTwitter} from 'react-icons/fa'


const Header = styled.div`
    position: sticky;
    top:50px;
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;
    color: #fff;
    font-size: 1.2rem;

    .socialLinks{
        display: none;
        justify-content: space-between;
        width: 120px;
    }

    @media screen and (min-width: 768px){
        justify-content: flex-end;
        .menuIcon{
            display: none;
        }

        .socialLinks{
            display: flex;
        }


        
    }

`;

const Home = () => {

    const svgVariants = {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1,
            transition: {
                duration: 3
            }

        }

    }

    const pathVariants = {
        initial:{
            opacity: 0,
            pathLength: 0
        },
        animate:{
            opacity: [1,0],
            pathLength: [1,0],
            transition:{
                duration: 5,
                ease: "easeIn"
            }
        }
    }
    return (
        <>
            <HeroWrapper>
                <Container>
                    <Header>
                        <FaHamburger className = "menuIcon"/>
                        <div className = "socialLinks">
                            <FaGithub/>
                            <FaTwitter/>
                            <FaLinkedin/>

                        </div>

                    </Header>
                </Container>
                
                <HeroContainer>
                  <HeroLogoBackGround>
                    <motion.svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                         viewBox="0 0 150 150"  xmlSpace="preserve"

                                variants = {svgVariants}
                                initial = 'initial'
                                animate = 'animate'                            
                            >
                       
                       <g id="Layer_1">
                                <g id="XMLID_32_" class="st0">
                                    <g id="XMLID_30_">
                                        <linearGradient id="XMLID_2_" gradientUnits="userSpaceOnUse" x1="23.9995" y1="74.0718" x2="143.9426" y2="71.9165">
                                            <stop  offset="0" style={{stopColor:'#00101A'}}/>
                                            <stop  offset="1" style={{stopColor:'#00101A', stopOpacity:0}}/>
                                        </linearGradient>
                                        <path id="XMLID_17_" class="st1" d="M26.9,116.7c-6.9-4.2-12.3-10.1-16.2-17.6c-3.9-7.5-5.8-16-5.8-25.5c0-9.5,1.9-18,5.8-25.5
                                            c3.9-7.5,9.3-13.4,16.2-17.6c6.9-4.2,14.7-6.3,23.4-6.3c8.6,0,16.1,2.1,22.5,6.3c6.4,4.2,11.1,10.3,14,18.1L68.4,60.2
                                            C64.2,51.4,58.1,47,50.1,47c-6.2,0-11.2,2.4-15.3,7.1c-4,4.8-6.1,11.2-6.1,19.5c0,8.2,2,14.7,6.1,19.5c4,4.8,9.1,7.1,15.3,7.1
                                            c8.1,0,14.2-4.4,18.3-13.2l18.3,11.8c-2.9,7.6-7.6,13.6-14,17.8c-6.4,4.3-13.9,6.4-22.5,6.4C41.6,123,33.8,120.9,26.9,116.7z"/>
                                        <linearGradient id="XMLID_3_" gradientUnits="userSpaceOnUse" x1="63.4198" y1="18.1032" x2="36.454" y2="115.8545">
                                            <stop  offset="0" style={{stopColor:'#2071D4'}}/>
                                            <stop  offset="0.1069" style={{stopColor:'#1F6DCC', stopOpacity:0.8931}}/>
                                            <stop  offset="0.2773" style={{stopColor:'#1B60B4', stopOpacity:0.7227}}/>
                                            <stop  offset="0.49" style={{stopColor:'#144D8F', stopOpacity:0.51}}/>
                                            <stop  offset="0.7366" style={{stopColor:'#0B315A', stopOpacity:0.2634}}/>
                                            <stop  offset="1" style={{stopColor:'#00101A', stopOpacity:0}}/>
                                        </linearGradient>
                                        <path id="XMLID_15_" class="st2" d="M26.9,116.7c-6.9-4.2-12.3-10.1-16.2-17.6c-3.9-7.5-5.8-16-5.8-25.5c0-9.5,1.9-18,5.8-25.5
                                            c3.9-7.5,9.3-13.4,16.2-17.6c6.9-4.2,14.7-6.3,23.4-6.3c8.6,0,16.1,2.1,22.5,6.3c6.4,4.2,11.1,10.3,14,18.1L68.4,60.2
                                            C64.2,51.4,58.1,47,50.1,47c-6.2,0-11.2,2.4-15.3,7.1c-4,4.8-6.1,11.2-6.1,19.5c0,8.2,2,14.7,6.1,19.5c4,4.8,9.1,7.1,15.3,7.1
                                            c8.1,0,14.2-4.4,18.3-13.2l18.3,11.8c-2.9,7.6-7.6,13.6-14,17.8c-6.4,4.3-13.9,6.4-22.5,6.4C41.6,123,33.8,120.9,26.9,116.7z"/>
                                    </g>
                                    <g id="XMLID_31_">
                                        <linearGradient id="XMLID_4_" gradientUnits="userSpaceOnUse" x1="68.498" y1="81.2052" x2="176.9274" y2="60.6105">
                                            <stop  offset="0" style={{stopColor:'#00101A}'}}/>
                                            <stop  offset="1" style={{stopColor:'#00101A', stopOpacity:0}}/>
                                        </linearGradient>
                                        <path id="XMLID_11_" class="st3" d="M85.3,116.7c-6.9-4.2-12.3-10.1-16.2-17.6c-3.9-7.5-5.8-16-5.8-25.5c0-9.5,1.9-18,5.8-25.5
                                            c3.9-7.5,9.3-13.4,16.2-17.6c6.9-4.2,14.7-6.3,23.4-6.3c8.6,0,16.1,2.1,22.5,6.3c6.4,4.2,11.1,10.3,14,18.1l-18.3,11.6
                                            c-4.2-8.8-10.3-13.2-18.3-13.2c-6.2,0-11.2,2.4-15.3,7.1c-4,4.8-6.1,11.2-6.1,19.5c0,8.2,2,14.7,6.1,19.5c4,4.8,9.1,7.1,15.3,7.1
                                            c8.1,0,14.2-4.4,18.3-13.2l18.3,11.8c-2.9,7.6-7.6,13.6-14,17.8c-6.4,4.3-13.9,6.4-22.5,6.4C100,123,92.2,120.9,85.3,116.7z"/>
                                        <linearGradient id="XMLID_7_" gradientUnits="userSpaceOnUse" x1="68.498" y1="81.2052" x2="162.8929" y2="63.2761">
                                            <stop  offset="0" style={{stopColor:'#2072D4'}}/>
                                            <stop  offset="0.4186" style={{stopColor:'#104279', stopOpacity:0.5018}}/>
                                            <stop  offset="0.8403" style={{stopColor:'#00101A', stopOpacity:0}}/>
                                        </linearGradient>
                                        <path id="XMLID_13_" class="st4" d="M85.3,116.7c-6.9-4.2-12.3-10.1-16.2-17.6c-3.9-7.5-5.8-16-5.8-25.5c0-9.5,1.9-18,5.8-25.5
                                            c3.9-7.5,9.3-13.4,16.2-17.6c6.9-4.2,14.7-6.3,23.4-6.3c8.6,0,16.1,2.1,22.5,6.3c6.4,4.2,11.1,10.3,14,18.1l-18.3,11.6
                                            c-4.2-8.8-10.3-13.2-18.3-13.2c-6.2,0-11.2,2.4-15.3,7.1c-4,4.8-6.1,11.2-6.1,19.5c0,8.2,2,14.7,6.1,19.5c4,4.8,9.1,7.1,15.3,7.1
                                            c8.1,0,14.2-4.4,18.3-13.2l18.3,11.8c-2.9,7.6-7.6,13.6-14,17.8c-6.4,4.3-13.9,6.4-22.5,6.4C100,123,92.2,120.9,85.3,116.7z"/>
                                    </g>
                                </g>
                            </g>
                            <g id="Layer_1_copy">
                                <motion.path id="XMLID_10_" class="st5" d="M26.9,116.7c-6.9-4.2-12.3-10.1-16.2-17.6c-3.9-7.5-5.8-16-5.8-25.5c0-9.5,1.9-18,5.8-25.5
                                    c3.9-7.5,9.3-13.4,16.2-17.6c6.9-4.2,14.7-6.3,23.4-6.3c8.6,0,16.1,2.1,22.5,6.3c6.4,4.2,11.1,10.3,14,18.1L68.4,60.2
                                    C64.2,51.4,58.1,47,50.1,47c-6.2,0-11.2,2.4-15.3,7.1c-4,4.8-6.1,11.2-6.1,19.5c0,8.2,2,14.7,6.1,19.5c4,4.8,9.1,7.1,15.3,7.1
                                    c8.1,0,14.2-4.4,18.3-13.2l18.3,11.8c-2.9,7.6-7.6,13.6-14,17.8c-6.4,4.3-13.9,6.4-22.5,6.4C41.6,123,33.8,120.9,26.9,116.7z"
                                        
                                        variants = {pathVariants}
                                    />
                                <motion.path id="XMLID_5_" class="st5" d="M85.3,116.7c-6.9-4.2-12.3-10.1-16.2-17.6c-3.9-7.5-5.8-16-5.8-25.5c0-9.5,1.9-18,5.8-25.5
                                    c3.9-7.5,9.3-13.4,16.2-17.6c6.9-4.2,14.7-6.3,23.4-6.3c8.6,0,16.1,2.1,22.5,6.3c6.4,4.2,11.1,10.3,14,18.1l-18.3,11.6
                                    c-4.2-8.8-10.3-13.2-18.3-13.2c-6.2,0-11.2,2.4-15.3,7.1c-4,4.8-6.1,11.2-6.1,19.5c0,8.2,2,14.7,6.1,19.5c4,4.8,9.1,7.1,15.3,7.1
                                    c8.1,0,14.2-4.4,18.3-13.2l18.3,11.8c-2.9,7.6-7.6,13.6-14,17.8c-6.4,4.3-13.9,6.4-22.5,6.4C100,123,92.2,120.9,85.3,116.7z"

                                    variants = {pathVariants}
                                    />
                            </g>
                        </motion.svg>
                  </HeroLogoBackGround>
                  <HeroContent>
                    <h2>Isaac Odeh</h2>
                    <span>Front End Developer</span>
                    
                    <nav>
                        <SiteNavLink to = '/home'>About</SiteNavLink>
                        <SiteNavLink className = "middle">Projects</SiteNavLink>
                        <SiteNavLink>Contact</SiteNavLink>
                    </nav>

                    <ScrollWrapper>
                        <ScrollContainer
                            animate = {{
                                y: [0, -10]
                            }}
                            transition = {{
                                yoyo: Infinity
                            }}
                        >
                            <ScrollBall
                                animate = {{
                                y: [0, -25]
                                }}
                                transition = {{
                                    yoyo: Infinity,
                                    duration: .8,
                                    type: 'tween'
                                }}

                            />

                           

                        </ScrollContainer>
                        <small>Scroll Down</small>
                    </ScrollWrapper>

                  </HeroContent>
                    

                </HeroContainer>
            </HeroWrapper>
            
        </>
    )
}

export default Home

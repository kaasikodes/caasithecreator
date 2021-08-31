import { useEffect, useState } from 'react'
import Projects from "../sections/Projects/Projects";
import Contact from "../sections/Contact/Contact";
import Footer from "../sections/Footer/Footer";
import Intro from "../sections/Intro/Intro";
import About from "../sections/About/About";
import HomeSection from "../sections/Home/Home";
import styled from 'styled-components'

import { motion } from 'framer-motion'

const HomeWrapper = styled(motion.div)`
    display: flex;
    justify-content: flex-end;
    align-items: stretch;

    /* overflow-x: hidden; */
    .home, .otherPart{
        min-width: 100vw;
        flex: 1;
    }
    .otherPart{
        order: 1
    }
    .home{
        order: 2;
        background: #1b1b1b;
    }

`;

const containerVariants = {
    initial: {
        x: 0
    },
    animate: {
        x: '100vw',
        transition: {
            duration: 2,
            ease: 'easeOut'
        }
    },
    exit: {
        x: '100vw',
        transition: {
            duration: 2,
            ease: 'easeOut'
        }
    }

    
}

const Home = (props) => {

    const [showOther, setshowOther] = useState(false)

    const handleScroll = () => {
        
        const distanceFromTop = window.scrollY;
    
        if(distanceFromTop >=  50){
            setshowOther(true)
            
            
        }else{
            setshowOther(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, false)
        return () => {
            window.removeEventListener('scroll', handleScroll, false)
        }
    }, [])
    return (
        <HomeWrapper
            variants = {containerVariants}
            initial = 'initial'
            animate = {`${showOther && 'animate'}`}
            exit = 'exit'
            
        
        >
            <div className = 'home'>
                <HomeSection/>
            </div>

            <div className = 'otherPart'>
                <Intro/>
        

               
            </div>
            
        </HomeWrapper>
    )
}

export default Home

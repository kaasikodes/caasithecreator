import styled from 'styled-components';
import {motion} from 'framer-motion'
import { SectionHeading, SectionSubHeading, Container } from '../../globalStyles';

export const AboutWrapper = styled(motion.div)`
    width: 100%;
    background: #d7dfe9;
    min-height: 100vh;
    
  
`;

export const AboutContainer = styled(Container)`
    
    display: flex;
    flex-direction: column;
    height: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
    ${Container}


`;

export const AboutHeading = styled(SectionHeading)`
    color: #5CAEFF;
    ${SectionHeading}
`;

export const AboutSubHeading = styled(SectionSubHeading)`
    /* color: #1b1b1b; */
    ${SectionSubHeading}
`;

export const AboutContent = styled.div`
    display: flex;
    align-items: flex-start;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
    
    


`;

export const AboutBioSection = styled.div`
    flex: 1;
    min-width: 500px;
    margin-right: 120px;
    
    @media screen and (max-width: 768px){
        text-align: center;
        margin-bottom: 150px;
        margin-left: 0;
    }
    


`;

export const AboutSkillsSection = styled.div`
    width: 500px;
    
    


`;




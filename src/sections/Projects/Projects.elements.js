import styled from 'styled-components';
import {motion} from 'framer-motion'
import { Container } from '../../globalStyles';

export const ProjectsWrapper = styled.div`
    position: relative;
    min-height: 100vh;
    .custom-shape-divider-top-1629988800 {
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
    }

    .custom-shape-divider-top-1629988800 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 178px;
        transform: rotateY(180deg);
    }

    .custom-shape-divider-top-1629988800 .shape-fill {
        fill: #d7dfe9;
    }
`;


export const ProjectsContainer = styled(Container)`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
    ${Container}


`;
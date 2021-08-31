import styled from 'styled-components';
import {motion} from 'framer-motion'
import { Container } from '../../globalStyles';
import {Link} from 'react-router-dom'


export const HeroWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding-bottom: 50px;
    background: rgb(0,16,26);
    background: radial-gradient(circle, rgba(0,16,26,1) 0%, rgba(0,0,11,1) 100%); 
  
`;

export const HeroContainer = styled(Container)`
    
    display: flex;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    height: 100%;
    ${Container}


`;

export const HeroLogoBackGround = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    svg{
        width: 25%;
        position: relative;
        top: -90px;
        
       
       
    }

    .st0{opacity:0.8;}
	.st1{fill:url(#XMLID_2_);}
	.st2{fill:url(#XMLID_3_);}
	.st3{fill:url(#XMLID_4_);}
	.st4{fill:url(#XMLID_7_);}
	.st5{fill:none;stroke:#FFFFFF;stroke-miterlimit:10;}

`;

export const HeroContent = styled.div`
    z-index: 2;
    margin-top: 150px;

    @media screen and (max-width: 768px){
        margin-top: 100px;
            
    }

    
    display: flex;
    flex-direction: column; 
    align-items: center;
    text-align: center;
    h2{
        color: #d1f8ff;
        font-size: 5rem;

        @media screen and (max-width: 768px){
            font-size: 3.8rem;
            
        }
    }
    span{
        color: #fff;
        letter-spacing: 8px;
        @media screen and (max-width: 768px){
            font-size: .8rem;
            letter-spacing: 5px;
            
        }

    }
    nav{
        display: flex;
        margin-top: 80px;

        .middle::after{
        content: '';
        display: inline-block;
        width: 2px;
        height: 70%;
        background: #fff;
        margin-left: 40px;
        margin-right: 40px;

        }
        .middle::before{
        content: '';
        display: inline-block;
        width: 2px;
        height: 70%;
        background: #fff;
        margin-right: 40px;
        margin-left: 40px;

        }
    }
`;

export const SiteNavLink = styled(Link)`
    color: #5ab2c2 !important;
    display: flex;
    align-items: center;
    text-decoration:none;
    

    
   
`;

export const ScrollWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 120px;

    small{
        color: #d1f8ff;
        margin-top: 10px;
        font-size: .8rem;
        font-weight: 200;
    }

`;

export const ScrollContainer = styled(motion.div)`
    height: 40px;
    width: 20px;
    border-radius: 25px;
    border: 1px solid #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 2px 0;

`;

export const ScrollBall = styled(motion.div)`
    height: 5px;
    width: 5px;
    border-radius: 50%;
    background-color: #fafafa;

`;
import React from 'react'
import styled from 'styled-components'
import { Container } from '../../globalStyles'
import Logo from '../../Images/footerLogo.svg'

const FooterWrapper = styled.div`
    background: #F2F2F2;
    min-height: 120px;
    padding: 40px 0;
    

`;

const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    .footerLogoContainer{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        img{
            position: relative;
            object-fit: contain;
            width: 100px;
        }
        .copyright{
            position: absolute;
            width: 200px;
            left: 50%;
            margin-left: -100px;
            z-index: 2;
            top: 40px;
            color: #1b1b1b;
            font-size: .8rem;
            text-transform: capitalize;
            text-align: center;
        }
    }

    span{
        text-transform: uppercase;
        font-size: .9rem;

    }

`;

const Footer = () => {
    return (
        <div>
            <FooterWrapper>
                <Container>
                    <FooterContent>
                        <span>Home</span>
                        <span>About</span>
                        <div className = 'footerLogoContainer'>
                            <img src= {Logo} alt = ''/>
                            <span className = 'copyright'>Copyright Isaac O. 2021</span>
                        </div>
                        <span>Projects</span>
                        <span>Contact</span>
                    </FooterContent>
                </Container>
            </FooterWrapper>
            
        </div>
    )
}

export default Footer

import React from 'react'
import { Container, SectionHeading, Button } from '../../globalStyles'
import styled from 'styled-components'
import {FaFacebook, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

const ContactWrapper = styled.div`
    min-height: 100vh;
    padding: 100px 0;
`;
const ContactHeading = styled.div``;
const ContactContent = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media screen and (max-width: 768px){
        flex-direction: column;
    }

`;
const ContactFormSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    align-items: stretch;

    @media screen and (max-width: 768px){
        margin-bottom: 120px;
    }

    span{
        width: max-content;

        /* for the button */
    }

    .form-group{
        display: flex;
        flex-direction: column;
        margin-bottom: 30px;

        label{
            margin-bottom: 5px;
            text-transform: uppercase;
            font-size: .8rem;
        }

        input{
            padding: 10px;
        }

        input,textarea{
            outline: none;
            border: solid 1px #f43ff1;
        }
    }

`;
const ContactInfoSection = styled.div`
    display: flex;
    width: 500px;
    height: 40vh;
    justify-content: space-between;
    flex-direction: column;
    
    .infoSection{
        h4{
            color: #5CAEFF;
            text-transform: uppercase;
            width: max-content;
            font-weight: 700;
             &::after{
                 content: '';
                 display: block;
                 width: 40%;
                 height: 2px;
                 background: #5CAEFF;
             }
        }


        .content{
            margin-top: 20px;
            display: flex;
            .info{
                margin-right: 50px;
                display: flex;
                align-items: center;
                color: #666666;

                span{
                    margin-left: 5px;
                }
            }
        }
    }

`;

const Contact = () => {
    return (
        <ContactWrapper>
            <Container>
                <ContactHeading>
                    <SectionHeading left>Contact Me</SectionHeading>
                </ContactHeading>

                <ContactContent>
                    <ContactFormSection>
                        <div className = "form-group">
                            <label htmlFor = 'name'>Name</label>
                            <input type = 'text' name = 'name' id = 'name'/>
                        </div>
                        <div className = "form-group">
                            <label htmlFor = 'email'>Email</label>
                            <input type = 'text' name = 'email' id = 'email'/>
                        </div>
                        <div className = "form-group">
                            <label htmlFor = 'message'>Message</label>
                            <textarea name = 'message' id = 'message' rows = '5'/>
                        </div>

                        <Button>Send</Button>

                    </ContactFormSection>

                    <ContactInfoSection>
                        <div className = "infoSection">
                            <h4>Socials</h4>
                            <div className = 'content'>
                                <div className = 'info'>
                                    <FaGithub/>
                                    <span>kaasiKodes</span>
                                </div>
                                <div className = 'info'>
                                    <FaTwitter/>
                                    <span>kaasiKodes</span>
                                </div>
                                <div className = 'info'>
                                    <FaLinkedin/>
                                    <span>kaasiKodes</span>
                                </div>
                            </div>

                        </div>


                        <div className = "infoSection">
                            <h4>Get in Touch</h4>
                            <div className = 'content'>
                                <div className = 'info'>
                                    <FaFacebook/>
                                    <span>kaasiKodes</span>
                                </div>
                            </div>

                        </div>

                    </ContactInfoSection>
                </ContactContent>
            </Container>
        </ContactWrapper>
    )
}

export default Contact

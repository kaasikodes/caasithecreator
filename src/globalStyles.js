import styled, { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

const GlobalStyle = createGlobalStyle`
    html{
        scroll-behavior: smooth;
    }
    *{

        margin: 0;
        box-sizing: border-box;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
    }
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1300px;
  padding: 0 50px 0 50px;
`;

export const SectionHeading = styled.h3`
  font-size: 3.5rem;
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
  color: #5caeff;
  font-weight: 700;
  text-align: ${({ left }) => `${left ? "left" : "center"}`};
`;

export const SectionSubHeading = styled.h4`
  margin-top: 10px;
  font-size: 1.3rem;
  @media screen and (max-width: 768px) {
    font-size: 1.15rem;
  }
  display: block;
  width: max-content;

  text-align: ${({ left }) => `${left ? "left" : "center"}`};
  &::after {
    content: "";

    display: block;
    width: 65%;
    height: 1px;
    background: green;
    margin: 0 auto;
    margin-top: 10px;
    opacity: 0.3;
  }
`;

export const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

export const Button = styled.span`
  color: #fff;
  background: #5caeff;
  padding: 10px 20px;
`;

export const SkillCard = styled.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1.1;
  background: #f4f4f4;
  padding: 5px 15px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ParaTitle = styled.h6`
  font-weight: 700;
  margin-bottom: ${({ lesser }) => `${lesser ? "10px" : "20px"}`};
  text-transform: uppercase;
  color: ${({ lesser }) => `${lesser ? "#4c5662" : "#1b5db3"}`};
  font-size: 1.3rem;
  margin-top: ${({ lesser }) => `${lesser ? "50px" : "0"}`};
`;

export const Para = styled(motion.p)`
  color: #1b1b1b;
  line-height: 1.8;
  margin-bottom: 20px;
`;

export default GlobalStyle;

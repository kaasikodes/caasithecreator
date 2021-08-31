import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Container, Para } from "../../globalStyles";

const IntroWrapper = styled.div`
  background: #d7dfe9;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;

  p {
    margin: auto;
    text-align: center;
    font-size: 2rem;

    @media screen and (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;

const Intro = ({ introAnim }) => {
  console.log("inro", introAnim);
  const [show, setshow] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const x = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    ["-100vw", "-50vw", "0"]
  );
  const opacity = useTransform(scrollYProgress, [0.29, 0.44], [1, 0]);

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      if (latest >= 0.25) {
        setshow(true);
      } else {
        setshow(false);
      }
    });
  }, [scrollYProgress]);

  const paraVariants = {
    initial: {
      x: 0,
    },
    animate: {
      y: 0,
    },
    transition: {
      staggerChildren: 0.32,
    },
  };

  const spanVariants = {
    initial: {
      x: 0,
      y: 0,
    },

    animate: {
      x: 20,
      y: 10,
      opacity: [1, 1],
    },
  };
  return (
    <div>
      <IntroWrapper>
        <Container>
          <motion.div style={{ x }}>
            <Para style={{ opacity }}>
              <motion.span variants={spanVariants} style={{ display: "block" }}>
                I’m a passionate front end web developer based in Gombe,
                Nigeria.
              </motion.span>
              <motion.span variants={spanVariants} style={{ display: "block" }}>
                I love creating aesthetically pleasing and functional websites
                for
              </motion.span>
              <motion.span variants={spanVariants} style={{ display: "block" }}>
                different industries.
              </motion.span>
            </Para>
          </motion.div>
        </Container>
      </IntroWrapper>
    </div>
  );
};

export default Intro;

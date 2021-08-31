import { useEffect, useState, useRef } from "react";
import Projects from "../sections/Projects/Projects";
import Contact from "../sections/Contact/Contact";
import Footer from "../sections/Footer/Footer";
import Intro from "../sections/Intro/Intro";
import About from "../sections/About/About";
import HomeSection from "../sections/Home/Home";
import {
  motion,
  useElementScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  height: max-content;
`;

const HomeContainer = styled(motion.div)`
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
`;
const IntroContainer = styled(motion.div)`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
`;
const OtherWrapper = styled(motion.div)`
  position: relative;
  background: #fff;
  /* top: 100vh; */
`;
const OtherContainer = styled(motion.div)``;

const OtherPages = () => {
  const wrapRef = useRef();
  const [topOfOther, setTopOfOther] = useState("0");
  const [zIndexOfOther, setZIndexOfOther] = useState(0);

  const { scrollYProgress } = useViewportScroll();

  const [introX, setintroX] = useState(0);

  const heroX = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2],
    ["0", "50vw", "100vw"]
  );
  // console.log("hero", heroX.get());
  useEffect(() => {
    const totalHeight = wrapRef.current.offsetHeight;
    setintroX(scrollYProgress.get());

    scrollYProgress.onChange((latest) => {
      let currentScrollTop = 0;
      if (latest >= 0.2) {
        currentScrollTop = 0.2 * totalHeight;
        if (latest >= 0.21 && latest <= 0.23)
          window.scrollTo(0, currentScrollTop);
        // window.scrollTo(0, currentScrollTop);
        setTopOfOther("200vh");
        setZIndexOfOther(200);
      } else {
        currentScrollTop = 0;
        // window.scrollTo(0, currentScrollTop);
        setTopOfOther("0");
        setZIndexOfOther(0);
      }
    });
  }, [scrollYProgress.get()]);
  return (
    <Wrapper ref={wrapRef}>
      <HomeContainer style={{ x: heroX }}>
        <HomeSection />
      </HomeContainer>
      <IntroContainer>
        <Intro introAnim={{ introX }} />
      </IntroContainer>
      <OtherWrapper
        style={{
          top: topOfOther,
          zIndex: zIndexOfOther,
        }}
      >
        <OtherContainer>
          <Projects />

          <About />

          <Contact />

          <Footer />
        </OtherContainer>
      </OtherWrapper>
      )
    </Wrapper>
  );
};

export default OtherPages;

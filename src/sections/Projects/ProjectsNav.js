import { useState } from "react";
import styled from "styled-components";
import { motion, AnimateSharedLayout, useViewportScroll } from "framer-motion";

const Nav = styled(motion.nav)`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    width: 400px;
    /* make scrollbar have space */
    padding-bottom: 30px;
    overflow-x: scroll;
  }
`;

const NavItem = styled.span`
  margin-right: 20px;
  padding: 5px 10px;
  background: none;
  /* put no allow word to wrap */
  min-width: max-content;
  color: #5caeff;
  text-transform: uppercase;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  border-radius: 5px;

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
  &:hover {
    background: #1b1b1b25;
  }

  .active {
    background: #1b1b1b;
    border-radius: 5px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

const ProjectsNav = () => {
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };

  const [selected, setSelected] = useState(0);
  const [categories, setCategories] = useState([
    "All",
    "FrontEnd",
    "Backend",
    "Landing Pages",
    "Email",
  ]);
  return (
    <AnimateSharedLayout>
      <Nav>
        {categories.map((item, index) => (
          <NavItem key={index} onClick={() => setSelected(index)}>
            {item}
            {selected === index && (
              <motion.div
                layoutId="background"
                className="active"
                initial={false}
                transition={spring}
              />
            )}
          </NavItem>
        ))}
      </Nav>
    </AnimateSharedLayout>
  );
};

export default ProjectsNav;

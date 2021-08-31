import { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ParaTitle, Para, Button } from "../../globalStyles";
import ImageOne from "../../Images/ProjImage.png";

const ProjectItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 50px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;
  margin-bottom: 35px;
  flex: 1;
  min-width: 400px;
  max-width: 400px;
  cursor: pointer;
  border: ${({ showProjectInfo }) =>
    `${showProjectInfo && "solid #f2f5f4 1px"}`};
  img {
    object-fit: contain;
    width: 200px;
    height: 200px;
    margin-bottom: 20px;
  }
  /* span{
        align-self: stretch;
    } */
`;

const ProjectItems = () => {
  const [animateArray, setAnimateArray] = useState(0);

  const handleProjectInfo = () => {
    setTimeout(() => {
      setShowProjectInfo(!showProjectInfo);
    }, 2500);
    if (showProjectInfo) {
      setAnimateArray([180, 0]);
    } else {
      setAnimateArray([0, 180]);
    }
  };

  const [projects, setProjects] = useState([
    {
      name: "Onoms's Kitchen",
      description:
        "Also, I'm part of a group of makers with a mission to build a better internet, one digital project at a time. One of our recent project launches is Cool Backgrounds another free design tool to generate background wallpaper for websites, blogs and phones",
    },
    {
      name: "Dad's Gym",
      description:
        "Also, I'm part of a group of makers with a mission to build a better internet, one digital project at a time. One of our recent project launches is Cool Backgrounds another free design tool to generate background wallpaper for websites, blogs and phones",
    },
    {
      name: "Tony's Chart Room",
      description:
        "Also, I'm part of a group of makers with a mission to build a better internet, one digital project at a time. One of our recent project launches is Cool Backgrounds another free design tool to generate background wallpaper for websites, blogs and phones",
    },
    {
      name: "Onoms's Kitchen",
      description:
        "Also, I'm part of a group of makers with a mission to build a better internet, one digital project at a time. One of our recent project launches is Cool Backgrounds another free design tool to generate background wallpaper for websites, blogs and phones",
    },
    {
      name: "Dad's Gym",
      description:
        "Also, I'm part of a group of makers with a mission to build a better internet, one digital project at a time. One of our recent project launches is Cool Backgrounds another free design tool to generate background wallpaper for websites, blogs and phones",
    },
    {
      name: "Tony's Chart Room",
      description:
        "Also, I'm part of a group of makers with a mission to build a better internet, one digital project at a time. One of our recent project launches is Cool Backgrounds another free design tool to generate background wallpaper for websites, blogs and phones",
    },
  ]);

  const [showProjectInfo, setShowProjectInfo] = useState(false);
  return (
    <ProjectItemsContainer>
      {projects.map((item, index) => (
        <ProjectItem
          key={index}
          showProjectInfo
          initial={{ rotateY: 0 }}
          animate={{ rotateY: animateArray }}
          transition={{ duration: 5, ease: "easeInOut" }}
          // correct the dampness or type of transition
        >
          {showProjectInfo ? (
            <motion.div onClick={handleProjectInfo} initial={{ rotateY: 180 }}>
              <ParaTitle>{item.name}</ParaTitle>
              <Para>{item.description}</Para>
              <Button>See Live</Button>
            </motion.div>
          ) : (
            <div onClick={handleProjectInfo}>
              <img src={ImageOne} alt="" />
              <ParaTitle>{item.name}</ParaTitle>
            </div>
          )}
        </ProjectItem>
      ))}
    </ProjectItemsContainer>
  );
};

export default ProjectItems;

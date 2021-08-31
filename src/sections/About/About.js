import React, {useState} from 'react'
import { AboutHeading, AboutWrapper, AboutContainer, AboutSubHeading, AboutSkillsSection, AboutBioSection, AboutContent } from './About.elements'
import { SectionTitleContainer , Button, Para, ParaTitle, SkillsContainer, SkillCard} from '../../globalStyles'
const About = () => {
    const [skills, setSkills] = useState(['HTML', 'CSS', 'Javascript', 'Gatsby', 'SASS', 'Graph QL','Firebase'])
    return (
        <>
            <AboutWrapper
                initial = {{
                    opacity: 0
                }}
                animate = {{
                    opacity: 1
                }}
                
            >
                <AboutContainer>
                    <SectionTitleContainer>
                        <AboutHeading>
                            About Me
                        </AboutHeading>
                        <AboutSubHeading>
                            Get to know more about me
                        </AboutSubHeading>
                    </SectionTitleContainer>
                    
                    <AboutContent>
                        <AboutBioSection>
                            <ParaTitle>Hello!</ParaTitle>
                            <Para>
                            I’m a passionate front end web developer based in Gombe, Nigeria. I love creating aesthetically pleasing and functional websites for different industries. I enjoy helping brands establish their digital presence and developing pleasant user experiences.
                            </Para>
                            <Para>
                            Feel free to contact me wether it's a project, job opportunity, or just a chance to connect. I would love to hear from you.
                            </Para>
                            <Button>Contact Me</Button>
                        </AboutBioSection>


                        <AboutSkillsSection>
                            <ParaTitle>Tech Stack</ParaTitle>
                            <SkillsContainer>
                                {
                                    skills.map((skill,index) => (
                                        <SkillCard key = {index}> {skill} </SkillCard>
                                    ))
                                }

                            </SkillsContainer>

                            

                            <ParaTitle lesser>Other Skills</ParaTitle>
                            <Para>Illustrator, Figma, Photoshop</Para>


                            <ParaTitle lesser>Soft Skills</ParaTitle>
                            <Para>Organization, Collaboration, Leadership, Design</Para>


                            <ParaTitle lesser>Languages spoken</ParaTitle>
                            <Para>English</Para>
                        </AboutSkillsSection>
                    </AboutContent>
                        
                </AboutContainer>
            </AboutWrapper>
            
            
        </>
    )
}

export default About

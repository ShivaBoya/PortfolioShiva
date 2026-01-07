import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Section = styled.section`
  min-height: auto;
  background: transparent;
  padding: 10rem 9% 2rem;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    overflow-x: hidden;
  }
`;

const Title = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  color: var(--main-color);
  margin-bottom: 4rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--main-color), transparent);
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(to bottom, rgba(124, 240, 61, 0.2), var(--main-color), rgba(124, 240, 61, 0.2));

    @media (max-width: 768px) {
      left: 0;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  justify-content: ${props => props.isEven ? 'flex-start' : 'flex-end'};
  padding: 2rem 0;
  width: 100%;
  
  @media (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 20px;
    width: calc(100% - 20px);
  }
`;

const Card = styled(motion.div)`
  width: 45%;
  background: #0b1120;
  border: 1px solid rgba(124, 240, 61, 0.1);
  border-radius: 16px;
  padding: 1.5rem;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-color: var(--main-color);
  }

  @media (max-width: 768px) {
    width: calc(100% - 20px);
    margin-left: 20px;
    padding: 1.25rem;
  }

  &::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background: var(--main-color);
    border-radius: 50%;
    top: 50%;
    ${props => props.isEven ? 'right: -48px' : 'left: -48px'};
    transform: translateY(-50%);
    border: 3px solid #1e293b;
    z-index: 1;

    @media (max-width: 768px) {
      left: -30px;
      width: 12px;
      height: 12px;
    }
  }
`;

const DegreeTitle = styled.h3`
  font-size: 1.25rem;
  color: #fff;
  margin-bottom: 0.5rem;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Institution = styled.h4`
  font-size: 1rem;
  color: var(--main-color);
  margin-bottom: 1.25rem;
  word-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.75rem;
  margin-top: 1.25rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  font-size: 0.85rem;
  overflow: hidden;

  svg {
    color: var(--main-color);
    flex-shrink: 0;
  }
`;

const StatusBadge = styled.span`
  position: absolute;
  top: -12px;
  right: 20px;
  background: linear-gradient(135deg, var(--main-color), var(--main-color));
  color: black; 
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.75rem;
    top: -10px;
    right: 10px;
  }
`;

const Education = () => {
  const educationData = [
    {
      degree: "Full-Stack Web Development",
      institution: "Masai School",
      location: " Bengaluru, India",
      duration: "02/2025 - 08/2025",
      details: [
        "Core Computer Science fundamentals",
        "Advanced Mathematics and Physics",
        "Software Development Principles",
        "Data Structures and Algorithms"
      ]
    },
    {
      degree: "BSc Computer Science (MPCs)",
      institution: "Rao's Degree College",
      location: "Kurnool, AP",
      duration: "12/2021 - 07/2024",
      details: [
        "Core Computer Science fundamentals",
        "Advanced Mathematics and Physics",
        "Software Development Principles",
        "Data Structures and Algorithms"
      ]
    },
    {
      degree: "Intermediate (MPC)",
      institution: "Sri Medha Junior College",
      location: "Kurnool, AP",
      duration: "06/2019 - 03/2021",
      details: [
        "Mathematics, Physics, and Chemistry",
        "Strong foundation in sciences",
        "Analytical problem-solving skills",
        "Academic excellence"
      ]
    },
    {
      degree: "Secondary School Certificate",
      institution: "Govt High School",
      location: "Burrandoddi, AP",
      duration: "05/2018 - 03/2019",
      details: [
        "Comprehensive general education",
        "Foundation for higher studies",
        "Critical thinking development",
        "Academic achievements"
      ]
    }
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  // Reverse slide for right-side items
  const itemVariantsRight = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Section id="education">
      <Container>
        <Title
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Educational Background
        </Title>
        <Timeline>
          {educationData.map((edu, index) => (
            <TimelineItem
              key={index}
              isEven={index % 2 === 0}
              index={index}
              variants={index % 2 === 0 ? itemVariants : itemVariantsRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card isEven={index % 2 === 0}>
                {edu.current && <StatusBadge>Current</StatusBadge>}
                <DegreeTitle>{edu.degree}</DegreeTitle>
                <Institution>{edu.institution}</Institution>
                <InfoGrid>
                  <InfoItem>
                    <FaMapMarkerAlt />
                    <span>{edu.location}</span>
                  </InfoItem>
                  <InfoItem>
                    <FaCalendarAlt />
                    <span>{edu.duration}</span>
                  </InfoItem>
                </InfoGrid>
              </Card>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Section>
  );
};

export default Education;

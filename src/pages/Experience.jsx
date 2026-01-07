import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCertificate,
  FaCheckCircle,
} from "react-icons/fa";

const ExperienceSection = styled.section`
  padding: 10rem 9% 2rem;
  min-height: auto;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem 1rem;
    min-height: auto;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  @media (max-width: 768px) {
    padding: 0 0.5rem;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  color: var(--main-color);
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 2rem; 
  margin-top: 0; 
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--main-color), transparent);
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.2rem;
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const ExperienceCard = styled(motion.div)`
  background: #0b1120;
  border-radius: 16px;
  padding: 2.5rem;
  min-height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid rgba(124, 240, 61, 0.1);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 0 20px rgba(124, 240, 61, 0.3), inset 0 0 0 1px var(--main-color);
  }

  @media (max-width: 768px) {
    padding: 1.1rem;
    border-radius: 10px;
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.6rem;
  }
`;

const CompanyInfo = styled.div`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Company = styled.h3`
  color: var(--main-color);
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 0.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Position = styled.h4`
  color: #fff;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Timeline = styled.div`
  display: flex;
  align-items: center;
  color: #8892b0;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const Description = styled.p`
  color: #a8b2d1;
  line-height: 1.6;
  font-size: 1.1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 0.88rem;
  }
`;

const AchievementList = styled.ul`
  list-style: none;
  padding: 0;
`;

const AchievementItem = styled.li`
  display: flex;
  align-items: center;
  color: #a8b2d1;
  margin-bottom: 0.6rem;
  font-size: 1rem;

  svg {
    color: var(--main-color);
    margin-right: 0.5rem;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const CertificateLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: var(--main-color);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 1.1rem;

  svg {
    margin-right: 0.4rem;
  }

  &:hover {
    color: #fff;
    transform: scale(1.05);
  }
`;

const experiences = [
  {
    company: "Masai",
    position: "Masai Hackathon Edition",
    period: "48 Hours",
    current: false,
    description:
      "Developed responsive user interfaces and interactive features for MemeHub, enabling users to create, browse, and engage with memes.",
    achievements: [
      "Developed MemesHub web app for meme creation, browsing, and sharing using HTML, CSS, and JavaScript.",
      "Implemented likes, comments, and trending features to boost user engagement.",
      "Ensured responsive design and seamless UX across all devices.",
    ],
    certification:
      "https://res.cloudinary.com/dumhixyxy/image/upload/Hack_fi28k6",
  },
  {
    company: "Python FullStack",
    position: "Python Developer",
    period: "Jul 2024 - Dec 2024",
    current: false,
    description:
      "Built and deployed full-stack web apps using Python, Django/Flask, and modern front-end technologies.",
    achievements: [
      "Completed Python Full-Stack Development with REST APIs and authentication.",
      "Developed CRUD-based responsive applications with secure login systems.",
      "Deployed projects using CI/CD pipelines and optimized database performance.",
    ],
    certification:
      "https://drive.google.com/file/d/1ZvrSxEuSU_tJuriCivXk3CdOCpXHEda-/view?usp=sharing",
  },
];

const Experience = () => {

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <ExperienceSection id="experience">
      <Container>
        <SectionTitle
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Certificates
        </SectionTitle>
        <ExperienceGrid>
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <CompanyHeader>
                <CompanyInfo>
                  <Company>
                    <FaBriefcase />
                    {exp.company}
                  </Company>
                  <Position>{exp.position}</Position>
                </CompanyInfo>
                {exp.certification && (
                  <CertificateLink
                    href={exp.certification}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaCertificate />
                    Certificate
                  </CertificateLink>
                )}
              </CompanyHeader>

              <Timeline>
                <FaCalendarAlt style={{ marginRight: "0.4rem" }} />
                {exp.period}
              </Timeline>

              <Description>{exp.description}</Description>

              <AchievementList>
                {exp.achievements.map((achievement, idx) => (
                  <AchievementItem key={idx}>
                    <FaCheckCircle />
                    {achievement}
                  </AchievementItem>
                ))}
              </AchievementList>
            </ExperienceCard>
          ))}
        </ExperienceGrid>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;

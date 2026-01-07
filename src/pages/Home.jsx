import React, { useEffect, useState } from "react";
import { FaArrowRight, FaCode, FaServer, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; 
  background-color: transparent;
  position: relative;
  overflow: hidden;
  padding: 10rem 9% 2rem;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(124, 240, 61, 0.03) 0%,
      transparent 80%
    );
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  gap: 2rem;
  position: relative;
  z-index: 1;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 6rem;
  }
`;

const TextSection = styled.div`
  animation: ${fadeInUp} 1s ease-out;
  padding: 1.5rem;
  max-width: 700px;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const Greeting = styled.div`
  font-size: 1.25rem;
  color: var(--main-color);
  margin-bottom: 1rem;
  font-family: "Fira Code", monospace;
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out forwards;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(45deg, var(--main-color), #ffffff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out 0.2s forwards;
`;

const Subtitle = styled.h2`
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 600;
  color: var(--main-color);
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out 0.4s forwards;
`;

const Description = styled.p`
  font-size: 1.6rem;
  color: #cbd5e1;
  line-height: 1.8;
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out 0.6s forwards;

  strong {
    color: var(--main-color);
    font-weight: 600;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out 0.8s forwards;

  div {
    padding: 0.5rem 1rem;
    background: rgba(124, 240, 61, 0.1);
    border-radius: 9999px;
    color: var(--main-color);
    font-size: 1.2rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      background: rgba(124, 240, 61, 0.2);
    }
  }
`;



const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem; /* ↓ slightly reduced */
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out 1s forwards;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const Button = styled.button`
  padding: 1rem 2.8rem;
  font-weight: 600;
  font-size: 1.3rem;
  color: ${(props) => (props.primary ? "#000000" : "var(--main-color)")};
  background: ${(props) =>
    props.primary ? "var(--main-color)" : "transparent"};
  border: ${(props) => (props.primary ? "2px solid var(--main-color)" : "2px solid var(--main-color)")};
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(124, 240, 61, 0.2);

    &::before {
      transform: translateX(100%);
    }
  }
`;

const SocialMediaContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0;
  animation: ${fadeInUp} 0.5s ease-out 1.2s forwards;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`;

const SocialLink = styled.a`
  display: flex;
  margin-left:20px;
 
  margin-top:20px;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  background: transparent;
  border: 2px solid var(--main-color);
  border-radius: 50%;
  color: var(--main-color);
  font-size: 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: var(--main-color);
    color: #000;
    box-shadow: 0 0 10px var(--main-color);
    transform: translateY(-3px);
  }
`;

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleResumeClick = () => {
    // Assuming resume file might need to be added or linked correctly
    const fileUrl = "/BoyaShiva_Resume.pdf";
    window.open(fileUrl, "_blank");
  };

  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Full Stack Developer & Problem Solver"
  ];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? 100 : 150);
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <HomeContainer id="home">
      <ContentWrapper>
        <TextSection>
          <Greeting>👋 Hello, I'm</Greeting>
          <Title>Boya Shiva</Title>

          <Subtitle>
            <span style={{ color: "var(--main-color)" }}>{text}</span>
            <span style={{ borderLeft: "3px solid var(--main-color)", marginLeft: "5px", animation: "blink 0.7s infinite" }}></span>
          </Subtitle>
          <Description>
            I'm a passionate developer focused on creating{" "}
            <strong>exceptional digital experiences</strong>. Specializing in
            building robust, scalable web applications using modern
            technologies. With expertise in both frontend and backend
            development, I transform complex problems into elegant solutions
            that prioritize <strong>user experience</strong> and{" "}
            <strong>performance</strong>. I am also passionate about{" "}
            <strong>DSA and problem-solving</strong>, constantly honing my
            skills to write efficient algorithms and tackle challenging coding
            problems with creativity and precision.
          </Description>

          <TechStack>
            <div>
              <FaCode />
              Full Stack Developer
            </div>
            <div>
              <FaCode /> Frontend Developer
            </div>
            <div>
              <FaServer /> Backend Developer
            </div>
          </TechStack>

          <ButtonContainer>
            <Button onClick={handleResumeClick} primary>
              View & Download Resume <FaArrowRight />
            </Button>
            <Button as="a" href="#services">
              Explore Projects
            </Button>
          </ButtonContainer>

          <SocialMediaContainer>
            <SocialLink href="https://github.com/ShivaBoya" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/boyashiva" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </SocialLink>
            <SocialLink href="mailto:shivasiddu80@gmail.com">
              <FaEnvelope />
            </SocialLink>
          </SocialMediaContainer>
        </TextSection>

        <div className="home-img">
          <div className="img-box">
            <div className="img-item">
              <img src="/Port.jpg" alt="Boya Shiva" />
            </div>
          </div>
        </div>
      </ContentWrapper>
    </HomeContainer >
  );
};

export default Home;

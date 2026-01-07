import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaCertificate } from "react-icons/fa";

const projectCategories = {
  fullStack: [
    {
      name: "Hospital Food Delivery Management System",
      deployedLink:
        "https://hospital-food-management-nrajus-projects.vercel.app/",
      githubLink: "https://github.com/ShivaBoya/HospitalFood",
      image:
        "https://img.freepik.com/premium-photo/nurse-medical-coat-is-holding-tray-with-breakfast_179755-5329.jpg?",
      description:
        "A full-stack app for managing hospital meal deliveries, patient diets, and real-time order tracking with role-based dashboards.",
      features: [
        "Role-based dashboards for hospital managers, pantry staff, and delivery personnel",
        "Real-time meal tracking with WebSocket integration",
        "Secure authentication with JWT",
        "Admin panel for meal and order management",
      ],
      technologies: [
        "React JS",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "WebSocket",
      ],
    },
    {
      name: "Roamly –AI Powered Outing Planner & Real-Time Collaboration App",
      deployedLink:
        "https://out-my-plannigs.vercel.app/",
      githubLink: "https://github.com/ShivaBoya/OutPlannigs",
      image:
        "Romly.png",
      description:
        "AI-powered group outing planner with real-time collaboration and smart itineraries.",
      features: [
        "AI-powered group outing planner with real-time collaboration and smart event tools.",
        "Designed a modern event dashboard with live chat, polls, and itinerary planning.",
        "Implemented Socket.IO messaging & AI suggestions for seamless group coordination.",
        " Built a full-stack scalable social platform with a premium UI/UX experience.",
      ],
      technologies: [
        "React JS",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Socket.IO",
        "Tailwind Css",
      ],
    },
    {
      name: "Nxt Trendz (E-Commerce Clone)",
      deployedLink: "https://nxttrendzrts.ccbp.tech/",
      githubLink: "https://github.com/ShivaBoya/Nxt_TrendeZ_Website",
      image:
        "https://th.bing.com/th/id/R.82ba779360b50f5c461e8592fb7473d1?rik=RcI3k0vhEbR%2fpg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fe-commerce-png-sell-your-products-and-services-online-1000.png&ehk=LZ2GD%2fGQ98UUOsXo6cKf4wz84A1wac5zM6LprYBb79A%3d&risl=&pid=ImgRaw&r=0",
      description:
        "A secure, modern e-commerce platform inspired by Amazon and Flipkart with JWT authentication and dynamic product APIs.",
      features: [
        "JWT authentication for secure sessions",
        "Dynamic product data via REST API",
        "Responsive design for all devices",
        "Product search, filtering, and sorting",
      ],
      technologies: ["React JS", "Node.js", "Express", "MongoDB", "JWT"],
      credentials: { username: "raja", password: "raja@2021" },
    },
    {
      name: "ResumeBuilder Application",
      deployedLink: "https://resume-builder-krvx.vercel.app/",
      githubLink: "https://github.com/ShivaBoya/ResumeBuilder",
      image:
        "https://img.freepik.com/premium-vector/job-profile-logo-resume-logo-template_658057-20.jpg",
      description:
        "A full-stack app that allows users to create, manage, and download resumes as PDFs with Razorpay integration for premium features.",
      features: [
        "Create, update, and download resumes as PDF",
        "Send resumes via email",
        "Responsive resume editor",
        "Razorpay payment integration",
      ],
      technologies: [
        "React JS",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Razorpay",
        "Tailwind CSS",
      ],
    },
    {
      name: "StudyGenie AI-Powered Study Companion",
      deployedLink: "https://study-genie-ai-shiva-project.vercel.app/",
      githubLink: "https://github.com/ShivaBoya/StudyGenie-AI",
      image:
        "https://framerusercontent.com/images/RNiieHXgiDKjsvl6fDhNyKzvQE.png?width=1456&height=816",
      description:
        "An AI-powered Vite + React study companion offering personalized learning tools, flashcards, and quizzes with Razorpay integration.",
      features: [
        "AI-generated study plans, quizzes, and flashcards",
        "Razorpay for premium feature payments",
        "Modular and scalable component design",
        "Mobile-friendly UI/UX",
      ],
      technologies: [
        "React JS",
        "Node.js",
        "Express",
        "MongoDB",
        "JWT",
        "Razorpay",
        "Tailwind CSS",
        "AI",
      ],
    },
  ],
  frontend: [
    {
      name: "MemesHub",
      deployedLink: "https://memeshub-project.netlify.app/",
      githubLink: "https://github.com/ShivaBoya/MemesHub",
      image:
        "https://wallpapers.com/images/hd/hacker-with-fawkes-mask-3d-vj9n88v8vk2l1gcx.jpg",
      description:
        "A feature-rich meme sharing platform with interactive features for likes, comments, and trending content.",
      features: [
        "Create, upload, and share memes",
        "Like and comment system",
        "Responsive meme editor",
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      certificate: {
        link: "https://res.cloudinary.com/dumhixyxy/image/upload/Hack_fi28k6",
        label: "Certificate",
        icon: <FaCertificate />,
      },
    },
    {
      name: "SoulConnect — AI-Powered Dating App",
      deployedLink: "https://match-me-self.vercel.app/",
      githubLink: "https://github.com/ShivaBoya/MatchMe",
      image:
        "Matchme.png",
      description:
        "An AI-powered social platform enabling smart profile matching, real-time chat with AI assistance, and secure Firebase authentication.",
      features: [
        "AI-driven profile matching for smarter and meaningful connections",
        "Real-time chat with a built-in AI assistant for conversations & suggestions.",
        "Secure Firebase authentication with Google Sign-In & full profile syncing",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React Js", "Tailwind CSS", "Firebase"],
      // certificate: {
      //   link: "https://res.cloudinary.com/dumhixyxy/image/upload/Hack_fi28k6",
      //   label: "Certificate",
      //   icon: <FaCertificate />,
      // },
    },
    {
      name: "Meals Explorer Website",
      deployedLink: "https://meals-explorer-web.vercel.app/",
      githubLink: "https://github.com/ShivaBoya/MealsExplorer",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/62/South_Indian_non-veg_Meals.jpg",
      description:
        "An app for exploring meals with search, filter, and sorting options powered by TheMealDB API.",
      features: [
        "Search meals by name or ingredient",
        "Filter and sort by category",
        "Paginated browsing",
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "Movie Explorer Website",
      deployedLink: "https://movie-explorer-two-beta.vercel.app/",
      githubLink:
        "https://github.com/ShivaBoya/RevisionUnit/tree/main/sprint1/Contest/MovieExplorer",
      image:
        "https://i.ytimg.com/vi/n5Qh7vSReiM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDumlQPZ6cai1t1s4mhCZX8qWd5_g",
      description:
        "A React-based movie discovery app with search, filters, and pagination for browsing films efficiently.",
      features: [],
      technologies: ["React", "Tailwind CSS", "JavaScript"],
    },
  ],
  backend: [],
};

const Container = styled.section`
  padding: 10rem 9% 2rem;
  background: transparent;
  min-height: auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  color: var(--main-color);
  margin: 1rem 0 3rem 0; 
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, transparent, var(--main-color), transparent);
  }
`;

const ProjectNavigation = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const NavButton = styled.button`
  background: ${(props) =>
    props.$active ? "rgba(124, 240, 61, 0.1)" : "transparent"};
  color: var(--main-color);
  border: 1px solid rgba(124, 240, 61, 0.3);
  padding: 0.5rem 1rem;
  border-radius: 99px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(124, 240, 61, 0.2);
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.article)`
  background: #0b1120;
  border-radius: 0.8rem;
  overflow: hidden;
  border: 1px solid rgba(124, 240, 61, 0.1);
  transition: all 0.4s ease-in-out;
  height: 420px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    border-color: var(--main-color);
    box-shadow: 0 8px 25px -12px rgba(124, 240, 61, 0.2);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 150px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  ${ProjectCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: #e6f1ff;
  margin-bottom: 0.5rem;
  flex-shrink: 0;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  font-size: 1.1rem;
  line-height: 1.4;
  margin-bottom: 0.8rem;
  flex-grow: 1;
  overflow-y: auto;
  max-height: 100px;

  /* Custom scrollbar for description */
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #1e293b; 
    border-radius: 4px;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 0.8rem;
  flex-shrink: 0;
`;

const TechTag = styled.span`
  background: rgba(124, 240, 61, 0.1);
  color: var(--main-color);
  padding: 0.4rem 0.8rem;
  border-radius: 99px;
  font-size: 0.9rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
  flex-shrink: 0;
`;

const LinkButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  border-radius: 99px;
  font-size: 1rem;
  text-decoration: none;
  background: ${(props) =>
    props.$primary ? "rgba(124, 240, 61, 0.1)" : "transparent"};
  color: var(--main-color);
  border: 1px solid rgba(124, 240, 61, 0.3);
  transition: all 0.3s ease;

  svg {
    font-size: 1rem;
  }

  &:hover {
    background: transparent;
    color: var(--main-color);
    box-shadow: 0 0 1rem var(--main-color);
  }
`;

const Credentials = styled.div`
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: rgba(124, 240, 61, 0.05);
  border-radius: 0.5rem;
  font-size: 0.9rem;
  flex-shrink: 0;

  p {
    color: #8892b0;
    margin: 0;

    span {
      color: var(--main-color);
      font-weight: 500;
    }
  }
`;

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("fullStack");

  const renderProjects = (category) => {
    const categoryProjects = projectCategories[category] || [];
    return (
      <ProjectsGrid layout>
        <AnimatePresence>
          {categoryProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <ProjectImage>
                <img src={project.image} alt={project.name} />
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.name}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <TechStack>
                  {project.technologies.map((tech, i) => (
                    <TechTag key={i}>{tech}</TechTag>
                  ))}
                </TechStack>

                {project.credentials && (
                  <Credentials>
                    <p>
                      Demo Credentials: <br />
                      <span>Username:</span> {project.credentials.username} <br />
                      <span>Password:</span> {project.credentials.password}
                    </p>
                  </Credentials>
                )}

                <ProjectLinks>
                  <LinkButton
                    href={project.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    $primary
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </LinkButton>
                  <LinkButton
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub /> Code
                  </LinkButton>
                  {project.certificate && (
                    <LinkButton
                      href={project.certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.certificate.icon} {project.certificate.label}
                    </LinkButton>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </AnimatePresence>
      </ProjectsGrid>
    );
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <Container id="project">
      <SectionTitle
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Featured Projects
      </SectionTitle>
      <ProjectNavigation
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <NavButton
          $active={activeCategory === "fullStack"}
          onClick={() => setActiveCategory("fullStack")}
        >
          Full Stack
        </NavButton>
        <NavButton
          $active={activeCategory === "frontend"}
          onClick={() => setActiveCategory("frontend")}
        >
          Frontend
        </NavButton>
        <NavButton
          $active={activeCategory === "backend"}
          onClick={() => setActiveCategory("backend")}
        >
          Backend
        </NavButton>
      </ProjectNavigation>
      {renderProjects(activeCategory)}
    </Container>
  );
};

export default Projects;

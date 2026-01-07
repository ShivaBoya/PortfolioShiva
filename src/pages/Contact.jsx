import React, { useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

/* ================= Section ================= */

const Section = styled.section`
  padding: 6rem 9% 4rem;   /* ✅ FIXED: proper bottom padding */
  background: transparent;
  color: white;
  margin: 0;
`;

/* ================= Title ================= */

const SectionTitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--main-color);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(
      90deg,
      transparent,
      var(--main-color),
      transparent
    );
  }
`;

/* ================= Layout ================= */

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

/* ================= Boxes ================= */

const FormBox = styled(motion.div)`
  background-color: #0b1120;
  padding: 2.5rem;
  border-radius: 1rem;
  border: 2px solid #374151;
  box-shadow: 0 0 15px rgba(124, 240, 61, 0.1);
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(124, 240, 61, 0.3);
    border-color: var(--main-color);
  }
`;

const InfoBox = styled(motion.div)`
  background-color: #0b1120;
  padding: 2.5rem;
  border-radius: 1rem;
  border: 1px solid #374151;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(124, 240, 61, 0.3),
      inset 0 0 0 1px var(--main-color);
    border-color: var(--main-color);
  }
`;

/* ================= Headings ================= */

const BoxTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
`;

const InfoTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: var(--main-color);
  margin-bottom: 2rem;
`;

/* ================= Form ================= */

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid #4b5563;
  color: white;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: var(--main-color);
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid #4b5563;
  color: white;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  outline: none;

  &:focus {
    border-color: var(--main-color);
  }
`;

const Button = styled.button`
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--main-color);
  color: #000;
  font-weight: 700;
  cursor: pointer;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  font-size: 1.1rem;
  transition: 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 15px rgba(124, 240, 61, 0.5);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

/* ================= Info Details ================= */

const Detail = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;

  svg {
    font-size: 1.4rem;
    color: var(--main-color);
  }

  a {
    color: #e5e7eb;
    text-decoration: none;
    font-size: 1.3rem;
    transition: 0.3s;

    &:hover {
      color: var(--main-color);
    }
  }
`;

/* ================= Component ================= */

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.sendForm(
        "service_w5dpy34",
        "template_nhtph3j",
        formRef.current,
        "MX9SA7rk-Puvdk0mS"
      );

      toast.success("Message sent successfully!");
      formRef.current.reset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2 }
    }
  };

  const infoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: 0.2 }
    }
  };

  return (
    <Section id="contact">
      <SectionTitle
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Contact Me
      </SectionTitle>

      <Container>
        {/* Left - Form */}
        <FormBox
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <BoxTitle>Send Message</BoxTitle>

          <Form ref={formRef} onSubmit={sendEmail}>
            <Input name="user_name" placeholder="Your Name" required />
            <Input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
            <TextArea name="message" placeholder="Your Message" required />

            <Button type="submit" disabled={isSending}>
              <FaPaperPlane />
              {isSending ? "Sending..." : "Send Message"}
            </Button>
          </Form>
        </FormBox>

        {/* Right - Info */}
        <InfoBox
          variants={infoVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <InfoTitle>Get in Touch</InfoTitle>

          <Detail>
            <FaEnvelope />
            <a href="mailto:shivasiddu80@gmail.com">
              shivasiddu80@gmail.com
            </a>
          </Detail>

          <Detail>
            <FaLinkedin />
            <a
              href="https://www.linkedin.com/in/boyashiva"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </Detail>

          <Detail>
            <FaGithub />
            <a
              href="https://github.com/ShivaBoya"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </Detail>
        </InfoBox>
      </Container>

      <ToastContainer position="bottom-right" autoClose={3000} theme="dark" />
    </Section>
  );
};

export default Contact;

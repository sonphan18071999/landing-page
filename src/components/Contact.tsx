import React, { useState } from 'react';
import { Box, Container, Heading, Text, Input, Textarea, Button, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { motion, useScroll, useTransform } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionInput = motion(Input);
const MotionTextarea = motion(Textarea);
const MotionButton = motion(Button);

interface EmailJSResponse {
  text: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const y = useTransform(scrollYProgress, [0.7, 0.8], [50, 0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Replace with your EmailJS template ID, service ID, and public key
    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result: EmailJSResponse) => {
          console.log('Email sent successfully:', result.text);
          setFormData({ name: '', email: '', message: '' });
          setIsSubmitting(false);
          setIsSubmitted(true);
          
          // Reset submitted state after 5 seconds
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
        },
        (error: EmailJSResponse) => {
          console.error('Error sending email:', error.text);
          setIsSubmitting(false);
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <MotionBox 
      py={20} 
      bg="gray.50"
      style={{ opacity, y }}
    >
      <Container maxW="7xl">
        <MotionFlex 
          direction="column" 
          align="center" 
          textAlign="center" 
          gap={8} 
          mb={12}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <MotionHeading 
            size="xl"
            variants={itemVariants}
            bgGradient="linear(to-r, blue.400, teal.400)"
            bgClip="text"
          >
            {t('contactTitle')}
          </MotionHeading>
          <MotionText 
            color="gray.600" 
            fontSize="lg" 
            maxW="2xl"
            variants={itemVariants}
          >
            {t('contactSubtitle')}
          </MotionText>
        </MotionFlex>
        <MotionBox
          as="form"
          onSubmit={handleSubmit}
          bg="white"
          p={8}
          rounded="lg"
          shadow="md"
          maxW="2xl"
          mx="auto"
          variants={formVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          whileHover={{ boxShadow: "xl" }}
        >
          <MotionFlex 
            direction="column" 
            gap={6}
          >
            <MotionFlex 
              direction="column" 
              gap={2}
              variants={inputVariants}
            >
              <MotionText 
                fontWeight="medium"
                variants={inputVariants}
              >
                {t('name')}
              </MotionText>
              <MotionInput
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variants={inputVariants}
                whileFocus={{ scale: 1.01, borderColor: "blue.400" }}
              />
            </MotionFlex>
            <MotionFlex 
              direction="column" 
              gap={2}
              variants={inputVariants}
            >
              <MotionText 
                fontWeight="medium"
                variants={inputVariants}
              >
                {t('email')}
              </MotionText>
              <MotionInput
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                variants={inputVariants}
                whileFocus={{ scale: 1.01, borderColor: "blue.400" }}
              />
            </MotionFlex>
            <MotionFlex 
              direction="column" 
              gap={2}
              variants={inputVariants}
            >
              <MotionText 
                fontWeight="medium"
                variants={inputVariants}
              >
                {t('message')}
              </MotionText>
              <MotionTextarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                minH="150px"
                variants={inputVariants}
                whileFocus={{ scale: 1.01, borderColor: "blue.400" }}
              />
            </MotionFlex>
            <MotionButton 
              type="submit" 
              colorScheme="blue"
              isLoading={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={inputVariants}
              animate={
                isSubmitted 
                  ? { 
                      scale: [1, 1.1, 1],
                      backgroundColor: ["#3182CE", "#38A169", "#3182CE"],
                      transition: { duration: 0.5 }
                    } 
                  : {}
              }
            >
              {isSubmitted ? "✓ " + t('messageSent') : t('sendMessage')}
            </MotionButton>
          </MotionFlex>
        </MotionBox>
      </Container>
    </MotionBox>
  );
};

export default Contact; 
import React, { useEffect } from 'react';
import { Box, Container, Heading, Text, Button, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionButton = motion(Button);

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const y = useTransform(scrollY, [0, 300], [0, -100]);

  // Variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <MotionBox 
      bg="gray.50" 
      pt={20} 
      position="relative"
      overflow="hidden"
    >
      {/* Background animated elements */}
      <MotionBox
        position="absolute"
        top="20%"
        left="10%"
        w="300px"
        h="300px"
        borderRadius="full"
        bgGradient="linear(to-r, blue.200, purple.200)"
        filter="blur(60px)"
        opacity={0.4}
        animate={{
          x: [0, 30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <MotionBox
        position="absolute"
        bottom="10%"
        right="15%"
        w="250px"
        h="250px"
        borderRadius="full"
        bgGradient="linear(to-l, teal.100, blue.200)"
        filter="blur(70px)"
        opacity={0.3}
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <Container maxW="7xl" position="relative">
        <MotionFlex
          direction="column"
          align="center"
          textAlign="center"
          py={{ base: 20, md: 36 }}
          gap={8}
          style={{ opacity, y }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <MotionHeading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight="110%"
            variants={itemVariants}
            bgGradient="linear(to-r, blue.400, teal.400)"
            bgClip="text"
          >
            {t('welcome')}
          </MotionHeading>
          
          <MotionText 
            color="gray.700" 
            fontSize="xl" 
            maxW="2xl"
            variants={itemVariants}
          >
            {t('heroSubtitle')}
          </MotionText>
          
          <MotionFlex gap={4} variants={itemVariants}>
            <MotionButton 
              colorScheme="blue" 
              size="lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('getStarted')}
            </MotionButton>
            <MotionButton 
              variant="outline" 
              size="lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('learnMore')}
            </MotionButton>
          </MotionFlex>
        </MotionFlex>
      </Container>
    </MotionBox>
  );
};

export default Hero; 
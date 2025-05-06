import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionSimpleGrid = motion(SimpleGrid);

const About: React.FC = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.2], [50, 0]);

  const features = [
    {
      title: t('feature1Title'),
      description: t('feature1Description'),
    },
    {
      title: t('feature2Title'),
      description: t('feature2Description'),
    },
    {
      title: t('feature3Title'),
      description: t('feature3Description'),
    },
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    })
  };

  return (
    <MotionBox 
      py={20}
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
            {t('aboutTitle')}
          </MotionHeading>
          <MotionText 
            color="gray.600" 
            fontSize="lg" 
            maxW="2xl"
            variants={itemVariants}
          >
            {t('aboutSubtitle')}
          </MotionText>
        </MotionFlex>
        <MotionSimpleGrid 
          columns={{ base: 1, md: 3 }} 
          gap={10}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <MotionFlex
              key={index}
              direction="column"
              align="center"
              textAlign="center"
              p={6}
              bg="white"
              rounded="lg"
              shadow="md"
              custom={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "xl", 
                transition: { duration: 0.2 } 
              }}
            >
              <MotionHeading 
                size="md" 
                mb={4}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  damping: 12
                }}
              >
                {feature.title}
              </MotionHeading>
              <MotionText 
                color="gray.600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                {feature.description}
              </MotionText>
            </MotionFlex>
          ))}
        </MotionSimpleGrid>
      </Container>
    </MotionBox>
  );
};

export default About; 
import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  IconButton,
  Avatar,
  HStack
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@chakra-ui/icons';
import { motion, useScroll, useTransform } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionAvatar = motion(Avatar);
const MotionIconButton = motion(IconButton);

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState(0);
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.5, 0.6], [0.8, 1]);

  const testimonials = [
    {
      id: 1,
      name: t('testimonial1Name'),
      role: t('testimonial1Role'),
      content: t('testimonial1Content'),
      avatar: t('testimonial1Avatar'),
      rating: 5,
    },
    {
      id: 2,
      name: t('testimonial2Name'),
      role: t('testimonial2Role'),
      content: t('testimonial2Content'),
      avatar: t('testimonial2Avatar'),
      rating: 4,
    },
    {
      id: 3,
      name: t('testimonial3Name'),
      role: t('testimonial3Role'),
      content: t('testimonial3Content'),
      avatar: t('testimonial3Avatar'),
      rating: 5,
    },
  ];

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }, 300);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 300);
  };

  // Reset animation flag after transition
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5)
      .fill('')
      .map((_, i) => (
        <MotionBox
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            delay: i * 0.1, 
            type: "spring",
            stiffness: 200,
          }}
        >
          <StarIcon
            color={i < rating ? 'yellow.400' : 'gray.300'}
            boxSize={4}
          />
        </MotionBox>
      ));
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.3,
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  const slideAnimation = {
    x: direction > 0 ? [-100, 0] : [100, 0],
    opacity: [0, 1],
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.3 }
    }
  };

  return (
    <MotionBox 
      py={20} 
      bg="gray.50" 
      id="testimonials"
      style={{ opacity, scale }}
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
          viewport={{ once: true, amount: 0.3 }}
        >
          <MotionHeading 
            size="xl"
            bgGradient="linear(to-r, blue.400, teal.400)"
            bgClip="text"
            variants={cardVariants}
          >
            {t('testimonialsTitle')}
          </MotionHeading>
          <MotionText 
            color="gray.600" 
            fontSize="lg" 
            maxW="2xl"
            variants={cardVariants}
          >
            {t('testimonialsSubtitle')}
          </MotionText>
        </MotionFlex>
        
        <MotionFlex 
          direction="column" 
          maxW="3xl" 
          mx="auto" 
          position="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Box position="relative" width="100%" overflow="hidden">
            <MotionFlex
              key={currentIndex}
              direction="column"
              bg="white"
              p={8}
              rounded="xl"
              shadow="lg"
              align="center"
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
              }}
            >
              <MotionAvatar 
                size="xl" 
                name={testimonials[currentIndex].name} 
                src={testimonials[currentIndex].avatar} 
                mb={6}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
              />
              
              <HStack spacing={1} mb={6}>
                {renderStars(testimonials[currentIndex].rating)}
              </HStack>
              
              <MotionText 
                fontSize="lg" 
                fontStyle="italic" 
                mb={6} 
                textAlign="center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                "{testimonials[currentIndex].content}"
              </MotionText>
              
              <MotionFlex 
                direction="column"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Text fontWeight="bold" fontSize="lg">{testimonials[currentIndex].name}</Text>
                <Text color="gray.500">{testimonials[currentIndex].role}</Text>
              </MotionFlex>
            </MotionFlex>
          </Box>
          
          <Flex justify="space-between" width="100%" position="absolute" top="50%" transform="translateY(-50%)" zIndex={1}>
            <MotionIconButton
              aria-label="Previous testimonial"
              icon={<ChevronLeftIcon boxSize={8} />}
              onClick={handlePrevious}
              variant="ghost"
              colorScheme="blue"
              size="lg"
              ml={-4}
              whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.8)" }}
              whileTap={{ scale: 0.9 }}
              isDisabled={isAnimating}
            />
            <MotionIconButton
              aria-label="Next testimonial"
              icon={<ChevronRightIcon boxSize={8} />}
              onClick={handleNext}
              variant="ghost"
              colorScheme="blue"
              size="lg"
              mr={-4}
              whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.8)" }}
              whileTap={{ scale: 0.9 }}
              isDisabled={isAnimating}
            />
          </Flex>
          
          <HStack spacing={2} justify="center" mt={6}>
            {testimonials.map((_, index) => (
              <MotionBox
                key={index}
                h="3px"
                w={index === currentIndex ? '24px' : '12px'}
                bg={index === currentIndex ? 'blue.500' : 'gray.300'}
                borderRadius="full"
                cursor="pointer"
                onClick={() => !isAnimating && setCurrentIndex(index)}
                whileHover={{ scale: 1.5 }}
                animate={index === currentIndex ? { scale: [1, 1.2, 1] } : {}}
                transition={{
                  duration: 0.5,
                  repeat: index === currentIndex ? Infinity : 0,
                  repeatType: "reverse"
                }}
              />
            ))}
          </HStack>
        </MotionFlex>
      </Container>
    </MotionBox>
  );
};

export default Testimonials; 
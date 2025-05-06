import React, { useState } from 'react';
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

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

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
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array(5)
      .fill('')
      .map((_, i) => (
        <StarIcon
          key={i}
          color={i < rating ? 'yellow.400' : 'gray.300'}
          boxSize={4}
        />
      ));
  };

  return (
    <Box py={20} bg="gray.50" id="testimonials">
      <Container maxW="7xl">
        <Flex direction="column" align="center" textAlign="center" gap={8} mb={12}>
          <Heading size="xl">{t('testimonialsTitle')}</Heading>
          <Text color="gray.600" fontSize="lg" maxW="2xl">
            {t('testimonialsSubtitle')}
          </Text>
        </Flex>
        
        <Flex 
          direction="column" 
          maxW="3xl" 
          mx="auto" 
          position="relative"
        >
          <Flex
            direction="column"
            bg="white"
            p={8}
            rounded="xl"
            shadow="lg"
            align="center"
            transition="all 0.3s"
          >
            <Avatar 
              size="xl" 
              name={testimonials[currentIndex].name} 
              src={testimonials[currentIndex].avatar} 
              mb={6}
            />
            
            <HStack spacing={1} mb={6}>
              {renderStars(testimonials[currentIndex].rating)}
            </HStack>
            
            <Text fontSize="lg" fontStyle="italic" mb={6} textAlign="center">
              "{testimonials[currentIndex].content}"
            </Text>
            
            <Flex direction="column">
              <Text fontWeight="bold" fontSize="lg">{testimonials[currentIndex].name}</Text>
              <Text color="gray.500">{testimonials[currentIndex].role}</Text>
            </Flex>
          </Flex>
          
          <Flex justify="space-between" width="100%" position="absolute" top="50%" transform="translateY(-50%)">
            <IconButton
              aria-label="Previous testimonial"
              icon={<ChevronLeftIcon boxSize={8} />}
              onClick={handlePrevious}
              variant="ghost"
              colorScheme="blue"
              size="lg"
              ml={-4}
            />
            <IconButton
              aria-label="Next testimonial"
              icon={<ChevronRightIcon boxSize={8} />}
              onClick={handleNext}
              variant="ghost"
              colorScheme="blue"
              size="lg"
              mr={-4}
            />
          </Flex>
          
          <HStack spacing={2} justify="center" mt={6}>
            {testimonials.map((_, index) => (
              <Box
                key={index}
                h="3px"
                w={index === currentIndex ? '24px' : '12px'}
                bg={index === currentIndex ? 'blue.500' : 'gray.300'}
                borderRadius="full"
                transition="all 0.3s"
                cursor="pointer"
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Testimonials; 
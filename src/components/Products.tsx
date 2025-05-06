import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Image, Button, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { motion, useScroll, useTransform } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionFlex = motion(Flex);
const MotionSimpleGrid = motion(SimpleGrid);
const MotionImage = motion(Image);
const MotionButton = motion(Button);

const Products: React.FC = () => {
  const { t } = useTranslation();
  const { scrollYProgress } = useScroll();
  
  const opacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const y = useTransform(scrollYProgress, [0.3, 0.4], [50, 0]);

  const products = [
    {
      id: 1,
      name: t('product1Name'),
      description: t('product1Description'),
      image: '/images/product1.jpg',
      price: '$99.99',
    },
    {
      id: 2,
      name: t('product2Name'),
      description: t('product2Description'),
      image: '/images/product2.jpg',
      price: '$149.99',
    },
    {
      id: 3,
      name: t('product3Name'),
      description: t('product3Description'),
      image: '/images/product3.jpg',
      price: '$199.99',
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
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    })
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
            {t('productsTitle')}
          </MotionHeading>
          <MotionText 
            color="gray.600" 
            fontSize="lg" 
            maxW="2xl"
            variants={itemVariants}
          >
            {t('productsSubtitle')}
          </MotionText>
        </MotionFlex>
        <MotionSimpleGrid 
          columns={{ base: 1, md: 3 }} 
          gap={8}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {products.map((product, index) => (
            <MotionFlex
              key={product.id}
              direction="column"
              bg="white"
              rounded="lg"
              overflow="hidden"
              shadow="md"
              custom={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                boxShadow: "xl",
                transition: { duration: 0.2 } 
              }}
            >
              <MotionImage
                src={product.image}
                alt={product.name}
                height="200px"
                objectFit="cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.2 + index * 0.1,
                  duration: 0.5 
                }}
              />
              <MotionFlex 
                direction="column" 
                p={6} 
                gap={4}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <MotionHeading 
                  size="md"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.4 + index * 0.1,
                    type: "spring",
                    damping: 12 
                  }}
                >
                  {product.name}
                </MotionHeading>
                <MotionText 
                  color="gray.600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {product.description}
                </MotionText>
                <MotionText 
                  fontWeight="bold" 
                  fontSize="xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    delay: 0.6 + index * 0.1,
                    type: "spring",
                    damping: 12 
                  }}
                >
                  {product.price}
                </MotionText>
                <MotionButton 
                  colorScheme="blue"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    delay: 0.7 + index * 0.1,
                    type: "spring",
                    damping: 12 
                  }}
                >
                  {t('addToCart')}
                </MotionButton>
              </MotionFlex>
            </MotionFlex>
          ))}
        </MotionSimpleGrid>
      </Container>
    </MotionBox>
  );
};

export default Products; 
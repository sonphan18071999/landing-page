import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Image, Button, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Products: React.FC = () => {
  const { t } = useTranslation();

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

  return (
    <Box py={20} bg="gray.50">
      <Container maxW="7xl">
        <Flex direction="column" align="center" textAlign="center" gap={8} mb={12}>
          <Heading size="xl">{t('productsTitle')}</Heading>
          <Text color="gray.600" fontSize="lg" maxW="2xl">
            {t('productsSubtitle')}
          </Text>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
          {products.map((product) => (
            <Flex
              key={product.id}
              direction="column"
              bg="white"
              rounded="lg"
              overflow="hidden"
              shadow="md"
            >
              <Image
                src={product.image}
                alt={product.name}
                height="200px"
                objectFit="cover"
              />
              <Flex direction="column" p={6} gap={4}>
                <Heading size="md">{product.name}</Heading>
                <Text color="gray.600">{product.description}</Text>
                <Text fontWeight="bold" fontSize="xl">
                  {product.price}
                </Text>
                <Button colorScheme="blue">{t('addToCart')}</Button>
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Products; 
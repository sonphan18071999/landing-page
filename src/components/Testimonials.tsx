import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      id: 1,
      name: t('testimonial1Name'),
      role: t('testimonial1Role'),
      content: t('testimonial1Content'),
    },
    {
      id: 2,
      name: t('testimonial2Name'),
      role: t('testimonial2Role'),
      content: t('testimonial2Content'),
    },
    {
      id: 3,
      name: t('testimonial3Name'),
      role: t('testimonial3Role'),
      content: t('testimonial3Content'),
    },
  ];

  return (
    <Box py={20}>
      <Container maxW="7xl">
        <Flex direction="column" align="center" textAlign="center" gap={8} mb={12}>
          <Heading size="xl">{t('testimonialsTitle')}</Heading>
          <Text color="gray.600" fontSize="lg" maxW="2xl">
            {t('testimonialsSubtitle')}
          </Text>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
          {testimonials.map((testimonial) => (
            <Flex
              key={testimonial.id}
              direction="column"
              bg="white"
              p={6}
              rounded="lg"
              shadow="md"
            >
              <Text color="gray.600" mb={4}>
                "{testimonial.content}"
              </Text>
              <Flex direction="column">
                <Text fontWeight="bold">{testimonial.name}</Text>
                <Text color="gray.500">{testimonial.role}</Text>
              </Flex>
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Testimonials; 
import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const About: React.FC = () => {
  const { t } = useTranslation();

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

  return (
    <Box py={20}>
      <Container maxW="7xl">
        <Flex direction="column" align="center" textAlign="center" gap={8} mb={12}>
          <Heading size="xl">{t('aboutTitle')}</Heading>
          <Text color="gray.600" fontSize="lg" maxW="2xl">
            {t('aboutSubtitle')}
          </Text>
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 3 }} gap={10}>
          {features.map((feature, index) => (
            <Flex
              key={index}
              direction="column"
              align="center"
              textAlign="center"
              p={6}
              bg="white"
              rounded="lg"
              shadow="md"
            >
              <Heading size="md" mb={4}>
                {feature.title}
              </Heading>
              <Text color="gray.600">{feature.description}</Text>
            </Flex>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default About; 
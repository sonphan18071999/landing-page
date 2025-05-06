import React from 'react';
import { Box, Container, Heading, Text, Button, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box bg="gray.50" pt={20}>
      <Container maxW="7xl">
        <Flex
          direction="column"
          align="center"
          textAlign="center"
          py={{ base: 20, md: 36 }}
          gap={8}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight="110%"
          >
            {t('welcome')}
          </Heading>
          <Text color="gray.700" fontSize="xl" maxW="2xl">
            {t('heroSubtitle')}
          </Text>
          <Flex gap={4}>
            <Button colorScheme="blue" size="lg">
              {t('getStarted')}
            </Button>
            <Button variant="outline" size="lg">
              {t('learnMore')}
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Hero; 
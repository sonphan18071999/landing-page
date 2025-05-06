import React from 'react';
import { Box, Container, Heading, Text, SimpleGrid, Link, Flex, Button } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box bg="gray.900" color="white" py={12}>
      <Container maxW="7xl">
        <SimpleGrid columns={{ base: 1, md: 4 }} gap={8}>
          <Flex direction="column" gap={4}>
            <Heading size="md">{t('company')}</Heading>
            <Link href="/about">{t('about')}</Link>
            <Link href="/careers">{t('careers')}</Link>
            <Link href="/contact">{t('contact')}</Link>
          </Flex>
          <Flex direction="column" gap={4}>
            <Heading size="md">{t('support')}</Heading>
            <Link href="/help">{t('helpCenter')}</Link>
            <Link href="/faq">{t('faq')}</Link>
            <Link href="/support">{t('support')}</Link>
          </Flex>
          <Flex direction="column" gap={4}>
            <Heading size="md">{t('legal')}</Heading>
            <Link href="/privacy">{t('privacyPolicy')}</Link>
            <Link href="/terms">{t('termsOfService')}</Link>
            <Link href="/cookies">{t('cookiePolicy')}</Link>
          </Flex>
          <Flex direction="column" gap={4}>
            <Heading size="md">{t('social')}</Heading>
            <Flex direction="column" gap={2}>
              <Button as="a" href="https://twitter.com" variant="ghost" justifyContent="flex-start" px={2}>
                {t('twitter')}
              </Button>
              <Button as="a" href="https://facebook.com" variant="ghost" justifyContent="flex-start" px={2}>
                {t('facebook')}
              </Button>
              <Button as="a" href="https://instagram.com" variant="ghost" justifyContent="flex-start" px={2}>
                {t('instagram')}
              </Button>
              <Button as="a" href="https://linkedin.com" variant="ghost" justifyContent="flex-start" px={2}>
                {t('linkedin')}
              </Button>
            </Flex>
          </Flex>
        </SimpleGrid>
        <Flex
          direction="column"
          align="center"
          mt={12}
          pt={8}
          borderTop="1px"
          borderColor="gray.700"
        >
          <Text>&copy; {new Date().getFullYear()} {t('companyName')}</Text>
          <Flex gap={4} mt={4}>
            <Link href="/privacy">{t('privacyPolicy')}</Link>
            <Link href="/terms">{t('termsOfService')}</Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer; 
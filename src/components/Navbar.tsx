import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

const Navbar: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Box bg="white" px={4} position="fixed" w="100%" zIndex={1000} boxShadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold">Logo</Text>
        <LanguageSwitcher />
      </Flex>
    </Box>
  );
};

export default Navbar; 
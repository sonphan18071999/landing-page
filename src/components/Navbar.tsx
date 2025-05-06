import React from 'react';
import { Box, Flex, Button, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Box bg="white" px={4} position="fixed" w="100%" zIndex={1000} boxShadow="sm">
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Text fontSize="xl" fontWeight="bold">Logo</Text>

        <Flex alignItems="center" gap={4}>
          <Button onClick={() => changeLanguage('en')}>EN</Button>
          <Button onClick={() => changeLanguage('es')}>ES</Button>
          <Button onClick={() => changeLanguage('fr')}>FR</Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar; 
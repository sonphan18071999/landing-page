import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, HStack, Text } from '@chakra-ui/react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <HStack spacing={2}>
      <Button 
        size="sm" 
        colorScheme={i18n.language === 'en' ? 'blue' : 'gray'}
        onClick={() => changeLanguage('en')}
      >
        <Text fontWeight={i18n.language === 'en' ? 'bold' : 'normal'}>EN</Text>
      </Button>
      <Button 
        size="sm" 
        colorScheme={i18n.language === 'vi' ? 'blue' : 'gray'} 
        onClick={() => changeLanguage('vi')}
      >
        <Text fontWeight={i18n.language === 'vi' ? 'bold' : 'normal'}>VI</Text>
      </Button>
    </HStack>
  );
};

export default LanguageSwitcher; 
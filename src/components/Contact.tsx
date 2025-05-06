import React, { useState } from 'react';
import { Box, Container, Heading, Text, Input, Textarea, Button, Flex } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

interface EmailJSResponse {
  text: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your EmailJS template ID, service ID, and public key
    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formData,
        'YOUR_PUBLIC_KEY'
      )
      .then(
        (result: EmailJSResponse) => {
          console.log('Email sent successfully:', result.text);
          setFormData({ name: '', email: '', message: '' });
        },
        (error: EmailJSResponse) => {
          console.error('Error sending email:', error.text);
        }
      );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box py={20} bg="gray.50">
      <Container maxW="7xl">
        <Flex direction="column" align="center" textAlign="center" gap={8} mb={12}>
          <Heading size="xl">{t('contactTitle')}</Heading>
          <Text color="gray.600" fontSize="lg" maxW="2xl">
            {t('contactSubtitle')}
          </Text>
        </Flex>
        <Box
          as="form"
          onSubmit={handleSubmit}
          bg="white"
          p={8}
          rounded="lg"
          shadow="md"
          maxW="2xl"
          mx="auto"
        >
          <Flex direction="column" gap={6}>
            <Flex direction="column" gap={2}>
              <Text fontWeight="medium">{t('name')}</Text>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Flex>
            <Flex direction="column" gap={2}>
              <Text fontWeight="medium">{t('email')}</Text>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Flex>
            <Flex direction="column" gap={2}>
              <Text fontWeight="medium">{t('message')}</Text>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                minH="150px"
              />
            </Flex>
            <Button type="submit" colorScheme="blue">
              {t('sendMessage')}
            </Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact; 
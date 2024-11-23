import React from 'react';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Link,
  Stack,
  Text,
  VStack,
  ChakraProvider,
} from "@chakra-ui/react";
function LoginRegister() {
  return (
    <Box bg="gray.50" minH="100vh" py={4} w="100%">
    <Box h="32px" />
    <Container maxW="512px">
      <VStack
        as="form"
        spacing={4}
        filter="drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))"
        h="1178px"
        justify="center"
      >
        <Box
          bg="white"
          borderRadius="12px"
          border="1px solid"
          borderColor="gray.200"
          p={4}
          w="full"
        >
          <Icon1 w="40px" h="40px" mx="auto" my={2} />

          <Heading as="h2" size="md" textAlign="center" mb={2}>
            Welcome back.
          </Heading>

          <Text textAlign="center" mb={8}>
            We sure are glad to see you again.
          </Text>
          <Stack spacing={2} mb={4}>
            <Link
              href="/accounts/apple/login/?process=login"
              display="flex"
              alignItems="center"
              h="38px"
              px={4}
              py={2}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="lg"
              bg="white"
              color="gray.700"
              fontWeight="500"
              position="relative"
              boxShadow="sm"
              _hover={{
                textDecoration: "none",
              }}
            >
              <Box position="absolute">
                <Icon2 w="16px" h="16px" />
              </Box>
              <Text flex={1} textAlign="center">
                Log in with Apple
              </Text>
            </Link>

            <Link
              href="/accounts/google/login/?process=login"
              display="flex"
              alignItems="center"
              h="38px"
              px={4}
              py={2}
              border="1px solid"
              borderColor="gray.200"
              borderRadius="lg"
              bg="white"
              color="gray.700"
              fontWeight="500"
              position="relative"
              boxShadow="sm"
              _hover={{
                textDecoration: "none",
              }}
            >
              <Box position="absolute">
                <Icon3 w="16px" h="16px" />
              </Box>
              <Text flex={1} textAlign="center">
                Log in with Google
              </Text>
            </Link>
          </Stack>

          <Box position="relative" my={4}>
            <Divider />
            <Text
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50%, -50%)"
              bg="white"
              px={2}
              fontSize="xs"
              textTransform="uppercase"
              color="gray.400"
            >
              Or
            </Text>
          </Box>

          <Stack as="form" mt={5} spacing={4}>
            <FormControl
              borderBottom="1px solid"
              borderColor="gray.200"
              pb={4}
            >
              <Flex justify="space-between" mb={2}>
                <FormLabel htmlFor="username" m={0}>
                  Username
                </FormLabel>
                <Link
                  href="/register"
                  color="blue.500"
                  textDecoration="underline"
                >
                  Don't have an account?
                </Link>
              </Flex>
              <Input
                id="username"
                type="text"
                autoComplete="username"
                bg="gray.50"
                borderRadius="lg"
              />
            </FormControl>

            <FormControl
              borderBottom="1px solid"
              borderColor="gray.200"
              pb={4}
            >
              <Flex justify="space-between" mb={2}>
                <FormLabel htmlFor="password" m={0}>
                  Password
                </FormLabel>
                <Link
                  href="/accounts/password/reset/"
                  color="blue.500"
                  textDecoration="underline"
                >
                  Forgot your password?
                </Link>
              </Flex>
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                bg="gray.50"
                borderRadius="lg"
              />
            </FormControl>

            <Button
              isDisabled
              h="38px"
              border="1px solid"
              borderColor="gray.200"
              borderRadius="lg"
              bg="white"
              color="gray.700"
              opacity={0.5}
              _disabled={{
                opacity: 0.5,
                cursor: "not-allowed",
              }}
              boxShadow="sm"
            >
              Log in with username
            </Button>
          </Stack>
        </Box>
      </VStack>
    </Container>
  </Box>
  );
}

export default LoginRegister;


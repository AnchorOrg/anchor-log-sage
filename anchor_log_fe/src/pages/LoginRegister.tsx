import React from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { FaApple, FaGoogle, FaUser } from 'react-icons/fa';

function LoginRegister() {
  return (
    <Box
      sx={{
        bgcolor: 'grey.100',
        minHeight: '100vh',
        py: 4,
        width: '100%',
      }}
    >
      <Box height="32px" />
      <Container maxWidth="sm">
        <Stack
          component="form"
          spacing={4}
          sx={{
            filter: 'drop-shadow(0 20px 13px rgba(0, 0, 0, 0.03)) drop-shadow(0 8px 5px rgba(0, 0, 0, 0.08))',
            height: '1178px',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              bgcolor: 'white',
              borderRadius: 2,
              border: 1,
              borderColor: 'grey.300',
              p: 2,
              width: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                my: 2,
              }}
            >
              <FaUser size={40} />
            </Box>

            <Typography variant="h5" textAlign="center" gutterBottom>
              Welcome back.
            </Typography>

            <Typography textAlign="center" mb={3}>
              We sure are glad to see you again.
            </Typography>

            <Stack spacing={2} mb={4}>
              <Button
                href="/accounts/apple/login/?process=login"
                variant="outlined"
                startIcon={<FaApple />}
                sx={{
                  height: '38px',
                  color: 'grey.700',
                  textTransform: 'none',
                }}
              >
                Log in with Apple
              </Button>

              <Button
                href="/accounts/google/login/?process=login"
                variant="outlined"
                startIcon={<FaGoogle />}
                sx={{
                  height: '38px',
                  color: 'grey.700',
                  textTransform: 'none',
                }}
              >
                Log in with Google
              </Button>
            </Stack>

            <Box
              sx={{
                position: 'relative',
                my: 3,
              }}
            >
              <Divider />
              <Typography
                variant="caption"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  bgcolor: 'white',
                  px: 1,
                  textTransform: 'uppercase',
                  color: 'grey.500',
                }}
              >
                Or
              </Typography>
            </Box>

            <Stack spacing={3}>
              <FormControl fullWidth>
                <FormLabel>Username</FormLabel>
                <TextField
                  id="username"
                  type="text"
                  autoComplete="username"
                  variant="outlined"
                  size="small"
                />
                <Link href="/register" sx={{ fontSize: 14, mt: 1, textDecoration: 'underline', color: 'primary.main' }}>
                  Don't have an account?
                </Link>
              </FormControl>

              <FormControl fullWidth>
                <FormLabel>Password</FormLabel>
                <TextField
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  variant="outlined"
                  size="small"
                />
                <Link
                  href="/accounts/password/reset/"
                  sx={{ fontSize: 14, mt: 1, textDecoration: 'underline', color: 'primary.main' }}
                >
                  Forgot your password?
                </Link>
              </FormControl>

              <Button
                variant="contained"
                disabled
                sx={{
                  height: '38px',
                  bgcolor: 'grey.300',
                  color: 'white',
                  boxShadow: 1,
                  '&:disabled': {
                    opacity: 0.5,
                    cursor: 'not-allowed',
                  },
                }}
              >
                Log in with username
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default LoginRegister;
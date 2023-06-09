import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import Link from 'next/link';

const SignupPage = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundImage: 'url("https://www.shutterstock.com/image-vector/new-user-online-registration-sign-260nw-1982734163.jpg")',
                height: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: '#fff', p: 4, borderRadius: 4 }}>
              <Typography variant="h4" align="center" gutterBottom>
                Sign up
              </Typography>
              <form>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                />
                <TextField
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="password"
                />
                <Button variant="contained" fullWidth>
                  Sign up
                </Button>
              </form>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" align="center">
                  Already have an account?{' '}
                  <Link href="/Login">
                    <p>Login</p>
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SignupPage;
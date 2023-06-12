import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSession, signIn, signOut } from "next-auth/react";

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit
  });

  async function onSubmit(values){
    const status= await signIn('credentials',{
      redirect:false,
      email:values.email,
      password:values.password,
      callbackUrl: "/"
    })

    console.log(status);
  }
  return (
    <Box sx={{ bgcolor: "#f5f5f5", py: 8 }}>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundImage: 'url("https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=2000")',
                height: "100%",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ bgcolor: '#fff', p: 4, borderRadius: 4 }}>
              <Typography variant="h4" align="center" gutterBottom>
                Login
              </Typography>
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  id="email"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  id="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  type="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
                <Button variant="contained" fullWidth type="submit">
                  <Typography variant="body2" align="center" >
                    Login
                  </Typography>
                </Button>
              </form>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" align="center">
                  New Here?{' '}
                  <Link href="/SignupPage">
                    <Typography variant="body2" align="center">
                      Sign Up
                    </Typography>
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

export default LoginPage;
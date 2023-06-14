import { Box, Container, Grid, Typography } from '@mui/material';

const WhatDoYouGet = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          What Do You Get?
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Guided Meditations
              </Typography>
              <Typography variant="body1">
                Access hundreds of guided meditations on a variety of topics,
                including stress, anxiety, sleep, and more.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Sleep Stories
              </Typography>
              <Typography variant="body1">
                Drift off to sleep with soothing stories designed to help you
                relax and unwind.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Calming Music
              </Typography>
              <Typography variant="body1">
                Listen to a variety of calming music tracks, including nature
                sounds, white noise, and more.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhatDoYouGet;
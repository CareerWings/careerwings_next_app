import { Box, Typography, Grid } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';
import AddCircleIcon from '@mui/icons-material/AddCircle';
const FeatureComponent = () => {
  return (
    <Box p={4}>
    <Typography variant="h2" component="h2" gutterBottom>
      My Heading
    </Typography>
    <Typography variant="subtitle1" component="p" gutterBottom>
      My Subheading
    </Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={3}>
        <Box display="flex" alignItems="center" mb={2}>
          <AddBoxIcon fontSize="large" color="primary" mr={2} />
          <Typography variant="h6" component="h3">
            Box
          </Typography>
        </Box>
        <Typography variant="body1" component="p">
          Box content goes here.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box display="flex" alignItems="center" mb={2}>
          <AddCircleIcon fontSize="large" color="primary" mr={2} />
          <Typography variant="h6" component="h3">
            AddCircleIcon
          </Typography>
        </Box>
        <Typography variant="body1" component="p">
          AddCircleIcon content goes here.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box display="flex" alignItems="center" mb={2}>
          <AddBoxIcon fontSize="large" color="primary" mr={2} />
          <Typography variant="h6" component="h3">
            AddBoxIcon
          </Typography>
        </Box>
        <Typography variant="body1" component="p">
          AddBoxIcon content goes here.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Box display="flex" alignItems="center" mb={2}>
          <ChangeHistoryIcon fontSize="large" color="primary" mr={2} />
          <Typography variant="h6" component="h3">
            ChangeHistoryIcon
          </Typography>
        </Box>
        <Typography variant="body1" component="p">
          ChangeHistoryIcon content goes here.
        </Typography>
      </Grid>
    </Grid>
  </Box>
);
};
export default FeatureComponent;
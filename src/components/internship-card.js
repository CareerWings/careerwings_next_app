import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import {Avatar} from '@mui/material'
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import RoomIcon from '@mui/icons-material/Room';
import { Box } from '@mui/material';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PaymentsIcon from '@mui/icons-material/Payments';
import Chip from '@mui/material/Chip';
import BusinessIcon from '@mui/icons-material/Business';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const ExpandMore = styled((props) => {
  const {...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function InternshipCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const avatarStyle = {
    fontSize: "2rem",
    backgroundColor: 'red'
  };

  return (
    <Card sx={{ maxWidth: 450, margin: 2}}>
      <CardHeader
          title="Job Title"
          subheader="Company Name"  
          action= {
            <div><Avatar sx={avatarStyle}>
            <BusinessIcon />
          </Avatar></div>
          }>
      </CardHeader>
      <CardContent>
              <Chip icon={<RoomIcon />} label="Location" />
            <Box sx={{display: 'flex', flexDirection:'row', marginTop: 2, justifyContent: 'flex-start'}}>
                <Box sx={{mx: 1}} ><Chip sx={{marginBottom: 1 }}  variant='outlined' icon={<QueryBuilderIcon />} label="Start Date" /><Typography>Immediately</Typography></Box>
                <Box sx={{mx: 1}} ><Chip sx={{marginBottom: 1 }} variant='outlined'  icon={<DateRangeIcon />} label="Duration" /><Typography>6 months</Typography></Box>
                <Box sx={{mx: 1}} ><Chip sx={{marginBottom: 1 }} variant='outlined' icon={<PaymentsIcon />} label="Stipend" /><Typography> ₹5,000 /month</Typography></Box>
            </Box>
      </CardContent>
      <CardActions disableSpacing>
      <Stack direction="row" spacing={2}>
        <Button variant="contained">Apply Now</Button>
        <Button variant="outlined" startIcon={<ShareIcon />}>Share</Button>
      </Stack>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
           <Typography paragraph>
           Generic information about company. Eg: Chevrolet is an iconic American automobile brand founded in 1911 by Louis Chevrolet and William C. Durant
           </Typography>
           <Typography paragraph>
           Chevrolet is an iconic American automobile brand founded in 1911 by Louis Chevrolet and William C. Durant
           </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
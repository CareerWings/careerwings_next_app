// import { Card, CardContent, Grid, Typography } from '@mui/material';
// import { FaChalkboardTeacher, FaCertificate, FaUserGraduate } from 'react-icons/fa';

// const Feature = () => {
//   return (
//     <div>
//       <Typography variant="h4" component="h2" style={{ marginBottom: '20px' }}>
//         Our Features
//       </Typography>
//       <Typography variant="body1" component="p" style={{ marginBottom: '20px' }}>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus
//         tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices
//         diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
//       </Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12} sm={6} md={4}>
//           <Card
//             sx={{
//               backgroundColor: '#6A5ACD',
//               color: '#FFFF00',
//               height: '100%',
//               position: 'relative',
//               overflow: 'hidden',
//               transition: 'transform 0.3s ease-in-out',
//               '&:hover': {
//                 transform: 'scale(1.05)',
//               },
//             }}
//           >
//             <CardContent>
//               <FaChalkboardTeacher style={{ fontSize: '50px', marginBottom: '10px' }} />
//               <Typography variant="h5" component="h2">
//                 Expert Faculty
//               </Typography>
//               <Typography variant="body2" component="p">
//                 Learn from the best in the industry and get personalized feedback and guidance from
//                 industry experts.
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Card
//             sx={{
//               backgroundColor: '#6A5ACD',
//               color: '#FFFF00',
//               height: '100%',
//               position: 'relative',
//               overflow: 'hidden',
//               transition: 'transform 0.3s ease-in-out',
//               '&:hover': {
//                 transform: 'scale(1.05)',
//               },
//             }}
//           >
//             <CardContent>
//               <FaCertificate style={{ fontSize: '50px', marginBottom: '10px' }} />
//               <Typography variant="h5" component="h2">
//                 Industry-Recognized Certificates
//               </Typography>
//               <Typography variant="body2" component="p">
//                 Get certified by top universities and industry leaders and showcase your skills to
//                 employers.
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//         <Grid item xs={12} sm={6} md={4}>
//           <Card
//             sx={{
//               backgroundColor: '#6A5ACD',
//               color: '#FFFF00',
//               height: '100%',
//               position: 'relative',
//               overflow: 'hidden',
//               transition: 'transform 0.3s ease-in-out',
//               '&:hover': {
//                 transform: 'scale(1.05)',
//               },
//             }}
//           >
//             <CardContent>
//               <FaUserGraduate style={{ fontSize: '50px', marginBottom: '10px' }} />
//               <Typography variant="h5" component="h2">
//                 Career Services
//               </Typography>
//               <Typography variant="body2" component="p">
//                 Get personalized career support and guidance from industry experts to help you
//                 achieve your career goals.
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default Feature;


import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import MKBox from "../../../../MUIcomponents/MKBox";
import RotatingCard from "../../../../MUIcomponents/RotatingCard";
import RotatingCardFront from "../../../../MUIcomponents/RotatingCard/RotatingCardFront";
import RotatingCardBack from "../../../../MUIcomponents/RotatingCard/RotatingCardBack";
function Feature() {
  return (
    <>
    <MKBox component="section" py={3} my={0}>
      <Container>
        <Grid container mx={0} item xs={12} justifyContent="flex-start" spacing={1} alignItems="left" sx={{ mx: "auto"}}>
          <Grid item xs={10} lg={4} sx={{ mx: "0"  ,my: "30px"}}>
            <RotatingCard>
              <RotatingCardFront
                image=""
                icon=""
                title={"Card 1"}
                description="All the MUI components that you need in a development have been re-design with the new look."
              />
              <RotatingCardBack
                image=""
                title="Discover More"
                description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with header",
                }}
              />
            </RotatingCard>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container item xs={12} justifyContent="flex-start" spacing={1} alignItems="left" sx={{ mx: "auto" }}>
          <Grid item xs={10} lg={4} sx={{ mx: "0" }}>
            <RotatingCard>
              <RotatingCardFront
                image=""
                icon=""
                title={"Card 1"}
                description="All the MUI components that you need in a development have been re-design with the new look."
              />
              <RotatingCardBack
                image=""
                title="Discover More"
                description="You will save a lot of time going from prototyping to full-functional code because all elements are implemented."
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with header",
                }}
              />
            </RotatingCard>
          </Grid>
        </Grid>
        </Container>
    </MKBox>
  </>
  )
}   
export default Feature;
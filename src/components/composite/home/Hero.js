import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Root = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "85vh",
});

const CardWrapper = styled(Card)(({ theme }) => ({
  borderRadius: "20px",
  position: "relative",
  width: "250px",
  height: "350px",
  backgroundColor: "white",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
  transform: "rotate(-15deg)",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "rotate(0deg)",
    boxShadow: "0px 8px 40px rgba(0, 0, 0, 0.2)",
  },
  [theme.breakpoints.up("sm")]: {
    width: "300px",
    height: "400px",
  },
}));

const Content = styled(CardContent)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  color: "black",
});

const Title = styled("div")({
  textAlign: "center",
  color: "black",
  marginBottom: "2%",
  marginTop: "2%",
});


const Hero = () => {

  return (
    <>
      <Title>
        <Typography variant="h4">
          Welcome to the deep end of design education
        </Typography>
      </Title>
      <Root>
        {[...Array(4)].map((_, index) => (
          <CardWrapper key={index}>
            <Content>
              <Typography variant="h6">Card {index + 1}</Typography>
            </Content>
          </CardWrapper>
        ))}
      </Root>
    </>
  );
};

export default Hero;

import React from "react";
import { makeStyles } from '@mui/styles';
import { ThemeProvider } from '@mui/material/styles';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { createTheme } from '@mui/material/styles';
import Grid from "@mui/material/Grid";
import Image from "next/image";
import {motion,Variants} from "framer-motion";

const theme = createTheme();

const useStyles = makeStyles(() => ({
    root: {
        height: "100%",
    },
    card: {
        position: "relative",
        width: "100%",
        height: "300px",
        display: "flex",
        flexDirection: "row",
        margin: "2px",
        overflow: "hidden",
        "&:hover $content": {
            visibility: "visible",
            opacity: 1,
        },
    },
    image: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        zIndex: -1,
    },
    content: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "rgba(0, 0, 0, 0.5)",
        color: "#fff",
        visibility: "hidden",
        opacity: 0,
        transition: "visibility 0s, opacity 0.5s ease-in-out",
    },
}));

const Mentor = ({ imageUrl, title, subtitle, content }) => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Grid container item xs={12} sm={6} md={4} lg={3} className={classes.root}>
                <Card className={classes.card}>
                    <Image className={classes.className} src={imageUrl} alt="Mentor"/>
                        <CardContent className={classes.content}>
                            <Typography variant="h5" component="h2">
                                {title}
                            </Typography>
                            <Typography color="textSecondary" gutterBottom>
                                {subtitle}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {content}
                            </Typography>
                        </CardContent>
                </Card>
            </Grid>
        </ThemeProvider>
    );
};

export default Mentor;

import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        maxWidth: 310,
        transition: "transform 0.15s ease-in-out",
        "&:hover": { transform: "scale3d(1.05, 1.05, 1)" },
    },
})

const ProjectsCard = ({ img, alt, title, address }) => {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea href={address}>
                <CardMedia
                    component="img"
                    height="240"
                    image={img}
                    alt={alt}
                />
                <CardContent>
                    <Typography gutterBottom variant="body1" component="div">
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
};

export default ProjectsCard;

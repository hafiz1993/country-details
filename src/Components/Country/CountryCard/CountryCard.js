import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
});

const CountryCard = (props) => {
    const classes = useStyles();
    const { name, flag, alpha2Code} = props.country;
    // console.log(name);
    return (
        <Card className={classes.root} style={{ margin: "10px" }} >
            <CardActionArea style={{ width: "20rem" }}>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    width="300"
                    image={flag}
                    title={name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        <h4><Link to ={`/details/${name}`} style={{textDecoration:"none", textColor:"black"}}>{name}</Link></h4>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {alpha2Code} 
                    </Typography>
                   
                </CardContent>
            </CardActionArea>
            <CardActions>
             <Link to ={"/details/"+alpha2Code}> 
                <Button size="small" color="primary">
                    Learn More
                    </Button>
                    </Link>
        
     
            </CardActions>
        </Card>

    );
};

export default CountryCard;
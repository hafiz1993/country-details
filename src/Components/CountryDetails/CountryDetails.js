import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const CountryDetails = () => {
    const classes = useStyles();
    const { countryName } = useParams();
    const [details, setDetails] = useState({});
    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data[0]));
    }, [countryName])

    console.log(details);

    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };


    return (
      
      <div>
        
      <Card className={classes.root} style={{marginTop:"50px", marginLeft:"30%", marginRight:"30%"}}>
      <CardHeader
        
        
        title={countryName}
        subheader={details.capital}
      />
      <CardMedia
        className={classes.media}
        image={details.flag}
        title={countryName}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph> <h3>Details:</h3></Typography>
          
          <Typography paragraph>
            <ol>
          <li>Region : {details.region}</li>
            <li>Sub-Region : {details.subregion}</li>
            <li>Timezone : {details.timezones}</li>  
            <li>Population : {details.population}</li> 
            <li>NumericCode : {details.numericCode}</li>  
            <li>NativeName : {details.nativeName}</li>   
            <li>Alpha2Code : {details.alpha2Code}</li>
            <li>AltSpellings : {details.altSpellings}</li>
            <li>Area: {details.area}</li>
            <li>Borders : {details.borders}</li> 
            </ol>
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
    
    </div>
    
        
    );
};
export default CountryDetails;
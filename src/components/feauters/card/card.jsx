import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  root: {
    width:"350px",
    height: "450px",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    borderRadius:"15px",
    
  },
  media: {
    height: "50%",
    width: "100%",
    padding: 0,
    border: "solid 2px black",
    
 
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

export default function RegularCard(props) {
  


const {title,subTitle,img,text,clickHandler} = props;
const classes = useStyles();


 

  return (
    <Card className={classes.root}>
      <CardHeader
        title={title}
        subheader={subTitle}
      />
      <CardMedia
        className={classes.media}
        image={img}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {text}

        </Typography>
      </CardContent>
      <Button variant="contained" onClick={clickHandler}>Temp</Button>
     
     
       
   
    </Card>
  );}
import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
// import Card from '@material-ui/core/Card'
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'
// import CardMedia from '@material-ui/core/CardMedia'
// import Button from '@material-ui/core/Button'
// import Typography from '@material-ui/core/Typography'
// import { Link } from 'react-router-dom'
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import "./book.css"

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 500,
//   },
//   media: {
//     height: 300,
//   },
// })

const Book = props => {
  // const classes = useStyles()

  return (
    // <Card className={classes.root}>
    //     <CardMedia
    //       className={classes.book}
    //       image={props.book.image}
    //       title={props.book.title}
    //     />
    //     <CardContent>
    //       <Typography gutterBottom variant="h5" component="h2">
    //         {props.book.title}
    //       </Typography>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //         Authors: {props.book.authors}
    //       </Typography>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //         Image: {props.book.image}
    //       </Typography>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //         Description: {props.book.description}
    //       </Typography>
    //       <Typography variant="body2" color="textSecondary" component="p">
    //         Link: {props.book.infoLink}
    //       </Typography>
    //     </CardContent>
    //   <CardActions>
    //     <Button 
    //       size="small" 
    //       color="primary"
    //       onClick={() => props.handleSaveBook(props.book.googleId)}>
    //       Save
    //     </Button>
    //   </CardActions>
    // </Card>


//     <Card className={classes.root}>
//     <CardActionArea>
//       <CardMedia
//         className={classes.media}
//         image={props.book.image}
//         title={props.book.title}
//       />
//       <CardContent>
//         <Typography gutterBottom variant="h5" component="h2">
//         {props.book.title}
//         </Typography>
//         <Typography variant="body2" color="textSecondary" component="p">
//         Written By: {props.book.authors}</Typography>
//         <hr></hr>
//         <Typography variant="body2" color="textSecondary" component="p">
//         Description: {props.book.description}</Typography>
//         <hr></hr>
//         <Typography variant="body2" color="textSecondary" component="p">
//        Link: {props.book.link}</Typography>
//        <Button 
//            size="small" 
//            color="primary"
//            onClick={() => props.handleSaveBook(props.book.googleId)}>
//            Save
//          </Button>
//       </CardContent>
//     </CardActionArea>
//  <CardActions>
        
//       </CardActions>
//   </Card>


<div>
<Card>
  <CardBody>
    <CardTitle className="title">{props.book.title}</CardTitle>
    <CardSubtitle>Written by: {props.book.authors}</CardSubtitle>
  </CardBody>
  <img className="image" src={props.book.image} alt="Card image cap" />
  <CardBody>
    <CardText>{props.book.description}</CardText>
    <CardLink onClick={() => props.handleSaveBook(props.book.googleId)}>Save</CardLink>
    <CardLink href={props.book.link}>Google Books Link</CardLink>
  </CardBody>
</Card>
</div>
  )
}

export default Book
import React from 'react';
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
import { grey } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CSSClasses from './ExpandingCard.module.css';
import Button from '@material-ui/core/Button';

function createMarkupOutside(textToRender) {
    return {
        __html: textToRender
    };
}


const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        margin: 10,
        width:325,
        backgroundColor: grey[300],
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
}));

const ExpandingCard = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    // const createMarkup = (textTOTags) => {
    //     { __html: textTOTags };
    // }

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={require("../../assets/images/webReactTest.jpg")}
                title="Event Test"
            />
            <CardContent>
                <Typography variant="h4" color="textPrimary" component="p">
                    {props.eventName}
                </Typography>

                <div className={CSSClasses.PlaceAndTimeContainer}>
                    <Typography variant="subtitle1" color="textPrimary" component="p">
                        {props.venueName}
                    </Typography>

                    <Typography variant="subtitle1" color="textPrimary" component="p">
                        {props.startTime + ' - ' + props.endTime}
                    </Typography>
                </div>

            </CardContent>
            <CardActions disableSpacing>
            {/* THIS SHOULD BE ADDED WHEN A USER HAS THE ABILITY TO LIKE THINGS */}
                {/* <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton> */}
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
                    <Typography paragraph>
                         <div dangerouslySetInnerHTML={createMarkupOutside(props.description)} />
                     </Typography>
                    <div className={CSSClasses.buttonContainer}>
                        {/* TODO: PASS THE ticketLink */}
                        <Button variant="contained" color="primary" >Purchase Ticket</Button>
                    </div>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default ExpandingCard;
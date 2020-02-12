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
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CSSClasses from './ExpandingCard.module.css';
import Button from '@material-ui/core/Button';

// Example data being passed in via props 

// current_event = [
//     {
//         id: 'YUIDYSAJHJDK21343124',
//         venueName: 'Australia party',
//         eventName: 'Ivy',
//         date: '10/02.20',
//         startTime: '2000',
//         endTime: '0100',
//         ticketLink: 'www.example.com'
//     },
//     {
//         id: 'HKFHDSJKFHJKSDHFJ',
//         venueName: 'WOOOOOO',
//         eventName: 'Zepher',
//         date: '10/02.20',
//         startTime: '2000',
//         endTime: '0100',
//         ticketLink: 'www.Zepher.com'
//     },
// ];


const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 345,
        margin: 10,
        width:325
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

const ExpandingCard = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image="/static/images/cards/paella.jpg"
                title="Paella dish"
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
                    <Typography paragraph>
                        Proudly presenting our first event for 2020. Featuring two of the most exciting names in the European techno scene, both making their Australian debut.<br />
                        <br />
                        FEATURING:<br />
                        <br />
                        AIROD (FR) - Molekul/Elixyr/Lenske<br />
                        <br />
                        Dario Brkic aka AIROD is perhaps one of the finest examples of what the French techno scene can bring to the table. Following a string of coveted releases and club bookings since breaking through with his debut 12" on Molekul, AIROD has well and truly cemented himself as a force to be reckoned with in the underground dance music community. Dario also joined Dax J's Monnom Black stable in the meanwhile, contributing a track to the label's eagerly anticipated debut VA 'The World Of Monnom Black', alongside some of today's techno's most renowned big guns. A meteoric rise to supreme power for the Parisian producer, whose touring agenda has gone from busy to chock-a-block in a jiffy, and we grant you this, ladies and gentlemen, is just the beginning.<br />
                        https://soundcloud.com/airodmusic <br />
                        <br />
                        P.LEONE (US) - Rekids/E-Missions/Work Them Records<br />
                        <br />
                        Originally hailing from the US Salvatore Carlino is a DJ &amp; Producer who from a young age was able to immerse himself into New York's rich dance music culture. following the untimely closure of his family's restaurant Carlino made the move to Berlin where he was introduced to Spencer park of 'Work Them Records' of which he would subsequently release the highly regarded EL DORADO EP. Mixmag later named P. Leone as one of their top 25 artists to watch in 2019 and following a number of notable releases on Radio Slaves 'Rekids' we couldnt have agreed more.<br />
                        https://soundcloud.com/p_leone<br />
                        <br />
                        SUPPORT:<br />
                        DJ MEATLOAF <br />
                        https://soundcloud.com/oaflays<br />
                        <br />
                        HEADNOIZ IN EFFKT<br />
                        https://soundcloud.com/user-935301346
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
import React, { useState, useEffect } from 'react';
import {
  makeStyles, Modal, Backdrop, Grow, Dialog, Slide, createMuiTheme, MuiThemeProvider, Button, ListItemText, ListItem, List, Divider, AppBar, Toolbar, IconButton, Typography, Grid, Box,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import { VideoCardContainer, MiniVideoCard, Card } from './styles';

import VideoBox from '../VideoBox';
import { VideoCardList } from '../../styles';
import categoriesRepository from '../../../../repositories/categories';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}
const Transition = React.forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

function VideoCard({
  videoTitle, videoURL, categoryColor, category,
}) {
  const classes = useStyles();
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setOpen(!open);
  };

  const DisplayVideo = () => (
    <MuiThemeProvider theme={theme}>

      <Dialog fullScreen open={open} onClose={handleChange} TransitionComponent={Transition}>
        <Box className={classes.paper}>
          <AppBar className={classes.appBar} style={{ background: categoryColor || 'red' }}>

            <Toolbar>

              <Typography variant="h6" className={classes.title}>
                {videoTitle}
              </Typography>
              <IconButton edge="end" onClick={handleChange} aria-label="close">
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          {/* <Grid container alignItems="center" justify="center"> */}
          {/* <Grid item xs={9} className={classes.containerLeft}> */}

          {/* <div justify="space-around" className={classes.dialog}> */}

          <div className={classes.containerLeft}>
            <VideoBox
              className={classes.video}
              url={videoURL}
            />
          </div>

          {/* </Grid> */}
          {/* <Grid item xs={4} className={classes.containerRight}>
              <List>

                {initialDatas.map((category) => (

                  <div key={category.title}>
                    <ListItem button>

                      <MiniVideoCard
                        url={image}
      // href={videoURL}
                        onClick={handleChange}
                        target="_blank"
                        style={{ borderColor: categoryColor || 'red' }}
                        title={videoTitle}
                      />
                      <ListItemText primary={category.title} secondary="Titania" />
                      {console.log(category.title)}
                    </ListItem>
                    <Divider />

                  </div>
                ))}

              </List>
            </Grid> */}
          {/* </Grid> */}
        </Box>
      </Dialog>
    </MuiThemeProvider>

  );
  return (
    <div>

      <VideoCardContainer
        url={image}
      // href={videoURL}
        onClick={handleChange}
        target="_blank"
        style={{ borderColor: categoryColor || 'red' }}
        title={videoTitle}
      >
        <Card>
          <Typography variant="h6" className={classes.titleCard}>
            {videoTitle}
          </Typography>
        </Card>
        <DisplayVideo />
      </VideoCardContainer>

    </div>
  );
}
const useStyles = makeStyles((theme) => ({
  titleCard: {

    width: '100%',
    height: '100%',
    padding: '16px',
    transition: 'color .4s',
    color: 'rgba(999,999,999,0)',
    '&:hover, &:focus': {
      color: 'rgba(999,999,999,1)',
    },
  },
  paper: {
    width: '100%',
    height: '100vh',
    padding: '8%',
    display: 'flex',
    alignItems: 'center',
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    background: '#141414',
  },
  appBar: {
    position: 'fixed',
    height: '8%',
    justifyContent: 'center',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },

  containerLeft: {
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: '0 auto',
    width: '80%',
    maxWidth: '1400px',
    height: '100%',
  },
  '@media (max-width: 800px)': {
    padding: '0',
  },
}));
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#dc1a28',
    },
    secondary: {
      main: '#f5f5f5',
    },

  },
});
export default VideoCard;

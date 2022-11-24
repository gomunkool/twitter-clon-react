import React from 'react'
import {
  HomeItem,
  MiListItemButton,
  MiListItemIcon,
  MiIconButton,
  ButtonPostTweet,
  TypographyTitle,
  CenterPartBoxSeparator,
} from './Home.styled'
import Twit from '../../components/twit/Tweet'
import { Container } from '@mui/system'
import { Grid, Hidden, List, ListItemText } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import TwitterIcon from '@mui/icons-material/Twitter'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import TweetOtherPeople from '../../components/tweetOtherPeople/TweetOtherPeople'

const Home = () => {
  return (
    <Container>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <HomeItem>
            <MiIconButton>
              <TwitterIcon />
            </MiIconButton>
            <List
              sx={{
                width: '100%',
                maxWidth: 360,
                color: '#000',
              }}
              component="nav"
            >
              <MiListItemButton>
                <MiListItemIcon>
                  <SearchIcon />
                </MiListItemIcon>
                <Hidden xlDown>
                  <ListItemText primary="Search" />
                </Hidden>
              </MiListItemButton>
              <MiListItemButton>
                <MiListItemIcon>
                  <NotificationsNoneIcon />
                </MiListItemIcon>
                <Hidden xlDown>
                  <ListItemText primary="Notifications" />
                </Hidden>
              </MiListItemButton>
              <MiListItemButton>
                <MiListItemIcon>
                  <MailOutlineIcon />
                </MiListItemIcon>
                <Hidden xlDown>
                  <ListItemText primary="Mails" />
                </Hidden>
              </MiListItemButton>
              <MiListItemButton>
                <MiListItemIcon>
                  <BookmarkBorderIcon />
                </MiListItemIcon>
                <Hidden xlDown>
                  <ListItemText primary="Bookmark" />
                </Hidden>
              </MiListItemButton>
              <MiListItemButton>
                <MiListItemIcon>
                  <ListAltIcon />
                </MiListItemIcon>
                <Hidden xlDown>
                  <ListItemText primary="List" />
                </Hidden>
              </MiListItemButton>
              <MiListItemButton>
                <MiListItemIcon>
                  <PersonOutlineIcon />
                </MiListItemIcon>
                <Hidden xlDown>
                  <ListItemText primary="Person" />
                </Hidden>
              </MiListItemButton>
            </List>
          </HomeItem>
          <ButtonPostTweet variant="contained">Tweet</ButtonPostTweet>
        </Grid>
        <Grid
          item
          xs={7}
          style={{
            borderRight: '0.5px solid #dedede',
            borderLeft: '0.5px solid #dedede',
            height: '100vh',
          }}
        >
          <HomeItem>
            <TypographyTitle
              variant={'h5'}
              sx={{
                fontWeight: 'bold',
                borderBottom: '0.5px solid #dedede',
              }}
            >
              Home
            </TypographyTitle>
            <Twit />
            <CenterPartBoxSeparator />
            <TweetOtherPeople />
          </HomeItem>
        </Grid>
        <Grid item xs={3}>
          <HomeItem>xs=4</HomeItem>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home

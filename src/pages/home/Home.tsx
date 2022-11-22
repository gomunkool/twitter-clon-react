import React from 'react'
import {
  Item,
  MiListItemButton,
  MiListItemIcon,
  MiIconButton,
  ButtonPostTwit,
} from './Home.styled'
import { Container } from '@mui/system'
import { Button, Grid, Hidden, List, ListItemText } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import TwitterIcon from '@mui/icons-material/Twitter'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import ListAltIcon from '@mui/icons-material/ListAlt'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'

const Home = () => {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Item>
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
          </Item>
          <ButtonPostTwit variant="contained">Twit</ButtonPostTwit>
        </Grid>
        <Grid item xs={7}>
          <Item>
            <TwitterIcon />
            xs=4
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Home

import React from 'react'
import { Item, MiListItemButton, MiListItemIcon } from './Home.styled'
import { Container } from '@mui/system'
import { Grid, List, ListItemText } from '@mui/material'
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
                  <TwitterIcon />
                </MiListItemIcon>
              </MiListItemButton>
              <MiListItemButton>
                <MiListItemIcon>
                  <SearchIcon />
                </MiListItemIcon>
                <ListItemText primary="Search" />
              </MiListItemButton>
              <MiListItemButton>
                <MiListItemIcon>
                  <NotificationsNoneIcon />
                </MiListItemIcon>
                <ListItemText primary="Notifications" />
              </MiListItemButton>
              <MiListItemButton>
                <MiListItemIcon>
                  <MailOutlineIcon />
                </MiListItemIcon>
                <ListItemText primary="Mails" />
              </MiListItemButton>
              <MiListItemButton>
                <MiListItemIcon>
                  <BookmarkBorderIcon />
                </MiListItemIcon>
                <ListItemText primary="Bookmark" />
              </MiListItemButton>
              <MiListItemButton>
                <MiListItemIcon>
                  <ListAltIcon />
                </MiListItemIcon>
                <ListItemText primary="List" />
              </MiListItemButton>
              <MiListItemButton>
                <MiListItemIcon>
                  <PersonOutlineIcon />
                </MiListItemIcon>
                <ListItemText primary="Person" />
              </MiListItemButton>
            </List>
          </Item>
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

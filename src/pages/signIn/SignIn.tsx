import React from 'react'
import { Button, Typography } from '@mui/material'
import { SingInTitle, LeftPart, RightPart, FormWrapper } from './SignIn.styled'
import TwitterIcon from '@mui/icons-material/Twitter'
import SearchIcon from '@mui/icons-material/Search'
import PeopleIcon from '@mui/icons-material/People'
import ForumIcon from '@mui/icons-material/Forum'

function SignIn() {
  return (
    <SingInTitle>
      <LeftPart>
        <ul>
          <li>
            <SearchIcon />
            <Typography variant={'h6'}>Read what interests you.</Typography>
          </li>
          <li>
            <PeopleIcon />
            <Typography variant={'h6'}>
              Find out what the world is talking about.
            </Typography>
          </li>
          <li>
            <ForumIcon />
            <Typography variant={'h6'}>Join the conversation.</Typography>
          </li>
        </ul>
      </LeftPart>
      <RightPart>
        <FormWrapper>
          <TwitterIcon />
          <Typography
            variant={'h5'}
            sx={{ fontWeight: 'bold', margin: '10px 0 20px 0' }}
          >
            Find out what's happening in the world right now.
          </Typography>
          <Typography sx={{ typography: 'body2' }}>
            Join twitter now.
          </Typography>
          <Button variant="contained">Sign Up</Button>
          <Button variant="outlined">Sing In</Button>
        </FormWrapper>
      </RightPart>
    </SingInTitle>
  )
}

export default SignIn

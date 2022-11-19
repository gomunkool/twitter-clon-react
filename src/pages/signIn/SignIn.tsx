import React from 'react'
import { Typography } from '@mui/material'
import { SingInTitle, LeftPart, RightPart } from './SignIn.styled'
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
            <Typography>Read what interests you.</Typography>
          </li>
          <li>
            <PeopleIcon />
            <Typography>Find out what the world is talking about.</Typography>
          </li>
          <li>
            <ForumIcon />
            <Typography>Join the conversation.</Typography>
          </li>
        </ul>
      </LeftPart>
      <RightPart>
        <TwitterIcon />
      </RightPart>
    </SingInTitle>
  )
}

export default SignIn

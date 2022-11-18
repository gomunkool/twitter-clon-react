import React from 'react'
import { Typography } from '@mui/material'

import { SingInTitle, LeftPart, RightPart } from './SignIn.styled'

function SignIn() {
  return (
    <SingInTitle>
      <LeftPart>
        <ul>
          <li>
            <Typography>Read what interests you.</Typography>
          </li>
          <li>Find out what the world is talking about.</li>
          <li>Join the conversation.</li>
        </ul>
      </LeftPart>
      <RightPart>eee</RightPart>
    </SingInTitle>
  )
}

export default SignIn

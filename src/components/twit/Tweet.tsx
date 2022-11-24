import React from 'react'
import {
  TweetWrapper,
  TweetWrapperControl,
  LetterProgressBar,
  ButtonAddTweet,
  TweetIconButton,
} from './Tweet.styled'
import {
  Avatar,
  Grid,
  TextField,
  Typography,
  CircularProgress,
  Box,
} from '@mui/material'
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined'
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined'

const Tweet = (): JSX.Element => {
  return (
    <TweetWrapper>
      <Grid container spacing={2}>
        <Grid item xs={1.5}>
          <Box>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 48, height: 48 }}
            />
          </Box>
        </Grid>
        <Grid item xs={10.5}>
          <Box>
            <TextField
              id="standard-basic"
              label="What's happening?"
              multiline
              rows={4}
              variant="standard"
              InputProps={{
                disableUnderline: true,
              }}
              sx={{ width: '100%' }}
            />
            <TweetWrapperControl>
              <TweetIconButton>
                <InsertPhotoOutlinedIcon sx={{ color: 'rgb(29, 155, 240)' }} />
              </TweetIconButton>
              <TweetIconButton>
                <SentimentSatisfiedAltOutlinedIcon />
              </TweetIconButton>
              <Typography
                variant="subtitle2"
                sx={{ flex: '1 1 auto', textAlign: 'end', fontWeight: 'bold' }}
              >
                280
              </Typography>
              <LetterProgressBar>
                <CircularProgress
                  variant="determinate"
                  value={100}
                  sx={{
                    position: 'absolute',
                    height: '15px',
                    width: '15px',
                    left: 0,
                    top: -10,
                    color: '#e9e9e9',
                    zIndex: 0,
                  }}
                />
                <CircularProgress
                  variant="determinate"
                  value={50}
                  sx={{
                    position: 'absolute',
                    height: '15px',
                    width: '15px',
                    left: 0,
                    top: -10,
                    color: '#00acee',
                    zIndex: 1,
                  }}
                />
              </LetterProgressBar>
              <ButtonAddTweet variant="contained">Tweet</ButtonAddTweet>
            </TweetWrapperControl>
          </Box>
        </Grid>
      </Grid>
    </TweetWrapper>
  )
}

export default Tweet

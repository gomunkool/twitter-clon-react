import React from 'react'
import {
  TweetWrapper,
  NicknameWrapper,
  WrapperAttitudeTweet,
  ButtonCommentTweet,
  ButtonRePostTweet,
  ButtonLikeTweet,
  ButtonSaveTweet,
} from './TweetOtherPeople.styled'
import { Avatar, Grid, Box, Typography } from '@mui/material'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined'

const TweetOtherPeople = (): JSX.Element => {
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
            <NicknameWrapper>
              <Typography variant="h6">Elon Musk</Typography>
              <Typography variant="body1">@elonmusk</Typography>
              <Typography variant="body1">2h.</Typography>
            </NicknameWrapper>
            <Typography variant="subtitle2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              minima, reiciendis quasi animi accusamus sed? Eaque, accusamus
              natus! Aspernatur rem quis natus nesciunt, nihil repellendus ipsum
            </Typography>
          </Box>
          <WrapperAttitudeTweet>
            <ButtonCommentTweet>
              <ChatBubbleOutlineOutlinedIcon />
              <Typography variant="body2">260</Typography>
            </ButtonCommentTweet>
            <ButtonRePostTweet>
              <RepeatOutlinedIcon />
              <Typography variant="body2">25</Typography>
            </ButtonRePostTweet>
            <ButtonLikeTweet>
              <FavoriteBorderOutlinedIcon />
              <Typography variant="body2">2633</Typography>
            </ButtonLikeTweet>
            <ButtonSaveTweet>
              <SaveAltOutlinedIcon />
            </ButtonSaveTweet>
          </WrapperAttitudeTweet>
        </Grid>
      </Grid>
    </TweetWrapper>
  )
}

export default TweetOtherPeople

import { styled } from '@mui/material/styles';
import { Box, Button,IconButton } from '@mui/material';

export const TweetWrapper = styled(Box)(() => ({
display:'flex',
padding:15
}));


export const TweetWrapperControl = styled(Box)(() => ({
display:'flex',
alignItems:'center'
 }));

  export const TweetIconButton = styled(IconButton)(() => ({
    marginRight:5,
    color: 'rgb(29, 155, 240)',
    transition: 'all 0.5s',
    '&:hover': {
      backgroundColor: '#00acee',
      boxShadow: 'none',
     color: '#fff',
     svg:{
      color: '#fff',
    },
    }
  }));

  export const LetterProgressBar = styled(Box)(() => ({
position: 'relative',
margin: '0 10px',
height: '30px',
width:'30px',
svg:{
  height: '30px',
width:'30px',
}
}));
    

export const ButtonAddTweet = styled(Button)(() => ({
borderRadius: 25,
minWidth:120,
backgroundColor: '#00acee',
boxShadow: 'none',
transition: 'all 0.5s',
fontWeight:'bold',
'&:hover': {
  boxShadow: 'none',
}
}));
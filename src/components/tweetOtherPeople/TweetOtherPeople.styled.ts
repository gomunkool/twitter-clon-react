import { styled } from '@mui/material/styles';
import { Box, IconButton } from '@mui/material';

export const TweetWrapper = styled(Box)(() => ({
display:'flex',
padding:15
}));

export const NicknameWrapper = styled(Box)(() => ({
display:'flex',
alignItems:'center',
p:{
paddingLeft: 8,
color:'#a9a9a9',
}}));

export const WrapperAttitudeTweet = styled(Box)(() => ({
    display:'flex',
    marginTop: 15,
    paddingRight: 10,
    justifyContent:'space-between'
    }));


export const ButtonCommentTweet = styled(IconButton)(() => ({
      padding:0,
      height:30,
      width:80,
      transform: 'all 0.5s',
      borderRadius:25,
      p:{marginLeft:5},
      '&:hover': {
        color:'#00acee',
        backgroundColor: '#C6E6FE',
      }
      }));

export const ButtonRePostTweet = styled(IconButton)(() => ({
        padding:0,
        height:30,
        width:80,    
      borderRadius:25,
      transform: 'all 0.5s',
        p:{marginLeft:5},
        '&:hover': {
          color:'#03A63C',
        backgroundColor: '#80E6CF',
        }
        }));

export const ButtonLikeTweet = styled(IconButton)(() => ({
padding:0,
height:30,
width:80,
borderRadius:25,
transform: 'all 0.5s',
p:{marginLeft:5},
'&:hover': {
color:'#CC3123',
backgroundColor: '#FF84A9',
}
}));
        
export const ButtonSaveTweet = styled(IconButton)(() => ({
            padding:0,
            height:30,
            width:30,
            p:{marginLeft:5},
            '&:hover': {
              color:'#00acee',
              backgroundColor: '#C6E6FE',
                        }
            }));
          
import { Box, ListItemButton, ListItemIcon,IconButton, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';


export const HomeItem = styled(Box)(({  }) => ({
marginTop:10,
padding:0
}));

export const TypographyTitle = styled(Typography)(({  }) => ({
padding: '0 0 10px 15px'
  }));
  

export const MiIconButton = styled(IconButton)(({ }) => ({
color:'#00acee',
transition: 'all 0.5s',
marginLeft:8,
svg:{
  height:32,
  width:32
},
'&:hover': {
  backgroundColor: '#00acee',
  boxShadow: 'none',
 svg:{
  color: '#fff',
},
}
}));
  
  export const MiListItemButton = styled(ListItemButton)(({ }) => ({
padding: '5px 5px 5px 15px',
marginTop: 10,
minWidth: 140,
width: 170,
minHeight: 42,
transition: 'all 0.5s',
borderRadius:25,
  svg:{
    color: '#000',
    marginRight: 15,
    transition: 'all 0.5s',
  },
span:{
  fontWeight:'bold',

},
'&:hover': {
  backgroundColor: '#00acee',
  boxShadow: 'none',
 color: '#fff',
 svg:{
  color: '#fff',
},
}
}));


export const MiListItemIcon = styled(ListItemIcon)(({ }) => ({
minWidth: 25,
}));


export const ButtonPostTweet = styled(Button)(({ }) => ({
  marginTop:10,
marginLeft:10,
minWidth:140,
borderRadius:25,
backgroundColor: '#00acee',
boxShadow: 'none',
transition: 'all 0.5s',
fontWeight:'bold',
'&:hover': {
  boxShadow: 'none',
}
}));
  
export const CenterPartBoxSeparator = styled(Box)(({ }) => ({
height:10,
width:'100%',
backgroundColor:'#e9e9e9',
}));
  
  

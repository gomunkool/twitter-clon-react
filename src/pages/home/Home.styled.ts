import { Box, ListItemButton, ListItemIcon,IconButton, Button } from '@mui/material';
import { styled } from '@mui/material/styles';


export const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
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

minWidth: 180,
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


export const ButtonPostTwit = styled(Button)(({ }) => ({
  marginTop:10,
marginLeft:10,
minHeight: 42,

minWidth:180,
borderRadius:25,
backgroundColor: '#00acee',
boxShadow: 'none',
transition: 'all 0.5s',
fontWeight:'bold',
'&:hover': {
  boxShadow: 'none',

}
  }));
  
  
  
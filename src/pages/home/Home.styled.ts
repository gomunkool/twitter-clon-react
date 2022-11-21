import { Box, ListItemButton, ListItemIcon } from '@mui/material';
import { styled } from '@mui/material/styles';


export const Item = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'center',
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


  
  
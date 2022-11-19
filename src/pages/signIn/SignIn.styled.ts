import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SingInTitle = styled(Box)(() => ({
display:'flex',
flex: '0 0 50%',
justifyContent: 'space-between'
}));

export const LeftPart = styled(Box)(() => ({
backgroundColor: '#00acee',
flex: '0 0 50%',
height: '100vh',
display:'flex',
alignItems: 'center',
justifyContent: 'center',
ul:{
  listStyleType: 'none',
  color: '#fff',
li:{
  display:'flex',
  margin:'0 15px 15px 0',
  svg:{
    marginRight: '15px'
  }
}

}
}));

export const RightPart = styled(Box)(() => ({
  backgroundColor: '#0080E6',
  flex: '0 0 50%',
  height: '100vh',
  display:'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));


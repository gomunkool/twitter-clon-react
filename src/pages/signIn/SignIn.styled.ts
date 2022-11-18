import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const SingInTitle = styled(Box)(() => ({
display:'flex',
flex: '0 0 50%',
justifyContent: 'space-between'
}));

export const LeftPart = styled(Box)(() => ({
backgroundColor: 'green',
flex: '0 0 50%',
height: '100vh',
display:'flex',
alignItems: 'center',
justifyContent: 'center',
ul:{
  color: 'red'
}
}));

export const RightPart = styled(Box)(() => ({
  backgroundColor: 'blue',
  flex: '0 0 50%',
  height: '100vh',
  display:'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));


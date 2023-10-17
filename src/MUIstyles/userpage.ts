import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const tabStyle = (activeTab: number, currentActiveTab: number) => ({
  color: activeTab === currentActiveTab ? 'primary.main' : 'var(--secondary)',
  fontWeight: 'bold',
});

const userPageBoxStyle = { width: '100%', paddingTop: '100px' };

const CustomTextField = styled(TextField)({
  width: '500px',
  maxWidth: '80%',
  margin: '30px',
  '& label.Mui-focused': {
    color: 'var(--primary)',
  },
  '& label': {
    color: 'var(--secondary)',
    fontFamily: '"Orbitron", sans-serif',
  },
  '&:hover label': {
    color: 'var(--primary)',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'var(--primary)',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'var(--secondary)',
    },
    '&:hover fieldset': {
      borderColor: 'var(--primary)',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'var(--primary)',
    },
    '& .MuiOutlinedInput-input': {
      color: 'var(--primary)',
      fontFamily: '"Orbitron", sans-serif',
    },
  },
});

const bookContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  justifyContent: 'space-around',
  padding: '20px',
};

const bookCardStyle = {
  width: 280,
  height: 380,
  padding: '10px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-around',
  backgroundColor: '#242424',
  boxShadow: '0px 0px 14px var(--primary)',
};

const bookImageStyle = {
  height: '150px',
  width: '100px',
};

const bookTitleStyle = {
  fontSize: '1.2rem',
  color: 'primary.main',
  marginBottom: '10px',
};

const bookAuthorStyle = { fontSize: '1.2rem', color: 'var(--secondary)' };

const cardButtonStyle = {
  color: 'primary.main',
  '&:hover': {
    color: 'var(--secondary)',
    filter: 'drop-shadow(1px 1px 2px var(--primary))',
  },
};

export {
  tabStyle,
  userPageBoxStyle,
  CustomTextField,
  bookContainerStyle,
  bookCardStyle,
  bookImageStyle,
  bookTitleStyle,
  bookAuthorStyle,
  cardButtonStyle,
};

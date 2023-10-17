const navbarStyle = { position: 'fixed', top: '32px', left: '20px' };

const navbarItemStyle = {
  backgroundColor: 'primary.main',
  '&:hover': {
    backgroundColor: 'var(--secondary)',
    color: 'primary.main',
  },
};

export { navbarStyle, navbarItemStyle };

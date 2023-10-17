const trendingCardStyle = {
  width: '300px',
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: 'var(--bg-color)',
  borderRadius: '5%',
  boxShadow: '2px 2px 4px var(--primary)',
  paddingLeft: '0',
  fontFamily: 'var(--head-font)',
};

const trendingCardImageStyle = {
  maxWidth: '150px',
  bordeRadius: '0 5% 5% 0',
  margin: '0',
  objectFit: 'fill',
};

const trendingCardContentStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '150px',
  gap: '0',
  padding: '5px',
};

const trendingCardTitleStyle = {
  fontFamily: 'var(--head-font)',
  fontSize: 'medium',
  fontWeight: 'bold',
  marginTop: '10px',
};
const trendingCardAuthorStyle = {
  color: 'var(--secondary)',
  fontFamily: 'var(--text-font)',
  fontSize: 'small',
  margin: '10px',
};

const trendingCardDescriptionStyle = {
  fontSize: 'small',
  fontFamily: 'var(--text-font)',
};

export {
  trendingCardStyle,
  trendingCardImageStyle,
  trendingCardContentStyle,
  trendingCardTitleStyle,
  trendingCardDescriptionStyle,
  trendingCardAuthorStyle,
};

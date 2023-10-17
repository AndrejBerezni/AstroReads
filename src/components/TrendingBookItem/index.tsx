import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { IBookTrending } from '../../pages/Trending';
import AnimationTrendingBook from '../animation/AnimationTrendingBook';
import {
  trendingCardStyle,
  trendingCardImageStyle,
  trendingCardContentStyle,
  trendingCardTitleStyle,
  trendingCardDescriptionStyle,
  trendingCardAuthorStyle,
} from '../../MUIstyles/trending';

interface ITrendingBookItemProps {
  book: IBookTrending;
}

function TrendingBookItem({ book }: Readonly<ITrendingBookItemProps>) {
  return (
    <AnimationTrendingBook delay={book.rank}>
      <Badge
        badgeContent={book.rank}
        color="primary"
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Card sx={trendingCardStyle}>
          <CardContent sx={trendingCardContentStyle}>
            <Typography
              variant="h5"
              color="primary"
              sx={trendingCardTitleStyle}
            >
              {book.title}
            </Typography>
            <Typography variant="h6" sx={trendingCardAuthorStyle}>
              {book.author}
            </Typography>
            <Typography
              variant="body1"
              sx={trendingCardDescriptionStyle}
              color="primary"
            >
              {book.description}
            </Typography>
            <Button
              variant="contained"
              href={book.buyLink}
              target="_blank"
              sx={{ margin: '10px' }}
            >
              Buy
            </Button>
          </CardContent>
          <CardMedia
            component="img"
            sx={trendingCardImageStyle}
            src={book.image}
            alt={book.title}
          />
        </Card>
      </Badge>
    </AnimationTrendingBook>
  );
}

export default TrendingBookItem;

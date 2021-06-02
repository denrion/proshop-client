import React from 'react';

interface RatingProps {
  value: number;
  text?: string;
  color?: string;
}

const RATINGS = [0, 1, 2, 3, 4];
const DEFAULT_STAR_COLOR = '#f8e825';

export const Rating: React.FC<RatingProps> = (props) => {
  const { value, text, color = DEFAULT_STAR_COLOR } = props;

  const getRatingClasses = (value: number, rating: number) => {
    if (value >= rating + 1) {
      return 'fas fa-star';
    }

    if (value >= rating + 0.5) {
      return 'fas fa-star-half-alt';
    }

    return 'far fa-star';
  };

  const ratingStars = RATINGS.map((rating, index) => (
    <span key={index}>
      <i style={{ color }} className={getRatingClasses(value, rating)}></i>
    </span>
  ));

  return (
    <div className='rating'>
      {ratingStars}
      {text && <span>{text}</span>}
    </div>
  );
};

Rating.defaultProps = {
  color: DEFAULT_STAR_COLOR,
};

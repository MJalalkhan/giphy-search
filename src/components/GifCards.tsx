import React, { FC, memo } from 'react';
import Card from '@mui/material/Card';

interface GifCardsProps {
  id: string;
  item: {
    images: {
      original: {
        url: string;
      };
    };
  };
}

const GifCards: FC<GifCardsProps> = ({ id, item }) => {
  return (
    <>
      <Card sx={{ maxWidth: 260, margin: 1 }}>
        <div className="image-wrapper">
          <img
            id={id}
            className="image-gif"
            src={item?.images?.original?.url}
            alt="images"
          />
        </div>
      </Card>
    </>
  );
};

export default memo(GifCards);

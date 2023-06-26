import React,{memo} from 'react';

import Card from "@mui/material/Card";
const GifCards = ({id,item}) => {
  return (
    <>
      <Card sx={{ maxWidth: 260,margin: 1 }}>
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
